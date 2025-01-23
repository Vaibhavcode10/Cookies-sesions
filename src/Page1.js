import React from 'react'

export default function Page1() {
    const [email,setemail]=useState('');
    const [theme,settheme]=useState('');
  useEffect(()=>{
    const email1=Cookies.get('Email')
    console.log("vaue is ",email1)   
    setemail(email1)
  
    const theme1=Cookies.get( "Mode")
    console.log("theme is ",theme1) 
    settheme(theme1)
  },[])
  return (
     <>
      <p>email{email}</p>
      <p>Theme{theme}</p>
      </>
  )
}
