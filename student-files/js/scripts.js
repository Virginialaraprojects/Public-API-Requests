
//Global Variables
const urlAPI='https://randomuser.me/api/?results=12&inc=name,picture,email,cell,dob,location,&noinfo&nat=US'
let employees= [];
const gallery= document.getElementById('gallery');


/****** Fetch Function *******/
fetch(urlAPI)
.then(response => response.json())
.then(response=> response.results)
.then(startupEmployees)
.catch(error => alert('Sorry, something went wrong!'))


/****** Helper Function to display employee info ******/
function startupEmployees(employeesData){
    employees= employeesData;
//store the employee info
   let galleryHTML= '';
// loop through each employee info
    employees.forEach((employee,index)=> {
        let name =employee.name;
        let email=employee.email;
        let city= employee.location.city;
        let state= employee.location.state;
        let picture= employee.picture;


//Template literal to display the employees information in the index.html
 galleryHTML+=
 `<div class="card" data-index="${index}">
    <div class="card-img-container">
        <img class="card-img" src="${picture.large}" alt="profile picture">
    </div>

    <div class="card-info-container">
        <h3 id="name" class="card-name cap">${name.first} ${name.last}</h3>
        <p class="card-text">${email}</p>
        <p class="card-text cap">${city}, ${state}</p>
    </div>
    </div>
    `;
});
//attaches the employee info to the screen
gallery.insertAdjacentHTML('beforeend', galleryHTML);

};


/****** Modal ******/
//Display modal using an event listener when an employee click
gallery.addEventListener('click', e =>{
    const card =e.target.closest('.card');
    const index=card.getAttribute('data-index');
    const currentmodal=index;
    modal(currentmodal);
   
});

function modal(index){

    let{name, dob, email, cell, location:{city,street,state,postcode}, picture}= employees[index];
    let date= new Date(dob.date);

let modalHTML=
`<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
    <div class="modal-info-container">
        <img class="modal-img" src=${picture.large} alt="profile picture">
        <h3 id="name" class="modal-name cap">${name.first} ${name.last}</h3>
        <p class="modal-text">${email}</p>
        <p class="modal-text cap">${city}</p>

        <hr>
        
        <p class="modal-text">${cell}</p>
        <p class="modal-text">${street.number} ${street.name}, ${city}, ${state} ${postcode}</p>
        <p class="modal-text">Birthday: ${date.getMonth()}/${date.getDate()}/${date.getFullYear()}</p>
    </div>
</div>
`;
//attaches the employee info to the modal pop-up
document.body.insertAdjacentHTML('beforeend', modalHTML);


const modalBtn= document.getElementById('modal-close-btn');

// Close the modal using in eventlistener when click 
modalBtn.addEventListener('click', ()=>{
    document.body.removeChild(document.body.lastElementChild);
   
    
});

}

























