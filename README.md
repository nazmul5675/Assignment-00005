1.getElementById:is only touch the element who have unique id . 
 getElementsByClassName:  shown the all the element with the class
querySelector: can find any first item of node

querySelectorAll: are displayed the list of node. 



2.const div = document.createElement('div);
div.innerHtml = `<h1>hello Nazu</h1>`;
document.getElementById('any Id of container div ').appendChild(div);



3.event Bubbling means child element are shown display first even they belong into his parent element. 


4.single event listener to parent element


5.preventDefault() : stops the reload of the page which is cause by from tag 
stopPropagation() : stops event from bubbling  up to parent element