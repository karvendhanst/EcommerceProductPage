import { React, useContext, useEffect, useState } from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import useFetch from '../hooks/useFetch';
import { productContext } from '../pages/Home';

const Product = () => {

    const { searchTerm, sort, CatFilter } = useContext(productContext)

    const { data, error } = useFetch("http://localhost:3000/products")

    const [filteredData, setFilteredData] = useState([])

    // pagination

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(6)

    useEffect(() => {
        if (!data) return;

        let result = [...data];

        if (sort) {
            if (sort == 'lh') {
                result.sort((a, b) => a.price - b.price)
            } else if (sort == 'hl') {
                result.sort((a, b) => b.price - a.price)
            }
        }
        if (searchTerm) {
            result = result.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        }

        if (CatFilter) {
            result = result.filter(item => item.category == CatFilter)
        }

        setFilteredData(result)
        setCurrentPage(1);

    }, [data, searchTerm, sort, CatFilter])

    const totalPages = Math.ceil(filteredData.length / productsPerPage)

    const start = (currentPage - 1) * 6
    const end = start + 6
    const currentProducts = filteredData.slice(start, end)


    return (

        <div className='pt-20 px-8 text-gray-600'>
            <h1 className='uppercase flex gap-3 items-center justify-between'> <span className="flex items-center gap-3"><span>Shop Products</span> <span className='text-2xl'><IoIosArrowRoundForward /></span></span> <span>{currentProducts.length} Products</span> </h1>

            {filteredData.length == 0 ? (<div className='relative -top-6 left-40 px-8 text-gray-600'>Loading....</div>) :

                (<div>


                    <div className='my-8 grid gap-5 grid-cols-3'>
                        {currentProducts && currentProducts.map((product) => (
                            <div className='p-5 relative shadow-lg border border-gray-200 rounded' key={product._id}>
                                <span className='absolute top-2 right-2 bg-black/40 py-1 px-2 rounded-2xl text-[10px] text-white'>{product.category}</span>
                                <div className="h-50 w-full">
                                    <img src={product.image} alt="" className='w-full h-full mx-auto object-contain' />
                                </div>
                                <span className='mt-3 block text-sm'>{product.brand}</span>
                                <h3 className='font-bold my-1'>{product.title}</h3>
                                <p>₹ {product.price} <span className="line-through">{product.oldPrice}</span></p>
                                <button className='mt-3 bg-black/80 w-full text-white p-2 rounded'>Add to cart</button>
                            </div>
                        ))}
                    </div>
                </div>)

            }

            <div className="my-10 flex justify-center">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    className='p-2 border border-gray-300 rounded-l cursor-pointer'
                >Prev
                </button>
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-4 border border-gray-300 cursor-pointer ${currentPage === index + 1 ? "bg-black/75 text-white" : ""
                    }`}
                    >
                        {index + 1}
                    </button>
                ))}
                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    className='p-2 border border-gray-300 rounded-r cursor-pointer'
                >Next
                </button>
            </div>

        </div>
    )
}

export default Product