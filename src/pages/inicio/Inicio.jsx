import s from './inicio.module.scss'
import oferece from '../../assets/imagem1.png'
import garante from '../../assets/imagem2.png'
import estimula from '../../assets/imagem3.png'
import fornece from '../../assets/imagem4.png'

export default function Inicio(){
    return(
    <main>
        <section className={s.primeiraSessaoInicio}>
            <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
        </section>

        <section className={s.porqueDoarsection}>
            <h3>Por que devo doar?</h3>
        
        <div className={s.containerCards}>
        <section>
        <img src={oferece} alt="" />
        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
        </section>

         <section>
        <img src={estimula} alt="" />
        <p> Estimula o hábito da leitura e o aprendizado contínuo.</p>
        </section>

         <section>
        <img src={fornece} alt="" />
        <p> Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
        </section>

         <section>
        <img src={garante} alt="" />
        <p> Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
        </section>
    </div>
    </section>
    </main>
    )
}
