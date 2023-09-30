import Style from './ProdutosApp.module.css'
import Carousel from 'react-bootstrap/Carousel';
import banca_repolho from './imagens/Banca_repolho.jpg'
import alface from './imagens/Alface.jpg'
import coentro from './imagens/Coentro.jpeg'
import banana from './imagens/Banca_bananas.jpg'
import mexirica from './imagens/banca_mexirica.png';
import maca from './imagens/banca_maças.webp';
import tomate from './imagens/banca_tomate.jpg'
import batata from './imagens/banca_batatas.jpg'
import cenoura from './imagens/banca_cenoura.jpg'
import fita from './imagens/fitas_nintendo64.jpg'
import ps4cd from './imagens/JogosPS4.jpg'
import ps3cd from './imagens/JogosPS3.jpg'
import cocacola from './imagens/cocacola.webp'
import brahma from './imagens/Brahma.jpg'
import pepsi from './imagens/Pepsi.webp'


import { CarouselControl } from 'reactstrap';


function ProdutosApp(){
    return(
       
        <section className={Style.sessao_produtos}>
             

            <h2 className={Style.titulo_produtos}>Alguns de Nossos Produtos</h2>
            <h3>Verduras</h3>
            <Carousel className={Style.carousel} Style={{width:'100%'}}>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={banca_repolho} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={alface} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={coentro} style={{ width: '100%', height: '300px',backgroundSize: 'cover'}}  />
                </Carousel.Item>
            </Carousel>


            <h3>Frutas</h3>
            <Carousel className={Style.carousel} Style={{width:'100%'}}>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={banana} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={mexirica} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={maca} style={{ width: '100%', height: '300px',backgroundSize: 'cover'}}  />
                </Carousel.Item>
            </Carousel>


            <h3>Legumes</h3>
            <Carousel className={Style.carousel} Style={{width:'100%'}}>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={tomate} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={batata} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={cenoura} style={{ width: '100%', height: '300px',backgroundSize: 'cover'}}  />
                </Carousel.Item>
            </Carousel>

            <h3>Jogos</h3>
            <Carousel className={Style.carousel} Style={{width:'100%'}}>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={fita} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={ps4cd} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={ps3cd} style={{ width: '100%', height: '300px',backgroundSize: 'cover'}}  />
                </Carousel.Item>
            </Carousel>
            

            <h3>Bebidas</h3>
            <Carousel className={Style.carousel} Style={{width:'100%'}}>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={cocacola} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={brahma} style={{ width: '100%', height: '300px',backgroundSize: 'cover' }}  />
                </Carousel.Item>
                <Carousel.Item className={Style.imagem_carosel}>
                    <img src={pepsi} style={{ width: '100%', height: '300px',backgroundSize: 'cover'}}  />
                </Carousel.Item>
            </Carousel>

            <h2 className={Style.texto_orcamento}>Orcamento e negociações aqui</h2>
            <button className={Style.button} ><a className={Style.waths} href='https://wa.me/5511945115818'>Orcamento e negociações</a></button> 
        </section>
    )
}

export default ProdutosApp