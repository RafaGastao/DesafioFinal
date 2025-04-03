import livroProtagonista from '../../assets/livroProtagonista.png'
import s from './livrosDoados.module.scss'
import {useState, useEffect} from 'react'
import axios from 'axios'
import lixeira from '../../assets/lixeira.png'

export default function LivrosDoados(){

    const [livros,setLivros] = useState([])

    const puxarLivros = async() =>{
        const resposta = await  axios.get("https://api-z849.onrender.com/livros")
        console.log(resposta)
        setLivros(resposta.data)
    }

    const excluirLivro = async (id) => {
        if (!id) {
            alert("Erro: ID do livro não encontrado.");
            return;
        }

        const confirmacao = window.confirm("Tem certeza que deseja excluir este livro?");
        if (!confirmacao) return;

        try {
            const resposta = await axios.delete(`https://api-z849.onrender.com/livros/${id}`);
            console.log("Resposta da API ao excluir:", resposta); 
            alert("Livro excluído com sucesso!");
            puxarLivros(); 
        } catch (error) {
            console.error("Erro ao excluir o livro:", error.response ? error.response.data : error);
            alert("Erro ao excluir o livro.");
        }
    };


  useEffect(()=>{
      puxarLivros()
  },[])

    return(
        <section className={s.livrosDoadosSection}>
          <h2>Livros Doados</h2>
          <section className={s.containerCards}>
             {livros.map((item) =>(
              <section key ={item.id} className={s.card}>
                <button className={s.botaoExcluir} onClick={() => excluirLivro(item.id)}>
                    <img src={lixeira} alt="Excluir" />
                </button>
                  <img src={item.image_url} alt={item.titulo} />
              <div>
              <h3>{item.titulo}</h3>
              <button onClick={() => excluirLivro(item.id)}>Excluir</button>
              </div>
              </section>
             ))}
          </section>
        </section>
    )
}