import 'react-rayr-tooltip/src/RayrTooltip.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrTooltip} from 'react-rayr-tooltip';


function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <span>
                dfdfdsfadfdasfwewefdfsdfasdddddddddddddddddddddddddddddddddddddddweeeeeeee
            </span>
            <div>
                dfdfd
            </div>
            dfdfdfdaeerer43343
            {/* <RayrTooltip position='bottom' className="tooltip">
                <RayrTooltip.Top className="tip-top">鼠标上移出现提示框</RayrTooltip.Top>
                <RayrTooltip.Box className="tip-box">
                    <span>这是提示框的内容</span>
                </RayrTooltip.Box>
            </RayrTooltip> */}
            <RayrTooltip position='top' content={'<div>这是提示框的内容<div>'}>鼠标上移出现提示框</RayrTooltip>
            <span>
                dfdfdsfadfdasfwewefdfsdf
            </span>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
