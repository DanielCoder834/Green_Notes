
// const unTypeables = ['Backspace', 'Enter', 'Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'PageUp', 'PageDown', 'Home', 'Insert', 'End',
//   'Delete', 'Escape', 'Pause', 'ScrollLock', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
//   'F10', 'F11', 'F12', 'AudioVolumeUp', 'AudioVolumeDown', 'NumLock', 'Meta', 'ContextMenu']

const testNotes = document.querySelector("#testNotes");
const notesDiv = document.querySelector("#notesDiv");

let noteCount = 0;
let movedPlaceForText = false;
let movedPlaceForAfterOne = false;  

// let arrNotes = []; 
let numOfLeftArrowPressed = 1; 

document.addEventListener("keydown", async function (evt) {
  let eventKey = evt.key;
  noteCount = testNotes.children.length;

  let currentSpanNote = document.getElementById(`noteCount:${noteCount}`); 
  let lastSpanNote = document.getElementById(`noteCount:${noteCount - 1}`);
  let secondToLastSpanNote = document.getElementById(`noteCount:${noteCount - 2}`);
  let spanNoteTypeChar = document.querySelector(`.startTypeChar`); 

  if (eventKey.length === 1 && eventKey !== ' ') {
    const spanNotes = document.createElement('span');
    spanNotes.setAttribute('id', `noteCount:${noteCount}`); //Notecount can break if someone changes the notecount manually
    testNotes.append(spanNotes);
    // noteCount++; 
    // document.getElementById(`noteCount:${noteCount}`).classList.add('startTypeChar');
    // if(lastSpanNote !== null) {
    //   lastSpanNote.classList.remove('startTypeChar');
    // }
    // } else if(document.getElementById(`noteCount:${noteCount}`))
    // else {
      //Error handling
    // } 
    if(noteCount == 0) {
      spanNotes.append(eventKey);
      document.getElementById(`noteCount:${noteCount}`).classList.add('startTypeChar');
    } 
    else if(noteCount !== 0 && movedPlaceForText == false) {
      document.getElementById(`noteCount:${noteCount}`).classList.add('startTypeChar');
      spanNotes.append(eventKey);
      lastSpanNote.classList.remove('startTypeChar'); 
    } 
    else if(movedPlaceForText) {
      console.log('hi');
      spanNoteTypeChar.insertAdjacentElement("afterend", spanNotes); //Refactor a better way to find where to find
      spanNotes.textContent = eventKey; 
      spanNoteTypeChar.classList.remove('startTypeChar'); 
      spanNotes.classList.add('startTypeChar'); 
      document.getElementById(`noteCount:${noteCount}`).id = `noteCount:${noteCount-1}`; 
      // currentSpanNote.classList.add('startTypeChar');
      movedPlaceForText = true;
      console.log(document.querySelector(`.startTypeChar`));
    } 
    else{
      //Error Handling
    }
    // for (let i = 0; i <= noteCount; i++) {
    //   currentSpanNote.id = `noteCount:${i}`;  
    // } 
  }

  if (evt.code == 'Backspace') {
    //Needs error handling: For(Uncaught (in promise) TypeError: Cannot read properties of null (reading 'classList'))
    if(noteCount !== 1) {
      secondToLastSpanNote.classList.add('startTypeChar');
    } else {
      lastSpanNote.classList.add('startTypeChar');
    }
    noteCount--;
    testNotes.removeChild(currentSpanNote);
  }
  // if (eventKey === ' ' || eventKey === 'Spacebar') {
  //   noteCount--;
  //   currentSpanNote.append(' ')
  //   // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
  //   console.log('Space pressed');
  // }

  if (evt.code == 'ArrowLeft') {
    if(noteCount !== 1) {
      document.getElementById(`noteCount:${noteCount - 2}`).classList.add('startTypeChar');
      document.getElementById(`noteCount:${noteCount - 1}`).classList.remove('startTypeChar'); //This Line needs to be fixed
    } else {
      lastSpanNote.classList.add('startTypeChar');
    }
    document.getElementById(`noteCount:${noteCount-1}`).classList.add('afterOne');
    // document.getElementById(`noteCount:${noteCount-1}`).id = `noteCount:${noteCount}`; 
    console.log(document.getElementById(`noteCount:${noteCount-1}`));
    // spanNotes.id = `noteCount:${i}`;
    movedPlaceForText = true;
    movedPlaceForAfterOne = true;
    // numOfLeftArrowPressed++; 
  }

  if (evt.code == 'Enter') {
    const newLi = document.createElement('ul')
    testNotes.append(newLi);
  }
  // console.log(noteCount);
  // noteCount = testNotes.children.length;
  // if(spanNotes)
  // console.log(noteCount);
  console.log();
  // document.querySelector('.afterOne').id !== null 
  if(movedPlaceForAfterOne) document.querySelector('.afterOne').id = `noteCount:${noteCount}`;
  // else if(document.querySelector('.afterOne').id == null) console.log('being a bum');
  else {
    //Future Error Handling
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

