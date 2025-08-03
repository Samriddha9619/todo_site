function renderTodo(todo){
  const list = document.querySelector(".todo-list");
  const item = document.querySelector(`[data-key='${todo.id}']`);
  const isChecked = todo.checked ? "done" : "";
  const newlist= document.createElement("li");
  newlist.setAttribute("class", `todo-item ${isChecked}`); 
  newlist.setAttribute("data-key", todo.id);

newlist.innerHTML = `
<input id="${todo.id}"  type="checkbox"/>
<label for "${todo.id}"  class="tick js-tick"></label>
<span>${todo.todoText}</span>
<button class="delete-todo js-delete-todo">
<button class="delete-todo js-delete-todo">
<svg fill="var(--svgcolor)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
</svg>
</button>
`;

  // appending a newList in list
  list.append(newlist);
 }

function addTodo(todoText,id){
    const todoobject = {
    todoText:document.querySelector("inputselect").value,checked:false;
    id:Date.now(),
};
console.log(todoobject);
renderTodo(todoobject);
}

const form=document.querySelector("formselect");
form.addEventListener("submit",(event)=>{
    event.preventDefault();
    addTodo();
    form.reset();
}
