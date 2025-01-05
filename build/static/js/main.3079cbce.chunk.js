(this.webpackJsonpProject=this.webpackJsonpProject||[]).push([[0],{14:function(e,t,a){},20:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},29:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),s=a(15),l=a.n(s),r=(a(27),a(3)),i=a(18),o=a(36);a(14);var m=e=>{let{onRetry:t}=e;return c.a.createElement("div",{className:"error-view"},c.a.createElement("button",{onClick:t},c.a.createElement("img",{alt:"error view",src:"https://assets.ccbp.in/frontend/content/react-js/list-creation-failure-lg-output.png"})))};var u=e=>{let{onCancel:t,onUpdate:a}=e;return c.a.createElement("div",{className:"actions"},c.a.createElement("button",{onClick:t},"Cancel"),c.a.createElement("button",{onClick:a},"Update"))};a(29);var d=function(){const[e,t]=Object(n.useState)(!0),[a,s]=Object(n.useState)(!1),[l,d]=Object(n.useState)([]),[E,b]=Object(n.useState)({}),[p,h]=Object(n.useState)([]),[v,N]=Object(n.useState)([]),[g,k]=Object(n.useState)(!1),[C,j]=Object(n.useState)(null),[w,y]=Object(n.useState)(!0);console.log(l),console.log(C),Object(n.useEffect)(()=>{O()},[]);const O=async()=>{t(!0),s(!1);try{const e=await o.a.get("https://apis.ccbp.in/list-creation/lists"),{lists:a}=e.data,n=a.reduce((e,t)=>(e[t.list_number]||(e[t.list_number]=[]),e[t.list_number].push(t),e),{}),c=Object.keys(n).sort((e,t)=>e-t);d(a),b(n),h(c),t(!1)}catch(e){s(!0),t(!1)}},f=function(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"3";b(n=>{const c=Object(r.a)({},n),s=(c[t]||[]).filter(t=>t.id!==e.id);return c[a]||(c[a]=[]),c[a].some(t=>t.id===e.id)||c[a].push(e),Object(r.a)(Object(r.a)({},c),{},{[t]:s})}),h(e=>e.includes(a)?e:[...e,a])};return c.a.createElement("div",{className:"App"},e?c.a.createElement("div",{className:"loader"},c.a.createElement(i.a,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0})):a?c.a.createElement(m,{onRetry:O}):c.a.createElement("div",{className:"main-container"},c.a.createElement("div",{className:"head-btn-container"},w&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",{className:"main-heading"},"List Creation"),c.a.createElement("button",{type:"button",className:"add-new-list-button",onClick:()=>{if(2!==v.length){return void(document.getElementById("alertForCheck").textContent="*You should select exactly 2 lists to create a new list")}y(!1);const[e,t]=v.sort((e,t)=>e-t),a=(Math.max(...Object.keys(E).map(Number))+1).toString();j(a),console.log(t),b(t=>{const n=Object(r.a)({},t),c=[];let s=!1;Object.keys(n).sort((e,t)=>e-t).forEach(t=>{c.push(t),t!==e.toString()||s||(c.push(a),s=!0)});const l={};return c.forEach(e=>{l[e]=n[e]||[]}),l[a]=[],l}),h(t=>{const n=[...t],c=n.indexOf(e.toString())+1;return n.splice(c,0,a),n}),k(!0)}},"Create a New List")),c.a.createElement("span",{id:"alertForCheck"})),c.a.createElement("div",{className:"lists-container ".concat(g?"row":"")},g?c.a.createElement("div",null,c.a.createElement("div",{className:"list-creation-view"},p.map(e=>{var t,a;return c.a.createElement("div",{key:e,className:"list-container"},c.a.createElement("h3",null,"List ",e," (",(null===(t=E[e])||void 0===t?void 0:t.length)||0," ","items)"),c.a.createElement("div",{className:"list-item-container"},null===(a=E[e])||void 0===a?void 0:a.map(t=>c.a.createElement("div",{key:t.id,className:"list-item"},c.a.createElement("span",{className:"name"},t.name),c.a.createElement("span",{className:"description"},t.description),c.a.createElement("div",{className:"arrow-buttons"},"1"===e&&c.a.createElement("button",{className:"arrow",onClick:()=>f(t,"1","3")},"\u2192"),"2"===e&&c.a.createElement("button",{className:"arrow",onClick:()=>f(t,"2","3")},"\u2190"),"3"===e&&c.a.createElement("div",{className:"arrow-buttons-row"},c.a.createElement("button",{className:"arrow start-arrow",onClick:()=>f(t,"3","1")},"\u2190"),c.a.createElement("button",{className:"arrow end-arrow",onClick:()=>f(t,"3","2")},"\u2192")))))))})),c.a.createElement(u,{onCancel:()=>{y(!0),k(!1),N([]),O()},onUpdate:()=>{y(!0),k(!1),N([]),b(e=>{const t=Object(r.a)({},e);return t[3]&&(t[3]=[...t[3]]),t}),h(e=>[...e])}})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"list-selection"},p.map(e=>c.a.createElement("div",{key:e,className:"list-container"},c.a.createElement("div",{className:"check-heading"},c.a.createElement("input",{id:"myCheckbox + ".concat(e),type:"checkbox",checked:v.includes(e),onChange:()=>(e=>{const t=v.includes(e)?v.filter(t=>t!==e):[...v,e];N(t)})(e)}),c.a.createElement("label",{htmlFor:"myCheckbox + ".concat(e),className:"list-head"},"List ",e)),E[e].map(e=>c.a.createElement("div",{className:"list-item",key:e.id},c.a.createElement("span",{className:"name"},e.name),c.a.createElement("span",{className:"description"},e.description))))))))))};var E=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,37)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:s,getTTFB:l}=t;a(e),n(e),c(e),s(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null))),E()}},[[20,1,2]]]);
//# sourceMappingURL=main.3079cbce.chunk.js.map