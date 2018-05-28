import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrTooltip extends React.Component {

    static propTypes = {
        position: PropTypes.oneOf(['top', 'left', 'right','buttom'])
    };

    static defaultProps = {
        position:'right'
    };

    constructor(props) {
        super(props);
        this.state = {
            isShow: false,
            position: this.props.position || 'right',
            content: this.props.content
        }
        this.show = this.show.bind(this);
        this.showOff = this.showOff.bind(this);
    }

    setPosition() {
        let topElePos = document.querySelector('.top').getBoundingClientRect();
        let boxElePos = document.querySelector('.box').getBoundingClientRect();

        let boxEle = document.querySelector('.box');

        let topEle_width = topElePos.right - topElePos.left;
        let topEle_height = topElePos.bottom - topElePos.top;

        let boxEle_width = boxElePos.right - boxElePos.left;
        let boxEle_height = boxElePos.bottom - boxElePos.top;


        if (this.state.position === 'left') {
            boxEle.style.left = -boxEle_width + 'px';
        } else if (this.state.position === 'top') {
            boxEle.style.top = -(boxEle_height) + 'px';
            boxEle.style.left = -(boxEle_width - topEle_width) * 0.5 + 5 + 'px';
        } else if (this.state.position === 'right') {
            boxEle.style.top = -(boxEle_height - topEle_height) * 0.5 + 'px';
        } else if(this.state.position === 'buttom') {
            boxEle.style.top = topEle_height + 'px';
            boxEle.style.left = -(boxEle_width - topEle_width) * 0.5 + 5 + 'px';
        }
    }
    show() {
        document.querySelector('.box').innerHTML=this.state.content;
        this.setState({
            isShow: true
        }, this.setPosition())
    }
    showOff() {
        this.setState({
            isShow: false
        })
    }
    componentDidMount() {
        document.querySelector('.top').addEventListener('mouseover', this.show, false);
        document.querySelector('.top').addEventListener('mouseout', this.showOff, false);
    }

    render() {
        return (
            <span className={`rayr-tooltip ${this.props.className}`}>
                <span className="top">{this.props.children}</span>
                <span className={`box box-${this.state.isShow}`}></span>
            </span>
        );
    }
}

export default RayrTooltip;
