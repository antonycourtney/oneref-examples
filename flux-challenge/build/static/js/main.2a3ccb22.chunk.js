(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){t.exports=n(24)},17:function(t,e,n){"use strict";var r,i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function s(t){try{u(r.next(t))}catch(e){a(e)}}function o(t){try{u(r.throw(t))}catch(e){a(e)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,o)}u((r=r.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},s=this&&this.__await||function(t){return this instanceof s?(this.v=t,this):new s(t)},o=this&&this.__asyncGenerator||function(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,i=n.apply(t,e||[]),a=[];return r={},o("next"),o("throw"),o("return"),r[Symbol.asyncIterator]=function(){return this},r;function o(t){i[t]&&(r[t]=function(e){return new Promise(function(n,r){a.push([t,e,n,r])>1||u(t,e)})})}function u(t,e){try{(n=i[t](e)).value instanceof s?Promise.resolve(n.value.v).then(c,l):f(a[0][2],n)}catch(r){f(a[0][3],r)}var n}function c(t){u("next",t)}function l(t){u("throw",t)}function f(t,e){t(e),a.shift(),a.length&&u(a[0][0],a[0][1])}},u=this&&this.__asyncValues||function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"===typeof __values?__values(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,i,(e=t[n](e)).done,e.value)})}}};Object.defineProperty(e,"__esModule",{value:!0}),function(t){t.publisherAsyncIterable=function(t){return o(this,arguments,function(){var e,n,r,i;return a(this,function(a){switch(a.label){case 0:e=null,n=[],(r=function(){n.push(new Promise(function(t,n){e=t}))})(),t(function(t){e(t),r()}),a.label=1;case 1:return[4,s(n.shift())];case 2:return i=a.sent(),[4,s(i)];case 3:return[4,a.sent()];case 4:return a.sent(),[3,1];case 5:return[2]}})})},t.aiMap=function(t,e){return o(this,arguments,function(){var n,r,i,o,c,l;return a(this,function(a){switch(a.label){case 0:a.trys.push([0,7,8,13]),i=u(t),a.label=1;case 1:return[4,s(i.next())];case 2:return(o=a.sent()).done?[3,6]:(c=o.value,[4,s(e(c))]);case 3:return[4,a.sent()];case 4:a.sent(),a.label=5;case 5:return[3,1];case 6:return[3,13];case 7:return l=a.sent(),n={error:l},[3,13];case 8:return a.trys.push([8,,11,12]),o&&!o.done&&(r=i.return)?[4,s(r.call(i))]:[3,10];case 9:a.sent(),a.label=10;case 10:return[3,12];case 11:if(n)throw n.error;return[7];case 12:return[7];case 13:return[2]}})})},t.delay=function(t){return i(this,void 0,void 0,function(){return a(this,function(e){return[2,new Promise(function(e,n){setTimeout(e,t)})]})})}}(r||(r={})),e.utils=r},24:function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r),a=n(3),s=n(12),o=n.n(s),u=function(t){var e=t.currentPlanet,n=e?"Obi-Wan currently on ".concat(e.name):"...";return i.a.createElement("h1",{className:"css-planet-monitor"},n)},c=function(t){var e=t.currentPlanet,n=t.sithRow,r=n?n.info:null,a=r?r.name:n?"...":null,s=r&&r.homeworld?"Homeworld: ".concat(r.homeworld.name):"",o=r&&r.homeworld&&e&&r.homeworld.id===e.id?{color:"red"}:{};return i.a.createElement("li",{className:"css-slot",style:o},i.a.createElement("h3",null,a),i.a.createElement("h6",null,s))},l=n(2),f=n.n(l),h=n(6),p=n(9),d=n(13),v=n(4),b=n(7),y=n(5),m=n(8),w=n(1),S={id:-1,name:""},k=function(t){function e(){return Object(v.a)(this,e),Object(b.a)(this,Object(y.a)(e).apply(this,arguments))}return Object(m.a)(e,t),e}(w.a(S)),x={id:-1,name:"",homeworld:null,masterId:-1,apprenticeId:-1},g=function(t){function e(){return Object(v.a)(this,e),Object(b.a)(this,Object(y.a)(e).apply(this,arguments))}return Object(m.a)(e,t),e}(w.a(x)),j={id:-1,info:null,request:null},O=function(t){function e(){return Object(v.a)(this,e),Object(b.a)(this,Object(y.a)(e).apply(this,arguments))}return Object(m.a)(e,t),e}(w.a(j)),L=function(t){return"http://localhost:3000/dark-jedis/".concat(t)},_=function(){var t=Object(p.a)(f.a.mark(function t(e,n){var r,i,s,o;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.awaitableUpdate)(n,function(t){var n=new k(e);return t.set("obiWanLocation",n).checkMatchingSith()});case 2:r=t.sent,i=Object(h.a)(r,2),s=i[0],o=i[1],I(o),s.matchingSith()||q(s,n);case 8:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),E=function(){var t=Object(p.a)(f.a.mark(function t(e,n){var r,i,a,s,o,u;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:r=!0,i=!1,t.prev=2,s=Object(d.a)(e);case 4:return t.next=6,s.next();case 6:return o=t.sent,r=o.done,t.next=10,o.value;case 10:if(u=t.sent,r){t.next=17;break}_(u,n);case 14:r=!0,t.next=4;break;case 17:t.next=23;break;case 19:t.prev=19,t.t0=t.catch(2),i=!0,a=t.t0;case 23:if(t.prev=23,t.prev=24,r||null==s.return){t.next=28;break}return t.next=28,s.return();case 28:if(t.prev=28,!i){t.next=31;break}throw a;case 31:return t.finish(28);case 32:return t.finish(23);case 33:case"end":return t.stop()}},t,this,[[2,19,23,33],[24,,28,32]])}));return function(e,n){return t.apply(this,arguments)}}(),I=function(t){t.length>0&&(console.log("cancelling ",t.length," pending requests"),t.forEach(function(t){return t.abort()}))};function P(){return(P=Object(p.a)(f.a.mark(function t(e,n,r){var i,s,o,u,c,l;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(L(e.toString()),{signal:n});case 3:return i=t.sent,t.next=6,i.json();case 6:return s=t.sent,t.next=9,Object(a.awaitableUpdate)(r,function(t){return t.updateSithStatus(s)});case 9:o=t.sent,u=Object(h.a)(o,2),c=u[0],l=u[1],I(l),q(c,r),t.next=20;break;case 17:t.prev=17,t.t0=t.catch(0),console.log("caught abort fetching sith status for id ",e," (ignored)");case 20:case"end":return t.stop()}},t,this,[[0,17]])}))).apply(this,arguments)}function R(t,e,n){var r=new AbortController,i=r.signal;Object(a.update)(n,function(n){return n.addPendingRequest(t,e,r)}),function(t,e,n){P.apply(this,arguments)}(e,i,n)}function q(t,e){var n=t.lastKnownSith();t.needsApprentice(n)&&R(!0,n.info.apprenticeId,e);var r=t.firstKnownSith();t.needsMaster(r)&&R(!1,r.info.masterId,e)}var N=function(){var t=Object(p.a)(f.a.mark(function t(e,n){var r,i,s;return f.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(a.awaitableUpdate)(n,function(t){return t.scrollAdjust(e)});case 2:r=t.sent,i=Object(h.a)(r,2),s=i[0],i[1],q(s,n);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}(),A=n(10),C=n.n(A),W=function(t){var e=t.appState,n=t.stateRef,r=e.sithList.take(5),a=e.obiWanLocation,s=r.map(function(t,e){return i.a.createElement(c,{sithRow:t,currentPlanet:a,key:e})}),o=!e.canScrollUp(),u=!e.canScrollDown(),l=C()("css-button-up",{"css-button-disabled":o}),f=C()("css-button-down",{"css-button-disabled":u});return i.a.createElement("section",{className:"css-scrollable-list"},i.a.createElement("ul",{className:"css-slots"},s),i.a.createElement("div",{className:"css-scroll-buttons"},i.a.createElement("button",{className:l,disabled:o,onClick:function(t){t.preventDefault(),N(-2,n)}}),i.a.createElement("button",{className:f,disabled:u,onClick:function(t){t.preventDefault(),N(2,n)}})))},M=function(t){var e=t.appState,n=t.stateRef;return i.a.createElement("div",{className:"app-container"},i.a.createElement("div",{className:"css-root"},i.a.createElement(u,{currentPlanet:e.obiWanLocation}),i.a.createElement(W,{appState:e,stateRef:n})))},K=n(14),T={obiWanLocation:null,sithList:w.b(null,5).toList()},U=function(t){return null!==t&&null!==t.request},J=function(t){function e(){return Object(v.a)(this,e),Object(b.a)(this,Object(y.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(K.a)(e,[{key:"updateSithStatus",value:function(t){var e=this.sithList.findIndex(function(e){return null!==e&&e.id===t.id});if(-1===e)return[this,[]];var n=new g({id:t.id,name:t.name,homeworld:new k(t.homeworld),masterId:null!==t.master&&null!==t.master.id?t.master.id:-1,apprenticeId:null!==t.apprentice&&t.apprentice.id?t.apprentice.id:-1}),r=this.sithList.get(e).set("info",n).set("request",null),i=this.sithList.set(e,r);return this.set("sithList",i).checkMatchingSith()}},{key:"lastKnownSith",value:function(){var t=this.sithList.findLastIndex(function(t){return null!==t&&null!==t.info});return-1===t?null:{index:t,info:this.sithList.get(t).info}}},{key:"firstKnownSith",value:function(){var t=this.sithList.findIndex(function(t){return null!==t&&null!==t.info});return-1===t?null:{index:t,info:this.sithList.get(t).info}}},{key:"needsApprentice",value:function(t){return!!t&&(-1!==t.info.apprenticeId&&t.index+1<5&&this.emptyRow(t.index+1))}},{key:"needsMaster",value:function(t){return!!t&&(-1!==t.info.masterId&&t.index>0&&this.emptyRow(t.index-1))}},{key:"canScrollDown",value:function(){var t=this.lastKnownSith();return t&&null!==t.info.apprenticeId&&this.bottomEmptyCount()<3&&!this.matchingSith()}},{key:"canScrollUp",value:function(){var t=this.firstKnownSith();return t&&null!==t.info.masterId&&this.topEmptyCount()<3&&!this.matchingSith()}},{key:"addPendingRequest",value:function(t,e,n){var r;if(t)r=this.sithList.findLastIndex(function(t){return null!==t&&null!==t.info})+1;else if((r=this.sithList.findIndex(function(t){return null!==t&&null!==t.info})-1)<0)return console.error("addPendingRequest: request to prepend before index 0 -- dropping",e),this;var i=new O({id:e,request:n}),a=this.sithList.set(r,i);return this.set("sithList",a)}},{key:"emptyRow",value:function(t){return!this.sithList.get(t)}},{key:"topEmptyCount",value:function(){return this.sithList.takeWhile(function(t){return null===t}).count()}},{key:"bottomEmptyCount",value:function(){return this.sithList.reverse().takeWhile(function(t){return null===t}).count()}},{key:"matchingSith",value:function(){var t=this;return this.sithList.some(function(e){return null!==e&&null!==e.info&&e.info.homeworld.id===t.obiWanLocation.id})}},{key:"pendingRows",value:function(){var t=this.sithList.filter(U);return t}},{key:"clearPendingRequests",value:function(){var t=this.pendingRows().map(function(t){return t.request}),e=this.sithList.map(function(t){return U(t)?null:t}),n=this.set("sithList",e);return t.count()>0&&console.log("clearPendingRequests: ",n.toJS(),t.toJS()),[n,t.toArray()]}},{key:"checkMatchingSith",value:function(){var t=this.matchingSith()?this.clearPendingRequests():[this,[]],e=Object(h.a)(t,2);return[e[0],e[1]]}},{key:"scrollAdjust",value:function(t){var e,n,r=-1*t;if(r>=0){var i=w.b(null,r).toList();n=this.sithList.takeLast(r),e=i.concat(this.sithList).take(5)}else{n=this.sithList.take(t),e=this.sithList.slice(t).concat(w.b(null,t).toList())}var a=n.filter(function(t){return null!==t&&null!==t.request}).map(function(t){return t.request}).toArray();return[this.set("sithList",e),a]}}]),e}(w.a(T)),D=function(t){new WebSocket("ws://localhost:4000").onmessage=function(e){var n=JSON.parse(e.data);t(n)}},G=new J,V=Object(a.appContainer)(G,M,function(t,e){var n=a.utils.publisherAsyncIterable(D);E(n,e),R(!0,3616,e)});o.a.render(i.a.createElement(V,null),document.getElementById("app"))},3:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},i=this&&this.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(i,a){function s(t){try{u(r.next(t))}catch(e){a(e)}}function o(t){try{u(r.throw(t))}catch(e){a(e)}}function u(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,o)}u((r=r.apply(t,e||[])).next())})},a=this&&this.__generator||function(t,e){var n,r,i,a,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"===typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,r=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){s.label=a[1];break}if(6===a[0]&&s.label<i[1]){s.label=i[1],i=a;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(a);break}i[2]&&s.ops.pop(),s.trys.pop();continue}a=e.call(t,s)}catch(o){a=[6,o],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}},s=this&&this.__asyncValues||function(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t="function"===typeof __values?__values(t):t[Symbol.iterator](),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise(function(r,i){(function(t,e,n,r){Promise.resolve(r).then(function(e){t({value:e,done:n})},e)})(r,i,(e=t[n](e)).done,e.value)})}}},o=this&&this.__read||function(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,a=n.call(t),s=[];try{for(;(void 0===e||e-- >0)&&!(r=a.next()).done;)s.push(r.value)}catch(o){i={error:o}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return s};Object.defineProperty(e,"__esModule",{value:!0});var u=n(0);function c(t,e){t(function(t){return{appState:e(t.appState),resolvers:t.resolvers}})}e.update=c,e.awaitableUpdate=function(t,e){return i(this,void 0,void 0,function(){return a(this,function(n){return[2,new Promise(function(n,r){t(function(t){var r=o(e(t.appState),2),i=r[0],a=r[1],s=t.resolvers;return s.push(function(t){return n([i,a])}),{appState:i,resolvers:s}})})]})})},e.appContainer=function(t,e,n,l){return function(f){var h=o(u.useState({appState:t,resolvers:[]}),2),p=h[0],d=h[1];return u.useEffect(function(){if(n){var t=n(p.appState,d);"undefined"!==typeof t&&function(t,e){var n,r;i(this,void 0,void 0,function(){var i,o,u,c;return a(this,function(a){switch(a.label){case 0:a.trys.push([0,5,6,11]),n=s(e),a.label=1;case 1:return[4,n.next()];case 2:if((r=a.sent()).done)return[3,4];u=r.value,t(u),a.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return c=a.sent(),i={error:c},[3,11];case 6:return a.trys.push([6,,9,10]),r&&!r.done&&(o=n.return)?[4,o.call(n)]:[3,8];case 7:a.sent(),a.label=8;case 8:return[3,10];case 9:if(i)throw i.error;return[7];case 10:return[7];case 11:return[2]}})})}(function(t){return c(d,t)},t)}},[]),u.useEffect(function(){var t;for(l&&l(p.appState,d);void 0!==(t=p.resolvers.shift());)t(p.appState)}),u.createElement(e,r({},f,{appState:p.appState,stateRef:d}))}},e.focus=function(t,e){return function(n,r){return[t(n),function(n){r(function(r){var i=r.appState,a=r.resolvers,s={appState:t(i),resolvers:[]},o=n(s),u=o.resolvers.map(function(e){return function(n){return e(t(n))}});return{appState:e(i,o.appState),resolvers:a.concat(u)}})}]}};var l=n(17);e.utils=l.utils}},[[15,1,2]]]);
//# sourceMappingURL=main.2a3ccb22.chunk.js.map