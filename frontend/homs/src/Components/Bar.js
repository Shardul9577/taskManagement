import React from 'react'
import Paper from '@mui/material/Paper';
import Newtask from './Newtask';

function Bar() {
  return (
    <div className='container' elevation={5} style={{display:"flex",justifyContent:"end",marginTop:"7%"}}>
        <nav class="navbar navbar-expand-lg bg-body-tertiary" style={{width:"85vw",boxShadow:"4px 4px #f2f2f2"}}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{fontFamily: "Bebas Neue, system-ui",fontWeight: 400, fontSize:"2vw"}}>TASKS</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <form class="d-flex" role="search">
                        <button class="btn btn-warning" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">+ New Task</button>
                    </form>
                    </div>
                </div>
        </nav>
        <Newtask/>
    </div>
  )
}

export default Bar
