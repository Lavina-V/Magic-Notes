console.log('WElcome to App');

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function(e) {

  let notesObj=[];
  let textadded;
  let titleadded;

  let data = localStorage.getItem('Data');

  if(data==null) {
    notesObj=[];
  }
  else {
    notesObj = JSON.parse(data);
  }

  textadded = document.getElementById('addTxt');
  titleadded = document.getElementById('addTxt1');

  let myObj {
    textadded : addTxt.value;
    titleadded: addTxt1.value;
  }

  notesObj.push(myObj.value);
 

  localStorage.setItem('Data',JSON.stringify(notesObj));

  textadded.value = "";
  title.value = "";

  show();

});

function show() {
  let data = localStorage.getItem('Data');

  if(data==null) {
    notesObj=[];
  }
  else {
    notesObj = JSON.parse(data);
  }

  let showNotes = document.getElementById("notes");

  
  let html="";
    
  notesObj.forEach(function(element,index) {
      //here we create cards
      html+= `
      <div class="card" style="width: 18rem;">
          <div class="card-body my-2 mx-2">
              <h5 class="card-title">${index + 1}</h5>
              <p class="card-text"></p>
              <div class="form-group">
                  <textarea class="form-control" id="addTxt" rows="3">${element}</textarea>
                   
              </div>
              
              <button class="btn btn-primary" id="${index}" onclick="deleteNode(this.id)">Delete Note</button>
          </div>
      </div>
               `
      //most imp thing here is onclick..
  });
  //card are added
  showNotes.innerHTML = html;
}


function deleteNode(index) {
  let data = localStorage.getItem('Data');

  if(data==null) {
    notesObj=[];
  }
  else {
    notesObj = JSON.parse(data);
  }

  notesObj.splice(index , 1);
  localStorage.setItem('Data',JSON.stringify(notesObj));
  show();
}

// let search = document.getElementById('searchTxt');
// search.addEventListener("input",function(){

//   let inputVal = search.value;
//   console.log('Input event fired',inputVal);

//   let 
// });
