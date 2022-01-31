import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import Image from '@components/Image'
import './index.pcss'

const Team = () => {
  const Images = [
    {
      image: require('@images/pexels-anastasia-shuraeva.jpg'),
      imageWebp: require('@images/pexels-anastasia-shuraeva.jpg?as=webp'),
      alt: 'Photo by Anastasia Shuraeva on Pexels'
    },
    {
      image: require('@images/pexels-andrew-personal-training.jpg'),
      imageWebp: require('@images/pexels-andrew-personal-training.jpg?as=webp'),
      alt: 'Photo by Andrew Personal Training on Pexels'
    },
    {
      image: require('@images/pexels-matheus-ferrero.jpg'),
      imageWebp: require('@images/pexels-matheus-ferrero.jpg?as=webp'),
      alt: 'Photo by Matheus Ferrero on Pexels'
    },
    {
      image: require('@images/pexels-andrea-piacquadio.jpg'),
      imageWebp: require('@images/pexels-andrea-piacquadio.jpg?as=webp'),
      alt: 'Photo by Andrea Piacquadio on Pexels'
    },
    {
      image: require('@images/pexels-italo-melo.jpg'),
      imageWebp: require('@images/pexels-italo-melo.jpg?as=webp'),
      alt: 'Photo by Italo Melo on Pexels'
    }
  ]

  const SliderOptions = {
    type: 'loop',
    autoWidth: true,
    focus: 'center',
    breackpoints: {
      768: {
        autoWidth: false
      }
    }
  }

  return (
    <section className="Team">
      <h2 className="Team__Title">Nuestro gran equipo</h2>
      <Splide className="Team__Slider" options={SliderOptions}>
        {Images.map(({ image, imageWebp, alt }) => (
          <SplideSlide className="Team__Slide" key={alt}>
            <Image
              className="Team__Image"
              src={image}
              srcSet={imageWebp}
              alt={alt}
            />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  )
}

export default Team
