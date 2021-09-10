export const fetchMedicines = async () => {
  const response = await fetch('/api/user/medicines');

  return await response.json();
};
