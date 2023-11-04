import {useState} from "react";
import {connect} from "react-redux";
import {add, remove} from "./store/store";
import Todo from "./Todo";

function App({toDos, addTodo}) {
  const [text, setText] = useState();
  const onChage = (e) => {
    setText(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(text);
    setText("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChage}
          type="text"
          name=""
          value={text}
          placeholder="input whatever"
        />
        <button>add</button>
      </form>
      <span>{text}</span>
      <ul>
        {toDos.map((toDo) => (
          <Todo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

function mapStateToProp(state) {
  return {toDos: state};
}
function mapDispatchProps(dispatch) {
  return {
    addTodo: (text) => dispatch(add(text)),
  };
}
export default connect(mapStateToProp, mapDispatchProps)(App);
