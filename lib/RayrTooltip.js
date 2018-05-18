'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Top = function (_React$Component) {
    _inherits(Top, _React$Component);

    function Top() {
        _classCallCheck(this, Top);

        return _possibleConstructorReturn(this, (Top.__proto__ || Object.getPrototypeOf(Top)).apply(this, arguments));
    }

    _createClass(Top, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: this.props.className },
                this.props.children
            );
        }
    }]);

    return Top;
}(_react2.default.Component);

var Box = function (_React$Component2) {
    _inherits(Box, _React$Component2);

    function Box() {
        _classCallCheck(this, Box);

        return _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).apply(this, arguments));
    }

    _createClass(Box, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: this.props.className },
                this.props.children
            );
        }
    }]);

    return Box;
}(_react2.default.Component);

var RayrTooltip = function (_React$Component3) {
    _inherits(RayrTooltip, _React$Component3);

    function RayrTooltip(props) {
        _classCallCheck(this, RayrTooltip);

        var _this3 = _possibleConstructorReturn(this, (RayrTooltip.__proto__ || Object.getPrototypeOf(RayrTooltip)).call(this, props));

        _this3.state = {
            isShow: false,
            position: _this3.props.position || 'right'
        };
        _this3.show = _this3.show.bind(_this3);
        _this3.showOff = _this3.showOff.bind(_this3);
        return _this3;
    }

    _createClass(RayrTooltip, [{
        key: 'setPosition',
        value: function setPosition() {
            var topElePos = document.querySelector('.top').getBoundingClientRect();
            var boxElePos = document.querySelector('.box').getBoundingClientRect();

            var boxEle = document.querySelector('.box');

            var topEle_width = topElePos.right - topElePos.left;
            var topEle_height = topElePos.bottom - topElePos.top;

            var boxEle_width = boxElePos.right - boxElePos.left;
            var boxEle_height = boxElePos.bottom - boxElePos.top;

            if (this.state.position === 'left') {
                boxEle.style.left = -boxEle_width + 'px';
            } else if (this.state.position === 'top') {
                boxEle.style.top = -boxEle_height + 'px';
                boxEle.style.left = -(boxEle_width - topEle_width) * 0.5 + 5 + 'px';
            } else if (this.state.position === 'right') {
                boxEle.style.top = -(boxEle_height - topEle_height) * 0.5 + 'px';
            } else if (this.state.position === 'bottom') {
                boxEle.style.top = topEle_height + 'px';
                boxEle.style.left = -(boxEle_width - topEle_width) * 0.5 + 5 + 'px';
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.setState({
                isShow: true
            }, this.setPosition());
        }
    }, {
        key: 'showOff',
        value: function showOff() {
            this.setState({
                isShow: false
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.querySelector('.top').addEventListener('mouseover', this.show, false);
            document.querySelector('.top').addEventListener('mouseout', this.showOff, false);
        }
    }, {
        key: 'mapList',
        value: function mapList() {
            return [_react2.default.createElement(
                'span',
                { key: 'top', className: 'top' },
                this.props.children[0]
            ), _react2.default.createElement(
                'span',
                { key: 'box', className: 'box box-' + this.state.position + ' box-' + this.state.isShow },
                this.props.children[1]
            )];
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'span',
                { className: 'rayr-tooltip ' + this.props.className },
                this.mapList()
            );
        }
    }]);

    return RayrTooltip;
}(_react2.default.Component);

RayrTooltip.propTypes = {
    position: _propTypes2.default.oneOf(['top', 'left', 'right', 'bottom'])
};
RayrTooltip.defaultProps = {
    position: 'right'
};
RayrTooltip.Top = Top;
RayrTooltip.Box = Box;
exports.default = RayrTooltip;
module.exports = exports['default'];