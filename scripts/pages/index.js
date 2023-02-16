async function getPhotographers() {
    // Récupération des pièces depuis le fichier JSON
    const reponse = await fetch('data/photographers.json');
    let photographers = await reponse.json().then((data) => data.photographers);

    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers]
    })
}

async function displayData(photographers) {

    const photographersSection = document.querySelector(".photographer_section");
    photographers.forEach((photographer) => {

        const photographerModel = photographerFactory(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);

    });
};

async function init() {

    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    displayData(photographers);

};

init();
