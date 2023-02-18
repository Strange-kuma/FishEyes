function displayModal() {
    const modal = document.getElementById("contact_modal");
    modal.setAttribute('class', 'modalForm')
    modal.style.display = "block";

}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

let sendForm = document.querySelector(".FormContact")

sendForm.addEventListener("submit", function (e) {
    e.preventDefault()
    let inputPrenom = document.querySelector(".Prenom")
    let inputNom = document.querySelector(".Nom")
    let inputEmail = document.querySelector(".Email")
    let inputMessage = document.querySelector(".Message")

    if (inputPrenom.value &&
        inputNom.value &&
        inputEmail.value &&
        inputMessage.value) {
            
        e.preventDefault()
        let responseInput = [inputPrenom.value,
        inputNom.value,
        inputEmail.value,
        inputMessage.value]

        console.log(responseInput)
    }
})