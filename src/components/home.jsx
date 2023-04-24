import mobileLegendImg from './../../public/mobile-legend.jpg'
import pubgImg from './../../public/pubg.jpg'
import lolImg from './../../public/league-of-legends.jpg'
import HeroImg from './hero-img';

const Home = () => {
    return ( 
        <section className="home">
            <HeroImg img={mobileLegendImg} caption={`Mobile Legend Thailand`}/>
            <HeroImg img={pubgImg} caption={`PUBG Thailand`}/>
            <HeroImg img={mobileLegendImg} caption={`Mobile Legend Myanmar`}/>
            <HeroImg img={pubgImg} caption={`PUBG Myanmar`}/>
            <HeroImg img={lolImg} caption={`League Of Legend Thailand`}/>
            <HeroImg img={mobileLegendImg} caption={`Mobile Legend Others`}/>
            <HeroImg img={lolImg} caption={`League Of Legend Myanmar`}/>
            <HeroImg img={pubgImg} caption={`PUBG others`}/>
            <figure className="hero-img__container last-hero-img">
                <img src={lolImg} alt="" />
                <figcaption>
                    League Of Legend Others
                </figcaption>
            </figure>
            
        </section>
    );
}
 
export default Home;