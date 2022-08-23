
// const unTypeables = ['Backspace', 'Enter', 'Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'PageUp', 'PageDown', 'Home', 'Insert', 'End',
//   'Delete', 'Escape', 'Pause', 'ScrollLock', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
//   'F10', 'F11', 'F12', 'AudioVolumeUp', 'AudioVolumeDown', 'NumLock', 'Meta', 'ContextMenu']

const testNotes = document.querySelector("#testNotes");
const notesDiv = document.querySelector("#notesDiv");

let noteCount = 0;
let movedPlaceForText = false;
let enterPressed = false; 
// let movedPlaceForAfterOne = false;

// let arrNotes = []; 
// let numOfLeftArrowPressed = 1;
// let numOfLeftArrowPressedPlusOne = 2;

document.addEventListener("keydown", async function (evt) {
  let eventKey = evt.key;
  //Need to find a way to only account for stuff with text
  noteCount = testNotes.getElementsByTagName("*").length; 

  //Old Way
  // noteCount = testNotes.children.length;

  let currentSpanNote = document.getElementById(`noteCount:${noteCount}`);
  let lastSpanNote = document.getElementById(`noteCount:${noteCount - 1}`);
  // let secondToLastSpanNote = document.getElementById(`noteCount:${noteCount - 2}`);
  let spanNoteTypeChar = document.querySelector(`.startTypeChar`);

  if (eventKey.length === 1 && eventKey !== ' ') {
    const spanNotes = document.createElement('span');
    spanNotes.setAttribute('id', `noteCount:${noteCount}`); //Notecount can break if someone changes the notecount manually
    if(enterPressed == false) {
      console.log('hi');
      testNotes.append(spanNotes); //Issue when pressing Enter because testNotes
    }
    else if(enterPressed) {
      document.querySelector('.enterPress').append(spanNotes); 
    }
    if (noteCount == 0) {
      spanNotes.append(eventKey);
      document.getElementById(`noteCount:${noteCount}`).classList.add('startTypeChar');
    }
    else if (noteCount !== 0 && movedPlaceForText == false) {
      document.getElementById(`noteCount:${noteCount}`).classList.add('startTypeChar');
      spanNotes.append(eventKey);

      //My attempt to change the above two lines. Help
      // document.querySelector('.startTypeChar').append(eventKey);
      // document.getElementById(`noteCount:${noteCount}`).classList.add('startTypeChar');
      document.getElementById(`noteCount:${noteCount - 1}`).classList.remove('startTypeChar');
    }
    else if (movedPlaceForText) {
      // console.log('hi');
      spanNoteTypeChar.insertAdjacentElement("afterend", spanNotes); //Refactor a better way to find where to find
      spanNotes.textContent = eventKey;
      spanNoteTypeChar.classList.remove('startTypeChar');
      spanNotes.classList.add('startTypeChar');
      document.getElementById(`noteCount:${noteCount}`).id = `noteCount:${noteCount - 1}`;
      // currentSpanNote.classList.add('startTypeChar');
      movedPlaceForText = true;
      // console.log(document.querySelector(`.startTypeChar`));
    }
    else {
      //Error Handling
    }
  }

  if (evt.code == 'Backspace') {
    let selectedElmBackspace = document.querySelector('.startTypeChar');
    if (noteCount !== 1) {
      selectedElmBackspace.classList.remove('startTypeChar'); //This Line needs to be fixed
      selectedElmBackspace.previousSibling.classList.add('startTypeChar');
    } else {
      lastSpanNote.classList.add('startTypeChar');
    }
    // noteCount--;
    testNotes.removeChild(selectedElmBackspace);
    //Needs a way to delete enter elements
  }
  if (eventKey === ' ' || eventKey === 'Spacebar') {
    noteCount--;
    currentSpanNote.append(' ')
    // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
    console.log('Space pressed');
  }

  if (evt.code == 'ArrowLeft') {
    let selectedElm = document.querySelector('.startTypeChar');
    // let selectedElmId = selectedElm.id; 
    if (selectedElm.id !== `noteCount:0`) {
      selectedElm.classList.remove('startTypeChar'); //This Line needs to be fixed
      selectedElm.previousSibling.classList.add('startTypeChar');
    } else {
      selectedElm.classList.add('startTypeChar');
    }
    // document.getElementById(`noteCount:${noteCount-numOfLeftArrowPressed}`).classList.add('afterOne');
    // console.log(document.getElementById(`noteCount:${noteCount-1}`));
    movedPlaceForText = true;
    movedPlaceForAfterOne = true;
    // numOfLeftArrowPressed++; 
    // numOfLeftArrowPressedPlusOne++;
  }
  if (evt.code == 'ArrowRight') {
    if (noteCount !== 0) {
      document.querySelector('.startTypeChar').nextSibling.classList.add('startTypeChar');
      document.querySelector('.startTypeChar').classList.remove('startTypeChar'); //This Line needs to be fixed
    } else {
      lastSpanNote.classList.add('startTypeChar');
    }
    // document.getElementById(`noteCount:${noteCount-1}`).classList.add('afterOne');
    // console.log(document.getElementById(`noteCount:${noteCount-1}`));
    movedPlaceForText = true;
    movedPlaceForAfterOne = true;
    // numOfLeftArrowPressed++; 
    // numOfLeftArrowPressedPlusOne++;
  }
  if (evt.code == 'Enter') {
    enterPressed = true; 
    document.querySelector('.startTypeChar').classList.remove('startTypeChar'); //This Line needs to be fixed
    const spanNotes = document.createElement('span');
    spanNotes.setAttribute('id', `noteCount:${noteCount}`); //Notecount can break if someone changes the notecount manually
    spanNotes.classList.add('startTypeChar');

    const newUl = document.createElement('ul');
    const newLi = document.createElement('li');
    newLi.classList.add('enterPress'); 

    testNotes.append(newUl);
    newUl.append(newLi); 
    // newLi.append(spanNotes);
  }
  // console.log(noteCount);
  // noteCount = testNotes.children.length;
  // if(spanNotes)
  // console.log(noteCount);




  //ToDo: Need to sort notecount should not rely on another class since it would be mixed up with a big text file

  // console.log();
  // document.querySelector('.afterOne').id !== null 
  // if(movedPlaceForAfterOne) {
  //   console.log('Hello');
  //   document.querySelectorAll('.afterOne').id = `noteCount:${noteCount + 1}`; 
  // }
  // else if(document.querySelector('.afterOne').id == null) console.log('being a bum');
  // else {
  //Future Error Handling
  // }
})

document.addEventListener("click", async function (evt) {
  if (testNotes.contains(evt.target)) {
    document.querySelector('.startTypeChar').classList.remove('startTypeChar'); //Try to add a querySelectorAll without errors
    evt.target.classList.add('startTypeChar');
    console.log(evt.target);
  } else {
    console.log('buttStuff');
  }
})











// function insertAtCursor(myField, myValue) {
//   //IE support
//   if (document.selection) {
//       myField.focus();
//       sel = document.selection.createRange();
//       sel.text = myValue;
//   }
//   //MOZILLA and others
//   else if (myField.selectionStart || myField.selectionStart == '0') {
//       var startPos = myField.selectionStart;
//       var endPos = myField.selectionEnd;
//       myField.value = myField.value.substring(0, startPos)
//           + myValue
//           + myField.value.substring(endPos, myField.value.length);
//   } else {
//       myField.value += myValue;
//   }
// }

