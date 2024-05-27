export default defineEventHandler(async (event) => {
  const res = await fetch(`http://localhost:4000/api/data`);
  const data = await res.json();
  return data;
});
