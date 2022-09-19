import { useState, useEffect } from 'react'
export default function Content() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:3000/Products`);
            const json = await response.json();
            setProducts(json);
        }

        fetchData()
            .catch(console.error);;
    }, [])

    return (
        <div className="grid grid-cols-3 gap-8 p-10 w-full">
            {products.map(product => {
                return (
                    <div key={product.id}>
                        <a href="#" className="relative">
                            <div className="absolute inset-y-0 left-0 top-1/2">
                                <i className="ml-4 fa-solid fa-angle-left text-xl"></i>
                            </div>
                            <div className="absolute inset-y-0 right-0 top-1/2">
                                <i className="mr-4 fa-solid fa-angle-right text-xl"></i>
                            </div>
                            <img className="p-8 bg-stone-100"
                                src={product.mainImg}
                                alt="product image" />
                            <span className="fa-regular fa-heart h-8 w-8 pt-3 pr-3 absolute top-0 right-0"></span>
                        </a>
                        <div className="pt-4">
                            <a href="#">
                                <h5 className="text-md font-semibold tracking-tight text-gray-900">{product.name}</h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(product.price)}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}