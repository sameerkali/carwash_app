import dayjs from 'dayjs';

export function formatDate(date: string | number | Date): string {
  return dayjs(date).format('MMM D, YYYY');
}

export function formatDateTime(date: string | number | Date): string {
  return dayjs(date).format('MMM D, YYYY h:mm A');
}

export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
