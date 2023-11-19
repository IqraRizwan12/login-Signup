import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { detail } from '../config/firebase'


function Detail() {
    const [details, setDetails] = useState([])
    const params = useParams()

    // console.log('params', params)
    

    useEffect(()=>{
        fetch('http://localhost:3000/ads/'+ params.id)
        .then(res => res.json())
        .then(res => setDetails(res.data))
  
    },[])
    


    // async function productDetail() {
    //     const addData = await detail(id)
    //     setDetails(addData)

    // }

    console.log('details',details)



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