import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

ReactDOM.render(<App />, document.getElementById('view'));

var gnbConfigs = {};
gnbConfigs.showHeader = true;
gnbConfigs.showCookieBanner = false;
gnbConfigs.showFooter = true;
gnbConfigs.helpUrl = "#####";
gnbConfigs.currentLocale = "zh_CN";

var clientCallbacks = [];

clientCallbacks.helpClickCallback = function(e){
    console.log("=====client side 'help click callback' triggered=====");
}

clientCallbacks.updateLocaleCallback = function(e){
    console.log("====client side 'update locale callback' triggered=====");
}

//window.gnbConfigs = gnbConfigs;
window.clientCallbacks = clientCallbacks;

var gnbComponents = {};
gnbComponents.tou = null;
if(window.gnbComponents){
    gnbComponents = window.gnbComponents;
}

if(gnbComponents.tou){
    ReactDOM.render(gnbComponents.tou, document.getElementById('app'))
}
