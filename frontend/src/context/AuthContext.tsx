import React,{ createContext, PropsWithChildren, ReactNode, useCallback, useState} from 'react'
import api from '../services/api'

interface InputProps{
  email:string,
  password:string
}

interface localStorageProps{
  token:string
  user:object
}


interface AuthContextProps{
  signInContext(inputProps: InputProps):Promise<void>
  LogOut():void
  user:object
  isError: boolean
}

export const AuthContext = createContext({} as AuthContextProps)


const AuthProvider= ({children}:PropsWithChildren<ReactNode>) => {
  
  const [hasError,setHasError] = useState(false)

  const [data,setData] = useState(() => {
    const user = localStorage.getItem('@Plataform:user')
    const token = localStorage.getItem('@Plataform:token')

    if(token && user){
      return { token , user: JSON.parse(user)}
    }

    return {} as localStorageProps
  })

  const signInContext = useCallback(async({email,password}:InputProps) => {
    try{
      const response = await api.post('/session', {
        email,
        password
      })
      console.log(response.data)

      const { user, token } = response.data


      localStorage.setItem('@Plataform:user', JSON.stringify(user))
      localStorage.setItem('@Plataform:token', token)
      
      setData({
        user,
        token,
      })

      setHasError(false)
    }catch(err){
      setHasError(true)
    }
  },[])

  const LogOut = useCallback(() => {
    localStorage.removeItem('@Plataform:user')
    localStorage.removeItem('@Plataform:token')


    setData({} as localStorageProps)
  },[])

  return(
    <AuthContext.Provider value  ={{
      LogOut,
      user: data.user,
      signInContext,
      isError: hasError
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider