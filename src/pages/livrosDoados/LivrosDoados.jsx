import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    const puxarLivros = async() =>{
        const resposta = await  axios.get("https://api-z849.onrender.com/livros")
        setLivros(resposta.data.livros)
    }
  useEffect(()=>{
      puxarLivros()
  },[])

    return(
        <section className={s.livrosDoadosSection}>
          <h2>Livros Doados</h2>
          <section className={s.containerCards}>
             <section>
                <img src={livroProtagonista} alt="imagem do livro O Protagonista" />
                <div>
                <h3>O protagonista</h3>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </div>
             </section>
          </section>
        </section>
    )
}