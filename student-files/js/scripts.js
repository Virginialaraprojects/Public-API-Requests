//const urlAPI='https://randomuser.me/api/?results=12&inc=name,picture,email,location,&noinfo&nat=US'//

/****** Fetch Function *******/
fetch('https://randomuser.me/api/?results=12&inc=name,picture,email,location,&noinfo&nat=US')
.then(response => response.json())
.then(response=> response.results)
.then(startupEmployees)
.catch(error => console.log(error));


/****** Helper Function ******/
let employees=[];

function startupEmployees(employeesData){
    employees= employeesData;

    let galleryHTML= '';

    employees.forEach((employee,index)=> {
        let name =employee.name;
        let email=employee.email;
        let city= employee.location.city;
        let state= employee.location.state;
        let picture= employee.picture;
    


const gallery= document.getElementById('gallery');
// my need to update the variable for gallery, search container to let 
 galleryHTML+=
 `
 <div class="card" data-index="${index}">
 <div class="card-img-container">
 <img class="card-img" src="${picture.large}" alt="profile picture">
</div>

<div class="card-info-container">
<h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
<p class="card-text">${email}</p>
<p class="card-text cap">${city}, ${state}</p>
</div>`;
});
gallery.insertAdjacentHTML('beforeend', galleryHTML);

}



/*function startupEmployees(employeesData){

    employeesData.forEach((employee,index)=> {
        let name=employee.name
    


const gallery= document.getElementById('gallery');
// my need to update the variable for gallery, search container to let 
const galleryHTML=
    `<div class="card-img-container">
         <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
     </div>

    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${employee.name}</h3>
        <p class="card-text">email</p>
        <p class="card-text cap">city, state</p>
    </div>`;
});
gallery.insertAdjacentHTML('beforeend', galleryHTML);

}*/



/****** display search container ******/
/*const searchContainer= document.getElementsByClassName('search-container');
const searchContainerHTML=
`<form action="#" method="get">
    <input type="search" id="search-input" class="search-input" placeholder="Search...">
    <input type="submit" value="&#x1F50D;" id="search-submit" class="search-submit">
</form>`;
searchContainer.insertAdjacentHTML('beforeend', searchContainerHTML);/*