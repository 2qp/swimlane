import { hasKey } from "@/utils/hasKey";
import { initBoards } from "@/utils/init-boards";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import type { Board } from "@/types/board";

type MoveTaskParams = {
  boardUid: string;
  fromLaneUid: string;
  toLaneUid: string;
  taskUid: string;
  toIndex?: number;
};

type SwimlaneStore = {
  boards: Record<string, Board>;
  boardOrder: string[];

  addBoard: (board: Board) => void;
  updateBoard: (uid: string, data: Partial<Board>) => void;
  removeBoard: (uid: string) => void;

  getFilteredBoard: (uid: string, query: string) => Board | undefined;

  initBoards: (boards: Board[]) => void;

  moveTask: (params: MoveTaskParams) => void;
};

const useLaneStore = create<SwimlaneStore>()(
  persist(
    devtools((set, get) => ({
      //
      initBoards: (boards) => {
        const result = initBoards({ boards });

        set({ boards: result.boards, boardOrder: result.order });
      },

      //
      addBoard: (board) => {
        const prev = get().boards;
        const key = board.uid;

        const does = hasKey(prev, key);

        if (!does) {
          set((state) => ({
            boards: { ...state.boards, [board.uid]: board },
            boardOrder: state.boardOrder?.includes(board.uid)
              ? state.boardOrder
              : [...(state.boardOrder || []), board.uid],
          }));

          return;
        }
      },

      //
      updateBoard: (uid, data) =>
        set((state) => ({
          boards: {
            ...state.boards,
            [uid]: { ...state.boards[uid], ...data },
          },
        })),

      //
      removeBoard: (uid) =>
        set((state) => {
          const { [uid]: _, ...rest } = state.boards;
          return {
            boards: rest,
            boardOrder: state.boardOrder.filter((id) => id !== uid),
          };
        }),

      //
      getFilteredBoard: (uid, query) => {
        const board = get().boards?.[uid];

        if (!board) return undefined;

        //
        return {
          ...board,
          lanes: board.lanes.map((lane) => ({
            ...lane,
            tasks: lane.tasks.filter(
              (task) =>
                task.name.toLowerCase().includes(query) ||
                task.title.toLowerCase().includes(query)
            ),
          })),
        };
      },

      //
      moveTask: ({ boardUid, fromLaneUid, toLaneUid, taskUid, toIndex }) => {
        set((state) => {
          const board = state.boards[boardUid];
          if (!board) return {}; // guard: board must exist

          // Clone lanes and tasks immutably
          const lanes = board.lanes.map((lane) => ({
            ...lane,
            tasks: [...lane.tasks],
          }));

          const fromLane = lanes.find((lane) => lane.uid === fromLaneUid);
          if (!fromLane) return {}; // guard: source lane exists

          const toLane = lanes.find((lane) => lane.uid === toLaneUid);
          if (!toLane) return {}; // guard: target lane exists

          const taskIndex = fromLane.tasks.findIndex(
            (task) => task.uid === taskUid
          );
          if (taskIndex === -1) return {}; // guard: task found in source lane

          // Remove the task from source lane
          const [task] = fromLane.tasks.splice(taskIndex, 1);

          // Insert task at toIndex or push at end with guard clause
          if (
            toIndex === undefined ||
            toIndex < 0 ||
            toIndex > toLane.tasks.length
          ) {
            toLane.tasks.push(task);
            return {
              boards: {
                ...state.boards,
                [boardUid]: {
                  ...board,
                  lanes,
                },
              },
            };
          }

          toLane.tasks.splice(toIndex, 0, task);

          return {
            boards: {
              ...state.boards,
              [boardUid]: {
                ...board,
                lanes,
              },
            },
          };
        });
      },
      //
    })),
    //
    {
      name: "lane-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export { useLaneStore };
