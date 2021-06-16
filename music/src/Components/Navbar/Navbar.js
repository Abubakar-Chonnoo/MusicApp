import React from 'react';
import './Navbar.css';
import { Consumer } from './../../Context';
import logo_music from './music.png';

const Navbar = () => {

    // JSX
    return(
        <Consumer>
            {
                context => {

                    const changePageHandler = (e) => {
                        context.actions.setGenreId(e.target.value);
                        context.actions.setPage(1);
                    }

                    return (
                        <div className="nav_container">
                            <div className="logo">
                                <img className="music_logo" src={logo_music} alt="icon"/>
                                <span>Music</span>
                            </div>

                            <div className="dropdown_box">
                                <select name="genre" id="genre" onChange={changePageHandler} >
                                    <option value="g.115">Pop</option>
                                    <option value="g.146">HipHop</option>
                                    <option value="g.5">Rock</option>
                                </select>
                            </div>
                        </div>
                    );
                }
            }
        </Consumer>
    );

};

export default Navbar;