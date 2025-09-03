import { BoardHeader } from "@/components/molecules/board-header";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchBoard } from "@/features/lanes/api";
import { LaneStage } from "@/features/lanes/components/lane-stage";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;

  //
  const data = fetchBoard({ uid });

  //
  return (
    <div>
      <BoardHeader board={data} />

      <Suspense fallback={<Skeleton className="h-[60px] w-full flex " />}>
        <LaneStage board={data} query="" uid={uid} />
      </Suspense>
    </div>
  );
}
