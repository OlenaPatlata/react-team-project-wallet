function numberWithSpaces(nr) {
  return nr.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default function normalizeAmount(amount) {
  const splittedAmount = numberWithSpaces(amount);
  if (Number.isInteger(amount)) {
    return splittedAmount.concat(".00");
  } else {
    return splittedAmount;
  }
}
