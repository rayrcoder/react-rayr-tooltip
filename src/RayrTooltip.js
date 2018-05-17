import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Top extends React.Component {
    render() {
        return (
            <span className={this.props.className}>
                {this.props.children}
            </span>

        )
    }
}

class Box extends React.Component {
    render() {
        return (
            <span className={this.props.className}>
                {this.props.children}
            </span>
        )
    }

}

class RayrTooltip extends React.Component {

    static propTypes = {
        position: PropTypes.oneOf(['top', 'left', 'right','bottom'])
    };

    static defaultProps = {
        position:'right'
    };

    static Top = Top;
    static Box = Box;

    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            position: this.props.position || 'right'
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
        } else if(this.state.position === 'bottom') {
            boxEle.style.top = topEle_height + 'px';
            boxEle.style.left = -(boxEle_width - topEle_width) * 0.5 + 5 + 'px';
        }
    }
    show() {
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
    mapList() {
        return [
            <span key="top" className="top">{this.props.children[0]}</span>,
            <span key="box" className={`box box-${this.state.position} box-${this.state.isShow}`}>{this.props.children[1]}</span>
        ];
    }

    render() {
        return (
            <span className={`rayr-tooltip ${this.props.className}`}>
                {this.mapList()}
            </span>
        );
    }
}

export default RayrTooltip;
