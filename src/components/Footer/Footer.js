import "./Footer.css";
import footer from "../../img/footer.png";
import facebook from "../../img/facebook.png";
import linkedin from "../../img/linkedin.png";
import github from "../../img/github.png";
import Logo from "../../img/Logo.png";



const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: `url(${footer})` }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/moises-barilla/'>
                <img className="redes-item" src={ linkedin } alt='linkedin' />
            </a>
            <a href='https://github.com/MoiBarilla'>
                <img className="redes-item" src={ github } alt='github' />
            </a>
            <a href="www.facebook.com">
                <img className="redes-item-facebook" src={ facebook } alt='facebook' />
            </a>
        </div>
        <img src={ Logo } alt='org' />
        <strong>Developed By &copy; Moises Barilla</strong>
    </footer>
}

export default Footer;