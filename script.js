const todoSubmit = document.querySelector("form");
const todoList = document.querySelector("#todolist");


todoSubmit.addEventListener("submit", function(event){
    event.preventDefault();
    newTodo();
    todoSubmit.reset();
});


function newTodo(){
    let newTodo = document.querySelector("#todotext");
    let newLi = document.createElement("li");
    let newBtnRemove = document.createElement("button")
    let newCheckbox = document.createElement("INPUT")

    newCheckbox.setAttribute("type", "checkbox");
    newLi.innerText = newTodo.value;
    newBtnRemove.innerText = "Remove";

    todoList.addEventListener("click", function(event) {
        if (event.target.tagName === "BUTTON") {
          event.target.parentElement.remove();
        }
      });

    newCheckbox.addEventListener('change', function(event) {
        if (event.checked) {
            event.target.parentNode.style.textDecoration = "none"
        } else {
            event.target.parentNode.style.textDecoration = "line-through"
        }
      });

      newLi.append(newBtnRemove);
      newLi.prepend(newCheckbox)
      todoList.append(newLi);
}