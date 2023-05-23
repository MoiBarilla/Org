import { useState } from "react";
import "./Form.css"
import Input from "../Input/Input";
import List from "../List/List";
import Button from "../Button/Button";

const Form = (props) => {
    const [ name, setName ] = useState("");
    const [ position, setPosition ] = useState("");
    const [ pic, setPic ] = useState("");
    const [ team, setTeam ] = useState("");

    const [ title, setTitle ] = useState("");
    const [ color, setColor ] = useState("");

    const { addMember, addCategory } = props;

    const handleSubmit = (e) => {
        e.preventDefault();
        let submit = {
            name,
            position,
            pic,
            team
        }
        addMember(submit);
    }

    const handleCategory = (e) => {
        e.preventDefault();
        let cat = {
            title,
            primaryColor: color,
        }
        addCategory(cat)
    }

    return <section className="form">
        <form onSubmit={ handleSubmit }>
            <h2>Rellene el formulario para crear el colaborador.</h2>
            <Input 
            title="Nombre" placeholder="Ingresar Nombre" 
            required values={ name } handleValue={ setName }
            />
            <Input 
            title="Puesto" placeholder="Ingresar Puesto" 
            required values={ position } handleValue={ setPosition }
            />
            <Input 
            title="Foto" placeholder="Ingresar Enlace de Foto" 
            required values={ pic } handleValue={ setPic }
            />
            <List values={ team } handleValue={ setTeam } teams={ props.teams } />
            <Button text="Crear"/>


        </form>

        <form onSubmit={ handleCategory }>
            <h2>Rellene el formulario para crear el equipo.</h2>
            <Input 
            title="Titulo" placeholder="Ingresar Titulo" 
            required values={ title } handleValue={ setTitle }
            />
            <Input 
            title="Color" placeholder="Ingresar Color en Hex" 
            required values={ color } handleValue={ setColor }
            type="color"
            />

            <Button text="Registrar Equipo"/>
        </form>
        
    </section>
}

export default Form;