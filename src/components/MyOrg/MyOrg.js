import "./MyOrg.css";
import add from "../../img/add.png";

function MyOrg(props) {
    return <section className="MyOrg">
        <h3 className="title">Mi Organización</h3>
        <img onClick={ props.showAndHideForm } className="MyOrg" src={ add } alt="Add"/>
    </section>
    
}

export default MyOrg;