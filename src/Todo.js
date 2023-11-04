import {connect} from "react-redux";
import {remove} from "./store/store";
import {Link} from "react-router-dom";

function Todo({text, deleteClick, id}) {
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={deleteClick}>delete</button>
    </li>
  );
}
function mapDispatchTodoProps(dispatch, ownProps) {
  return {
    deleteClick: () => dispatch(remove(ownProps.id)),
  };
}
export default connect(null, mapDispatchTodoProps)(Todo);
