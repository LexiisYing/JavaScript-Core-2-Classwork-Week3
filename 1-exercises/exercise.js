/*
  To complete these exercises use vscode-live-server plugin to get live updates of your changes.
  - Install the Live Server plugin
  - Right click on index.html and select "Open with Live Server"
*/

/*
Task 1
=======

Write JavaScript below that console.logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotronText"
    --> should log the "#jumbotronText" node

    4. all the "p" elements of contained inside the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const pElement = document.querySelectorAll('p');
console.log(pElement);

const firstDiv = document.querySelector('div');
console.log(firstDiv);

const idElement = document.querySelector('#jumbotronText');
console.log(idElement);

const allP = document.querySelectorAll('.primary-content p'); // added space in front of the P.
// can also do document.querySelector('.primary-content').queryselectorAll('p');
console.log(allP);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the 
text "Thanks for visiting Bikes for Refugees!"
*/
let myButton = document.querySelector('#alertBtn');

myButton.addEventListener('click', () => {
  alert("Thanks for visiting Bikes for Refugees!")
});


// 


/*
Task 3
=======

When a user clicks the 'Change colour' button, the background colour of the page should change to red.
Hint: can you do this with a CSS class instead of adding styles to the element?
*/

let bgColor = document.querySelector('#bgrChangeBtn');

bgColor.addEventListener('click', () => {
  const body = document.querySelector('body');
  body.style.backgroundColor = "red";
})

// bgColor.style.backgroundColor = "red";


/*
Task 4
======

When a user clicks the 'Larger links!' button, the text of all links on the page should increase.
*/

 let lBtn = document.querySelector('#largerLinksBtn');

 lBtn.addEventListener('click', () => {
  const navLinks = document.querySelectorAll('a');
  for (let i = 0; i < navLinks.length; i++ ) {
    navLinks[i].style.fontSize = '20';
  }

 });


/*
Task 5
======

When a user clicks the 'Add some text' button, the text in the input field should be appended to the page as a new paragraph below it.
Hint: the new paragraph should be appended to the element with id 'addArticle'.
*/

let textBtn = document.querySelector('#addArticleBtn');

textBtn.addEventListener('click', () => {
  const text = document.querySelector('#addArticleInput').value;

  const userInput = document.createElement('p');
  userInput.innerText = text;

  const parent = document.querySelector('#addArticle');
  parent.appendChild(userInput);
});






