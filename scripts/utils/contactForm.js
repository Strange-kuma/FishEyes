function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute('class', 'modalForm')
   
	modal.style.display = "block";

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}
