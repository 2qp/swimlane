import { fetchBoard } from "@/features/lanes/api";

export default async function Page({
  params,
}: {
  params: Promise<{ uid: string }>;
}) {
  const { uid } = await params;

  //
  const data = await fetchBoard({ uid: "board-main" });

  //
  return <></>;
}
