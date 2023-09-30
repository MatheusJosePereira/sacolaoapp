import Style from './NavegacaoApp.module.css'

function Navegacao() {
    return (
        <nav className={Style.nav}>
            <h2 className={Style.Titulo_nav}>Sacolão JD. Lucélia</h2>
            <ul className={Style.Corpo_links}>
                <li className={Style.nav_links}>Produtos</li>
                <li className={Style.nav_links}>Sobre</li>
                <li className={Style.nav_links}>Contatos</li>
            </ul>
        </nav>
    )
}

export default Navegacao