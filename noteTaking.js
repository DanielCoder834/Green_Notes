
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


    nameObj.forEach(function (element, index) {
        html += `
        <div class="list-group list-group-flush border-bottom scrollarea">
            <div class="align-items-center">
            <ul class="nav nav-tabs">
                        <li class="nav-item">
                        <a href="#" class="py-3 list-group-item list-group-item-action active bg-success" aria-current="true"> 
                            ${element}
                            <button type="button" class="btn-close btn-close-white float-end" 
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

    let notesElm = document.getElementById("notes");

    if (notesObj.length != 0) notesElm.innerHTML = html;
    else
        notesElm.innerHTML = `Nothing to show! 
        Use "Add a Note" section above to add notes.`;
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