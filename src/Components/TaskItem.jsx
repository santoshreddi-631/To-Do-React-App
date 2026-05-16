import {useState} from "react";
function TaskItem(){
    const [tasks , setTasks] = useState([]);
    const [newTask , setNewTask] = useState();

    function inputChange(event){
        setNewTask(event.target.value);
    }
    function addTask(){

        if(newTask.trim() !== ""){
            setTasks(t => [...t,newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index){
       const updatedTask =  tasks.filter((_,i)=> i !== index); //"_" this refers ignore this 
       setTasks(updatedTask);
    }
    
    function moveUp(index){
        if(index >0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]; // this line helps to swap the two elements in an same array
            setTasks(updatedTasks);
        }

    }
    
    function moveDown(index){
         if(index < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]]; // this line helps to swap the two elements in an same array
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>
            <div>
                <input type="text" placeholder="Enter the task..." value={newTask} onChange={inputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {
                    tasks.map((task,index)=> <li key={index}   ><span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button> 
                        <button className="move-button" onClick={() => moveUp(index)}>👆</button>
                        <button className="move-button" onClick={() => moveDown(index)}>👇</button>
 
                    </li>)
                }
            </ol>
        </div>
    );
}

export default TaskItem;