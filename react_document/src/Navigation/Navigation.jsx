import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Navigation.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeActive } from '../Redux/Action/ActionActive';

Navigation.propTypes = {
    
};

function Navigation(props) {

    const isActive = useSelector(state => state.Active.isActive)

    const dispatch = useDispatch()

    const handlerActive = () => {
        
        const action = changeActive(isActive)
        dispatch(action)

    }

    return (
        <div className="navigation_menu" onClick={handlerActive}>
            { isActive ? 
                <i className="fa fa-bars" style={ {fontSize: '25px', color: '#323232'}}></i> : 
                <i className="fa fa-close" style={ {fontSize: '25px', color: '#323232'}}></i>
            }
        </div>
    );
}

export default Navigation;