import type { Board } from "@/types/board";

type InitBoardsParams = {
  boards: Board[];
};

type InitBoardsType = (params: InitBoardsParams) => {
  boards: Record<string, Board>;
  order: string[];
};

const initBoards: InitBoardsType = ({ boards }) => {
  console.log("initBoards");
  const boardMap = boards.reduce(
    (acc, board) => ({
      ...acc,
      [board.uid]: board,
    }),
    {}
  );

  const boardOrder = boards.map((board) => board.uid);

  return { boards: boardMap, order: boardOrder };
};

export { initBoards };
export type { InitBoardsParams, InitBoardsType };
