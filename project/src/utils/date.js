import dayjs from 'dayjs';

const getFormatDate = (date, format) => dayjs(date).format(format);
const getDiffDate = (a, b) => dayjs(a).diff(dayjs(b));

export {getFormatDate, getDiffDate};
