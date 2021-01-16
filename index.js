window.mockApiUrl = "https://5ff1a861db1158001748b3bf.mockapi.io/pets/";
//5ff1a861db1158001748b3bf
//DELETE pets
window.removePet = (id) => {
    console.log(id) // remove the pet with given id
fetch(`${window.mockApiUrl}${id}`, {
            method: "DELETE",
           // body: data,
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json'
  }
}
).then(() => {window.location.reload(true) });

}

//Bootstrap modal
window.modalPet = (pet) => {
 
 return `<div class="modal" id="${pet.id}" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Details</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h3>${pet.name}</h3>
        <img src="${pet.image}">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>`;
};

//DETAİL pets
window.openPetDetail = (id) => {
    console.log(id); // show details of the pet with given id
fetch(`${window.mockApiUrl}${id}`, {
            method: "GET",
            //body: data,
            headers: {
                'Accept': "application/json, text/plain, */*",
                'Content-Type': 'application/json'
  }
}).then(response=>response.json()).then((pet)=>{
 const petsHTML= modalPet(pet);
 console.log(pet.name);
 document.querySelector("body").innerHTML +=petsHTML;
 $(`#${pet.id}`).modal('show');
});

};