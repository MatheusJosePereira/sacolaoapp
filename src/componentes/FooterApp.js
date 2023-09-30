import Style from './FooterApp.module.css'
function FooterApp(){
    return(

        <footer className={Style.corpo_footer}>
            <div><h1 className={Style.footer_logo}>Sacolão JD.Lucélia</h1></div>
            <ul className={Style.footer_links}>
                <li className={Style.footer_link}>Produtos</li>
                <li className={Style.footer_link}>Sobre</li>
                <li className={Style.footer_link}>Contato</li>
            </ul>
            <ul className={Style.footer_links}>
                <li className={Style.footer_link}>(11) 5976-3033</li>
                <li className={Style.footer_link}>(11) 97244-3340</li>
                <li className={Style.footer_link}>(11) 94511-5818</li>
            </ul>
        </footer>

    )
}

export default FooterApp