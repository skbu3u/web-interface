import { useLocation,Navigate } from "react-router-dom"

export const setToken = (token)=>{
    localStorage.setItem('temitope', token)
}

// export const setNewuser = (msg)=>{
//     localStorage.setItem('Username', msg)
// }

export const fetchToken = (token)=>{
    return localStorage.getItem('temitope')
}

// export const getName = (token)=>{
//     return localStorage.getItem('Username')
// }

export function RequireToken({children}){
    let auth = fetchToken()
    let location = useLocation()
    if(!auth){
        return <Navigate to='/' state ={{from : location}}/>;
    }
    return children;
}