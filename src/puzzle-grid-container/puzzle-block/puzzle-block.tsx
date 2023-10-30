import React, {useState} from 'react';


export interface PuzzleBlockProps {
    children: React.ReactNode,
    id: string,
    index:number,
    draggable: boolean,
    className: string,
    widthSpan: string,
    heightSpan: string
}


export function PuzzleBlock({children, ...props} : PuzzleBlockProps){
    function handleDragStart(e : React.MouseEvent<HTMLElement,DragEvent>){
        (e.target as HTMLElement).classList.add('dragging');
    }

    function handleDragEnd (e: React.MouseEvent<HTMLElement,DragEvent>) {
        (e.target as HTMLElement).classList.remove('dragging');
    }

    function handleOnDragOver (e: React.MouseEvent<HTMLElement,DragEvent>){
        e.preventDefault();
        const dragItem = document.querySelector('.dragging');
        const beforeOrAfter = getDropBeforeOrAfter(e.clientX,e.target as Element);
        (e.target as HTMLElement).insertAdjacentElement(beforeOrAfter as InsertPosition,dragItem as Element);
    }

    function handleTouchStart(e : React.TouchEvent<HTMLElement>){
        e.preventDefault();
        (e.target as HTMLElement).classList.add('dragging-mobile');
    }

    function handleTouchMove (e: React.TouchEvent<HTMLElement>){
        const dragItem = document.querySelector('.dragging-mobile');
        const touch= e.touches[0] || e.changedTouches[0];

        const elementsAtTouchLoc = document.elementsFromPoint(touch.clientX, touch.clientY);
        const target = elementsAtTouchLoc[0];
        console.log(target.classList);
        if(target){
            if (target == dragItem) return;
            if (!target.classList.contains('block')) return;
            const beforeOrAfter = getDropBeforeOrAfter(touch.clientX,target);
            target.insertAdjacentElement(beforeOrAfter as InsertPosition,dragItem as Element);
        }
        
    }

    function handleTouchEnd (e : React.TouchEvent<HTMLElement>){
        e.preventDefault();
        (e.target as HTMLElement).classList.remove('dragging-mobile');
    }


    function handleTouchCancel (e: React.TouchEvent<HTMLElement>){
        e.preventDefault();
        (e.target as HTMLElement).classList.remove('dragging-mobile');

        const container = document.querySelector('.puzzle-grid');
        const dragOverlay = document.querySelector('.dragging-mobile-overlay');
        container?.removeChild(dragOverlay!);
    }

    function getDropBeforeOrAfter(x:number,target:Element){
        const box = target.getBoundingClientRect();
        const boxCenterX = box.x + box.width/2;
        let result = "afterend";

        if (x < boxCenterX) result="beforebegin";
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