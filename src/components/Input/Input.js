import { useState } from "react";
import "./Input.css";

function Input(props) {

    // Destructuring
    const { type="text" } = props;

    const handleChange = (e) => {
        props.handleValue(e.target.value);
    }
    return <div className={ `input type-${type}` }>
        <label>{ props.title }</label>
        <input 
        onChange={ handleChange }
        placeholder={ props.placeholder } 
        required={ props.required } 
        type={ type }
        values={ props.values } 
        />
    </div>
}

export default Input;