function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),d=Object.prototype.toString,s=Math.max,p=Math.min,v=function(){return l.Date.now()};function m(e,t,n){var o,r,i,a,f,u,c=0,l=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function S(e){return c=e,f=setTimeout(x,t),l?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||d&&e-c>=i}function x(){var e=v();if(j(e))return O(e);f=setTimeout(x,function(e){var n=t-(e-u);return d?p(n,i-(e-c)):n}(e))}function O(e){return f=void 0,m&&o?y(e):(o=r=void 0,a)}function T(){var e=v(),n=j(e);if(o=arguments,r=this,u=e,n){if(void 0===f)return S(u);if(d)return f=setTimeout(x,t),y(u)}return void 0===f&&(f=setTimeout(x,t)),a}return t=g(t)||0,b(n)&&(l=!!n.leading,i=(d="maxWait"in n)?s(g(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=r=f=void 0},T.flush=function(){return void 0===f?a:O(v())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return b(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".feedback-form"),S=document.querySelector(".feedback-form input"),j=document.querySelector(".feedback-form textarea");y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),console.log(JSON.parse(localStorage.getItem("feedback-form-state"))),localStorage.removeItem("feedback-form-state")})),y.addEventListener("input",e(t)((function(){const e={input:S.value,textarea:j.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500)),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(S.value=e.input,j.value=e.textarea)}();
//# sourceMappingURL=03-feedback.99cd32af.js.map