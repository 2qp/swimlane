import dynamic from "next/dynamic";

type IconName =
  | "grid"
  | "folder"
  | "remark"
  | "calendar"
  | "team"
  | "info"
  | "logout"
  | "bell";

const iconMap = {
  grid: dynamic(() => import("./grid").then((mod) => mod.GridIcon)),
  folder: dynamic(() => import("./folder").then((mod) => mod.FolderIcon)),
  remark: dynamic(() => import("./remark").then((mod) => mod.RemarkIcon)),
  calendar: dynamic(() => import("./calendar").then((mod) => mod.CalendarIcon)),
  team: dynamic(() => import("./team").then((mod) => mod.TeamIcon)),
  info: dynamic(() => import("./info").then((mod) => mod.InfoIcon)),
  logout: dynamic(() => import("./logout").then((mod) => mod.LogOutIcon)),
  bell: dynamic(() => import("./bell").then((mod) => mod.BellIcon)),
};

export { iconMap };
export type { IconName };
