import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todos";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";

const user: User = {
  name: "test",
  hobbies: ["映画", "ゲーム"]
};

export default function App() {
  const [todos, setTodos] = useState([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="30px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
