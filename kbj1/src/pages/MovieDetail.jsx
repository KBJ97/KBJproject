import React from "react";
import {useLocation, useParams} from "react-router-dom";
import { IMG_BASE_URL } from "../components/Movie";

export default function MovieDetail () {
    const {title} = useParams();
    const {state} = useLocation();
    console.log(title);
    console.log(state);

    return (  
        <div className="page-contanier">
            <div style={{disply: 'flex'}}>
                <img src={IMG_BASE_URL + state.poster_path} alt='영화 포스터'/>
                <div>
                    <div style={{fontSize:"32px"}}>{title}</div>
                </div>
            </div>
        </div>
    );
}
