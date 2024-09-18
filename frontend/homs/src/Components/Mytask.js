import React, { useEffect, useState } from 'react'
import './Mytask.css'
import axios from 'axios'

function Mytask() {

    const [data,setData] = useState([])
    let url = "http://localhost:8000/latesttasks"
    const fetchData = async(url)=>{
        let fetchData = await axios.get(url)
        let data = fetchData?.data?.task
        setData(data)
    }
    useEffect(()=>{
        fetchData(url)
    },[url]) 

    console.log(data);

  return (
      <div class="card border-light mb-3 main-card" style={{maxWidth:"28rem",height:"100%"}}>
        <h1 class="card-header container header-text" style={{textAlign:"start"}}>My Tasks</h1>
        <div style={{margin:"0",padding:"0"}} class="card-body">
            <ul style={{padding:"0"}}>
                {data.length>0 ? data?.map((data)=>{
                   return <li className='list-items container'>
                    <div style={{display:"flex"}}>
                        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                        <h6 className='list-item-text'>{data.task}</h6>
                    </div>
                    {/* <div style={{display:"flex",justifyContent:"space-evenly",width:"5rem"}}>
                        <i class="fa-solid fa-pen-to-square" style={{color:"#00c732"}}></i>
                        <i class="fa-solid fa-trash" style={{color:"red"}}></i>
                    </div> */}
                </li>
                }) : <li key={data._id} className='list-items container'>
                <div style={{display:"flex"}}>
                    {/* <input class="form-check-input" type="checkbox" value="" id="defaultCheck1"/> */}
                    <h6 className='list-item-text'  style={{color:"green"}}>There is no task to do right now !</h6>
                </div>
        {/* <div style={{display:"flex",justifyContent:"space-evenly",width:"5rem"}}>
            <i class="fa-solid fa-pen-to-square" style={{color:"#00c732"}}></i>
            <i class="fa-solid fa-trash" onClick={()=>deleteHandler(data._id)} style={{color:"red"}}></i>
        </div> */}
                </li>}
            </ul>
        </div>
      </div> 
  )
}

export default Mytask
