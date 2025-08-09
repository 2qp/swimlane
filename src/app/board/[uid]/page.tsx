import { BoardHeader } from "@/components/molecules/board-header";
import { fetchBoard } from "@/features/lanes/api";
import { LaneStage } from "@/features/lanes/components/lane-stage";

export default async function Page({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;

  //
  const data = await fetchBoard({ uid: "board-main" });

  //
  return (
    <div>
      <BoardHeader board={data} />
      <LaneStage board={data} query="" uid={uid} />;
    </div>
  );
}
