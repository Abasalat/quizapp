// Function to fetch data from the API
async function fetchData() {
  try {
    const response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    );
    const data = await response.json();
    return data.results; // Assuming the relevant data is in the 'results' property
  } catch (error) {
    console.error("Error fetching data:", error);
    return []; // Return an empty array in case of an error
  }
}

// Function to convert API data to an array of objects
function convertToObjectsArray(apiData) {
  if (!apiData || !Array.isArray(apiData)) {
    console.error("Invalid or missing API data.");
    return [];
  }

  return apiData.map((question, index) => ({
    id: index + 1,
    question: question.question,
    options: [question.correct_answer, ...question.incorrect_answers],
  }));
}

// Export an asynchronous function that fetches and converts data
export const fetchDataAndConvert = async () => {
  const apiData = await fetchData();
  const formattedData = convertToObjectsArray(apiData);
  return formattedData;
};
