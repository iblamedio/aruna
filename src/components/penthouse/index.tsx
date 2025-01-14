import './styles.css';
import './mobile.css';

import { Carousel } from 'react-responsive-carousel';

import banheira from '../../assets/Penthouse/images/Penthouse 01 - Banheira-min.webp';
import gourmet from '../../assets/Penthouse/images/Penthouse 01 - Gourmet-min.webp';
import livingOne from '../../assets/Penthouse/images/Penthouse 01 - Living 01-min.webp';
import livingTwo from '../../assets/Penthouse/images/Penthouse 01 - Living 02-min.webp';
import livingThree from '../../assets/Penthouse/images/Penthouse 01 - Living 03-min.webp';
import suiteOne from '../../assets/Penthouse/images/Penthouse 01 - Suíte 01-min.webp';
import suiteTwo from '../../assets/Penthouse/images/Penthouse 01 - Suíte 02-min.webp';

import areaIcon from '../../assets/Penthouse/icons/ri_custom-size.svg';
import suitesIcon from '../../assets/Penthouse/icons/famicons_bed-outline.svg';
import gourmetIcon from '../../assets/Penthouse/icons/hugeicons_bbq-grill.svg';
import garagemIcon from '../../assets/Penthouse/icons/mdi_car-outline.svg';

export default function Penthouse() {
    return (
        <div className="penthouse-container">
            <div className="penthouse-content">
                <div className="penthouse-title">
                    <h1>PENTHOUSE</h1>
                    <h4>16º PAVIMENTO</h4>
                </div>
                <div className="penthouse-main">
                <Carousel emulateTouch swipeable infiniteLoop showThumbs={false} 
                    showIndicators={true} showStatus={false} width="720px" 
                    autoPlay interval={3000} className="penthouse-carousel"
                >
                    <img src={banheira} alt="Banheira Penthouse" className="penthouse-image" />
                    <img src={gourmet} alt="Área Gourmet Penthouse" className="penthouse-image" />
                    <img src={livingOne} alt="Living Penthouse" className="penthouse-image" />
                    <img src={livingTwo} alt="Living Penthouse" className="penthouse-image" />
                    <img src={livingThree} alt="Living Penthouse" className="penthouse-image" />
                    <img src={suiteOne} alt="Suíte Penthouse" className="penthouse-image" />
                    <img src={suiteTwo} alt="Suíte Penthouse" className="penthouse-image" />
                </Carousel>
                <div className="penthouse-cards">
                    <div className="penthouse-card">
                        <img src={areaIcon} alt="Área" />
                        <span className="penthouse-card-text"><b>200m²</b> de área privativa</span>
                    </div>
                    <div className="penthouse-card">
                        <img src={suitesIcon} alt="Suítes" />
                        <span className="penthouse-card-text"><b>4 suítes</b> (sendo 1 master)</span>
                    </div>
                    <div className="penthouse-card">
                        <img src={gourmetIcon} alt="Área Gourmet" />
                        <span className="penthouse-card-text"><b>Espaço Gourmet</b> exclusivo com churrasqueira a carvão</span>
                    </div>
                    <div className="penthouse-card">
                        <img src={garagemIcon} alt="Garagem" />
                        <span className="penthouse-card-text"><b>3 vagas</b> de garagem</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}