export const displayDate = (date: string) => {
  let splittedDate = date.split('-'); // splitting YYYY-DD-MM, to [YYYY, MM, DD]

  return `${splittedDate[2]}/${splittedDate[1]}/${splittedDate[0]}`;
};
