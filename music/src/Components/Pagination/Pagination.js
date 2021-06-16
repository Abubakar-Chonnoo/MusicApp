import React from "react";
import { Consumer } from './../../Context';
import './Pagination.css';

const Pagination = () =>{

    return(
        <Consumer>
            {
                context => {
                    //Events
                    const PaginationHandler = (e) => {
                        context.actions.setPage(parseInt(e.target.text));
                    }

                    const SkipHandler = (e) => {
                        let arrow = e.target.className;
                        if(arrow === "backward")
                        {
                            if(context.page === 1)
                                return;

                            context.actions.setPage(context.page - 1);
                        }
                        if(arrow === "forward")
                        {   
                            if(context.page === 5)
                                return;

                            context.actions.setPage(context.page + 1);
                        }
                    }

                    const activePageStyle = (PageIndex) => PageIndex+1 === context.page ? 'active' : null;

                    const DisplayPages = () => {
                        
                        let pagesArray = [];

                        for(let pageNo = 0; pageNo<5; pageNo++){
                            pagesArray.push(
                            <a key={pageNo} href="#" className={`${activePageStyle(pageNo)}`} onClick={PaginationHandler}>{pageNo + 1}</a>
                            );
                        }

                        return pagesArray;
                    }

                    return (
                        <div className="pagination">
                            <a className="backward" href="#" onClick={SkipHandler}>&laquo;</a>
                            {
                                DisplayPages()
                            }
                            <a className="forward" href="#" onClick={SkipHandler}>&raquo;</a>
                        </div>
                    );
                }
            }
        </Consumer>
    );

}

export default Pagination;