// add a submitt event listner on the form
    // Form is to get data from user and refresh
    // we need to stop default behaviour
    // clear the todo item that has been entered
const toDoItem=document.querySelector('form');
toDoItem.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log(event);

    // Query DOM for inout element to see if its empty

    const inputElement=document.getElementById('toDoItem');
    if(inputElement.value!==""){

        const newLi =document.createElement('li');
        newLi.textContent=inputElement.value;
   
        // Add font awesome icon to list item
        newLi.innerHTML= `<i class="fa-regular fa-square"></i>`;
        // Create an element for the task we have to add
        // Append that text element to the li
        // the textnode can jsut be added to the element as content
        const taskContent=document.createTextNode(inputElement.value);
        newLi.append(taskContent);
       
        // Append the list item with icon to the ul
        document.querySelector('ul').appendChild(newLi);
        // Reset input field
        inputElement.value="";
    }
    else{
        alert("Enter a task");
    }
});

const listItem=document.querySelector('li');
listItem.addEventListener('click', ()=>{
    console.log("to do has been checked ");
 
});


// grab the user's to do item from the form input
// check to see if the user has actually entered a task: Please enter a task
// address page refresh
// display the to do task on the page as an li in the ul
// the li should include a font awesome icon t show it needs to be completed
// when clicking on a task allows you to toggle between checked vs unchecked
// BONUS : add s reset button for all the to dos
// BONUS : add acongrats alert
// BONUS: add take a break after so many tasks
// BONUS: 



