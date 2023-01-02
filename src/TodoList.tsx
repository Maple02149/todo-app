import React, { useState } from "react";
import TodoItem from "./TodoItem";
// import styles from "./Todo.module.scss";
// Step 5a
type ListProps = {
    name: string;
    items: Array<string>;
};

export function TodoList(props: ListProps) {
    const [itemList, setItemList] = useState<Array<string>>(props.items);
    const [input, setInput] = useState<string>(""); // ("") (props.items) were the init value

    const addItem = () => {
        if (input) {
            // option 1 use ... :
            setItemList([...itemList, input]);
            ////setItemList>>> old item and the input

            // option 2 arr.slice or obj.assign:
            // const newItemList = itemList.slice();
            // const newItem = input;
            // newItemList.push(newItem);
            // setItemList(newItemList);

        }
        // init the input tap after add the item to list
        setInput('')
    };

    const setText = (value: string) => {
        setInput(value);
    };

    const removeItem = (itemToRemove: string) => {
        setItemList(itemList.filter((item) => item !== itemToRemove));
    };

    // const addRmStrike = (itemStrike: string) => {

    //     const find = (itemList.find((item) => item = itemStrike));
    //     console.log(find)
    //     console.log(itemList)

    // };

    // const eT = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     // if (e.target.style.textDecoration) {
    //     //     e.target.style.removeProperty('text-decoration');
    //     // } else {
    //     //     e.target.style.setProperty('text-decoration', 'line-through');
    //     // }
    //     const div = event.currentTarget
    //     console.log(div)
    //     return div
    // };

    return (
        <div>
            <h2>Todo List</h2>
            <p>by {props.name}</p>
            <input
                onChange={(e) => setText(e.target.value)}
                value={input}
                placeholder="Your TodoList"
            />
            <button onClick={() => { addItem() }}>Add</button>
            <ul style={{ listStyleType: "none" }}>
                {itemList.map((item, idx) => (
                    //// ---- use sql id is better but not sql here ---- ////
                    <li>
                        <TodoItem
                            key={idx}
                            item={item}
                            onRemove={() => removeItem(item)}
                        // onStrike={() => addRmStrike(item)}
                        // onStrike={() => eT()}
                        />
                    </li>
                ))}

            </ul>
        </div >
    );
}