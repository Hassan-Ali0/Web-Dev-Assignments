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


        editBtn.addEventListener("click",async(e) => {
            let uid = e.target.parentNode.childNodes[0].id

            const updateDocRef = doc(db, "todos", uid);
            await updateDoc(updateDocRef, {
                todo: "edited todo"
            })
        })


        deleteBtn.addEventListener("click", async (e) => {
            try {
                let uid = e.target.parentNode.childNodes[0].id
                await deleteDoc(doc(db, "todos", uid))
                console.log()

            } catch (error) {
                console.error(error)
            }
        })
        todoPara.addEventListener("click", () => {
            todoDiv.className += ' complete'

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

    console.log(todos)
})



let addTodo = async () => {

    todoList.innerHTML = '';

    if (todoInput.value != '') {

        inputBc.style.display = 'none'
        try {
            const docRef = await addDoc(collection(db, "todos"), {
                todo: todoInput.value
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        todoInput.value = '';

    } else {
        alert("Enter a Task !")
    }
    console.log(todos)
}

addBtn.addEventListener("click", addTodo);

todoInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo()
    }
})








