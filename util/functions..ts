import moment from "moment";

// Define a function to parse the date string
function parseDate(dateStr: string): moment.Moment {
  const match = dateStr.match(
    /(\w+),\s*(\d+)(?:st|nd|rd|th)?(?:\s*\.)*\s*(\d+)/
  );

  if (match) {
    const month = match[1];
    const day = match[2];
    const year = match[3];
    const dateString = `${month} ${day}, ${year}`;
    return moment(dateString, "MMMM DD, YYYY");
  }

  return moment("January 1, 1900", "MMMM DD, YYYY");
}

export { parseDate };
