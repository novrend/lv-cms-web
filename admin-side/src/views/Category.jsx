import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { addCategory, categoriesFetch, categoryDelete, categoryEdit, getCategory } from '../store/categoriesActions'
import AddCategory from '../components/AddCategory'
import { useState } from 'react'
import EditCategory from '../components/EditCategory'
import ModalConfirmation from '../components/ModalConfirmation'
import Toast from '../components/Toast'
import SkeletonCategory from '../components/SkeletonCategory'
import ButtonSpinner from "../components/ButtonSpinner"
export default function Category() {
    const [addClicked, setAddClicked] = useState(false)
    const [editClicked, setEditClicked] = useState(false)
    const [deleteClicked, setDeleteClicked] = useState(false)
    const [choosenId, setChoosenId] = useState(0)
    const [category, setCategory] = useState({})
    const [editLoading, setEditLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [toast, setToast] = useState([0, 0])
    const { categories, loading } = useSelector((state) => {
        return state.categoryReducer
    })

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(categoriesFetch())
            .then((resp) => {
                if (resp?.error) throw resp
            })
            .catch(error => {
                trigger('Error', error.message)
            })
    }, []);

    function addClickHandler() {
        addClicked ? setAddClicked(false) : setAddClicked(true)
    }
    function deleteClickHandler(id) {
        setChoosenId(id)
        deleteClicked ? setDeleteClicked(false) : setDeleteClicked(true)
    }
    function deleteHandler() {
        dispatch(categoryDelete(choosenId))
            .then((resp) => {
                if (resp?.error) throw resp
                setDeleteClicked(false)
                trigger('Check', "Category deleted successfully")
            })
            .catch(error => {
                trigger('Error', error.message)
            })
    }
    function addCategoryHandler(data) {
        dispatch(addCategory(data))
            .then((resp) => {
                if (resp?.error) throw resp
                addClickHandler()
                trigger('Check', "Category added successfully")
            })
            .catch(error => {
                trigger('Error', error.message)
            })
    }
    function editCategory(data) {
        dispatch(categoryEdit(data))
            .then((resp) => {
                if (resp?.error) throw resp
                switchEditModal()
                trigger('Check', "Category edited successfully")
            })
            .catch(error => {
                trigger('Error', error.message)
            })
    }
    function switchEditModal() {
        editClicked ? setEditClicked(false) : setEditClicked(true)
    }
    function editClickHandler(id) {
        setEditLoading(id);
        dispatch(getCategory(id, localStorage.getItem("access_token")))
            .then((resp) => {
                if (resp?.error) throw resp
                setCategory(resp);
            })
            .then(() => {
                switchEditModal()
                setEditLoading(false)
            })
            .catch(error => {
                trigger('Error', error.message)
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
        <section>
            <Toast type={toast[0]} show={show} text={toast[1]} />
            {addClicked && <AddCategory clicked={addClickHandler} switch={addCategoryHandler} />}
            {editClicked && <EditCategory switch={editCategory} category={category} trigger={switchEditModal} />}
            {deleteClicked && <ModalConfirmation clicked={deleteClickHandler} confirmed={deleteHandler} />}
            <div
                className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
                <div className="w-full mb-1">
                    <div className="items-center block sm:flex md:divide-x md:divide-gray-100">
                        <div className="flex items-center w-full sm:justify-end">
                            <div className="mb-4">
                                <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">All
                                    categories
                                </h1>
                            </div>
                            <button type="button" data-modal-toggle="add-category-modal"
                                onClick={addClickHandler}
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:ml-auto">
                                <svg className="w-6 h-6 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd"
                                        d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                        clipRule="evenodd"></path>
                                </svg>
                                Add category
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <table className="min-w-full divide-y divide-gray-200 table-fixed">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                            No
                                        </th>
                                        <th scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                            Category Name
                                        </th>
                                        <th scope="col"
                                            className="p-4 text-xs font-medium text-left text-gray-500 uppercase">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {loading === 'fetch' && <SkeletonCategory />}
                                    {categories.map((category, i) => {
                                        return (
                                            <tr className="hover:bg-gray-100" key={i}>
                                                <td
                                                    className="p-4 text-base font-medium text-gray-900 whitespace-nowrap">
                                                    {i + 1}</td>
                                                <td
                                                    className="p-4 text-base font-medium text-gray-900 whitespace-nowrap">
                                                    {category.name}</td>
                                                <td className="p-4 space-x-2 whitespace-nowrap text-right">
                                                    {editLoading == category.id && <ButtonSpinner color="blue" size="small" />}
                                                    {editLoading != category.id && <button type="button" data-modal-toggle="category-modal"
                                                        onClick={() => editClickHandler(category.id)}
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300">
                                                        <svg className="w-5 h-5 mr-2" fill="currentColor"
                                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z">
                                                            </path>
                                                            <path fillRule="evenodd"
                                                                d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                                                clipRule="evenodd"></path>
                                                        </svg>
                                                        Edit
                                                    </button>}
                                                    <button type="button" data-modal-toggle="delete-category-modal"
                                                        onClick={() => deleteClickHandler(category.id)}
                                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300">
                                                        <svg className="w-5 h-5 mr-2" fill="currentColor"
                                                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                            <path fillRule="evenodd"
                                                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                                                clipRule="evenodd"></path>
                                                        </svg>
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}