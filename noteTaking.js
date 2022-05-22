
const tabs = document.querySelectorAll('.tab')
const tabContents = document.querySelectorAll('.tabContent')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('active')
    })
    tab.classList.add('active')
    // target.classList.add('active')
  })
})


showNotebookName();

let addNotebook = document.getElementById("addNotebook");
addNotebook.addEventListener("click", function (e) {
    let addNotebookName = document.getElementById("addNotebookName");
    let name = localStorage.getItem("name");

    if (name == null) nameObj = [];
    else nameObj = JSON.parse(name);

    nameObj.push(addNotebookName.value);
    localStorage.setItem("name", JSON.stringify(nameObj));
    addNotebookName.value = "";

    showNotebookName();
})


function showNotebookName() {
    let name = localStorage.getItem("name");

    if (name == null) nameObj = [];
    else nameObj = JSON.parse(name);

    let html = "";

    let sidebar = document.querySelector('#tabsPage');
    let noteHtml = document.createElement('div');

    nameObj.forEach(function (element, index) {
        noteHtml.innerHTML = `<div class="contentWrapper w-75 tabContent" data-tab-content>
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">
                Add a Note

            </h5>
            <div class="form-group">
                <textarea class="form-control" id="addTxt" rows="3">
    </textarea>
            </div>
            <button class="btn btn-primary" id="addBtn" style="background-color:green">
                Add Note
            </button>
        </div>
    </div>
    <div id="notes" class="row container-fluid">
    </div>
</div>`;
sidebar.insertAdjacentElement('beforeend', noteHtml);
        html +=
            `<div class="list-group list-group-flush border-bottom scrollarea">
            <div class="align-items-center" data-tab-target="#notePad">
            <ul class="nav nav-tabs">
                        <li class="nav-item">
                        <a href="#" data-tab-target = "#${element}" class="py-5 list-group-item list-group-item-action active bg-success" aria-current="true"> 
                            ${element} 
                            \u00A0
                            \u00A0
                            <button type="button" class="btn-close btn-close-white float-end tabLinks"
                            id="${index}" 
                            onclick="deleteName(this.id)"
                            aria-label="Close"></button>
                        </a>
                    </li>
                </ul>
            <div/>
        <div/>`;
    });

    let nameElm = document.getElementById("name");

    if (nameObj.length != 0) nameElm.innerHTML = html;
    else
        nameElm.innerHTML = `Ready to start writing?`;
}
function deleteName(index) {
    let name = localStorage.getItem("name");

    if (name == null) nameObj = [];
    else nameObj = JSON.parse(name);

    nameObj.splice(index, 1);

    localStorage.setItem("name",
        JSON.stringify(nameObj));

    showNotebookName();
}


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





showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";

    showNotes();
});


// Function to show elements from localStorage
function showNotes() {
    let notes = localStorage.getItem("notes");

    if (notes == null) notesObj = [];
    else notesObj = JSON.parse(notes);

    let html = "";

    notesObj.forEach(function (element, index) {
        html += `<div class="noteCard my-2 mx-2 card" 
            style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">
                        Note ${index + 1}
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

        // let notesElm = document.getElementById("notes");

        // if (notesObj.length != 0) notesElm.innerHTML = html;
        // else
        //     notesElm.innerHTML = `Nothing to show! 
        //     Use "Add a Note" section above to add notes.`;
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