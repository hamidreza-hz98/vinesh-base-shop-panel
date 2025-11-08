import moment from "jalali-moment";

export function formatDateAndTime(date) {
  if (!date) return "";
  // Format: 17 شهریور 1404 - 14:30
  return moment(date).locale("fa").format("jDD jMMMM jYYYY - HH:mm");
}

export function toJalali(date) {
  if (!date) return "";
  // Format: 17 شهریور 1404
  return moment(date).locale("fa").format("jDD jMMMM jYYYY");
}
