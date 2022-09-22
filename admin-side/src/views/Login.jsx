import { useState } from 'react'
import { fetching } from '../helpers'
import { useNavigate, Navigate } from 'react-router-dom'
import { baseUrl } from '../config/config';
export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e) => {
        e.preventDefault()
        fetching(`${baseUrl}/user/login`, "POST", { "Content-Type": "application/json" }, user)
            .then((resp) => {
                localStorage.setItem('access_token', resp.access_token)
                navigate('/')
            })
    }

    const onChangeHandler = (e) => {
        const name = e.target.id
        setUser({
            ...user, [name]: e.target.value
        })
    }

    if (localStorage.getItem('access_token')) {
        return <Navigate to={"/"} />
    }

    return (
        <section className="bg-gray-50">
            <div className="flex items-center justify-center px-6 py-8 md:h-screen lg:py-0">
                <div className="w-2/6 bg-white rounded-lg shadow">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input value={user.email} onChange={onChangeHandler} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" placeholder="johndoe@mail.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                                <input value={user.password} onChange={onChangeHandler} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5" required="" />
                            </div>
                            <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}