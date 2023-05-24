import "./Footer.css";
import footer from "../../img/footer.png";
import facebook from "../../img/facebook.png";
import twiter from "../../img/twitter.png";
import instagram from "../../img/instagram.png";
import Logo from "../../img/Logo.png";



const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: `url(${footer})` }}>
        <div className='redes'>
            <a href='https://www.aluracursos.com/'>
                <img src={ facebook } alt='Facebook' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={ twiter } alt='twitter' />
            </a>
            <a href='https://www.aluracursos.com/'>
                <img src={ instagram } alt='instagram' />
            </a>
        </div>
        <img src={ Logo } alt='org' />
        <strong>Developed By &copy; Moises Barilla</strong>
    </footer>
}

export default Footer;