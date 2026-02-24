## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
### Answer:
getElementById:
1.The getElementById() is a method that return the specified value.
2.All tag id must be unique, if two or more tag id are same,then return the
first value of id.

getElementsByClassName:
1.    The getElementsByClassName is method that return the collection of elements .
2. Collection of elements like a html collection that similar to array list.
3. By using this method,we find the length easily.


querySelector:
1. querySelector is method that return the first elements matches in css selector.
2. It is faster in single items

querySelectorAll
1. querySelectorAll() is method that,when matches the all className or idName;
2. It return also nodeList.
3. nodeList similar of Array list,we can easily found


### 2. How do you create and insert a new element into the DOM?
--> At first we create dummy div or section.Then retrive id by using getElementById.This value store in varible like parentDiv. Then we use createElement method. then createElement appendChild in parentDiv. Then  
successfully created the new elements. 

### 3. What is Event Bubbling? And how does it work?
Event Bubbling:
Event Bubbling javascript mechanism where event triggered in a child element
propagates upword its ancestor elements in the DOM tree, from the innermost target to the root.


--->
When a clicked child element, it go to parent element,then go to grandParent
elements.It is go to upword. it moves inner elements to outer elements.

### 4. What is Event Delegation in JavaScript? Why is it useful?
--> Event Delegation is method of javascript , it conrols in one unique element id,that have contain many child element.
Only one event listener instead of many.

-->why is it useful for
1.Better Performance
2.Works for Dynamic Elements
3.Cleaner Code
Important for Large Applications



### 5. What is the difference between preventDefault() and stopPropagation() methods?

Both are javascript method , do jobs different.

preventDefault stops the default browser bahaviour.
it is used for link or form.

stopPropagation it stop the event bubbling up.
it prevent child element move to parent element.


