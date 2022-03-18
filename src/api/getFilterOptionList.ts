export default async function getFilterOptionList() {
  const response = await fetch("http://localhost:4000/filterOptions");
  return response;
}
