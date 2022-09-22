import { NavLink, Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { categoriesFetch } from "../store/categoriesActions";
import { useEffect } from "react";
export default function Navbar() {
    const { categories } = useSelector((state) => {
        return state.categoryReducer
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoriesFetch())
    }, []);
    return (
        <section>
            <nav className="bg-white border-gray-200">
                <div className="grid grid-cols-3 items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
                    <div className="justify-start items-center">
                        <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                            aria-expanded="false"
                            className="md:hidden text-gray-500 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-lg p-2.5 mr-1">
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clipRule="evenodd"></path>
                            </svg>
                            <span className="sr-only">Search</span>
                        </button>
                        <div className="hidden relative md:block">
                            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"></path>
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" id="search-navbar"
                                className="block p-2 pl-10 w-full text-gray-900 rounded-lg sm:text-lg focus:ring-blue-500"
                                placeholder="Search..." />
                        </div>
                        <button data-collapse-toggle="navbar-search" type="button"
                            className="inline-flex items-center p-2 text-lg text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
                            aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <Link to="/" className="justify-center flex items-center">
                        <svg width="200" viewBox="0 0 151 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path
                                d="M67.637.293l3.816 9.205L75.269.293h2.725L71.746 15.39l-.293.294-.294-.294L64.911.293h2.726zm-13.712 0c1.468 0 2.86.767 3.627 1.887l-1.467 1.468h-.462c-.304-.65-.973-1.048-1.698-1.048-.863 0-1.672.71-1.72 1.614-.035.68.277 1.105.84 1.468.606.391.854.554 1.677 1.006.897.493 3.166 1.46 3.166 4.005 0 2.509-2.097 4.843-4.802 4.843-.347 0-.976-.039-1.446-.147-1.325-.321-2.129-.822-2.998-1.845l1.887-1.929.65.545c.293.23.937.693 1.55.776 1.246.169 2.082-.655 2.244-1.468.129-.642-.034-1.6-1.069-2.096 0 0-1.866-1.037-2.684-1.51-.833-.482-1.719-1.798-1.719-3.375 0-1.174.538-2.311 1.405-3.103.67-.614 1.589-1.09 3.019-1.09zM138.67 0l9.77 9.77V.587l.294-.294h1.929l.294.294v14.802h-.462l-9.602-9.602v9.309l-.294.293h-1.929l-.293-.293V.293L138.67 0zm-28.807.293v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zm9.225 0v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zM2.516.293v12.58h5.032v2.516H0V.587L.293.293h2.223zm14.257 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm111.54 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm-98.415 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.929l.293.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zm37.446 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.928l.294.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zM16.772 2.81a5.032 5.032 0 10.001 10.065 5.032 5.032 0 000-10.065zm111.541 0a5.032 5.032 0 100 10.065 5.032 5.032 0 000-10.065z"
                                fillRule="evenodd"></path>
                        </svg>
                    </Link>
                    <div className="justify-end flex items-end">
                        <a className="mr-6 text-lg font-medium text-gray-500hover:underline">Wishlist</a>
                        <a className="text-lg font-medium hover:underline pb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 502.714 502.715">
                                <path d="M449.958,485.949l-32.375-327.957c-0.682-6.923-6.508-12.195-13.465-12.195h-60.545V92.289
                       C343.573,41.394,302.173,0,251.292,0c-50.887,0-92.282,41.395-92.282,92.289v53.509H98.458c-6.956,0-12.776,5.272-13.464,12.195
                       L52.433,487.852c-0.377,3.805,0.872,7.586,3.436,10.412c2.563,2.84,6.209,4.451,10.027,4.451h370.792c0.04,0,0.085,0,0.132,0
                       c7.473,0,13.529-6.062,13.529-13.527C450.348,488.064,450.216,486.982,449.958,485.949z M186.068,92.289
                       c0-35.963,29.259-65.23,65.223-65.23s65.223,29.268,65.223,65.23v53.509H186.068V92.289z M110.718,172.857h48.291v27.376
                       c0,7.464,6.059,13.528,13.53,13.528c7.472,0,13.529-6.064,13.529-13.528v-27.376h130.446v27.376
                       c0,7.464,6.058,13.528,13.528,13.528c7.472,0,13.529-6.064,13.529-13.528v-27.376h48.286l24.62,249.37H86.098L110.718,172.857z
                        M80.825,475.66l2.603-26.373h335.727l2.603,26.373H80.825z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </nav>
            <nav className="border-b border-gray-200">
                <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
                    <ul className="flex flex-wrap justify-center mt-0 space-x-8 text-lg font-medium">
                        <li>
                            <NavLink to="/" className={({ isActive }) => `text-gray-900 ${isActive ? 'underline underline-offset-[19px]' : 'hover:underline hover:underline-offset-[19px]'}`}
                                aria-current="page" end>Home</NavLink>
                        </li>
                        {categories.map(category => {
                            return (
                                <li>
                                    <NavLink key={category.id} to={`${category.name}`} className={({ isActive }) => `text-gray-900 ${isActive ? 'underline underline-offset-[19px]' : 'hover:underline hover:underline-offset-[19px]'}`}>{category.name}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
            <Outlet />
        </section>
    )
}