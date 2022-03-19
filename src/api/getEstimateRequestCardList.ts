export default function getEstimateRequestCardList() {
  return fetch("http://localhost:4000/requests").then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json();
  });
}
