import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale("en", {
  relativeTime: {
    future: "%s",
    past: "%s",
    s: "Today",
    m: "Today",
    mm: "Today",
    h: "Today",
    hh: "Today",
    d: "Yestarday",
    dd: "%d ",
    M: "%d ",
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
    dateFormated = dayjs(date).format("HH:mm");
  }

  if (dateFormated === "past") {
    dateFormated = dayjs(date).format("MMM DD YYYY");
  }
  return dateFormated;
}
