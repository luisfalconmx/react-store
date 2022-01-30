import React from 'react'
import { Gift, DollarSign, Zap } from 'react-feather'
import './index.pcss'

const Benefits = () => {
  const Cards = [
    {
      icon: <Gift className="Benefits__CardIcon" />,
      title: 'Envios Gratis',
      text: 'Envios gratis sin minimo de compra'
    },
    {
      icon: <DollarSign className="Benefits__CardIcon" />,
      title: 'Descuentos y Promos',
      text: 'Publicamos las mejores promociones y descuentos'
    },
    {
      icon: <Zap className="Benefits__CardIcon" />,
      title: 'Entregas Rapidas',
      text: 'Todas las entregas se hacen el mismo dia'
    }
  ]

  return (
    <section className="Benefits">
      <h2 className="Benefits__Title">Sabemos cómo hacerte sentir bien</h2>
      <div className="Benefits__Track">
        {Cards.map(({ icon, title, text }) => (
          <div className="Benefits__Card" key={title}>
            {icon}
            <h3 className="Benefits__CardTitle">{title}</h3>
            <p className="Benefits__CardText">{text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Benefits
