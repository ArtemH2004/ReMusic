import { ReviewStatistics } from "@/store/reducers/review/types";

export const getSumReviewStatistic = (review: ReviewStatistics): number => {
    let count = 5;
    let sum = 0;
    if (!!review.rhymes) {
        sum += review.rhymes;
    }
    if (!!review.rhythm) {
        sum += review.rhythm;
    }
    if (!!review.styles) {
        sum += review.styles;
    }
    if (!!review.individuality) {
        sum += review.individuality;
    }
    if (!!review.atmosphere) {
        sum += review.atmosphere;
    }

    return Math.round(sum / count * 10);
}