!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t,n){"use strict";t.__esModule=!0;var r=function(){function e(){}return e.prototype.getRedirectPath=function(){return new Promise(function(e,t){e("https://google.com")})},e}();t.PathService=r},function(e,t){r.removeEventListener=function(e,t,r,a){return(n=n||(document.addEventListener?{add:o,rm:u}:{add:i,rm:c})).rm(e,t,r,a)},r.addEventListener=r,e.exports=r;var n=null;function r(e,t,r,a){return(n=n||(document.addEventListener?{add:o,rm:u}:{add:i,rm:c})).add(e,t,r,a)}function o(e,t,n,r){e.addEventListener(t,n,r)}function u(e,t,n,r){e.removeEventListener(t,n,r)}function i(e,t,n,r){if(r)throw new Error("cannot useCapture in oldIE");e.attachEvent("on"+t,n)}function c(e,t,n,r){e.detachEvent("on"+t,n)}},function(e,t,n){"use strict";t.__esModule=!0;var r=n(1),o=function(){function e(){}return e.clickOrTouchDocument=function(e){r.addEventListener(document,"click",function(t){e(t)}),r.addEventListener(document,"touch",function(t){e(t)})},e}();t.ShareEvents=o},function(e,t,n){"use strict";t.__esModule=!0;var r=n(2),o=function(){function e(e){this.pathService=e}return e.prototype.onInit=function(){r.ShareEvents.clickOrTouchDocument(this.callBack.bind(this))},e.prototype.openTab=function(e){window.open(e)},e.prototype.callBack=function(e){var t=this;this.pathService.getRedirectPath().then(function(e){t.openTab(e)})},e}();t.Tabander=o},function(e,t,n){"use strict";t.__esModule=!0;var r=n(3),o=new(n(0).PathService);new r.Tabander(o).onInit()}]);