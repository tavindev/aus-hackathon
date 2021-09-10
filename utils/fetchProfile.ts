export const fetchProfile = async () => {
  const response = await fetch('/api/user');

  return await response.json();
};
