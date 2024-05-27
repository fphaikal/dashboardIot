export default defineEventHandler(async (event) => {
  const res = await fetch(`http://server-dashboard-iot.vercel.app/api/data`);
  const data = await res.json();
  return data;
});
