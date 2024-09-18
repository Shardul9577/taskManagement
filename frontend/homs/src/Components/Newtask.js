import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
function Newtask() {

    const [text,setText] = useState("")
    let url = "http://localhost:8000/post"
    let navigate = useNavigate()

    const fetchData = async(url)=>{
        let postData = {
            task : text
        }
        let fetchData = await axios.post(url,postData)
        setText("")
        window.location.reload()
        navigate('/')
    } 

  return (
    <div>
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{marginTop:"10%"}}>
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">ADD NEW TASK</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingInput" value={text} onChange={(e)=>setText(e.target.value)} placeholder="My homework is pending !"/>
                        <label for="floatingInput">Your Task !</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{fetchData(url)}}> + ADD TASK </button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newtask
