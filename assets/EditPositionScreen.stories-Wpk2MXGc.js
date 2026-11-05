import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createLucideIcon-BIy-x5OT.js";import{n as a,t as o}from"./BottomNav-yNyHYz7t.js";import{n as s,t as ee}from"./check-jRkMlj5W.js";import{n as te,t as ne}from"./clipboard-C-IThcF1.js";import{n as re,t as ie}from"./copy-Ce613eh6.js";import{n as ae,t as oe}from"./HeaderBar-Bp4ZgIQL.js";import{n as se,t as ce}from"./pencil-oEzyljlM.js";import{n as le,t as c}from"./NoteLine-DCMsQqWm.js";import{n as ue,t as de}from"./x-DLqO42RV.js";import{n as fe,t as pe}from"./TextInputField-BktQP6Eo.js";import{n as l,t as me}from"./Dropdown-_el6jnaL.js";import{n as u,t as he}from"./PrimaryButton-BS971O0a.js";import{n as ge,t as _e}from"./pasteFields-hQG-Gcsi.js";import{n as d,t as ve}from"./ConfirmationSheet-DdxaNsJg.js";import{n as ye,t as be}from"./SecondaryButton-DyDrxp7l.js";import{n as xe,u as Se}from"./mapping-BSBavKZV.js";import{n as Ce,o as we}from"./stackFixtures-DLE0JGwT.js";import{i as Te,o as f,t as Ee}from"./data-U_75tm97.js";var De,Oe;function ke(){return(ke=e((()=>{r(),De={name:`pencil-line`,size:24,node:[[`path`,{d:`M13 21h8`,key:`1jsn5i`}],[`path`,{d:`m15 5 4 4`,key:`1mk7zo`}],[`path`,{d:`M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,key:`1a8usu`}]]},De.node,Oe=i(De)})))()}var p,Ae;function m(){return(m=e((()=>{r(),p={name:`undo-2`,size:24,node:[[`path`,{d:`M9 14 4 9l5-5`,key:`102s5s`}],[`path`,{d:`M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11`,key:`f3b9sd`}]]},p.node,Ae=i(p)})))()}function h(e,t){if(t.startsWith(`contacts.`)){let[,n,r]=t.split(`.`);return e.contacts?.[n]?.[r]}return e[t]}function je(e){let t={};for(let n of _)t[n]=h(e,n)??``;return t}function Me(e,t){return f(e,t.values[e])!==f(e,t.base[e])}function g(e){return _.filter(t=>Me(t,e))}function Ne(e,t=[]){return e?_.filter(n=>!t.includes(n)&&h(e.changes,n)!==void 0):[]}function Pe(e,t,n=[]){let r=je(e),i={...r},a={};if(t)for(let e of _){if(n.includes(e))continue;let o=h(t.changes,e);if(o===void 0)continue;let s=h(t.startedFrom,e);i[e]=o??``,f(e,i[e])!==f(e,r[e])&&f(e,s)!==f(e,r[e])&&(a[e]=r[e])}return{values:i,base:r,conflicts:a}}function Fe(e,t,n=[]){let r=je(t),i={...e.values},a={...e.base},o={...e.conflicts},s=!1;for(let t of _){let ee=f(t,e.values[t]),te=f(t,e.base[t]),ne=f(t,r[t]);te!==ne&&(s=!0,ee===te||n.includes(t)?(i[t]=r[t],a[t]=r[t]):ee===ne?(a[t]=r[t],delete o[t]):(a[t]=r[t],o[t]=r[t]))}for(let e of Object.keys(o))Me(e,{values:i,base:a})||(delete o[e],s=!0);return s?{values:i,base:a,conflicts:o}:e}function Ie(e){let t={},n={},r=(e,t,n)=>{if(!t.startsWith(`contacts.`)){e[t]=n;return}let[,r,i]=t.split(`.`),a=e.contacts??={};(a[r]??={})[i]=n};for(let i of g(e))r(t,i,e.values[i]),r(n,i,e.base[i]===``?null:e.base[i]);return{changes:t,startedFrom:n}}function Le(e){let t={},n={},r=(e,t,n)=>{if(!t.startsWith(`contacts.`)){e[t]=n;return}let[,r,i]=t.split(`.`),a=e.contacts??={};(a[r]??={})[i]=n};for(let i of g(e)){let a=e.values[i].trim();r(t,i,i===`company`?a:a===``?null:a),r(n,i,f(i,e.base[i]))}return{changes:t,expected:n}}function Re(e,t=[]){let n={},r=new Set(g(e)),i=t=>e.values[t].trim();r.has(`company`)&&!Se(i(`company`))&&(n.company=`company`),r.has(`jobLink`)&&i(`jobLink`)!==``&&!qe.test(i(`jobLink`))&&(n.jobLink=`link`);for(let e of Te){let a=`contacts.${e}.name`,o=`contacts.${e}.email`,s=`contacts.${e}.phone`;r.has(o)&&i(o)!==``&&!Ke.test(i(o))&&(n[o]=`email`),(r.has(a)||r.has(o)||r.has(s))&&i(a)===``&&(i(o)!==``||i(s)!==``)&&!t.includes(a)&&(n[a]=`contact`)}return n}function ze(e){return Ve.find(t=>e[t]!==void 0)??null}function Be(e,t){let n=f(e,t),r=He;return n!==null&&(r=e===`workModel`?Ue.find(e=>e.value===n)?.label??n:e===`howApplied`?We.find(e=>e.value===n)?.label??n:e===`appliedDate`?xe(n)??n:n),`Saved now: ${r.length>40?`${r.slice(0,40).trimEnd()}…`:r}`}var Ve,_,He,Ue,We,Ge,Ke,qe;function Je(){return(Je=e((()=>{Ee(),Ve=[`company`,`role`,`compensationAsked`,`contacts.hr.name`,`contacts.hr.email`,`contacts.hr.phone`,`contacts.hiringManager.name`,`contacts.hiringManager.email`,`contacts.hiringManager.phone`,`location`,`workModel`,`appliedDate`,`howApplied`,`referredBy`,`jobLink`,`notes`],_=Ve,He=`Not added yet`,Ue=[{value:`remote`,label:`Remote`},{value:`hybrid`,label:`Hybrid`},{value:`onsite`,label:`On-site`}],We=[{value:`cold`,label:`Cold`},{value:`referred`,label:`Referred`},{value:`other`,label:`Other`}],Ge={company:`Company needs a letter or number.`,email:`Emails look like name@company.com.`,link:`Links need https:// at the start.`,contact:`Add a name for this contact.`},Ke=/^[^@\s]+@[^@\s]+$/,qe=/^https?:\/\//i})))()}var Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,v,st,ct,lt,ut,y,dt,ft,b;function pt(){return(pt=e((()=>{Ye=`_screen_11zyh_4`,Xe=`_content_11zyh_29`,Ze=`_top_11zyh_40`,Qe=`_identity_11zyh_46`,$e=`_identityLine_11zyh_52`,et=`_statusLine_11zyh_65`,tt=`_draftLine_11zyh_70`,nt=`_topNotes_11zyh_80`,rt=`_groups_11zyh_90`,it=`_group_11zyh_90`,at=`_heading_11zyh_102`,ot=`_field_11zyh_113`,v=`_slot_11zyh_121`,st=`_legend_11zyh_135`,ct=`_plain_11zyh_146`,lt=`_actions_11zyh_157`,ut=`_saveNote_11zyh_165`,y=`_touch_11zyh_170`,dt=`_sheetBody_11zyh_174`,ft=`_sheetActions_11zyh_183`,b={screen:Ye,"screen-in":`_screen-in_11zyh_1`,content:Xe,top:Ze,identity:Qe,identityLine:$e,statusLine:et,draftLine:tt,topNotes:nt,groups:rt,group:it,heading:at,field:ot,slot:v,legend:st,plain:ct,actions:lt,saveNote:ut,touch:y,sheetBody:dt,sheetActions:ft}})))()}function x({saved:e,locked:t=[],company:n,role:r=``,archived:i=!1,moreContacts:a=!1,initialDraft:s=null,onDraft:te,onSave:re,onBack:ae,onNavigate:se,navActive:le=`stack`,readClipboardText:ue,className:fe}){let l=e===null,[u,_e]=(0,S.useState)(()=>{let n=Pe(e??_t,s,t);return e===null?{...n,conflicts:{}}:n}),d=(0,S.useRef)(u),ye=(0,S.useRef)(l),xe=(0,S.useRef)(t),Se=(0,S.useRef)(s),Ce=(0,S.useRef)(l),we=(0,S.useRef)(l),Te=(0,S.useRef)(te);(0,S.useEffect)(()=>{ye.current=l,xe.current=t,Se.current=s,Te.current=te});let[f,Ee]=(0,S.useState)(!1),De=(0,S.useRef)(s&&g(Pe(e??_t,s,t)).length>0?`kept`:`none`),ke=(0,S.useRef)(!1),p=(0,S.useRef)(void 0),m=(0,S.useRef)(!1),[h,je]=(0,S.useState)(!1),[Me,_]=(0,S.useState)(!1),[Ke,qe]=(0,S.useState)(!1),[Je,Ye]=(0,S.useState)(!1),[Xe,Ze]=(0,S.useState)({}),[Qe,$e]=(0,S.useState)(!1),[et,tt]=(0,S.useState)(null),[nt,rt]=(0,S.useState)(!1),[it,at]=(0,S.useState)({}),ot=(0,S.useRef)(i),v=(0,S.useCallback)(()=>{if(window.clearTimeout(p.current),m.current||!ke.current)return De.current;let e=Te.current(Ie(d.current));return De.current=e,Ee(e===`failed`),e},[]),st=(0,S.useCallback)(()=>{window.clearTimeout(p.current),p.current=window.setTimeout(v,mt)},[v]);function ct(e){let t=g(d.current).length>0;ke.current=!0,d.current=e,_e(e),!t&&g(e).length>0?v():st()}let lt=JSON.stringify(e);(0,S.useEffect)(()=>{if(e===null){Ce.current=!0;return}if(we.current=!1,Ce.current&&(Ce.current=!1,!ke.current)){let t=Pe(e,Se.current,xe.current);d.current=t,_e(t),De.current=g(t).length>0?`kept`:`none`;return}let t=Fe(d.current,e,xe.current);t!==d.current&&(d.current=t,_e(t),st())},[lt,st]),(0,S.useEffect)(()=>{let e=()=>{document.visibilityState===`hidden`&&v()},t=()=>{v()};return document.addEventListener(`visibilitychange`,e),window.addEventListener(`pagehide`,t),()=>{document.removeEventListener(`visibilitychange`,e),window.removeEventListener(`pagehide`,t),v(),window.clearTimeout(p.current)}},[v]),(0,S.useEffect)(()=>{if(!h){_(!1);return}let e=window.setTimeout(()=>_(!0),ht);return()=>window.clearTimeout(e)},[h]);let ut=l&&we.current?Ne(s,t):g(u),y=ut.length>0,dt=Re(u,t),ft=new Set(t),pt=h||l,x=e=>pt||ft.has(e);function yt(e){if(m.current)return;let t=v();if(g(d.current).length>0&&t===`failed`){tt(()=>e);return}e({draftKept:!ye.current&&t===`kept`&&g(d.current).length>0})}function bt(e){e===`stack`||e===`archive`||e===`add`?yt(t=>se?.(e,t)):se?.(e,{draftKept:!1})}function xt(e){document.getElementById(w(e))?.focus()}async function St(){if(m.current||l||!y)return;let e=ze(Re(d.current,xe.current));if(e){Ye(!0),xt(e);return}m.current=!0,window.clearTimeout(p.current),je(!0),qe(!1);let t;try{t=await re(Le(d.current))}catch{t={ok:!1,error:`other`}}t.ok||(m.current=!1,je(!1),t.error===`other`&&qe(!0),v())}function Ct(){$e(!1),Ye(!1),Ze({}),qe(!1);let n=Pe(e??_t,null,t);d.current=n,_e(n),ke.current=!0,v()}async function T(){let e=ut.map(e=>`${vt[e]}: ${u.values[e]}`).join(`
`);try{await navigator.clipboard.writeText(e),rt(!0),window.setTimeout(()=>rt(!1),gt)}catch{}}function E(e,t){at(t=>t[e]===void 0?t:{...t,[e]:void 0}),ct({...d.current,values:{...d.current.values,[e]:t}})}async function D(e,t){let n=await ge(t,ue);if(m.current||ye.current)return;let r=d.current;if(n.status===`silent`){at(t=>({...t,[e]:void 0}));return}if(n.status===`note`){at(t=>({...t,[e]:n.note}));return}if(r.values[e]!==``)return;let i={...r.values,[e]:n.value},a=e.replace(/\.email$/,`.name`);n.name&&a!==e&&i[a].trim()===``&&!xe.current.includes(a)&&(i[a]=n.name),at(t=>({...t,[e]:void 0,[a]:void 0})),ct({...r,values:i})}function O(e,t,n){let r=u.values[e]!==``;return{trailingIcon:r?(0,C.jsx)(de,{size:20,"aria-hidden":`true`}):(0,C.jsx)(ne,{size:20,"aria-hidden":`true`}),onTrailingIconClick:r?()=>E(e,``):()=>D(e,t),trailingIconLabel:`${r?`Clear`:`Paste`} ${n}`,trailingTouchTarget:!0}}function k(e){Ze(t=>t[e]?t:{...t,[e]:!0}),v()}function A(e){let t=dt[e];if(t){if(Je||Xe[e])return t;if(e.endsWith(`.name`)&&e.startsWith(`contacts.`)){let n=e.slice(0,e.lastIndexOf(`.`));if(Xe[`${n}.email`]||Xe[`${n}.phone`])return t}}}let wt=u.values.howApplied===`referred`||u.values.referredBy.trim()!==``||u.base.referredBy.trim()!==``,j=Ve.filter(e=>e!==`referredBy`||wt),M=`jobLink`;function N(e){if(e===M){document.activeElement?.blur();return}let t=j[j.indexOf(e)+1];t&&xt(t)}function P(e){let t=A(e),n=u.conflicts[e],r=it[e],i=[];return r&&i.push(`${w(e)}-paste`),t&&i.push(`${w(e)}-problem`),n!==void 0&&i.push(`${w(e)}-saved`),{invalid:!!t,describedBy:i.length>0?i.join(` `):void 0,notes:(0,C.jsxs)(C.Fragment,{children:[r&&(0,C.jsx)(`div`,{id:`${w(e)}-paste`,children:(0,C.jsx)(c,{children:r})}),t&&(0,C.jsx)(`div`,{id:`${w(e)}-problem`,children:(0,C.jsx)(c,{children:Ge[t]})}),n!==void 0&&(0,C.jsx)(`div`,{id:`${w(e)}-saved`,children:(0,C.jsx)(c,{children:Be(e,n)})})]})}}function F(e,t,n,r={}){let i=P(e);return(0,C.jsxs)(`div`,{className:b.field,children:[(0,C.jsx)(pe,{label:t,value:u.values[e],onChange:t=>E(e,t),placeholder:n,disabled:x(e),inputId:w(e),invalid:i.invalid,describedBy:i.describedBy,autoComplete:`off`,enterKeyHint:e===M?`done`:`next`,onEnter:()=>N(e),onBlur:()=>k(e),...r}),i.notes]})}function I(e,t){let n=`contacts.${e}`;return(0,C.jsxs)(`fieldset`,{className:b.slot,children:[(0,C.jsx)(`legend`,{className:b.legend,children:t}),F(`${n}.name`,`Name`,`Full name`,{autoCapitalize:`words`,autoCorrect:`off`}),F(`${n}.email`,`Email`,`name@company.com`,{type:`email`,inputMode:`email`,autoCapitalize:`none`,autoCorrect:`off`,...O(`${n}.email`,`email`,`${t} email`)}),F(`${n}.phone`,`Phone`,`Phone number`,{type:`tel`,inputMode:`tel`,autoCapitalize:`none`,autoCorrect:`off`,...O(`${n}.phone`,`phone`,`${t} phone`)})]})}let L=Object.keys(u.conflicts).length>0,R=!l&&i&&!ot.current,z=!l&&!i&&ot.current,B=y&&!f,V=u.values.appliedDate,H=P(`appliedDate`),U=P(`howApplied`),W=P(`workModel`);return(0,C.jsxs)(`div`,{className:[b.screen,fe].filter(Boolean).join(` `),"data-screen":`edit`,children:[(0,C.jsxs)(`div`,{className:b.content,children:[(0,C.jsxs)(`div`,{className:b.top,children:[(0,C.jsx)(oe,{title:`Edit position`,onBack:()=>yt(ae)}),(0,C.jsxs)(`div`,{className:b.identity,children:[(0,C.jsx)(`p`,{className:b.identityLine,children:r?`${n} · ${r}`:n}),i&&(0,C.jsx)(`p`,{className:b.identityLine,children:`In the Archive`})]}),(0,C.jsxs)(`div`,{className:b.statusLine,role:`status`,children:[B&&(0,C.jsxs)(`span`,{className:b.draftLine,children:[(0,C.jsx)(Oe,{size:16,"aria-hidden":`true`}),(0,C.jsx)(`span`,{children:`Draft kept · not saved yet`})]}),y&&f&&(0,C.jsx)(c,{children:`Couldn’t keep your draft on this device. Save before you leave to keep your changes.`})]}),(0,C.jsxs)(`div`,{className:b.topNotes,role:`status`,children:[l&&y&&(0,C.jsx)(c,{children:`This position is no longer in your saved positions. Your changes are still here to copy.`}),l&&!y&&(0,C.jsx)(c,{children:`This position is no longer in your saved positions.`}),R&&(0,C.jsx)(c,{children:`This position is in the Archive now. Saving keeps it there.`}),z&&(0,C.jsx)(c,{children:`This position is back in your stack now. Saving keeps it there.`}),!l&&L&&(0,C.jsx)(c,{children:`This position changed since your draft. Saving keeps your version.`})]})]}),(0,C.jsxs)(`div`,{className:b.groups,children:[(0,C.jsxs)(`section`,{className:b.group,"aria-labelledby":`ep-h-details`,children:[(0,C.jsx)(`h2`,{className:b.heading,id:`ep-h-details`,children:`Position details`}),F(`company`,`Company`,`Company name`,{autoCapitalize:`words`,autoCorrect:`off`}),F(`role`,`Role`,`Role title`,{autoCapitalize:`words`,autoCorrect:`off`})]}),(0,C.jsxs)(`section`,{className:b.group,"aria-labelledby":`ep-h-comp`,children:[(0,C.jsx)(`h2`,{className:b.heading,id:`ep-h-comp`,children:`Compensation`}),F(`compensationAsked`,`Asked`,`Like 35k – 37k`,{autoCapitalize:`none`,autoCorrect:`off`})]}),(0,C.jsxs)(`section`,{className:b.group,"aria-labelledby":`ep-h-contact`,children:[(0,C.jsx)(`h2`,{className:b.heading,id:`ep-h-contact`,children:`Contact`}),I(`hr`,`HR`),I(`hiringManager`,`Hiring Manager`),a&&(0,C.jsx)(`p`,{className:b.plain,children:`More contacts are saved on this position. They stay as they are.`})]}),(0,C.jsxs)(`section`,{className:b.group,"aria-labelledby":`ep-h-logistics`,children:[(0,C.jsx)(`h2`,{className:b.heading,id:`ep-h-logistics`,children:`Logistics`}),F(`location`,`Location`,`City or area`,{autoCapitalize:`words`,autoCorrect:`off`}),(0,C.jsxs)(`div`,{className:b.field,children:[(0,C.jsx)(me,{label:`Work model`,value:u.values.workModel,onChange:e=>E(`workModel`,e),options:Ue,emptyLabel:He,disabled:x(`workModel`),selectId:w(`workModel`),onBlur:()=>k(`workModel`)}),W.notes]})]}),(0,C.jsxs)(`section`,{className:b.group,"aria-labelledby":`ep-h-applied`,children:[(0,C.jsx)(`h2`,{className:b.heading,id:`ep-h-applied`,children:`Applied`}),(0,C.jsxs)(`div`,{className:b.field,children:[(0,C.jsx)(pe,{label:`When did I apply?`,type:`date`,value:V,onChange:e=>E(`appliedDate`,e),disabled:x(`appliedDate`),inputId:w(`appliedDate`),invalid:H.invalid,describedBy:H.describedBy,helperText:`Also sets the date on the Applied step.`,trailingIcon:V?(0,C.jsx)(de,{size:20,"aria-hidden":`true`}):void 0,onTrailingIconClick:()=>E(`appliedDate`,``),trailingIconLabel:`Clear date`,trailingTouchTarget:!0,onBlur:()=>k(`appliedDate`)}),H.notes]}),(0,C.jsxs)(`div`,{className:b.field,children:[(0,C.jsx)(me,{label:`How did I apply?`,value:u.values.howApplied,onChange:e=>E(`howApplied`,e),options:We,emptyLabel:He,disabled:x(`howApplied`),selectId:w(`howApplied`),onBlur:()=>k(`howApplied`)}),U.notes]}),wt&&F(`referredBy`,`Referred by`,`Who referred you`,{autoCapitalize:`words`,autoCorrect:`off`}),F(`jobLink`,`Job link`,`https://…`,{type:`url`,inputMode:`url`,autoCapitalize:`none`,autoCorrect:`off`,...O(`jobLink`,`link`,`job link`)})]}),(0,C.jsxs)(`section`,{className:b.group,"aria-labelledby":`ep-h-notes`,children:[(0,C.jsx)(`h2`,{className:b.heading,id:`ep-h-notes`,children:`Notes`}),(()=>{let e=P(`notes`);return(0,C.jsxs)(`div`,{className:b.field,children:[(0,C.jsx)(pe,{label:`Notes`,multiline:!0,value:u.values.notes,onChange:e=>E(`notes`,e),placeholder:`Anything worth remembering`,disabled:x(`notes`),inputId:w(`notes`),describedBy:e.describedBy,autoComplete:`off`,onBlur:()=>k(`notes`)}),e.notes]})})()]})]}),(0,C.jsxs)(`div`,{className:b.actions,children:[(0,C.jsx)(`div`,{className:b.saveNote,role:`status`,children:Ke&&(0,C.jsx)(c,{children:`Couldn’t save that. Nothing was changed, try again.`})}),l&&y&&(0,C.jsx)(be,{label:nt?`Copied`:`Copy my changes`,icon:nt?(0,C.jsx)(ee,{size:16}):(0,C.jsx)(ie,{size:16}),onClick:T,className:b.touch}),(0,C.jsx)(he,{label:Me?`Saving…`:`Save changes`,icon:(0,C.jsx)(ee,{size:16}),onClick:St,disabled:!y||l,loading:h}),y&&(0,C.jsx)(be,{label:`Discard draft`,icon:(0,C.jsx)(Ae,{size:16}),onClick:()=>$e(!0),disabled:pt,className:b.touch})]})]}),(0,C.jsx)(o,{active:le,onNavigate:bt}),(0,C.jsxs)(ve,{open:Qe,onClose:()=>$e(!1),title:`Discard this draft?`,children:[(0,C.jsx)(`p`,{className:b.sheetBody,children:`Your unsaved changes will be gone. The saved position stays as it is.`}),(0,C.jsxs)(`div`,{className:b.sheetActions,children:[(0,C.jsx)(he,{label:`Keep editing`,icon:(0,C.jsx)(ce,{size:16}),onClick:()=>$e(!1)}),(0,C.jsx)(be,{label:`Discard draft`,icon:(0,C.jsx)(Ae,{size:16}),variant:`danger`,onClick:Ct})]})]}),(0,C.jsxs)(ve,{open:et!==null,onClose:()=>tt(null),title:`Leave without saving?`,children:[(0,C.jsx)(`p`,{className:b.sheetBody,children:`This device couldn’t keep your draft, so these changes will be gone. The saved position stays as it is.`}),(0,C.jsxs)(`div`,{className:b.sheetActions,children:[(0,C.jsx)(he,{label:`Keep editing`,icon:(0,C.jsx)(ce,{size:16}),onClick:()=>tt(null)}),(0,C.jsx)(be,{label:`Leave anyway`,icon:(0,C.jsx)(Ae,{size:16}),variant:`danger`,onClick:()=>{let e=et;tt(null),e?.({draftKept:!1})}})]})]})]})}var S,C,mt,ht,gt,_t,w,vt;function yt(){return(yt=e((()=>{S=t(),s(),te(),re(),se(),ke(),m(),ue(),a(),d(),l(),ae(),le(),u(),ye(),fe(),Je(),_e(),pt(),C=n(),mt=500,ht=500,gt=2e3,_t={company:null,role:null,location:null,workModel:null,jobLink:null,howApplied:null,referredBy:null,appliedDate:null,notes:null,compensationAsked:null,contacts:{hr:{name:null,email:null,phone:null},hiringManager:{name:null,email:null,phone:null}}},w=e=>`ep-${e.replace(/\./g,`-`)}`,vt={company:`Company`,role:`Role`,compensationAsked:`Asked`,"contacts.hr.name":`HR name`,"contacts.hr.email":`HR email`,"contacts.hr.phone":`HR phone`,"contacts.hiringManager.name":`Hiring Manager name`,"contacts.hiringManager.email":`Hiring Manager email`,"contacts.hiringManager.phone":`Hiring Manager phone`,location:`Location`,workModel:`Work model`,appliedDate:`When did I apply?`,howApplied:`How did I apply?`,referredBy:`Referred by`,jobLink:`Job link`,notes:`Notes`},x.__docgenInfo={description:`Edit position screen — built 2026-10-25 (Edit position, Part B). Sources, in order: \`briefs/
edit-position.md\` (binding), \`design-briefs/copy-edit-position.md\` section 1 (every string, copied
from its table; the copy file wins), \`design-briefs/edit-position.md\` sections 3 to 11. Canvas
page "Edit position" was not opened.

A full-screen form that looks like the Add screen (same background, 20px side margin, 16px
between fields, 48px between groups), filled from the STORED record's values (\`saved\`, from
\`editableValues\`), never from the Card. It owns its form state; the caller supplies the saved
values and does the writes (\`onDraft\`, \`onSave\`), so the screen itself never touches storage.

States: pristine (Save disabled, no Discard); draft (the status line "Draft kept · not saved
yet", the same for a fresh and a reopened draft, with its row's height always reserved so nothing
jumps; Save enabled; Discard draft); draft that could not be stored (the note replaces the line);
saving (Save turns, every field disabled; "Saving…" only after half a second); save failed; per-field
validation (changed fields only, on blur and on Save); changed meanwhile ("Saved now: …" under each
field changed in both places, the top note, Save then keeps hers); archived / restored meanwhile
(only noticed while the screen is open); position gone (fields and Save disabled, Copy my
changes); discard sheet; leave sheet ONLY when the draft could not be stored. Leaving otherwise
keeps the draft and tells the caller \`draftKept\` so the toast is only said when true.

Draft timing (design brief section 5): written 500ms after the last change, at once on the first
change (so the status line is true when it appears), on blur, when the tab is hidden, on pagehide
and when the screen goes away.

Calls I made (easy to reverse): locked fields (stored value not text) are disabled with no
message, as no copy exists; the contact "needs a name" rule runs when any field of that slot
changed; Discard draft is disabled in the "no longer there" state; "Copy my changes" copies the
changed fields as \`Label: value\` lines and says nothing if the clipboard refuses; the date field
has no EP-V-DATE check (a browser date input gives a full date or nothing; it cannot be told
apart from empty); Return moves to the next field and never saves; "Saved now" values are cut at
40 characters; the Bottom Nav marks the Archive when she came from there.

QA fixes, 2026-10-25: the screen writes a draft only after THIS mounted screen changed a value
(\`dirty\`), so mounting and leaving with nothing touched never removes or overwrites a stored draft
(Forward onto Edit used to delete a kept one); a draft given as \`initialDraft\` counts as kept for
the leave info. In the "no longer there" state leaving reports \`draftKept: false\` (no card can
reopen the draft, and the copy file has no string for it), and the draft is left alone. Guessed:
nothing new; confirmed by the QA repro scripts t4, t4b, t7, t14.

Re-QA fixes, 2026-10-25: (M2) a screen that mounted with the position missing now gets the stored
draft from the caller (\`initialDraft\`) and, when the record comes back and nothing was typed here,
rebuilds its session from the saved values AND that draft, so the first keystroke continues the draft
instead of overwriting it. (L3) In the "no longer there" state the fields show the draft's own
values (conflict notes dropped) and Copy copies them; with no draft nothing differs, so the note
and the Copy button are hidden (EP-GONE promises changes to copy; the copy file has no string for
the empty case, so none is invented, a call to confirm).

**2026-10-25, fixes 3.** (a) Mounted with the position gone, the "has a draft" decision and Copy use
the stored draft's own entries (\`draftNames\`), cleared ones included, so a draft that only clears a
field is shown and copies "Notes: ". (b) Gone with no draft shows the top note EP-GONE-EMPTY ("This
position is no longer in your saved positions.", no Copy), approved by Shoham 2026-10-25; this
replaces the earlier "show nothing" call above.

**2026-10-25, paste and clear** (\`design-briefs/field-behavior.md\` "Decided", strings from
\`design-briefs/copy-field-behavior.md\`). The job link and each contact's email and phone show a
clipboard button while empty ("Paste job link", "Paste HR email", ...) and an X once filled ("Clear
..."); other text fields get neither (the date's own clear stays). A paste is a normal change
(\`set\`/\`update\`: draft written, validation only on changed fields; locked and saving fields have
disabled buttons). Clean-up and the notes live in \`app/pasteFields.ts\`; notes sit under the field as
a NoteLine and go at its next edit. "Name <email>" fills Name only if it is empty. Nothing is
focused after a paste or a clear. Also set the brief's autoCorrect off on Company, Role, Location,
Referred by and Asked (and capitals off on Asked). Calls I made: a refused read (the iOS Paste
bubble dismissed) leaves the field and any old note untouched but removes the old note; a paste
that finishes after the field was filled meanwhile is dropped; the paste notes are not in a live
region (like the validation notes here), they are linked with aria-describedby.

Not verified on a phone: the native date input in the field chrome, the phone keypads, focus
into view with the keyboard open, the Confirmation Sheet over the keyboard.`,methods:[],displayName:`EditPositionScreen`,props:{saved:{required:!0,tsType:{name:`union`,raw:`EditableValues | null`,elements:[{name:`intersection`,raw:`Record<EditableField, string | null> & {
  contacts: Record<ContactSlot, Record<ContactPart, string | null>>;
}`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof EDITABLE_FIELDS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<EditableField, string | null>`},{name:`signature`,type:`object`,raw:`{
  contacts: Record<ContactSlot, Record<ContactPart, string | null>>;
}`,signature:{properties:[{key:`contacts`,value:{name:`Record`,elements:[{name:`union`,raw:`'hr' | 'hiringManager'`,elements:[{name:`literal`,value:`'hr'`},{name:`literal`,value:`'hiringManager'`}]},{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof CONTACT_PARTS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<ContactPart, string | null>`}],raw:`Record<ContactSlot, Record<ContactPart, string | null>>`,required:!0}}]}}]},{name:`null`}]},description:'The position\'s saved values (`editableValues` of the STORED record), or `null` when the\nposition is no longer in the saved data (the "no longer there" state). Pass the new value when\nthe store is read again: the screen folds it in (see `app/editForm.ts`, `reconcile`).'},locked:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:"EditableField | `contacts.${ContactSlot}.${ContactPart}`",elements:[{name:`unknown[number]`,raw:`(typeof EDITABLE_FIELDS)[number]`},{name:`literal`,value:"`contacts.${ContactSlot}.${ContactPart}`"}]}],raw:`EditName[]`},description:`Edit names whose stored value is not text: shown read-only (disabled), nothing else.`,defaultValue:{value:`[]`,computed:!1}},company:{required:!0,tsType:{name:`string`},description:`The SAVED company and role, for the identity line (they do not change while she types).`},role:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},archived:{required:!1,tsType:{name:`boolean`},description:`The position is archived now. Shows "In the Archive" and the moved notes.`,defaultValue:{value:`false`,computed:!1}},moreContacts:{required:!1,tsType:{name:`boolean`},description:`The record holds more contacts than the two slots: shows the "More contacts…" line.`,defaultValue:{value:`false`,computed:!1}},initialDraft:{required:!1,tsType:{name:`union`,raw:`Draft | null`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; changes: PositionValues; startedFrom: PositionValues }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`changes`,value:{name:`intersection`,raw:`Partial<Record<EditableField, string | null>> & {
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,elements:[{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof EDITABLE_FIELDS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<EditableField, string | null>`}],raw:`Partial<Record<EditableField, string | null>>`},{name:`signature`,type:`object`,raw:`{
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,signature:{properties:[{key:`contacts`,value:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`union`,raw:`'hr' | 'hiringManager'`,elements:[{name:`literal`,value:`'hr'`},{name:`literal`,value:`'hiringManager'`}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof CONTACT_PARTS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<ContactPart, string | null>`}],raw:`Partial<Record<ContactPart, string | null>>`}],raw:`Record<ContactSlot, ContactValues>`}],raw:`Partial<Record<ContactSlot, ContactValues>>`,required:!1}}]}}],required:!0}},{key:`startedFrom`,value:{name:`intersection`,raw:`Partial<Record<EditableField, string | null>> & {
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,elements:[{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof EDITABLE_FIELDS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<EditableField, string | null>`}],raw:`Partial<Record<EditableField, string | null>>`},{name:`signature`,type:`object`,raw:`{
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,signature:{properties:[{key:`contacts`,value:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`union`,raw:`'hr' | 'hiringManager'`,elements:[{name:`literal`,value:`'hr'`},{name:`literal`,value:`'hiringManager'`}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof CONTACT_PARTS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<ContactPart, string | null>`}],raw:`Partial<Record<ContactPart, string | null>>`}],raw:`Record<ContactSlot, ContactValues>`}],raw:`Partial<Record<ContactSlot, ContactValues>>`,required:!1}}]}}],required:!0}}]}},{name:`null`}]},description:`A kept draft to reopen.`,defaultValue:{value:`null`,computed:!1}},onDraft:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(parts: { changes: PositionValues; startedFrom: PositionValues }) => DraftOutcome`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ changes: PositionValues; startedFrom: PositionValues }`,signature:{properties:[{key:`changes`,value:{name:`intersection`,raw:`Partial<Record<EditableField, string | null>> & {
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,elements:[{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof EDITABLE_FIELDS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<EditableField, string | null>`}],raw:`Partial<Record<EditableField, string | null>>`},{name:`signature`,type:`object`,raw:`{
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,signature:{properties:[{key:`contacts`,value:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`union`,raw:`'hr' | 'hiringManager'`,elements:[{name:`literal`,value:`'hr'`},{name:`literal`,value:`'hiringManager'`}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof CONTACT_PARTS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<ContactPart, string | null>`}],raw:`Partial<Record<ContactPart, string | null>>`}],raw:`Record<ContactSlot, ContactValues>`}],raw:`Partial<Record<ContactSlot, ContactValues>>`,required:!1}}]}}],required:!0}},{key:`startedFrom`,value:{name:`intersection`,raw:`Partial<Record<EditableField, string | null>> & {
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,elements:[{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof EDITABLE_FIELDS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<EditableField, string | null>`}],raw:`Partial<Record<EditableField, string | null>>`},{name:`signature`,type:`object`,raw:`{
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,signature:{properties:[{key:`contacts`,value:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`union`,raw:`'hr' | 'hiringManager'`,elements:[{name:`literal`,value:`'hr'`},{name:`literal`,value:`'hiringManager'`}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof CONTACT_PARTS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<ContactPart, string | null>`}],raw:`Partial<Record<ContactPart, string | null>>`}],raw:`Record<ContactSlot, ContactValues>`}],raw:`Partial<Record<ContactSlot, ContactValues>>`,required:!1}}]}}],required:!0}}]}},name:`parts`}],return:{name:`union`,raw:`'kept' | 'none' | 'failed'`,elements:[{name:`literal`,value:`'kept'`},{name:`literal`,value:`'none'`},{name:`literal`,value:`'failed'`}]}}},description:`Keeps (or, with nothing changed, removes) this position's draft. Must be synchronous: it runs
as the page is being hidden.`},onSave:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(update: { changes: PositionChanges; expected: PositionValues }) => Promise<SaveOutcome>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ changes: PositionChanges; expected: PositionValues }`,signature:{properties:[{key:`changes`,value:{name:`signature`,type:`object`,raw:`{
  company?: string;
  role?: string | null;
  location?: string | null;
  workModel?: WorkModel | null;
  jobLink?: string | null;
  howApplied?: HowApplied | null;
  referredBy?: string | null;
  appliedDate?: string | null;
  notes?: string | null;
  compensationAsked?: string | null;
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,signature:{properties:[{key:`company`,value:{name:`string`,required:!1}},{key:`role`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`location`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`workModel`,value:{name:`union`,raw:`WorkModel | null`,elements:[{name:`unknown[number]`,raw:`(typeof WORK_MODEL_VALUES)[number]`},{name:`null`}],required:!1}},{key:`jobLink`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`howApplied`,value:{name:`union`,raw:`HowApplied | null`,elements:[{name:`unknown[number]`,raw:`(typeof HOW_APPLIED_VALUES)[number]`},{name:`null`}],required:!1}},{key:`referredBy`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`appliedDate`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`notes`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`compensationAsked`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}},{key:`contacts`,value:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`union`,raw:`'hr' | 'hiringManager'`,elements:[{name:`literal`,value:`'hr'`},{name:`literal`,value:`'hiringManager'`}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof CONTACT_PARTS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<ContactPart, string | null>`}],raw:`Partial<Record<ContactPart, string | null>>`}],raw:`Record<ContactSlot, ContactValues>`}],raw:`Partial<Record<ContactSlot, ContactValues>>`,required:!1}}]},required:!0}},{key:`expected`,value:{name:`intersection`,raw:`Partial<Record<EditableField, string | null>> & {
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,elements:[{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof EDITABLE_FIELDS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<EditableField, string | null>`}],raw:`Partial<Record<EditableField, string | null>>`},{name:`signature`,type:`object`,raw:`{
  contacts?: Partial<Record<ContactSlot, ContactValues>>;
}`,signature:{properties:[{key:`contacts`,value:{name:`Partial`,elements:[{name:`Record`,elements:[{name:`union`,raw:`'hr' | 'hiringManager'`,elements:[{name:`literal`,value:`'hr'`},{name:`literal`,value:`'hiringManager'`}]},{name:`Partial`,elements:[{name:`Record`,elements:[{name:`unknown[number]`,raw:`(typeof CONTACT_PARTS)[number]`},{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]}],raw:`Record<ContactPart, string | null>`}],raw:`Partial<Record<ContactPart, string | null>>`}],raw:`Record<ContactSlot, ContactValues>`}],raw:`Partial<Record<ContactSlot, ContactValues>>`,required:!1}}]}}],required:!0}}]}},name:`update`}],return:{name:`Promise`,elements:[{name:`union`,raw:`| { ok: true }
| { ok: false; error: 'record-changed' | 'not-found' | 'other'; conflicts?: string[] }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; error: 'record-changed' | 'not-found' | 'other'; conflicts?: string[] }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`error`,value:{name:`union`,raw:`'record-changed' | 'not-found' | 'other'`,elements:[{name:`literal`,value:`'record-changed'`},{name:`literal`,value:`'not-found'`},{name:`literal`,value:`'other'`}],required:!0}},{key:`conflicts`,value:{name:`Array`,elements:[{name:`string`}],raw:`string[]`,required:!1}}]}}]}],raw:`Promise<SaveOutcome>`}}},description:`Save: one record, only the changed fields.`},onBack:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(info: LeaveInfo) => void`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ draftKept: boolean }`,signature:{properties:[{key:`draftKept`,value:{name:`boolean`,required:!0}}]}},name:`info`}],return:{name:`void`}}},description:"Back. `info.draftKept` is true only when a draft is really stored."},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BottomNavItemId, info: LeaveInfo) => void`,signature:{arguments:[{type:{name:`union`,raw:`'stack' | 'archive' | 'add' | 'dashboard' | 'search'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`},{name:`literal`,value:`'add'`},{name:`literal`,value:`'dashboard'`},{name:`literal`,value:`'search'`}]},name:`item`},{type:{name:`signature`,type:`object`,raw:`{ draftKept: boolean }`,signature:{properties:[{key:`draftKept`,value:{name:`boolean`,required:!0}}]}},name:`info`}],return:{name:`void`}}},description:``},navActive:{required:!1,tsType:{name:`union`,raw:`'stack' | 'archive'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`}]},description:`Which nav item is current: the Stack, or the Archive when editing from there.`,defaultValue:{value:`'stack'`,computed:!1}},readClipboardText:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => Promise<string>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`string`}],raw:`Promise<string>`}}},description:`Replaces the clipboard read behind the paste buttons (stories and tests; the app leaves it off).`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function bt(e){return(0,T.jsx)(`div`,{style:we,children:(0,T.jsx)(x,{...e})})}function xt(e){let[t,n]=(0,Ct.useState)(e.saved);return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`button`,{type:`button`,onClick:()=>n({...j,role:`Lead Product Designer`,location:`Elsewhere`}),children:`(story) Saved elsewhere`}),(0,T.jsx)(bt,{...e,saved:t})]})}function St({props:e,next:t}){let[n,r]=(0,Ct.useState)(e);return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`button`,{type:`button`,onClick:()=>r({...n,...t}),children:`(story) It happened elsewhere`}),(0,T.jsx)(bt,{...n})]})}var Ct,T,E,D,O,k,A,wt,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Tt,Et,Dt,Ot,kt,At,jt,Mt,Nt,Pt,Ft,It,Lt,Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Q,Kt,qt,Jt,Yt,Xt,Zt,Qt,$,$t,en,tn,nn,rn,an,on,sn;function cn(){return(cn=e((()=>{Ct=t(),yt(),Ce(),T=n(),{expect:E,fn:D,userEvent:O,waitFor:k,within:A}=__STORYBOOK_MODULE_TEST__,wt={title:`Screens/Edit Position`,component:x,parameters:{layout:`fullscreen`,docs:{description:{component:"Edit position screen (2026-10-25). Every value here is invented (example.test addresses, 555-01xx\nnumbers). The stories are also the component tests: most carry a `play` that drives the screen and\nchecks what it promises (draft kept on leave, the toast only when true, validation on changed\nfields only, conflict notes, archived edit, locked fields). The screen never touches storage, so\n`onDraft` / `onSave` are spies here."}}}},j={company:`Northwind Orchard`,role:`Product Designer`,compensationAsked:`35k – 37k`,location:`Testville`,workModel:`hybrid`,appliedDate:`2026-09-10`,howApplied:`referred`,referredBy:`Dana Placeholder`,jobLink:`https://jobs.example.test/northwind/1`,notes:`Spoke to Pat on Sep 12. Portfolio review next.`,contacts:{hr:{name:`Pat Example`,email:`pat@example.test`,phone:`555-0101`},hiringManager:{name:`Sam Sample`,email:`sam@example.test`,phone:null}}},M={company:`Northwind Orchard`,role:null,compensationAsked:null,location:null,workModel:null,appliedDate:null,howApplied:null,referredBy:null,jobLink:null,notes:null,contacts:{hr:{name:null,email:null,phone:null},hiringManager:{name:null,email:null,phone:null}}},N=()=>({saved:j,company:`Northwind Orchard`,role:`Product Designer`,onDraft:D(e=>Object.keys(e.changes).length>0?`kept`:`none`),onSave:D(async()=>({ok:!0})),onBack:D(),onNavigate:D()}),P=e=>(0,T.jsx)(bt,{...e}),F=(e,t)=>e.getByRole(`textbox`,{name:t}),I=(e,t)=>A(e.getByRole(`group`,{name:t})),L=e=>e.getByRole(`button`,{name:/^Sav(e changes|ing…)$/}),R=`Draft kept · not saved yet`,z={args:N(),render:P,play:async({canvasElement:e})=>{let t=A(e);await E(F(t,`Company`).value).toBe(`Northwind Orchard`),await E(L(t)).toBeDisabled(),await E(t.queryByRole(`button`,{name:`Discard draft`})).toBeNull(),await E(t.queryByText(R)).toBeNull(),await E(t.queryByText(`In the Archive`)).toBeNull()}},B={args:{...N(),saved:M,role:``},render:P,play:async({canvasElement:e})=>{let t=A(e),n=t.getAllByRole(`combobox`);for(let e of n)await E(e.selectedOptions[0].textContent).toBe(`Not added yet`);for(let e of t.getAllByRole(`textbox`))await E(e.value).not.toBe(`Not added yet`);await E(I(t,`HR`).getByRole(`textbox`,{name:`Name`})).toHaveValue(``)}},V={args:N(),render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.clear(F(n,`Role`)),await O.type(F(n,`Role`),`Senior Product Designer`),await O.clear(F(n,`Location`)),await O.type(F(n,`Location`),`Remote`),await E(n.getByText(R)).toBeInTheDocument(),await E(L(n)).toBeEnabled(),await E(n.getByRole(`button`,{name:`Discard draft`})).toBeInTheDocument(),await E(t.onDraft).toHaveBeenCalled()}},H={id:`p1`,changes:{role:`Senior Product Designer`,location:`Remote`},startedFrom:{role:`Product Designer`,location:`Testville`}},U={args:{...N(),initialDraft:H},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(t.getByText(R)).toBeInTheDocument(),await E(F(t,`Role`).value).toBe(`Senior Product Designer`),await E(t.queryByText(/picked up/i)).toBeNull(),await E(L(t)).toBeEnabled()}},W={args:{...N(),initialDraft:H,onSave:D(()=>new Promise(()=>{}))},render:P,play:async({canvasElement:e})=>{let t=A(e);await O.click(L(t)),await k(()=>E(L(t)).toHaveAttribute(`aria-busy`,`true`)),await E(F(t,`Role`)).toBeDisabled(),await E(t.getByRole(`button`,{name:`Discard draft`})).toBeDisabled(),await k(()=>E(L(t)).toHaveTextContent(`Saving…`),{timeout:2e3})}},G={args:{...N(),initialDraft:H,onSave:D(async()=>({ok:!1,error:`other`}))},render:P,play:async({canvasElement:e})=>{let t=A(e);await O.click(L(t)),await E(await t.findByText(`Couldn’t save that. Nothing was changed, try again.`)).toBeInTheDocument(),await E(F(t,`Role`).value).toBe(`Senior Product Designer`),await k(()=>E(L(t)).toBeEnabled())}},K={args:N(),render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.clear(F(n,`Company`)),await O.tab(),await E(n.getByText(`Company needs a letter or number.`)).toBeInTheDocument(),await E(F(n,`Company`)).toHaveAttribute(`aria-invalid`,`true`),await O.click(L(n)),await E(t.onSave).not.toHaveBeenCalled(),await E(F(n,`Company`)).toHaveFocus()}},q={args:{...N(),saved:{...j,jobLink:`jobs.example.test/northwind/1`}},render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await E(n.queryByText(`Links need https:// at the start.`)).toBeNull(),await O.type(F(n,`Role`),` II`),await O.click(L(n)),await k(()=>E(t.onSave).toHaveBeenCalledTimes(1)),await E(t.onSave).toHaveBeenCalledWith({changes:{role:`Product Designer II`},expected:{role:`Product Designer`}}),await E(n.queryByText(`Links need https:// at the start.`)).toBeNull()}},J={args:N(),render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.clear(F(n,`Job link`)),await O.type(F(n,`Job link`),`jobs.example.test/northwind/1`),await O.tab(),await E(n.getByText(`Links need https:// at the start.`)).toBeInTheDocument(),await O.click(L(n)),await E(t.onSave).not.toHaveBeenCalled()}},Y={args:{...N(),saved:M},render:P,play:async({canvasElement:e})=>{let t=A(e),n=I(t,`HR`),r=I(t,`Hiring Manager`);await O.type(n.getByRole(`textbox`,{name:`Email`}),`pat@example.test`),await O.tab(),await E(t.getByText(`Add a name for this contact.`)).toBeInTheDocument(),await O.type(r.getByRole(`textbox`,{name:`Email`}),`sam@`),await O.tab(),await E(t.getByText(`Emails look like name@company.com.`)).toBeInTheDocument()}},X={args:N(),render:P,play:async({canvasElement:e})=>{let t=A(e),n=I(t,`HR`).getByRole(`textbox`,{name:`Phone`});await E(n).toHaveAttribute(`inputmode`,`tel`),await O.clear(n),await O.type(n,`call after lunch`),await O.tab(),await E(n).not.toHaveAttribute(`aria-invalid`),await E(t.queryByText(/Emails look like|Add a name/)).toBeNull()}},Z={args:N(),render:P,play:async({canvasElement:e})=>{let t=A(e);await O.click(t.getByRole(`button`,{name:`Clear date`})),await E(t.getByLabelText(`When did I apply?`)).toHaveValue(``),await E(t.getByText(R)).toBeInTheDocument(),await E(t.queryByRole(`button`,{name:`Clear date`})).toBeNull()}},Tt={args:{...N(),saved:{...j,company:`Brightwater Hydrogen & Renewable Infrastructure Holdings International`,notes:Array.from({length:12},(e,t)=>`Line ${t+1} of invented notes about the process so far.`).join(`
`),contacts:{...j.contacts,hr:{...j.contacts.hr,email:`a-very-long-address-for-testing-overflow@subdomain.example-company-name.example.test`}}},company:`Brightwater Hydrogen & Renewable Infrastructure Holdings International`,moreContacts:!0},render:P,play:async({canvasElement:e})=>{await E(A(e).getByText(`More contacts are saved on this position. They stay as they are.`)).toBeInTheDocument()}},Et={args:N(),render:e=>(0,T.jsx)(xt,{...e}),play:async({canvasElement:e,args:t})=>{let n=A(e);await O.clear(F(n,`Role`)),await O.type(F(n,`Role`),`Senior Product Designer`),await O.click(n.getByRole(`button`,{name:`(story) Saved elsewhere`})),await E(await n.findByText(`This position changed since your draft. Saving keeps your version.`)).toBeInTheDocument(),await E(n.getByText(`Saved now: Lead Product Designer`)).toBeInTheDocument(),await E(n.getAllByText(/^Saved now:/)).toHaveLength(1),await E(F(n,`Location`).value).toBe(`Elsewhere`),await E(F(n,`Role`).value).toBe(`Senior Product Designer`),await O.click(L(n)),await k(()=>E(t.onSave).toHaveBeenCalledTimes(1)),await E(t.onSave).toHaveBeenCalledWith({changes:{role:`Senior Product Designer`},expected:{role:`Lead Product Designer`}})}},Dt={args:{...N(),saved:{...j,role:`Lead Product Designer`},initialDraft:H},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(t.getByText(`This position changed since your draft. Saving keeps your version.`)).toBeInTheDocument(),await E(t.getByText(`Saved now: Lead Product Designer`)).toBeInTheDocument(),await E(t.queryByText(/another tab/)).toBeNull()}},Ot={args:N(),render:e=>(0,T.jsx)(St,{props:e,next:{archived:!0}}),play:async({canvasElement:e})=>{let t=A(e);await O.click(t.getByRole(`button`,{name:`(story) It happened elsewhere`})),await E(await t.findByText(`This position is in the Archive now. Saving keeps it there.`)).toBeInTheDocument()}},kt={args:{...N(),archived:!0},render:e=>(0,T.jsx)(St,{props:e,next:{archived:!1}}),play:async({canvasElement:e})=>{let t=A(e);await E(t.getByText(`In the Archive`)).toBeInTheDocument(),await O.click(t.getByRole(`button`,{name:`(story) It happened elsewhere`})),await E(await t.findByText(`This position is back in your stack now. Saving keeps it there.`)).toBeInTheDocument(),await E(t.queryByText(`In the Archive`)).toBeNull()}},At={args:{...N(),archived:!0,navActive:`archive`},render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await E(n.getByText(`In the Archive`)).toBeInTheDocument(),await E(n.queryByText(/reason|termination/i)).toBeNull(),await O.type(F(n,`Role`),` II`),await O.click(L(n)),await k(()=>E(t.onSave).toHaveBeenCalledTimes(1))}},jt={args:{...N(),initialDraft:H},render:e=>(0,T.jsx)(St,{props:e,next:{saved:null}}),play:async({canvasElement:e})=>{let t=A(e);await O.click(t.getByRole(`button`,{name:`(story) It happened elsewhere`})),await E(await t.findByText(`This position is no longer in your saved positions. Your changes are still here to copy.`)).toBeInTheDocument(),await E(F(t,`Role`)).toBeDisabled(),await E(L(t)).toBeDisabled(),await E(t.getByRole(`button`,{name:`Copy my changes`})).toBeEnabled()}},Mt={args:{...N(),saved:null,initialDraft:H},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(F(t,`Role`).value).toBe(`Senior Product Designer`),await E(F(t,`Role`)).toBeDisabled(),await E(F(t,`Location`).value).toBe(`Remote`),await E(t.queryByText(/Saved now/)).toBeNull(),await E(t.getByText(`This position is no longer in your saved positions. Your changes are still here to copy.`)).toBeInTheDocument(),await E(t.getByRole(`button`,{name:`Copy my changes`})).toBeEnabled()}},Nt={args:{...N(),saved:null},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(t.getByText(`This position is no longer in your saved positions.`)).toBeInTheDocument(),await E(t.queryByRole(`button`,{name:`Copy my changes`})).toBeNull(),await E(t.queryByText(/still here to copy/)).toBeNull(),await E(F(t,`Role`)).toBeDisabled(),await E(L(t)).toBeDisabled()}},Pt={args:{...N(),saved:null,initialDraft:{id:`p1`,changes:{notes:``},startedFrom:{notes:`Old notes`}}},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(t.getByText(`This position is no longer in your saved positions. Your changes are still here to copy.`)).toBeInTheDocument(),await E(t.getByRole(`button`,{name:`Copy my changes`})).toBeEnabled()}},Ft={args:{...N(),saved:null,initialDraft:H},render:e=>(0,T.jsx)(St,{props:e,next:{saved:j}}),play:async({canvasElement:e,args:t})=>{let n=A(e);await O.click(n.getByRole(`button`,{name:`(story) It happened elsewhere`})),await k(()=>E(F(n,`Role`)).toBeEnabled()),await E(F(n,`Role`).value).toBe(`Senior Product Designer`),await E(n.getByText(R)).toBeInTheDocument(),await E(t.onDraft).not.toHaveBeenCalled(),await O.type(F(n,`Company`),`!`);let r=t.onDraft;await k(()=>E(r).toHaveBeenCalled());let i=r.mock.calls.at(-1)?.[0];await E(i.changes.role).toBe(`Senior Product Designer`),await E(i.changes.location).toBe(`Remote`),await E(i.changes.company).toBe(`Northwind Orchard!`)}},It={args:{...N(),initialDraft:H},render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.click(n.getByRole(`button`,{name:`Discard draft`}));let r=A(await n.findByRole(`dialog`,{name:`Discard this draft?`}));await E(r.getByText(`Your unsaved changes will be gone. The saved position stays as it is.`)).toBeInTheDocument(),await O.click(r.getByRole(`button`,{name:`Keep editing`})),await k(()=>E(n.queryByRole(`dialog`)).toBeNull()),await E(F(n,`Role`).value).toBe(`Senior Product Designer`),await O.click(n.getByRole(`button`,{name:`Discard draft`}));let i=A(await n.findByRole(`dialog`));await O.click(i.getByRole(`button`,{name:`Discard draft`})),await k(()=>E(F(n,`Role`).value).toBe(`Product Designer`)),await E(n.queryByText(R)).toBeNull(),await E(t.onDraft).toHaveBeenLastCalledWith({changes:{},startedFrom:{}})}},Lt={args:N(),render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.type(F(n,`Role`),` II`),await O.click(n.getByRole(`button`,{name:`Back`})),await E(t.onBack).toHaveBeenCalledWith({draftKept:!0}),await E(n.queryByRole(`dialog`)).toBeNull()}},Rt={args:{...N(),initialDraft:H},render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await E(n.getByText(R)).toBeInTheDocument(),await O.click(n.getByRole(`button`,{name:`Back`})),await E(t.onDraft).not.toHaveBeenCalled(),await E(t.onBack).toHaveBeenCalledWith({draftKept:!0})}},zt={args:{...N(),initialDraft:H},render:e=>(0,T.jsx)(St,{props:e,next:{saved:null}}),play:async({canvasElement:e,args:t})=>{let n=A(e);await O.click(n.getByRole(`button`,{name:`(story) It happened elsewhere`})),await n.findByText(`This position is no longer in your saved positions. Your changes are still here to copy.`),await E(n.getByText(`Northwind Orchard · Product Designer`)).toBeInTheDocument(),await O.click(n.getByRole(`button`,{name:`Back`})),await E(t.onBack).toHaveBeenCalledWith({draftKept:!1}),await E(t.onDraft).not.toHaveBeenCalled()}},Bt={args:N(),render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.type(F(n,`Role`),` II`),await O.click(n.getByRole(`button`,{name:`Archive`})),await E(t.onNavigate).toHaveBeenCalledWith(`archive`,{draftKept:!0})}},Vt={args:N(),render:P,play:async({canvasElement:e,args:t})=>{await O.click(A(e).getByRole(`button`,{name:`Back`})),await E(t.onBack).toHaveBeenCalledWith({draftKept:!1})}},Ht={args:N(),render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.type(F(n,`Role`),`!`),await E(n.getByText(R)).toBeInTheDocument(),await O.type(F(n,`Role`),`{Backspace}`),await E(n.queryByText(R)).toBeNull(),await E(L(n)).toBeDisabled(),await O.click(n.getByRole(`button`,{name:`Back`})),await E(t.onBack).toHaveBeenCalledWith({draftKept:!1})}},Ut={args:{...N(),onDraft:D(()=>`failed`)},render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.type(F(n,`Role`),` II`),await E(await n.findByText(`Couldn’t keep your draft on this device. Save before you leave to keep your changes.`)).toBeInTheDocument(),await E(n.queryByText(R)).toBeNull(),await O.click(n.getByRole(`button`,{name:`Back`}));let r=A(await n.findByRole(`dialog`,{name:`Leave without saving?`}));await E(r.getByText(`This device couldn’t keep your draft, so these changes will be gone. The saved position stays as it is.`)).toBeInTheDocument(),await E(t.onBack).not.toHaveBeenCalled(),await O.click(r.getByRole(`button`,{name:`Keep editing`})),await k(()=>E(n.queryByRole(`dialog`)).toBeNull()),await E(t.onBack).not.toHaveBeenCalled(),await O.click(n.getByRole(`button`,{name:`Back`})),await O.click(A(await n.findByRole(`dialog`)).getByRole(`button`,{name:`Leave anyway`})),await E(t.onBack).toHaveBeenCalledWith({draftKept:!1})}},Wt={args:{...N(),locked:[`notes`,`contacts.hr.email`]},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(F(t,`Notes`)).toBeDisabled(),await E(I(t,`HR`).getByRole(`textbox`,{name:`Email`})).toBeDisabled(),await E(F(t,`Role`)).toBeEnabled()}},Gt={args:{...N(),saved:{...j,howApplied:`cold`,referredBy:null}},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(t.queryByRole(`textbox`,{name:`Referred by`})).toBeNull(),await O.selectOptions(t.getByRole(`combobox`,{name:`How did I apply?`}),`referred`),await E(t.getByRole(`textbox`,{name:`Referred by`})).toBeInTheDocument()}},Q=e=>({readClipboardText:async()=>e}),Kt=()=>{let e=Error(`denied`);return e.name=`NotAllowedError`,Promise.reject(e)},qt=()=>document.activeElement instanceof HTMLInputElement||document.activeElement instanceof HTMLTextAreaElement,Jt={args:{...N(),saved:M,...Q(`Product Designer at Acme
https://jobs.example.test/acme/42?src=x  `)},render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await E(n.queryByRole(`button`,{name:`Clear job link`})).toBeNull(),await O.click(n.getByRole(`button`,{name:`Paste job link`})),await k(()=>E(F(n,`Job link`).value).toBe(`https://jobs.example.test/acme/42?src=x`)),await E(n.queryByRole(`button`,{name:`Paste job link`})).toBeNull(),await E(qt()).toBe(!1),await E(L(n)).toBeEnabled(),await E(n.getByText(R)).toBeInTheDocument(),await E(t.onDraft).toHaveBeenCalled(),await O.click(n.getByRole(`button`,{name:`Clear job link`})),await E(F(n,`Job link`).value).toBe(``),await E(n.getByRole(`button`,{name:`Paste job link`})).toBeInTheDocument(),await E(L(n)).toBeDisabled()}},Yt={args:{...N(),saved:M,...Q(`tel:+1 (555) 010-0142`)},render:e=>(0,T.jsx)(bt,{...e}),play:async({canvasElement:e})=>{let t=A(e),n=I(t,`Hiring Manager`);await O.click(n.getByRole(`button`,{name:`Paste Hiring Manager phone`})),await k(()=>E(n.getByRole(`textbox`,{name:`Phone`})).toHaveValue(`+1 (555) 010-0142`)),await E(n.getByRole(`button`,{name:`Clear Hiring Manager phone`})).toBeInTheDocument(),await E(n.getByRole(`button`,{name:`Paste Hiring Manager email`})).toBeInTheDocument(),await E(I(t,`HR`).getByRole(`button`,{name:`Paste HR phone`})).toBeInTheDocument(),await O.click(n.getByRole(`button`,{name:`Clear Hiring Manager phone`})),await E(n.getByRole(`textbox`,{name:`Phone`})).toHaveValue(``)}},Xt={args:{...N(),saved:M,...Q(`mailto:pat@example.test`)},render:P,play:async({canvasElement:e})=>{let t=A(e),n=I(t,`HR`);await O.click(n.getByRole(`button`,{name:`Paste HR email`})),await k(()=>E(n.getByRole(`textbox`,{name:`Email`})).toHaveValue(`pat@example.test`)),await E(n.getByRole(`textbox`,{name:`Name`})).toHaveValue(``)}},Zt={args:{...N(),saved:M,...Q(`Jane Roe <jane@example.test>`)},render:P,play:async({canvasElement:e})=>{let t=A(e),n=I(t,`HR`);await O.click(n.getByRole(`button`,{name:`Paste HR email`})),await k(()=>E(n.getByRole(`textbox`,{name:`Email`})).toHaveValue(`jane@example.test`)),await E(n.getByRole(`textbox`,{name:`Name`})).toHaveValue(`Jane Roe`),await E(I(t,`Hiring Manager`).getByRole(`textbox`,{name:`Name`})).toHaveValue(``)}},Qt={args:{...N(),saved:{...M,contacts:{...M.contacts,hr:{name:`Pat Example`,email:null,phone:null}}},...Q(`Jane Roe <jane@example.test>`)},render:P,play:async({canvasElement:e})=>{let t=A(e),n=I(t,`HR`);await O.click(n.getByRole(`button`,{name:`Paste HR email`})),await k(()=>E(n.getByRole(`textbox`,{name:`Email`})).toHaveValue(`jane@example.test`)),await E(n.getByRole(`textbox`,{name:`Name`})).toHaveValue(`Pat Example`)}},$={args:{...N(),saved:M,...Q(`  
`)},render:P,play:async({canvasElement:e})=>{let t=A(e);await O.click(t.getByRole(`button`,{name:`Paste job link`})),await E(await t.findByText(`Your clipboard is empty. Copy the link first.`)).toBeInTheDocument(),await O.click(I(t,`HR`).getByRole(`button`,{name:`Paste HR email`})),await E(await t.findByText(`Your clipboard is empty. Copy the email first.`)).toBeInTheDocument(),await O.click(I(t,`HR`).getByRole(`button`,{name:`Paste HR phone`})),await E(await t.findByText(`Your clipboard is empty. Copy the number first.`)).toBeInTheDocument(),await E(F(t,`Job link`).value).toBe(``),await E(t.queryByText(R)).toBeNull(),await O.type(F(t,`Job link`),`a`),await E(t.queryByText(`Your clipboard is empty. Copy the link first.`)).toBeNull(),await E(t.getByText(`Your clipboard is empty. Copy the email first.`)).toBeInTheDocument()}},$t={args:{...N(),saved:M,...Q(`see you on Monday`)},render:P,play:async({canvasElement:e})=>{let t=A(e);await O.click(t.getByRole(`button`,{name:`Paste job link`})),await E(await t.findByText(`No link found in what you copied.`)).toBeInTheDocument(),await O.click(I(t,`HR`).getByRole(`button`,{name:`Paste HR email`})),await E(await t.findByText(`No email found in what you copied.`)).toBeInTheDocument(),await O.click(I(t,`HR`).getByRole(`button`,{name:`Paste HR phone`})),await E(await t.findByText(`No phone number found in what you copied.`)).toBeInTheDocument(),await E(F(t,`Job link`).value).toBe(``),await E(L(t)).toBeDisabled()}},en={args:{...N(),saved:M,readClipboardText:()=>Promise.reject(Error(`no clipboard`))},render:P,play:async({canvasElement:e})=>{let t=A(e);await O.click(t.getByRole(`button`,{name:`Paste job link`})),await E(await t.findByText(`Couldn’t read your clipboard. Paste into the field instead.`)).toBeInTheDocument()}},tn={args:{...N(),saved:M,readClipboardText:Kt},render:P,play:async({canvasElement:e})=>{let t=A(e);await O.click(t.getByRole(`button`,{name:`Paste job link`})),await new Promise(e=>window.setTimeout(e,50)),await E(F(t,`Job link`).value).toBe(``),await E(t.queryByText(/clipboard|No link found/)).toBeNull(),await E(t.getByRole(`button`,{name:`Paste job link`})).toBeEnabled()}},nn={args:N(),render:P,play:async({canvasElement:e})=>{let t=A(e);await E(t.getByRole(`button`,{name:`Clear job link`})).toBeInTheDocument(),await E(t.getByRole(`button`,{name:`Clear HR email`})).toBeInTheDocument(),await E(t.getByRole(`button`,{name:`Clear HR phone`})).toBeInTheDocument(),await E(t.queryByRole(`button`,{name:/^Paste /})).toBeInTheDocument(),await E(t.getAllByRole(`button`,{name:/^(Paste|Clear) /})).toHaveLength(6);for(let e of[`Company`,`Role`,`Asked`,`Location`,`Referred by`])await E(F(t,e).closest(`div`)?.querySelector(`button`)).toBeNull()}},rn={args:N(),render:P,play:async({canvasElement:e,args:t})=>{let n=A(e);await O.click(n.getByRole(`button`,{name:`Clear job link`})),await E(F(n,`Job link`).value).toBe(``),await E(n.getByText(R)).toBeInTheDocument(),await E(L(n)).toBeEnabled(),await E(t.onDraft).toHaveBeenCalled(),await E(qt()).toBe(!1)}},an={args:{...N(),saved:M,locked:[`jobLink`,`contacts.hr.email`],...Q(`https://jobs.example.test/1`)},render:P,play:async({canvasElement:e})=>{let t=A(e);await E(t.getByRole(`button`,{name:`Paste job link`})).toBeDisabled(),await E(I(t,`HR`).getByRole(`button`,{name:`Paste HR email`})).toBeDisabled(),await E(I(t,`HR`).getByRole(`button`,{name:`Paste HR phone`})).toBeEnabled()}},on={args:{...N(),saved:M,locked:[`contacts.hr.name`],...Q(`Jane Roe <jane@example.test>`)},render:P,play:async({canvasElement:e})=>{let t=A(e),n=I(t,`HR`);await O.click(n.getByRole(`button`,{name:`Paste HR email`})),await k(()=>E(n.getByRole(`textbox`,{name:`Email`})).toHaveValue(`jane@example.test`)),await E(n.getByRole(`textbox`,{name:`Name`})).toHaveValue(``)}},sn=`Pristine.SparseRecord.DraftWithChanges.DraftReopened.Saving.SaveFailed.ValidationCompany.SavedLinkWithoutSchemeDoesNotBlock.ValidationLinkWhenEdited.ValidationContacts.PhoneIsNeverChecked.ClearDate.LongContent.ChangedSinceYourDraft.DraftOlderThanTheSavedRecord.ArchivedMeanwhile.RestoredMeanwhile.ArchivedPosition.PositionGone.OpenedGoneWithDraftShowsItsValues.OpenedGoneWithoutDraftHidesCopy.OpenedGoneWithClearingOnlyDraft.RecordReturnsThenTypingContinuesTheDraft.DiscardSheet.BackKeepsTheDraft.BackWithUntouchedDraftWritesNothing.LeavingWhenPositionGoneSaysNothing.NavTabKeepsTheDraft.BackWithNothingChanged.RevertingReturnsToPristine.DraftCouldNotBeStored.LockedFields.ReferredByHiddenUntilNeeded.PasteAndClearJobLink.PasteContactEmailAndPhone.PasteEmailCleansUp.SmartPasteFillsEmptyName.SmartPasteNeverOverwritesName.PasteNoteEmptyClipboard.PasteNoteNothingRecognised.PasteNoteClipboardUnavailable.PasteRefusedSaysNothing.OnlyEligibleFieldsHaveButtons.ClearIsAnEdit.LockedFieldButtonsDisabled.SmartPasteSkipsLockedName`.split(`.`),z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(field(canvas, 'Company').value).toBe('Northwind Orchard');
    await expect(saveButton(canvas)).toBeDisabled();
    await expect(canvas.queryByRole('button', {
      name: 'Discard draft'
    })).toBeNull();
    await expect(canvas.queryByText(DRAFT_LINE)).toBeNull();
    await expect(canvas.queryByText('In the Archive')).toBeNull();
  }
}`,...z.parameters?.docs?.source},description:{story:`Board 01: the saved record filled in; Save disabled; no Discard; the status row is empty.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    role: ''
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const selects = canvas.getAllByRole('combobox') as HTMLSelectElement[];
    for (const select of selects) await expect(select.selectedOptions[0].textContent).toBe('Not added yet');
    for (const input of canvas.getAllByRole('textbox') as HTMLInputElement[]) await expect(input.value).not.toBe('Not added yet');
    await expect(group(canvas, 'HR').getByRole('textbox', {
      name: 'Name'
    })).toHaveValue('');
  }
}`,...B.parameters?.docs?.source},description:{story:`Board 02: a sparse record. Dropdowns say "Not added yet"; no field holds that phrase as a value
(the Card's empty-slot name must never reach the form).`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.clear(field(canvas, 'Role'));
    await userEvent.type(field(canvas, 'Role'), 'Senior Product Designer');
    await userEvent.clear(field(canvas, 'Location'));
    await userEvent.type(field(canvas, 'Location'), 'Remote');
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await expect(saveButton(canvas)).toBeEnabled();
    await expect(canvas.getByRole('button', {
      name: 'Discard draft'
    })).toBeInTheDocument();
    await expect(args.onDraft).toHaveBeenCalled();
  }
}`,...V.parameters?.docs?.source},description:{story:`Boards 03, 04: typing starts the draft: the status line appears (its row was already reserved),
Save and Discard draft are there, and the draft was handed over at once.`,...V.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    initialDraft: REOPENED
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await expect(field(canvas, 'Role').value).toBe('Senior Product Designer');
    await expect(canvas.queryByText(/picked up/i)).toBeNull();
    await expect(saveButton(canvas)).toBeEnabled();
  }
}`,...U.parameters?.docs?.source},description:{story:`Board 05: a reopened draft shows the SAME line as a fresh one (no "picked up" wording).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    initialDraft: REOPENED,
    onSave: fn(() => new Promise<never>(() => {}))
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(saveButton(canvas));
    await waitFor(() => expect(saveButton(canvas)).toHaveAttribute('aria-busy', 'true'));
    await expect(field(canvas, 'Role')).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Discard draft'
    })).toBeDisabled();
    await waitFor(() => expect(saveButton(canvas)).toHaveTextContent('Saving…'), {
      timeout: 2000
    });
  }
}`,...W.parameters?.docs?.source},description:{story:`Board 06: a save that is still running. The icon turns, every field and Discard are disabled.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    initialDraft: REOPENED,
    onSave: fn(async () => ({
      ok: false as const,
      error: 'other' as const
    }))
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(saveButton(canvas));
    await expect(await canvas.findByText('Couldn’t save that. Nothing was changed, try again.')).toBeInTheDocument();
    await expect(field(canvas, 'Role').value).toBe('Senior Product Designer');
    await waitFor(() => expect(saveButton(canvas)).toBeEnabled());
  }
}`,...G.parameters?.docs?.source},description:{story:`Board 07: the write failed. The note shows, her values stay, Save is enabled again.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.clear(field(canvas, 'Company'));
    await userEvent.tab();
    await expect(canvas.getByText('Company needs a letter or number.')).toBeInTheDocument();
    await expect(field(canvas, 'Company')).toHaveAttribute('aria-invalid', 'true');
    await userEvent.click(saveButton(canvas));
    await expect(args.onSave).not.toHaveBeenCalled();
    await expect(field(canvas, 'Company')).toHaveFocus();
  }
}`,...K.parameters?.docs?.source},description:{story:`Board 08: company emptied. The message shows on blur, Save is still tappable and writes nothing.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: {
      ...SAMPLE,
      jobLink: 'jobs.example.test/northwind/1'
    }
  },
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByText('Links need https:// at the start.')).toBeNull();
    await userEvent.type(field(canvas, 'Role'), ' II');
    await userEvent.click(saveButton(canvas));
    await waitFor(() => expect(args.onSave).toHaveBeenCalledTimes(1));
    await expect(args.onSave).toHaveBeenCalledWith({
      changes: {
        role: 'Product Designer II'
      },
      expected: {
        role: 'Product Designer'
      }
    });
    await expect(canvas.queryByText('Links need https:// at the start.')).toBeNull();
  }
}`,...q.parameters?.docs?.source},description:{story:`Requirement 3: a link saved without https:// (Add stores pasted text unchecked) never blocks
Save of OTHER changes, and shows no message while the link is untouched.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.clear(field(canvas, 'Job link'));
    await userEvent.type(field(canvas, 'Job link'), 'jobs.example.test/northwind/1');
    await userEvent.tab();
    await expect(canvas.getByText('Links need https:// at the start.')).toBeInTheDocument();
    await userEvent.click(saveButton(canvas));
    await expect(args.onSave).not.toHaveBeenCalled();
  }
}`,...J.parameters?.docs?.source},description:{story:`Board 09: editing the link to something without a scheme IS checked.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hr = group(canvas, 'HR');
    const manager = group(canvas, 'Hiring Manager');
    await userEvent.type(hr.getByRole('textbox', {
      name: 'Email'
    }), 'pat@example.test');
    await userEvent.tab();
    await expect(canvas.getByText('Add a name for this contact.')).toBeInTheDocument();
    await userEvent.type(manager.getByRole('textbox', {
      name: 'Email'
    }), 'sam@');
    await userEvent.tab();
    await expect(canvas.getByText('Emails look like name@company.com.')).toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source},description:{story:`Board 10: a contact with an email and no name, and a half-typed email.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const phone = group(canvas, 'HR').getByRole('textbox', {
      name: 'Phone'
    });
    await expect(phone).toHaveAttribute('inputmode', 'tel');
    await userEvent.clear(phone);
    await userEvent.type(phone, 'call after lunch');
    await userEvent.tab();
    await expect(phone).not.toHaveAttribute('aria-invalid');
    await expect(canvas.queryByText(/Emails look like|Add a name/)).toBeNull();
  }
}`,...X.parameters?.docs?.source},description:{story:`Phone is free text: the phone keypad, no check, no message.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear date'
    }));
    await expect(canvas.getByLabelText('When did I apply?')).toHaveValue('');
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'Clear date'
    })).toBeNull();
  }
}`,...Z.parameters?.docs?.source},description:{story:`Clearing the date: the X button (44px tap area) empties the field and starts a draft.`,...Z.parameters?.docs?.description}}},Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: {
      ...SAMPLE,
      company: 'Brightwater Hydrogen & Renewable Infrastructure Holdings International',
      notes: Array.from({
        length: 12
      }, (_, i) => \`Line \${i + 1} of invented notes about the process so far.\`).join('\\n'),
      contacts: {
        ...SAMPLE.contacts,
        hr: {
          ...SAMPLE.contacts.hr,
          email: 'a-very-long-address-for-testing-overflow@subdomain.example-company-name.example.test'
        }
      }
    },
    company: 'Brightwater Hydrogen & Renewable Infrastructure Holdings International',
    moreContacts: true
  },
  render,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('More contacts are saved on this position. They stay as they are.')).toBeInTheDocument();
  }
}`,...Tt.parameters?.docs?.source},description:{story:`Board 11: very long values. The identity line and the field keep to one line; the notes grow;
the "More contacts" line shows. Check at 320, 360 and 393 wide.`,...Tt.parameters?.docs?.description}}},Et.parameters={...Et.parameters,docs:{...Et.parameters?.docs,source:{originalSource:`{
  args: base(),
  render: args => <ChangedElsewhere {...args as EditPositionScreenProps} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.clear(field(canvas, 'Role'));
    await userEvent.type(field(canvas, 'Role'), 'Senior Product Designer');
    await userEvent.click(canvas.getByRole('button', {
      name: '(story) Saved elsewhere'
    }));
    await expect(await canvas.findByText('This position changed since your draft. Saving keeps your version.')).toBeInTheDocument();
    await expect(canvas.getByText('Saved now: Lead Product Designer')).toBeInTheDocument();
    await expect(canvas.getAllByText(/^Saved now:/)).toHaveLength(1); // only the field she changed
    await expect(field(canvas, 'Location').value).toBe('Elsewhere'); // untouched: silently follows
    await expect(field(canvas, 'Role').value).toBe('Senior Product Designer');
    await userEvent.click(saveButton(canvas));
    await waitFor(() => expect(args.onSave).toHaveBeenCalledTimes(1));
    await expect(args.onSave).toHaveBeenCalledWith({
      changes: {
        role: 'Senior Product Designer'
      },
      expected: {
        role: 'Lead Product Designer'
      }
    });
  }
}`,...Et.parameters?.docs?.source}}},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: {
      ...SAMPLE,
      role: 'Lead Product Designer'
    },
    initialDraft: REOPENED
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('This position changed since your draft. Saving keeps your version.')).toBeInTheDocument();
    await expect(canvas.getByText('Saved now: Lead Product Designer')).toBeInTheDocument();
    await expect(canvas.queryByText(/another tab/)).toBeNull();
  }
}`,...Dt.parameters?.docs?.source},description:{story:`A draft reopened after the position changed since it began: the notes show on open.`,...Dt.parameters?.docs?.description}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`{
  args: base(),
  render: args => <Toggling props={args as EditPositionScreenProps} next={{
    archived: true
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '(story) It happened elsewhere'
    }));
    await expect(await canvas.findByText('This position is in the Archive now. Saving keeps it there.')).toBeInTheDocument();
  }
}`,...Ot.parameters?.docs?.source},description:{story:`Archived since the form opened: the top note, and Save still works.`,...Ot.parameters?.docs?.description}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    archived: true
  },
  render: args => <Toggling props={args as EditPositionScreenProps} next={{
    archived: false
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('In the Archive')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: '(story) It happened elsewhere'
    }));
    await expect(await canvas.findByText('This position is back in your stack now. Saving keeps it there.')).toBeInTheDocument();
    await expect(canvas.queryByText('In the Archive')).toBeNull();
  }
}`,...kt.parameters?.docs?.source},description:{story:`Restored since the form opened (it was archived when it opened).`,...kt.parameters?.docs?.description}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    archived: true,
    navActive: 'archive'
  },
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('In the Archive')).toBeInTheDocument();
    await expect(canvas.queryByText(/reason|termination/i)).toBeNull();
    await userEvent.type(field(canvas, 'Role'), ' II');
    await userEvent.click(saveButton(canvas));
    await waitFor(() => expect(args.onSave).toHaveBeenCalledTimes(1));
  }
}`,...At.parameters?.docs?.source},description:{story:`An archived position: the same form, the static "In the Archive" line under the identity line
(EP-ID-02, approved 2026-10-25), the Archive current in the nav, no reason or termination field.`,...At.parameters?.docs?.description}}},jt.parameters={...jt.parameters,docs:{...jt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    initialDraft: REOPENED
  },
  render: args => <Toggling props={args as EditPositionScreenProps} next={{
    saved: null
  }} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '(story) It happened elsewhere'
    }));
    await expect(await canvas.findByText('This position is no longer in your saved positions. Your changes are still here to copy.')).toBeInTheDocument();
    await expect(field(canvas, 'Role')).toBeDisabled();
    await expect(saveButton(canvas)).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'Copy my changes'
    })).toBeEnabled();
  }
}`,...jt.parameters?.docs?.source},description:{story:`Board 13: the position is gone from the saved data. Fields and Save disabled; her changes can be copied.`,...jt.parameters?.docs?.description}}},Mt.parameters={...Mt.parameters,docs:{...Mt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: null,
    initialDraft: REOPENED
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(field(canvas, 'Role').value).toBe('Senior Product Designer');
    await expect(field(canvas, 'Role')).toBeDisabled();
    await expect(field(canvas, 'Location').value).toBe('Remote');
    await expect(canvas.queryByText(/Saved now/)).toBeNull();
    await expect(canvas.getByText('This position is no longer in your saved positions. Your changes are still here to copy.')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Copy my changes'
    })).toBeEnabled();
  }
}`,...Mt.parameters?.docs?.source},description:{story:`Re-QA L3: the screen opened (Forward) after the position was deleted, with a kept draft. The form
shows the draft's own values, disabled, and there is something to copy.`,...Mt.parameters?.docs?.description}}},Nt.parameters={...Nt.parameters,docs:{...Nt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: null
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('This position is no longer in your saved positions.')).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'Copy my changes'
    })).toBeNull();
    await expect(canvas.queryByText(/still here to copy/)).toBeNull();
    await expect(field(canvas, 'Role')).toBeDisabled();
    await expect(saveButton(canvas)).toBeDisabled();
  }
}`,...Nt.parameters?.docs?.source},description:{story:`EP-GONE-EMPTY (approved 2026-10-25): gone and no draft. The short top note, no Copy button, no
"still here to copy" promise.`,...Nt.parameters?.docs?.description}}},Pt.parameters={...Pt.parameters,docs:{...Pt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: null,
    initialDraft: {
      id: 'p1',
      changes: {
        notes: ''
      },
      startedFrom: {
        notes: 'Old notes'
      }
    }
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('This position is no longer in your saved positions. Your changes are still here to copy.')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Copy my changes'
    })).toBeEnabled();
  }
}`,...Pt.parameters?.docs?.source},description:{story:`Fix 3 (L3): gone, and the stored draft only CLEARS a field. The blank base made that look like no
draft; the draft's own entries count, so the long note and Copy are there.`,...Pt.parameters?.docs?.description}}},Ft.parameters={...Ft.parameters,docs:{...Ft.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: null,
    initialDraft: REOPENED
  },
  render: args => <Toggling props={args as EditPositionScreenProps} next={{
    saved: SAMPLE
  }} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '(story) It happened elsewhere'
    }));
    await waitFor(() => expect(field(canvas, 'Role')).toBeEnabled());
    await expect(field(canvas, 'Role').value).toBe('Senior Product Designer');
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await expect(args.onDraft).not.toHaveBeenCalled();
    await userEvent.type(field(canvas, 'Company'), '!');
    const onDraft = args.onDraft as ReturnType<typeof fn>;
    await waitFor(() => expect(onDraft).toHaveBeenCalled()); // written 500ms after the last change
    const last = onDraft.mock.calls.at(-1)?.[0] as {
      changes: Record<string, string>;
    };
    await expect(last.changes.role).toBe('Senior Product Designer');
    await expect(last.changes.location).toBe('Remote');
    await expect(last.changes.company).toBe('Northwind Orchard!');
  }
}`,...Ft.parameters?.docs?.source},description:{story:`Re-QA M2: opened while the position was missing, then it comes back. The form starts from the stored
draft, and the first keystroke continues it (the draft handed over keeps the earlier changes).`,...Ft.parameters?.docs?.description}}},It.parameters={...It.parameters,docs:{...It.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    initialDraft: REOPENED
  },
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Discard draft'
    }));
    const sheet = within(await canvas.findByRole('dialog', {
      name: 'Discard this draft?'
    }));
    await expect(sheet.getByText('Your unsaved changes will be gone. The saved position stays as it is.')).toBeInTheDocument();
    await userEvent.click(sheet.getByRole('button', {
      name: 'Keep editing'
    }));
    await waitFor(() => expect(canvas.queryByRole('dialog')).toBeNull());
    await expect(field(canvas, 'Role').value).toBe('Senior Product Designer');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Discard draft'
    }));
    const again = within(await canvas.findByRole('dialog'));
    await userEvent.click(again.getByRole('button', {
      name: 'Discard draft'
    }));
    await waitFor(() => expect(field(canvas, 'Role').value).toBe('Product Designer'));
    await expect(canvas.queryByText(DRAFT_LINE)).toBeNull();
    await expect(args.onDraft).toHaveBeenLastCalledWith({
      changes: {},
      startedFrom: {}
    });
  }
}`,...It.parameters?.docs?.source},description:{story:`Board 14: the discard sheet. Keep editing changes nothing; Discard draft returns the form to the
saved values and removes the draft (an empty draft is handed over).`,...It.parameters?.docs?.description}}},Lt.parameters={...Lt.parameters,docs:{...Lt.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(field(canvas, 'Role'), ' II');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back'
    }));
    await expect(args.onBack).toHaveBeenCalledWith({
      draftKept: true
    });
    await expect(canvas.queryByRole('dialog')).toBeNull();
  }
}`,...Lt.parameters?.docs?.source},description:{story:"Board 15 (screen side): Back with a draft that really is stored keeps it and says so\n(`draftKept: true` is what lets the shell show its toast). No sheet.",...Lt.parameters?.docs?.description}}},Rt.parameters={...Rt.parameters,docs:{...Rt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    initialDraft: REOPENED
  },
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back'
    }));
    await expect(args.onDraft).not.toHaveBeenCalled();
    await expect(args.onBack).toHaveBeenCalledWith({
      draftKept: true
    });
  }
}`,...Rt.parameters?.docs?.source},description:{story:`QA 2026-10-25 (Forward deleted a kept draft): a reopened draft she has not touched is NOT written
again on Back (a stale or equal-to-saved state must never remove or overwrite it), and Back still
says the draft is kept because it is stored.`,...Rt.parameters?.docs?.description}}},zt.parameters={...zt.parameters,docs:{...zt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    initialDraft: REOPENED
  },
  render: args => <Toggling props={args as EditPositionScreenProps} next={{
    saved: null
  }} />,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: '(story) It happened elsewhere'
    }));
    await canvas.findByText('This position is no longer in your saved positions. Your changes are still here to copy.');
    await expect(canvas.getByText('Northwind Orchard · Product Designer')).toBeInTheDocument(); // identity stays (EP-ID-01)
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back'
    }));
    await expect(args.onBack).toHaveBeenCalledWith({
      draftKept: false
    });
    await expect(args.onDraft).not.toHaveBeenCalled();
  }
}`,...zt.parameters?.docs?.source},description:{story:`QA 2026-10-25: in the "no longer there" state Back claims no draft (no card can reopen it, and the
copy file has no string for it) and does not touch the draft.`,...zt.parameters?.docs?.description}}},Bt.parameters={...Bt.parameters,docs:{...Bt.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(field(canvas, 'Role'), ' II');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Archive'
    }));
    await expect(args.onNavigate).toHaveBeenCalledWith('archive', {
      draftKept: true
    });
  }
}`,...Bt.parameters?.docs?.source},description:{story:`A nav tab does the same as Back.`,...Bt.parameters?.docs?.description}}},Vt.parameters={...Vt.parameters,docs:{...Vt.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(within(canvasElement).getByRole('button', {
      name: 'Back'
    }));
    await expect(args.onBack).toHaveBeenCalledWith({
      draftKept: false
    });
  }
}`,...Vt.parameters?.docs?.source},description:{story:`Back with nothing changed leaves at once and claims no draft (so no toast).`,...Vt.parameters?.docs?.description}}},Ht.parameters={...Ht.parameters,docs:{...Ht.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(field(canvas, 'Role'), '!');
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await userEvent.type(field(canvas, 'Role'), '{Backspace}');
    await expect(canvas.queryByText(DRAFT_LINE)).toBeNull();
    await expect(saveButton(canvas)).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back'
    }));
    await expect(args.onBack).toHaveBeenCalledWith({
      draftKept: false
    });
  }
}`,...Ht.parameters?.docs?.source},description:{story:`Reverting by hand returns to pristine and hands over an empty draft (the draft is removed).`,...Ht.parameters?.docs?.description}}},Ut.parameters={...Ut.parameters,docs:{...Ut.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    onDraft: fn(() => 'failed' as const)
  },
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(field(canvas, 'Role'), ' II');
    await expect(await canvas.findByText('Couldn’t keep your draft on this device. Save before you leave to keep your changes.')).toBeInTheDocument();
    await expect(canvas.queryByText(DRAFT_LINE)).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back'
    }));
    const sheet = within(await canvas.findByRole('dialog', {
      name: 'Leave without saving?'
    }));
    await expect(sheet.getByText('This device couldn’t keep your draft, so these changes will be gone. The saved position stays as it is.')).toBeInTheDocument();
    await expect(args.onBack).not.toHaveBeenCalled();
    await userEvent.click(sheet.getByRole('button', {
      name: 'Keep editing'
    }));
    await waitFor(() => expect(canvas.queryByRole('dialog')).toBeNull());
    await expect(args.onBack).not.toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Back'
    }));
    await userEvent.click(within(await canvas.findByRole('dialog')).getByRole('button', {
      name: 'Leave anyway'
    }));
    await expect(args.onBack).toHaveBeenCalledWith({
      draftKept: false
    });
  }
}`,...Ut.parameters?.docs?.source},description:{story:"The draft could not be stored: the note replaces the status line, and leaving asks first. Keep\nediting stays; Leave anyway leaves with `draftKept: false` (so the shell shows no false toast).",...Ut.parameters?.docs?.description}}},Wt.parameters={...Wt.parameters,docs:{...Wt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    locked: ['notes', 'contacts.hr.email']
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(field(canvas, 'Notes')).toBeDisabled();
    await expect(group(canvas, 'HR').getByRole('textbox', {
      name: 'Email'
    })).toBeDisabled();
    await expect(field(canvas, 'Role')).toBeEnabled();
  }
}`,...Wt.parameters?.docs?.source},description:{story:`Stored values the form must not edit (not text): shown read-only, no message.`,...Wt.parameters?.docs?.description}}},Gt.parameters={...Gt.parameters,docs:{...Gt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: {
      ...SAMPLE,
      howApplied: 'cold',
      referredBy: null
    }
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('textbox', {
      name: 'Referred by'
    })).toBeNull();
    await userEvent.selectOptions(canvas.getByRole('combobox', {
      name: 'How did I apply?'
    }), 'referred');
    await expect(canvas.getByRole('textbox', {
      name: 'Referred by'
    })).toBeInTheDocument();
  }
}`,...Gt.parameters?.docs?.source},description:{story:`Referred by shows when the position was referred, or already has a value; otherwise it is hidden.`,...Gt.parameters?.docs?.description}}},Jt.parameters={...Jt.parameters,docs:{...Jt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    ...clipboard('Product Designer at Acme\\nhttps://jobs.example.test/acme/42?src=x  ')
  },
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', {
      name: 'Clear job link'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await waitFor(() => expect(field(canvas, 'Job link').value).toBe('https://jobs.example.test/acme/42?src=x'));
    await expect(canvas.queryByRole('button', {
      name: 'Paste job link'
    })).toBeNull();
    await expect(activeIsField()).toBe(false);
    await expect(saveButton(canvas)).toBeEnabled();
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await expect(args.onDraft).toHaveBeenCalled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear job link'
    }));
    await expect(field(canvas, 'Job link').value).toBe('');
    await expect(canvas.getByRole('button', {
      name: 'Paste job link'
    })).toBeInTheDocument();
    await expect(saveButton(canvas)).toBeDisabled(); // back to what was saved: nothing differs
  }
}`,...Jt.parameters?.docs?.source},description:{story:`Empty -> paste -> filled -> clear, on the job link: the clipboard button becomes an X, the paste is
a normal change (draft written, Save on), the link is the first one in what was copied, nothing is
focused (no keyboard), and Clear empties the field and brings Paste back.`,...Jt.parameters?.docs?.description}}},Yt.parameters={...Yt.parameters,docs:{...Yt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    ...clipboard('tel:+1 (555) 010-0142')
  },
  render: props => <Frame {...props as EditPositionScreenProps} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hm = group(canvas, 'Hiring Manager');
    await userEvent.click(hm.getByRole('button', {
      name: 'Paste Hiring Manager phone'
    }));
    await waitFor(() => expect(hm.getByRole('textbox', {
      name: 'Phone'
    })).toHaveValue('+1 (555) 010-0142'));
    await expect(hm.getByRole('button', {
      name: 'Clear Hiring Manager phone'
    })).toBeInTheDocument();
    await expect(hm.getByRole('button', {
      name: 'Paste Hiring Manager email'
    })).toBeInTheDocument();
    await expect(group(canvas, 'HR').getByRole('button', {
      name: 'Paste HR phone'
    })).toBeInTheDocument();
    await userEvent.click(hm.getByRole('button', {
      name: 'Clear Hiring Manager phone'
    }));
    await expect(hm.getByRole('textbox', {
      name: 'Phone'
    })).toHaveValue('');
  }
}`,...Yt.parameters?.docs?.source},description:{story:`Email and phone, for both contacts: each button names its contact; a phone keeps its formatting
and drops "tel:", an email drops "mailto:".`,...Yt.parameters?.docs?.description}}},Xt.parameters={...Xt.parameters,docs:{...Xt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    ...clipboard('mailto:pat@example.test')
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hr = group(canvas, 'HR');
    await userEvent.click(hr.getByRole('button', {
      name: 'Paste HR email'
    }));
    await waitFor(() => expect(hr.getByRole('textbox', {
      name: 'Email'
    })).toHaveValue('pat@example.test'));
    await expect(hr.getByRole('textbox', {
      name: 'Name'
    })).toHaveValue(''); // no name in the paste
  }
}`,...Xt.parameters?.docs?.source}}},Zt.parameters={...Zt.parameters,docs:{...Zt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    ...clipboard('Jane Roe <jane@example.test>')
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hr = group(canvas, 'HR');
    await userEvent.click(hr.getByRole('button', {
      name: 'Paste HR email'
    }));
    await waitFor(() => expect(hr.getByRole('textbox', {
      name: 'Email'
    })).toHaveValue('jane@example.test'));
    await expect(hr.getByRole('textbox', {
      name: 'Name'
    })).toHaveValue('Jane Roe');
    await expect(group(canvas, 'Hiring Manager').getByRole('textbox', {
      name: 'Name'
    })).toHaveValue('');
  }
}`,...Zt.parameters?.docs?.source},description:{story:`"Name <email>" fills the email and the contact's Name, because Name is empty.`,...Zt.parameters?.docs?.description}}},Qt.parameters={...Qt.parameters,docs:{...Qt.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: {
      ...SPARSE,
      contacts: {
        ...SPARSE.contacts,
        hr: {
          name: 'Pat Example',
          email: null,
          phone: null
        }
      }
    },
    ...clipboard('Jane Roe <jane@example.test>')
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hr = group(canvas, 'HR');
    await userEvent.click(hr.getByRole('button', {
      name: 'Paste HR email'
    }));
    await waitFor(() => expect(hr.getByRole('textbox', {
      name: 'Email'
    })).toHaveValue('jane@example.test'));
    await expect(hr.getByRole('textbox', {
      name: 'Name'
    })).toHaveValue('Pat Example');
  }
}`,...Qt.parameters?.docs?.source},description:{story:`The same paste, with a Name already there: the email fills, the Name is never overwritten.`,...Qt.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    ...clipboard('  \\n')
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await expect(await canvas.findByText('Your clipboard is empty. Copy the link first.')).toBeInTheDocument();
    await userEvent.click(group(canvas, 'HR').getByRole('button', {
      name: 'Paste HR email'
    }));
    await expect(await canvas.findByText('Your clipboard is empty. Copy the email first.')).toBeInTheDocument();
    await userEvent.click(group(canvas, 'HR').getByRole('button', {
      name: 'Paste HR phone'
    }));
    await expect(await canvas.findByText('Your clipboard is empty. Copy the number first.')).toBeInTheDocument();
    await expect(field(canvas, 'Job link').value).toBe('');
    await expect(canvas.queryByText(DRAFT_LINE)).toBeNull();
    await userEvent.type(field(canvas, 'Job link'), 'a');
    await expect(canvas.queryByText('Your clipboard is empty. Copy the link first.')).toBeNull();
    await expect(canvas.getByText('Your clipboard is empty. Copy the email first.')).toBeInTheDocument();
  }
}`,...$.parameters?.docs?.source},description:{story:`Note A: an empty clipboard, per field. The field is unchanged, no draft starts, and the note goes
at the next edit of that field.`,...$.parameters?.docs?.description}}},$t.parameters={...$t.parameters,docs:{...$t.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    ...clipboard('see you on Monday')
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await expect(await canvas.findByText('No link found in what you copied.')).toBeInTheDocument();
    await userEvent.click(group(canvas, 'HR').getByRole('button', {
      name: 'Paste HR email'
    }));
    await expect(await canvas.findByText('No email found in what you copied.')).toBeInTheDocument();
    await userEvent.click(group(canvas, 'HR').getByRole('button', {
      name: 'Paste HR phone'
    }));
    await expect(await canvas.findByText('No phone number found in what you copied.')).toBeInTheDocument();
    await expect(field(canvas, 'Job link').value).toBe('');
    await expect(saveButton(canvas)).toBeDisabled();
  }
}`,...$t.parameters?.docs?.source},description:{story:`Note B: there is text, but no link / email / phone number in it.`,...$t.parameters?.docs?.description}}},en.parameters={...en.parameters,docs:{...en.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    readClipboardText: () => Promise.reject(new Error('no clipboard'))
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await expect(await canvas.findByText('Couldn’t read your clipboard. Paste into the field instead.')).toBeInTheDocument();
  }
}`,...en.parameters?.docs?.source},description:{story:`Note C: the clipboard cannot be read (the read fails some way other than being refused).`,...en.parameters?.docs?.description}}},tn.parameters={...tn.parameters,docs:{...tn.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    readClipboardText: refusedRead
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await new Promise(resolve => window.setTimeout(resolve, 50));
    await expect(field(canvas, 'Job link').value).toBe('');
    await expect(canvas.queryByText(/clipboard|No link found/)).toBeNull();
    await expect(canvas.getByRole('button', {
      name: 'Paste job link'
    })).toBeEnabled();
  }
}`,...tn.parameters?.docs?.source},description:{story:`She dismissed the iOS Paste bubble (the read is refused): nothing changes and nothing is said.`,...tn.parameters?.docs?.description}}},nn.parameters={...nn.parameters,docs:{...nn.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Clear job link'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Clear HR email'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Clear HR phone'
    })).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: /^Paste /
    })).toBeInTheDocument(); // Hiring Manager phone is empty
    await expect(canvas.getAllByRole('button', {
      name: /^(Paste|Clear) /
    })).toHaveLength(6); // job link, 4 contact fields, and the date's own Clear date
    for (const name of ['Company', 'Role', 'Asked', 'Location', 'Referred by']) {
      await expect(field(canvas, name).closest('div')?.querySelector('button')).toBeNull();
    }
  }
}`,...nn.parameters?.docs?.source},description:{story:`Filled fields show Clear, not Paste, on the three eligible fields; no other text field has either.`,...nn.parameters?.docs?.description}}},rn.parameters={...rn.parameters,docs:{...rn.parameters?.docs,source:{originalSource:`{
  args: base(),
  render,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear job link'
    }));
    await expect(field(canvas, 'Job link').value).toBe('');
    await expect(canvas.getByText(DRAFT_LINE)).toBeInTheDocument();
    await expect(saveButton(canvas)).toBeEnabled();
    await expect(args.onDraft).toHaveBeenCalled();
    await expect(activeIsField()).toBe(false);
  }
}`,...rn.parameters?.docs?.source},description:{story:`Clearing a filled link on Edit is a normal change: the draft starts, Save turns on, and Clear
goes back to Paste. Validation shows only after blur (the same rule as typing).`,...rn.parameters?.docs?.description}}},an.parameters={...an.parameters,docs:{...an.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    locked: ['jobLink', 'contacts.hr.email'],
    ...clipboard('https://jobs.example.test/1')
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Paste job link'
    })).toBeDisabled();
    await expect(group(canvas, 'HR').getByRole('button', {
      name: 'Paste HR email'
    })).toBeDisabled();
    await expect(group(canvas, 'HR').getByRole('button', {
      name: 'Paste HR phone'
    })).toBeEnabled();
  }
}`,...an.parameters?.docs?.source},description:{story:`A locked field (stored value not text) has neither Paste nor Clear working: the button is disabled.`,...an.parameters?.docs?.description}}},on.parameters={...on.parameters,docs:{...on.parameters?.docs,source:{originalSource:`{
  args: {
    ...base(),
    saved: SPARSE,
    locked: ['contacts.hr.name'],
    ...clipboard('Jane Roe <jane@example.test>')
  },
  render,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const hr = group(canvas, 'HR');
    await userEvent.click(hr.getByRole('button', {
      name: 'Paste HR email'
    }));
    await waitFor(() => expect(hr.getByRole('textbox', {
      name: 'Email'
    })).toHaveValue('jane@example.test'));
    await expect(hr.getByRole('textbox', {
      name: 'Name'
    })).toHaveValue('');
  }
}`,...on.parameters?.docs?.source},description:{story:`A locked Name is not filled by a "Name <email>" paste; the email still fills.`,...on.parameters?.docs?.description}}}})))()}cn();export{Ot as ArchivedMeanwhile,At as ArchivedPosition,Lt as BackKeepsTheDraft,Vt as BackWithNothingChanged,Rt as BackWithUntouchedDraftWritesNothing,Et as ChangedSinceYourDraft,Z as ClearDate,rn as ClearIsAnEdit,It as DiscardSheet,Ut as DraftCouldNotBeStored,Dt as DraftOlderThanTheSavedRecord,U as DraftReopened,V as DraftWithChanges,zt as LeavingWhenPositionGoneSaysNothing,an as LockedFieldButtonsDisabled,Wt as LockedFields,Tt as LongContent,Bt as NavTabKeepsTheDraft,nn as OnlyEligibleFieldsHaveButtons,Pt as OpenedGoneWithClearingOnlyDraft,Mt as OpenedGoneWithDraftShowsItsValues,Nt as OpenedGoneWithoutDraftHidesCopy,Jt as PasteAndClearJobLink,Yt as PasteContactEmailAndPhone,Xt as PasteEmailCleansUp,en as PasteNoteClipboardUnavailable,$ as PasteNoteEmptyClipboard,$t as PasteNoteNothingRecognised,tn as PasteRefusedSaysNothing,X as PhoneIsNeverChecked,jt as PositionGone,z as Pristine,Ft as RecordReturnsThenTypingContinuesTheDraft,Gt as ReferredByHiddenUntilNeeded,kt as RestoredMeanwhile,Ht as RevertingReturnsToPristine,G as SaveFailed,q as SavedLinkWithoutSchemeDoesNotBlock,W as Saving,Zt as SmartPasteFillsEmptyName,Qt as SmartPasteNeverOverwritesName,on as SmartPasteSkipsLockedName,B as SparseRecord,K as ValidationCompany,Y as ValidationContacts,J as ValidationLinkWhenEdited,sn as __namedExportsOrder,wt as default};