// props: width (in units), height (in units) e.g width=4 height=8 returns 4x8 grid
// if height or width is undefined, no limit
import React, {useState, useEffect} from 'react';

export function PuzzleGridContainer({children, ...props}){
    return (
        <div className="puzzle-grid container-fluid">
            {children}
        </div>
    );
}