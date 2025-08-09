import type { Board } from "@/types/board";

type FetchBoardParams = {
  uid: string;
};

type FetchBoardType = (params: FetchBoardParams) => Promise<Board | undefined>;

const fetchBoard: FetchBoardType = async ({ uid }) => {
  const res = await fetch("http://localhost:3000/data/boards.json", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch boards");

  const boards: Board[] = await res.json();
  const board = boards.find((b) => b.uid === uid);

  return board;
};

export { fetchBoard };
export type { FetchBoardParams, FetchBoardType };
