(this.webpackJsonpmid2=this.webpackJsonpmid2||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(0),s=n(1),a=n.n(s),i=n(3),l=n.n(i),c=(n(13),n(4)),d=n(5),r=n(7),g=n(6),u=(n(14),function(t){Object(r.a)(n,t);var e=Object(g.a)(n);function n(t){var o;return Object(c.a)(this,n),(o=e.call(this,t)).state={InputtingNewList:!1,InputNewList:"",List:[]},o}return Object(d.a)(n,[{key:"render",value:function(){for(var t=this,e=this.state.List,n=[],s=[],a=[],i=function(n){console.log("EditListName"),console.log(n.target.parentNode);for(var o=0;o<e.length;o+=1)console.log(n.target.parentNode.id),console.log(e[o].Id),n.target.parentNode.id===o+e[o].Id&&(e[o].NameEditing=!0,t.setState({List:e}),console.log(t.state))},l=function(n){console.log("InputtingNewListName");for(var o=0;o<e.length;o+=1)console.log(n.target.parentNode.id),console.log(e[o].Id),n.target.parentNode.id===o+e[o].Id&&(e[o].InputNewName=n.target.value,t.setState({List:e}),console.log(t.state))},c=function(n){console.log("SaveNewListName");for(var o=0;o<e.length;o+=1)console.log(n.target.parentNode.id),console.log(e[o].Id),n.target.parentNode.id===o+e[o].Id&&""!==e[o].InputNewName&&(e[o].Name=e[o].InputNewName,e[o].Id=e[o].InputNewName,t.setState({List:e}),console.log(t.state))},d=function(n){console.log("CancelListNameEditing");for(var o=0;o<e.length;o+=1)console.log(n.target.parentNode.id),console.log(e[o].Id),n.target.parentNode.id===o+e[o].Id&&(e[o].NameEditing=!1,t.setState({List:e}),console.log(t.state))},r=function(n){console.log("RemoveList"),console.log(n.target.parentNode);for(var o=0;o<e.length;o+=1)console.log(n.target.parentNode.id),console.log(e[o].Id),n.target.parentNode.id===o+e[o].Id&&(e.splice(o,1),t.setState({List:e}),console.log(t.state))},g=function(n){console.log("ClickAddACardButton");for(var o=0;o<e.length;o+=1)n.target.parentNode.id===o+e[o].Id&&(e[o].Editing=!0,t.setState({List:e}));console.log(t.state)},u=function(n){for(var o=0;o<e.length;o+=1)console.log(n.target.parentNode.id),console.log(e[o].Id),n.target.parentNode.id===o+e[o].Id&&(e[o].InputNewCard=n.target.value,t.setState({List:e}),console.log(t.state));console.log(t.state)},N=function(n){console.log("ClickAddCardButton");for(var o=0;o<e.length;o+=1)if(n.target.parentNode.id===o+e[o].Id&&""!==e[o].InputNewCard){var s={Id:e[o].InputNewCard,Name:e[o].InputNewCard};e[o].Card.push(s),t.setState({List:e})}console.log(t.state)},p=function(n){console.log("CancelCardInput");for(var o=0;o<e.length;o+=1)n.target.parentNode.id===o+e[o].Id&&(e[o].Editing=!1,t.setState({List:e}));console.log(t.state)},h=0;h<e.length;h+=1){for(var m=0;m<e[h].Card.length;m+=1){var j=Object(o.jsx)("div",{children:Object(o.jsx)("div",{className:"CardTitle",children:e[h].Card[m].Name})});a.push(j),console.log(j)}if(!1===e[h].Editing){if(!1===e[h].NameEditing){var I=Object(o.jsxs)("div",{className:"ListComponent",id:h+e[h].Id,children:[Object(o.jsx)("div",{className:"ListTitle",children:e[h].Name}),a,Object(o.jsx)("button",{className:"EditListName",onClick:i,children:"Edit List Name"}),Object(o.jsx)("button",{className:"RemoveList",onClick:r,children:"Remove List"}),Object(o.jsx)("button",{className:"ClickAddACardButton",onClick:g,children:"+ Add a card"})]});n.push(I),a=[]}else if(!0===e[h].NameEditing){var L=Object(o.jsxs)("div",{className:"ListComponent",id:h+e[h].Id,children:[Object(o.jsx)("div",{className:"ListTitle",children:e[h].Name}),a,Object(o.jsx)("input",{className:"ListInputArea",onChange:l,placeholder:"Input new list name!"}),Object(o.jsx)("button",{onClick:c,children:"Save New List Name"}),Object(o.jsx)("button",{onClick:d,children:"Cancel Name Editing"})]});n.push(L),a=[]}}else if(!0===e[h].Editing){var C=Object(o.jsxs)("div",{className:"ListComponent",id:h+e[h].Id,children:[Object(o.jsx)("div",{className:"ListTitle",children:e[h].Name}),a,Object(o.jsx)("input",{className:"ListInputArea",onChange:u,placeholder:"Input new card!"}),Object(o.jsx)("button",{className:"ClickAddCardButton",onClick:N,children:"Add Card"}),Object(o.jsx)("button",{className:"CancelInputButton",onClick:p,children:"Cancel"})]});n.push(C),a=[]}}if(!1===this.state.InputtingNewList){var v=Object(o.jsx)("div",{children:Object(o.jsx)("button",{className:"AddAListButton",onClick:function(){console.log("ClickAddAListButton"),t.setState({InputtingNewList:!0}),console.log(t.state)},children:"+ Add a list"})});s.push(v)}else if(!0===this.state.InputtingNewList){var b=Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{className:"NewListInputArea",onChange:function(e){console.log(e.target.value),t.setState({InputNewList:e.target.value}),console.log(t.state)},placeholder:"Input new list!"}),Object(o.jsx)("button",{className:"AddListButton",onClick:function(){if(console.log("ClickAddListButton"),""===t.state.InputNewList)console.log("Not yet input anything!");else{console.log(t.state.InputNewList);var n={Id:t.state.InputNewList,Name:t.state.InputNewList,Editing:!1,Card:[],InputNewCard:"",NameEditing:!1,InputNewName:""};e.push(n),t.setState({InputNewList:"",List:e}),console.log(t.state)}},children:"Add List"}),Object(o.jsx)("button",{className:"CancelInputButton",onClick:function(){console.log("CancelListInput"),t.setState({InputtingNewList:!1}),console.log(t.state)},children:"Cancel"})]});s.push(b)}return Object(o.jsxs)("div",{className:"All",children:[Object(o.jsx)("div",{className:"AddListButtonGroup",children:s}),Object(o.jsx)("div",{className:"ListComponentGroup",children:n})]})}}]),n}(a.a.Component)),N=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,o=e.getFID,s=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),s(t),a(t),i(t)}))};window.addEventListener("load",(function(){l.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))})),N()}},[[15,1,2]]]);
//# sourceMappingURL=main.f422c441.chunk.js.map