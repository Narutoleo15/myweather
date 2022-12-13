import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Aledo&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  return (
    <div>
      <Head>
        <title>Weather Map</title>
        <meta name="" content="Weather map using the open weather api" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}
