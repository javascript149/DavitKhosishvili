function fetchApiData() {
    
    fetch("/api/about")
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            
            document.querySelector("h1").textContent = `Welcome to ${data.companyInfo.name}`;
            document.querySelector("p").textContent = data.companyInfo.description;

        })
        .catch(error => {
            console.error(`Fetch error: ${error.message}`);
        });
}
