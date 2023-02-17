import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export function newConvertDate(date: string) {
  const convertedValue = dayjs(date).fromNow();
  return convertedValue;
}
