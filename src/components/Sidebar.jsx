import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";


const Sidebar = ({setSearch, setSort, setCatFilter}) => {

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    const handleSort = (e)=>{
        setSort(e.target.value)
    }
    const handleCatFilter = (e)=>{
        setCatFilter(e.target.value)
    }
 
 
    return (
        <aside className='bg-white shadow-2xl h-full pt-30 px-10'>

            <div className='flex w-full'>
                <input 
                    type="search" 
                    placeholder='Search Here..' 
                    className='outline-none shadow border border-gray-300 border-r-0 p-2 rounded-tl rounded-bl text-gray-600' 
                    onChange={(e)=> handleSearch(e)}
                />
                
                <div className='shadow border border-gray-300 p-2 rounded-br rounded-tr text-gray-600 border-l-0 flex justify-center items-center cursor-pointer'>
                    <CiSearch />
                </div>
            </div>

            <div className='my-10 relative'>
                <h3 className='my-5 text-gray-600'>Filter by category</h3>
                <select name="" className='outline-none shadow border border-gray-300 p-2 rounded w-full rounded-bl text-gray-600 appearance-none' onChange={(e)=> handleCatFilter(e)}>
                    <option value="">All</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Home Decoration">Home Decoration</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Equipments">Equipments</option>
                    <option value="Beauty Product">Beauty Product</option>
                </select>
                <div className="pointer-events-none absolute top-14 right-0 flex items-center px-3 text-gray-600">
                    <IoIosArrowDown />
                </div>
            </div>

            <div className='my-10 relative'>
                <h3 className='my-5 text-gray-600'>Sort by price</h3>
                <select name="" className='outline-none shadow border border-gray-300 p-2 rounded w-full rounded-bl text-gray-600 appearance-none' onChange={(e)=>handleSort(e)}>
                    <option value="">default</option>
                    <option value="lh" className='flex gap-3 items-center'>From Lower to Higher</option>
                    <option value="hl" className='flex gap-3 items-center'>From Higher to Lower</option>
                </select>
                <div className="pointer-events-none absolute top-14 right-0 flex items-center px-3 text-gray-600">
                    <IoIosArrowDown />
                </div>
            </div>


        </aside>
    )
}

export default Sidebar