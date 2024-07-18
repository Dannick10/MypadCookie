export default function ConvertCoins(val) {
  let convert = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  return convert.format(val);
}
