import React, { useEffect, useState } from 'react'
import './Alltasks.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import Edit from './Edit';

function Alltasks() {

    const [data,setData] = useState([])
    let navigate = useNavigate()
    let url = "http://localhost:8000/alltask"
    const fetchData = async(url)=>{
        let fetchData = await axios.get(url)
        let data = fetchData?.data?.task
        setData(data)
    }
    useEffect(()=>{
        fetchData(url)
    },[url]) 

    const deleteHandler = async(id)=>{
        let fetchData = await axios.delete(`http://localhost:8000/delete/${id}`)
        window.location.reload()
        console.log(fetchData);
    }
    
    const [speciTask,setSpeciTask] = useState("")
    const [speciId,setSpeciId] = useState("")

  return (
    <>
    <div style={{display:"flex",justifyContent:"center", marginTop:"5%"}}>
      <div class="card border-light mb-3 main-car" style={{maxWidth:"58rem",height:"100%"}}>
        <h1 class="card-header container header-tex" style={{textAlign:"start"}}>My Tasks</h1>
        <div style={{margin:"0",padding:"0"}} class="card-body">
            <ul style={{padding:"0"}}>
                {data?.length > 0 ? data?.map((data)=>{ 
                   return <li key={data._id} className='list-item container'>
                        <div style={{display:"flex"}}>
                            <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <h6 className='list-item-tex'>{data.task}</h6>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-evenly",width:"5rem"}}>
                        <button type="button" class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#exampleModal1" onClick={()=>{
                            setSpeciId(data._id)
                            setSpeciTask(data.task)}}><i class="fa-solid fa-pen-to-square" style={{color:"#00c732"}}></i></button>
                        <button type="button" class="btn btn-outline-danger" style={{marginLeft:"5px"}}><i class="fa-solid fa-trash" onClick={()=>deleteHandler(data._id)} style={{color:"red"}}></i></button>
                        </div>
                    </li>
                }) : <li key={data._id} className='list-item container'>
                        <div style={{display:"flex"}}>
                            {/* <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/> */}
                            <h6 className='list-item-tex'  style={{color:"green"}}>There is no task to do right now !</h6>
                        </div>
                {/* <div style={{display:"flex",justifyContent:"space-evenly",width:"5rem"}}>
                    <i class="fa-solid fa-pen-to-square" style={{color:"#00c732"}}></i>
                    <i class="fa-solid fa-trash" onClick={()=>deleteHandler(data._id)} style={{color:"red"}}></i>
                </div> */}
            </li>}
            </ul>
        </div>
      </div> 
    </div>
    {speciTask.length >0 && <Edit task={speciTask} id={speciId}/>}
    </>
  )
}

export default Alltasks
