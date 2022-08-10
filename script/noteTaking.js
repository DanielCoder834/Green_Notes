
let arrNotes = []; 
const testNotes = document.querySelector("#testNotes"); 
const notesDiv = document.querySelector("#notesDiv")
document.addEventListener("keydown", function (evt) {
  let eventKey = evt.key; 
  arrNotes.push(eventKey); 
  arrNotes = arrNotes.filter(evt => evt !== 'Backspace');
  arrNotes = arrNotes.filter(evt => evt !== 'Enter');
  let notes = arrNotes.join('');

    if(evt.code == 'Enter') {
    const newLi = document.createElement('li')
    notesDiv.append(newLi);
  } 
  else if(evt.code == 'Backspace') {
    let newNotes = notes.substring(0, notes.length - 1);
    testNotes.textContent = newNotes;
  }
  else {
    testNotes.textContent = notes;
  }
  // testNotes.append(notes); 
  // console.log(notes);
  
})



    
// tinymce.init({
//     selector: 'textarea#addTxt',
//     plugins: 'a11ychecker advcode casechange export formatpainter image editimage linkchecker autolink lists checklist media mediaembed pageembed permanentpen powerpaste table advtable tableofcontents tinycomments tinymcespellchecker',
//     toolbar: 'a11ycheck addcomment showcomments casechange checklist code export formatpainter image editimage pageembed permanentpen table tableofcontents',
//     toolbar_mode: 'floating',
//     tinycomments_mode: 'embedded',
//     tinycomments_author: 'Author name',
// });



// let saveBtn = document.querySelector("#saveBtn");
// saveBtn.addEventListener("click", function () {
//     let myContent = tinymce.get("addTxt").getContent();
//     localStorage.setItem("myContent", myContent);
// })
// let laodBtn = document.querySelector("#loadBtn");
// laodBtn.addEventListener("click", function () {
//     let myContent = localStorage.getItem("myContent");
//     tinymce.get("addTxt").setContent(myContent);
// })

//   showNotes();
  
//   let addBtn = document.querySelector(".addBtn"); 
//   addBtn.addEventListener("click", function (e) {
//     let myContent = localStorage.getItem("myContent");
//     let addTextN = localStorage.getItem("addTextN"); 

//     let notes = localStorage.getItem("notes");
  
//     if (notes == null) notesObj = [];
//     else notesObj = JSON.parse(notes);
  
//     if(addTextN == null) addTextNObj = []; 
//     else addTextNObj = JSON.parse(addTextN);

//     notesObj.push(myContent);
//     localStorage.setItem("notes", JSON.stringify(notesObj));
//     myContent.value = "";  
  
//     localStorage.setItem("addTextN", JSON.stringify(addTextNObj));

//     showNotes();
//   });

//   let addNoteNameBtn = document.querySelector(".addNoteNameBtn");
//   addNoteNameBtn.addEventListener("click", function (e) {
//       let addTextN = document.getElementById("addTextN");
//       let theNoteName = localStorage.getItem("theNoteName");
  
//       if (theNoteName == null) theNoteNameObj = [];
//       else theNoteNameObj = JSON.parse(theNoteName);
  
//       theNoteNameObj.push(addTextN);
//       localStorage.setItem("theNoteName", JSON.stringify(theNoteNameObj));
//       addTextN.value = "";  
  
//       showNotes();
//   });
  
//   let saveAllButton = document.querySelector("#saveAllButton");
//   saveAllButton.addEventListener("click", function () {
//     let saveAllButtonVal = saveAllButton.value; 
//     localStorage.setItem("text", saveAllButtonVal); // save the item
//     var text=localStorage.getItem("text"); // retrieve
//     document.getElementById('textDiv').innerHTML = text; // display 
//   })
  // Function to show elements from localStorage
  function showNotes() {
    let notes = localStorage.getItem("notes");
    //   let theNoteName = localStorage.getItem("theNoteName");
    let addTextN = localStorage.getItem("addTextN"); 
    // let theNoteName = document.querySelector("#addTextN").value; 
    // const theNoteName = localStorage.getItem('theNoteName');
    // if(theNoteName == null) theNoteNameObj = [];
    // else theNoteNameObj = JSON.parse(theNoteName);
    let noteName = document.getElementById('addTextN'); 
    
      if (notes == null) notesObj = [];
      else notesObj = JSON.parse(notes);
      // Note ${index + 1} for card title
      if(addTextN == null) addTextNObj = [];
        else addTextNObj = JSON.parse(addTextN);

      let html = "";
  
      notesObj.forEach(function (element, index) {
          html += `<div class="noteCard my-2 mx-2 card" 
              style="width: 18rem;">
                  <div class="card-body">
                      <h5 class="card-title">
                        Green Note ${index + 1}
                      </h5>
                      <p class="card-text"> 
                          ${element}
                      </p>
     
                    <button id="${index}" onclick=
                      "deleteNote(this.id)"
                      class="btn btn-primary">
                      Delete Note
                  </button>
              </div>
          </div>`;
      });
    //   <input type="text" minlength="0" maxlength="30" size="64" class="w-100" id="noteNam"
    //   value="Default Note Name">
          let notesElm = document.getElementById("notes");
  
          if (notesObj.length != 0) notesElm.innerHTML = html;
          else
              notesElm.innerHTML = `Nothing to show! 
              Use "Create the Saved Note" section above to add notes.`;
  }
  
  // Function to delete a note
  function deleteNote(index) {
      let notes = localStorage.getItem("notes");
  
      if (notes == null) notesObj = [];
      else notesObj = JSON.parse(notes);
  
      notesObj.splice(index, 1);
  
      localStorage.setItem("notes",
          JSON.stringify(notesObj));
  
      showNotes();
  }





//   let boldButton = document.querySelector('.boldButton'); 
  // boldButton.addEventListener("click", function () {
  //       let noteTxt = document.querySelector('.noteTxt'); 
  //       noteTxt.value.style.fontWeight = "900";
  //       if (noteTxt.style.fontWeight === undefined || noteTxt.style.fontWeight === null) { 
    
  //       } 
  //   });





// const tabs = document.querySelectorAll('[data-tab-target]')
// const tabContents = document.querySelectorAll('[data-tab-content]')

// tabs.forEach(tab => {
//   tab.addEventListener('click', () => {
//     const target = document.querySelector(tab.dataset.tabTarget)
//     tabContents.forEach(tabContent => {
//       tabContent.classList.remove('active')
//     })
//     tabs.forEach(tab => {
//       tab.classList.remove('active')
//     })
//     tab.classList.add('active')
//     target.classList.add('active')
//     console.log("HYi")
//   })
// })


// showNotebookName();

// let addNotebook = document.getElementById("addNotebook");
// addNotebook.addEventListener("click", function (e) {
//     let addNotebookName = document.getElementById("addNotebookName");
//     let name = localStorage.getItem("name");

//     if (name == null) nameObj = [];
//     else nameObj = JSON.parse(name);

//     nameObj.push(addNotebookName.value);
//     localStorage.setItem("name", JSON.stringify(nameObj));
//     addNotebookName.value = "";

//     showNotebookName();
// })


// function showNotebookName() {
//     let name = localStorage.getItem("name");

//     if (name == null) nameObj = [];
//     else nameObj = JSON.parse(name);

//     let html = "";
    // const content = document.createTextNode(`<div class="col-xl-10 tabContent active" data-tab-content>
    //     <textarea>
    //         Welcome to The Green Notebook
    //     </textarea>
    // </div>`);
    // let sidebar = document.querySelector('#tabsPage');
    // let noteHtml = document.createElement('div');
    // noteHtml.classList.add("col-xl-10 tabContent active");

    // nameObj.forEach(function (element, index) {
//         noteHtml.innerHTML = ;
        // sidebar.insertAdjacentElement('beforeend', content);
        // html +=
        //     `<div class="list-group list-group-flush border-bottom scrollarea">
        //     <div class="align-items-center" data-tab-target="#notePad">
        //     <ul class="nav nav-tabs tabs">
        //                 <li class="nav-item tab" data-tab-target = "#${element}" >
        //                 <a href="#" class="py-5 list-group-item list-group-item-action active bg-success" aria-current="true"> 
        //                     ${element} 
        //                     \u00A0
        //                     \u00A0
        //                     <button type="button" class="btn-close btn-close-white float-end tabLinks"
        //                     id="${index}" 
        //                     onclick="deleteName(this.id)"
        //                     aria-label="Close"></button>
        //                 </a>
        //             </li>
        //         </ul>
        //     <div/>
        // <div/>`;
    // });

    // let nameElm = document.getElementById("name");

    // if (nameObj.length != 0) nameElm.innerHTML = html;
    // else
    //     nameElm.innerHTML = `Ready to start writing?`;
// }
// function deleteName(index) {
//     let name = localStorage.getItem("name");

//     if (name == null) nameObj = [];
//     else nameObj = JSON.parse(name);

//     nameObj.splice(index, 1);

//     localStorage.setItem("name",
//         JSON.stringify(nameObj));

//     showNotebookName();
// }


// function tabLogic(evt, element) {
//     tabcontent = document.querySelectorAll('.tabContents')
//     for (i = 0; i < tabcontent.length; i++) {
//         tabcontent[i].style.display = "none";
//     }

//     // Get all elements with class="tablinks" and remove the class "active"
//     tablinks = document.querySelectorAll('.tabLinks');
//     tablinks.classList.add("active"); 
//     for (i = 0; i < tablinks.length; i++) {
//         tablinks[i].className = tablinks[i].className.replace(" active", "");
//     }

//     // Show the current tab, and add an "active" class to the button that opened the tab
//     document.querySelector(element).style.display = "block";
//     evt.currentTarget.className += " active";
// }


