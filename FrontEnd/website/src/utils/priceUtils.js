export function PriceDropPercentage(price, priceDropped) {
  if (price <= 0 || priceDropped <= 0) {
    return 0;
  }

  const drop = price - priceDropped;
  return (drop / price) * 100;
}
