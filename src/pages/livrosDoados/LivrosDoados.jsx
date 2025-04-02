import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    const puxarLivros = async() =>{
        const resposta = await  axios.get("https://api-z849.onrender.com/livros")
        console.log(resposta)
        setLivros(resposta.data)
    }

  useEffect(()=>{
      puxarLivros()
  },[])

    return(
        <section className={s.livrosDoadosSection}>
          <h2>Livros Doados</h2>
          <section className={s.containerCards}>
             {livros.map((item) =>(
              <section>
                  <img src={item.image_url} alt={item.titulo} />
              <div>
              <h3>{item.titulo}</h3>
              </div>
              </section>
             ))}
          </section>
        </section>
    )
}