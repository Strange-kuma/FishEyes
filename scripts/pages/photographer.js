async function getPhotographerMedias() {
    // on recupere les donne json du photographe
    const reponse = await fetch('data/photographers.json');
    let allMedias = await reponse.json().then((data) => data.media);
    // on va chercher dans l'url id du photographe selectionner
    let params = new URLSearchParams(document.location.search);
    // on recupere l'id du photographe
    let phId = parseInt(params.get("id"));
    // on passe un filtre pour ne selectionner que les fichier media dont l'id correppond a celui de l'url
    let photographerMedias = allMedias.filter(med => med.photographerId == phId)
    //    allPhotographers = await getPhotographers()
    await getPhotographers()
    if (allPhotographers) {
        let profil = allPhotographers.filter(p => p.id == phId)
        photographerProfil = profil[0]
    }
    allPhMedias = [...photographerMedias]
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographerMedias: [...photographerMedias]
    })
}
async function displayPhotographerData(photographerMedias) {
    const photographersSectionMedias = document.querySelector(".media");
    photographerMedias.forEach((index, mediaData) => {
        const photographersProfil = photographerMediaFactory(index, mediaData);
        const userMediaDOM = photographersProfil.getMediaCardDOM();
        photographersSectionMedias.appendChild(userMediaDOM);
    });
};
async function init() {
    // Récupère les datas des photographes
    const { photographerMedias } = await getPhotographerMedias();
    displayPhotographerData(photographerMedias);
};
init();

