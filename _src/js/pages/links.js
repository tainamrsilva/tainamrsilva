async function fetchGeneralLinks() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/links-gerais`)

  const json = await response.json();
  const items = json.data;

  return items;
}

async function fetchLinksSection() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/link`)

  const json = await response.json();
  const data = json.data.attributes;

  return data;
}

function renderLinkSection(data) {
  const titleEl = document.querySelector('#links .section__title');

  titleEl.textContent = data.titulo;
}

function renderGeneralLinks(items) {
  const parentEl = document.querySelector('#links ul.list');

  for (const item of items) {
    const resume = item.attributes;

    const resumeEl = createLinkElement(resume);

    parentEl.appendChild(resumeEl);
  }
}

(async () => {
  const sectionData = await fetchLinksSection();
  const sectionLinksData = await fetchGeneralLinks();

  renderLinkSection(sectionData);
  renderGeneralLinks(sectionLinksData);
})();