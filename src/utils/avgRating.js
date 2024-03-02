const calcAvgRating = (reviews) => {
  const toatalRating = reviews?.reduce((acc, item) => acc + item.rating, 0);
  const avgRating =
    toatalRating === 0
      ? ""
      : toatalRating === 1
      ? toatalRating
      : toatalRating / reviews?.length;
      return {
        toatalRating,
        avgRating
      }
};

export default calcAvgRating ;
