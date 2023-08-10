async function fetchPublishLinks() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/links-publicacoes`);

  const json = await response.json();
  const items = json.data;

  return items;
}

async function fetchPublishSection() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/publicacao`);

  const json = await response.json();
  const data = json.data.attributes;

  return data;
}

function renderPublishLinks(items) {
  const parentEl = document.querySelector('#publicacoes ul.list');

  for (const item of items) {
    const publish = item.attributes;

    const publishEl = createLinkElement(publish);

    parentEl.appendChild(publishEl);
  }
}

function renderPublishSection(data) {
  const titleEl = document.querySelector('#publicacoes .section__title');

  titleEl.textContent = data.titulo;
}


(async () => {
  const sectionData = await fetchPublishSection();
  const sectionLinksData = await fetchPublishLinks();

  renderPublishSection(sectionData);
  renderPublishLinks(sectionLinksData);
})();