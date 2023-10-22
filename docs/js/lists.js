function createLinkElement(data) {
  const listItem = document.createElement('li');
  listItem.classList.add('list__item');

  const anchor = document.createElement('a');
  anchor.classList.add('list__link');
  anchor.href = data.url;
  anchor.target = '_blank';
  anchor.ariaLabel = `Link ${data.titulo}`;
  anchor.rel = 'noopener';

  const title = document.createElement('span');
  title.classList.add('list__text');
  title.innerText = data.titulo;

  const svg = createSvgIcon();
  anchor.append(title, svg);

  listItem.appendChild(anchor);

  return listItem;
}