import React from 'react'
import './Admin.css'
import {Routes,Route} from 'react-router-dom'
import Sidebar from "../../Components/Sidebar/Sidebar"
import AddProduct from '../../Components/AddProduct/AddProduct.jsx'
import ListProduct from '../../Components/ListProduct/ListProduct.jsx'
const Admin = () => {
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin