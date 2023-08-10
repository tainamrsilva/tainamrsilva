async function fetchCoverSection() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/introducao?populate=*`);

  const json = await response.json();
  const data = json.data.attributes;

  return data;
}

async function fetchCoverLinks() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/links-introducoes`);

  const json = await response.json();
  const data = json.data;

  return data;
}

function renderPageBaseContent(data) {
  const backgroundEl = document.querySelector('.cover');

  const imagePath = data.foto.data.attributes.url;
  const imageUrl = `${STRAPI_BASE_URL}${imagePath}`;

  backgroundEl.style.backgroundImage = `url(${imageUrl})`;

  const nameEl = document.querySelector('h1.cover__title');
  nameEl.textContent = data.nome;

  const jobEl = document.querySelector('span.cover__subtitle');
  jobEl.textContent = data.profissao;
}

function renderCoverLinks(data) {
  const parentEl = document.querySelector('nav.cover__menu');

  for (const link of data) {
    const linkEl = document.createElement('a');
    const linkData = link.attributes;
    linkEl.classList.add('cover__link');
    linkEl.ariaLabel = linkData.textoAlternativo;
    linkEl.href = linkData.url;
    linkEl.innerText = linkData.titulo;

    parentEl.appendChild(linkEl);
  }
}

(async () => {
  const sectionData = await fetchCoverSection();
  const sectionLinksData = await fetchCoverLinks();

  renderPageBaseContent(sectionData);
  renderCoverLinks(sectionLinksData);
})();