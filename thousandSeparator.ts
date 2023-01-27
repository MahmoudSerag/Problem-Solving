const thousandSeparator = (n: number): string => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

console.log(thousandSeparator(12345));