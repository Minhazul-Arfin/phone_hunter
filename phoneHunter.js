const loadData = () => {
    const url = 'https://openapi.programming-hero.com/api/phones?search=iphone';
    fetch(url)
        .then(res => res.json())
        .then(data => displayPhone(data.data))
}

const displayPhone = data => {
    console.log(data);
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerHTML = ``;

    data.forEach(phone =>{
        const phoneDiv = document.createElement('div');
        phoneDiv.classList.add('col');
        
        phoneDiv.innerHTML = `
        <div class="card p-5 border border-2 border-dark">
            <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${phone.phone_name}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to
                additional content. This content is a little bit longer.</p>
            </div>
            <button onclick="loadDetails('${phone.slug}')" id="btn-details" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#detailsModal">Show Details</button>
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);

    });
}


document.getElementById('btn-search').addEventListener('click', function(){
    // console.log("search button pressed")
    const searchText = document.getElementById('inputSearchText');
    // console.log(searchText.value)
    loadSearchData(searchText.value)
})

const loadSearchData = searchText =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const loadDetails = searchResult =>{
    console.log(searchResult);
    const url = `https://openapi.programming-hero.com/api/phone/${searchResult}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => loadModal(data.data))
}

const loadModal = data =>{
    console.log(data);
    document.getElementById('modalTitle').innerText = data.name;
    document.getElementById('modalBody').innerHTML = `
    <img src="${data.image}" class="img-fluid">
    <p><span class="fw-bold">Brand:</span> ${data.brand}</p>
    <p><span class="fw-bold">Storage:</span> ${data.mainFeatures.storage}</p>
    <p><span class="fw-bold">Display Size:</span> ${data.mainFeatures.displaySize}</p>
    <p><span class="fw-bold">Memory:</span> ${data.mainFeatures.memory}</p>
    <p><span class="fw-bold">Sensors: </span>${data.mainFeatures.sensors}</p>
    <p><span class="fw-bold">Chip Set: </span>${data.mainFeatures.chipSet}</p>
    
    `;
}



loadData();