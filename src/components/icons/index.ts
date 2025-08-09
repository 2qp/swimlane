import { BellIcon } from "./bell";
import { CalendarIcon } from "./calendar";
import { FolderIcon } from "./folder";
import { GridIcon } from "./grid";
import { InfoIcon } from "./info";
import { LogOutIcon } from "./logout";
import { RemarkIcon } from "./remark";
import { TeamIcon } from "./team";

const iconMap = {
  grid: GridIcon,
  folder: FolderIcon,
  remark: RemarkIcon,
  calendar: CalendarIcon,
  team: TeamIcon,
  info: InfoIcon,
  logout: LogOutIcon,
  bell: BellIcon,
} as const;

type IconMap = keyof typeof iconMap;

export { iconMap };

export type { IconMap };
