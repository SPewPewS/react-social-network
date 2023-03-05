import React, {useState} from "react";
import s from "./Paginator.module.css";
import cn from "classnames";


type Props = {
    totalUsersCount: number,
    pageSize: number,
    currentPage: number,
    onPageChanged: (pageNumber: number) => void,
    portionSize?: number
}

let Paginator: React.FC<Props> = (props, {portionSize = 10}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber  * portionSize;


    return <div className={s.paginator}>
        {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1)}} >Prev</button> }
            {pages
                .filter(p => p >= leftPortionPageNumber && p <=rightPortionPageNumber)
                .map(p => {
                return <span className={ cn({
                    [s.selectedPage] : props.currentPage === p}, s.pageNumber
                )}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        {portionCount > portionNumber &&
            <button onClick={() => (setPortionNumber(portionNumber +1))}>Next</button>
        }
vb
    </div>
}

export default Paginator;