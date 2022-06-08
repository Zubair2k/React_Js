import React,{FunctionComponent as FC,useState} from 'react';
import './App.css';

interface Props{
    changeDelete:any;
    cont : any;
    getCount:any;
}

let inc=0
const TodoC:FC<Props>=({cont,getCount,changeDelete})=> {

    const [updatebtn,setUpdatebtn]=useState<boolean>(false);
    const [strike,setStrike]=useState<boolean>(false)
    const [editbtn,setEditbtn]=useState<boolean>(true)

    const handleCheck=(e:any)=>{
        strike ? inc-- : inc++
        setUpdatebtn(false);
        setEditbtn(!e.target.checked)
        getCount(inc)
        setStrike(ps => !ps)
    }

    const handleDelete=(numdel:any)=>{
       changeDelete(numdel.id);
    }

    const handleEdit=()=>{
        setEditbtn(false)
       setUpdatebtn(true);
    }

    const handleUpdate=()=>{
        setUpdatebtn(false);
        setEditbtn(true)
    }

    return (
        
        <div className="TodoC">
            <input type="checkbox" className='checkbox' id={cont.id} onClick={handleCheck}/>
            <h3 id={cont.id} contentEditable={updatebtn} className={strike ? "check":""}>{cont.text}</h3>
            <div>
                {editbtn  && <button id={cont.id} className="delete" onClick={(e)=>handleDelete(e.target)}>X</button>}
                {editbtn &&<button id={cont.id} className="edit" onClick={handleEdit}>EDIT</button> } 
                {updatebtn &&<button id={cont.id} className="update" onClick={handleUpdate}>UPDATE</button>}
            </div>
        </div>
        
    )
}

export default TodoC;
