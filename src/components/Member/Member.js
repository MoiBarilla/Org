import "./Member.css";
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Member = (props) => {

    const { name, position, pic, id, fav } = props.data;
    const { primaryColor, deleteMember, like } = props;

    return <div className="member">
        <AiFillCloseCircle className="delete" onClick={ () => deleteMember(id) } />
        <div className="header" style={{ backgroundColor:primaryColor }}>
            <img src={ pic } alt={ name } />
        </div>
        <div className="info">
            <h4>{ name }</h4>
            <h5>{ position }</h5>
            { fav ? <AiFillHeart color="red" onClick={ () => like(id) } /> : <AiOutlineHeart onClick={ () => like(id) } /> }
            
        </div>
    </div>
}

export default Member