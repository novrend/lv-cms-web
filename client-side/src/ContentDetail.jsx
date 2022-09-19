export default function ContentDetail() {
    return (
        <div className="bg-stone-100 grid grid-cols-2 gap-8 w-full items-center">
            <div>
                <img
                    src="https://us.louisvuitton.com/images/is/image/lv/1/PP_VP_L/louis-vuitton-racer-backpack-monogram-shadow-bags--M46109_PM1_Worn%20view.png?wid=2048&hei=2048" />
            </div>
            <div className="ml-20">
                <h2 className="text-3xl pb-4">RACER BACKPACK</h2>
                <h2 className="text-xl pb-4">$3,250.00</h2>
                <button type="button"
                    className="w-96 h-12 text-white bg-black hover:text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-md px-5 py-2.5 text-center mr-2 mb-2">Place
                    in Cart</button>
            </div>
        </div>
    )
}