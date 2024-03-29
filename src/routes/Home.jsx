import React from 'react'
import Hero from '@components/Hero'
import Benefits from '@containers/Benefits'
import Features from '@containers/Features'
import RelatedInfo from '@containers/RelatedInfo'
// import Team from '@containers/Team'
import CallToAction from '@containers/CallToAction'
import HomeCover from '@images/inicio-video-cover.jpg'
import HeroVideo from '@videos/inicio-video.mp4'

const Home = () => {
  return (
    <>
      <Hero
        title="Compra tus productos desde la comodidad de tu casa"
        caption="Inicio"
        buttonText="Ver Productos"
        image={HomeCover}
        video={HeroVideo}
      />
      <Benefits />
      <Features />
      <RelatedInfo />
      {/* <Team /> */}
      <CallToAction />
    </>
  )
}

export default Home
