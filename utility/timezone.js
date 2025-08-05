export function getLimaISOString() {
  const now = new Date();
  // Adjusting the time to Lima's timezone (UTC-5)
  now.setHours(now.getHours() - 5);
  return now.toISOString();
}