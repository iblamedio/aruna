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
import plantImage from './assets/planta-legend.png';
import bedPlantIcon from './assets/Plant Icons/tabler_bed.svg';
import carPlantIcon from './assets/Plant Icons/bx_car.svg';
import sofaPlantIcon from './assets/Plant Icons/mdi_sofa-outline.svg';
import sunsetPlantIcon from './assets/Plant Icons/si_sun-set-line.svg';
import arunaFrenteImage from './assets/aruna-frente.png';
import predioIcon from './assets/predio-icon.svg';
import saahIcons from './assets/Saah Icons';

import { Button } from './components/button';
import { Footer } from './components/footer';
import { MapComponent } from './components/map';
import { Card } from './components/card';
import { SaahCard } from './components/saah-card';

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
                <img src={arunaLogoYellow} className="title-logo" />
                <div className="title">
                  <span className="line-one">ARUNA TOWER</span>
                  <span className="line-two">RESIDENCE</span>
                </div>
              </div>

            </Reveal>
          </div>
    	    <Reveal cascade triggerOnce delay={1000}>

            <div className="sub-headline">
              Quando o <span>sentimento</span> e a <span>consciência</span> tomam a referência de um <span>lar.</span>
              <br/><br/>
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
            <img className="second-section-slogan" src={slogan} alt="Living the Nature" />
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
            <img src={arunaLogoYellow} alt="Aruna" />
            <h1>ARUNA TOWER</h1>
            <span>RESIDENCE</span>
          </div>
          <div className="saah-stuff">
            <div className="saah-paragraphs">
              <p>
                <span id="aruna-name">Aruna</span> — nome inspirado na natureza de
                origem sânscrita, antiga língua indiana e tem
                como o seu significado <span>“castanho
                avermelhado, nascer do dia, o começo,
                esperança”.</span>
              </p>

              <img className="saah-icon" src={predioIcon} alt="O Empreendimento" />
              <p className="second-paragraph">
                O Empreendimento:
              </p>
            </div>
            
            <img className="saah-image" src={arunaFrenteImage} alt="Aruna Tower"/>
          </div>
          <div className="saah-cards">
            <div className="saah-cards-container">
              <Reveal cascade triggerOnce>
                <SaahCard icon={saahIcons.sparkIcon} width={310}>
                  Hall de entrada + áreas comuns <span>finamente decoradas</span>
                </SaahCard>
                <SaahCard icon={saahIcons.diamondIcon} width={300}>
                  <span>Alto padrão</span> de acabamento
                </SaahCard>
                <SaahCard icon={saahIcons.gessoIcon} width={300}>
                  Rebaixamento <span>em gesso</span>
                </SaahCard>
                <SaahCard icon={saahIcons.pisoIcon} width={310}>
                  <span>Piso vinílico</span> nos apartamentos
                </SaahCard>
              </Reveal>
            </div>
            <div className="saah-cards-container">
              <Reveal cascade triggerOnce delay={1000}>
                <SaahCard icon={saahIcons.lockIcon} width={310}>
                  Portas com <span>fechadura eletrônica</span>
                </SaahCard>
                <SaahCard icon={saahIcons.ecarIcon} width={515}>
                  <span>1 Vaga exclusiva</span> para carregamento de <span>carros elétricos</span> por pavimento de garagem
                </SaahCard>
                <SaahCard icon={saahIcons.aguaIcon} width={415}>
                  Captação de <span>água das chuvas</span> e do <span>ar condicionado</span>
                </SaahCard>
              </Reveal>
            </div>
            
          </div>
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