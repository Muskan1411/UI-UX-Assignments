var SLDS="object"==typeof SLDS?SLDS:{};SLDS["__internal/chunked/showcase/ui/components/welcome-mat/base/example.jsx.js"]=function(e){function t(t){for(var r,i,o=t[0],u=t[1],c=t[2],p=0,f=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&f.push(l[i][0]),l[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==l[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},l={161:0,6:0,13:0,14:0,22:0,24:0,26:0,36:0,37:0,56:0,72:0,73:0,79:0,80:0,93:0,94:0,96:0,97:0,98:0,103:0,104:0,112:0,117:0,118:0,122:0,124:0,127:0,131:0,133:0,135:0,136:0,137:0,140:0,142:0,145:0,146:0,147:0,150:0,154:0,157:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/assets/scripts/bundle/";var o=this.webpackJsonpSLDS___internal_chunked_showcase=this.webpackJsonpSLDS___internal_chunked_showcase||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var s=u;return a.push([136,0]),n()}({0:function(e,t){e.exports=React},136:function(e,t,n){"use strict";n.r(t),n.d(t,"Context",(function(){return d})),n.d(t,"examples",(function(){return h}));var r=n(0),l=n.n(r),a=n(41),i=n(53),o=n(78),u=n(21);function c(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=Object(a.f)(),f=[Object.assign({},p[0],{completed:!0}),Object.assign({},p[1],{completed:!0})].concat(c(p.slice(2))),m=c(f).concat(p.slice(2)),d=a.a,b=l.a.createElement(u.Backdrop,null,l.a.createElement(i.a,null));t.default=b;var h=[{id:"default",label:"Default",demoStyles:a.e,element:b},{id:"with-completed-tiles",label:"With Completed Tiles",demoStyles:a.e,element:l.a.createElement(u.Backdrop,null,l.a.createElement(i.a,{tiles:f}))},{id:"with-overflowing-tiles",label:"With Overflowing Tiles",demoStyles:a.e,element:l.a.createElement(u.Backdrop,null,l.a.createElement(i.a,{tiles:m}))},{id:"with-overflowing-tiles-and-long-description",label:"With Overflowing Tiles and Long Description",demoStyles:a.e,element:l.a.createElement(u.Backdrop,null,l.a.createElement(i.a,{tiles:m,content:function(e){var t=e.complete,n=e.total,r=e.labelId;return l.a.createElement(o.a,{complete:t,total:n,labelId:r,description:l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,"Integer nibh libero, pulvinar sed libero et, rhoncus convallis purus. Sed faucibus nibh vel arcu vestibulum, nec commodo sapien tincidunt. In dignissim faucibus ipsum, nec placerat dui pulvinar a mi nec lectus feugiat vel arcu rhoncus convallis, nibh libero."),l.a.createElement("p",null,"Sed vestibulum dui ac diam suscipit vehicula. Nam vestibulum mi nec lectus feugiat euismod. Phasellus in suscipit est."),l.a.createElement("p",null,"Morbi facilisis aliquet dapibus. Morbi ac leo viverra, cursus nibh eget, ultrices mauris. Integer pharetra, lorem ac hendrerit vulputate, sem elit luctus metus, sit amet vehicula justo ex at sem."))})}}))}]},16:function(e,t){e.exports=ReactDOM}});