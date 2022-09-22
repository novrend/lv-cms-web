import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import ModalConfirmation from './ModalConfirmation';
export default function Sidebar() {
  const [logOutClick, setLogOutClick] = useState(false)
  function logOutClickHandler() {
    logOutClick ? setLogOutClick(false) : setLogOutClick(true)
  }
  const navigate = useNavigate();
  function logoutHander() {
    localStorage.clear()
    navigate('/login')
  }
  return (
    <aside
      id="sidebar"
      className="flex hidden fixed top-0 left-0 z-20 flex-col flex-shrink-0 w-64 h-full duration-75 lg:flex transition-width"
      aria-label="Sidebar"
    >
      {logOutClick && <ModalConfirmation clicked={logOutClickHandler} confirmed={logoutHander} text="log out" />}
      <div className="flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r border-gray-200">
        <div className="flex overflow-y-auto flex-col flex-1 pt-3 pb-4">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
            <ul className="pb-2 space-y-2">
              <li className='grid grid-rows-2 text-center justify-items-center'>
                <svg width="200" viewBox="0 0 151 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path
                    d="M67.637.293l3.816 9.205L75.269.293h2.725L71.746 15.39l-.293.294-.294-.294L64.911.293h2.726zm-13.712 0c1.468 0 2.86.767 3.627 1.887l-1.467 1.468h-.462c-.304-.65-.973-1.048-1.698-1.048-.863 0-1.672.71-1.72 1.614-.035.68.277 1.105.84 1.468.606.391.854.554 1.677 1.006.897.493 3.166 1.46 3.166 4.005 0 2.509-2.097 4.843-4.802 4.843-.347 0-.976-.039-1.446-.147-1.325-.321-2.129-.822-2.998-1.845l1.887-1.929.65.545c.293.23.937.693 1.55.776 1.246.169 2.082-.655 2.244-1.468.129-.642-.034-1.6-1.069-2.096 0 0-1.866-1.037-2.684-1.51-.833-.482-1.719-1.798-1.719-3.375 0-1.174.538-2.311 1.405-3.103.67-.614 1.589-1.09 3.019-1.09zM138.67 0l9.77 9.77V.587l.294-.294h1.929l.294.294v14.802h-.462l-9.602-9.602v9.309l-.294.293h-1.929l-.293-.293V.293L138.67 0zm-28.807.293v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zm9.225 0v2.223l-.294.293h-2.222v12.58h-2.516V2.809h-2.516V.587l.294-.294h7.254zM2.516.293v12.58h5.032v2.516H0V.587L.293.293h2.223zm14.257 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm111.54 0a7.548 7.548 0 110 15.096 7.548 7.548 0 010-15.096zm-98.415 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.929l.293.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zm37.446 0l.293.294v9.77a2.516 2.516 0 005.032 0V.587l.294-.294h1.928l.294.294v9.77a5.032 5.032 0 01-10.064 0V.587l.294-.294h1.929zm15.389 0v14.803l-.294.293h-2.222V.587l.293-.294h2.223zM16.772 2.81a5.032 5.032 0 10.001 10.065 5.032 5.032 0 000-10.065zm111.541 0a5.032 5.032 0 100 10.065 5.032 5.032 0 000-10.065z"
                    fillRule="evenodd"></path>
                </svg>
                <span className="text-lg">
                  Admin Panel
                </span>
              </li>
            </ul>
            <ul className="pt-2 pb-2 space-y-2">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => `flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ${isActive ? 'bg-gray-100' : ''}`}
                  end
                >
                  <svg
                    className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                  </svg>
                  <span className="ml-3">
                    Dashboard
                  </span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/categories"
                  className={({ isActive }) => `flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ${isActive ? 'bg-gray-100' : ''}`}
                >
                  <svg
                    className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="ml-3">
                    Categories
                  </span>
                </NavLink>
              </li>
            </ul>
            <div className="pt-2 space-y-2">
              <NavLink
                to="/register"
                className={({ isActive }) => `flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group ${isActive ? 'bg-gray-100' : ''}`}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path>
                </svg>
                <span className="ml-3">
                  Register Admin
                </span>
              </NavLink>
              <button
                onClick={logOutClickHandler}
                type="button"
                className="flex w-full items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group"
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-3">
                  Log Out
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}