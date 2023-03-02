function getUserPage() {
    // mise en place des variable
    const Getavatar = document.querySelector('.avatar');
    const Getname = document.querySelector('.name');
    const Getpays = document.querySelector('.pays');
    const Getcitation = document.querySelector('.citation');
    const picture = `assets/photographers/${photographerProfil.portrait}`;
    Getavatar.setAttribute("src", picture)
    Getavatar.setAttribute("alt", photographerProfil.name)
    Getname.textContent = photographerProfil.name
    Getpays.textContent = photographerProfil.city + ", " + photographerProfil.country
    Getcitation.textContent = photographerProfil.tagline
}

function photographerMediaFactory(mediaData, index) {
    const { id, photographerId, title, image, video, likes, date, price } = mediaData;
    let media;
    const triByLikes = document.getElementById('Popularité')
    const triByDate = document.getElementById('Date')
    const triByAlphabet = document.getElementById('Titre')
    triByLikes.addEventListener('click', function () {
        allPhMedias.sort(function (a, b) {
            return parseFloat(a.likes) - parseFloat(b.likes);
        })
        document.querySelector('.media').innerHTML = ""
        displayPhotographerData(allPhMedias);
    })
    triByDate.addEventListener('click', function () {
        allPhMedias.sort(function (a, b) {
            return new Date(b.date) - new Date(a.date);
        })
        document.querySelector('.media').innerHTML = ""
        displayPhotographerData(allPhMedias);
    })
    triByAlphabet.addEventListener('click', function () {
        allPhMedias.sort(function (a, b) {
            var textA = a.title.toUpperCase();
            var textB = b.title.toUpperCase();
            return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        document.querySelector('.media').innerHTML = ""
        displayPhotographerData(allPhMedias);
    })
    function getMediaCardDOM() {
        //-------------------------------------------- Variable de création de la balise article 
        const article = document.createElement('article');
        //-------------------------------------------- Attribut le texte alternatif 
        article.setAttribute('alt', 'media card')
        //-------------------------------------------- Si le media image existe alor... 
        if (image) {
            //-------------------------------------------- Variable d'url qui selectionnent le media selon l'id du photographe  
            let media = `/assets/images/${photographerId}/${image}`;
            //-------------------------------------------- Variable de création de la balise img
            const img = document.createElement('img');
            //-------------------------------------------- Attribut la variable d'url à la source 
            img.setAttribute("src", media)
            //-------------------------------------------- Attribut le texte alternatif 
            img.setAttribute("alt", title)
            //-------------------------------------------- Introduit la balise img
            article.appendChild(img);
            //-------------------------------------------- Au click sur sur le media image active la lightbox
            img.addEventListener('click', function () {
                //-------------------------------------------- Variable qui return le nombre du media dans le tableau 
                let imageIndex = index
                //-------------------------------------------- Variable d'url qui selectionnent le dossier qui correspond à l'id du photographe 
                let media = `/assets/images/${photographerId}`;
                //-------------------------------------------- Variable qui selectionnent la lightbox
                const lightbox = document.querySelector('.lightbox')
                //-------------------------------------------- Variable qui selectionnent la div qui contient le media 
                const divImageHtml = document.querySelector('.imgbox')
                //-------------------------------------------- Change le style de la lightbox en display flex
                lightbox.style.display = 'flex'
                //-------------------------------------------- Variable de selection des icone de fleche de la lightbox
                const arrowLeftHtml = document.querySelector('.arrowLeft')
                const arrowRightHtml = document.querySelector('.arrowRight')
                //-------------------------------------------- Creation de la croix de la lightbox
                let cross = document.createElement('ion-icon')
                cross.setAttribute("name", "close")
                cross.setAttribute("id", "close")
                //-------------------------------------------- fonction qui permet le changement d'image dans la lightbox en selectionnant celle ci par la variable index
                function slideShow(i) {
                    if (allPhMedias[i].image) {
                        divImageHtml.innerHTML = ` 
                    <img src="${media}/${allPhMedias[i].image}" alt=""  />
                    <p>${allPhMedias[i].title}</p>   
                `
                    } else {
                        media = `/assets/images/${photographerId}`;
                        divImageHtml.innerHTML = ` 
                    <video src="${media}/${allPhMedias[i].video}" alt="" controls /></video>
                    <p>${allPhMedias[i].title}</p>   
                `
                    }
                }
                slideShow(imageIndex)
                //-------------------------------------------- Introduit la croix dans la lightbox
                lightbox.appendChild(cross)
                //-------------------------------------------- function qui au click sur la croix désactive la lightbox
                cross.addEventListener('click', function () {
                    lightbox.style.display = 'none'

                })
                //-------------------------------------------- function de click des fléches de la lightbox
                arrowRightHtml.addEventListener('click', function () {
                    imageIndex++
                    if (imageIndex >= allPhMedias.length) {
                        imageIndex = 0
                    }
                    slideShow(imageIndex)
                })
                arrowLeftHtml.addEventListener('click', function () {
                    imageIndex--
                    console.log(imageIndex)
                    if (imageIndex < 0) {
                        imageIndex = allPhMedias.length - 1
                    }
                    slideShow(imageIndex)
                })
                //-------------------------------------------- function de touche du clavier des fléches de la lightbox
                document.addEventListener('keydown', function (event) {
                    if (event.key == "ArrowLeft") {
                        imageIndex--
                        if (imageIndex < 0) {
                            imageIndex = mediaData.length - 1
                        }
                        slideShow(imageIndex)
                    } else if (event.key == "ArrowRight") {
                        imageIndex++
                        if (imageIndex >= mediaData.length) {
                            imageIndex = 0
                        }
                        slideShow(imageIndex)
                    }
                })
                //-------------------------------------------- fin de la onction click pour lightbox (image)
            })
            //-------------------------------------------- fin de if (image)
            //-------------------------------------------- Si le media video existe alor... 
        } else {
            //-------------------------------------------- Variable qui return le nombre du media dans le tableau 
            let imageIndex = index
            //-------------------------------------------- Variable d'url qui selectionnent le media selon l'id du photographe  
            media = `/assets/images/${photographerId}/${video}`;
            //-------------------------------------------- Variable de création de la balise video
            myVideoHtml = document.createElement('video');
            //-------------------------------------------- Attribut la variable d'url à la source 
            myVideoHtml.setAttribute("src", media)
            //-------------------------------------------- Introduit la balise video
            article.appendChild(myVideoHtml)
            //-------------------------------------------- fonction qui active la lightbox au click sur le media video
            myVideoHtml.addEventListener('click', function () {
                const lightbox = document.querySelector('.lightbox')
                const divImageHtml = document.querySelector('.imgbox')
                lightbox.style.display = 'flex'
                const arrowLeftHtml = document.querySelector('.arrowLeft')
                const arrowRightHtml = document.querySelector('.arrowRight')
                let cross = document.createElement('ion-icon')
                cross.setAttribute("name", "close")
                cross.setAttribute("id", "close")
                //-------------------------------------------- fonction qui permet le changement d'image dans la lightbox en selectionnant celle ci par la variable index
                function slideShow(i) {

                    if (allPhMedias[i].image) {
                        divImageHtml.innerHTML = ` 
                    <img src="${media}/${allPhMedias[i].image}" alt=""  />
                    <p>${allPhMedias[i].title}</p>   
                `
                    } else {
                        media = `/assets/images/${photographerId}`;
                        divImageHtml.innerHTML = ` 
                    <video src="${media}/${allPhMedias[i].video}" alt="" controls /></video>
                    <p>${allPhMedias[i].title}</p>   
                `
                    }
                }
                slideShow(imageIndex)
                //-------------------------------------------- introduit l'icone de la croix de la lightbox 
                lightbox.appendChild(cross)
                //-------------------------------------------- function qui au click sur la croix désactive la lightbox
                cross.addEventListener('click', function () {
                    lightbox.style.display = 'none'
                })
                //-------------------------------------------- function de click des fléches de la lightbox
                arrowRightHtml.addEventListener('click', function () {
                    imageIndex++
                    if (imageIndex >= mediaData.length) {
                        imageIndex = 0
                    }
                    slideShow(imageIndex)
                })
                arrowLeftHtml.addEventListener('click', function () {
                    imageIndex--
                    if (imageIndex < 0) {
                        imageIndex = mediaData.length - 1
                    }
                    slideShow(imageIndex)
                })
                //-------------------------------------------- function de touche du clavier des fléches de la lightbox
                document.addEventListener('keydown', function (event) {
                    if (event.key == "ArrowLeft") {
                        imageIndex--
                        if (imageIndex < 0) {
                            imageIndex = mediaData.length - 1
                        }
                        slideShow(imageIndex)
                    } else if (event.key == "ArrowRight") {
                        imageIndex++
                        if (imageIndex >= mediaData.length) {
                            imageIndex = 0
                        }
                        slideShow(imageIndex)
                    }
                })
            })
        }
        //-------------------------------------------- Création d'une balise div
        const div = document.createElement('div')
        //-------------------------------------------- Attribue un id à la div 
        div.setAttribute("id", "describ")
        //-------------------------------------------- Variable du titre du contenue
        const h2 = document.createElement('h2');
        h2.textContent = title
        //-------------------------------------------- Variable qui introduit l'icone du like
        let Icon = document.createElement('ion-icon')
        Icon.setAttribute("name", "heart")
        let numberOfLike = likes
        //-------------------------------------------- Constante qui crée une balise span 
        const span = document.createElement('span')
        span.innerHTML = numberOfLike
        let likestatus = false
        //-------------------------------------------- fonction qui au click incremente ou decremente le like 
        Icon.addEventListener("click", function () {
            if (!likestatus) {
                likestatus = true
                numberOfLike++
                span.innerHTML = numberOfLike
                Icon.style.color = "#da0000"
            } else {
                likestatus = false
                numberOfLike--
                span.innerHTML = numberOfLike
                Icon.style.color = "#901C1C"
            }
        })
        //-------------------------------------------- mise en page des articles 
        article.appendChild(div)
        div.appendChild(h2)
        div.appendChild(span)
        div.appendChild(Icon)
        return article
    }
    getUserPage()
    return { getMediaCardDOM }
}