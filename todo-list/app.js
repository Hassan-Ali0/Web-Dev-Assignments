import { collection, onSnapshot, getDocs,query, orderBy, db, addDoc, doc, deleteDoc, updateDoc } from './firebaseconfig.js';



let inputBc = document.querySelector("#input_bc");
let inputDiv = document.querySelector(".todo-input-container");
let todoInput = document.querySelector("#todo_input");
let todoList = document.querySelector(".todo-list");
let showBtn = document.querySelector("#show_input_btn");
let closeBtn = document.querySelector("#close_input");
let addBtn = document.querySelector("#add_task");
let delAll = document.querySelector("#delete_all");

let todos = [];



let showInput = () => inputBc.style.display = 'flex';
let closeInput = () => {
    let guidSpan = document.querySelector("#user_guid");

    inputBc.style.display = 'none'
    todoInput.value = '';
    inputDiv.childNodes[3].childNodes[1].innerText = "Add Task"
    addBtn.style.display = 'none'
    guidSpan.style.display = 'inline'
    guidSpan.parentNode.style.justifyContent = 'center'
    addEvent()

};;

showBtn.addEventListener("click", showInput);
closeBtn.addEventListener("click", closeInput);


delAll.addEventListener("click",() => {
    try {
        if(todos.length > 0){
            todos.map(async(todo)=>{
                
                await deleteDoc(doc(db, "todos", todo.uid))
            })
        }

    } catch (error) {
        console.error(error)
    }
})


let editTodo = (e) => {
    let uid = e.target.parentNode.childNodes[0].id;
    let guidSpan = document.querySelector("#user_guid");

    todoInput.value = e.target.parentNode.childNodes[0].innerText


    inputBc.style.display = 'flex';
    guidSpan.style.display = 'none'
    guidSpan.parentNode.style.justifyContent = 'end'
    addBtn.style.display = 'block'
    inputDiv.childNodes[3].childNodes[1].innerText = "Edit Task"

    todoInput.removeEventListener("keypress", addTodoWithBtn)

    let updateTodo = async () => {
        try {
            let guidSpan = document.querySelector("#user_guid");
            inputBc.style.display = 'none';
            console.log("update Todo")

            const updateDocRef = doc(db, "todos", uid);
            await updateDoc(updateDocRef, {
                todo: todoInput.value
            })

            todoInput.value = '';
            inputDiv.childNodes[3].childNodes[1].innerText = "Add Task"
            addBtn.style.display = 'none'
            guidSpan.style.display = 'inline'
            guidSpan.parentNode.style.justifyContent = 'center'
            addBtn.removeEventListener("click", updateTodo)
            todoInput.addEventListener("keypress", addTodoWithBtn)

        } catch (error) {
            console.error(error)
        }
    }
    addBtn.addEventListener("click", updateTodo)


}

let addTodo = async () => {

    todoList.innerHTML = '';

    if (todoInput.value != '') {

        inputBc.style.display = 'none'
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                todo: todoInput.value
            });

        } catch (e) {
            console.error("Error adding document: ", e);
        }
        todoInput.value = '';

    } else {
        alert("Enter a Task !")
    }
}

let addTodoWithBtn = (e) => {
    if (e.key === "Enter") {
        addTodo()
    }
}
let addEvent = () => todoInput.addEventListener("keypress", addTodoWithBtn);
addEvent()



let renderTodos = () => {
    todoList.innerHTML = '';

    if (todos.length > 0) {

        todoList.style.justifyContent = 'start'

        todos.map((todo) => {

            let todoDiv = document.createElement('div');
            let todoPara = document.createElement('p');
            let editBtn = document.createElement('button');
            let deleteBtn = document.createElement('button');

            todoDiv.className = 'todo';
            todoPara.className = 'todo-txt';
            editBtn.className = 'edit-btn'
            deleteBtn.className = 'delete-btn'

            editBtn.style.backgroundImage = 'url(./assets/edit.svg)'
            deleteBtn.style.backgroundImage = 'url(./assets/delete.svg)'

            todoPara.innerText = todo.todo
            todoPara.id = todo.uid


            editBtn.addEventListener("click", editTodo)


            deleteBtn.addEventListener("click", async (e) => {
                try {
                    let uid = e.target.parentNode.childNodes[0].id
                    await deleteDoc(doc(db, "todos", uid))

                } catch (error) {
                    console.error(error)
                }
            })


            todoPara.addEventListener("click", () => {
                if (todoDiv.className == 'todo') {
                    todoDiv.className += ' complete'
                } else {
                    todoDiv.className = 'todo'
                }


            })


            todoDiv.appendChild(todoPara);
            todoDiv.appendChild(editBtn);
            todoDiv.appendChild(deleteBtn);
            todoList.appendChild(todoDiv);


        })
    } else {

        todoList.style.justifyContent = 'center'
        todoList.innerHTML = '<h2 class="no-todo" >No Todos</h2>'
    }

}



const unsub = onSnapshot(collection(db, "todos"), (res) => {
    todos = [];

    res?.docs?.forEach((doc) => {
        todos.push({ uid: doc?.id, ...doc?.data() });
    })
    renderTodos()

})


// let updateTodo = async(e) => 










