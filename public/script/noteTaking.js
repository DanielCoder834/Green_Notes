
// const unTypeables = ['Backspace', 'Enter', 'Tab', 'CapsLock', 'Shift', 'Control', 'Alt', 'PageUp', 'PageDown', 'Home', 'Insert', 'End',
//   'Delete', 'Escape', 'Pause', 'ScrollLock', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9',
//   'F10', 'F11', 'F12', 'AudioVolumeUp', 'AudioVolumeDown', 'NumLock', 'Meta', 'ContextMenu']

const testNotes = document.querySelector("#testNotes");
const notesDiv = document.querySelector("#notesDiv");

let noteCount = 0;

document.addEventListener("keydown", async function (evt) {
  let eventKey = evt.key;
  noteCount = testNotes.children.length;

  if (eventKey.length === 1 && eventKey !== ' ') {
    const spanNotes = document.createElement('span');
    spanNotes.setAttribute('id', `noteCount:${noteCount}`); //Notecount can break if someone changes the notecount manually
    testNotes.append(spanNotes);
    // noteCount++;
    spanNotes.append(eventKey);
    document.getElementById(`noteCount:${noteCount}`).classList.add('startTypeChar');
    if(document.getElementById(`noteCount:${noteCount - 1}`) !== null) {
      document.getElementById(`noteCount:${noteCount - 1}`).classList.remove('startTypeChar');
    } 
    else {
      //Error handling
    } 
  }
  if (evt.code == 'Backspace') {
    //Needs error handling: For(Uncaught (in promise) TypeError: Cannot read properties of null (reading 'classList'))
    if(noteCount !== 1) {
      document.getElementById(`noteCount:${noteCount - 2}`).classList.add('startTypeChar');
    } else {
      document.getElementById(`noteCount:${noteCount - 1}`).classList.add('startTypeChar');
    }
    noteCount--;
    testNotes.removeChild(document.getElementById(`noteCount:${noteCount}`));
  }
  if (eventKey === ' ' || eventKey === 'Spacebar') {
    noteCount--;
    document.getElementById(`noteCount:${noteCount}`).append(' ')
    // ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
    console.log('Space pressed');
  }

  if (evt.code == 'ArrowLeft') {
    console.log(noteCount);
    // noteCount -= 2;
    console.log(noteCount);
  }

  if (evt.code == 'Enter') {
    const newLi = document.createElement('ul')
    testNotes.append(newLi);
  }
  // console.log(noteCount);
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

