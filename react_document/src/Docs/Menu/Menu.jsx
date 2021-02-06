import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Menu.css'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';

Menu.propTypes = {

};

function Menu(props) {

    
    const isActive = useSelector(state => state.Active.isActive)
    
    const isCheck = useSelector(state => state.Check.isCheck)


    //------Hàm này dùng để mở cái icon trong menu------//
    const [icon_dotnet, set_icon_dotnet] = useState(true)
    const [icon_javascipt, set_icon_javascipt] = useState(false)

    const handlerDotnetIcon = () => {
        set_icon_dotnet(!icon_dotnet)
    }

    const handlerJavasciptIcon = () => {
        set_icon_javascipt(!icon_javascipt)
    }
    //------------//


    // Hàm này dùng để đổi màu menu day/night
    const [menu_bg, setMenu_bg] = useState('')
    useEffect(() => {

        if (isCheck){
            setMenu_bg('menu_night')
        }else{
            setMenu_bg('menu_day')
        }

    }, [isCheck])


    // Hàm này dùng để mở cái list submenu
    const [Active, SetActive] = useState({
        category: 'dotnet',
        key: 'install'
    })

    const handlerDotNet = (category, key) => {

        SetActive({
            category: category,
            key: key
        })

    }

    // Cái này dùng để lấy url mà mỗi khi đổi component
    // Và nó sẽ chạy lại useEffect
    let location = useLocation();

    useEffect(() => {

        const url = location.pathname

        if (url.indexOf('dotnet/document') > 1){
            SetActive({
                category: 'dotnet',
                key: 'docs'
            })
        }

        if (url.indexOf('dotnet/javascipt') > 1){
            SetActive({
                category: 'javascipt',
                key: 'docs_javascipt'
            })
        }

    }, [location])

    return (
        <div id="menu" className={!isActive ? `menu animate__animated animate__fadeInLeft ${menu_bg}` : `menu animate__animated animate__fadeOutLeft ${menu_bg}`}>
            <li onClick={handlerDotnetIcon} className="li_menu" data-toggle="collapse" href="#menu_dotnet" role="button" aria-expanded="true" aria-controls="menu_dotnet">
                <div className="d-flex justify-content-between pr-2">
                    <a className={Active.category === 'dotnet' ? 'a_menu a_active' : 'a_menu'}
                         >
                        Khóa học C# cơ bản
                    </a>
                    <div className={icon_dotnet ? 'menu_list menu_list_active' : 'menu_list'}></div>
                </div>
            </li>
            <ul className="collapse menu_dotnet show" id="menu_dotnet">
                <Link
                    className={Active.key === 'install_dotnet' ? 'a_detail a_detail_active' : 'a_detail'}
                    to='/react-document/docs/dotnet'>
                    <li onClick={() => handlerDotNet('dotnet', 'install')} 
                    className={Active.key === 'install' ? 'li_detail li_active' : 'li_detail'}>        
                        Cài đặt môi trường
                    </li>
                </Link>
                <Link 
                    className={Active.key === 'docs_dotnet' ? 'a_detail a_detail_active' : 'a_detail'}
                    to='/react-document/docs/dotnet/document'>
                        <li onClick={() => handlerDotNet('dotnet', 'docs')} 
                            className={Active.key === 'docs' ? 'li_detail li_active' : 'li_detail'}>
                                Tài liệu tham khảo
                        </li>                 
                </Link>
                
            </ul>
            <li onClick={handlerJavasciptIcon} className="li_menu" data-toggle="collapse" href="#menu_react" role="button" aria-expanded="true" aria-controls="menu_react">
                <div className="d-flex justify-content-between pr-2">
                    <a className={Active.category === 'javascipt'  ? 'a_menu a_active' : 'a_menu'}>
                        Khóa học Javascipt cơ bản
                    </a>
                    <div className={icon_javascipt ? 'menu_list menu_list_active' : 'menu_list'}></div>
                </div>
            </li>
            <ul className="collapse menu_react" id="menu_react">
                <Link 
                    className={Active.key === 'docs_javascipt' ? 'a_detail a_detail_active' : 'a_detail'}
                    to='/react-document/docs/dotnet/javascipt'>
                    <li onClick={() => handlerDotNet('javascipt', 'docs_javascipt')} 
                        className={Active.key === 'docs_javascipt' ? 'li_detail li_active' : 'li_detail'}>Tài liệu tham khảo</li>               
                </Link>
            </ul>
        </div>
    );
}

export default Menu;