function newItem(){
 
//Adding a new item to the list:    
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if(inputValue === '') {
        alert("You need to write something");
    } else {
        $('#list').append(li);
    }

//Crossing out an item:
function crossOut() {
    li.toggleClass("strike");
}

li.on("click", function crossOut() {
    li.toggleClass("strike");
});

//Adding a Delete Button
let crossOutButton = $('<button></button>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem(){
    li.addClass("delete");
}

//Make sortable
$('#list').sortable();

}