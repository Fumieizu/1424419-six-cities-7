const MAX_PERCENTAGE = 100;
const MAX_RATING = 5;

const getRatingPercentage = (rating) => rating * MAX_PERCENTAGE / MAX_RATING;

export {getRatingPercentage};
