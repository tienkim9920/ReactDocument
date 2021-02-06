import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import MainDotNet from './DotNet/MainDotNet';
import Menu from './Menu/Menu';
import { useSelector } from 'react-redux';
import DotNet from './DotNet/DotNet';
import MenuTemp from './Menu/MenuTemp';
import Javascipt from './Javascipt/Javascipt';

Docs.propTypes = {

};

function Docs(props) {

    const isCheck = useSelector(state => state.Check.isCheck)

    const isActive = useSelector(state => state.Active.isActive)

    console.log(isActive)

    return (
        <div className="main_wrapper">
            <div className="meno_unresponsive">
                {
                    !isActive ? <Menu /> : <Menu />
                }
            </div>
            <div className="menu_responsive">
                <MenuTemp />
            </div>
            <div className={isCheck ? 'row_wrapper row_wrapper_night' : 'row_wrapper day_header'}>
                <div className="grid_left">

                </div>
                <Switch>

                    <Route exact path='/react-document/docs/dotnet' component={MainDotNet} />
                    <Route path='/react-document/docs/dotnet/document' component={DotNet} />

                    <Route path='/react-document/docs/dotnet/javascipt' component={Javascipt} />

                </Switch>
            </div>
        </div>


    );
}

export default Docs;