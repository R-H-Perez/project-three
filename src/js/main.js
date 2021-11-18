var sectionIndex = 1;

var sections = document.getElementsByClassName("Section");
var nav = document.getElementsByClassName("Nav");

showSections(sectionIndex);

function changeSections(i) {
  showSections((sectionIndex += i));
}

function currentSection(i) {
  showSections((sectionIndex = i));
}

function showSections(i) {
  if (i > sections.length) {
    sectionIndex = 1;
  }

  if (i < 1) {
    sectionIndex = sections.length;
  }

  Array.from(sections).forEach((item) => (item.style.display = "none"));

  Array.from(nav).forEach(
    (item) => (item.className = item.className.replace(" selected", ""))
  );

  sections[sectionIndex - 1].style.display = "block";
  nav[sectionIndex - 1].className += " selected";
}

document.querySelector(".LeftButton").addEventListener("click", () => {
  changeSections(-1);
});

document.querySelector(".RightButton").addEventListener("click", () => {
  changeSections(1);
});

// Get
// button
let button = document.querySelector("button");
// aside
let aside = document.querySelector("aside");

// Behavior
function toggleModal() {
  aside.classList.toggle("active");
}

// Wire
button.addEventListener("click", toggleModal);
aside.addEventListener("click", toggleModal);
