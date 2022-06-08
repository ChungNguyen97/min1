export const handlFormatPrice = (value = 0) => {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "USD",
  }).format(value);
}



