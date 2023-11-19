import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAds } from '../config/firebase'



function Dashboard() {
    const [ads, setAds] = useState()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

   

    useEffect(() => {
        fetch('http://localhost:3000/ads')
          .then(res => res.json())
          .then(res => setAds(res.data))
          
    } , [])

    

    console.log('ads--->',ads)

    if (!ads) {
        return <div>Loading....</div>
    }


   

    // const getData = async () => {
    //     const addData = await getAds()
    //     setLoading(false)
    //     setAds(addData)
    //     console.log('addData', addData)

    // }

    // console.log('adssss--->', ads)





    return (
        <div>
            
        
            { ads.map(item => {
                return <div style={{ display: "inline-block", width: '22%', border: '1px solid black', margin: '10px', height: '100%', padding: '5px' }} onClick={() => navigate('/postad/' + item._id)}>
                    <img style={{ borderBottom: '1px solid black' }} height={'250'} width={'100%'} src={item.imageUrl} />
                    <h4>{item.title}</h4>
                    <h4>Rs.{item.price}</h4>
                </div>
            })}


        </div>
    )

}

export default Dashboard