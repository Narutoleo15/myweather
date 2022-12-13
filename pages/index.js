import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState } from 'react';
// import {BsSearch} from 'react-icons/bs'

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Aledo&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

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

  const [city, setCity] = useState("")
  const [weather, setWeather] = useState({})
  const [loading, setLoading] = useState(false)

  return (
    <div>
      <Head>
        <title>Weather Map</title>
        <meta name="" content="Weather map using the open weather api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image src='https://images.unsplash.com/photo-1536152470836-b943b246224c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=738&q=80' layout='fill' alt='yoda' />

    </div>
  )
}
