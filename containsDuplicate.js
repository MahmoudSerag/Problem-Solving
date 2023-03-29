var containsDuplicate = (nums) => {
  let duplicated = {};

  nums.forEach((el) => {
    if (!duplicated[el]) duplicated[el] = el;
    else return true;
    console.log(duplicated[el]);
  });

  return false;
};
console.log(containsDuplicate([0, 4, 5, 0, 3, 6]));
