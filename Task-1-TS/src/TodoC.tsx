import React,{FunctionComponent as FC,useState} from 'react';

import './App.css';

interface Props{
    changeDelete:any;
    cont : any;
}

const TodoC:FC<Props>=({cont,changeDelete})=> {

    const [updatebtn,setUpdatebtn]=useState<boolean>(false);
    const [strike,setStrike]=useState<boolean>(false)
    const [visible,setVisible]=useState<boolean>(false)
    const [editbtn,setEditbtn]=useState<boolean>(true)
    

    const handleCheck=(e:any)=>{
        setStrike(ps => !ps)
        setUpdatebtn(false);
        setEditbtn(!e.target.checked)
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
            <input type="checkbox" id={cont.id} onClick={handleCheck} name={cont.text} />
            <h3 id={cont.id} contentEditable={updatebtn} className={strike ? "check":""}>{cont.text}</h3>
            {editbtn  && <button id={cont.id} onClick={(e)=>handleDelete(e.target)}>X</button>}
            {editbtn &&<button id={cont.id} onClick={handleEdit}> Edit</button> } 
            {updatebtn &&<button id={cont.id} onClick={handleUpdate}>Update</button>}
            
    </div>
    )
}

export default TodoC;
