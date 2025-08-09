const COLOR_MAP = {
  red: "bg-red-500 text-white",
  green: "bg-green-500 text-white",
  blue: "bg-blue-500 text-white",
  yellow: "bg-yellow-400 text-black",
  gray: "bg-neutral-6",
  "task-lime-green": "bg-task-lime-green text-black",
  "task-yellow": "bg-task-yellow text-black",
  "task-red": "bg-task-red text-black",
  // fallback
  default: "bg-gray-300 text-black",
} as const;

type ColorMap = keyof typeof COLOR_MAP | (string & {});

export { COLOR_MAP };
export type { ColorMap };
