import dayjs from 'dayjs';

const getFormatDate = (date, format) => dayjs(date).format(format);
const diffDate = (a, b) => dayjs(a).diff(dayjs(b));

export {getFormatDate, diffDate};
