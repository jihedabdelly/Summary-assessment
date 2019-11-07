function addItem() {
	var ul = document.getElementsByTagName('ul')
	var newList = document.createElement("li");
	ul.appendChild(newList);
	// I wanted to append a list inside the ul

	var element = document.getElementByTagName("li");

	if(element.innerText === "red") {
      	element.classList.add("red");
    } else if(element.innerText === "yellow") {
      	element.classList.add("yellow");
    } else if(element.innerText === "blue") {
      	element.classList.add("blue");
    }

    
} 


addItem();