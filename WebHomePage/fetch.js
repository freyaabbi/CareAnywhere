fetch('http://localhost:5000/api/homepage')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Use this data to populate the homepage dynamically
  })
  .catch((error) => console.error('Error fetching homepage data:', error));
