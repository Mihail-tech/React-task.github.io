import React, { useState } from 'react';
import classes from "../../../Recomendation/Users.module.css"







let Paginator = ({totalItemCount, pageSize, currentPage, onPageChanged, porti = 10}) => {

    let pagesCount = Math.ceil(totalItemCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
        
    }
    let portiCount = Math.ceil(pagesCount / porti);

    const [portiNumber, setportiNumber] = useState(1);

    let leftPortiPage = (portiNumber - 1) * porti + 1;
    let rightPortiPage = portiNumber + porti;


    return (
            <div className={classes.paginator}>


                { portiNumber > 1 &&
                <button onClick={() => setportiNumber(portiNumber - 1)} > back </button> }

                    { pages
                            .filter(p => p >= leftPortiPage && p <= rightPortiPage)
                            .map((p) => { 
                                return (
                                        <div className={ (currentPage === p && classes.selectedPage), classes.pageNumber }
                                        key={p}
                                        onClick={(e) => {onPageChanged(p)}} >
                                            {p}
                                        </div>
                            ) }) }
                

                {portiCount > portiNumber && 
                <button onCanPlay={()=> {setportiNumber(portiNumber + 1) }} > next </button> }
                
              

            </div>
    )
}



export default Paginator;