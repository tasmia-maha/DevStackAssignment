# DevStackAssignment

# Dev Stack

# Project Description

Dev Stack is a responsive web application where developers can explore different development technologies and build their own technology stack.

Users can view technology details, add technologies to their personal stack, remove individual technologies, and remove all selected technologies.

# Technologies Used

React.js
TypeScript
Tailwind CSS
React Icons
React Toastify
JSON
Vite

# Features

1. Explore Technologies

Users can explore different frontend, backend, database, and development tools with their descriptions, categories, difficulty levels, ratings, and badges.

2. Build Your Own Stack

Users can add technologies to their personal stack and remove them whenever they want.

3. Responsive Design

The website is fully responsive and works on desktop, tablet, and mobile devices.

# React Questions & Answers

1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React code easier to read and helps us create UI components more easily.

2. What is the difference between State and Props?

Props are used to pass data from a parent component to a child component.

State is data managed inside a component that can change over time.

For example, in this project, selected technologies are managed using state.

3. What is the use of useState in React?

useState is a React Hook used to create and manage changing data inside a component.

In this project, it is used to manage selected technologies, loading state, and the mobile menu state.

4. What is the use of useEffect in React?

useEffect is a React Hook used to perform side effects in a component.

In this project, it is used to load the technology data from the JSON file when the application starts.

5. Why is the key prop used in React lists?

The key prop helps React identify each item in a list.

It allows React to efficiently update, add, or remove list items when the data changes.

6. What is conditional rendering in React?

Conditional rendering means showing different UI based on a condition.

For example, in this project, if the stack is empty, it shows "Your Stack is empty". If technologies are selected, it displays the selected technologies instead.

7. How can you pass data from a child component to a parent component in React?

We can pass a function from the parent component to the child through props.

The child component can then call that function and send data back to the parent.

In this project, the technology card receives an onAdd function through props and uses it to add a technology to the user's stack.

> > > > > > > 65bafbfa2f32fe23471a8b23aa8558b1c6d6063f
