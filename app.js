//get input element
let filterInput = document.getElementById('filterInput');

//add event listiner
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    //get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    // // get names ul
    // let ul = document.getElementById('names');
    // //get li from ul
    // let li = ul.querySelectorAll('.collection-item');

    // loop through collection-item li
    let contacts = document.querySelectorAll('.collection-item a');
    contacts.forEach(item => {
        let contact = item.innerHTML.toUpperCase();
        if(contact.indexOf(filterValue) > -1){
            item.style.display='';
        } else {
            item.style.display='none';
        }
    });

}