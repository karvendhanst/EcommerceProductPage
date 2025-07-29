import React, { createContext, useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Product from '../components/Product'

export const productContext = createContext()

const Home = () => {

  const [searchTerm, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [CatFilter, setCatFilter] = useState("")

  return (

    <productContext.Provider value={{searchTerm, sort, CatFilter}}>
      <div>
        <header className='w-full fixed top-0 left-0'>
          <Navbar />
        </header>
        <main>
          <section className='w-1/4 h-screen fixed top-0 left-0 z-[-1]'>
            <Sidebar setSearch={setSearch} setSort={setSort} setCatFilter={setCatFilter}/>
          </section>
          <section className='w-3/4 min-h-screen absolute top-0 right-0 z-[-1]'>
            <Product />
          </section>
        </main>
      </div>
    </productContext.Provider>
  )
}

export default Home