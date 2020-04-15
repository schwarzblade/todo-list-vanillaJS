//selectors
const todoInput = document.querySelector('.todo-input')	
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

//event listener


todoButton.addEventListener('click',addItem);


todoList.addEventListener('click', deleteCheck);


//functions



function addItem(e){
	e.preventDefault();

	const todoDiv = document.createElement("div");
	todoDiv.classList.add("todo");

	//create li

	const newTodo = document.createElement("li");
	newTodo.innerText = todoInput.value;
	newTodo.classList.add("todo-item");

	todoDiv.appendChild(newTodo);

	//check mark button
	const completedBtn = document.createElement("button");
	completedBtn.innerHTML = '<i class="fas fa-check"></i>';
	completedBtn.classList.add('complete-btn');
	todoDiv.appendChild(completedBtn);

	//delete btn
	const trashBtn = document.createElement("button");
	trashBtn.innerHTML = '<i class="fas fa-trash">';
	trashBtn.classList.add('trash-btn');
	todoDiv.appendChild(trashBtn);

	//apend tolist

	todoList.appendChild(todoDiv);


	//clear input 
	
	todoInput.value="";

}


function deleteCheck(e){
	const item = e.target; 
	//delete todo
	if(item.classList[0] === 'trash-btn'){
		const todo = item.parentElement;
		todo.classList.add('fall');
		todo.addEventListener('transitionend', function(){
			todo.remove();
		})
	}

	//checkmark

	if(item.classList[0] === 'complete-btn'){
		item.parentElement.classList.toggle('completed');
	}
}