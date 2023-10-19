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
    
        e.target.insertAdjacentElement(beforeOrAfter,dragItem);
    }

    function handleTouchStart(e){
        e.preventDefault();
        e.target.classList.add('dragging-mobile');
    }

    function handleTouchMove (e){
        const dragItem = document.querySelector('.dragging-mobile');
        const container = document.querySelector('.puzzle-grid');
        const touch= e.touches[0] || e.changedTouches[0];

        

        const elementsAtTouchLoc = document.elementsFromPoint(touch.clientX, touch.clientY);
        const target = elementsAtTouchLoc[0];
        console.log(target.classList);
        if(target){
            if (target == dragItem) return;
            if (!target.classList.contains('block')) return;
            const beforeOrAfter = getDropBeforeOrAfter(touch.clientX,target);
            target.insertAdjacentElement(beforeOrAfter,dragItem);
        }
        
    }

    function handleTouchEnd (e){
        e.target.classList.remove('dragging-mobile');
    }


    function handleTouchCancel (e){
        e.target.classList.remove('dragging-mobile');

        const container = document.querySelector('.puzzle-grid');
        const dragOverlay = document.querySelector('.dragging-mobile-overlay');
        container.removeChild(dragOverlay);
    }

    function getDropBeforeOrAfter(x,target){
        const box = target.getBoundingClientRect();
        const boxCenterX = box.x + box.width/2;
        let result = "afterend";

        if (x < boxCenterX) result="beforebegin";
        
        console.log(result +" " + target.id);
        return result;
    }
    



    return (
        <div 
            id={props.id} 
            className={"block block-"+ props.widthSpan+"-"+props.heightSpan+ ((props.className)?" "+props.className:"")} 
            draggable={props.draggable} 
            onDragStart={handleDragStart} 
            onDragEnd={handleDragEnd} 
            onDragOver={handleOnDragOver}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onTouchMove={handleTouchMove}
            onTouchCancel={handleTouchCancel}
            >
            
            {children}
        </div>
    );

}