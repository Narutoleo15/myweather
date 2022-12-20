import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs'


export default function Home() {
  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Aledo&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  console.log(city)

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      console.log(response.data)

    })
    setCity("")
    setLoading(false)
  }




  return (
    <div>
      <Head>
        <title>Weather Map</title>
        <meta name="" content="Weather map using the open weather api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />

      <Image className='object-cover' src='https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80' fill alt='yoda' />

      <div className='relative  flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
        <form className='flex justify-between items-center min-w-[500px] m-auto p-3 bg-transparent border border-gray-400 text-white rounded-2xl'>
          <div>
            <input
              onChange={(e) => setCity(e.target.value)}
              className='bg-transparent text-white border-none hover:outline-none focus:outline-none text-xl placeholder:text' type='text' placeholder='Search city' />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>
    </div>
  )
}
