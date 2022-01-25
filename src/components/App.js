import React,{useRef} from "react";
import {useTodo} from "../hooks/useTodo";
import {TodoTitle} from "./TodoTitle";
import {TodoAdd} from "./TodoAdd";
import {TodoList} from "./TodoList";

function App(){
  const {
    todoList,
    addTodoListItem,
    toggleTodoListItemStatus,
    deleteTodoListItem} = useTodo();
  const inputEl = useRef(null);
  const handleAddTodoListItem = () => {
    if(inputEl.current.value === "") return;
    addTodoListItem(inputEl.current.value);
    inputEl.current.value = "";
  };
  console.log("TODOリスト:",todoList);
  const inCompletedList = todoList.filter((todo)=>{
    return !todo.done;
  });
  console.log("未完了リスト:" ,inCompletedList);
  const completedList = todoList.filter((todo) =>{
    return todo.done;
  });
  console.log("完了リスト:",completedList);
  return (
    <>
      <TodoTitle title="TODO進捗状況" as="h1" />
      <TodoAdd inputEl={inputEl} handleAddTodoListItem={handleAddTodoListItem} />
      <TodoTitle title="未完了リスト" as="h2" />
      <TodoList todoList={inCompletedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
      <TodoTitle title="完了リスト" as="h2" />
      <TodoList todoList={completedList} toggleTodoListItemStatus={toggleTodoListItemStatus} deleteTodoListItem={deleteTodoListItem} />
    </>
  );
}
export default App;