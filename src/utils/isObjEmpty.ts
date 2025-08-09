function isRecordNotEmpty<T>(record: Record<string, T>): boolean {
  for (const key in record) {
    if (record.hasOwnProperty(key)) {
      return true;
    }
  }
  return false;
}

export { isRecordNotEmpty };
