(this["webpackJsonp10x-website-redesign"]=this["webpackJsonp10x-website-redesign"]||[]).push([[0],{319:function(e,t,a){e.exports=a.p+"static/media/close.8f292b6b.svg"},324:function(e,t,a){e.exports=a(813)},677:function(e,t){},812:function(e,t,a){},813:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"getAllByContentType",(function(){return _})),a.d(n,"getContentTypeByName",(function(){return k})),a.d(n,"getTaxonomyByContentType",(function(){return T}));var r={};a.r(r),a.d(r,"getAllByContentType",(function(){return S})),a.d(r,"getContentTypeByName",(function(){return A})),a.d(r,"getTaxonomyByContentType",(function(){return B}));var c={};a.r(c),a.d(c,"getAllMenus",(function(){return ye}));var o={};a.r(o),a.d(o,"getAllMenus",(function(){return xe}));var i,s=a(0),l=a.n(s),u=a(124),m=a.n(u),d=a(33),p=a(20),f=a(84),b=a(320),v=a(321),g=a(13),E=a(6),h=a(14),y=a(2),j=a.n(y),x=a(17),O=a(34),N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){return setTimeout(t,e)}))},w="https://10xwebsite.github.io/10x-content",_=function(){var e=Object(x.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return a=t.type,e.next=5,fetch("".concat(w,"/content/").concat(a,"/index.json"));case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(x.a)(j.a.mark((function e(t){var a,n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return a=t.type,n=t.name,e.next=5,fetch("".concat(w,"/content/").concat(a,"/").concat(n,".json"));case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,e.abrupt("return",c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(x.a)(j.a.mark((function e(t){var a,n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:return a=t.type,e.next=5,fetch("".concat(w,"/content/").concat(a,"/taxonomy.json"));case 5:return n=e.sent,e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=[{title:"test 1",body:"# test one"},{title:"test 2",body:"# test two"}],M=[{key:"testTax",title:"test tax",items:["testtax1","testtax2"]}],S=function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("error"!==t.type){e.next=2;break}throw new Error("Invalid Type.");case 2:return e.abrupt("return",C);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("error"!==t.type){e.next=2;break}throw new Error("Invalid Type.");case 2:if(t.name){e.next=4;break}throw new Error("Invalid Name.");case 4:if("error"!==t.name){e.next=6;break}throw new Error("Invalid Name.");case 6:return e.abrupt("return",C[0]);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("error"!==t.type){e.next=2;break}throw new Error("Invalid Type.");case 2:return e.abrupt("return",M);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=n,L={list:{pending:!1,data:[],error:null},page:{pending:!1,data:{},error:null},taxonomy:{pending:!1,data:[],error:null}},z=Object(O.b)("content/getPage",function(){var e=Object(x.a)(j.a.mark((function e(t){var a,n,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.type,n=void 0===a?"page":a,r=t.name,c=void 0===r?"":r,e.next=3,P.getContentTypeByName({type:n,name:c});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),I=Object(O.b)("content/getTaxonomy",function(){var e=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.type,e.next=3,P.getTaxonomyByContentType({type:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),D=Object(O.b)("content/getList",function(){var e=Object(x.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.type,e.next=3,P.getAllByContentType({type:a});case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=function(e,t){return Object(h.a)(Object(h.a)({},t),{},Object(E.a)({},e,Object(h.a)(Object(h.a)({},L[e]),{},{pending:!0})))},R=function(e,t,a){return Object(h.a)(Object(h.a)({},t),{},Object(E.a)({},e,Object(h.a)(Object(h.a)({},L[e]),{},{data:a.payload})))},W=function(e,t,a){return Object(h.a)(Object(h.a)({},t),{},Object(E.a)({},e,Object(h.a)(Object(h.a)({},L[e]),{},{error:a.error})))},Y=Object(O.c)({name:"content",initialState:L,reducers:{reset:function(){return L}},extraReducers:(i={},Object(E.a)(i,z.pending,(function(e){return U("page",e)})),Object(E.a)(i,z.fulfilled,(function(e,t){return R("page",e,t)})),Object(E.a)(i,z.rejected,(function(e,t){return W("page",e,t)})),Object(E.a)(i,D.pending,(function(e){return U("list",e)})),Object(E.a)(i,D.fulfilled,(function(e,t){return R("list",e,t)})),Object(E.a)(i,D.rejected,(function(e,t){return W("list",e,t)})),Object(E.a)(i,I.pending,(function(e){return U("taxonomy",e)})),Object(E.a)(i,I.fulfilled,(function(e,t){return R("taxonomy",e,t)})),Object(E.a)(i,I.rejected,(function(e,t){return W("taxonomy",e,t)})),i)}),F=(Y.actions.reset,Y.reducer),H=a(40),G=a(21),J=a.n(G),$=function(e){var t=e.className,a=e.children,n=Object(H.a)(e,["className","children"]);return l.a.createElement("div",Object.assign({className:J()(Object(E.a)({"grid-container":!0},t,t))},n),a)},q=function(e){var t,a=e.className,n=e.gap,r=e.children,c=Object(H.a)(e,["className","gap","children"]);return l.a.createElement("div",Object.assign({className:J()((t={"grid-row":!0},Object(E.a)(t,"grid-gap-".concat(n),n),Object(E.a)(t,a,a),t))},c),r)},K=function(e){var t,a=e.className,n=e.size,r=e.tablet,c=e.desktop,o=e.offset,i=e.children,s=Object(H.a)(e,["className","size","tablet","desktop","offset","children"]);return l.a.createElement("div",Object.assign({className:J()((t={},Object(E.a)(t,"grid-col","auto"===n),Object(E.a)(t,"grid-col-".concat(n),n&&"auto"!==n),Object(E.a)(t,"tablet:grid-col-".concat(r),r&&"auto"!==r),Object(E.a)(t,"tablet:grid-col","auto"===r),Object(E.a)(t,"desktop:grid-col-".concat(c),c&&"auto"!==c),Object(E.a)(t,"desktop:grid-col","auto"===c),Object(E.a)(t,a,a),Object(E.a)(t,"grid-offset-".concat(o),o),t))},s),i)};K.defaultProps={size:"auto"};var Q=function(e){var t=e.isLoading,a=e.children;return t?l.a.createElement("div",{className:"Loading"},l.a.createElement("div",{className:"Loading_box"},l.a.createElement("div",{className:"box box-one"}),l.a.createElement("div",{className:"box box-two"}),l.a.createElement("div",{className:"box box-three"}),l.a.createElement("div",{className:"box box-four"}))):a},V=a(322),X={a:function(e){var t=e.url,a=e.children,n=(e.type,Object(H.a)(e,["url","children","type"]));return l.a.createElement("a",Object.assign({},n,{href:t,target:"_blank",rel:"noopener noreferrer"}),a)},b:function(e){e.url;var t=e.type,a=void 0===t?"button":t,n=Object(H.a)(e,["url","type"]);return l.a.createElement("button",Object.assign({type:a},n))},link:function(e){e.type;var t=e.url,a=Object(H.a)(e,["type","url"]);return l.a.createElement(p.b,Object.assign({to:t},a))}},Z=function(e){var t,a=e.children,n=e.className,r=e.color,c=e.variant,o=e.raised,i=e.url,s=e.onClick,u=e.external,m=e.fullwidth,d=e.type,p=Object(H.a)(e,["children","className","color","variant","raised","url","onClick","external","fullwidth","type"]),f=s||d?X.b:u||i.includes("://")?X.a:X.link;return l.a.createElement(f,Object.assign({url:i,type:d,onClick:s},p,{className:J()((t={"usa-button":!0},Object(E.a)(t,"usa-button--".concat(r),r),Object(E.a)(t,"usa-button--".concat(r,"-").concat(c),c),Object(E.a)(t,"usa-button--fullwidth",m),Object(E.a)(t,"usa-button--raised",o),Object(E.a)(t,n,n),t))}),a)};Z.defaultProps={color:"primary"};var ee=Z,te=function(e){var t=e.className,a=e.image,n=e.imageAlt,r=e.meta,c=e.title,o=e.excerpt,i=e.footer,s=e.variant,u=e.flat,m="vertical";return["horizontal","vertical"].includes(s)?m=s:console.warn("<Card /> : ".concat(s," is not a valid variant.")),l.a.createElement("div",{className:J()(Object(E.a)({"usa-card":!0,"usa-card--flag":"horizontal"===m,"usa-card--no-media":!a,"usa-card--no-content":!c&&!r&&!o,"usa-card--flat":u},t,Boolean(t)))},l.a.createElement("div",{className:"usa-card__container"},(c||r)&&l.a.createElement("header",{className:"usa-card__header"},l.a.createElement("span",{className:"usa-card__meta"},r),l.a.createElement("h3",{className:"usa-card__heading"},c)),a&&l.a.createElement("div",{className:"usa-card__media"},l.a.createElement("div",{className:"usa-card__img"},l.a.createElement("div",{className:"usa-card__img-container",style:{backgroundImage:"url('".concat(a,"')")}},l.a.createElement("img",{src:a,alt:n})))),o&&l.a.createElement("div",{className:"usa-card__body"},o),i&&l.a.createElement("div",{className:"usa-card__footer"},i)))};te.defaultProps={variant:"vertical",imageAlt:""};var ae=te,ne=a(316),re=a.n(ne),ce=function(e){var t=e.format,a=e.children;return l.a.createElement(re.a,{format:t},a)};ce.defaultProps={format:"MMMM D, YYYY"};var oe=ce,ie=function(e){var t=e.src,a=e.alt,n=e.className;return l.a.createElement("img",{alt:a,className:n,src:"".concat("https://10xwebsite.github.io/10x-content","/").concat(t)})};ie.defaultProp={className:"",alt:"none"};var se=ie,le=a(323),ue=function(e){var t=e.name,a=e.id,n=e.items,r=e.placeholder,c=e.onChange,o=e.className,i=e.style,s=r?[l.a.createElement("option",{key:r,value:""},r),l.a.createElement("optgroup",{key:"".concat(r,"-optgrp"),label:"-----------"})]:[],u=n.map((function(e){return"string"===typeof e||"number"===typeof e?l.a.createElement("option",{key:e,value:e},e):l.a.createElement("option",{key:e.key,value:e.value},e.key)})),m=[].concat(s,Object(le.a)(u));return l.a.createElement("select",{className:J()(Object(E.a)({"usa-select":!0},o,o)),style:i,name:t,id:a,onChange:c},m)},me=function(e){var t=e.name,a=Object(g.f)().pathname.replace("/",""),n=Object(d.c)((function(e){return e.menu.data})).find((function(e){return e.key===t})),r=Boolean(n)?n.items.filter((function(e){return a?!a.includes(e.link):"/"!==e.link})):[];return n?l.a.createElement("div",{className:"LocationMenu"},l.a.createElement($,null,l.a.createElement(q,{gap:2,className:"align-items-stretch"},r.map((function(e,a){return l.a.createElement(K,{key:"".concat(t,"-").concat(a),size:"6",tablet:"auto",desktop:"auto",className:"margin-bottom-2 tablet:margin-bottom-0"},l.a.createElement(p.b,{to:e.link,className:"LocationMenu__item"},l.a.createElement(se,{src:e.img,alt:"link to ".concat(e.text),className:"LocationMenu__item-img"}),l.a.createElement("span",{className:"LocationMenu__item-title"},e.text),l.a.createElement("span",{className:"LocationMenu__item-desc"},e.desc)))}))))):l.a.createElement("span",{className:"display-none"},"Menu ".concat(t," not found."))};me.defaultProps={name:"primary"};var de,pe={Button:ee,Card:ae,Date:oe,Grid:$,Image:se,LocationMenu:me,Row:q,Col:K,Select:ue},fe=function(e){var t=e.children,a=e.scope;return l.a.createElement(V.a,{components:pe,scope:a},t)},be=function(e){var t=e.name,a=Object(d.b)(),n=Object(g.g)(),r=t||n.name,c=Object(d.c)((function(e){return e.content.page}));Object(s.useEffect)((function(){a(z({name:r}))}),[a,r]);var o=c.pending,i=c.data,u=c.error;return l.a.createElement(Q,{isLoading:o},null!==u?l.a.createElement($,null,l.a.createElement("h1",{className:"Page__error"},"Error: There was an error loading this page.")):l.a.createElement(fe,null,i.body))},ve=function(){return l.a.createElement(be,{name:"home"})},ge=function(){var e=Object(g.f)().pathname;return l.a.createElement($,null,l.a.createElement(q,null,l.a.createElement(K,{size:12},l.a.createElement("div",{style:{paddingTop:"5vh",minHeight:"50vh"}},l.a.createElement("h1",null,"404"),l.a.createElement("h2",null,'The path "',e,'" returned no results.')))))},Ee=function(e){var t=e.location;return l.a.createElement(g.c,{location:t},l.a.createElement(g.a,{key:"default",path:"/",component:ve,exact:!0}),l.a.createElement(g.a,{key:"page",path:"/:name",component:be}),l.a.createElement(g.a,{key:"404",path:"/",component:ge}))},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3;return new Promise((function(t){return setTimeout(t,e)}))},ye=function(){var e=Object(x.a)(j.a.mark((function e(){var t,a,n=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.length>0&&void 0!==n[0]?n[0]:{},e.next=3,he();case 3:return e.next=5,fetch("".concat("https://10xwebsite.github.io/10x-content","/menus/index.json"));case 5:return t=e.sent,e.next=8,t.json();case 8:return a=e.sent,e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),je=[{key:"primary",items:[{url:"/about",text:"About 10x"},{url:"/ideas",text:"Send us an idea"},{url:"/process",text:"The 10x process"},{url:"/projects",text:"The projects"}]}],xe=function(){var e=Object(x.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.error){e.next=2;break}throw new Error("Invalid Props.");case 2:return e.abrupt("return",je);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Oe=c,Ne={pending:!1,error:null,data:[]},we=Object(O.b)("menu/getMenuList",Object(x.a)(j.a.mark((function e(){var t,a=arguments;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},e.next=3,Oe.getAllMenus(t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))),_e=Object(O.c)({name:"menu",initialState:Ne,reducers:{reset:function(){return Ne}},extraReducers:(de={},Object(E.a)(de,we.pending,(function(e){return Object(h.a)(Object(h.a)({},Ne),{},{pending:!0})})),Object(E.a)(de,we.fulfilled,(function(e,t){return Object(h.a)(Object(h.a)({},Ne),{},{data:t.payload})})),Object(E.a)(de,we.rejected,(function(e,t){return Object(h.a)(Object(h.a)({},Ne),{},{error:t.error})})),de)}),ke=(_e.actions.reset,_e.reducer),Te=Object(O.a)({reducer:{content:F,menu:ke}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(129),Me=a(317),Se=a.n(Me),Ae=a(318),Be=function(){var e=Object(s.useState)(!1),t=Object(Ce.a)(e,2),a=t[0],n=t[1];return l.a.createElement("section",{className:"usa-banner","aria-label":"Official government website"},l.a.createElement("div",{className:"usa-accordion"},l.a.createElement("header",{className:"usa-banner__header"},l.a.createElement("div",{className:"grid-row padding-x-2 align-items-center"},l.a.createElement("div",{className:"grid-col-7 tablet:grid-col-9 padding-y-1"},l.a.createElement("div",{className:"usa-banner__header-text"},l.a.createElement("img",{className:"usa-banner__header-flag",src:Se.a,alt:"U.S. flag"}),l.a.createElement("span",null,"An official website of the United States government"))),l.a.createElement("div",{className:"grid-col-5 tablet:grid-col-3 text-right"},l.a.createElement(ee,{className:"usa-banner__button",onClick:function(){n((function(e){return!e}))},"aria-expanded":"false","aria-controls":"gov-banner",variant:"outline",id:"gov-banner-button"},"Here\u2019s how you know")))),l.a.createElement("div",{className:J()({"usa-banner__content":!0,"usa-accordion__content":!0,"is-visible":a}),id:"gov-banner"},l.a.createElement("div",null,l.a.createElement("span",{className:"usa-banner__content-heading"},"Official websites use .gov"),l.a.createElement("br",null),"A ",l.a.createElement("strong",null,".gov")," website belongs to an official government organization in the United States."),l.a.createElement("div",null,l.a.createElement("span",{className:"usa-banner__content-heading"},"Secure .gov websites use HTTPS"),l.a.createElement("br",null),"A ",l.a.createElement("strong",null,"lock")," ( ",l.a.createElement(Ae.a,{icon:"lock"})," ) or"," ",l.a.createElement("strong",null,"https://")," means you\u2019ve safely connected to the .gov website. Share sensitive information only on official, secure websites."))))},Pe=function(e){var t=e.logo,a=e.nav;return l.a.createElement("header",{className:"usa-header usa-header--basic"},l.a.createElement($,null,l.a.createElement(q,null,l.a.createElement(K,null,l.a.createElement(Be,null),l.a.createElement(q,{className:"align-content-center margin-top-2"},l.a.createElement(K,{size:3},l.a.createElement(p.b,{to:"/"},t)),l.a.createElement(K,{size:9,className:"text-right"},a))))))},Le=function(){return l.a.createElement("footer",{className:"usa-footer"},l.a.createElement($,null,l.a.createElement(q,null,l.a.createElement(K,null,l.a.createElement("p",null,"10x ",l.a.createElement("a",{href:"/privacy-policy/"},"privacy policy")),l.a.createElement("p",null,"10x complies with the"," ",l.a.createElement("a",{href:"https://www.gsa.gov/about-us/organization/office-of-civil-rights/notification-and-federal-employee-antidiscrimination-and-retaliation-act-of-2002"},"No Fear Act Notification and Federal Employee Anti-Discrimination and Retaliation Act of 2002")),l.a.createElement("p",null,"Learn more about 10x by sending an email to"," ",l.a.createElement("a",{href:"mailto:10x@gsa.gov"},"10x@gsa.gov")),l.a.createElement("p",null,"Built with the"," ",l.a.createElement("a",{href:"https://designsystem.digital.gov/"},"U.S. Web Design System 2.0 alpha")),l.a.createElement("a",{href:"https://designsystem.digital.gov/",className:"uswds-stamp"},"USWDS"),l.a.createElement("div",{className:"BlockGraphic"},l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("div",null))))))))},ze=a(319),Ie=a.n(ze),De=function(e){var t=e.id,a=e.text,n=e.url,r=e.items,c=void 0===r?[]:r;return l.a.createElement("li",{className:"usa-nav__primary-item"},c.length?l.a.createElement("div",null,l.a.createElement("button",{className:"usa-accordion__button usa-nav__url","aria-controls":"extended-nav-section-".concat(t),"aria-expanded":!1},l.a.createElement("span",null,a)),l.a.createElement("ul",{id:"extended-nav-section-".concat(t),className:"usa-accordion__content usa-nav__submenu",hidden:!0},c.map((function(e,t){return l.a.createElement("li",{key:t,className:"usa-nav__submenu-item"},l.a.createElement(p.b,{to:e.url},e.text))})))):l.a.createElement(p.c,{className:"usa-nav__url",activeClassName:"usa-current",exact:!0,to:n},l.a.createElement("span",null,a)))},Ue=function(e){var t=e.items,a=Object(s.useState)(!1),n=Object(Ce.a)(a,2),r=n[0],c=n[1],o=function(){c((function(e){return!e}))},i=Object(g.f)();return Object(s.useEffect)((function(){c(!1)}),[i]),l.a.createElement(l.a.Fragment,null,l.a.createElement(ee,{type:"button",id:"usa-nav-open",onClick:o,className:"usa-nav-open"},"Menu"),l.a.createElement("nav",{role:"navigation","aria-label":"Primary navigation",className:J()({"usa-nav":!0,"is-visible":r})},l.a.createElement("div",{className:"usa-nav__inner"},l.a.createElement(ee,{id:"usa-nav-close",type:"button",className:"usa-nav-close",onClick:o},l.a.createElement("img",{src:Ie.a,alt:"close"})),l.a.createElement("ul",{className:"usa-accordion usa-nav__primary"},t.map((function(e,t){var a=e.text,n=e.link,r=e.items;return l.a.createElement(De,{key:"usa-nav-item-".concat(t),id:t,text:a,url:n,items:r})}))))))};Ue.defaultProps={items:[]};var Re=Ue,We=(a(812),function(e){e.title;return l.a.createElement("div",{className:"usa-logo",id:"basic-logo"},l.a.createElement("em",{className:"usa-logo__text"},"10x"))}),Ye=function(e){var t=e.children,a=Object(d.b)();Object(s.useEffect)((function(){a(we({}))}),[a]);var n=Object(d.c)((function(e){return e.menu.data})).find((function(e){return"primary"===e.key})),r=n?n.items:[];return l.a.createElement("div",{className:"App"},l.a.createElement(Pe,{logo:l.a.createElement(We,null),nav:l.a.createElement(Re,{items:r})}),t,l.a.createElement(Le,null))};f.b.add(b.a,v.a);m.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p.a,{basename:"/10x-website/6-react-refactor"},l.a.createElement(d.a,{store:Te},l.a.createElement(Ye,null,l.a.createElement(Ee,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[324,1,2]]]);
//# sourceMappingURL=main.6926727b.chunk.js.map