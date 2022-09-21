import { Link, useNavigate } from 'react-router-dom'
export default function Sidebar() {
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
      <div className="flex relative flex-col flex-1 pt-0 min-h-0 bg-white border-r border-gray-200">
        <div className="flex overflow-y-auto flex-col flex-1 pt-5 pb-4">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200">
            <ul className="pb-2 space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
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
                </Link>
              </li>

              <li>
                <Link
                  to="/categories"
                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100 group"
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
                </Link>
              </li>
            </ul>
            <div className="pt-2 space-y-2">
              <Link
                to="/register"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group"
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
              </Link>
              <button
                onClick={logoutHander}
                type="button"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 group"
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