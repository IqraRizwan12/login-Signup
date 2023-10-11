import {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../config/firebase'

function Signin(){

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const navigate = useNavigate()

const signin = () =>{
    login(email,password)
}

    return(
        <div style={{border:'1px solid purple',backgroundColor:'purple', padding:'10px',borderRadius:'10px',height:'520px',boxShadow:'5px 5px 10px white',width:'370px'}}>
            <h1 style={{marginTop:'90px'}}>Sign In</h1>
            <input style={{width:'95%',height:'35px',fontSize:'x-large',borderRadius:'5px',padding:'4px',marginBottom:'10px'}} type="email" placeholder="Email" onChange={e=>setEmail(e.target.value)}/><br/>
            <input style={{width:'95%',height:'35px',fontSize:'x-large',borderRadius:'5px',padding:'4px',marginBottom:'10px'}} type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)}/><br/>
            <button style={{width:'150px',height:'35px',fontSize:'x-large',borderRadius:'5px',color:'white',backgroundColor:'grey'}} onClick={signin}>Sign In</button>
            <p style={{fontSize:'large'}}>Don't have an account?<span style={{cursor:'pointer'}} onClick={()=>navigate('/signup')}>Sign Up</span></p>
        </div>
    )
}

export default Signin
