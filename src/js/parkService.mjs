// Update the link in the disclaimer area
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Update the title of the page
document.title = parkData.fullName;

const heroImage = document.querySelector(".hero-banner__image");
heroImage.src = parkData.images[0].url;
heroImage.alt = parkData.images[0].altText;

function parkInfoTemplate(info) {
  return `<a href="/" class="hero-banner__title">${info.fullName}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

const heroInfo = document.querySelector(".hero-banner__info");
heroInfo.innerHTML = parkInfoTemplate(parkData);

// Add dynamic description
descriptionElement.innerHTML = parkData.description;

// Add dynamic contact information
contactElement.innerHTML = `<p>Phone: ${parkData.contacts.phoneNumbers[0].phoneNumber}</p>
<p>Email: <a href="mailto:${parkData.contacts.emailAddresses[0].emailAddress}">${parkData.contacts.emailAddresses[0].emailAddress}</a></p>`;
