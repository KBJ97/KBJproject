import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons"
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";

export const IMG_BASE_URL = "http://image.tmdb.org/t/p/w1280/";

export default function Movie(props) {
    const navigate = useNavigate()

    const onClickMovieItem = ()=> {
        navigate(`/movie/${props.title}`,{
            state: props
        })
    }
    return (
        <div className="movie-container" style={{width:200}}>
            <img src={IMG_BASE_URL + props.poster_path} alt="포스터" height={300}  onClick={onClickMovieItem} />
            <div className="movie-info">
                <FontAwesomeIcon icon={faStar} className="★"/>
                {props.vote_average} 
            </div>
            <div className="movie-info2" >
                {props.title}
            </div>
        <Button variant="dark" size="sm" className="버튼"  onClick={onClickMovieItem} >
        Watch▶
        </Button>
        </div>
    )
}