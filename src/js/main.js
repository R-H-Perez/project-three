// Start of Slideshow instructions.
// Get section index which starts at 1 (the first page after the introduction).
var sectionIndex = 1;

// Get each div, underceding the body, that has the class name "Section." These are set to each slide in the slideshow.
var sections = document.getElementsByClassName("Section");

// Get each span that has the class name "dot" is set to one dot in the dotbar, that is changed by slide changes.
var dot = document.getElementsByClassName("Dot");

// This wiring is used to make the left button go back to the previous slide.
document.querySelector(".LeftButton").addEventListener("click", () => {
  changeSections(-1);
});

// This wiring is used to make the right button continue to the next slide.
document.querySelector(".RightButton").addEventListener("click", () => {
  changeSections(1);
});

// This function changes the value on the section index, based on which button you clicked on.
function changeSections(i) {
  showSections((sectionIndex += i));
}

// This function syncs the value on the dots to the same as the section index, to allow slide-changing functionality to them.
function currentSection(i) {
  showSections((sectionIndex = i));
}

// Whatever the section index is set to, based on the slide that must be changed upon click, is sent to the showSections function.
showSections(sectionIndex);

// This function changes the behavior of the sections in the slideshow order, and the colors of the dots.
function showSections(i) {
  // If the slide number is set past the max slide (aka if one continues past the last slide that does not exist), the page goes to the first slide in the order (the first slide).
  if (i > sections.length) {
    sectionIndex = 1;
  }

  // If the slide number is set to under 1 (aka if one goes back to a previous slide that does not exist), the page goes to the last slide in the order (the final slide).
  if (i < 1) {
    sectionIndex = sections.length;
    // sections.length is the number of divs, or sections, in the html which equals
  }

  // This changes whether a section is viewable or not, which in this case is the latter. The display is set to none for whatever section is not selected by the user.
  Array.from(sections).forEach((item) => (item.style.display = "none"));

  // This also changes whether a section is set to be viewed or not. In this case, the section is displayed via block making it viewable,
  sections[sectionIndex - 1].style.display = "block";

  // This makes each dot, in this array of spans, change color based on the page you are on. It removes every perceding color after every site-change.
  Array.from(dot).forEach(
    (item) => (item.className = item.className.replace(" selected", ""))
  );

  // This also makes each dot change color based on the page you are on. It adds a red color to each dot, as the user continues to the site.
  dot[sectionIndex - 1].className += " selected";
}

// End of Slideshow instructions.

// Start of Modal instuctions.

// Get button.
let button = document.querySelector("button");
// Get aside.
let aside = document.querySelector("aside");

// This function allows the model to be seen on the screen.
function toggleModal() {
  // The modal is "active," by showing the aside and its CSS properties.
  aside.classList.toggle("active");
}

// Wiring of modal to make the button toggle the modal, and make it appear.
button.addEventListener("click", toggleModal);
// Wiring of modal to make the aside disappear after pressing anywhere.
aside.addEventListener("click", toggleModal);

// End of Modal instructions.

// Start of Audio-Playback instructions.

// This function allows audio to be played, whenever each tag commands it.
function playAudio(url) {
  new Audio(url).play();
}

// End of Audio-Playback instructions.
