import React, {useState} from 'react';

export function PuzzleBlock({children, ...props}){
    function handleDragStart(e){
        e.target.classList.add('dragging');
    }

    function handleDragEnd (e) {
        e.target.classList.remove('dragging');
    }

    function handleOnDragOver (e){
        e.preventDefault();

        const dragItem = document.querySelector('.dragging');
        const beforeOrAfter = getDropBeforeOrAfter(e.clientX,e.target);
        console.log("Will drop " +beforeOrAfter+ e.target.id);

        e.target.insertAdjacentElement(beforeOrAfter,dragItem);
    }

    function getDropBeforeOrAfter(x,target){
        const box = target.getBoundingClientRect();
        const boxCenterX = box.x + box.width/2;

        if (x < boxCenterX) return "beforebegin";
        else return "afterend";
    }
    
    return (
        <div 
            id={props.id} 
            className={"block block-"+ props.widthSpan+"-"+props.heightSpan+ ((props.className)?" "+props.className:"")} 
            draggable={props.draggable} 
            onDragStart={handleDragStart} 
            onDragEnd={handleDragEnd} 
            onDragOver={handleOnDragOver}>

            {children}
        </div>
    );

}