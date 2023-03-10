(function(u,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("@popperjs/core/lib/popper-lite"),require("@popperjs/core/lib/modifiers/preventOverflow"),require("@popperjs/core/lib/modifiers/flip"),require("lodash-es/uniq"),require("lodash-es/find"),require("qs"),require("lodash-es/clone"),require("lodash-es/filter"),require("lodash-es/findKey"),require("lodash-es/forEach"),require("lodash-es/isEqual"),require("lodash-es/map"),require("lodash-es/pickBy")):typeof define=="function"&&define.amd?define(["exports","vue","@popperjs/core/lib/popper-lite","@popperjs/core/lib/modifiers/preventOverflow","@popperjs/core/lib/modifiers/flip","lodash-es/uniq","lodash-es/find","qs","lodash-es/clone","lodash-es/filter","lodash-es/findKey","lodash-es/forEach","lodash-es/isEqual","lodash-es/map","lodash-es/pickBy"],e):(u=typeof globalThis<"u"?globalThis:u||self,e((u.Inertia=u.Inertia||{},u.Inertia["js Tables for Laravel Query Builder"]={}),u.Vue,u.popperLite,u.preventOverflow,u.flip,u.uniq,u.find,u.qs,u.clone,u.filter,u.findKey,u.forEach,u.isEqual,u.map,u.pickBy))})(this,function(u,e,re,ne,le,oe,ae,se,ie,ce,de,ue,fe,me,pe){"use strict";const y=t=>t&&typeof t=="object"&&"default"in t?t:{default:t},he=y(ne),ge=y(le),ye=y(oe),ke=y(ae),$=y(se),be=y(ie),we=y(ce),_e=y(de),w=y(ue),xe=y(fe),Be=y(me),Ce=y(pe),P={__name:"OnClickOutside",props:{do:{type:Function,required:!0}},setup(t){const o=t,a=e.ref(null),s=e.ref(null);return e.onMounted(()=>{a.value=i=>{i.target===s.value||s.value.contains(i.target)||o.do()},document.addEventListener("click",a.value),document.addEventListener("touchstart",a.value)}),e.onBeforeUnmount(()=>{document.removeEventListener("click",a.value),document.removeEventListener("touchstart",a.value)}),(i,r)=>(e.openBlock(),e.createElementBlock("div",{ref_key:"root",ref:s},[e.renderSlot(i.$slots,"default")],512))}},Ee={class:"relative"},$e=["dusk","disabled","onClick"],Ve={class:"mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"},C={__name:"ButtonWithDropdown",props:{placement:{type:String,default:"bottom-start",required:!1},active:{type:Boolean,default:!1,required:!1},dusk:{type:String,default:null,required:!1},disabled:{type:Boolean,default:!1,required:!1}},setup(t,{expose:o}){const a=t,s=e.ref(!1),i=e.ref(null);function r(){s.value=!s.value}function n(){s.value=!1}e.watch(s,()=>{i.value.update()});const d=e.ref(null),p=e.ref(null);return e.onMounted(()=>{i.value=re.createPopper(d.value,p.value,{placement:a.placement,modifiers:[ge.default,he.default]})}),o({hide:n}),(b,k)=>(e.openBlock(),e.createBlock(P,{do:n},{default:e.withCtx(()=>[e.createElementVNode("div",Ee,[e.createElementVNode("button",{ref_key:"button",ref:d,type:"button",dusk:t.dusk,disabled:t.disabled,class:e.normalizeClass(["w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",{"border-green-300":t.active,"border-gray-300":!t.active,"cursor-not-allowed":t.disabled}]),"aria-haspopup":"true",onClick:e.withModifiers(r,["prevent"])},[e.renderSlot(b.$slots,"button")],10,$e),e.withDirectives(e.createElementVNode("div",{ref_key:"tooltip",ref:p,class:"absolute z-10"},[e.createElementVNode("div",Ve,[e.renderSlot(b.$slots,"default")])],512),[[e.vShow,s.value]])])]),_:3}))}},Se={class:"flex flex-row items-center"},Ne={class:"uppercase"},qe=["sorted"],De={key:0,fill:"currentColor",d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41zm255-105L177 64c-9.4-9.4-24.6-9.4-33.9 0L24 183c-15.1 15.1-4.4 41 17 41h238c21.4 0 32.1-25.9 17-41z"},Fe={key:1,fill:"currentColor",d:"M279 224H41c-21.4 0-32.1-25.9-17-41L143 64c9.4-9.4 24.6-9.4 33.9 0l119 119c15.2 15.1 4.5 41-16.9 41z"},Te={key:2,fill:"currentColor",d:"M41 288h238c21.4 0 32.1 25.9 17 41L177 448c-9.4 9.4-24.6 9.4-33.9 0L24 329c-15.1-15.1-4.4-41 17-41z"},M={__name:"HeaderCell",props:{cell:{type:Object,required:!0}},setup(t){const o=t;function a(){o.cell.sortable&&o.cell.onSort(o.cell.key)}return(s,i)=>e.withDirectives((e.openBlock(),e.createElementBlock("th",null,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.cell.sortable?"button":"div"),{class:"py-3 px-6 w-full",dusk:t.cell.sortable?`sort-${t.cell.key}`:null,onClick:e.withModifiers(a,["prevent"])},{default:e.withCtx(()=>[e.createElementVNode("span",Se,[e.renderSlot(s.$slots,"label",{},()=>[e.createElementVNode("span",Ne,e.toDisplayString(t.cell.label),1)]),e.renderSlot(s.$slots,"sort",{},()=>[t.cell.sortable?(e.openBlock(),e.createElementBlock("svg",{key:0,"aria-hidden":"true",class:e.normalizeClass(["w-3 h-3 ms-2",{"text-gray-400":!t.cell.sorted,"text-green-500":t.cell.sorted}]),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",sorted:t.cell.sorted},[t.cell.sorted?e.createCommentVNode("",!0):(e.openBlock(),e.createElementBlock("path",De)),t.cell.sorted==="asc"?(e.openBlock(),e.createElementBlock("path",Fe)):e.createCommentVNode("",!0),t.cell.sorted==="desc"?(e.openBlock(),e.createElementBlock("path",Te)):e.createCommentVNode("",!0)],10,qe)):e.createCommentVNode("",!0)])])]),_:3},8,["dusk","onClick"]))],512)),[[e.vShow,!t.cell.hidden]])}},V={translations:{next:"Next",no_results_found:"No results found",of:"of",per_page:"per page",previous:"Previous",results:"results",to:"to"}};function S(){return V.translations}function Pe(t,o){V.translations[t]=o}function Me(t){V.translations=t}const je=["dusk","value"],Oe=["value"],j={__name:"PerPageSelector",props:{dusk:{type:String,default:null,required:!1},value:{type:Number,default:15,required:!1},options:{type:Array,default(){return[15,30,50,100]},required:!1},onChange:{type:Function,required:!0}},setup(t){const o=t,a=S(),s=e.computed(()=>{let i=[...o.options];return i.push(parseInt(o.value)),ye.default(i).sort((r,n)=>r-n)});return(i,r)=>(e.openBlock(),e.createElementBlock("select",{name:"per_page",dusk:t.dusk,value:t.value,class:"block focus:ring-indigo-500 focus:border-indigo-500 min-w-max shadow-sm text-sm border-gray-300 rounded-md",onChange:r[0]||(r[0]=n=>t.onChange(n.target.value))},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(s),n=>(e.openBlock(),e.createElementBlock("option",{key:n,value:n},e.toDisplayString(n)+" "+e.toDisplayString(e.unref(a).per_page),9,Oe))),128))],40,je))}},ze={key:0,class:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"},Le={key:0},Ie=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M7 16l-4-4m0 0l4-4m-4 4h18"})],-1),Re={class:"hidden sm:inline ms-2"},We={class:"hidden sm:inline me-2"},Ae=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},[e.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M17 8l4 4m0 0l-4 4m4-4H3"})],-1),He={key:2,class:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between"},Ke={class:"flex flex-row space-x-4 items-center flex-grow"},Ge={class:"hidden lg:block text-sm text-gray-700 flex-grow"},Qe={class:"font-medium"},Ue={class:"font-medium"},Ye={class:"font-medium"},Je={class:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px","aria-label":"Pagination"},Xe={class:"sr-only"},Ze=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z","clip-rule":"evenodd"})],-1),ve={class:"sr-only"},et=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z","clip-rule":"evenodd"})],-1),O={__name:"Pagination",props:{onClick:{type:Function,required:!1},perPageOptions:{type:Array,default(){return()=>[15,30,50,100]},required:!1},onPerPageChange:{type:Function,default(){return()=>{}},required:!1},hasData:{type:Boolean,required:!0},meta:{type:Object,required:!1}},setup(t){const o=t,a=S(),s=e.computed(()=>"links"in r.value?r.value.links.length>0:!1),i=e.computed(()=>Object.keys(r.value).length>0),r=e.computed(()=>o.meta),n=e.computed(()=>"prev_page_url"in r.value?r.value.prev_page_url:null),d=e.computed(()=>"next_page_url"in r.value?r.value.next_page_url:null),p=e.computed(()=>parseInt(r.value.per_page));return(b,k)=>e.unref(i)?(e.openBlock(),e.createElementBlock("nav",ze,[!t.hasData||e.unref(r).total<1?(e.openBlock(),e.createElementBlock("p",Le,e.toDisplayString(e.unref(a).no_results_found),1)):e.createCommentVNode("",!0),t.hasData?(e.openBlock(),e.createElementBlock("div",{key:1,class:e.normalizeClass(["flex-1 flex justify-between",{"sm:hidden":e.unref(s)}])},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(n)?"a":"div"),{class:e.normalizeClass([{"cursor-not-allowed text-gray-400":!e.unref(n),"text-gray-700 hover:text-gray-500":e.unref(n)},"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),href:e.unref(n),dusk:e.unref(n)?"pagination-simple-previous":null,onClick:k[0]||(k[0]=e.withModifiers(g=>t.onClick(e.unref(n)),["prevent"]))},{default:e.withCtx(()=>[Ie,e.createElementVNode("span",Re,e.toDisplayString(e.unref(a).previous),1)]),_:1},8,["class","href","dusk"])),e.createVNode(j,{dusk:"per-page-mobile",value:e.unref(p),options:t.perPageOptions,"on-change":t.onPerPageChange},null,8,["value","options","on-change"]),(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(d)?"a":"div"),{class:e.normalizeClass([{"cursor-not-allowed text-gray-400":!e.unref(d),"text-gray-700 hover:text-gray-500":e.unref(d)},"ms-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md bg-white"]),href:e.unref(d),dusk:e.unref(d)?"pagination-simple-next":null,onClick:k[1]||(k[1]=e.withModifiers(g=>t.onClick(e.unref(d)),["prevent"]))},{default:e.withCtx(()=>[e.createElementVNode("span",We,e.toDisplayString(e.unref(a).next),1),Ae]),_:1},8,["class","href","dusk"]))],2)):e.createCommentVNode("",!0),t.hasData&&e.unref(s)?(e.openBlock(),e.createElementBlock("div",He,[e.createElementVNode("div",Ke,[e.createVNode(j,{dusk:"per-page-full",value:e.unref(p),options:t.perPageOptions,"on-change":t.onPerPageChange},null,8,["value","options","on-change"]),e.createElementVNode("p",Ge,[e.createElementVNode("span",Qe,e.toDisplayString(e.unref(r).from),1),e.createTextVNode(" "+e.toDisplayString(e.unref(a).to)+" ",1),e.createElementVNode("span",Ue,e.toDisplayString(e.unref(r).to),1),e.createTextVNode(" "+e.toDisplayString(e.unref(a).of)+" ",1),e.createElementVNode("span",Ye,e.toDisplayString(e.unref(r).total),1),e.createTextVNode(" "+e.toDisplayString(e.unref(a).results),1)])]),e.createElementVNode("div",null,[e.createElementVNode("nav",Je,[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(n)?"a":"div"),{class:e.normalizeClass([{"cursor-not-allowed text-gray-400":!e.unref(n),"text-gray-500 hover:bg-gray-50":e.unref(n)},"relative inline-flex items-center px-2 py-2 rounded-s-md border border-gray-300 bg-white text-sm font-medium"]),href:e.unref(n),dusk:e.unref(n)?"pagination-previous":null,onClick:k[2]||(k[2]=e.withModifiers(g=>t.onClick(e.unref(n)),["prevent"]))},{default:e.withCtx(()=>[e.createElementVNode("span",Xe,e.toDisplayString(e.unref(a).previous),1),Ze]),_:1},8,["class","href","dusk"])),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r).links,(g,_)=>(e.openBlock(),e.createElementBlock("div",{key:_},[e.renderSlot(b.$slots,"link",{},()=>[!isNaN(g.label)||g.label==="..."?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(g.url?"a":"div"),{key:0,href:g.url,dusk:g.url?`pagination-${g.label}`:null,class:e.normalizeClass(["relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700",{"cursor-not-allowed":!g.url,"hover:bg-gray-50":g.url,"bg-gray-100":g.active}]),onClick:e.withModifiers(N=>t.onClick(g.url),["prevent"])},{default:e.withCtx(()=>[e.createTextVNode(e.toDisplayString(g.label),1)]),_:2},1032,["href","dusk","class","onClick"])):e.createCommentVNode("",!0)])]))),128)),(e.openBlock(),e.createBlock(e.resolveDynamicComponent(e.unref(d)?"a":"div"),{class:e.normalizeClass([{"cursor-not-allowed text-gray-400":!e.unref(d),"text-gray-500 hover:bg-gray-50":e.unref(d)},"relative inline-flex items-center px-2 py-2 rounded-e-md border border-gray-300 bg-white text-sm font-medium"]),href:e.unref(d),dusk:e.unref(d)?"pagination-next":null,onClick:k[3]||(k[3]=e.withModifiers(g=>t.onClick(e.unref(d)),["prevent"]))},{default:e.withCtx(()=>[e.createElementVNode("span",ve,e.toDisplayString(e.unref(a).next),1),et]),_:1},8,["class","href","dusk"]))])])])):e.createCommentVNode("",!0)])):e.createCommentVNode("",!0)}},tt=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})],-1),rt={role:"menu","aria-orientation":"horizontal","aria-labelledby":"add-search-input-menu",class:"min-w-max"},nt=["dusk","onClick"],z={__name:"TableAddSearchRow",props:{searchInputs:{type:Object,required:!0},hasSearchInputsWithoutValue:{type:Boolean,required:!0},onAdd:{type:Function,required:!0}},setup(t){const o=t,a=e.ref(null);function s(i){o.onAdd(i),a.value.hide()}return(i,r)=>(e.openBlock(),e.createBlock(C,{ref_key:"dropdown",ref:a,dusk:"add-search-row-dropdown",disabled:!t.hasSearchInputsWithoutValue,class:"w-auto"},{button:e.withCtx(()=>[tt]),default:e.withCtx(()=>[e.createElementVNode("div",rt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.searchInputs,(n,d)=>(e.openBlock(),e.createElementBlock("button",{key:d,dusk:`add-search-row-${n.key}`,class:"text-start w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900",role:"menuitem",onClick:e.withModifiers(p=>s(n.key),["prevent"])},e.toDisplayString(n.label),9,nt))),128))])]),_:1},8,["disabled"]))}},lt=[e.createElementVNode("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"},null,-1),e.createElementVNode("path",{"fill-rule":"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z","clip-rule":"evenodd"},null,-1)],ot={role:"menu","aria-orientation":"horizontal","aria-labelledby":"toggle-columns-menu",class:"min-w-max"},at={class:"px-2"},st={class:"divide-y divide-gray-200"},it={class:"text-sm text-gray-900"},ct=["aria-pressed","aria-labelledby","aria-describedby","dusk","onClick"],dt=e.createElementVNode("span",{class:"sr-only"},"Column status",-1),L={__name:"TableColumns",props:{columns:{type:Object,required:!0},hasHiddenColumns:{type:Boolean,required:!0},onChange:{type:Function,required:!0}},setup(t){const o=t;return(a,s)=>(e.openBlock(),e.createBlock(C,{placement:"bottom-end",dusk:"columns-dropdown",active:t.hasHiddenColumns},{button:e.withCtx(()=>[(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",class:e.normalizeClass(["h-5 w-5",{"text-gray-400":!t.hasHiddenColumns,"text-green-400":t.hasHiddenColumns}]),viewBox:"0 0 20 20",fill:"currentColor"},lt,2))]),default:e.withCtx(()=>[e.createElementVNode("div",ot,[e.createElementVNode("div",at,[e.createElementVNode("ul",st,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(o.columns,(i,r)=>e.withDirectives((e.openBlock(),e.createElementBlock("li",{key:r,class:"py-2 flex items-center justify-between"},[e.createElementVNode("p",it,e.toDisplayString(i.label),1),e.createElementVNode("button",{type:"button",class:e.normalizeClass(["ms-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue-500",{"bg-green-500":!i.hidden,"bg-gray-200":i.hidden}]),"aria-pressed":!i.hidden,"aria-labelledby":`toggle-column-${i.key}`,"aria-describedby":`toggle-column-${i.key}`,dusk:`toggle-column-${i.key}`,onClick:e.withModifiers(n=>t.onChange(i.key,i.hidden),["prevent"])},[dt,e.createElementVNode("span",{"aria-hidden":"true",class:e.normalizeClass([{"translate-x-5":!i.hidden,"translate-x-0":i.hidden},"inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"])},null,2)],10,ct)])),[[e.vShow,i.can_be_hidden]])),128))])])])]),_:1},8,["active"]))}},ut=[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z","clip-rule":"evenodd"},null,-1)],ft={role:"menu","aria-orientation":"horizontal","aria-labelledby":"filter-menu",class:"min-w-max"},mt={class:"text-xs uppercase tracking-wide bg-gray-100 p-3"},pt={class:"p-2"},ht=["name","value","onChange"],gt=["value"],I={__name:"TableFilter",props:{hasEnabledFilters:{type:Boolean,required:!0},filters:{type:Object,required:!0},onFilterChange:{type:Function,required:!0}},setup(t){return(o,a)=>(e.openBlock(),e.createBlock(C,{placement:"bottom-end",dusk:"filters-dropdown",active:t.hasEnabledFilters},{button:e.withCtx(()=>[(e.openBlock(),e.createElementBlock("svg",{xmlns:"http://www.w3.org/2000/svg",class:e.normalizeClass(["h-5 w-5",{"text-gray-400":!t.hasEnabledFilters,"text-green-400":t.hasEnabledFilters}]),viewBox:"0 0 20 20",fill:"currentColor"},ut,2))]),default:e.withCtx(()=>[e.createElementVNode("div",ft,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.filters,(s,i)=>(e.openBlock(),e.createElementBlock("div",{key:i},[e.createElementVNode("h3",mt,e.toDisplayString(s.label),1),e.createElementVNode("div",pt,[s.type==="select"?(e.openBlock(),e.createElementBlock("select",{key:0,name:s.key,value:s.value,class:"block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm text-sm border-gray-300 rounded-md",onChange:r=>t.onFilterChange(s.key,r.target.value)},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(s.options,(r,n)=>(e.openBlock(),e.createElementBlock("option",{key:n,value:n},e.toDisplayString(r),9,gt))),128))],40,ht)):e.createCommentVNode("",!0)])]))),128))])]),_:1},8,["active"]))}},yt={class:"relative"},kt=["placeholder","value"],bt=e.createElementVNode("div",{class:"absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none"},[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})])],-1),R={__name:"TableGlobalSearch",props:{label:{type:String,default:"Search...",required:!1},value:{type:String,default:"",required:!1},onChange:{type:Function,required:!0}},setup(t){return(o,a)=>(e.openBlock(),e.createElementBlock("div",yt,[e.createElementVNode("input",{class:"block w-full ps-9 text-sm rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300",placeholder:t.label,value:t.value,type:"text",name:"global",onInput:a[0]||(a[0]=s=>t.onChange(s.target.value))},null,40,kt),bt]))}},wt={class:"flex rounded-md shadow-sm relative mt-3"},_t=["for"],xt=e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 me-2 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"})],-1),Bt=["id","name","value","onInput"],Ct={class:"absolute inset-y-0 end-0 pe-3 flex items-center"},Et=["dusk","onClick"],$t=[e.createElementVNode("span",{class:"sr-only"},"Remove search",-1),e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e.createElementVNode("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1)],W={__name:"TableSearchRows",props:{searchInputs:{type:Object,required:!0},forcedVisibleSearchInputs:{type:Array,required:!0},onChange:{type:Function,required:!0},onRemove:{type:Function,required:!0}},setup(t){const o=t,a={el:e.ref([])};let s=e.computed(()=>a.el.value);function i(r){return o.forcedVisibleSearchInputs.includes(r)}return e.watch(o.forcedVisibleSearchInputs,r=>{const n=r.length>0?r[r.length-1]:null;!n||e.nextTick().then(()=>{const d=ke.default(s.value,p=>p.__vnode.key===n);d&&d.focus()})},{immediate:!0}),(r,n)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.searchInputs,(d,p)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",{key:p,class:"px-4 sm:px-0"},[e.createElementVNode("div",wt,[e.createElementVNode("label",{for:d.key,class:"inline-flex items-center px-4 rounded-s-md border border-e-0 border-gray-300 bg-gray-50 text-gray-500 text-sm"},[xt,e.createElementVNode("span",null,e.toDisplayString(d.label),1)],8,_t),(e.openBlock(),e.createElementBlock("input",{id:d.key,ref_for:!0,ref:a.el,key:d.key,name:d.key,value:d.value,type:"text",class:"flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-e-md focus:ring-indigo-500 focus:border-indigo-500 text-sm border-gray-300",onInput:b=>t.onChange(d.key,b.target.value)},null,40,Bt)),e.createElementVNode("div",Ct,[e.createElementVNode("button",{class:"rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",dusk:`remove-search-row-${d.key}`,onClick:e.withModifiers(b=>t.onRemove(d.key),["prevent"])},$t,8,Et)])])])),[[e.vShow,d.value!==null||i(d.key)]])),128))}},Vt=[e.createElementVNode("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5 me-2 text-gray-400",viewBox:"0 0 20 20",fill:"currentColor"},[e.createElementVNode("path",{"fill-rule":"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),e.createElementVNode("span",null,"Reset",-1)],A={__name:"TableReset",props:{onClick:{type:Function,required:!0}},setup(t){return(o,a)=>(e.openBlock(),e.createElementBlock("button",{ref:"button",type:"button",dusk:"reset-table",class:"w-full bg-white border rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-gray-300","aria-haspopup":"true",onClick:a[0]||(a[0]=e.withModifiers((...s)=>t.onClick&&t.onClick(...s),["prevent"]))},Vt,512))}},St=(t,o)=>{const a=t.__vccOpts||t;for(const[s,i]of o)a[s]=i;return a},Nt={},qt={class:"flex flex-col"},Dt={class:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},Ft={class:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},Tt={class:"shadow border-b border-gray-200 relative"};function Pt(t,o){return e.openBlock(),e.createElementBlock("div",qt,[e.createElementVNode("div",Dt,[e.createElementVNode("div",Ft,[e.createElementVNode("div",Tt,[e.renderSlot(t.$slots,"default")])])])])}const H=St(Nt,[["render",Pt]]),Mt=["dusk"],jt={class:"flex flex-row flex-wrap sm:flex-nowrap justify-start px-4 sm:px-0"},Ot={class:"order-2 sm:order-1 me-2 sm:me-4"},zt={key:0,class:"flex flex-row w-full sm:w-auto sm:flex-grow order-1 sm:order-2 mb-2 sm:mb-0 sm:me-4"},Lt={key:0,class:"order-5 sm:order-3 sm:me-4 ms-auto"},It={class:"min-w-full divide-y divide-gray-200 bg-white"},Rt={class:"bg-gray-50"},Wt={class:"font-medium text-xs uppercase text-start tracking-wider text-gray-500 py-3 px-6"},At={class:"bg-white divide-y divide-gray-200"},Ht={__name:"Table",props:{inertia:{type:Object,default:()=>({}),required:!1},name:{type:String,default:"default",required:!1},striped:{type:Boolean,default:!1,required:!1},preventOverlappingRequests:{type:Boolean,default:!0,required:!1},inputDebounceMs:{type:Number,default:350,required:!1},preserveScroll:{type:[Boolean,String],default:!1,required:!1},resource:{type:Object,default:()=>({}),required:!1},meta:{type:Object,default:()=>({}),required:!1},data:{type:Object,default:()=>({}),required:!1}},setup(t){const o=t,a=e.getCurrentInstance(),s=a?a.appContext.config.globalProperties.$inertia:o.inertia,i=e.ref(0),r=e.computed(()=>{let l=s.page.props.queryBuilderProps?s.page.props.queryBuilderProps[o.name]||{}:{};return l._updates=i.value,l}),n=e.ref(r.value),d=e.computed(()=>r.value.pageName),p=e.ref([]),b=e.ref(null),k=e.computed(()=>!(r.value.hasToggleableColumns||r.value.hasFilters||r.value.hasSearchInputs||r.value.globalSearch)),g=e.computed(()=>Object.keys(o.resource).length===0?o.data:"data"in o.resource?o.resource.data:o.resource),_=e.computed(()=>Object.keys(o.resource).length===0?o.meta:"links"in o.resource&&"meta"in o.resource&&Object.keys(o.resource.links).length===4&&"next"in o.resource.links&&"prev"in o.resource.links?{...o.resource.meta,next_page_url:o.resource.links.next,prev_page_url:o.resource.links.prev}:"meta"in o.resource?o.resource.meta:o.resource),N=e.computed(()=>g.value.length>0||_.value.total>0);function Kt(l){p.value=p.value.filter(c=>c!=l),E(l,null)}function K(l){p.value.push(l)}const Gt=e.computed(()=>{if(p.value.length>0)return!0;const l=$.default.parse(location.search.substring(1));if(l[d.value]>1)return!0;const f=o.name==="default"?"":o.name+"_";let m=!1;return w.default(["filter","columns","cursor","sort"],h=>{const B=l[f+h];h==="sort"&&B===r.value.defaultSort||B!==void 0&&(m=!0)}),m});function G(){p.value=[],w.default(n.value.filters,(l,c)=>{n.value.filters[c].value=null}),w.default(n.value.searchInputs,(l,c)=>{n.value.searchInputs[c].value=null}),w.default(n.value.columns,(l,c)=>{n.value.columns[c].hidden=l.can_be_hidden?!r.value.defaultVisibleToggleableColumns.includes(l.key):!1}),n.value.sort=null,n.value.cursor=null,n.value.page=1}const Q={};function E(l,c){clearTimeout(Q[l]),Q[l]=setTimeout(()=>{D.value&&o.preventOverlappingRequests&&D.value.cancel();const f=x("searchInputs",l);n.value.searchInputs[f].value=c,n.value.cursor=null,n.value.page=1},o.inputDebounceMs)}function U(l){E("global",l)}function Y(l,c){const f=x("filters",l);n.value.filters[f].value=c,n.value.cursor=null,n.value.page=1}function J(l){n.value.cursor=null,n.value.perPage=l,n.value.page=1}function x(l,c){return _e.default(n.value[l],f=>f.key==c)}function X(l,c){const f=x("columns",l);n.value.columns[f].hidden=!c}function Qt(){let l={};return w.default(n.value.searchInputs,c=>{c.value!==null&&(l[c.key]=c.value)}),w.default(n.value.filters,c=>{c.value!==null&&(l[c.key]=c.value)}),l}function Ut(){const l=n.value.columns;let c=we.default(l,m=>!m.hidden),f=Be.default(c,m=>m.key).sort();return xe.default(f,r.value.defaultVisibleToggleableColumns)?{}:f}function Yt(){const l=Qt(),c=Ut(),f={};Object.keys(l).length>0&&(f.filter=l),Object.keys(c).length>0&&(f.columns=c);const m=n.value.cursor,h=n.value.page,B=n.value.sort,te=n.value.perPage;return m&&(f.cursor=m),h>1&&(f.page=h),te>1&&(f.perPage=te),B&&(f.sort=B),f}function Jt(){const l=$.default.parse(location.search.substring(1)),c=o.name==="default"?"":o.name+"_";w.default(["filter","columns","cursor","sort"],m=>{delete l[c+m]}),delete l[d.value],w.default(Yt(),(m,h)=>{h==="page"?l[d.value]=m:h==="perPage"?l.perPage=m:l[c+h]=m});let f=$.default.stringify(l,{filter(m,h){return typeof h=="object"&&h!==null?Ce.default(h):h},skipNulls:!0,strictNullHandling:!0});return(!f||f===d.value+"=1")&&(f=""),f}const q=e.ref(!1),D=e.ref(null);function F(l){!l||s.get(l,{},{replace:!0,preserveState:!0,preserveScroll:o.preserveScroll!==!1,onBefore(){q.value=!0},onCancelToken(c){D.value=c},onFinish(){q.value=!1},onSuccess(){if("queryBuilderProps"in s.page.props&&(n.value.cursor=r.value.cursor,n.value.page=r.value.page),o.preserveScroll==="table-top"){const f=b.value.getBoundingClientRect().top+window.pageYOffset+-8;window.scrollTo({top:f})}i.value++}})}e.watch(n,()=>{F(location.pathname+"?"+Jt())},{deep:!0});const Z=()=>{i.value++};e.onMounted(()=>{document.addEventListener("inertia:success",Z)}),e.onUnmounted(()=>{document.removeEventListener("inertia:success",Z)});function v(l){n.value.sort==l?n.value.sort=`-${l}`:n.value.sort=l,n.value.cursor=null,n.value.page=1}function T(l){const c=x("columns",l);return!n.value.columns[c].hidden}function ee(l){const c=x("columns",l),f=be.default(r.value.columns[c]);return f.onSort=v,f}return(l,c)=>(e.openBlock(),e.createBlock(e.Transition,null,{default:e.withCtx(()=>[(e.openBlock(),e.createElementBlock("fieldset",{ref_key:"tableFieldset",ref:b,key:`table-${t.name}`,dusk:`table-${t.name}`,class:e.normalizeClass(["min-w-0",{"opacity-75":q.value}])},[e.createElementVNode("div",jt,[e.createElementVNode("div",Ot,[e.renderSlot(l.$slots,"tableFilter",{hasFilters:e.unref(r).hasFilters,hasEnabledFilters:e.unref(r).hasEnabledFilters,filters:e.unref(r).filters,onFilterChange:Y},()=>[e.unref(r).hasFilters?(e.openBlock(),e.createBlock(I,{key:0,"has-enabled-filters":e.unref(r).hasEnabledFilters,filters:e.unref(r).filters,"on-filter-change":Y},null,8,["has-enabled-filters","filters"])):e.createCommentVNode("",!0)])]),e.unref(r).globalSearch?(e.openBlock(),e.createElementBlock("div",zt,[e.renderSlot(l.$slots,"tableGlobalSearch",{hasGlobalSearch:e.unref(r).globalSearch,label:e.unref(r).globalSearch?e.unref(r).globalSearch.label:null,value:e.unref(r).globalSearch?e.unref(r).globalSearch.value:null,onChange:U},()=>[e.unref(r).globalSearch?(e.openBlock(),e.createBlock(R,{key:0,class:"flex-grow",label:e.unref(r).globalSearch.label,value:e.unref(r).globalSearch.value,"on-change":U},null,8,["label","value"])):e.createCommentVNode("",!0)])])):e.createCommentVNode("",!0),e.renderSlot(l.$slots,"tableReset",{canBeReset:"canBeReset",onClick:G},()=>[e.unref(Gt)?(e.openBlock(),e.createElementBlock("div",Lt,[e.createVNode(A,{"on-click":G})])):e.createCommentVNode("",!0)]),e.renderSlot(l.$slots,"tableAddSearchRow",{hasSearchInputs:e.unref(r).hasSearchInputs,hasSearchInputsWithoutValue:e.unref(r).hasSearchInputsWithoutValue,searchInputs:e.unref(r).searchInputsWithoutGlobal,onAdd:K},()=>[e.unref(r).hasSearchInputs?(e.openBlock(),e.createBlock(z,{key:0,class:"order-3 sm:order-4 me-2 sm:me-4","search-inputs":e.unref(r).searchInputsWithoutGlobal,"has-search-inputs-without-value":e.unref(r).hasSearchInputsWithoutValue,"on-add":K},null,8,["search-inputs","has-search-inputs-without-value"])):e.createCommentVNode("",!0)]),e.renderSlot(l.$slots,"tableColumns",{hasColumns:e.unref(r).hasToggleableColumns,columns:e.unref(r).columns,hasHiddenColumns:e.unref(r).hasHiddenColumns,onChange:X},()=>[e.unref(r).hasToggleableColumns?(e.openBlock(),e.createBlock(L,{key:0,class:"order-4 me-4 sm:me-0 sm:order-5",columns:e.unref(r).columns,"has-hidden-columns":e.unref(r).hasHiddenColumns,"on-change":X},null,8,["columns","has-hidden-columns"])):e.createCommentVNode("",!0)])]),e.renderSlot(l.$slots,"tableSearchRows",{hasSearchRowsWithValue:e.unref(r).hasSearchInputsWithValue,searchInputs:e.unref(r).searchInputsWithoutGlobal,forcedVisibleSearchInputs:p.value,onChange:E},()=>[e.unref(r).hasSearchInputsWithValue||p.value.length>0?(e.openBlock(),e.createBlock(W,{key:0,"search-inputs":e.unref(r).searchInputsWithoutGlobal,"forced-visible-search-inputs":p.value,"on-change":E,"on-remove":Kt},null,8,["search-inputs","forced-visible-search-inputs"])):e.createCommentVNode("",!0)]),e.renderSlot(l.$slots,"tableWrapper",{meta:e.unref(_)},()=>[e.createVNode(H,{class:e.normalizeClass({"mt-3":!e.unref(k)})},{default:e.withCtx(()=>[e.renderSlot(l.$slots,"table",{},()=>[e.createElementVNode("table",It,[e.createElementVNode("thead",Rt,[e.renderSlot(l.$slots,"head",{show:T,sortBy:v,header:ee},()=>[e.createElementVNode("tr",Wt,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r).columns,f=>(e.openBlock(),e.createBlock(M,{key:`table-${t.name}-header-${f.key}`,cell:ee(f.key)},null,8,["cell"]))),128))])])]),e.createElementVNode("tbody",At,[e.renderSlot(l.$slots,"body",{show:T},()=>[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(g),(f,m)=>(e.openBlock(),e.createElementBlock("tr",{key:`table-${t.name}-row-${m}`,class:e.normalizeClass(["",{"bg-gray-50":t.striped&&m%2,"hover:bg-gray-100":t.striped,"hover:bg-gray-50":!t.striped}])},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(r).columns,h=>e.withDirectives((e.openBlock(),e.createElementBlock("td",{key:`table-${t.name}-row-${m}-column-${h.key}`,class:"text-sm py-4 px-6 text-gray-500 whitespace-nowrap"},[e.renderSlot(l.$slots,`cell(${h.key})`,{item:f},()=>[e.createTextVNode(e.toDisplayString(f[h.key]),1)])])),[[e.vShow,T(h.key)]])),128))],2))),128))])])])]),e.renderSlot(l.$slots,"pagination",{onClick:F,hasData:e.unref(N),meta:e.unref(_),perPageOptions:e.unref(r).perPageOptions,onPerPageChange:J},()=>[e.createVNode(O,{"on-click":F,"has-data":e.unref(N),meta:e.unref(_),"per-page-options":e.unref(r).perPageOptions,"on-per-page-change":J},null,8,["has-data","meta","per-page-options"])])]),_:3},8,["class"])])],10,Mt))]),_:3}))}};u.ButtonWithDropdown=C,u.HeaderCell=M,u.OnClickOutside=P,u.Pagination=O,u.Table=Ht,u.TableAddSearchRow=z,u.TableColumns=L,u.TableFilter=I,u.TableGlobalSearch=R,u.TableReset=A,u.TableSearchRows=W,u.TableWrapper=H,u.getTranslations=S,u.setTranslation=Pe,u.setTranslations=Me,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
