import { Toast } from "../components/Toast"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { baseUrl } from "../config/config"
import { fetching } from "../helpers"

export default function ContentDetail() {
    const [show, setShow] = useState(false)
    const [toast, setToast] = useState([0, 0])
    const [product, setProduct] = useState({})
    const { id } = useParams()
    useEffect(() => {
        fetching(`${baseUrl}/product/${id}`)
            .then((resp) => {
                if (resp?.error) throw resp
                setProduct(resp)
            })
            .catch(error => {
                trigger('Error', error.message)
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
        <div className="bg-stone-100 grid grid-cols-2 gap-8 w-full items-center">
            <Toast type={toast[0]} show={show} text={toast[1]} />
            <div>
                <img src={product.mainImg} />
            </div>
            <div className="ml-20">
                <h2 className="text-3xl pb-4">{product.name}</h2>
                <h2 className="text-xl pb-4">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}</h2>
                <button type="button"
                    className="w-80 h-12 text-white bg-black hover:text-black hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium text-md px-5 py-2.5 text-center mr-2 mb-2">Place
                    in Cart</button>
                <h2 className="text-md pb-4 pr-16">
                    {product.description}
                </h2>
            </div>
        </div>
    )
}