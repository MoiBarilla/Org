import { useState } from "react";
import "./MyOrg.css";

function MyOrg(props) {
    return <section className="MyOrg">
        <h3 className="title">Mi Organización</h3>
        <img onClick={ props.showAndHideForm } className="MyOrg" src="/img/add.png" alt="Add"/>
    </section>
    
}

export default MyOrg;