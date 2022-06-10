import "regenerator-runtime";
import "../styles/main.css";
import "../styles/responsive.css";

fetch("DATA.json")
    .then((response) => response.json())
    .then((data) => {
        cultures(data);
    });


function cultures(data) {
    let cultureHTML = "";
    data.cultures.forEach(function(culture) {
        cultureHTML += `
      <div tabindex="0" class="card">
        <div class="img-container">
          <img tabindex="0" class="img-res" src="${culture.pictureId}" alt="${culture.name}"/>
          <span tabindex="0" class="card-title">${culture.name} - ${culture.city}</span>
        </div>
        <div tabindex="0" class="card-content">
          <p class="card-content-title">Description :</p>
          <p class="desc">${culture.description}</p>
        </div>
      </div>
      `;
    });

    document.getElementById("explore-content").innerHTML = cultureHTML;
}

document.querySelector(".menu").addEventListener("click", function() {
    document.querySelector(".nav-list").classList.toggle("nav-list-block");
});