import { parseISO } from "date-fns";
import format from "date-fns/format";
// import format from 'date-fns/format'
export default function Date({ dateString }) {
  // new Date(Date.parse("2019-06-15T00:00:00"));
  const date = parseISO(dateString);
  // console.log("date", date);
  // console.log("dateString", dateString);
  return <time dateTime={dateString}>{format(date, "yyyy-mm-dd")}</time>;
}
