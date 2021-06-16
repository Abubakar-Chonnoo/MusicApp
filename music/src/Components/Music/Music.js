import React from "react";
import './Music.css';
import { Consumer } from './../../Context';
import Audio from './Audio';

const Music = () => {

    return (
        <Consumer>
            {
                context => 
                    <div className="music_container">         
                    {
                        context.music.map(value => {
                        return (
                                <div className="single_track" key={value.id}>
                                    <Audio value ={value}/>
                                    <span className="overlay">{value.name}</span>
                                </div>
                            );
                        })
                    }
                </div>
            }
        </Consumer>
    );
    
}

export default Music;