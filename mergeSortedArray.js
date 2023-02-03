const merge = (nums1, nums2) => {
  const mergedList = [...nums1, ...nums2];

  for (let i = 1; i < mergedList.length; i++) {
    let j;
    let numberToInsert = mergedList[i];
    for (j = i - 1; mergedList[j] > numberToInsert && j >= 0; j--) {
      mergedList[j + 1] = mergedList[j];
    }
    mergedList[j + 1] = numberToInsert;
  }

  return mergedList.filter((el) => el);
};
console.log(merge([1, 2, 3, 0, 0, 0], [2, 5, 6]));
