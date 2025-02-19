export const getFullDate = (date?: string): string => {
  const data = new Date(date || "");
  const dd =
    data.getDate() > 0 && data.getDate() < 10
      ? `0${data.getDate()}`
      : data.getDate();
  const mm =
    data.getMonth() > 0 && data.getMonth() < 10
      ? `0${data.getMonth()}`
      : data.getMonth();
  const yyyy = data.getFullYear();
  return `${dd}.${mm}.${yyyy}`;
};
