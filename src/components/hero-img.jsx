
const HeroImg = ({img,caption}) => {
    return ( 
        <figure>
            <figure className="hero-img__container">
                <img src={img} alt="" />
                <figcaption>
                    {caption}
                </figcaption>
            </figure>
        </figure>
     );
}
 
export default HeroImg;