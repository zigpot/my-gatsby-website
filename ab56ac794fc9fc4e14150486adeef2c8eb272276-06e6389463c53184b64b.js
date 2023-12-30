"use strict";(self.webpackChunkmy_gatsby_site=self.webpackChunkmy_gatsby_site||[]).push([[865],{72:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),r=n(1883),o="layout-module--nav-link-item--a5f0a",i="layout-module--nav-link-text--69cda";var c=e=>{let{pageTitle:t,children:n}=e;const c=(0,r.useStaticQuery)("3159585216");return a.createElement("div",{className:"layout-module--container--78b04"},a.createElement("header",{className:"layout-module--site-title--e4dea"},c.site.siteMetadata.title),a.createElement("nav",null,a.createElement("ul",{className:"layout-module--nav-links--1113b"},a.createElement("li",{className:o},a.createElement(r.Link,{to:"/",className:i},"Home")),a.createElement("li",{className:o},a.createElement(r.Link,{to:"/literatures",className:i},"Literatures")),a.createElement("li",{className:o},a.createElement(r.Link,{to:"/blog",className:i},"etc")),a.createElement("li",{className:o},a.createElement(r.Link,{to:"/terms",className:i},"Terms")),a.createElement("li",{className:o},a.createElement(r.Link,{to:"/about",className:i},"About")))),a.createElement("main",null,a.createElement("h1",{className:"layout-module--heading--f158c"},t),n),a.createElement("div",{style:{height:"40px",backgroundColor:"transparent",textAlign:"center",fontSize:"xx-small",paddingTop:"20px"},className:"footer-div"}))}},9357:function(e,t,n){var a=n(7294),r=n(1883);t.Z=e=>{let{title:t}=e;const n=(0,r.useStaticQuery)("3159585216");return a.createElement("title",null,t," | ",n.site.siteMetadata.title)}},2020:function(e,t){t.Z=e=>{var t=e.split("-");return new Date(t[0],t[1]-1,t[2]).toDateString()}},9559:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=e||"";t&&(o=e.toString().trim().replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,a){return t>0&&t+e.length!==a.length&&e.search(n)>-1&&":"!==a.charAt(t-2)&&("-"!==a.charAt(t+e.length)||"-"===a.charAt(t-1))&&a.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)})));r&&(o=function(e){if(function(e){return"string"==typeof e&&-1!==e.indexOf("@")}(e))return console.warn("This arg looks like an email address, redacting."),a;return e}(o));return o};var n=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;var a="REDACTED (Potential Email Address)"},1638:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GA4=void 0;var a=l(n(6161)),r=l(n(9559)),o=["eventCategory","eventAction","eventLabel","eventValue","hitType"],i=["title","location"],c=["page","hitType"];function l(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function f(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||m(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,i,c=[],l=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;l=!1}else for(;!(l=(a=o.call(n)).done)&&(c.push(a.value),c.length!==t);l=!0);}catch(s){u=!0,r=s}finally{try{if(!l&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw r}}return c}}(e,t)||m(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function v(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,_(a.key),a)}}function b(e,t,n){return(t=_(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _(e){var t=function(e,t){if("object"!==s(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==s(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===s(t)?t:String(t)}var h=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),b(this,"reset",(function(){t.isInitialized=!1,t._testMode=!1,t._currentMeasurementId,t._hasLoadedGA=!1,t._isQueuing=!1,t._queueGtag=[]})),b(this,"_gtag",(function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];t._testMode||t._isQueuing?t._queueGtag.push(n):a.default.apply(void 0,n)})),b(this,"_loadGA",(function(e,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"https://www.googletagmanager.com/gtag/js";if("undefined"!=typeof window&&"undefined"!=typeof document&&!t._hasLoadedGA){var r=document.createElement("script");r.async=!0,r.src="".concat(a,"?id=").concat(e),n&&r.setAttribute("nonce",n),document.body.appendChild(r),window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)},t._hasLoadedGA=!0}})),b(this,"_toGtagOptions",(function(e){if(e){var t={cookieUpdate:"cookie_update",cookieExpires:"cookie_expires",cookieDomain:"cookie_domain",cookieFlags:"cookie_flags",userId:"user_id",clientId:"client_id",anonymizeIp:"anonymize_ip",contentGroup1:"content_group1",contentGroup2:"content_group2",contentGroup3:"content_group3",contentGroup4:"content_group4",contentGroup5:"content_group5",allowAdFeatures:"allow_google_signals",allowAdPersonalizationSignals:"allow_ad_personalization_signals",nonInteraction:"non_interaction",page:"page_path",hitCallback:"event_callback"};return Object.entries(e).reduce((function(e,n){var a=p(n,2),r=a[0],o=a[1];return t[r]?e[t[r]]=o:e[r]=o,e}),{})}})),b(this,"initialize",(function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)throw new Error("Require GA_MEASUREMENT_ID");var a="string"==typeof e?[{trackingId:e}]:e;t._currentMeasurementId=a[0].trackingId;var r=n.gaOptions,o=n.gtagOptions,i=n.nonce,c=n.testMode,l=void 0!==c&&c,u=n.gtagUrl;if(t._testMode=l,l||t._loadGA(t._currentMeasurementId,i,u),t.isInitialized||(t._gtag("js",new Date),a.forEach((function(e){var n=d(d(d({},t._toGtagOptions(d(d({},r),e.gaOptions))),o),e.gtagOptions);Object.keys(n).length?t._gtag("config",e.trackingId,n):t._gtag("config",e.trackingId)}))),t.isInitialized=!0,!l){var s=f(t._queueGtag);for(t._queueGtag=[],t._isQueuing=!1;s.length;){var g=s.shift();t._gtag.apply(t,f(g)),"get"===g[0]&&(t._isQueuing=!0)}}})),b(this,"set",(function(e){e?"object"===s(e)?(0===Object.keys(e).length&&console.warn("empty `fieldsObject` given to .set()"),t._gaCommand("set",e)):console.warn("Expected `fieldsObject` arg to be an Object"):console.warn("`fieldsObject` is required in .set()")})),b(this,"_gaCommandSendEvent",(function(e,n,a,r,o){t._gtag("event",n,d(d({event_category:e,event_label:a,value:r},o&&{non_interaction:o.nonInteraction}),t._toGtagOptions(o)))})),b(this,"_gaCommandSendEventParameters",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];if("string"==typeof n[0])t._gaCommandSendEvent.apply(t,f(n.slice(1)));else{var r=n[0],i=r.eventCategory,c=r.eventAction,l=r.eventLabel,s=r.eventValue,g=(r.hitType,u(r,o));t._gaCommandSendEvent(i,c,l,s,g)}})),b(this,"_gaCommandSendTiming",(function(e,n,a,r){t._gtag("event","timing_complete",{name:n,value:a,event_category:e,event_label:r})})),b(this,"_gaCommandSendPageview",(function(e,n){if(n&&Object.keys(n).length){var a=t._toGtagOptions(n),r=a.title,o=a.location,c=u(a,i);t._gtag("event","page_view",d(d(d(d({},e&&{page_path:e}),r&&{page_title:r}),o&&{page_location:o}),c))}else e?t._gtag("event","page_view",{page_path:e}):t._gtag("event","page_view")})),b(this,"_gaCommandSendPageviewParameters",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];if("string"==typeof n[0])t._gaCommandSendPageview.apply(t,f(n.slice(1)));else{var r=n[0],o=r.page,i=(r.hitType,u(r,c));t._gaCommandSendPageview(o,i)}})),b(this,"_gaCommandSend",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];var r="string"==typeof n[0]?n[0]:n[0].hitType;switch(r){case"event":t._gaCommandSendEventParameters.apply(t,n);break;case"pageview":t._gaCommandSendPageviewParameters.apply(t,n);break;case"timing":t._gaCommandSendTiming.apply(t,f(n.slice(1)));break;case"screenview":case"transaction":case"item":case"social":case"exception":console.warn("Unsupported send command: ".concat(r));break;default:console.warn("Send command doesn't exist: ".concat(r))}})),b(this,"_gaCommandSet",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];"string"==typeof n[0]&&(n[0]=b({},n[0],n[1])),t._gtag("set",t._toGtagOptions(n[0]))})),b(this,"_gaCommand",(function(e){for(var n=arguments.length,a=new Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];switch(e){case"send":t._gaCommandSend.apply(t,a);break;case"set":t._gaCommandSet.apply(t,a);break;default:console.warn("Command doesn't exist: ".concat(e))}})),b(this,"ga",(function(){for(var e=arguments.length,n=new Array(e),a=0;a<e;a++)n[a]=arguments[a];if("string"==typeof n[0])t._gaCommand.apply(t,n);else{var r=n[0];t._gtag("get",t._currentMeasurementId,"client_id",(function(e){t._isQueuing=!1;var n=t._queueGtag;for(r({get:function(n){return"clientId"===n?e:"trackingId"===n?t._currentMeasurementId:"apiVersion"===n?"1":void 0}});n.length;){var a=n.shift();t._gtag.apply(t,f(a))}})),t._isQueuing=!0}return t.ga})),b(this,"event",(function(e,n){if("string"==typeof e)t._gtag("event",e,t._toGtagOptions(n));else{var a=e.action,o=e.category,i=e.label,c=e.value,l=e.nonInteraction,u=e.transport;if(!o||!a)return void console.warn("args.category AND args.action are required in event()");var s={hitType:"event",eventCategory:(0,r.default)(o),eventAction:(0,r.default)(a)};i&&(s.eventLabel=(0,r.default)(i)),void 0!==c&&("number"!=typeof c?console.warn("Expected `args.value` arg to be a Number."):s.eventValue=c),void 0!==l&&("boolean"!=typeof l?console.warn("`args.nonInteraction` must be a boolean."):s.nonInteraction=l),void 0!==u&&("string"!=typeof u?console.warn("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(u)&&console.warn("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),s.transport=u)),t._gaCommand("send",s)}})),b(this,"send",(function(e){t._gaCommand("send",e)})),this.reset()}var t,n,l;return t=e,n=[{key:"gtag",value:function(){this._gtag.apply(this,arguments)}}],n&&v(t.prototype,n),l&&v(t,l),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.GA4=h;var w=new h;t.default=w},6161:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a;"undefined"!=typeof window&&(void 0===window.gtag&&(window.dataLayer=window.dataLayer||[],window.gtag=function(){window.dataLayer.push(arguments)}),(a=window).gtag.apply(a,t))};t.default=n},9089:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in e)if("default"!==c&&Object.prototype.hasOwnProperty.call(e,c)){var l=i?Object.getOwnPropertyDescriptor(e,c):null;l&&(l.get||l.set)?Object.defineProperty(r,c,l):r[c]=e[c]}r.default=e,n&&n.set(e,r);return r}(n(1638));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}r.GA4,r.default},1151:function(e,t,n){n.d(t,{a:function(){return i}});var a=n(7294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);
//# sourceMappingURL=ab56ac794fc9fc4e14150486adeef2c8eb272276-06e6389463c53184b64b.js.map