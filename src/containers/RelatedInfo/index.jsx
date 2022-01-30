import React from 'react'
import Image from '@components/Image'
import RelatedImage from '@images/pexels-karolina-grabowska.jpg'
import RelatedImageWebp from '@images/pexels-karolina-grabowska.jpg?as=webp'
import './index.pcss'

const RelatedInfo = () => {
  return (
    <section className="RelatedInfo">
      <Image
        className="RelatedInfo__Image"
        src={RelatedImage}
        srcSet={RelatedImageWebp}
        alt="Photo by Karolina Grabowska from Pexels"
      />
      <div className="RelatedInfo__Content">
        <h2 className="RelatedInfo__Title">
          Contamos con nuestra propia linea de productos exclusivos
        </h2>
        <div className="RelatedInfo__Track">
          <div className="RelatedInfo__Card">
            <h3 className="RelatedInfo__CardTitle">Productos Naturales</h3>
            <p className="RelatedInfo__CardDescription">
              Tenemos disponibilidad de productos 100% naturales y libre de
              quimicos.
            </p>
          </div>
          <div className="RelatedInfo__Card">
            <h3 className="RelatedInfo__CardTitle">Productos Artesanales</h3>
            <p className="RelatedInfo__CardDescription">
              Algunos de nuestros productos los hacemos el mismo dia que lo
              pides.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RelatedInfo
