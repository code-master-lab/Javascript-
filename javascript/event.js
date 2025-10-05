// 1️⃣ Mouse Events
const box = document.getElementById('box');

box.addEventListener('click', function(event) {
    console.log('Box clicked');
    box.style.backgroundColor = 'lightgreen';
});

box.addEventListener('dblclick', function() {
    console.log('Box double-clicked');
    box.style.backgroundColor = 'lightpink';
});

box.addEventListener('mouseover', function() {
    console.log('Mouse over box');
});

box.addEventListener('mouseout', function() {
    console.log('Mouse out from box');
});

box.addEventListener('mousemove', function() {
    console.log('Mouse moving over box');
});

// 2️⃣ Keyboard Events
const inputField = document.getElementById('inputField');

inputField.addEventListener('keydown', function(event) {
    console.log('Key down:', event.key);
});

inputField.addEventListener('keyup', function(event) {
    console.log('Key up:', event.key);
});

inputField.addEventListener('keypress', function(event) {
    console.log('Key press:', event.key);
});

// 3️⃣ Form Events
const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload
    console.log('Form submitted');
});

inputField.addEventListener('input', function(event) {
    console.log('Input event:', event.target.value);
});

inputField.addEventListener('change', function(event) {
    console.log('Change event:', event.target.value);
});

inputField.addEventListener('focus', function() {
    console.log('Input focused');
});

inputField.addEventListener('blur', function() {
    console.log('Input blurred');
});

// 4️⃣ Window Events
window.addEventListener('load', function() {
    console.log('Window loaded');
});

window.addEventListener('resize', function() {
    console.log('Window resized');
});

window.addEventListener('scroll', function() {
    console.log('Window scrolled');
});

// 5️⃣ Event Propagation
const outerDiv = document.createElement('div');
outerDiv.style.width = '300px';
outerDiv.style.height = '300px';
outerDiv.style.backgroundColor = 'lightgray';
outerDiv.textContent = 'Outer Div';
outerDiv.style.textAlign = 'center';
outerDiv.style.lineHeight = '300px';
document.body.appendChild(outerDiv);

const innerDiv = document.createElement('div');
innerDiv.style.width = '150px';
innerDiv.style.height = '150px';
innerDiv.style.backgroundColor = 'gray';
innerDiv.textContent = 'Inner Div';
innerDiv.style.margin = 'auto';
innerDiv.style.lineHeight = '150px';
outerDiv.appendChild(innerDiv);

outerDiv.addEventListener('click', function() {
    console.log('Outer Div clicked (Bubbling)');
});

innerDiv.addEventListener('click', function(event) {
    console.log('Inner Div clicked');
    event.stopPropagation(); // stops bubbling here
});

// 6️⃣ addEventListener and removeEventListener
function tempListener() {
    console.log('Temporary listener executed, removing now.');
    box.removeEventListener('click', tempListener);
}
box.addEventListener('click', tempListener);

