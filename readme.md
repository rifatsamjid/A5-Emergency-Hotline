## 1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

### **getElementById**

**purpose:**  
_Get a Dom element by its id attribute._

**How it works:**

- returns a single element Whose ID matches the given string.

**Key Difference:**

- The id must be unique the DOM.
- Cannot return multiple element.

---

### **getElementsByClassName**

**purpose:**

- Gets all DOM elements that have a specific class.

**How it works:**

- Returns an HTML collection, Which is array like but not actually array.
- Can select multiple element.

**Key Difference:**

- Live collection update automatically if the DOM changes.
- Cannot directly use .forEach() (need array.form() first).

---

### **querySelector / querySelectorAll**

**purpose:**

- Use CSS selector to find elements in DOM.

**How it works:**

- querySelector returns the first matching elements.
- querySelector all returns matching element as a NodeList.

**Key Difference:**

- Very flexible you can use ID,class,tag,attribute selectors, or any CSS selector.
- nodeList allow .forEach() directly.
- querySelectorAll is Static, meaning it does not auto-update if DOM changes.

---

## 2. How do you **create and insert a new element into the DOM**?

**answer :**  
To create and insert a new element into the DOM,generally follow three main steps:

**1. create element**

```
const div = document.createElement("div");
```

2. set it content or attributes

div.innerText = "Hello world";
div.className = "my-class";
div.setAttribute("id", "myDiv");

3. insert into the DOM

const parent = document.getElementById("container");
parent.appendChild(div);

## 3. What is **Event Bubbling** and how does it work?

**answer :**

**Definition:**  
Event Bubbling is a way that events propagate through the DOM

- when an event happens on an element,it first triggers on that element , then bubbles up to its parent , then the parent's and so on, all the way to the document object.

**How it works:**

1. You click on a child element
2. The click event fires on the button first.
3. Then it moves to the button's parent div.
4. Then to the grandparent element , and finally up to document.

## 4. What is **Event Delegation** in JavaScript? Why is it useful?

**answer :**

**Definition:**  
Event delegation is a technique where you attach a single event listener to parent element instead of adding individual listeners to each child element

- The parent handles events triggered by its children by checking the event target.

**How it Works:**

1. Attach a listener to a common parent of multiple child elements.
2. When a child element triggers the event , the event bubbles up to the parent.
3. Inside the parent's listener , use event.target to check which child triggered the event.
4. Perform actions based on the target element

Here's a clear explanation of the difference between preventDefault() and stopPropagation() in javaScript

### 1.preventDefault()

_purpose:Stop the default action of an element from happening._  
_id dose not stop the event from bubbling ;the event still propagates through the DOM._

- prevent a link from navigation  
  document.querySelector("a").addEventListener("click",function(event){
  event.preventDefault();
  })

- prevent a form from submitting;  
  document.querySelector("a").addEventListener("submit",function(event){
  event.preventDefault();
  })

over all summary;

- Stops browser's default behavior.  
  _Event still bubbles unless you also call stopPropagation()._

---

### 2.stopPropagation()

_Purpose:stop the event from bubbling up the DOM tree._  
_it dose not stop the default action of the element._

example:  
document.getElementById("child").addEventListener("click", function (event){
event.stopPropagation();
alert("child clicked , parent won't know!")
})
document.getElementById("parent").addEventListener("click", function (event){
alert("parent clicked!")
})

over all summary;  
_stop event propagation._  
_default browser action still happens unless preventDefault() is also called._

```

```
