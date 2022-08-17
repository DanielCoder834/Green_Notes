
let arrNotes = [];
const unTypeables = ['Backspace', 'Enter', 'Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'PageUp', 'PageDown', 'Home', 'Insert', 'End',
  'Delete', 'Escape', 'Pause', 'ScrollLock', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
  'F10', 'F11', 'F12', 'AudioVolumeUp', 'AudioVolumeDown', 'NumLock', 'Meta', 'ContextMenu']

let noteCount = 0;

const testNotes = document.querySelector("#testNotes");
const notesDiv = document.querySelector("#notesDiv")
const notesArea = document.querySelector("#notesArea");
document.addEventListener("keydown", async function (evt) {
  let eventKey = evt.key;
  
  if (evt.code == 'Backspace') {
    document.getElementById(`noteCount:${noteCount}`).remove(); 
    noteCount--;   
  }

  noteCount++;
  const spanNotes = document.createElement('span')
  testNotes.append(spanNotes); 
  spanNotes.setAttribute('id',`noteCount:${noteCount}`)
  if (eventKey.length === 1) {
    spanNotes.append(eventKey);
  }
  
  // arrNotes.push(eventKey);
  // for (let i = 0; i < unTypeables.length; i++) {
  //   arrNotes = arrNotes.filter(evt => evt !== unTypeables[i]);
  // }
  // arrNotes = evt.code == 'Backspace' ? testNotes.textContent = arrNotes.substring(lastCharOfNote, notes.length - 1) : "";
  // let notes = arrNotes.join('');


  if (evt.code == 'Enter') {
    const newLi = document.createElement('ul')
    testNotes.append(newLi);
  }
  
  // let lastCharOfNote = notes[notes.length - 1];
    // console.log(lastCharOfNote);
    // localStorage.removeItem(lastCharOfNote);
    // let deletedNote = notes.substring(lastCharOfNote, notes.length - 1);
    // storedNotes = localStorage.setItem(deletedNote); 
    // localStorage.setItem("storedNotes", deletedNote);
    // let newNotes = notes.substring(0, notes.length - 1);
    // testNotes.textContent -= lastCharOfNote;
  // testNotes.append(notes); 
  // localStorage.setItem("storedNotes", notes);
  // testNotes.textContent = localStorage.getItem('storedNotes');
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

