//alert("My notes app working");
selected = null;



// When notes are saved
function onFormSubmit(){
  var formData = readFormData();
  var picked = document.getElementById("colorpicker").value;
  var fonts = document.getElementById("font").value;
  fonts = fonts + "px";
  if(selected == null){
    insertNewNotes(formData, picked, fonts);
  }
  else{
    updateNotes(formData);
  }
  resetForm();
  document.getElementById("notesInput").style.color = picked;
  
}

// Read the Notes
function readFormData(){
  var formData = {}
  formData["notesInput"] = document.getElementById("notesInput").value;
  return formData;
}

// Insert Notes
function insertNewNotes(data,picked, fonts){
  var table = document.getElementById("notesList").getElementsByTagName("tbody")[0];
  var newR=table.insertRow(table.length);
  cell1 = newR.insertCell(0);
  cell1.innerHTML = data.notesInput;
  cell1.style.color = picked;
  cell1.style.fontSize = fonts;
  cell1.style.width = "230px";
  cell1.style.padding="10px 10px";
  cell2 = newR.insertCell(1);
  cell2.innerHTML = `<a onClick="onEdit(this)" class="editbtn"><img src="/pen_icon.png" width="12px"></a> 
                      <a onClick="onDelete(this)" class="deletebtn">X</a>`;

  localStorage.setItem("newR",data.notesInput);

}

// Edit Notes
function onEdit(td){
  selected = td.parentElement.parentElement;
  document.getElementById("notesInput").value = selected.cells[0].innerHTML;
}

// Update Notes
function updateNotes(formData){
  selected.cells[0].innerHTML = formData.notesInput;
}

// Delete Notes
function onDelete(td){
  if(confirm('Are you sure you want to delete?')){
    selectedCell = td.parentElement.parentElement;
    document.getElementById("notesList").deleteRow(selectedCell.rowIndex);
    
    localStorage.removeItem(selectedCell);
  }
}

// Reset the Input field
function resetForm(){
  document.getElementById("notesInput").value ="";
}

