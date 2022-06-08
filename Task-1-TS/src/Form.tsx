import React,{FormEvent, FunctionComponent as FC, useState} from 'react';
import TODOI from "./TodoInterface";
import TodoC from './TodoC';
import './App.css';

const Form:FC =()=> {
    let id=0;
    const [count,setCount]=useState<number>(0);
    const [todo,setTodo]=useState<string>("");
    const [toggle,setToggle]=useState<boolean>(true);
    const [todos,setTodos]=useState<TODOI[]>([]);

    const getCount=(count:number)=>{
        setCount(count)
    }
    const changeDelete=(delid:any)=>{
        console.log(delid)
        let remainingvalue=todos.filter((deldata)=>deldata.id!=delid)
        console.log(remainingvalue)
        setTodos(remainingvalue);
    }

    const handleChange=(e:any)=>{
       setTodo(e.target.value)
    }

    const handleSubmit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
            if(!todo)
            {
                return alert("Please fill the text field")
            }
            else
            {
                let arr=todos;
                id=arr.length
                arr.push({
                    id:id,
                    text:todo
                })
                setTodos(arr)        
            }      
            setTodo("")   
            setToggle(!toggle);        
        }
        
    return (
        <div className="Form">
            <h1>TODO APP</h1>
            <form onSubmit={handleSubmit} className="addtask">
                <input type="text" className='task' placeholder='Add Task' onChange={handleChange} value={todo}/>
                <button type='submit' className='addbtn'>ADD</button>
            </form>
            <h2>Task Completed : {count}</h2>
            <div className="Todo_Container">
                <h1>THINGS</h1>
                {todos.map((cont) => (
                    <TodoC cont={cont} getCount={getCount} changeDelete={changeDelete}/>
                ))}    
            </div>
        </div>
    )
}

export default Form;
