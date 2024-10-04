export const dynamicFilter = <T>(filter: Partial<T>, data: T[]): T[] => {
  let newData: T[] = [];

  Object.keys(filter).forEach((key) => {
    // In the first iteration, if key = "name", then filter[key as keyof T] will be VALUE of filter["name"].
    if (filter[key as keyof T] !== null) {
      newData = data.filter((d: T) => {
        return String(d[key as keyof T])
          .toLowerCase()
          .includes(String(filter[key as keyof T]).toLowerCase());
      });
    }
  });

  return newData;
};
