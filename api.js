



export const login= async (username, password) =>{
    const response= await fetch('https://reqres.in/api/login',{
      method: 'POST',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({username, password}),
    })
    if(response.ok){
      const {token}= await response.json()
      return token
    }
    const erroMesage= await response.text()
    throw new Error(erroMesage)
  
}

// export const signuo=async (username, password, registreCommerN) =>{
//   const response= await fetch('https://reqres.in/api/login',{
//     method: 'POST',
//     headers: {'content-type': 'application/json'},
//     body: JSON.stringify({username, password}),
//   })
//   if(response.ok){
//     const {token}= await response.json()
//     return token
//   }
//   const erroMesage= await response.text()
//   throw new Error(erroMesage)

// }
export const addPlate=(plate)=>{
  // 
}
