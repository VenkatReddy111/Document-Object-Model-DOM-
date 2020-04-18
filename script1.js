//console.log('venkat');

//////////checking the html page elements in the console using document/////////

//console.log(document);
//console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);


///getElementsByclassName

// var groupedItems=document.getElementsByClassName('list-group-item');





///////////Query selector///////////////

//by using query selector we can use either direct tags 
//elements or with ids(#) and class(.)

//document.querySelector('input').value="venkat";
//document.querySelector("#venkat").textContent="Add New-Items";




////////queryselector all////

//it selects multiple elements at once

// var total=document.querySelectorAll('li');
//  var odd=document.querySelectorAll('li:nth-child(odd)');
//  var even=document.querySelectorAll('li:nth-child(even)');

//  for(i=0;i<total.length;i++){
//      odd[i].style.backgroundColor="#f4f4f4";
//      even[i].style.backgroundColor="#ccc";
 // }





////////creating new  element and appending the text into it///////


// var elementCreation=document.createElement('div');

// elementCreation.id="hello";

//console.log(elementCreation);



////appending text into newly created element

// var text=document.createTextNode('hello-world');

// elementCreation.appendChild(text);

// console.log(elementCreation);









///////javascript events///////////////

///1)
// var event=document.getElementById("num15").addEventListener('click',add);

// function add(){
//     console.log("venkat, you have clicked the button");
//     alert("hello buddy")
// }


//2)
// var event=document.getElementById("num15").addEventListener('click',add);

// function add(e){
//     console.log("you have clicked " + e.type + " Event");

// }


//////// append and prepend//////

// var parent = document.createElement("div");
// parent.append("Some text");
// parent.prepend("Headline: ");

// console.log(parent.textContent); 











