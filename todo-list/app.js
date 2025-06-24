import { collection, onSnapshot, getDocs, db, addDoc, doc, deleteDoc, updateDoc } from './firebaseconfig.js';



let inputBc = document.querySelector("#input_bc");
let inputDiv = document.querySelector(".todo-input-container");
let todoInput = document.querySelector("#todo_input");
let todoList = document.querySelector(".todo-list");
let showBtn = document.querySelector("#show_input_btn");
let closeBtn = document.querySelector("#close_input");
let addBtn = document.querySelector("#add_task");




let showInput = () => inputBc.style.display = 'flex';
let closeInput = () => inputBc.style.display = 'none';;

showBtn.addEventListener("click", showInput);
closeBtn.addEventListener("click", closeInput);

let todos = [];



let renderTodos = () => {
    todoList.style.justifyContent = 'normal'
    todoList.innerHTML = '';


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


        editBtn.addEventListener("click", async (e) => {
            let uid = e.target.parentNode.childNodes[0].id ;
            let guidSpan = document.querySelector("#user_guid") ;
            
            todoInput.value = e.target.parentNode.childNodes[0].innerText
            
            inputBc.style.display = 'flex';
            guidSpan.style.display = 'none'
            guidSpan.parentNode.style.justifyContent = 'end'
            addBtn.style.display = 'block'
            inputDiv.childNodes[3].childNodes[1].innerText = "Edit Task"
            
            todoInput.removeEventListener("keypress",addTodoWithBtn)
            addBtn.addEventListener("click", async () => {
                try {
                    inputBc.style.display = 'none';
                    
                    const updateDocRef = doc(db, "todos", uid);
                    await updateDoc(updateDocRef, {
                        todo: todoInput.value
                    })

                    todoInput.value = '' ;
                    inputDiv.childNodes[3].childNodes[1].innerText = "Add Task"
                    addBtn.style.display = 'none'
                    guidSpan.style.display = 'inline'
                    guidSpan.parentNode.style.justifyContent = 'center'
                    todoInput.addEventListener("keypress", addTodoWithBtn)
                    
                } catch (error) {
                    console.error(error)
                }
            })


        })


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


        todoList.appendChild(todoDiv);
        todoDiv.appendChild(todoPara);
        todoDiv.appendChild(editBtn);
        todoDiv.appendChild(deleteBtn);


    })

}



const unsub = onSnapshot(collection(db, "todos"), (res) => {
    todos = [];

    res?.docs?.forEach((doc) => {
        todos.push({ uid: doc?.id, ...doc?.data() });
    })
    renderTodos()

})



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

let addTodoWithBtn = (e)=>{
    if(e.key === "Enter"){
        addTodo()
    }
}

todoInput.addEventListener("keypress",addTodoWithBtn)








