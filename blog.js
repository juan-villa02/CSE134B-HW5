
// This variable is used when updating a post.
// Whenever an update button is clicked, the row cells to be updated are stored into the variable.
// Its value by default is null
let updateRows = null

let addPostButton = document.getElementById("createPostButton");
let dialogPost = document.getElementById("postDialog")

// Display the custom dialog
createPost = () => { 
    dialogPost.showModal();
}

// Call newPost() or update() based on wheter there are rows to update or no (variable 'updateRows')
// Close the dialog whenever OK is clicked.
addPost= () => {
	
    let post = readPost();
    if (updateRows == null){
        newPost(post);
    }
    else{
        updatePost(post);
    }
    clearPost();
    dialogPost.close(); 
}

// Store and return the provided values for each field
readPost = () => {
    let post = {};
    post["postTitle"] = document.getElementById("postTitle").value;
    post["postDate"] = document.getElementById("postDate").value;
    post["postSummary"] = document.getElementById("postSummary").value;
    return post;
}

// Insert a new row in the table body defined in HTML
// Create a cell for each value inside the row
// Assign its corresponding value to each of the cells
// The last cell corresponds to the update and delete buttons
newPost = (data) => {

    let postTable = document.getElementById("postList").getElementsByTagName('tbody')[0];
    let newPost = postTable.insertRow(postTable.length);

    newTitle = newPost.insertCell(0);
    newDate = newPost.insertCell(1);
    newSummary = newPost.insertCell(2);
	updateDelete = newPost.insertCell(3);

    newTitle.innerHTML = data.postTitle;
	newDate.innerHTML = data.postDate;
	newSummary.innerHTML = data.postSummary;
    updateDelete.innerHTML = `<button onClick="edit(this)">Edit</button> <button onClick="deletePost(this)">Delete</button>`;
}

// Show the dialog whenever edit is clicked
// Obtain the values corresponding to that row by accesing the parent elements of the button
// Display those values in the form so that they can be modified
edit = (td) => {

    dialogPost.showModal();
    updateRows = td.parentElement.parentElement;
    document.getElementById("postTitle").value = updateRows.cells[0].innerHTML;
    document.getElementById("postDate").value = updateRows.cells[1].innerHTML;
    document.getElementById("postSummary").value = updateRows.cells[2].innerHTML;
}

// Insert the updated values into the updateRows variable
updatePost = (post) => {

    updateRows.cells[0].innerHTML = post.postTitle;
    updateRows.cells[1].innerHTML = post.postDate;
    updateRows.cells[2].innerHTML = post.postSummary;
}

// Acces the entire row of the table after clicking the delete button using parent elements
// Delet the row form the table
deletePost = (td) => {

    removeRow = td.parentElement.parentElement;
    document.getElementById('postList').deleteRow(removeRow.rowIndex);
    clearPost();
}

// Set all values in the form to ""
// Set variable updateRows to its defaul value
clearPost = () => {

    document.getElementById("postTitle").value = '';
    document.getElementById("postDate").value = '';
    document.getElementById("postSummary").value = '';
    updateRows = null;
}