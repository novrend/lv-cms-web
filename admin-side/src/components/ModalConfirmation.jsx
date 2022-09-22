import Backdrop from "./Backdrop";
import { useSelector } from "react-redux";
import ButtonSpinner from "./ButtonSpinner"
export default function ModalConfirmation(props) {
    const { loading } = useSelector((state) => {
        return state.productReducer
    })
    return (
        <section>
            <div className="fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex"
                id="delete-product-modal">
                <div className="relative w-full h-full max-w-md px-4 md:h-auto">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex justify-end p-2">
                            <button type="button"
                                onClick={props.clicked}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-toggle="delete-product-modal">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                        clipRule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="p-6 pt-0 text-center">
                            <svg className="w-20 h-20 mx-auto text-red-600" fill="none" stroke="currentColor"
                                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <h3 className="mt-5 mb-6 text-xl font-normal text-gray-500">Are you sure
                                you want to delete this product?</h3>
                            {loading === 'delete' && <ButtonSpinner color="red" />}
                            {!loading && <button
                                type="button"
                                onClick={props.confirmed}
                                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center">
                                Yes, I'm sure
                            </button>}
                            <button
                                type="button"
                                onClick={props.clicked}
                                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-blue-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center ml-2"
                                data-modal-toggle="delete-product-modal">
                                No, cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Backdrop />
        </section>
    )
}