import Hand_heart from './imagens/coracao.png'
import BolsaValores from './imagens/app-bolsa-de-valores.png'
import jogos from './imagens/jogos.png'
import olhos from './imagens/cuidados-com-os-olhos.png'
import Style from  './SectionValoresApp.module.css'
import {motion} from 'framer-motion'

function SectionValoresApp(){
    return(
        <section className={Style.SectionValores}>
            <motion.div animate={{}}><img  src={Hand_heart} className={Style.mao_coracao}></img><p className={Style.texto_valores}>Aqui você encontra frutas selecionadas, higienizadas e de todas as cores e sabores!</p></motion.div>
            <motion.div><motion.img src={BolsaValores} className={Style.bolsa_valores}></motion.img><p className={Style.texto_valores2}>Variedade e preço justo que cabe no seu bolso! Alem de economizar leva a saude para sua casa. </p></motion.div>
            <motion.div><motion.img src={jogos} className={Style.jogos}></motion.img><p className={Style.texto_valores3}>Um grande portifolio de jogos e consoles com valores super acessiveis dos mais novos até o mais antigos.</p></motion.div>
            <motion.div><motion.img src={olhos} className={Style.olhos}></motion.img><p className={Style.texto_valores4}>Sacolão que busca ser mais do que um comércio, mas uma comunidade. Ser seu parceiro na hora das compras.</p></motion.div>
        </section>
    )
}

export default SectionValoresApp