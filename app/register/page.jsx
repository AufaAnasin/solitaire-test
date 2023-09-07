"use client"

import './index.css'
import bg from '../img/bg-register.jpg'
import Image from 'next/image'
import logoSoli from '../img/logo-soli.png'
import axios from 'axios'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function Register() {
    const router = useRouter()
    const [form, setForm] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("")

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const api = 'https://reqres.in/api/register'
        const data = {
            username: form.username,
            email: form.email,
            password: form.password
        }
        axios.post(api, data).then((res) => {
            if (res.status === 200) {
                console.log("Berhasil Register")
                setTimeout(() => {
                    router.push(`/userslist`)
                }, 3000)
            }
        }).catch((err) => {
            console.log(err)
            setError("Missing Password")
        })
    }

  return (
    <div className="container-fluid register">
        <div className="container">
            <div className="row">
                <div className="col">
                    <Image src={logoSoli} className="logo-solid" alt='logosoli' />
                </div>
                <div className="col">
                <div className="register-wrapper">
                    <h2>Register</h2>
                    {error && <div className="alert alert-warning" role="alert">
  {error}
</div>}
                    <div className="mb-3">
                        <form>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Username</label>
                            <input type="text" onChange={handleChange} name='username' className="form-control" id="exampleFormControlInput1" placeholder="username" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" onChange={handleChange} name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            <label htmlFor="inputPassword5" className="form-label">Password</label>
                            <input name='password' onChange={handleChange} type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock" />
                            <div id="passwordHelpBlock" className="form-text register">
                            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                        </div>    
                        <button type="submit" onClick={handleSubmit} className="btn btn-success">Register</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register