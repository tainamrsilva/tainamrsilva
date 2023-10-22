async function fetchResumeLinks() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/links-curriculos`);

  const json = await response.json();
  const items = json.data;

  return items;
}

async function fetchResumeSection() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/curriculo`);

  const json = await response.json();
  const data = json.data.attributes;

  return data;
}

function renderResumeLinks(items) {
  const parentEl = document.querySelector('#curriculo ul.list');

  for (const item of items) {
    const resume = item.attributes;

    const resumeEl = createLinkElement(resume);

    parentEl.appendChild(resumeEl);
  }
}

function renderResumeSection(data) {
  const titleEl = document.querySelector('#curriculo .section__title');

  titleEl.textContent = data.titulo;
}

(async () => {
  const sectionData = await fetchResumeSection();
  const sectionLinksData = await fetchResumeLinks();

  renderResumeLinks(sectionLinksData);
  renderResumeSection(sectionData);
})();