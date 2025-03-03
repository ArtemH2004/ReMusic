export const getFullDate = (date?: string): string => {
  const data = new Date(date || "");
  const dd =
    data.getDate() > 0 && data.getDate() < 10
      ? `0${data.getDate()}`
      : data.getDate();
  const mm =
    data.getMonth() + 1 > 0 && data.getMonth() + 1 < 10
      ? `0${data.getMonth() + 1}`
      : data.getMonth() + 1;
  const yyyy = data.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};
