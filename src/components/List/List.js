import "./List.css";

const List = (props) => {

    const handleChange = (e) => {
        props.handleValue(e.target.value);
    }

    return <div className="list">
        <label>Equipos</label>
        <select value={props.values} onChange={handleChange}>
        <option value="" disabled defaultValue="" hidden>Seleccionar Equipo</option>
            {props.teams.map((team, index) =>  { return <option key={ index } value={ team }>{ team }</option>})};
        </select>
    </div>
}

export default List;