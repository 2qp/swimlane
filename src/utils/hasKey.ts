function hasKey<T>(
  record: Record<string, T> | null | undefined,
  key: string
): boolean {
  if (record == null) return false; // handles null and undefined
  return Object.prototype.hasOwnProperty.call(record, key);
}

export { hasKey };
