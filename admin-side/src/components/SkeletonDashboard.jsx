import { useState } from "react"

export default function SkeletonDashboard() {
    const [loop, setLoop] = useState([1, 2, 3, 4, 5, 6, 7])
    return (
        loop.map(el => {
            return (
                <tr className="hover:bg-gray-100" key={el}>
                    <td className="p-4 text-base text-gray-900 whitespace-nowrap">
                        <div className="h-6 bg-gray-300 rounded-full w-6"></div>
                    </td>
                    <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap">
                        <div className="text-base text-gray-900">
                            <div className="h-6 bg-gray-300 rounded-full w-64"></div>
                        </div>
                    </td>
                    <td className="p-4 text-base text-gray-900 whitespace-nowrap">
                        <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    </td>
                    <td className="p-4 text-base text-gray-900 whitespace-nowrap">
                        <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    </td>
                    <td className="p-4 text-base text-gray-900 whitespace-nowrap">
                        <div className="h-6 bg-gray-300 rounded-full w-20"></div>
                    </td>
                    <td className="p-4 space-x-2 whitespace-nowrap">
                        <button type="button" data-modal-toggle="product-modal"
                            className="inline-flex items-center px-3 py-2 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                            <svg className="w-5 h-5 mr-2" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                    clipRule="evenodd"></path>
                            </svg>
                            View images
                        </button>
                    </td>
                    <td className="p-4 space-x-2 whitespace-nowrap text-right">
                        <button type="button" data-modal-toggle="product-modal"
                            className="inline-flex items-center px-3 py-2 text-sm text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                            <svg className="w-5 h-5 mr-2" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                </path>
                                <path fillRule="evenodd"
                                    d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                    clipRule="evenodd"></path>
                            </svg>
                            Edit item
                        </button>
                        <button type="button" data-modal-toggle="delete-product-modal"
                            className="inline-flex items-center px-3 py-2 text-sm text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300">
                            <svg className="w-5 h-5 mr-2" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                    clipRule="evenodd"></path>
                            </svg>
                            Delete item
                        </button>
                    </td>
                </tr>
            )
        })
    )
}