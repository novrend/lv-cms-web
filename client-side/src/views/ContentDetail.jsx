import Toast from "../components/Toast"
import { Carousel } from 'flowbite-react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getProduct } from '../store/productActions'
import ContentDetailSkeleton from "../components/ContentDetailSkeleton"

export default function ContentDetail() {
    const [show, setShow] = useState(false)
    const [toast, setToast] = useState([0, 0])
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        setLoading(true)
        dispatch(getProduct(id))
            .then((resp) => {
                if (resp?.error) throw resp
                setProduct(resp)
            })
            .catch(error => {
                trigger('Error', error.message)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])
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
            {loading && <ContentDetailSkeleton />}
            {!loading &&
                <div className="bg-stone-100 grid grid-cols-2 gap-8 w-full items-center">
                    <Toast type={toast[0]} show={show} text={toast[1]} />
                    <div className="group h-[719px]">
                        {true && <Carousel indicators={false} slide={false} leftControl={
                            <div className="transition opacity-0 group-hover:opacity-100 duration-300 absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none">
                                <div id="data-carousel-prev" className="flex bg-white w-14 h-14 items-center" data-carousel-prev>
                                    <i className="ml-6 fa-sharp fa-solid fa-chevron-left text-sm"></i>
                                </div>
                            </div>}
                            rightControl={
                                <div className="transition opacity-0	group-hover:opacity-100 duration-300 absolute top-0 right-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none">
                                    <div id="data-carousel-next" className="flex bg-white w-14 h-14 items-center" data-carousel-next>
                                        <i className="ml-6 fa-sharp fa-solid fa-chevron-right text-sm"></i>
                                    </div>
                                </div>}>
                            <img src={product.mainImg} />
                            <img src={product?.Images?.[0]?.imgUrl} />
                            <img src={product?.Images?.[1]?.imgUrl || product?.Images?.[0]?.imgUrl} />
                        </Carousel>}
                    </div>
                    <div className="ml-20">
                        <h2 className="text-md pb-2">{product?.Category?.name}</h2>
                        <h2 className="text-3xl pb-4">{product.name}</h2>
                        <h2 className="text-xl pb-4">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</h2>
                        <button type="button"
                            className="w-80 h-12 text-white bg-black hover:text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-md px-5 py-2.5 text-center mr-2 mb-2">Place
                            in Cart</button>
                        <h2 className="text-md pb-4 pr-16">
                            {product.description}
                        </h2>
                        <h2 className="text-md pb-4 pr-16">
                            Created by: {product?.User?.username}
                        </h2>
                    </div>
                </div>}
        </section>
    )
}