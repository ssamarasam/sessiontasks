



function addTotable() {
    
    let firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const address = document.getElementById("inputAddress").value;
    const state = document.getElementById("inputState").value;
    const country = document.getElementById("inputCountry").value;
    const pincode = document.getElementById("inputPincode").value;
    const gender = document.getElementById("inputGender").value;
    const foodChoices = document.getElementsByClassName("form-check-input");
    const checkboxError = document.getElementById('checkbox-error');
    const form = document.getElementById('form');

    let foodList = [];
    for(let i=0; i<foodChoices.length; i++) {

        if(foodChoices[i].checked) {
            foodList.push(foodChoices[i].value)
        }
        
    }
    if(foodList.length < 2) {
        checkboxError.innerHTML = 'Atleast two items must be selected';
        checkboxError.style.color = 'red';
    } else {
        checkboxError.innerHTML = '';
        let foodChoicesList = foodList.join(", ");
  
        const tableElement = document.getElementById("table");
        const trElement = document.createElement('tr');
        const tbodyELement = document.createElement('tbody');
        let fnameElement = document.createElement('td');
        let lnameElement = document.createElement('td');
        let addressElement = document.createElement('td');
        let stateElement = document.createElement('td');
        let countryElement = document.createElement('td');
        let pincodeElement = document.createElement('td');
        let genderElement = document.createElement('td');
        let foodElement = document.createElement('td');
    
        fnameElement.innerHTML = firstName;
        lnameElement.innerHTML = lastName;
        genderElement.innerHTML = gender;
        addressElement.innerHTML = address;
        stateElement.innerHTML = state;
        countryElement.innerHTML = country;
        pincodeElement.innerHTML = pincode;
        foodElement.innerHTML = foodChoicesList;
    
        trElement.appendChild(fnameElement);
        trElement.appendChild(lnameElement);
        trElement.appendChild(addressElement);
        trElement.appendChild(stateElement);
        trElement.appendChild(countryElement);
        trElement.appendChild(pincodeElement);
        trElement.appendChild(genderElement);
        trElement.appendChild(foodElement);
        tbodyELement.appendChild(trElement);
        tableElement.appendChild(tbodyELement);

        // clear the form after successful submit
        form.reset();

    }
    
}

