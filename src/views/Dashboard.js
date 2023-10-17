import { useNavigate } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { getAds } from '../config/firebase'



function Dashboard() {
    const [ads,setAds] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()
    

    useEffect(()=>{
        getData()
    },[])
    
    const getData = async () =>{
        const addData = await getAds()
        setLoading(false)
        setAds(addData)
      

    }

    
    return (
        <div>
            
            {loading ? <center><img src="https://i.gifer.com/ZKZg.gif" width='20'/></center>:ads.map(item=>{
                return <div style={{ display: "inline-block", width: '23%', border: '1px solid black', margin: '10px', height: '100%', padding: '5px' }}onClick={()=>navigate('/postad/'+item.id)}>
                    <img style={{ borderBottom: '1px solid black' }} height={'300'} width={'100%'} src={item.imageUrl}/>
                    <h4>{item.title}</h4>
                    <h4>Rs.{item.price}</h4>
                     </div>
            })}

           
        </div>
    )

}

export default Dashboard