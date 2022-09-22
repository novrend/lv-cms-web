import { useState } from 'react'
import Toast from '../components/Toast'
import { fetching } from '../helpers'
export default function RegisterAdmin() {
    const [show, setShow] = useState(false)
    const [toast, setToast] = useState([0, 0])
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        phoneNumber: '',
        address: ''
    })

    const handleRegister = (e) => {
        e.preventDefault()
        fetching("http://localhost:3000/user/register", "POST", { "Content-Type": "application/json" }, user)
            .then((resp) => {
                setUser(resp);
                trigger('Check', "Admin registration success")
            })
    }

    const onChangeHandler = (e) => {
        const name = e.target.id
        setUser({
            ...user, [name]: e.target.value
        })
    }
    let counter = 0
    function trigger(type, text) {
        setToast([type, text])
        setShow(true);
        counter = 3
        timeout();
    }
    function timeout() {
        if (--counter > 0) {
            return setTimeout(timeout, 1000);
        }
        setShow(false);
    }
    return (
        <section className="p-6">
            <Toast type={toast[0]} show={show} text={toast[1]} />
            <div
                className="block sm:flex items-center border-b border-gray-200 lg:mt-1.5">
                <div className="w-full mb-1">
                    <div className="items-center block sm:flex md:divide-x md:divide-gray-100">
                        <div className="flex items-center w-full">
                            <div className="mb-4">
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
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
                            className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                        <input type="text" id="username"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={user.username}
                            onChange={onChangeHandler}
                            placeholder="johndoe" required />
                    </div>
                    <div>
                        <label forhtml="email"
                            className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="email" id="email"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={user.email}
                            onChange={onChangeHandler}
                            placeholder="johndoe@mail.com" required />
                    </div>
                    <div>
                        <label forhtml="password"
                            className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                        <input type="password" id="password"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={user.password}
                            onChange={onChangeHandler}
                            placeholder="********" required />
                    </div>
                    <div>
                        <label forhtml="phoneNumber"
                            className="block mb-2 text-sm font-medium text-gray-900">Phone
                            number</label>
                        <input type="tel" id="phoneNumber"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            value={user.phoneNumber}
                            onChange={onChangeHandler}
                            placeholder="082222222222" required />
                    </div>
                </div>
                <div className="mb-6">
                    <label forhtml="address"
                        className="block mb-2 text-sm font-medium text-gray-900">Address</label>
                    <textarea name="address" id="address" rows="3"
                        value={user.address}
                        onChange={onChangeHandler}
                        placeholder="Jl. Sultan Iskandar Muda, Pondok Indah"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"></textarea>
                </div>
                <button type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </section>
    )
}