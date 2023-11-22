import { useState } from "react"
import { postAd } from "../api"
// import { postAd } from "../config/firebase"
import { useNavigate } from "react-router-dom"

function PostAd() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [price, setPrice] = useState()
    const [file, setFile] = useState()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const addData = async () => {
        setLoading(true)
        await postAd(title, description, price,file[0])
        setLoading(false)
        navigate('/')

    }


    return (<div style={{ display: "flex", flexDirection: 'column', border: '1px solid black', width: '38%', margin: 'auto', textAlign: 'center', borderRadius: '10px', height: '400px', backgroundColor: 'lightblue' }}>
        <h1>Post Ad</h1>
        <input style={{ width: '95%', height: '30px', fontSize: 'large', marginBottom: '15px', marginLeft: '10px' }} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Write your title here" />
        <input style={{ width: '95%', height: '30px', fontSize: 'large', marginBottom: '15px', marginLeft: '10px' }} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="Write your description here" />
        <input style={{ width: '95%', height: '30px', fontSize: 'large', marginBottom: '15px', marginLeft: '10px' }} onChange={(e) => setPrice(e.target.value)} type="number" placeholder="Write your price here" />
        <input style={{ width: '95%', height: '30px', fontSize: 'large', marginBottom: '15px', marginLeft: '10px' }} onChange={(e) => setFile(e.target.files)} type="file" />
        {loading ? <center><img src="https://i.gifer.com/ZKZg.gif" width='20' /></center> :
            <center><button style={{ width: '30%', height: '30px', fontSize: 'large', marginBottom: '15px', borderRadius: '10px', backgroundColor: 'grey' }} onClick={addData}>Submit</button></center>}
    </div>)
}

export default PostAd