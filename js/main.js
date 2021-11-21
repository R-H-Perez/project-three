// The max amount of slides start at 1.
var sectionIndex = 1;

// Each div that has the class name "Section" is set to one slide in the slideshow.
var sections = document.getElementsByClassName("Section");

// Each span that has the class name "Nav" is set to one dot in the navbar, that is changed by slide changes.
var nav = document.getElementsByClassName("Nav");

showSections(sectionIndex);

function changeSections(i) {
  showSections((sectionIndex += i));
}

function currentSection(i) {
  showSections((sectionIndex = i));
}

function showSections(i) {
  // If the slide number is set past the max slide (aka if one continues past the last slide that does not exist), the page goes to the first slide in the order (the first slide).
  if (i > sections.length) {
    sectionIndex = 1;
  }

  // If the slide number is set to under 1 (aka if one goes back to a previous slide that does not exist), the page goes to the last slide in the order (the final slide).
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

// This wiring is used to make the left button go back to the previous slide.
document.querySelector(".LeftButton").addEventListener("click", () => {
  changeSections(-1);
});

// This wiring is used to make the right button continue to the next slide.
document.querySelector(".RightButton").addEventListener("click", () => {
  changeSections(1);
});

// Creating the Modal
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

function playAudio(url) {
  new Audio(url).play();
}
