webpackJsonp([4],{149:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=a(r),u=n(142),c=a(u),f=function(e){var t={scheme:"google",author:"seth wright (http://sethawright.com)",base00:"#1d1f21",base01:"#282a2e",base02:"#373b41",base03:"#969896",base04:"#b4b7b4",base05:"#c5c8c6",base06:"#e0e0e0",base07:"#ffffff",base08:"#CC342B",base09:"#F96A38",base0A:"#FBA922",base0B:"#198844",base0C:"#3971ED",base0D:"#3971ED",base0E:"#A36AC7",base0F:"#3971ED"};return o.default.createElement(c.default,{getItemString:function(e,t,n,a){return o.default.createElement("span",null,t.name&&t.name.value||t.name||t.kind||t.module||a)},data:e.data,theme:t})};t.default=f},150:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=n(3),l=a(f),s=n(32),i=a(s),d=n(67),b=n(89),p=a(b),h=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return(0,i.default)(e),e}return u(t,e),c(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.getSchema,n=e.setSchema;t().payload.then(function(e){return n(e.data.schema)}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props.component;return l.default.createElement(e,(0,p.default)(this))}}]),t}(l.default.Component);t.default=(0,d.connect)(h)},613:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=a(r),u=n(149),c=a(u),f=function(e){return o.default.createElement(c.default,{data:e.schema.ast})};t.default=f},617:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=a(r),u=n(613),c=a(u),f=n(150),l=a(f);t.default=function(e){return o.default.createElement(l.default,Object.assign({},e,{component:c.default}))}}});
//# sourceMappingURL=4.1b84e7f1.chunk.js.map