
import Style from './LocalizacaoApp.module.css'
function LocalizacaoApp(){
    return(
        <section className={Style.corpo_local}>
            <div className={Style.mapa}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.633022640751!2d-46.67992142473304!3d-23.76046246893684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4926449014e3%3A0xf281db0e8c7cd191!2sSacol%C3%A3o%20JD.Lucelia!5e0!3m2!1spt-BR!2sbr!4v1696012973235!5m2!1spt-BR!2sbr" width="652" height="300"></iframe></div>
            <div className={Style.endereco}><h1 className={Style.texto_localizacao}>Localização</h1><p className={Style.adress}>R. Teresa Farias Isassi - Jardim Lucélia, São Paulo - SP, 04852-223
</p><h1 className={Style.titulo_horarios}>Horaríos de Atendimento</h1><p className={Style.horas}>Segunda a sabado das: 8:00hrs as 20:30hrs<br></br>Domingos das: 8:00hrs as 15:00</p></div>
        </section>
    )
}

export default LocalizacaoApp