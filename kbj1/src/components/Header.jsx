import React from 'react';
import { Link } from 'react-router-dom';
import movielogo from './img/logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-wrap'>
                <div className='header-left-wrap'>
                    <Link to="/" className='logo'>
                    <img src={movielogo} alt="로고" style={{width:50,height:42}}/>홈페이지
                    </Link>
                    <ul>
                        <li>
                            <Link className='header-nav-item' to='/movie'>
                                목록
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/tv'>
                                네브2
                            </Link>
                        </li>
                        <li>
                            <Link className='header-nav-item' to='/person'>
                                네브3
                            </Link>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default Header;