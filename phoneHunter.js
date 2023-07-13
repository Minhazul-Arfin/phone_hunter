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
        </div>
        `;
        phoneContainer.appendChild(phoneDiv);

    });
}


document.getElementById('btn-search').addEventListener('click', function(){
    // console.log("search button pressed")
    const searchText = document.getElementById('inputSearchText');
   console.log(searchText.value)
    loadSearchData(searchText.value)
})

const loadSearchData = searchText =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const displaySearchValue = data =>{

}


loadData();