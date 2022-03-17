export default async function getEstimateRequestCardList() {
  const response = await fetch("http://localhost:4000/requests");
  return response;
}
