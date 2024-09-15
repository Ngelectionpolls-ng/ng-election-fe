// Utility function to handle date formatting
export const dateHandler = (dateStr: string | undefined, pathname?: string | undefined) => {
  if (dateStr === undefined) return null;

  const date = new Date(dateStr);

  // Adjust for UTC+1 timezone
  const currentDate = new Date();
  const utcOffsetMinutes = 60; // UTC+1 is 60 minutes ahead of UTC
  const currentDateUTC1 = new Date(currentDate.getTime() + utcOffsetMinutes * 60 * 1000);

  const timeDifference = currentDateUTC1.getTime() - date.getTime();
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return 'Today';
  } else if (daysDifference === 1) {
    return 'Yesterday';
  } else {
    // Format date for dates beyond yesterday
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(undefined, options);
  }
};
