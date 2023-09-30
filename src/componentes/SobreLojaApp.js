import Style from './SobreLojaApp.module.css'

function SobreLojaApp(){
    return(
        
        <section className={Style.section_sobre}>
            <div className={Style.sobre_loja}><h1 className={Style.titulo_sobreloja}>Quem Somos</h1><p className={Style.texto_sobreloja}>Uma empresa que está no mercado há 25 anos buscando maior qualidade de vida para as pessoas do bairro, com frutas de qualidades com um valor baixo. A empresa foi fundada por Anabela e está se ampliando no mercado com diversas novidades.</p></div>
            <div className={Style.imagem_loja}></div>
        </section>
    )
}
export default SobreLojaApp