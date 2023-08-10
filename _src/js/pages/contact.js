async function fetchContactSection() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/contato`);

  const json = await response.json();
  const data = json.data.attributes;

  return data;
}

function renderContactSection(data) {
  const titleEl = document.querySelector('#contato .section__title');
  titleEl.textContent = data.titulo;

  const sectionLinkEl = document.querySelector('#contato .section__link');
  sectionLinkEl.href = `mailto: ${data.email}`;
}

(async () => {
  const sectionData = await fetchContactSection();

  renderContactSection(sectionData);
})();
