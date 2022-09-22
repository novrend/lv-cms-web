import Backdrop from "./Backdrop";
import { useState } from 'react'
import { addProduct } from "../store/productActions";
import { useDispatch, useSelector } from "react-redux";
import ButtonSpinner from "./ButtonSpinner"
export default function AddProduct(props) {
    const [product, setProduct] = useState({
        name: '',
        categoryId: '',
        price: '',
        description: '',
        mainImg: '',
        image1: '',
        image2: '',
    })

    const { loading } = useSelector((state) => {
        return state.productReducer
    })

    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addProduct(product))
            .then(() => {
                props.clicked()
                props.trigger('Check', "Product added successfully")
            })
    }

    const onChangeHandler = (e) => {
        const name = e.target.id
        setProduct({
            ...product, [name]: e.target.value
        })
    }
    return (
        <section>
            <div className="fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex"
                id="add-product-modal">
                <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
                    <form onSubmit={submitHandler}>
                        <div className="relative bg-white rounded-lg shadow">
                            <div className="flex items-start justify-between p-5 border-b rounded-t">
                                <h3 className="text-xl font-semibold">
                                    Add product
                                </h3>
                                <button type="button"
                                    onClick={props.clicked}
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                    data-modal-toggle="add-product-modal">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="p-6 space-y-6 overflow-x-auto h-[30rem]">

                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label forhtml="product-name"
                                            className="block mb-2 text-sm font-medium text-gray-900">Product
                                            Name</label>
                                        <input type="text" name="product-name" id="name"
                                            value={product.name}
                                            onChange={onChangeHandler}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="LOCK IT TOTE" required />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label forhtml="category"
                                            className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                        <select
                                            value={product.categoryId}
                                            onChange={onChangeHandler}
                                            name="categoryId" id="categoryId" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                                            <option value="" disabled>--- Select Category ---</option>
                                            {props.categories.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
                                        </select>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label forhtml="price"
                                            className="block mb-2 text-sm font-medium text-gray-900">Price</label>
                                        <div className="relative">
                                            <div
                                                className="text-gray-500 flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                                $
                                            </div>
                                            <input type="number" id="price"
                                                value={product.price}
                                                onChange={onChangeHandler}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                                placeholder="3850" required />
                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label forhtml="product-details"
                                            className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                        <textarea id="description" rows="4"
                                            value={product.description}
                                            onChange={onChangeHandler}
                                            className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                            placeholder="e.g. The Lock It Tote bag in grained calf leather displays a number of the House’s classic design codes, such as the leather side bands found on the Keepall bags and handle mounts from the Speedy family. This tote can easily fit a laptop and still has room for other daily essentials. The supple calf leather brings a luxurious feel."></textarea>
                                    </div>
                                </div>
                                <div className="grid grid-cols-6 gap-6 mt-6">
                                    <div className="col-span-6 sm:col-span-6">
                                        <label forhtml="main-image"
                                            className="block mb-2 text-sm font-medium text-gray-900">Main Image Url</label>
                                        <input type="text" name="main-image" id="mainImg"
                                            value={product.mainImg}
                                            onChange={onChangeHandler}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Main Image" required />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <label forhtml="image1"
                                            className="block mb-2 text-sm font-medium text-gray-900">Image Url 1</label>
                                        <input type="text" name="image1" id="image1"
                                            value={product.image1}
                                            onChange={onChangeHandler}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Image URL 2" required />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <label forhtml="image2"
                                            className="block mb-2 text-sm font-medium text-gray-900">Image Url 2</label>
                                        <input type="text" name="image2" id="image2"
                                            value={product.image2}
                                            onChange={onChangeHandler}
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                            placeholder="Image URL 3" required />
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-t border-gray-200 rounded-b">
                                {loading === 'add' && <ButtonSpinner color="blue" />}
                                {!loading && <button
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    type="submit">Add product</button>}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Backdrop />
        </section >
    )
}