### Description
#### the tooltip plugin for react. 

&nbsp;&nbsp;&nbsp;&nbsp;1.can be showed in four different directions 

### Install
    npm install react-rayr-tooltip --save

### Params
| param | type | descript | default | 
| :-: | :-: | :-: | :-:|
| position | String | the position of the tooltip(can receive one of 'right','left','top','buttom') | right
| content | String | the content of the tooltip | 
| className | String | add custom styles for the tooltip | 

### Use Demo
 ```javascript
 import {RayrTooltip} from 'react-rayr-tooltip';
 
    <RayrTooltip position='top' content={'<div>这是提示框的内容<div>'}>
        鼠标上移出现提示框
    </RayrTooltip>

```
####  &nbsp;&nbsp; tips:don`t forget to import the css file