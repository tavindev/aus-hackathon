export const fetchExams = async () => {
  const response = await fetch('/api/user/exams');

  return await response.json();
};
