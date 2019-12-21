export const composeReview = (review) => {
    return (
        $.ajax ({
            method: 'post',
            url: 'api/reviews',
            data: {review}
        })
    );
};

export const fetchReviews = () => {
    return (
        $.ajax ({
            method: 'get',
            url: 'a[i/reviews',
        })
    );
};