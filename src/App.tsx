import './App.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

import { Reveal } from 'react-awesome-reveal';
import { Carousel } from 'react-responsive-carousel';
import { Toaster } from 'react-hot-toast';
import { SpeedInsights } from "@vercel/speed-insights/react"

import arunaLogoYellow from './assets/Aruna-logo-yellow.png';
import carouselImages from './assets/Fotos Aruna';
import slogan from './assets/slogan.svg';
import cardIcons from './assets/Card Icons';
import plantImage from './assets/planta-legend.png';
import bedPlantIcon from './assets/Plant Icons/tabler_bed.svg';
import carPlantIcon from './assets/Plant Icons/bx_car.svg';
import sofaPlantIcon from './assets/Plant Icons/mdi_sofa-outline.svg';
import sunsetPlantIcon from './assets/Plant Icons/si_sun-set-line.svg';
import arunaFrenteImage from './assets/aruna-frente.png';
import predioIcon from './assets/predio-icon.svg';
import saahIcons from './assets/Saah Icons';
import areaDeLazerTitle from './assets/areadelazer-title.svg';
import areaDeLazerPics from './assets/Fotos Area de Lazer';
import arunaFoto from './assets/aruna-foto.png';

import { Button } from './components/button';
import { Footer } from './components/footer';
import { MapComponent } from './components/map';
import { Card } from './components/card';
import { SaahCard } from './components/saah-card';
import { Form } from './components/form';
import { Table } from './components/table';

import './mobile.css';
import { useEffect, useState } from 'react';

function App() {

  const [winWidth, setWinWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWindowResize = () => setWinWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
 
     
    return () => window.removeEventListener("resize", handleWindowResize);
   },[]);


  const _ = require('lodash');

  return (
    <div className="App">
      
      <Toaster/>

      <div className="first-section">
        <div className="first-section-content">
          
          <div className="first-left">
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

            {winWidth <= 1280 ? ( 
              <div className="hero">
                <div className="hero-rec-one-mob"/>
                <div className="hero-rec-two-mob"/>
                <img src={arunaFrenteImage} alt="Aruna Tower" />
              </div> ) : (<div/>)
            }
            <Reveal cascade triggerOnce delay={1000}>

              <div className="sub-headline">
                Quando o <span>sentimento</span> e a <span>consciência</span> tomam a referência de um <span>lar.</span>
                <br/><br/>
              </div>

              <Button/>
              
            </Reveal>
          </div>
          {winWidth > 1280 ? ( 
            <div className="hero">
            <div className="hero-rec-one"/>
            <div className="hero-rec-two"/>
            <img src={arunaFrenteImage} alt="Aruna Tower" />
          </div> ) : (<div/>)
          }
          

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

              {winWidth <= 1280 ? (<img className="saah-image" src={arunaFoto} alt="Aruna Tower"/>) : (<div/>)}

              <img className="saah-icon" src={predioIcon} alt="O Empreendimento" />
              <p className="second-paragraph">
                O Empreendimento:
              </p>
            </div>
            
            {winWidth > 1280 ? (<img className="saah-image" src={arunaFoto} alt="Aruna Tower"/>) : (<div/>)}
          </div>
          <div className="saah-cards">
            <div className="saah-cards-container">
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
            </div>
            <div className="saah-cards-container">
                <SaahCard icon={saahIcons.lockIcon} width={310}>
                  Portas com <span>fechadura eletrônica</span>
                </SaahCard>
                <SaahCard icon={saahIcons.ecarIcon} width={515}>
                  <span>1 Vaga exclusiva</span> para carregamento de <span>carros elétricos</span> por pavimento de garagem
                </SaahCard>
                <SaahCard icon={saahIcons.aguaIcon} width={415}>
                  Captação de <span>água das chuvas</span> e do <span>ar condicionado</span>
                </SaahCard>
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
                      Opções com <span>2, 3</span> suítes ou<span>1</span> suíte + <span>2</span> demi-suítes
                    </div>
                  </div>
                </div>
                <div className="plant-card">
                  <img src={carPlantIcon} alt="Carro" />
                  <div className="plant-card-text">
                    <div>
                      Até <span>2</span> vagas de garagem por apartamento
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
        </div>
        <div className="third-content">
          <img src={areaDeLazerTitle} alt="Área de Lazer" className="title"/>
          <div className="fotos">
            <Reveal cascade triggerOnce>
              <div className="foto-container">
                    <img src={areaDeLazerPics.brinquedoteca} alt="Brinquetoca" className="areadelazer-foto" />
                    <span className="areadelazer-foto-legenda">BRINQUEDOTECA</span>
              </div>
              <div className="foto-container">
                    <img src={areaDeLazerPics.playground} alt="Playground" className="areadelazer-foto" />
                    <span className="areadelazer-foto-legenda">PLAYGROUND</span>
              </div>
              <div className="foto-container">
                    <img src={areaDeLazerPics.espaçoPet} alt="Espaço Pet" className="areadelazer-foto" />
                    <span className="areadelazer-foto-legenda">ESPAÇO PET</span>
              </div>
            </Reveal>
          </div>

          <div className="cards">
            <div className="cards-line">
                <Card icon={cardIcons.academia}>ACADEMIA</Card>
                <Card icon={cardIcons.brinquedoteca}>BRINQUEDOTECA</Card>
                <Card icon={cardIcons.salaoDeFesta}>SALÃO DE FESTA</Card>
                <Card icon={cardIcons.prainha}>PRAINHA</Card>
                <Card icon={cardIcons.espacoGourmet}>ESPAÇO GOURMET</Card>
                <Card icon={cardIcons.piscina}>PISCINA ADULTO E INFANTIL</Card>
            </div>
            <div className="cards-line">
                <Card icon={cardIcons.sauna}>SAUNA A VAPOR</Card>
                <Card icon={cardIcons.espacoPet}>ESPAÇO PET</Card>
                <Card icon={cardIcons.pracaDeFogo}>PRAÇA DE FOGO</Card>
                <Card icon={cardIcons.playground}>PLAYGROUND</Card>
                <Card icon={cardIcons.spa}>DUAS ÁREAS <br/> DE SPA</Card>
                <Card icon={cardIcons.salaDeJogos}>SALA DE JOGOS <br/>COM PUB</Card>
            </div>
          </div>

        </div>
      </div>

      <MapComponent/>

      <Table/>

      <Form/>

      <Footer/>

    </div>
  ); 
}

export default App;
