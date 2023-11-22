import { uploadImage } from "./config/firebase"


function register (email, password, firstName){
    fetch('http://localhost:3000/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
      fullname: firstName
    })
  }).then(res => res.json())
    .then(res => alert(res.message))
}

async function postAd(title, description, price, file){
    const url = await uploadImage(file)

    fetch('http://localhost:3000/ads/addData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        description,
        price,
        imageUrl: url
      })
    }).then(res => res.json())
      .then(res => console.log(res))
      .catch(e => console.log('e --->', e))
}


function getAds(setAds){
    
    fetch('http://localhost:3000/ads')
    .then(res => res.json())
    .then(res => setAds(res.data))

    
}

function detailpage(setDetails,id){
    fetch('http://localhost:3000/ads/'+ id)
        .then(res => res.json())
        .then(res => setDetails(res.data))

}

async function login(email,password){
  fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password,
      
    })
  }) .then(res => res.json())
    .then(res => alert(res.message))

}



export {register,postAd,getAds,detailpage,login}