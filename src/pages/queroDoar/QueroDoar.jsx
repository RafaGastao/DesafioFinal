import { useState } from "react";
import axios from "axios";
import iconeLivro from "../../assets/iconeLivro.png";
import s from "./queroDoar.module.scss";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [image_url, setImage_url] = useState("");
  const [loading, setLoading] = useState(false); // Estado para tela de carregamento

  const capturaTitulo = (e) => setTitulo(e.target.value);
  const capturaCategoria = (e) => setCategoria(e.target.value);
  const capturaAutor = (e) => setAutor(e.target.value);
  const capturaImg = (e) => setImage_url(e.target.value);

  const envioDados = async () => {
    setLoading(true); // Ativa o carregamento

    const dadosPEnviar = {
      titulo,
      categoria,
      autor,
      image_url,
    };

    try {
      await axios.post("https://api-z849.onrender.com/doar", dadosPEnviar);
      alert("Livro doado com sucesso!");
    } catch (error) {
      alert("Erro ao doar o livro!");
    } finally {
      setLoading(false); // Desativa o carregamento após a resposta
    }
  };

  return (
    <section className={s.queroDoarSection}>
      <p>Por favor, preencha o formulário com suas informações e as do livro</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <img src={iconeLivro} alt="Ícone de um livro aberto" />
          <p>Informações do Livro</p>
        </div>
        <input type="text" placeholder="Título" onChange={capturaTitulo} required />
        <input type="text" placeholder="Categoria" onChange={capturaCategoria} required />
        <input type="text" placeholder="Autor" onChange={capturaAutor} required />
        <input type="url" placeholder="Link da Imagem" onChange={capturaImg} required />
        <input
          type="submit"
          value={loading ? "Processando..." : "Doar"}
          className={s.buttonDoar}
          onClick={envioDados}
          disabled={loading} 
        />
      </form>

      {loading && (
        <div className={s.loadingModal}>
            <img src={iconeLivro} alt="Livro girando" />
            <p>Enviando doação...</p>
        </div>
)}
    </section>
  );
}