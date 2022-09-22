import { useState } from "react"

export default function NavbarSkeleton() {
    const [i, setI] = useState([1, 2, 4, 5, 6, 7, 8, 9, 10])
    return (
        <ul className="flex flex-wrap justify-center mt-0 space-x-8 text-lg font-medium animate-pulse">
            {i.map(el => {
                return (
                    <li key={el}>
                        <a className="text-gray-900 hover:underline hover:underline-offset-[19px]" aria-current="page">
                            <div className="h-6 bg-gray-300 rounded w-20"></div>
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}