(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-is')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-is'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}, global.React, global.reactIs));
})(this, (function (exports, React, reactIs) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ".cjq-btn{background-clip:padding-box;background-color:rgba(0,0,0,.06);border:1px solid rgba(0,0,0,.06);border-radius:2px;box-sizing:border-box;color:#333;cursor:pointer;display:inline-block;font-size:14px;height:32px;line-height:30px;padding:0 16px;text-align:center;transition:all .3s;vertical-align:middle}.cjq-btn:focus{outline:none}.cjq-btn:active,.cjq-btn:focus,.cjq-btn:link{color:#333;text-decoration:none}.cjq-btn:hover{background-color:rgba(0,0,0,.03);border-color:rgba(0,0,0,.03);text-decoration:none}.cjq-btn:active{background-color:rgba(0,0,0,.09);color:#333;text-decoration:none}.cjq-btn.cjq-btn-loading.cjq-btn-icon{background-color:transparent}.cjq-btn.cjq-btn-loading.cjq-btn-text{background-color:rgba(21,91,212,.03)}.cjq-btn[type=button],.cjq-btn[type=reset],.cjq-btn[type=submit]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.cjq-btn-large{font-size:16px;height:40px;line-height:38px;padding:0 24px}.cjq-btn-large.cjq-btn-icon{font-size:24px;height:32px;width:32px}.cjq-btn-small{font-size:12px;height:24px;line-height:22px;padding:0 8px}.cjq-btn-small.cjq-btn-icon{font-size:16px;height:24px;width:24px}.cjq-btn-block{display:block;padding:0;width:100%}.cjq-btn-primary{background-color:#155bd4;border-color:#155bd4;color:#fff}.cjq-btn-primary:focus,.cjq-btn-primary:link,.cjq-btn-primary:visited{color:#fff}.cjq-btn-primary:active,.cjq-btn-primary:hover{background-color:#114bae;border-color:#114bae;color:#fff}.cjq-btn-primary.cjq-btn-loading:active,.cjq-btn-primary.cjq-btn-loading:hover{background-color:#155bd4;border-color:#155bd4}.cjq-btn-primary.cjq-btn-loading:after{border-color:#fff #fff #114bae #114bae}.cjq-btn-primary-outline{background-color:#fff;border-color:#155bd4;color:#155bd4}.cjq-btn-primary-outline:focus,.cjq-btn-primary-outline:link,.cjq-btn-primary-outline:visited{color:#155bd4}.cjq-btn-primary-outline:hover{background-color:#fff;border-color:#356fd4;color:#356fd4}.cjq-btn-primary-outline:active{background-color:#e0e0e0;border-color:#e0e0e0;color:#333}.cjq-btn-primary-outline.cjq-btn-loading:active,.cjq-btn-primary-outline.cjq-btn-loading:hover{background-color:#fff;border-color:#155bd4}.cjq-btn-primary-outline.cjq-btn-loading:after{border-color:#155bd4 #155bd4 #f7f7f7 #f7f7f7}.cjq-btn-danger,.cjq-btn-error{background-color:#d42f15;border-color:#d42f15;color:#fff}.cjq-btn-danger:focus,.cjq-btn-danger:link,.cjq-btn-danger:visited,.cjq-btn-error:focus,.cjq-btn-error:link,.cjq-btn-error:visited{color:#fff}.cjq-btn-danger:active,.cjq-btn-danger:hover,.cjq-btn-error:active,.cjq-btn-error:hover{background-color:#d42f15;border-color:#d42f15;color:#fff}.cjq-btn-danger.cjq-btn-loading:active,.cjq-btn-danger.cjq-btn-loading:hover,.cjq-btn-error.cjq-btn-loading:active,.cjq-btn-error.cjq-btn-loading:hover{background-color:#d42f15;border-color:#d42f15}.cjq-btn-danger.cjq-btn-loading:after,.cjq-btn-error.cjq-btn-loading:after{border-color:#fff #fff #d42f15 #d42f15}.cjq-btn-danger-outline,.cjq-btn-error-outline{background-color:#fff;border-color:#d42f15;color:#d42f15}.cjq-btn-danger-outline:focus,.cjq-btn-danger-outline:link,.cjq-btn-danger-outline:visited,.cjq-btn-error-outline:focus,.cjq-btn-error-outline:link,.cjq-btn-error-outline:visited{color:#d42f15}.cjq-btn-danger-outline:hover,.cjq-btn-error-outline:hover{background-color:#fff;border-color:#d42f15;color:#d42f15}.cjq-btn-danger-outline:active,.cjq-btn-error-outline:active{background-color:#e0e0e0;border-color:#e0e0e0;color:#333}.cjq-btn-danger-outline.cjq-btn-loading:active,.cjq-btn-danger-outline.cjq-btn-loading:hover,.cjq-btn-error-outline.cjq-btn-loading:active,.cjq-btn-error-outline.cjq-btn-loading:hover{background-color:#fff;border-color:#d42f15}.cjq-btn-danger-outline.cjq-btn-loading:after,.cjq-btn-error-outline.cjq-btn-loading:after{border-color:#d42f15 #d42f15 #f7f7f7 #f7f7f7}.cjq-btn-success{background-color:#45a110;border-color:#45a110;color:#fff}.cjq-btn-success:focus,.cjq-btn-success:link,.cjq-btn-success:visited{color:#fff}.cjq-btn-success:active,.cjq-btn-success:hover{background-color:#45a110;border-color:#45a110;color:#fff}.cjq-btn-success.cjq-btn-loading:active,.cjq-btn-success.cjq-btn-loading:hover{background-color:#45a110;border-color:#45a110}.cjq-btn-success.cjq-btn-loading:after{border-color:#fff #fff #45a110 #45a110}.cjq-btn-success-outline{background-color:#fff;border-color:#45a110;color:#45a110}.cjq-btn-success-outline:focus,.cjq-btn-success-outline:link,.cjq-btn-success-outline:visited{color:#45a110}.cjq-btn-success-outline:hover{background-color:#fff;border-color:#45a110;color:#45a110}.cjq-btn-success-outline:active{background-color:#e0e0e0;border-color:#e0e0e0;color:#333}.cjq-btn-success-outline.cjq-btn-loading:active,.cjq-btn-success-outline.cjq-btn-loading:hover{background-color:#fff;border-color:#45a110}.cjq-btn-success-outline.cjq-btn-loading:after{border-color:#45a110 #45a110 #f7f7f7 #f7f7f7}.cjq-btn-warning{background-color:#ed6a18;border-color:#ed6a18;color:#fff}.cjq-btn-warning:focus,.cjq-btn-warning:link,.cjq-btn-warning:visited{color:#fff}.cjq-btn-warning:active,.cjq-btn-warning:hover{background-color:#ed6a18;border-color:#ed6a18;color:#fff}.cjq-btn-warning.cjq-btn-loading:active,.cjq-btn-warning.cjq-btn-loading:hover{background-color:#ed6a18;border-color:#ed6a18}.cjq-btn-warning.cjq-btn-loading:after{border-color:#fff #fff #ed6a18 #ed6a18}.cjq-btn-warning-outline{background-color:#fff;border-color:#ed6a18;color:#ed6a18}.cjq-btn-warning-outline:focus,.cjq-btn-warning-outline:link,.cjq-btn-warning-outline:visited{color:#ed6a18}.cjq-btn-warning-outline:hover{background-color:#fff;border-color:#ed6a18;color:#ed6a18}.cjq-btn-warning-outline:active{background-color:#e0e0e0;border-color:#e0e0e0;color:#333}.cjq-btn-warning-outline.cjq-btn-loading:active,.cjq-btn-warning-outline.cjq-btn-loading:hover{background-color:#fff;border-color:#ed6a18}.cjq-btn-warning-outline.cjq-btn-loading:after{border-color:#ed6a18 #ed6a18 #f7f7f7 #f7f7f7}.cjq-btn-disabled,.cjq-btn-disabled[disabled]{background-color:#f7f7f7;border-color:#f7f7f7;color:#ccc;cursor:not-allowed}.cjq-btn-disabled:focus,.cjq-btn-disabled:link,.cjq-btn-disabled:visited,.cjq-btn-disabled[disabled]:focus,.cjq-btn-disabled[disabled]:link,.cjq-btn-disabled[disabled]:visited{color:#fff}.cjq-btn-disabled:active,.cjq-btn-disabled:hover,.cjq-btn-disabled[disabled]:active,.cjq-btn-disabled[disabled]:hover{background-color:#f7f7f7;border-color:#f7f7f7;color:#ccc}.cjq-btn-text{background-color:rgba(21,91,212,.03);font-size:12px;height:24px;line-height:24px;padding:0 8px}.cjq-btn-text,.cjq-btn-text:active,.cjq-btn-text:focus,.cjq-btn-text:hover,.cjq-btn-text:link,.cjq-btn-text:visited{border:0;color:#155bd4}.cjq-btn-text:hover{background-color:rgba(21,91,212,.06)}.cjq-btn-text:active{background-color:rgba(21,91,212,.09)}.cjq-btn-icon{background-color:transparent;border:0;border-radius:2px;color:#333;font-size:20px;height:28px;line-height:24px;padding:0;text-align:center;width:28px}.cjq-btn-icon:active,.cjq-btn-icon:focus,.cjq-btn-icon:hover,.cjq-btn-icon:link,.cjq-btn-icon:visited{color:#333}.cjq-btn-icon:hover{background-color:rgba(0,0,0,.05)}.cjq-btn-icon:active{background-color:rgba(0,0,0,.1)}.cjq-btn-loading{cursor:not-allowed;position:relative}.cjq-btn-loading,.cjq-btn-loading:active,.cjq-btn-loading:focus,.cjq-btn-loading:hover,.cjq-btn-loading:link,.cjq-btn-loading:visited{color:transparent}.cjq-btn-loading:after,.cjq-btn-loading:before{border:2px solid;border-radius:8px;box-sizing:border-box;content:\"\";height:16px;left:50%;margin-left:-8px;margin-top:-8px;position:absolute;top:50%;width:16px}.cjq-btn-loading:after{-webkit-animation:zent-ani-spin-v10x0x0 .6s linear;animation:zent-ani-spin-v10x0x0 .6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-color:#333 #333 #fff #fff}.cjq-btn-loading.cjq-btn-small:after,.cjq-btn-loading.cjq-btn-text:after{border-radius:6px;height:12px;margin-left:-6px;margin-top:-6px;width:12px}.cjq-btn-loading.cjq-btn-text:after{border-color:#155bd4 #155bd4 #f7f7f7 #f7f7f7}.cjq-btn-loading.cjq-btn-icon:after{border-right-color:#333;border-top-color:#333}.cjq-btn.cjq-btn-border-transparent,.cjq-btn.cjq-btn-border-transparent:active,.cjq-btn.cjq-btn-border-transparent:hover{border-color:transparent}@font-face{font-family:cjqicon;src:url(../../assets/fonts/iconfont.eot?t=1658718920348);src:url(../../assets/fonts/iconfont.eot?t=1658718920348#iefix) format(\"embedded-opentype\"),url(\"data:application/x-font-woff2;charset=utf-8;base64,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\") format(\"woff2\"),url(../../assets/fonts/iconfont.woff?t=1658718920348) format(\"woff\"),url(../../assets/fonts/iconfont.ttf?t=1658718920348) format(\"truetype\"),url(../../assets/fonts/iconfont.svg?t=1658718920348#iconfont) format(\"svg\")}.cjqicon{text-rendering:auto;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-style:normal;font-variant:normal;line-height:1;text-align:center;text-decoration:inherit;text-transform:none;vertical-align:baseline}.cjqicon:before{box-sizing:border-box;display:block;font-family:cjqicon!important}.cjqicon-loading{-webkit-animation:rotating 2s linear infinite;animation:rotating 2s linear infinite}@-webkit-keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes rotating{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.cjqicon-arrow-right:before{content:\"\\e743\"}.cjqicon-arrow-left:before{content:\"\\e744\"}.cjqicon-prompt:before{content:\"\\e75e\"}.cjqicon-subtract-circle-o:before{content:\"\\e6a0\"}.cjqicon-close-circle-o:before{content:\"\\e6a1\"}.cjqicon-check-circle-o:before{content:\"\\e6a2\"}.cjqicon-search:before{content:\"\\e6a3\"}.cjqicon-bell-o:before{content:\"\\e6a4\"}.cjqicon-customer-o:before{content:\"\\e6a5\"}.cjqicon-down:before{content:\"\\e6a6\"}.cjqicon-up:before{content:\"\\e6a7\"}.cjqicon-settings-o:before{content:\"\\e6a8\"}.cjqicon-plus-circle-o:before{content:\"\\e6a9\"}.cjqicon-reverse:before{content:\"\\e6aa\"}.cjqicon-forward:before{content:\"\\e6ac\"}.cjqicon-closed:before{content:\"\\e6ab\"}.cjqicon-lock:before{content:\"\\e6ad\"}.cjqicon-delete:before{content:\"\\e6ae\"}.cjqicon-menu:before{content:\"\\e6af\"}.cjqicon-position:before{content:\"\\e6ea\"}.cjq-checkbox-group{display:inline-block;font-size:0}.cjq-checkbox-group>:not(.cjq-checkbox-wrap){font-size:14px;line-height:20px}.cjq-checkbox-wrap{cursor:pointer;display:inline-block;font-size:0;margin:0 24px 0 0;padding:0;vertical-align:middle}.cjq-checkbox-wrap:last-child{margin-right:0}.cjq-checkbox-wrap.cjq-checkbox-disabled{cursor:not-allowed}.cjq-checkbox-wrap:not(.zent-checkbox-disabled):hover .zent-checkbox-inner{border-color:#155bd4}.cjq-checkbox{display:inline-block;font-size:14px;height:16px;line-height:1;margin:0;outline:none;padding:0;position:relative;vertical-align:middle;white-space:nowrap;width:16px}.cjq-checkbox>input{bottom:0;cursor:pointer;height:100%;left:0;margin:0;opacity:0;padding:0;position:absolute;right:0;top:0;width:100%;z-index:1}.cjq-checkbox-label{display:inline-block;font-size:14px;font-weight:400;line-height:20px;margin-left:8px;vertical-align:middle}.cjq-checkbox-inner{background-color:#fff;border:1px solid #ccc;border-radius:2px;box-sizing:border-box;display:inline-block;height:16px;left:0;position:relative;top:0;transition:all .3s;width:16px}.cjq-checkbox-inner:after{background-size:contain;box-sizing:content-box;content:\" \";display:block;font-size:0;height:8px;left:2px;position:absolute;top:3px;transform:scale(0);transition:all .12s ease-in-out;width:10px}.cjq-checkbox-checked>.cjq-checkbox>.cjq-checkbox-inner{background-color:#155bd4;border-color:#155bd4}.cjq-checkbox-checked>.cjq-checkbox>.cjq-checkbox-inner:after{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAABGdBTUEAALGPC/xhBQAAASxJREFUOBGlkr9LQlEUx01Di1pCCKQhkAZxaMs/oFnwD3Bwqcmh0cnB0ak5HBwdHNyT5sDFIUIQxMXBQWgIIjB7fa7c+zjvvnfR9MCH8+t7vtOJxfYMz/OyMIIniB/u44dBhvs+ZCEHX7BbYHYGbyBjtpMbDifwKp2ol1D8tyFHSXgGGb805YAZg+PAIKJBE4cu2FH15WyOoA8fUPAXEQX7FthRD0jZdoRiQZ0PCHTDvCl0pnwMadlMzFbnGflSCulrlka1bTiQunXN8AY+QcaY5lwJyPdyoeseOREyMwOWt/CtxSYNKe5gZQY6v5BT5taZEZXgRx+50oDFqdPEXiCugPqpqHhnmLZvNvYcPUS4TZldbDx2CThuCNM59ZVLu/UcE/V36qWutz5C+AfE+OIwPOZePgAAAABJRU5ErkJggg==\");transform:scale(1)}.cjq-checkbox-indeterminate>.cjq-checkbox>.cjq-checkbox-inner{background-color:#fff;border-color:#155bd4}.cjq-checkbox-indeterminate>.cjq-checkbox>.cjq-checkbox-inner:after{background-color:#155bd4;border:0;height:2px;left:2px;top:6px;transform:rotate(0deg);width:10px}.cjq-checkbox-disabled>span{color:#999}.cjq-checkbox-disabled>.cjq-checkbox>.cjq-checkbox-inner{background-color:#f7f7f7;border-color:#e0e0e0}.cjq-checkbox-disabled>.cjq-checkbox>input[type=checkbox]{pointer-events:none}.cjq-checkbox-disabled.cjq-checkbox-checked>.cjq-checkbox>.cjq-checkbox-inner:after{background-image:url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAABGdBTUEAALGPC/xhBQAAAeJJREFUOBGlkz9I5FAQxmcSWU9UEIU9xDXJZg+EKywsDmt1GxubK2wEEbG7QkSwsRAEDxu5QrirlANLUUEEFexsrKy8xuTlDyxrcd15orubcd5Ckqeo6BpI5sv3vvzI5E0A3nkEQVBwhPfnUvi/iEjD9/A8z+uuEZ4yKC85iLCmNwoMw7CzWoMTAupLGdjbELBcLrfe3FUOGTSgwKqow4SWGq9T3F7m+v/tDhAMxk8gIqFGkwXT3E+A3EJLHHiuMkx3RbDFbRbVDPO+FSxrS3qaEPTBcf3ju2qt5IbhFzX4WDsi+Mmwr4/8Rduy1mNPi8Df4NAIEXRE1ejA9/3P8aJaXc9fBaBp1ZO7+sm2llVPI8D0rYi6KhEcuW7JVEOO8BeiiOZVj7/bpm2Zc6ontYY6jvME/UsWiHoIKsfu1dVH6fHAzvC3W0nWpUDYtS1jWm7GA7++xJdLzxuCCA5YNscBbuecz3UirP8BqY8nDBtl2G3sqTX5U4QIxiKgbbmTakDVCHjW3tYynM1m047UAOtkbPJ5Y48bmHqqjfoziBfNGX30JZjMJUB5Y9vmby6zUqsHt+5ldCzmcrm/qv+UfgCUgULe/MFvuRSHGVbONOlFwzBKsddQ5VH5zjvs8LD3vwVwD3vnuDdo0l19AAAAAElFTkSuQmCC\")}.cjq-checkbox-disabled.cjq-checkbox-indeterminate>.cjq-checkbox>.cjq-checkbox-inner:after{background-color:#e0e0e0}.cjq-checkbox-disabled .cjq-checkbox-label{color:#ccc}.cjq-radio-group{display:inline-block;font-size:0}.cjq-radio-group>:not(.cjq-radio-wrap){font-size:14px;line-height:20px}.cjq-radio-wrap{cursor:pointer;display:inline-block;font-size:0;margin:0 24px 0 0;padding:0;vertical-align:middle}.cjq-radio-wrap:last-child{margin-right:0}.cjq-radio-wrap .cjq-radio{display:inline-block;line-height:1;margin:0;outline:none;padding:0;position:relative;vertical-align:middle;white-space:nowrap}.cjq-radio-wrap .cjq-radio>input{bottom:0;cursor:pointer;height:100%;left:0;margin:0;opacity:0;padding:0;position:absolute;right:0;top:0;width:100%;z-index:1}.cjq-radio-wrap .cjq-radio-label{display:inline;font-size:14px;line-height:20px;margin-left:8px;vertical-align:middle}.cjq-radio-wrap .cjq-radio-inner{background-color:#fff;border:1px solid #e0e0e0;border-radius:50%;box-sizing:border-box;display:inline-block;height:16px;left:0;position:relative;top:0;transition:all .1s;vertical-align:middle;width:16px}.cjq-radio-wrap .cjq-radio-inner:after{background-color:#fff;border-radius:50%;content:\" \";display:block;height:8px;left:3px;position:absolute;top:3px;transform:scale(0);transition:all .1s ease-in-out;width:8px}.cjq-radio-wrap.cjq-radio-checked>.cjq-radio>.cjq-radio-inner{border-color:#155bd4}.cjq-radio-wrap.cjq-radio-checked>.cjq-radio>.cjq-radio-inner:after{background-color:#155bd4;transform:scale(1)}.cjq-radio-wrap.cjq-radio-disabled{cursor:not-allowed}.cjq-radio-wrap.cjq-radio-disabled>.cjq-radio>.cjq-radio-inner,.cjq-radio-wrap.cjq-radio-disabled>.cjq-radio>.cjq-radio-inner:after{background-color:#f7f7f7}.cjq-radio-wrap.cjq-radio-disabled>.cjq-radio>input[type=radio]{pointer-events:none}.cjq-radio-wrap.cjq-radio-disabled.cjq-radio-checked>.cjq-radio>.cjq-radio-inner{border-color:#e0e0e0}.cjq-radio-wrap.cjq-radio-disabled.cjq-radio-checked>.cjq-radio>.cjq-radio-inner:after{background-color:#e0e0e0}.cjq-radio-wrap.cjq-radio-disabled .cjq-radio-label{color:#ccc}.cjq-radio-wrap:not(.cjq-radio-disabled):hover .cjq-radio-inner{border-color:#155bd4}.cjq-radio-button{border:1px solid #e0e0e0;box-sizing:border-box;color:#999;display:inline-block;font-size:14px;line-height:20px;padding:5px 10px;position:relative;text-align:center;transition:all .1s cubic-bezier(.17,.84,.44,.1)}.cjq-radio-button>input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;border:0;cursor:pointer;display:block;height:100%;left:0;margin:0;outline:none;padding:0;position:absolute;top:0;width:100%;z-index:1}.cjq-radio-button:not(:first-child){margin-left:-1px}.cjq-radio-button:first-child{border-radius:2px 0 0 2px}.cjq-radio-button:last-child{border-radius:0 2px 2px 0}.cjq-radio-button:hover:not(.cjq-radio-button--disabled){color:#155bd4}.cjq-radio-button--checked{background-color:#e6efff;border-color:#155bd4;color:#155bd4;z-index:1}.cjq-radio-button--disabled{background-color:#f7f7f7;color:#ccc;cursor:not-allowed}.cjq-radio-button--disabled>input[type=radio]{pointer-events:none}.cjq-radio-button--disabled.cjq-radio-button--checked{background-color:#e0e0e0;border-color:#e0e0e0;color:#ccc}.cjq-link{display:inline-block;font-size:14px;line-height:20px;text-decoration:none}.cjq-link,.cjq-link:focus,.cjq-link:link,.cjq-link:visited{color:#155bd4}.cjq-link:hover{color:#356fd4}.cjq-link:active{color:#114bae}.cjq-link--weak,.cjq-link--weak:focus,.cjq-link--weak:link,.cjq-link--weak:visited{color:#333}.cjq-link--weak:hover{color:#356fd4}.cjq-link--weak:active{color:#114bae}.cjq-link.cjq-link--disabled{color:#ccc;cursor:not-allowed}.cjq-badge{display:inline-block;position:relative;vertical-align:middle}.cjq-badge .cjq-badge-count{background-color:#d42f15;border:1px solid #fff;border-radius:40px;box-sizing:border-box;color:#fff;display:inline-block;font-size:12px;height:18px;line-height:16px;min-width:18px;padding:0 4px;text-align:center}.cjq-badge .cjq-badge-count-num{display:block;transform:scale(.83)}.cjq-badge .cjq-badge-dot{background-color:#d42f15;border:1px solid #fff;border-radius:50%;display:inline-block;font-size:0;height:8px;width:8px}.cjq-badge.cjq-badge--no-content{font-size:0}.cjq-badge.cjq-badge--no-content .cjq-badge-count{padding-bottom:1px;padding-top:1px}.cjq-badge.cjq-badge--no-content .cjq-badge-count,.cjq-badge.cjq-badge--no-content .cjq-badge-dot{border:0;margin:0 8px}.cjq-badge.cjq-badge--has-content .cjq-badge-count{position:absolute;right:-6px;top:-4px}.cjq-badge.cjq-badge--has-content .cjq-badge-dot{position:absolute;right:0;top:0}@-webkit-keyframes cjq-ani-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes cjq-ani-spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.cjq-switch{background-color:#999;border:1px solid #999;border-radius:100px;box-sizing:border-box;cursor:pointer;display:inline-block;height:22px;line-height:20px;position:relative;transition:all .16s cubic-bezier(.5,0,.5,.1);width:44px}.cjq-switch:after{background-color:#fff;border-radius:100%;content:\" \";cursor:pointer;height:18px;left:1px;position:absolute;top:1px;transition:left .16s cubic-bezier(.5,0,.5,.1);width:18px}.cjq-switch:focus{outline:0}.cjq-switch:focus:hover{box-shadow:none}.cjq-switch-large{border-radius:50px;height:50px;line-height:12px;width:90px}.cjq-switch-large:after{height:44px;left:2px;top:2px;width:44px}.cjq-switch-switch-large.cjq-switch-checked:after{left:42px}.cjq-switch-small{height:16px;width:28px}.cjq-switch-small:after{height:12px;left:1px;top:1px;width:12px}.cjq-switch-small.cjq-switch-checked:after{left:13px}.cjq-switch-checked{background-color:#155bd4;border-color:#155bd4}.cjq-switch-checked:after{left:23px}.cjq-switch-disabled{background-color:#ccc;border-color:#ccc;cursor:not-allowed}.cjq-switch-disabled.cjq-switch-checked{background-color:#94b4eb;border-color:#94b4eb}.cjq-switch-disabled:after{background-color:#fff;cursor:not-allowed}.cjq-switch-loading{color:transparent;cursor:not-allowed;position:relative}.cjq-switch-loading:after{cursor:not-allowed}.cjq-switch-loading:before{-webkit-animation:cjq-ani-spin 1s cubic-bezier(0,0,.1,.1);animation:cjq-ani-spin 1s cubic-bezier(0,0,.1,.1);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;border-color:#e6efff #e6efff #155bd4 #155bd4;border-radius:100%;border-style:solid;border-width:2px;box-sizing:border-box;content:\" \";height:14px;left:36%;margin:-5px 0 0 -12px;position:absolute;top:42%;width:14px;z-index:2}.cjq-switch-loading.cjq-switch-checked:before{margin:-5px 0 0 10px}.cjq-switch-loading.cjq-switch-small:before{border-width:1px;height:8px;margin:-3px 0 0 -6px;width:8px}.cjq-switch-loading.cjq-switch-small.cjq-switch-checked:before{margin:-3px 0 0 6px}.cjq-switch-loading.cjq-switch-large:before{margin:-5px 0 0 -17px}.cjq-switch-loading.cjq-switch-large.cjq-switch-checked:before{margin:-5px 0 0 23px}.cjq-tag{border:1px solid #fff;box-sizing:border-box;color:#fff;display:inline-block;font-size:12px;line-height:1;padding:2px 4px}.cjq-tag.cjq-tag-size-medium{font-size:14px}.cjq-tag.cjq-tag-size-large{font-size:14px;line-height:18px}.cjq-tag.cjq-tag-rounded{border-radius:2px}.cjq-tag.cjq-tag-closable .cjq-tag-content{display:inline-block;margin-right:4px}.cjq-tag.cjq-tag-closable .cjq-tag-close-btn{cursor:pointer;font-size:12px;transform:translate(2px)}.cjq-tag.cjq-tag-style-red{background-color:#d42f15;border-color:#d42f15}.cjq-tag.cjq-tag-style-red-outline{border-color:#d42f15;color:#d42f15}.cjq-tag.cjq-tag-style-green{background-color:#45a110;border-color:#45a110}.cjq-tag.cjq-tag-style-green-outline{border-color:#45a110;color:#45a110}.cjq-tag.cjq-tag-style-yellow{background-color:#ed6a18;border-color:#ed6a18}.cjq-tag.cjq-tag-style-yellow-outline{border-color:#ed6a18;color:#ed6a18}.cjq-tag.cjq-tag-style-blue{background-color:#155bd4;border-color:#155bd4}.cjq-tag.cjq-tag-style-blue-outline{border-color:#155bd4;color:#155bd4}.cjq-tag.cjq-tag-style-grey{background-color:#f7f7f7;border-color:#f7f7f7;color:#333}.cjq-tag.cjq-tag-style-grey-outline{border-color:#e0e0e0;color:#333}.cjq-tag.cjq-link-tag{padding:0 4px}.cjq-tag.cjq-link-tag .cjq-tag-content{align-items:center;display:flex}.cjq-tag.cjq-link-tag .cjq-link-tag-right-icon{color:#999;font-size:16px;margin-right:-4px}.cjq-tag.cjq-link-tag:hover{border-color:#155bd4;color:#155bd4;cursor:pointer}.cjq-tag.cjq-link-tag:hover .cjq-link-tag-right-icon{color:#155bd4}.cjq-tag.cjq-select-tag{cursor:pointer}.cjq-tag.cjq-select-tag.cjq-select-tag-selected{background-color:#e6efff;border-color:#e6efff;color:#155bd4}.cjq-tag a{color:inherit}";
  styleInject(css_248z);

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2018 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames() {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg)) {
  				if (arg.length) {
  					var inner = classNames.apply(null, arg);
  					if (inner) {
  						classes.push(inner);
  					}
  				}
  			} else if (argType === 'object') {
  				if (arg.toString === Object.prototype.toString) {
  					for (var key in arg) {
  						if (hasOwn.call(arg, key) && arg[key]) {
  							classes.push(key);
  						}
  					}
  				} else {
  					classes.push(arg.toString());
  				}
  			}
  		}

  		return classes.join(' ');
  	}

  	if (module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  const DisabledContext = React.createContext({
      value: false
  });
  DisabledContext.displayName = 'DisabledContext';

  const Icon = React.forwardRef(({ className, type, spin, ...otherProps }, ref) => (React__default["default"].createElement("i", { ref: ref, className: classnames('cjqicon', `cjqicon-${type}`, className, { 'cjqicon-loading': spin }), ...otherProps })));

  function ButtonDirective(props) {
      const disabledContext = React.useContext(DisabledContext);
      const { outline, type = 'default', size = 'medium', block, loading, disabled = disabledContext.value, bordered = true, icon, children } = props;
      if (!reactIs.isElement(children) || reactIs.isFragment(children)) {
          throw new Error('Button Directive child must be a non fragment element, string | number | boolean | null is not accepted');
      }
      const disabledRef = React.useRef(disabled);
      disabledRef.current = disabled;
      const propsRef = React.useRef(props);
      propsRef.current = props;
      const childElement = children;
      const onClick = React.useCallback((e) => {
          const { loading, children } = propsRef.current;
          const { onClick } = children.props;
          const disabled = disabledRef.current;
          if (loading || disabled) {
              e.preventDefault();
              return;
          }
          onClick?.(e);
      }, []);
      const iconNode = icon ? React__default["default"].createElement(Icon, { type: icon }) : null;
      // icon text 或者 outline 为false 不需要outline
      const needOutline = type !== 'text' && type !== 'icon' && outline;
      const className = classnames({
          'cjq-btn-block': block,
          'cjq-btn-loading': loading,
          'cjq-btn-disabld': disabled,
          'cjq-btn-border-transparent': !bordered,
          [`cjq-btn-${size}`]: size !== 'medium',
          [`cjq-btn-${type}${needOutline ? '-outline' : ''}`]: type !== 'default'
      }, 'cjq-btn', children.props.className);
      const commonChildren = React.cloneElement(children, {
          className,
          disabled: !!(disabled || loading),
          onClick,
      }, iconNode, ...(React.Children.map(childElement.props.children, child => typeof child === 'string' ? React__default["default"].createElement("span", null, child) : child) || []));
      return commonChildren;
  }

  class Button extends React.Component {
      static defaultProps = {
          type: 'default',
          size: 'medium',
          htmlType: 'button',
          bordered: true,
      };
      static Directive = ButtonDirective;
      render() {
          const { href, target, htmlType, type, size, block, disabled, loading, outline, bordered, icon, children, download, ...props } = this.props;
          return (React__default["default"].createElement(ButtonDirective, { type: type, size: size, block: block, disabled: disabled, loading: loading, outline: outline, bordered: bordered, icon: icon }, href || target ? (React__default["default"].createElement("a", { href: href || '', target: target, download: download, ...props }, children)) : (React__default["default"].createElement("button", { type: htmlType, ...props }, children))));
      }
  }

  var GroupContext = React.createContext(null);

  // 获取宽度
  function getWidth(width) {
      if (typeof width === 'string' || typeof width === 'number') {
          return { width };
      }
      return {};
  }

  const shallowEqual = (newValue, oldValue) => newValue === oldValue;
  const simpleIsEqual = (newArgs, lastArgs) => (newArgs.length === lastArgs.length &&
      newArgs.every((newArg, index) => shallowEqual(newArg, lastArgs[index])));
  function memoize (resultFn, isEqual = simpleIsEqual) {
      let lastThis;
      let lastArgs = [];
      let lastResult;
      let calledOnce = false;
      const result = function (...newArgs) {
          if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
              return lastResult;
          }
          lastResult = resultFn.apply(this, newArgs);
          calledOnce = true;
          lastThis = this;
          lastArgs = newArgs;
          return lastResult;
      };
      return result;
  }

  const GroupContextProvider = GroupContext.Provider;
  class CheckboxGroup extends React.Component {
      static defaultProps = {
          isValueEqual: Object.is,
          value: [],
      };
      static contextType = DisabledContext;
      getGroupContext = memoize((maybeValue, disabled, readOnly, isValueEqual) => {
          let value;
          if (Array.isArray(maybeValue)) {
              value = maybeValue;
          }
          else {
              value = [];
          }
          return {
              value,
              disabled,
              readOnly,
              isValueEqual,
              onChange: this.onCheckboxChange,
          };
      });
      onCheckboxChange = (child) => {
          const { isValueEqual, onChange, value: prevValue } = this.props;
          if (!onChange) {
              return;
          }
          const value = prevValue ? prevValue.slice() : [];
          const index = value.findIndex(it => isValueEqual(it, child));
          if (index !== -1) {
              value.splice(index, 1);
          }
          else {
              value.push(child);
          }
          onChange(value);
      };
      render() {
          const { className, style, children, value, disabled = this.context.value, readOnly = false, isValueEqual, } = this.props;
          const classString = classnames('cjq-checkbox-group', className);
          return (React__default["default"].createElement(GroupContextProvider, { value: this.getGroupContext(value, disabled, readOnly, isValueEqual) },
              React__default["default"].createElement("div", { className: classString, style: style }, children)));
      }
  }

  function getReadOnly$1(groupCtx, props) {
      if (typeof props.readOnly === 'boolean') {
          return props.readOnly;
      }
      if (groupCtx) {
          return groupCtx.readOnly;
      }
      return false;
  }
  function getDisabled$1(disabledCtx, groupCtx, props) {
      if (typeof props.disabled === 'boolean') {
          return props.disabled;
      }
      if (groupCtx) {
          return groupCtx.disabled;
      }
      return disabledCtx.value;
  }
  function Checkbox(props) {
      const disabledCtx = React.useContext(DisabledContext);
      const groupCtx = React.useContext(GroupContext);
      const propsRef = React.useRef(props);
      propsRef.current = props;
      // onChange的值矫正
      const ctxOnChange = groupCtx && groupCtx.onChange;
      const onChange = React.useCallback(evt => {
          const { value, onChange } = propsRef.current;
          if (ctxOnChange) {
              ctxOnChange(value);
              return;
          }
          else if (onChange) {
              const e = Object.create(evt);
              e.target = {
                  ...propsRef.current,
                  type: 'checkbox',
                  checked: evt.target.checked,
              };
              onChange(e);
          }
      }, [ctxOnChange]);
      const { className, style, children, indeterminate, width, value: _propsValue, labelStyle, onMouseEnter, onMouseLeave, ...others } = props;
      // readOnly的值矫正
      const readOnly = getReadOnly$1(groupCtx, props);
      // disabled的值矫正
      const disabled = getDisabled$1(disabledCtx, groupCtx, props);
      // checked的值矫正
      let checked;
      if (groupCtx) {
          const { value, isValueEqual } = groupCtx;
          checked = value.findIndex(it => isValueEqual(it, _propsValue)) !== -1;
      }
      else {
          checked = !!props.checked;
      }
      return (React__default["default"].createElement("label", { className: classnames('cjq-checkbox-wrap', className, {
              'cjq-checkbox-checked': !!checked,
              'cjq-checkbox-disabled': disabled || readOnly,
              'cjq-checkbox-indeterminate': indeterminate,
          }), style: {
              ...style,
              ...getWidth(width),
          }, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
          React__default["default"].createElement("span", { className: 'cjq-checkbox' },
              React__default["default"].createElement("span", { className: 'cjq-checkbox-inner' }),
              React__default["default"].createElement("input", { ...others, type: "checkbox", checked: checked && !indeterminate, disabled: disabled, readOnly: readOnly, onChange: onChange })),
          children !== undefined &&
              children !== null &&
              children !== true &&
              children !== false ? (React__default["default"].createElement("div", { className: "cjq-checkbox-label", style: labelStyle }, children)) : null));
  }
  Checkbox.Group = CheckboxGroup;

  function makeEvent(event, props) {
      const e = Object.create(event);
      e.target = {
          ...props,
          type: 'radio',
          checked: event.target.checked
      };
      return e;
  }
  function useRadioHandler(ctx, props) {
      const propsRef = React.useRef(props);
      propsRef.current = props;
      const cxOnChange = ctx && ctx.onRadioChange;
      return React.useCallback((event) => {
          const e = makeEvent(event, propsRef.current);
          if (cxOnChange) {
              cxOnChange(e);
          }
          else {
              const { onChange } = propsRef.current;
              onChange && onChange(e);
          }
      }, [cxOnChange]);
  }
  function getDisabled(disabledCtx, groupCtx, props) {
      if (typeof props.disabled === 'boolean') {
          return props.disabled;
      }
      if (groupCtx && typeof groupCtx.disabled === 'boolean') {
          return groupCtx.disabled;
      }
      return disabledCtx.value;
  }
  function getReadOnly(groupCtx, props) {
      if (typeof props.readOnly === 'boolean') {
          return props.readOnly;
      }
      if (groupCtx) {
          return groupCtx.readOnly;
      }
      return false;
  }
  function getRadioState(disabledCtx, groupCtx, props) {
      const disabled = getDisabled(disabledCtx, groupCtx, props);
      const readOnly = getReadOnly(groupCtx, props);
      let checked;
      if (groupCtx) {
          checked = groupCtx.isValueEqual(groupCtx.value, props.value);
      }
      else {
          checked = !!props.checked;
      }
      return {
          disabled,
          readOnly,
          checked,
      };
  }

  const context = React.createContext(null);
  context.displayName = 'RadioGroupContext';

  function RadioGroup(props) {
      const disabledCtx = React.useContext(DisabledContext);
      const { value, disabled = disabledCtx.value, readOnly = false, isValueEqual = Object.is, className, style, children, onChange, } = props;
      const ctx = React.useMemo(() => ({
          value,
          disabled,
          readOnly,
          isValueEqual,
          onRadioChange: onChange
      }), [value, disabled, readOnly, isValueEqual, onChange]);
      return (React__default["default"].createElement(context.Provider, { value: ctx },
          React__default["default"].createElement("div", { className: classnames('cjq-radio-group', className), style: style }, children)));
  }

  function RadioButton(props) {
      const { className, style, children, value, width, onMouseEnter, onMouseLeave, ...others } = props;
      const disabledCtx = React.useContext(DisabledContext);
      const groupCtx = React.useContext(context);
      if (!groupCtx) {
          throw new Error('Radio.Button must be nested within Radio.Group');
      }
      const onChange = useRadioHandler(groupCtx, props);
      const { checked, disabled, readOnly } = getRadioState(disabledCtx, groupCtx, props);
      const classString = classnames(className, 'cjq-radio-button', {
          'cjq-radio-button--checked': !!checked,
          'cjq-radio-button--disabled': disabled || readOnly,
      });
      const widthStyle = getWidth(width);
      const wrapStyle = {
          ...style,
          ...widthStyle
      };
      return (React__default["default"].createElement("label", { className: classString, style: wrapStyle, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
          React__default["default"].createElement("input", { ...others, type: 'radio', checked: !!checked, disabled: disabled, readOnly: readOnly, onChange: onChange }),
          React__default["default"].createElement("span", { className: "cjq-radio-button__content" }, children)));
  }

  function Radio(props) {
      const { className, style, children, value, width, labelStyle, onMouseEnter, onMouseLeave, ...others } = props;
      const disabledCtx = React.useContext(DisabledContext);
      const groupCtx = React.useContext(context);
      const { checked, disabled, readOnly } = getRadioState(disabledCtx, groupCtx, props);
      const onChange = useRadioHandler(groupCtx, props);
      const classString = classnames(className, 'cjq-radio-wrap', {
          'cjq-radio-checked': !!checked,
          'cjq-radio-disabled': disabled || readOnly,
      });
      const widthStyle = getWidth(width);
      const wrapStyle = {
          ...style,
          ...widthStyle,
      };
      return (React__default["default"].createElement("label", { className: classString, style: wrapStyle, onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave },
          React__default["default"].createElement("span", { className: 'cjq-radio' },
              React__default["default"].createElement("span", { className: 'cjq-radio-inner' }),
              React__default["default"].createElement("input", { ...others, type: 'radio', checked: !!checked, disabled: disabled, readOnly: readOnly, onChange: onChange })),
          children !== undefined && (React__default["default"].createElement("span", { className: 'cjq-radio-label', style: labelStyle }, children))));
  }
  Radio.Button = RadioButton;
  Radio.Group = RadioGroup;

  // 阻止默认事件
  function preventOpenLink(event) {
      event.preventDefault();
      event.stopPropagation();
  }
  const Link = React.forwardRef((props, ref) => {
      const disabledContext = React.useContext(DisabledContext);
      const { className, disabled = disabledContext.value, weak = false, onClick, ...rest } = props;
      return (React__default["default"].createElement("a", { ...rest, className: classnames(className, 'cjq-link', {
              'cjq-link--disabled': disabled,
              'cjq-link--weak': weak,
          }), ref: ref, onClick: disabled ? preventOpenLink : onClick }));
  });
  Link.displayName = 'Link';

  const NO_STYLE = {};
  class Badge extends React.PureComponent {
      static defaultProps = {
          count: 0,
          maxCount: 99,
          dot: false,
          showZero: false,
      };
      renderCount = () => {
          const { count, maxCount, dot, showZero, offset, style } = this.props;
          const posStyle = Array.isArray(offset) && offset.length === 2
              ? {
                  right: offset[0],
                  top: offset[1],
              }
              : NO_STYLE;
          const badgeStyle = style ? { ...style, ...posStyle } : posStyle;
          if (dot) {
              return (React__default["default"].createElement("span", { className: 'cjq-badge-dot', style: badgeStyle }));
          }
          else if (count > 0 || (count === 0 && showZero)) {
              return (React__default["default"].createElement("span", { className: 'cjq-badge-count', style: badgeStyle },
                  React__default["default"].createElement("span", { className: 'cjq-badge-count-num' }, count > maxCount ? `${maxCount}+` : count)));
          }
          return null;
      };
      render() {
          const { className, children } = this.props;
          const containerCls = classnames('cjq-badge', {
              'cjq-badge--has-content': children,
              'cjq-badge--no-content': !children,
              // For compatibility only
              'cjq-badge-none-cont': !children,
          }, className);
          return (React__default["default"].createElement("div", { className: containerCls },
              children ? React__default["default"].createElement("div", { className: 'cjq-badge-content' }, children) : null,
              this.renderCount()));
      }
  }

  class Switch extends React.Component {
      static defaultProps = {
          size: 'default',
      };
      static contextType = DisabledContext;
      // 处理点击事件，直接执行外部onChange方法
      toggle = () => {
          const { onChange, checked } = this.props;
          onChange && onChange(!checked);
      };
      render() {
          const { className, size, disabled = this.context.value, loading, checked, } = this.props;
          const switchDisabled = disabled || loading;
          const classNames = classnames({
              [`cjq-switch-${size}`]: size !== 'default',
              'cjq-switch-disabled': switchDisabled,
              'cjq-switch-loading': loading,
              'cjq-switch-checked': checked,
          }, 'cjq-switch', className);
          return (React__default["default"].createElement("div", { className: classNames, onClick: switchDisabled ? undefined : this.toggle }));
      }
  }

  const PRESET_COLOR = {
      red: true,
      green: true,
      yellow: true,
      blue: true,
      grey: true,
  };
  const Tag = React.forwardRef(({ size = 'small', theme = 'grey', outline, rounded = true, closable, children, className, onClose, closeButtonStyle, visible = true, ...rest }, ref) => {
      if (!visible) {
          return null;
      }
      const colorPart = PRESET_COLOR[theme] ? `-${theme}` : '';
      const outlinePart = outline ? '-outline' : '';
      const classnames$1 = classnames('cjq-tag', `cjq-tag-style${colorPart}${outlinePart}`, `cjq-tag-size-${size}`, className, {
          'cjq-tag-rounded': rounded,
          'cjq-tag-closable': closable,
      });
      return (React__default["default"].createElement("div", { ref: ref, className: classnames$1, ...rest },
          React__default["default"].createElement("div", { className: 'cjq-tag-content' }, children),
          closable ? (React__default["default"].createElement(Icon, { type: "closed", className: "cjq-tag-close-btn", onClick: onClose, style: closeButtonStyle })) : null));
  });
  Tag.displayName = 'Tag';

  const LinkTag = React.forwardRef(({ className, children, linkIconStyle, ...rest }, ref) => {
      return (React__default["default"].createElement(Tag, { className: `cjq-link-tag ${className}`, ref: ref, outline: true, ...rest },
          React__default["default"].createElement("div", { className: "cjq-link-tag-content" }, children),
          React__default["default"].createElement(Icon, { type: "arrow-right", className: "cjq-link-tag-right-icon", style: linkIconStyle })));
  });
  LinkTag.displayName = 'LinkTag';

  const SelectTag = React.forwardRef(({ className, children, selected, onChange, ...rest }, ref) => {
      const handleClick = (_e) => {
          onChange?.(!selected);
      };
      const classNames = classnames('cjq-select-tag', className, {
          'cjq-select-tag-selected': selected,
      });
      return (React__default["default"].createElement(Tag, { className: classNames, ref: ref, onClick: handleClick, outline: true, ...rest }, children));
  });
  SelectTag.displayName = 'SelectTag';

  exports.Badge = Badge;
  exports.Button = Button;
  exports.Checkbox = Checkbox;
  exports.DisabledContext = DisabledContext;
  exports.Icon = Icon;
  exports.Link = Link;
  exports.LinkTag = LinkTag;
  exports.Radio = Radio;
  exports.SelectTag = SelectTag;
  exports.Switch = Switch;
  exports.Tag = Tag;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
