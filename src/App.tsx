import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import { Reveal } from 'react-awesome-reveal';
import { Carousel } from 'react-responsive-carousel';

import firstSectionBgImage from './assets/image 1.jpg';
import arunaLogoYellow from './assets/Aruna-logo-yellow.png';
import carouselImages from './assets/Fotos Aruna';
import slogan from './assets/slogan.svg';
import cardIcons from './assets/Card Icons';
import palmTree from './assets/palm-tree-leaf-silhouette-vector-illustration_136875-5325.png';
import cuboIcon from './assets/Cubo Icons/box.svg';
import aiPic from './assets/ai.png';
import whiteCuboIcon from './assets/Cubo Icons/box-white.svg';
import carroIcon from './assets/Cubo Icons/carro.svg';
import solarPanelIcon from './assets/Cubo Icons/solarpanel.svg';
import plantImage from './assets/planta-legend.png';
import bedPlantIcon from './assets/Plant Icons/tabler_bed.svg';
import carPlantIcon from './assets/Plant Icons/bx_car.svg';
import sofaPlantIcon from './assets/Plant Icons/mdi_sofa-outline.svg';
import sunsetPlantIcon from './assets/Plant Icons/si_sun-set-line.svg';

import { Button } from './components/button';
import { Footer } from './components/footer';
import { MapComponent } from './components/map';
import { Card } from './components/card';

function App() {

  const _ = require('lodash');

  return (
    <div className="App">
      

      <div className="first-section">
        <img src={firstSectionBgImage} className="first-section-bg-image"/>
        <div className="first-section-gradient"/>
        <div className="first-section-content">

          <div className="first-group">
            <Reveal cascade triggerOnce>

              <span className="local">ITAPEMA · <span>MEIA PRAIA</span></span>
              <div className="second-line">
                <img src={arunaLogoYellow}/>
                <div className="title">
                  <span className="line-one">ARUNA TOWER</span>
                  <span className="line-two">RESIDENCE</span>
                </div>
              </div>

            </Reveal>
          </div>
    	    <Reveal cascade triggerOnce delay={1000}>

            <div className="sub-headline">
              Quando seu <span>sentimento</span> e sua <span>consciência</span> tomam a forma de um lar.
              <br/><br/>
              Um empreendimento que segue o <span>alto padrão</span> de qualidade
              e onde seus idealizadores se inspiram na tecnologia da 
              <span> inteligência artificial</span> e no planejamento <span>auto-sustentável.</span>
            </div>

            <Button/>
            
          </Reveal>
        </div>
          

      </div>

      <div className="second-section">
        <div className="slideshow">
          <div className="carousel-bg"/>
          <Carousel emulateTouch swipeable infiniteLoop showThumbs={false} 
            showIndicators={false} showStatus={false} width="1100px" 
            autoPlay interval={3000} className="carousel">
            {
              Object.entries(carouselImages).map(([key, value]) => {
                return (
                  <div key={key}>
                    <img className="carousel-image" src={value}/>
                    <div className="legend">{_.startCase(key)}</div>
                  </div>
                );
              })
            }
          </Carousel>
        </div>

        <div className="after-carousel">
          <Reveal cascade triggerOnce>
            <img src={slogan} alt="Living the Nature" />
            <div className="paragraphs">
              Existem motivos pelos quais nossa vida se torna mais encantadora. 
              Mas isso só é possível quando consideramos e planejamos o nosso futuro. 
              <span> E criar esse cenário perfeito nunca foi tão real.</span>
              <br/><br/>
              <span>Um projeto que vai muito além de um nome. </span>
              É um sentimento que traduz toda essência de sua proposta. 
              Uma verdadeira aliança entre <span>beleza, sofisticação e felicidade.</span>
              
            </div>
            </Reveal>
        </div>

      </div>

      <div className="saah-section">

        <div className="saah-content">
          <div className="saah-headline">
            <img src={cuboIcon} alt="CUBO" />
            <h1>Conheça o sistema <span>CUBO</span></h1>
          </div>
          <div className="saah-stuff">
            <div className="saah-paragraphs">
              <p>
                Você sabe o que acontece quando falta energia elétrica no edifício? <br/><br/>
                <span>O elevador não funciona, o portão da garagem não abre, falta água, o subsolo inunda...</span>
              </p>

              <p className="second-paragraph">
                Muitos problemas, né? Não precisa mais ser assim.
              </p>
            </div>
            
            <img src={aiPic} alt="AI"/>
          </div>
          <div className="saah-cards">
            <Reveal cascade triggerOnce>
              <div className="saah-card">
                <img src={whiteCuboIcon} alt="CUBO" />
                <div>
                  O sistema cubo pode fornecer energia elétrica para as áreas essenciais de um edifício por até um dia.
                  <br/><br/>
                  <span>+ de 100 viagens de elevador.</span>
                </div>
              </div>
              <div className="saah-card" id="middle-card">
                <img src={carroIcon} alt="Carro" />
                <div id="middle-p">
                  Ele também absorve a energia proveniente das frenagens do elevador, como em um carro elétrico.
                  <br/><br/>
                  <span>+ de 50% de economia com energia elétrica.</span>
                </div>
              </div>
              <div className="saah-card">
                <img src={solarPanelIcon} alt="Painel Solar" />
                <div>
                  E, conectado a painéis solares, armazena a energia gerada por eles.
                  <br/><br/>
                  <span>Adeus, conta de energia.</span>
                </div>
              </div>
            </Reveal>
          </div>
          <h1 className="saah-footer">Tudo isso com inteligência artificial.</h1>
        </div>
      </div>

      <div className="plant-section">
        <div className="plant-content">
          <h1>Planta</h1>
          <div className="post-title-plant">
            <div className="plant-cards">
              <div className="plant-card">
                <img src={bedPlantIcon} alt="Cama" />
                <div className="plant-card-text">
                  <div>
                    <span>3</span> dormitórios sendo 1 suíte
                  </div>
                </div>
              </div>
              <div className="plant-card">
                <img src={carPlantIcon} alt="Carro" />
                <div className="plant-card-text">
                  <div>
                    <span>2</span> vagas de garagem
                  </div>
                </div>
              </div>
              <div className="plant-card">
                <img src={sofaPlantIcon} alt="Sofa" />
                <div className="plant-card-text">
                  <div>
                    Amplo Living com <span>3</span> ambientes
                  </div>
                </div>
              </div>
              <div className="plant-card">
                <img src={sunsetPlantIcon} alt="Pôr do sol" />
                <div className="plant-card-text">
                  <div>
                    Sacada ampla com churrasqueira
                  </div>
                </div>
              </div>
            </div>
            <img src={plantImage} alt="Planta" className="plant-image" />
          </div>
        </div>
      </div>

      <div className="third-section">
        <div className="third-bg">
            <img className="third-aruna-bg" src={arunaLogoYellow} alt="Aruna Logo" />
            <img className="left-palm-tree" src={palmTree} alt="palm tree leaf" />
        </div>
        <div className="third-content">
          <div className="title">Elevador Solaris</div>
          <p>
            Criada para elevar o padrão de <span>conforto</span> e <span>confiabilidade</span> do mercado, 
            a linha <span>Solaris</span> utiliza uma automação desenvolvida especialmente para essa aplicação, 
            com tecnologia de ponta em <span>hardware</span> e <span>software</span>. 
            <br/><br/>
            <span>Tudo para cumprir com o objetivo maior, sem falhar no básico: disponibilidade</span>
          </p>

          <div className="cards">
            <div className="col-one">
              <Reveal cascade triggerOnce>
                <Card icon={cardIcons.conectividade} cardTitle="CONECTIVIDADE">
                  Todos os elevadores estão conectados através da internet com o sistema Zeus.
                </Card>
                <Card icon={cardIcons.monitor} cardTitle="MONITORAMENTO EM TEMPO REAL">
                  Todas as falhas e dados de funcionamento são armazenados em um banco de dados remoto.
                </Card>
                <Card id="alarme" icon={cardIcons.alarme} cardTitle="BOTÃO DE ALARME INTELIGENTE">
                  Além de gerar uma chamada local de socorro, o botão de alarme também chama um técnico.
                </Card>
              </Reveal>
            </div>
            <div className="col-two">
              <Reveal cascade triggerOnce delay={1500}>
                <Card icon={cardIcons.estacionamento} cardTitle="ESTACIONAMENTO INTELIGENTE">
                  Agora é o elevador que te espera, através de um sistema de inteligência artificial.
                </Card>
                <Card icon={cardIcons.eficiencia} cardTitle="EFICIÊNCIA ENERGÉTICA">
                  Motor gearless, iluminação LED, fontes de alimentação de alto rendimento, etc.
                </Card>
                <Card id="economia" icon={cardIcons.economia} cardTitle="ECONOMIA EM 2 NÍVEIS">
                  Através do stand-by e e do power-down, o elevador reduz o consumo de energia ainda mais.
                </Card>
              </Reveal>
            </div>
          </div>

        </div>
      </div>

      <MapComponent/>

      <Footer/>

    </div>
  ); 
}

export default App;
