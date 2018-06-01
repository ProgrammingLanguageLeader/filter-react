const fetchStoreData = async (filterData) => {
  const url = 'http://localhost:8000/filter';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(filterData)
  });
  const content = await response.json();
  return content;
};

export { fetchStoreData };