import { useState } from "react";
import { useDispatch } from "react-redux";
import { categoryEdit } from "../store/categoriesActions";
import Backdrop from "./Backdrop";

export default function EditCategory(props) {
    const [category, setCategory] = useState({ ...props.category })

    const dispatch = useDispatch()

    function editHandler(e) {
        e.preventDefault()

        dispatch(categoryEdit(category))
        props.switch()
    }

    const onChangeHandler = (e) => {
        const name = e.target.id
        setCategory({
            ...category, [name]: e.target.value
        })
    }
    return (
        <section>
            <div className="fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex"
                id="category-modal">
                <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
                    <form onSubmit={editHandler}>
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-start justify-between p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold">
                                    Edit category
                                </h3>
                                <button type="button"
                                    onClick={props.switch}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    data-modal-toggle="category-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label forhtml="name"
                                            className="block mb-2 text-sm font-medium text-gray-900">Category
                                            Name</label>
                                        <input type="text" name="name" id="name"
                                            onChange={onChangeHandler}
                                            value={category.name}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Bags" required />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-t border-gray-200 rounded-b">
                                <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    type="submit">Save all</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
            <Backdrop />
        </section >
    )
}