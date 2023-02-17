import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "%s",
    past: "%s",
    s: "today",
    m: "today",
    mm: "today",
    h: "today",
    hh: "today",
    d: "yesterday",
    dd: "%d",
    M: "%d",
    MM: "%d",
    y: "%d",
    yy: "%d",
  },
});

export function ConvertDate(date: string | number) {
  const convertedDate = dayjs(date);
  return convertedDate.fromNow();
}

export function FormatDate(date: string | number) {
  let dateFormated = ConvertDate(date);

  if (dateFormated === "today") {
    dateFormated = dayjs(date).format("DD MMM");
  }

  if (dateFormated === "past") {
    dateFormated = dayjs(date).format("MM DD YYYY");
  }
  return dateFormated;
}
