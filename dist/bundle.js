!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";e.__esModule=!0;var r=function(){function t(){}return t.prototype.getRedirectPath=function(){return new Promise(function(t,e){t("https://google.com")})},t}();e.PathService=r},function(t,e){r.removeEventListener=function(t,e,r,a){return(n=n||(document.addEventListener?{add:o,rm:u}:{add:i,rm:c})).rm(t,e,r,a)},r.addEventListener=r,t.exports=r;var n=null;function r(t,e,r,a){return(n=n||(document.addEventListener?{add:o,rm:u}:{add:i,rm:c})).add(t,e,r,a)}function o(t,e,n,r){t.addEventListener(e,n,r)}function u(t,e,n,r){t.removeEventListener(e,n,r)}function i(t,e,n,r){if(r)throw new Error("cannot useCapture in oldIE");t.attachEvent("on"+e,n)}function c(t,e,n,r){t.detachEvent("on"+e,n)}},function(t,e,n){"use strict";e.__esModule=!0;var r=n(1),o=function(){function t(){}return t.clickOrTouchDocument=function(t){r.addEventListener(document,"click",function(e){t(e)}),r.addEventListener(document,"touchstart",function(e){t(e)})},t}();e.ShareEvents=o},function(t,e,n){"use strict";e.__esModule=!0;var r=n(2),o=function(){function t(t){this.pathService=t}return t.prototype.onInit=function(){r.ShareEvents.clickOrTouchDocument(this.callBack.bind(this))},t.prototype.openTab=function(t){window.open(t)},t.prototype.callBack=function(t){var e=this;this.pathService.getRedirectPath().then(function(t){e.openTab(t)})},t}();e.Tabander=o},function(t,e,n){"use strict";e.__esModule=!0;var r=n(3),o=new(n(0).PathService);new r.Tabander(o).onInit()}]);