const RATES = {
  usd: 0.002242,
  eur: 0.002071,
};
function convert({ kzt, currency }) {
  if (!RATES[currency]) {
    return null;
  }
  return kzt * RATES[currency];
}
