export function formatPrice(amount: number) {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formatter.format(amount);
}

export function formatNumber(number: number, decimal: number = 12) {
  return parseFloat(number.toFixed(decimal)).toLocaleString(
    "en",
    {
      useGrouping: true,
    }
  );


  // return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
