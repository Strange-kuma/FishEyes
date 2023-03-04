/* eslint-disable no-unused-vars */

function photographerFactory(data) {
  const { id, price, country, city, tagline, name, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.addEventListener("click", function () {
      localStorage.data = JSON.stringify(data);
      document.location.href = `photographer.html?id=${id}`;
    });
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    const strong = document.createElement("strong");
    strong.textContent = city + ", " + country;
    const p = document.createElement("p");
    p.textContent = ' " ' + tagline + ' " ';

    const span = document.createElement("span");
    span.textContent = price + "€/jour";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(strong);
    article.appendChild(p);
    article.appendChild(span);
    return article;
  }
  localStorage.removeItem("data");
  return { name, picture, getUserCardDOM };
}
