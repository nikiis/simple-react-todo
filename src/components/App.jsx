import React, {useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {
    
    const [newItem, setItem] = useState("");
    const [listItems, setList] = useState([]);

    function handleClick(){
        setList(prevItems => {
            return[...prevItems, newItem];
        });
        setItem(" ");
        // console.log(listItems);
    }

    function handleChange(event){
        const {value} = event.target;

        setItem(value);

        // console.log(newItem);
    }

    function deleteItem(id){
        console.log("delete");
        setList(prevItem => {
            return prevItem.filter((item, index) => {
                return index !== id;
            });
        });
    }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={newItem} />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
            {listItems.map((todoItem, index) => <ToDoItem key={index} id={index} todoItem={todoItem} onChecked={deleteItem}/>)}
        </ul>
      </div>
    </div>
  );
}

export default App;