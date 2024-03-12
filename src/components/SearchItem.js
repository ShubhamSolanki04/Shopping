import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Products from './Products';


const SearchItem = () => {
  const {term} = useParams();
  const[filterData , setFilterData] = useState([]);

  useEffect(()=>{
    const filteredData = ()=>{   // include will check wther the input is available in data or not
      const data = items.filter((x)=>x.title.toLowerCase().includes(term.toLowerCase()))
      //console.log(data);
      setFilterData(data)
    }
    filteredData()
  },[term])
  return (
    <Products items={filterData}/>
  )
}

export default SearchItem
