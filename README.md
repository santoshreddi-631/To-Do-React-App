# React To-Do List App

A simple and interactive To-Do List application built using **React.js**.

## Features
- Add new tasks
- Delete tasks
- Move tasks up
- Move tasks down
- Dynamic task management using React state
- Clean and simple UI

## Technologies Used
- React.js
- JavaScript
- HTML
- CSS

## Concepts Used
- React Functional Components
- `useState` Hook
- Event Handling
- Array Methods (`map`, `filter`)
- State Management
- Updating Arrays in React

## Project Functionality

### Add Task
Users can enter a task and click the **Add** button to add it to the list.

### Delete Task
Tasks can be removed using the **Delete** button.

### Move Tasks
- 👆 Move task upward
- 👇 Move task downward

This is implemented using array swapping.

## Example Code Concepts

### Delete Task
```js
const updatedTask = tasks.filter((_, i) => i !== index);
```

This removes the selected task from the array.

### Swap Tasks
```js
[updatedTasks[index], updatedTasks[index - 1]] =
[updatedTasks[index - 1], updatedTasks[index]];
```

This swaps two tasks inside the array.

## How to Run the Project

1. Clone the repository:
```bash
git clone https://github.com/your-username/todo-react-app.git
```

2. Open the project folder:
```bash
cd todo-react-app
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## Author
Reddi Santosh
