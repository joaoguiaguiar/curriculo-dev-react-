import PostModelo from '../../componentes/components aboute me/PostModelo'
import './abouteMe.css'
import fotoBanner from '../../assets/Foto-banner-1.png'
import Informaçoes from '../../componentes/components aboute me/InformationMe'

function AbouteMe() {
    return (
        <section>
            <PostModelo fotoCapa={fotoBanner} titulo='Sobre mim' />
            <Informaçoes/>
        </section>
    )
}

export default AbouteMe
