import React from 'react'
import Style from './HeaderApp.module.css'
import {motion} from 'framer-motion'

import {Swiper, SwiperSlide} from 'swiper/react'



function HeaderApp() {
    return (
        <header className={Style.header}>
            <div className={Style.corpo_conteudo_header}>
                <motion.h2 animate={{ x:-150 }} className={Style.titulo_header}>Aqui o Seu Dinheiro Tem Valor</motion.h2>
                <motion.p animate={{ x:-150}} className={Style.texto_header}>Você encontra tudo o que precisa para uma alimentação saudável e saborosa. E o melhor: com preços que cabem no seu bolso!</motion.p>
                <motion.button animate={{x:-100}} className={Style.button}>Saiba Mais!</motion.button>
            </div>

            <motion.div animate={{x:-30}}  className={Style.imagem_header}></motion.div>

        </header>
    )
}

export default HeaderApp