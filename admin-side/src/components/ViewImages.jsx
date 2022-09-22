import Backdrop from "./Backdrop";
import { Carousel } from 'flowbite-react'
export default function ViewImages(props) {
    return (
        <section>
            <div className="fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full flex"
                id="category-modal">
                <div className="relative w-auto h-auto max-w-2xl px-4 md:h-auto">
                    <div className="relative bg-white rounded-lg shadow">
                        <div className="flex items-start justify-between p-5 border-b rounded-t">
                            <h3 className="text-xl font-semibold">
                                View images
                            </h3>
                            <button type="button"
                                onClick={props.clicked}
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
                        <div className="h-[460px] w-[460px] group">
                            <Carousel indicators={false} slide={false} leftControl={
                                <div className="transition opacity-0 group-hover:opacity-100 duration-300 absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none">
                                    <div id="data-carousel-prev" className="flex bg-white w-14 h-14 items-center" data-carousel-prev>
                                        <i className="ml-6 fa-sharp fa-solid fa-chevron-left text-sm"></i>
                                    </div>
                                </div>}
                                rightControl={
                                    <div className="transition opacity-0 group-hover:opacity-100 duration-300 absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none">
                                        <div id="data-carousel-next" className="flex bg-white w-14 h-14 items-center" data-carousel-next>
                                            <i className="ml-6 fa-sharp fa-solid fa-chevron-right text-sm"></i>
                                        </div>
                                    </div>}>
                                {props.product.Images.map(image => (
                                    <img src={image.imgUrl} className="bg-stone-100" />
                                ))}
                                <img src={props.product.mainImg} className="bg-stone-100" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div >
            <Backdrop />
        </section >
    )
}