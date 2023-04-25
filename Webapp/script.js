// JavaScript code for handling CRUD operations and SQL queries

// Customer CRUD operations functions
function createCustomer() {
            // Define the URL for the API endpoint that will handle the request
        const url = '/api/customers';

        // Define the data to be sent in the request body
        const data = {
            First_Name: 'John',
            Last_Name: 'Doe',
            Email: 'johndoe@example.com',
            Phone_Number: '555-555-1212',
            Address: '123 Main St'
        };

        // Define the request options, including the HTTP method and headers
        const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        };

        // Use the fetch API to send the request and handle the response
        fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

  }
  
  function readCustomer() {
    const url = 'http://127.0.0.1:5000/customers';
        fetch(url)
        .then(response => response.json())
        .then(customers => {
            customers.forEach(customer => {
                const customerDiv = document.createElement('div');
                customerDiv.classList.add('customer');
          
                const nameHeading = document.createElement('h2');
                nameHeading.textContent = `${customer[1]} ${customer[2]}`;
                customerDiv.appendChild(nameHeading);
          
                const emailParagraph = document.createElement('p');
                emailParagraph.textContent = customer[3];
                customerDiv.appendChild(emailParagraph);
          
                const phoneParagraph = document.createElement('p');
                phoneParagraph.textContent = customer[4];
                customerDiv.appendChild(phoneParagraph);
          
                const addressParagraph = document.createElement('p');
                addressParagraph.textContent = customer[5];
                customerDiv.appendChild(addressParagraph);
          
                // const image = document.createElement('img');
                // image.src = './images/customer.png';
                // image.height = "50px";
                // image.width = "50px";
                // customerDiv.appendChild(image);
                customerContainer.appendChild(customerDiv);
            });
        })
        .catch(error => {
        // Handle any errors that occur during the request
            console.error(error);
        });
  }
  
  function getBikes() {
    const url = 'http://127.0.0.1:5000/FetchBikes';
    fetch(url)
    .then(response => response.json())
    .then(customers => {
        customers.forEach(customer => {
            const customerDiv = document.createElement('div');
            customerDiv.classList.add('customer');
      
            const nameHeading = document.createElement('h2');
            nameHeading.textContent = `${customer[1]} ${customer[2]}`;
            customerDiv.appendChild(nameHeading);
      
            const emailParagraph = document.createElement('p');
            emailParagraph.textContent = customer[3];
            customerDiv.appendChild(emailParagraph);
      
            const phoneParagraph = document.createElement('p');
            phoneParagraph.textContent = customer[4];
            customerDiv.appendChild(phoneParagraph);
      
            const addressParagraph = document.createElement('p');
            addressParagraph.textContent = customer[5];
            customerDiv.appendChild(addressParagraph);
      
            // const image = document.createElement('img');
            // image.src = './images/customer.png';
            // image.height = "50px";
            // image.width = "50px";
            // customerDiv.appendChild(image);
            bikeContainer.appendChild(customerDiv);
        });
    })
    .catch(error => {
    // Handle any errors that occur during the request
        console.error(error);
    });
  }
  
  function getRentals() {
    const url = 'http://127.0.0.1:5000/GetRentals';
    fetch(url)
    .then(response => response.json())
    .then(customers => {
        customers.forEach(customer => {
            const customerDiv = document.createElement('div');
            customerDiv.classList.add('customer');
      
            const nameHeading = document.createElement('h2');
            nameHeading.textContent = `${customer[1]} ${customer[2]}`;
            customerDiv.appendChild(nameHeading);
      
            const emailParagraph = document.createElement('p');
            emailParagraph.textContent = customer[3];
            customerDiv.appendChild(emailParagraph);
      
            const phoneParagraph = document.createElement('p');
            phoneParagraph.textContent = customer[4];
            customerDiv.appendChild(phoneParagraph);
      
            const addressParagraph = document.createElement('p');
            addressParagraph.textContent = customer[5];
            customerDiv.appendChild(addressParagraph);
      
            // const image = document.createElement('img');
            // image.src = './images/customer.png';
            // image.height = "50px";
            // image.width = "50px";
            // customerDiv.appendChild(image);
            rentalContainer.appendChild(customerDiv);
        });
    })
    .catch(error => {
    // Handle any errors that occur during the request
        console.error(error);
    });
  }
  
  // Bike CRUD operations functions
  function getEmployee() {
    const url = 'http://127.0.0.1:5000/Employees';
    fetch(url)
    .then(response => response.json())
    .then(customers => {
        customers.forEach(customer => {
            const customerDiv = document.createElement('div');
            customerDiv.classList.add('customer');
      
            const nameHeading = document.createElement('h2');
            nameHeading.textContent = `${customer[1]} ${customer[2]}`;
            customerDiv.appendChild(nameHeading);
      
            const emailParagraph = document.createElement('p');
            emailParagraph.textContent = customer[3];
            customerDiv.appendChild(emailParagraph);
      
            const phoneParagraph = document.createElement('p');
            phoneParagraph.textContent = customer[4];
            customerDiv.appendChild(phoneParagraph);
      
            const addressParagraph = document.createElement('p');
            addressParagraph.textContent = customer[5];
            customerDiv.appendChild(addressParagraph);
      
            // const image = document.createElement('img');
            // image.src = './images/customer.png';
            // image.height = "50px";
            // image.width = "50px";
            // customerDiv.appendChild(image);
            employeeContainer.appendChild(customerDiv);
        });
    })
    .catch(error => {
    // Handle any errors that occur during the request
        console.error(error);
    });
  }
  
  function addCustomer() {
        var customer_id = Number(document.getElementById("customer_id").value);
        var firstName = document.getElementById("first_name").value;
        var lastName = document.getElementById("last_name").value;
        var phoneNo = document.getElementById("phone_no").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        // Create customer object
        var customer = {
            customer_id,
            first_name: firstName,
            last_name: lastName,
            phone_no: phoneNo,
            address: address,
            email: email
        };

        fetch('http://127.0.0.1:5000/createCustomer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(customer)
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
          alert('Customer added successfully!');
        })
        .catch((error) => {
          console.error('Error:', error);
          alert('Error adding customer');
        });
  }
  
  function updateBike() {
    // Implement update bike operation
  }
  
  