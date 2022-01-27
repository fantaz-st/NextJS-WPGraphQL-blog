export const truncateString = (str, num) => {
  if (num > str.length) {
    return str;
  } else {
    str = str.substring(0, num);
    return str + '...';
  }
};

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
const weekdayOptions = { weekday: 'short' };

export const postDate = (date) => {
  const dateNow = new Date(date);

  const displayDate = dateNow.toLocaleDateString('hr-HR', dateOptions);
  const weekday = dateNow.toLocaleDateString('hr-HR', weekdayOptions);

  const displayWeekday = weekday[0].toUpperCase() + weekday.substring(1);
  return { displayDate, displayWeekday };
};

export const authorNameSurname = (author) => {
  if (author.node.firstName && author.node.lastName) {
    return `${author.node.firstName} ${author.node.lastName}`;
  } else {
    return author.node.name;
  }
};
