import "./Team.css"
import Member from "../Member/Member.js";
import hexToRgba from "hex-to-rgba";

const Team = (props) => {

    const { primaryColor, secondaryColor, title, id } = props.data;
    const background = { backgroundColor: hexToRgba(primaryColor, 0.6)  }; // was secondaryColor
    const { members, deleteMember, updateTeamColor, like } = props;

    return <> { members.length > 0 && <section className="team" style={ background }>
        <input
        className="input-color"
        onChange={ (e) => {
            updateTeamColor(e.target.value, id);
        } }
        type="color"
        value={ primaryColor } // was secondaryColor
        />
        <h3 style={{ borderColor: primaryColor }} >{ title }</h3>
        <div className="members">

            { members.map( (member, index) => <Member 
                data={ member } 
                key={ index } 
                primaryColor={ primaryColor }
                deleteMember={ deleteMember }
                like= { like }
            />) }

        </div>
    </section> } 
    </>
}

export default Team;