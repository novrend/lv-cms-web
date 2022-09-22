import { Carousel } from 'flowbite-react'
import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { getProductByCategory, productsFetch } from '../store/productActions'
export default function Content() {
    const dispatch = useDispatch()
    const { category } = useParams()
    const { products } = useSelector((state) => {
        return state.productReducer
    })

    useEffect(() => {
        if (category) {
            dispatch(getProductByCategory(category))
        } else {
            dispatch(productsFetch())
        }
    }, [category]);
    return (
        <div className="grid grid-cols-3 gap-8 p-10 w-full">
            {products.map(product => {
                return (
                    <div className="group" key={product.id}>
                        <div className="h-[442px]">
                            <Carousel indicators={false} slide={false} leftControl={
                                <div className="transition opacity-0	group-hover:opacity-100 duration-300 absolute top-0 left-0 z-30 flex items-center justify-center h-full cursor-pointer group focus:outline-none">
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

                                {product.Images.map(image => (
                                    <Link to={`/product/` + product.id} key={image.id}>
                                        <img src={image.imgUrl} className="bg-stone-100" />
                                    </Link>
                                ))}
                                <Link to={`/product/` + product.id}>
                                    <img src={product.mainImg} className="bg-stone-100" />
                                </Link>
                            </Carousel>
                        </div>
                        <div className="pt-4">
                            <Link to={`/product/` + product.id}>
                                <h5 className="text-md font-semibold tracking-tight text-gray-900">{product.name}</h5>
                            </Link>
                            <div className="flex items-center mt-2.5 mb-5">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}