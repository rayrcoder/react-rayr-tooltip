### Description
#### the tooltip plugin for react. 

&nbsp;&nbsp;&nbsp;&nbsp;1.can be showed in four different directions 

### Install
    npm install react-rayr-tooltip --save

### Params
| param | type | descript | default | 
| :-: | :-: | :-: | :-:|
| position | String | the position of the tooltip(can receive one of 'right','left','top','bottom') | right
| className | String | add custom styles for the tooltip | 

### Use Demo
 ```javascript
 import {RayrTooltip} from 'react-rayr-tooltip';

<RayrTooltip position='bottom' className="tooltip">
    <RayrTooltip.Top className="tip-top">
        鼠标上移出现提示框
    </RayrTooltip.Top>
    <RayrTooltip.Box className="tip-box">
        <span>这是提示框的内容</span>
    </RayrTooltip.Box>
</RayrTooltip>
```
####  &nbsp;&nbsp; tips:don`t forget to import the css file