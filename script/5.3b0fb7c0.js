Topthinking([5],{306:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function c(e){return{}}function u(e){return{appActionList:(0,b.bindActionCreators)(m,e)}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),f=n(1),p=o(f),s=n(8),d=o(s),h=n(17),b=n(16),y=n(117),m=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(y),v=n(312),_=o(v),w=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.shouldComponentUpdate=d.default.shouldComponentUpdate.bind(n),n}return a(t,e),l(t,[{key:"render",value:function(){return p.default.createElement(_.default,{title:"待开发..."})}},{key:"componentDidMount",value:function(){this.props.appActionList.menu({location:0})}}]),t}(f.Component);t.default=(0,h.connect)(c,u)(w)},310:function(e,t,n){t=e.exports=n(302)(void 0),t.push([e.i,"#common-header-34x8QXef {\n  background-color: #e9203d;\n  color: #fff;\n  padding: 15px 10px;\n  text-align: center;\n  position: relative;\n}\n\n#common-header-34x8QXef h1 {\n  display: inline;\n  font-size: 16px;\n  line-height: 1;\n  font-weight: 100;\n}\n\n#common-header-34x8QXef .back-icon-1RHwCsOl {\n  width: 16px;\n  height: 16px;\n  position: absolute;\n  left: 10px;\n}",""]),t.locals={"common-header":"common-header-34x8QXef","back-icon":"back-icon-1RHwCsOl"}},311:function(e,t,n){var o=n(310);"string"==typeof o&&(o=[[e.i,o,""]]);var r={};r.transform=void 0;n(301)(o,r);o.locals&&(e.exports=o.locals)},312:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),u=n(1),l=o(u),f=n(8),p=o(f),s=n(311),d=o(s),h=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.shouldComponentUpdate=p.default.shouldComponentUpdate.bind(n),n}return a(t,e),c(t,[{key:"render",value:function(){return l.default.createElement("div",{id:d.default["common-header"]},l.default.createElement("span",{className:d.default["back-icon"],onClick:this.clickHandle.bind(this)},l.default.createElement("i",{className:"icon-chevron-left"})),l.default.createElement("h1",null,this.props.title))}},{key:"clickHandle",value:function(){window.history.back()}}]),t}(u.Component);t.default=h}});