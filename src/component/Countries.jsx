import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import Shimmer from './Shimmer'

function Countries() {
    const [countriesData, setCountriesData] = useState([])
    const [query , setquery]=useState('')
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then((data) => {
                setCountriesData(data)
            })
    }, []) // dependency array

    return (
        <>

  

        <div className="max-w-md mx-auto  left-[400px] top-[1px]">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-12 text-gray-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>
                    </div>
                    <input
                        className="peer h-full w-full outline-none text-sm text-gray-700 pr-2"
                        type="text"
                        id="search"
                        placeholder="Search something.."
                        onChange={(e)=>{
                            setquery(e.target.value.toLowerCase())
                        }}
                    />
                </div>
            </div>

        {countriesData.length === 0? <Shimmer/>:
        <div className='flex  flex-wrap gap-2  '>
            {countriesData.filter((country)=>country.name.common.toLowerCase().includes(query)).map((country, index) => (
                <CountryCard
                key={index}
                name={country.name.common}
                flag={country.flags.svg}
                population={country.population}
                region={country.region}
                capital={country.capital ? country.capital[0] : 'N/A'}
                />
            ))}
        </div>}
        
    </>
    )
}

export default Countries
