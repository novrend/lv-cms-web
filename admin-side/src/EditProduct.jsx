export default function EditProduct() {
    return (
        <div className="fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex"
            id="product-modal">
            <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-start justify-between p-5 border-b rounded-t">
                        <h3 className="text-xl font-semibold">
                            Edit product
                        </h3>
                        <button type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                            data-modal-toggle="product-modal">
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
                                    <label forhtml="product-name"
                                        className="block mb-2 text-sm font-medium text-gray-900">Product
                                        Name</label>
                                    <input type="text" name="product-name" id="product-name"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="LOCK IT TOTE" required />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label forhtml="category"
                                        className="block mb-2 text-sm font-medium text-gray-900">Category</label>
                                    <input type="text" name="category" id="category"
                                        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        placeholder="Bags" required />
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
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                                            placeholder="3850" required />
                                    </div>
                                </div>
                                <div className="col-span-full">
                                    <label forhtml="product-details"
                                        className="block mb-2 text-sm font-medium text-gray-900">Description</label>
                                    <textarea id="product-details" rows="4"
                                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-sm focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="e.g. The Lock It Tote bag in grained calf leather displays a number of the House’s classic design codes, such as the leather side bands found on the Keepall bags and handle mounts from the Speedy family. This tote can easily fit a laptop and still has room for other daily essentials. The supple calf leather brings a luxurious feel."></textarea>
                                </div>
                            </div>
                            <div className="flex my-4 space-x-5">
                                <div>
                                    <img src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lock-it-tote-lv-aerogram-bags--M59158_PM1_Worn%20view.png?wid=2048&hei=2048"
                                        className="h-24" alt="imac image" />
                                    <a href="#" className="cursor-pointer"><svg className="w-6 h-6 -mt-5 text-red-600"
                                        fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg></a>
                                </div>
                                <div>
                                    <img src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lock-it-tote-lv-aerogram-bags--M59158_PM2_Front%20view.png?wid=1240&hei=1240"
                                        className="h-24" alt="imac image" />
                                    <a href="#" className="cursor-pointer"><svg className="w-6 h-6 -mt-5 text-red-600"
                                        fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg></a>
                                </div>
                                <div>
                                    <img src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-lock-it-tote-lv-aerogram-bags--M59158_PM1_Side%20view.png?wid=1240&hei=1240"
                                        className="h-24" alt="imac image" />
                                    <a href="#" className="cursor-pointer"><svg className="w-6 h-6 -mt-5 text-red-600"
                                        fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                            clip-rule="evenodd"></path>
                                    </svg></a>
                                </div>
                            </div>
                            <div className="flex items-center justify-center w-full">
                                <label
                                    className="flex flex-col w-full h-32 border-2 border-gray-300 border-dashed rounded cursor-pointer hover:bg-gray-50">
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor"
                                            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12">
                                            </path>
                                        </svg>
                                        <p className="py-1 text-sm text-gray-600">Upload a file
                                            or drag and drop</p>
                                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to
                                            10MB</p>
                                    </div>
                                    <input type="file" className="hidden" />
                                </label>
                            </div>
                        </form>
                    </div>
                    <div className="p-6 border-t border-gray-200 rounded-b">
                        <button
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                            type="submit">Save all</button>
                    </div>
                </div>
            </div>
        </div >
    )
}