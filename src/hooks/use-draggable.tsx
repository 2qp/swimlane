import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter";
import { useEffect, useRef } from "react";

import type { Task } from "@/types/task";

type DragMeta = {
  laneId: string;
  cardId: Task["uid"];
};

type UseDraggableProps = {
  getData: () => DragMeta;
};

type UseDraggableType = <T extends HTMLElement>(
  props: UseDraggableProps
) => React.RefObject<T | null>;

const useDraggable: UseDraggableType = <T extends HTMLElement>({
  getData,
}: UseDraggableProps) => {
  //

  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;

    const cleanup = draggable({
      element: ref.current,
      getInitialData: getData,
    });
    return cleanup;
  }, [getData]);

  return ref;
};

export { useDraggable };
export type { UseDraggableProps, UseDraggableType };
