import React, { useState } from "react";

import DeleteConfirmationModal from "./DeleteConfirmationModal";
import { BsFillTrashFill, BsCheck2Circle } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

type ItemProps = {
    item: string;
    onRemove: () => void;
    // onStrike: () => void;
};



export default function TodoItem(props: ItemProps) {
    const [count, setCount] = useState<number>(0);//  init state  = 0 

    const [shouldShowModal, setShouldShowModal] = useState(false);

    //// function start ////
    const onComplete = () => {
        setCount(count + 1);
        // Complete oen time +=1
    };

    const showModal = () => {
        setShouldShowModal(true);
    };

    const hideModal = () => {
        setShouldShowModal(false);
    };

    // const eT = (event: React.MouseEvent<HTMLButtonElement>) => {
    //     // if (event.target.style.textDecoration) {
    //     //     event.target.style.removeProperty('text-decoration');
    //     // } else {
    //     //     event.target.style.setProperty('text-decoration', 'line-through');
    //     // }
    //     // const div = event.target
    //     // const div = document.forms
    //     console.log(div)
    //     // const form = document.forms['form']; // 取得 name 屬性為 form 的表單
    //     // const name = document.querySelector("#item-name")
    //     // console.log(name)
    // };

    // const doThis = () => {
    // const doThis = (event: React.MouseEvent<HTMLLabelElement>) => {
    //     // if (event.target.style.textDecoration) {
    //     //     event.target.style.removeProperty('text-decoration');
    //     // } else {
    //     //     event.target.style.setProperty('text-decoration', 'line-through');
    //     // }
    //     // const div = event.target

    //     console.log(event)
    //     console.log("div")
    //     }


    return (
        // <li>
        <>
            {/* style={{width: this.state.showRegistration ? '50%' : '100%'}} */}
            <div className="item"
            // style={{ textDecorationLine: "line-through" }}

            >
                {/*(item name) (time) (btn) (btn) (btn) */}
                {/*props item name*/}

                <label id="item-name"
                >
                    <span
                     style={{ textDecoration: "none" }}
                     onClick={(event) => {
                         let doc = event.target as HTMLElement
                         let sly = doc.style.textDecoration
                         console.log((sly))
                         sly === "none"  ? doc.style.textDecoration = "line-through" : doc.style.textDecoration = "none"
                     }}
                    >{props.item} ({count})</span>
                    {/*count time*/}

                </label>
            </div>
            {/*a button with function onComplete*/}
            <Button variant="light" onClick={onComplete}><BsCheck2Circle /> Complete</Button>
            {/*a button with function showModal*/}
            <Button onClick={showModal} >Safe Remove</Button>
            {/*a button with function onRemove*/}
            <Button onClick={props.onRemove}> <BsFillTrashFill /> Remove </Button>


            <DeleteConfirmationModal
                isShow={shouldShowModal}
                text={props.item}
                onDelete={props.onRemove}
                onHide={hideModal}
            />
        </>
        // </li>
    );
}