import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { changeCheck } from '../Redux/Action/ActionCheck';
import './Header.css'

function Header(props) {

    const isCheck = useSelector(state => state.Check.isCheck)

    const dispatch = useDispatch()

    const handlerChangeClick = () => {

        const action = changeCheck(isCheck)
        dispatch(action)

    }

    // Cái này dùng để lấy url mà mỗi khi đổi component
    // Và nó sẽ chạy lại useEffect
    let location = useLocation();

    useEffect(() => {

        const link_docs = document.getElementById('link_docs')

        const url = location.pathname

        // Nếu có ký tự docs trong chuỗi thì thêm active vào
        if (url.indexOf("docs") > 1){
            link_docs.classList.add("active")
        }else{
            link_docs.classList.remove("active")
        }

    }, [location])

    return (
        <nav className={isCheck ? `navbar navbar-expand-lg navbar-light bg-white fix_header night_header` : `navbar navbar-expand-lg navbar-light bg-white fix_header day_header`}>
            <Link className={isCheck ? 'navbar-brand text_night' : 'navbar-brand text_day'} to="/react-document">TIENKIM STUDY</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className={isCheck ? 'fa fa-bars color_white' : 'fa fa-bars'} style={ {fontSize: '25px'}}></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link id="link_docs" className={isCheck ? 'nav-link text_night' : 'nav-link text_day'}
                            to="/react-document/docs/dotnet">Docs</Link>
                    </li>

                    
                </ul>
                <div className="d-flex">
                    <input type="checkbox" name="checkbox" className="switch" onClick={handlerChangeClick} />
                </div>
            </div>

            
        </nav>
    );
}

export default Header;