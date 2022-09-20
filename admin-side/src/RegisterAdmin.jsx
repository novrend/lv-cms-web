import { useState, useEffect } from 'react'
import useFetch from './hooks/useFetch'
export default function RegisterAdmin() {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
    })

    const { fetching } = useFetch("http://localhost:3000/Users", "POST", {
        "Content-Type": "application/json"
    }, user)

    const handleRegister = (e) => {
        e.preventDefault()
        fetching()
    }

    const onChangeHandler = (e) => {
        const name = e.target.id
        setUser({
            ...user, [name]: e.target.value
        })
    }

    return (
        <section className="p-6">
            <div
                className="block sm:flex items-center border-b border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="items-center block sm:flex md:divide-x md:divide-gray-100 dark:divide-gray-700">
                        <div className="flex items-center w-full">
                            <div className="mb-4">
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                    Register
                                    admin
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form onSubmit={handleRegister}>
                <div className="grid gap-6 mt-6 mb-6 md:grid-cols-2">
                    <div>
                        <label forhtml="username"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Username</label>
                        <input type="text" id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.username}
                            onChange={onChangeHandler}
                            placeholder="johndoe" required />
                    </div>
                    <div>
                        <label forhtml="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                        <input type="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.email}
                            onChange={onChangeHandler}
                            placeholder="johndoe@mail.com" required />
                    </div>
                    <div>
                        <label forhtml="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                        <input type="password" id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.password}
                            onChange={onChangeHandler}
                            placeholder="********" required />
                    </div>
                    <div>
                        <label forhtml="phoneNumber"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone
                            number</label>
                        <input type="tel" id="phoneNumber"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={user.phoneNumber}
                            onChange={onChangeHandler}
                            placeholder="082222222222" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label forhtml="address"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Address</label>
                    <textarea name="address" id="address" rows="3"
                        value={user.address}
                        onChange={onChangeHandler}
                        placeholder="Jl. Sultan Iskandar Muda, Pondok Indah"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>
        </section>
    )
}