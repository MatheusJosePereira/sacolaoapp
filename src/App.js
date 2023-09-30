import './App.css';
import Navegacao from './componentes/NavegacaoApp';
import HeaderApp from './componentes/HeaderApp';
import SectionValoresApp from './componentes/SectionValoresApp';
import ProdutosApp from './componentes/ProdutosApp';
import SobreLojaApp from './componentes/SobreLojaApp';
import LocalizacaoApp from './componentes/LocalizacaoApp';
import FooterApp from './componentes/FooterApp';

function App() {
  return(
    <body>
      <Navegacao></Navegacao>
      <HeaderApp></HeaderApp>
      <SectionValoresApp></SectionValoresApp>
      <ProdutosApp></ProdutosApp>
      <SobreLojaApp></SobreLojaApp>
      <LocalizacaoApp></LocalizacaoApp>
      <FooterApp></FooterApp>
    </body>
  );
}

export default App;
