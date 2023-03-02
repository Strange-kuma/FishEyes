let allPhMedias = []
let allPhotographers = []
let photographerProfil = {
    
}
async function getPhotographers() {
    // Récupération des pièces depuis le fichier JSON
    const reponse = await fetch('data/photographers.json');
    let photographers = await reponse.json().then((data) => data.photographers);
    allPhotographers = [...photographers]
    // et bien retourner le tableau photographers seulement une fois récupéré
    return ({
        photographers: [...photographers]

    })
}
