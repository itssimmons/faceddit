import router from "@/router"
import { $auth } from "./instances"

export const login = async (data: any) => {
  try {
    const result = await $auth({
      method: 'post',
      url: '/login',
      data: {
        email: data.email,
        password: data.password
      }
    })
  
    const user = JSON.stringify({ user: result.data.data })

    if (data.remember === "on") {    
      localStorage.setItem('l-token', result.data.token)
      localStorage.setItem('l-user', user)
      router.push({ name: 'home' })
      return
    }
  
    sessionStorage.setItem('s-token', result.data.token)
    sessionStorage.setItem('s-user', user)
    router.push({ name: 'home' })
  } catch(err: any) {
    alert(`Something went wrong :/ ${err.message}`)
  }
}

export const logout = () => {
  localStorage.removeItem('l-token')
  sessionStorage.removeItem('s-token')
  router.push({ name: 'login' })
}

export const register = async (data: any) => {
  try {
    const result = await $auth({
      method: 'post',
      url: '/signup',
      headers: {
        'content-type': 'multipart/form-data'
      },
      data
    })

    alert('User registered successfully!')
    router.push({ name: 'login' })
  } catch(err: any) {
    alert(`Something went wrong :/ ${err.message}`)
  }
}