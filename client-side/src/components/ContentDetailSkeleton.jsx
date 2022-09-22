export default function ContentDetailSkeleton() {
    return (
        <div className="bg-stone-100 grid grid-cols-2 gap-8 w-full items-center animate-pulse">
            <div>
                <div class="flex justify-center items-center h-[719px] bg-gray-300 rounded">
                    <svg class="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                </div>
            </div>
            <div className="ml-20">
                <h2 className="text-3xl pb-4">
                    <div className="h-10 bg-gray-300 rounded w-96"></div>
                </h2>
                <h2 className="text-xl pb-4">
                    <div className="h-6 bg-gray-300 rounded w-24"></div>
                </h2>
                <button type="button"
                    className="w-80 h-12 text-white bg-black hover:text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-md px-5 py-2.5 text-center mr-2 mb-2">Place
                    in Cart</button>
                <h2 className="text-md pb-4 pr-16">
                    <div className="h-5 bg-gray-300 rounded w-[35rem] mb-3"></div>
                    <div className="h-5 bg-gray-300 rounded w-[33rem] mb-3"></div>
                    <div className="h-5 bg-gray-300 rounded w-[32rem]"></div>
                </h2>
            </div>
        </div>
    )
}