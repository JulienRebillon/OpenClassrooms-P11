
import '../styles/banner.scss';
import bannerImage1 from '../images/Background_1_banner.png';


const Banner1 = () => {
    return (
        <div className="banner1">
            <img src={bannerImage1} alt="Banner1" className="Banner1Img"/>
            <div className="banner1_text">
                <span>Chez vous, </span><span>partout et ailleurs</span>
            </div>
        </div>
    );
}


export default Banner1;