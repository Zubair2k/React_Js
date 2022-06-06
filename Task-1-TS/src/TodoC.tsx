import React,{FunctionComponent as FC} from 'react';
import TODOI from "./TodoInterface";
import Form from './Form';
import './App.css';

interface Props{
    cont : any;
}

const TodoC:FC<Props>=({cont})=> {
    const handleText=(num:any)=>{
        console.log(num)
        if(num.style["text-decoration"]==="line-through")
        {
            num.style["text-decoration"]=""
        }
        else{
            num.style["text-decoration"]="line-through"
        }
    }
    return (
        <div className="TodoC">
            <h3 id={cont.id} onClick={(e)=>{handleText(e.target)}}>{cont.text}</h3>
            <button>X</button>
            <button>Edit</button>
        </div>
    )
}

export default TodoC;
