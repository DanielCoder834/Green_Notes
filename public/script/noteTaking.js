
// const unTypeables = ['Backspace', 'Enter', 'Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'PageUp', 'PageDown', 'Home', 'Insert', 'End',
//   'Delete', 'Escape', 'Pause', 'ScrollLock', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
//   'F10', 'F11', 'F12', 'AudioVolumeUp', 'AudioVolumeDown', 'NumLock', 'Meta', 'ContextMenu']

// const e = require("express");

// const e = require("express");

const testNotes = document.querySelector("#testNotes");
const notesDiv = document.querySelector("#notesDiv");

let noteCount = 0;
let movedPlaceForText = false;
let enterPressed = false;
let clickedOn = false; 
let controlPressed = false; 

document.addEventListener("keydown", async function (evt) {
  let eventKey = evt.key;

  // noteCount = testNotes.getElementsByTagName('span').length;
  //Old Way
  // noteCount = testNotes.children.length;

  let lastSpanNote = document.querySelector(`[data-noteid="${noteCount - 1}"]`)
  let spanNoteTypeChar = document.querySelector(`.startTypeChar`);

  if (eventKey.length === 1 && eventKey !== ' ' && controlPressed == false) {
    // Adds a cool effect
    // const spanCursor = document.createElement('span');
    // spanCursor.classList.add('blinkyCursor'); 

    const spanNotes = document.createElement('span');
    // spanNotes.setAttribute('data-noteid', `${noteCount}`); //Notecount can break if someone changes the notecount manually
    if (enterPressed == false) {
      if(document.querySelectorAll(`.startTypeChar`).length <= 0) testNotes.append(spanNotes);
      else document.querySelector(`.startTypeChar`).insertAdjacentElement("afterend", spanNotes);
      // Adds a cool effect
      // testNotes.append(spanCursor);
    }
    else if (enterPressed) {
      document.querySelector(`.startTypeChar`).insertAdjacentElement("afterend", spanNotes);
      //Old Way
      // document.querySelector('.enterPress').append(spanNotes);
      // Adds a cool effect
      // document.querySelector('.enterPress').append(spanCursor);
    }
    //testNotes.getElementsByTagName('span').length == 1
    if (document.querySelectorAll(`.startTypeChar`).length <= 0) {
      for (let i = 0; i < testNotes.getElementsByTagName('span').length; i++) {
        testNotes.getElementsByTagName('span')[i].setAttribute('data-noteid', `${i}`);
      }
      document.querySelector(`[data-noteid="${noteCount}"]`).classList.add('startTypeChar'); //Can't rely on notecount
      document.querySelector(`.startTypeChar`).insertAdjacentElement("beforebegin", spanNotes);
      spanNotes.textContent = eventKey;
      // Adds a cool effect
      // spanNoteTypeChar.insertAdjacentElement("afterend", spanCursor);
    }
    else if (testNotes.getElementsByTagName('span').length !== 0 && movedPlaceForText == false) {
      for (let i = 0; i < testNotes.getElementsByTagName('span').length; i++) {
        testNotes.getElementsByTagName('span')[i].setAttribute('data-noteid', `${i}`);
      }
      if(clickedOn) document.querySelector('.startTypeChar').append(eventKey);
      document.querySelector('.startTypeChar').classList.remove('startTypeChar');
      document.querySelector(`[data-noteid="${testNotes.getElementsByTagName('span').length - 1}"]`).classList.add('startTypeChar');
      if(!clickedOn) document.querySelector('.startTypeChar').append(eventKey); 
    }
    else if (movedPlaceForText) {
      for (let i = 0; i < testNotes.getElementsByTagName('span').length; i++) {
        testNotes.getElementsByTagName('span')[i].setAttribute('data-noteid', `${i}`);
      }
      spanNoteTypeChar.insertAdjacentElement("afterend", spanNotes); //Refactor a better way to find where to find
      spanNotes.textContent = eventKey;
      spanNoteTypeChar.classList.remove('startTypeChar');
      spanNotes.classList.add('startTypeChar');
      movedPlaceForText = true;
    }
    else {
      //Error Handling
    }
  }
  if(evt.ctrlKey && eventKey === 'b') {
    controlPressed = true;
    // 
    let currentNotes = document.querySelectorAll(testNotes.children.hasAttribute('`[data-noteid=0]'));
    if(currentNotes.matches(':hover')) {
      console.log('ds');
      document.querySelector(`.startTypeChar`).classList.add('bolder'); 
    }
  }
  if (eventKey === ' ' || eventKey === 'Spacebar') {
    let selectedElmSpaceBar = document.querySelector('.startTypeChar');
    let space = '&nbsp;';
    selectedElmSpaceBar.insertAdjacentHTML("afterend", space);
    // document.querySelector('.startTypeChar').nextSibling.classList.add('startTypeChar');
    console.log('Space pressed');
  }

  if (evt.code == 'ArrowLeft') {
    let selectedElm = document.querySelector('.startTypeChar');
    if (selectedElm !== document.querySelector(`[data-noteid="0"]`)) {
      selectedElm.classList.remove('startTypeChar'); //This Line needs to be fixed
      selectedElm.previousSibling.classList.add('startTypeChar');
    } else if (selectedElm == document.querySelector(`[data-noteid="0"]`)) {
      console.log('Hiwe');
      selectedElm.classList.remove('startTypeChar');
    }
    else {
      selectedElm.classList.add('startTypeChar');
    }
    movedPlaceForText = true;
  }
  if (evt.code == 'ArrowRight') {
    if (testNotes.getElementsByTagName('span').length !== 1) {
      document.querySelector('.startTypeChar').nextSibling.classList.add('startTypeChar');
      document.querySelector('.startTypeChar').classList.remove('startTypeChar'); //This Line needs to be fixed
    } else if (testNotes.getElementsByTagName('span').length == 1) {
      selectedElmBackspace.classList.remove('startTypeChar');
    }
    else {
      lastSpanNote.classList.add('startTypeChar');
    }
    movedPlaceForText = true;
  }
  if (evt.code == 'Enter') {

    // document.querySelector('.startTypeChar').classList.remove('startTypeChar'); //This Line needs to be fixed
    // const spanNotes = document.createElement('span');
    // spanNotes.setAttribute('data-noteid', `${noteCount}`); //Notecount can break if someone changes the notecount manually
    // spanNotes.classList.add('startTypeChar');

    const newUl = document.createElement('ul');
    const newLi = document.createElement('li');
    if (document.querySelector('.enterPress') !== null) document.querySelector('.enterPress').classList.remove('enterPress');
    newLi.classList.add('enterPress');

    if (enterPressed == false) {
      testNotes.append(newUl);
      console.log('ddsds');
    }
    for (let i = 0; i < testNotes.getElementsByTagName('ul').length; i++) {
      testNotes.getElementsByTagName('ul')[i].setAttribute('data-ulnoteid', `${i}`);
    }
    document.querySelector(`[data-ulnoteid="${0}"]`).append(newLi);
    // newLi.append(spanNotes);
    const tempSpanNote = document.createElement('span');
    newLi.append(tempSpanNote);
    for (let i = 0; i < testNotes.getElementsByTagName('li').length; i++) {
      testNotes.getElementsByTagName('li')[i].setAttribute('data-linoteid', `${i}`);
    }
    for (let i = 0; i < testNotes.getElementsByTagName('span').length; i++) {
      testNotes.getElementsByTagName('span')[i].setAttribute('data-noteid', `${i}`);
    }
    console.log(testNotes.getElementsByTagName('span').length - 2);
    document.querySelector(`[data-noteid="${testNotes.getElementsByTagName('span').length - 2}"]`).classList.remove('startTypeChar');
    tempSpanNote.classList.add('startTypeChar');
    enterPressed = true;
  }
  if (evt.code == 'Backspace') {
    let selectedElmBackspace = document.querySelector('.startTypeChar');
    if (selectedElmBackspace !== document.querySelector(`[data-noteid="0"]`)) {
      if (enterPressed == false) {
        selectedElmBackspace.classList.remove('startTypeChar'); //This Line needs to be fixed
        selectedElmBackspace.previousSibling.classList.add('startTypeChar');
        testNotes.removeChild(selectedElmBackspace);
      }
      else if (enterPressed == true) {
        if (selectedElmBackspace.previousElementSibling !== null) {
          selectedElmBackspace.classList.remove('startTypeChar'); //This Line needs to be fixed
          selectedElmBackspace.previousSibling.classList.add('startTypeChar');
          document.querySelector('.enterPress').removeChild(selectedElmBackspace);
        }
        else if (selectedElmBackspace.previousSibling == null) {
          console.log(document.querySelector(`.startTypeChar`));
          document.querySelector(`.enterPress`).remove();
          if (testNotes.getElementsByTagName('li').length !== 0) document.querySelector(`[data-linoteid="${testNotes.getElementsByTagName('li').length - 1}"]`).classList.add('enterPress')
          // testNotes.removeChild(document.querySelector(`[data-ulnoteid="0"]`));
          document.querySelector(`[data-noteid="${testNotes.getElementsByTagName('span').length - 1}"]`).classList.add('startTypeChar');
          if (testNotes.getElementsByTagName('li').length == 0) {
            enterPressed = false;
            testNotes.removeChild(document.querySelector(`[data-ulnoteid="${testNotes.getElementsByTagName('ul').length - 1}"]`));
          }
        }
      }
      else {
        //Error Handling
      }
    }
    else if (selectedElmBackspace == document.querySelector(`[data-noteid="0"]`)) {
      selectedElmBackspace.classList.remove('startTypeChar');
      testNotes.removeChild(selectedElmBackspace);
    }
    else {
      lastSpanNote.classList.add('startTypeChar');
    }
    //Needs a way to delete enter elements
  }
})

document.addEventListener("click", async function (evt) {
  if (testNotes.contains(evt.target)) {
    document.querySelector('.startTypeChar').classList.remove('startTypeChar'); //Try to add a querySelectorAll without errors
    evt.target.classList.add('startTypeChar');
    console.log(enterPressed);
    document.querySelector('.enterPress').classList.remove('enterPress');
    evt.target.parentElement.classList.add('enterPress');
    clickedOn = true; 
  } else {
    console.log('not the target');
  }
})