async function fetchIntroSection() {
  const response = await fetch(`${STRAPI_BASE_URL}/api/introducao?populate=*`);

  const json = await response.json();
  const data = json.data.attributes;

  return data;
}

function renderIntroText(data) {
  const parentDiv = document.querySelector('#sobre');

  const fragments = data.textoPrincipal.split('\n')

  for (const fragment of fragments) {
    if (!!fragment) {
      let textEl = document.createElement('p')
      textEl.classList.add('section__text');
      textEl.textContent = fragment;
      parentDiv.appendChild(textEl)
    }
  }
}

(async () => {
  const sectionData = await fetchIntroSection();

  renderIntroText(sectionData);
})();
