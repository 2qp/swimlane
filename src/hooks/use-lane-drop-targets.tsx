import { dropTargetForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect } from "react";

import type { Lane } from "@/types/lane";

type UseLaneDropTargetsProps = {
  lanes: Lane[];
  containerRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
  onDropCard: (fromLaneId: string, toLaneId: string, cardId: string) => void;
};

type UseLaneDropTargetsType = (props: UseLaneDropTargetsProps) => void;

const useLaneDropTargets: UseLaneDropTargetsType = ({
  lanes,
  containerRefs,
  onDropCard,
}) => {
  //

  // useEffect(() => {
  //   lanes.forEach((lane) => {
  //     const element = containerRefs.current[lane.uid];
  //     if (!element) return;

  //     dropTargetForElements({
  //       element,
  //       getData: () => ({ laneId: lane.uid }),
  //       canDrop: () => true,
  //       onDrop: ({ source }) => {
  //         const cardId = source?.data?.cardId + "";
  //         const fromLaneId = source?.data?.laneId + "";
  //         const toLaneId = lane.uid;

  //         if (!cardId || !fromLaneId || fromLaneId === toLaneId) return;

  //         onDropCard(fromLaneId, toLaneId, cardId);
  //       },
  //     });
  //   });
  // }, [lanes, containerRefs, onDropCard]);

  useEffect(() => {
    //
    const cleanups: Array<() => void> = [];

    lanes.forEach((lane) => {
      const element = containerRefs.current[lane.uid];
      if (!element) return;

      const cleanup = dropTargetForElements({
        element,
        getData: () => ({ laneId: lane.uid }),
        canDrop: () => true,
        onDrop: ({ source }) => {
          const cardId = String(source?.data?.cardId);
          const fromLaneId = String(source?.data?.laneId);
          const toLaneId = lane.uid;

          if (!cardId || !fromLaneId || fromLaneId === toLaneId) return;

          onDropCard(fromLaneId, toLaneId, cardId);
        },
      });

      cleanups.push(cleanup);
    });

    //
    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, [lanes, containerRefs, onDropCard]);
};

export { useLaneDropTargets };
export type { UseLaneDropTargetsProps, UseLaneDropTargetsType };
