import {connect} from "react-redux";
import {useParams} from "react-router-dom";

function Detail({toDos}) {
  const {id} = useParams();
  const toDo = toDos.find((todo) => todo.id === parseInt(id));
  console.log(toDo);
  return (
    <div>
      <h1>Detail</h1>
      <h2>{toDo?.text}</h2>
      <span>{toDo?.id}</span>
    </div>
  );
}
function mapStateToProps(state, ownProps) {
  return {toDos: state};
}
export default connect(mapStateToProps)(Detail);
