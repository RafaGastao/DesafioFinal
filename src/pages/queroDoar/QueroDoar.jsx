import iconeLivro from '../../assets/iconeLivro.png'
import s from './queroDoar.module.scss'
import {useState} from 'react'
import axios from 'axios'

export default function QueroDoar(){

    const [titulo,setTitulo] = useState("")
       const [categoria,setCategoria] = useState("")
       const [autor,setAutor] = useState("")
       const [image_url,setImage_url] = useState("")
   
   const capturaTitulo = (e) =>{
           setTitulo(e.target.value)
       }
   
       const capturaCategoria = (e) =>{
           setCategoria(e.target.value)
       }
   
       const capturaAutor = (e) =>{
           setAutor(e.target.value)
       }
   
       const capturaImg = (e) =>{
           setImage_url(e.target.value)
       }
   
   
   const envioDados = async() =>{
     const dadosPEnviar ={
       titulo,
       categoria,
       autor,
       image_url
     }
     await axios.post("https://api-z849.onrender.com/doar",dadosPEnviar)
   }
   
   
   
   
   
       return(
           <section className={s.queroDoarSection}>
              <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
   
           <form onSubmit={(e)=>e.preventDefault()}>
               <div>
             <img src={iconeLivro} alt="icone de um livro aberto" />
             <p>Informações do Livro</p>
               </div>
               <input type="text" name="" id=""  placeholder='Titulo'  onChange={capturaTitulo} required/>
                <input type="text" name="" id=""  placeholder='Categoria'onChange={capturaCategoria} required/>
                 <input type="text" name="" id="" placeholder='Autor'onChange={capturaAutor} required/>
                  <input type="url" name="" id="" placeholder='Link da Imagem' onChange={capturaImg} required/>
                  <input type="submit" value="Doar" className={s.buttonDoar} onClick={envioDados}/>
            </form>
           </section>
       )
   }