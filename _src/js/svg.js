function createSvgIcon() {
  const xlmns = 'http://www.w3.org/2000/svg';

  const svg = document.createElementNS(xlmns, 'svg');
  svg.setAttributeNS(null, 'width', 24);
  svg.setAttributeNS(null, 'height', 24);
  svg.setAttributeNS(null, 'viewbox', '0 0 24 24');
  svg.setAttributeNS(null, 'fill', 'none')
  svg.classList.add('list__vector');

  const path = document.createElementNS(xlmns, 'path');
  path.setAttributeNS(null, 'd', 'M2.53 9.47L0 12l12 12 12-12-2.53-2.53-7.68 7.681V0h-3.58v17.151l-7.68-7.68z');
  path.setAttributeNS(null, 'fill', '#ffffff');

  svg.appendChild(path);

  return svg;
}