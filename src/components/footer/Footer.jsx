import s from './footer.module.scss'
import logoFace from '../../assets/logoFace.png'
import logoTwitter from '../../assets/logoTwitter.png'
import logoYoutube from '../../assets/logoYoutube.png'
import logoLinkedin from '../../assets/logoLinkedin.png'
import logoInsta from '../../assets/logoInsta.png'

export default function Footer(){
    return(
        <footer className={s.footer}>
            <section className={s.contatosFooter}>
                <p>4002-8922</p>
                <nav>
                    <a href=""><img src={logoFace} alt="Imagem branca da logo do Facebook" /></a>
                    <a href=""><img src={logoTwitter} alt="Imagem branca da logo do Twitter" /></a>
                    <a href=""><img src={logoYoutube} alt="Imagem branca da logo do Youtube" /></a>
                    <a href=""><img src={logoLinkedin} alt="Imagem branca da logo do Linkedin" /></a>
                    <a href=""><img src={logoInsta} alt="Imagem branca da logo do Instragam" /></a>
                </nav>                
            </section>
            <section className={s.copyright}>
                <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </p>
                </section>
        </footer>
    )
}