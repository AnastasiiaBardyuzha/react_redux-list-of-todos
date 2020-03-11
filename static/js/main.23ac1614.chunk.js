(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{12:function(e,t,a){},14:function(e,t,a){e.exports=a(26)},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),c=a.n(o),s=a(6),l=a(2),u=a(5),i={todos:[],isLoading:!1,isLoaded:!1,selectedSort:"choose"};var d=Object(u.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_IS_LOADING":return Object(l.a)({},e,{isLoading:t.isLoading});case"SET_IS_LOADED":return Object(l.a)({},e,{isLoaded:t.isLoaded});case"SET_TODOS":return Object(l.a)({},e,{todos:t.todos});case"SET_SELECTED_SORT":return Object(l.a)({},e,{selectedSort:t.selectedSort});default:return e}}),i),m=a(10),p=a(1),E=a.n(p),f=a(3),b=(a(12),function(e){var t=e.todo,a=t.user,n=t.title,o=t.completed;return r.a.createElement("tr",null,a&&r.a.createElement("td",{className:"table__cell"},a.name),r.a.createElement("td",{className:"table__cell table__cell"},n),r.a.createElement("td",{className:"table__cell table__cell-completed"},o?"Done":"Don't do"))}),_=function(e){var t=e.todosList;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement(b,{key:e.id,todo:e})})))},S="https://jsonplaceholder.typicode.com/",L=function(){var e=Object(f.a)(E.a.mark((function e(t){var a;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.abrupt("return",a.json());case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(f.a)(E.a.mark((function e(){var t,a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L("".concat(S,"todos"));case 2:return t=e.sent,e.next=5,L("".concat(S,"users"));case 5:return a=e.sent,n=t.map((function(e){return Object(l.a)({},e,{user:a.find((function(t){return t.id===e.userId}))})})),e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),h=Object(s.b)((function(e){return{isLoading:e.isLoading,isLoaded:e.isLoaded,todos:e.todos,selectedSort:e.selectedSort}}),(function(e){return{setIsLoading:function(t){return e({type:"SET_IS_LOADING",isLoading:t})},setIsLoaded:function(){return e({type:"SET_IS_LOADED",isLoaded:!0})},setTodos:function(t){return e({type:"SET_TODOS",todos:t})},setSelectedSort:function(t){return e({type:"SET_SELECTED_SORT",selectedSort:t})}}}))((function(e){var t=e.isLoading,a=e.setIsLoading,o=e.setIsLoaded,c=e.isLoaded,s=e.todos,l=e.setTodos,u=e.setSelectedSort,i=e.selectedSort,d=function(){var e=Object(f.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,v();case 3:t=e.sent,l(t),a(!1),o();case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=Object(n.useMemo)((function(){return"initual"===i?Object(m.a)(s):Object(m.a)(s).sort((function(e,t){switch(i){case"title":return e.title.localeCompare(t.title);case"name":return e.user&&t.user?e.user.name.localeCompare(t.user.name):0;case"completed":return Number(e.completed)-Number(t.completed);default:return 0}}))}),[s,i]);return t?r.a.createElement("p",{className:"loading"},"Loading..."):r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"title"},"Dynamic list of TODOs"),c?r.a.createElement(r.a.Fragment,null,r.a.createElement("select",{value:i,onChange:function(e){var t=e.target.value;u(t)},className:"selected_button"},r.a.createElement("option",{disabled:!0,value:"choose"},"Choose sort method"),r.a.createElement("option",{value:"initual"},"Initual view"),r.a.createElement("option",{value:"title"},"Title"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"completed"},"Completed")),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"table__title"},r.a.createElement("th",{className:"table__cell"},"User"),r.a.createElement("th",{className:"table__cell"},"Todo"),r.a.createElement("th",{className:"table__cell"},"Status"))),r.a.createElement("tbody",null,r.a.createElement(_,{todosList:p})))):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"initual_loading"},"Load your Todos"),r.a.createElement("button",{type:"button",className:"loading_button",onClick:d},"Load")))}));c.a.render(r.a.createElement((function(){return r.a.createElement(s.a,{store:d},r.a.createElement(h,null))}),null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.23ac1614.chunk.js.map