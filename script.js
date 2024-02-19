let button = document.getElementById("enter");
let input = document.getElementById("userinput");
let ul = document.querySelector("ul");
let list_items = document.querySelectorAll("li > p");
let list_buttons = document.querySelectorAll("li > button");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	let p = document.createElement("p");
	let button = document.createElement("button");
	let li = document.createElement("li");

	p.appendChild(document.createTextNode(input.value));
	p.addEventListener("click", toggleDoneClass);

	button.appendChild(document.createTextNode("x"));
	button.addEventListener("click", deleteListItem);

	li.appendChild(p);
	li.appendChild(button)
	ul.appendChild(li);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleDoneClass(){
	this.classList.toggle("done");
}

function deleteListItem(){
	console.log(this.parentNode.remove());
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

list_items.forEach(item => item.addEventListener("click", toggleDoneClass));

list_buttons.forEach(button => button.addEventListener("click", deleteListItem));