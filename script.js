const todos = [
    {
        id: 1,
        name: "Buy Eggs",
        done: false
    },
    {
        id: 2,
        name: "Buy Milk",
        done: true
    },
    {
        id: 3,
        name: "Buy Bread",
        done: false
    },
    {
        id: 4,
        name: "Buy Meat",
        done: false
    },
    {
        id: 5,
        name: "Buy Rice",
        done: true
    }
];

const showTodo = (todos) => {
    const ul = document.getElementById("list");
    const removeFromUl = (ul) => {
        return function (li) {
            removeLiFromUl(ul, li);
        }
    };
    const deleteLi = removeFromUl(ul);
    todos.forEach(todo => {
        const li = createTodoElement(todo, deleteLi);
        ul.appendChild(li);
    });
}
const createTodoElement = (todo, deleteAction) => {
    const li = createTodoLiElement(todo);

    const isDone = createTodoCheckBoxElement(li, todo);
    const deleteButton = createDeleteTodoButtonElement(li, deleteAction);
    const nameElement = createTodoNameElement(todo);


    li.appendChild(isDone);
    li.appendChild(nameElement);
    li.appendChild(deleteButton);
    return li;
}

const createTodoLiElement = (todo) => {
    const li = document.createElement("li");
    li.classList.add("todo");
    markAsDone(li, todo.done);
    return li;
}

const createDeleteTodoButtonElement = (li, deleteAction) => {
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.type = "button";
    deleteButton.onclick = () => {
        const performDelete = confirm("Are you sure you want to delete?");
        if (performDelete)
            deleteAction(li);
    }
    return deleteButton;
}
const createTodoCheckBoxElement = (li, todo) => {
    const isDone = document.createElement("input");
    isDone.type = "checkbox";
    isDone.checked = todo.done;
    isDone.onclick = (event) => {
        const target = event.target;
        const isChecked = target.checked;
        markAsDone(li, isChecked);
    }
    return isDone;
}

const createTodoNameElement = (todo) => {
    const nameElement = document.createElement("span");
    nameElement.textContent = todo.name;
    return nameElement;
}

const markAsDone = (li, isDone) => {
    if (isDone) {
        li.classList.add("done");
    } else {
        li.classList.remove("done");
    }
}
const removeLiFromUl = (ul, li) => {
    ul.removeChild(li);
}

function start() {
    showTodo(todos);
}


// function sum(a, b) {
//     return a + b;
// }
//
// sum(10, 5); //15
// sum(2, 2); //4
//
// //first value always 5
//
// function sumWithFirstValue(a) {
//     return function (b) {
//         return sum(a, b);
//     }
// }
//
// const sumWith5 = sumWithFirstValue(5);
// sumWith5(8);
// sumWith5(10);









