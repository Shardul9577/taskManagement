import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Edit({task,id}) {

    const [text,setText] = useState("")
    let url = `http://localhost:8000/edit/${id}`
    async function updateData(url) {
        let updateData = {
            task:text
        }
        let EditTask = await axios.put(url,updateData)
        console.log(EditTask);
        window.location.reload()
    }

  return (
    <div>
      <div class="modal fade" style={{marginTop:"10%"}} id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Edit</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <div class="form-floating">
                    <textarea class="form-control" value={task} id="floatingTextarea" style={{width:"27.5rem"}}></textarea>
                    <label for="floatingTextarea">Previous Task !</label>
                </div>
                <form class="form-floating">
                    <input type="text" class="form-control" id="floatingInputValue" onChange={(e)=>{setText(e.target.value)}} value={text} placeholder="my new task is......." style={{width:"27.5rem",marginTop:"2%"}}/>
                    <label for="floatingInputValue">Update Task !</label>
                </form>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-success" data-bs-dismiss="modal" onClick={()=>updateData(url)}>Save changes</button>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Edit
