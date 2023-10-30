// props: width (in units), height (in units) e.g width=4 height=8 returns 4x8 grid
// if height or width is undefined, no limit


export interface PuzzleGridContainerProps {
    children: React.ReactNode,
    id: string,
    className: string
}

export function PuzzleGridContainer({children, ...props} : PuzzleGridContainerProps){
    return (
        <div id={props.id} className={`puzzle-grid container-fluid ${props.className}`}>
            {children}
        </div>
    );
}