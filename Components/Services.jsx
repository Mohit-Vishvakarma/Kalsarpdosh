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
        <Card title='कालसर्प दोष' cardImage={Kalsarpdosh} cardDescription="कालसर्प दोष वैदिक ज्योतिष में वह स्थिति है जब सभी ग्रह राहु और केतु के बीच आ जाते हैं, जिससे जीवन में बाधाएं आती हैं। इसे दूर करने के लिए पूजा, मंत्र और रत्न जैसे उपाय किए जाते हैं।"/>

{/* manglbhat */}
<Card title='मंगल दोष' cardImage={manglbhat} cardDescription="मंगल दोष वैदिक ज्योतिष में वह स्थिति है जब कुंडली में मंगल अशुभ स्थान पर होता है, जिससे वैवाहिक जीवन और अन्य पहलुओं में समस्याएं हो सकती हैं। मंगल दोष पूजा इसके प्रभाव को कम करने के लिए की जाती है, जिसमें मंत्र, हवन और धार्मिक अनुष्ठान शामिल होते हैं।"/>

{/* pitr shanti */}
    <Card title='पितृ शांति' cardImage={pitrshanti} cardDescription="पितृ शांति अनुष्ठान पूर्वजों की आत्मा की शांति और पितृ दोष से मुक्ति के लिए किया जाता है। इसमें तर्पण और श्राद्ध जैसे कर्म शामिल होते हैं।"/>

{/* nav grah shanti  */}
<Card title='नवग्रह शांति' cardImage={navGrahShanti} cardDescription="नवग्रह शांति पूजा ग्रहों के अशुभ प्रभाव को कम कर शुभ फल प्राप्त करने के लिए की जाती है, जिसमें मंत्र, हवन और अनुष्ठान शामिल होते हैं।"/>

    </section>
  )
}
