// Selecting elements
const accordion = document.querySelectorAll(".content-container");
const titleInput = document.querySelector("#note-title");
const textarea = document.querySelector("#note-desc");
const titleCharCount = document.querySelector(".title-count");
const noteCharCount = document.querySelector(".note-count");
const entryTitle = document.querySelector(".title");
const entryNote = document.querySelector(".note");
const btn = document.querySelector('#btn');

// Set initial character count values
titleCharCount.innerText = `0/100`;
noteCharCount.innerText = `0/250`;

// Function to handle title length and character count
function titleLength() {
  const currentLength = titleInput.value.length;
  const remainingLength = 100 - currentLength;

  titleCharCount.innerText = `${currentLength}/100`;

  if (remainingLength < 0) {
    titleInput.value = titleInput.value.substring(0, 100);
    titleCharCount.innerText = "100 character limit reached!!!";
    titleCharCount.style.color = "red";
    titleInput.style.borderColor = "red";

    titleCharCount.classList.add("shake");
    setTimeout(() => {
      titleCharCount.classList.remove("shake");
    }, 400);
  } else {
    titleCharCount.style.color = "black";
    titleInput.style.borderColor = "initial";
    titleCharCount.innerText = `${titleInput.value.length}/100`;
  }
}

// Function to handle note length and character count
function noteLength() {
  const currentLength = textarea.value.length;
  const remainingLength = 250 - currentLength;

  noteCharCount.innerText = `${currentLength}/250`;

  if (remainingLength < 0) {
    textarea.value = textarea.value.substring(0, 250);
    noteCharCount.innerText = "250 character limit reached!!!";
    noteCharCount.style.color = "red";
    textarea.style.borderColor = "red";

    noteCharCount.classList.add("shake");
    setTimeout(() => {
      noteCharCount.classList.remove("shake");
    }, 400);
  } else {
    noteCharCount.style.color = "black";
    textarea.style.borderColor = "initial";
    noteCharCount.innerText = `${textarea.value.length}/250`;
  }
}
 
// Function to add an entry
function addEntry() {
    const entryTitleValue = titleInput.value.trim();
    const entryNoteValue = textarea.value.trim();

    if (entryTitleValue === "" || entryNoteValue === "") {
        alert('Please enter a title and note before adding an entry.');
        return;
    }

    const entryContainer = document.createElement('div');
    entryContainer.classList.add('content-container');

    const entryTitleElement = document.createElement('div');
    entryTitleElement.classList.add('title');
    entryTitleElement.innerText = entryTitleValue;

    const entryNoteElement = document.createElement('div');
    entryNoteElement.classList.add('note');
    entryNoteElement.innerText = entryNoteValue;

    entryContainer.appendChild(entryTitleElement);
    entryContainer.appendChild(entryNoteElement);

    const accordionChild = document.querySelector('#entries');
    accordionChild.appendChild(entryContainer);

    titleInput.value = "";
    textarea.value = "";
    titleCharCount.innerText = `0/100`;
    noteCharCount.innerText = `0/250`;

    entryTitleElement.addEventListener('click', function() {
        this.parentElement.classList.toggle('active');
    })
}

// Add click event listeners to accordion items
accordion.forEach((content) => {
  content.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});

// Add input event listeners to title and textarea elements
titleInput.addEventListener("input", titleLength);
textarea.addEventListener("input", noteLength);

// Add click event listener to the button to trigger adding an entry
btn.addEventListener('click', addEntry);
