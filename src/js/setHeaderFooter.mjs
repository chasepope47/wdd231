import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

function setHeaderInfo(data) {
  // insert data into disclaimer section
  const disclaimer = document.querySelector(".disclaimer > a");
  disclaimer.href = data.url;
  disclaimer.innerHTML = data.fullName;
  // update the title of the site. Notice that we can select things in the head just like in the body with querySelector
  document.querySelector("head > title").textContent = data.fullName;
  // set the banner image
  document.querySelector(".hero-banner > img").src = data.images[0].url;
  // use the template function above to set the rest of the park specific info in the header
  document.querySelector(".hero-banner__content").innerHTML =
    parkInfoTemplate(data);
}

function setFooter(data) {
  const footerEl = document.querySelector("#park-footer");
  footerEl.insertAdjacentHTML("afterbegin", footerTemplate(data));
}

export default function setHeaderFooter(parkData) {
  setHeaderInfo(parkData);
  setFooter(parkData);
}