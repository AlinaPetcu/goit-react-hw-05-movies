"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[853],{713:function(r,t,e){e.d(t,{Jh:function(){return v},_L:function(){return o},_r:function(){return h},s_:function(){return f},z1:function(){return p}});var n=e(861),a=e(687),c=e.n(a),u=e(8),s="33c0e8d86ed5af0d833de610364d7060",i="https://api.themoviedb.org/3",o=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/popular"),{params:{api_key:s}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/search/movie"),{params:{api_key:s,query:t}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t),{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data);case 7:throw r.prev=7,r.t0=r.catch(0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/credits"),{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data.cast);case 7:throw r.prev=7,r.t0=r.catch(0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(t){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,u.Z.get("".concat(i,"/movie/").concat(t,"/reviews"),{params:{api_key:s}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),r.t0;case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(t){return r.apply(this,arguments)}}()},853:function(r,t,e){e.r(t),e.d(t,{default:function(){return h}});var n=e(861),a=e(439),c=e(687),u=e.n(c),s=e(689),i=e(713),o=e(791),p=e(696),f="Reviews_detailsContainer__FRDfo",v=e(184),h=function(){var r=(0,o.useState)([]),t=(0,a.Z)(r,2),e=t[0],c=t[1],h=(0,o.useState)(null),l=(0,a.Z)(h,2),d=l[0],w=l[1],m=(0,o.useState)(!0),x=(0,a.Z)(m,2),k=x[0],_=x[1],Z=(0,s.UO)().movieId;return(0,o.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,i._r)(Z);case 3:t=r.sent,c(t||[]),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),w("Oops...something went wrong!");case 10:return r.prev=10,_(!1),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,7,10,13]])})));return function(){return r.apply(this,arguments)}}();r()}),[Z]),k?(0,v.jsx)("div",{children:(0,v.jsx)(p.Z,{})}):d?(0,v.jsx)("div",{children:d}):(0,v.jsx)("div",{children:(0,v.jsx)("ul",{className:f,children:Array.isArray(e)&&e.length>0?e.map((function(r){return(0,v.jsxs)("li",{children:[(0,v.jsxs)("p",{children:["Author: ",r.author]}),(0,v.jsxs)("p",{children:["Content: ",r.content]})]},r.id)})):(0,v.jsx)("p",{children:"No reviews available."})})})}}}]);
//# sourceMappingURL=853.7794177c.chunk.js.map