/* var count = 0;
sections = [features];
var main = document.getElementById("main");
function generateSections() {
  const fragment = document.createDocumentFragment();
  fragment.innerHTML = "<p>gggg</p>";
  main.appendChild(fragment);
  console.dir(main)  
  count++;
  if (count < 1) {
    setTimeout(generateSections, 0);
  }
}

setTimeout(generateSections, 0);
 */
let count = 0;
var sections=[features]
function generateParagraphs() {
  const main = document.getElementById("main");
  var element = document.createElement("div");
  element.innerHTML  =sections[count];
  main.appendChild(element);
  if (count < 1) {
    setTimeout(generateParagraphs, 0);
  }
}

generateParagraphs();
