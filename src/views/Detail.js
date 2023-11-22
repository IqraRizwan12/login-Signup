import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detail } from '../config/firebase'
import { detailpage } from '../api'


function Detail() {
    const [details, setDetails] = useState([])
    const params = useParams()
    const id = params.id


    useEffect(()=>{
         detailpage(setDetails,id)
  
    },[])
    


    return (
        
        <div style={{ border: '1px solid white', textAlign: 'center', width: '70%', margin: 'auto', backgroundColor: 'black' }}>
            <img width={400} src={details.imageUrl} />
            <div style={{ color: 'black', backgroundColor: 'beige' }}>
                <h1 style={{ borderTop: '1px solid white' }}>Rs.{details.price}</h1>
                <h1 >{details.title}</h1>
            </div>
            <div style={{ borderTop: '1px solid white', fontFamily: 'Arial', textTransform: "capitalize", color: 'black', backgroundColor: 'beige', height: 150 }}>
                <h2>{details.description}</h2>
            </div>

        
        </div>


    )





}

export default Detail