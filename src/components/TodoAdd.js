export const TodoAdd = ({buttonText,inputEl,handleAddtodoListItem}) => {
  return (
    <>
    <textarea ref={inputEl} />
    <button onClick={handleAddTodoListItem}>{buttonText}</button>
    </>
  );
};