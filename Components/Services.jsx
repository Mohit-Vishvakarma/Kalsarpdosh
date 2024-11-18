import React from 'react'
import Card from './Card'
import Kalsarpdosh from '../public/assets/kalsarpdosh.jpg'
import pitrshanti from '../public/assets/pitrShanti.jpg'
import manglbhat from '../public/assets/mangalDosh.jpg'
import navGrahShanti from '../public/assets/navGrahSanti.png'
import "./Services.css"

export default function Services() {
  return (
    <section id='Services'>
        <h2 className='pageHeading'><b>Our Services</b></h2>
{/* kalsarpdosh */}
        <Card title='Kalsarp Dosh' cardImage={Kalsarpdosh} cardDescription="This is the card description and this is a demo Descriptino."/>

{/* manglbhat */}
<Card title='Mangal Dosh' cardImage={manglbhat} cardDescription="This is the card description and this is a demo Descriptino."/>

{/* pitr shanti */}
    <Card title='Pitr Shanti' cardImage={pitrshanti} cardDescription="This is the card description and this is a demo Descriptino."/>

{/* nav grah shanti  */}
<Card title='Navgrah Shanti' cardImage={navGrahShanti} cardDescription="This is the card description and this is a demo Descriptino."/>

    </section>
  )
}
