import { vscode } from "./vscode";
import { useEffect } from "react";
import InputBox from "./components/InputBox";
import TodoItem from "./components/TodoItem";
import { useTodo } from "./context/TodoContext";
// Ag62EnDXhjLQTnArP9wEvNwQpR4Mx9hqdtt1JDMIf4uRZbeOqkK0JQQJ99BDACAAAAAAAAAAAAAGAZDO311s
// vscode extesnion
// 
function App() {
  const { todos } = useTodo();

  useEffect(() => {
    vscode.postMessage({
      command: "ready",
    });
  }, []);

  return (
    <div className="h-screen  flex flex-col  items-center p-10 gap-5">
      <InputBox />
      <ul className="max-h-96 overflow-y-auto py-2 px-2">
        {todos.map((todoItem) => (
          <TodoItem key={todoItem.id} {...todoItem} />
        ))}
      </ul>
    </div>
  );
}

export default App;