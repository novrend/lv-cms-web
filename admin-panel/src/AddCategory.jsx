export default function AddCategory() {
    return (
        <div className="fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex"
            id="add-category-modal">
            <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
                    <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
                        <h3 className="text-xl font-semibold dark:text-white">
                            Add category
                        </h3>
                        <button type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-white dark:hover:bg-gray-700"
                            data-modal-toggle="add-category-modal">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="p-6 space-y-6">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-6">
                                    <label forhtml="category-name"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category
                                        Name</label>
                                    <input type="text" name="category-name" id="category-name"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Bags" required />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
                        <button
                            className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            type="submit">Add product</button>
                    </div>
                </div>
            </div>
        </div >
    )
}