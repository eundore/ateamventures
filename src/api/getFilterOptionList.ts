export default async function getFilterOptionList() {
  return fetch("http://localhost:4000/filterOptions").then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
