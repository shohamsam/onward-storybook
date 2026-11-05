import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./BottomNav-yNyHYz7t.js";import{n as a,t as o}from"./check-jRkMlj5W.js";import{n as s,t as c}from"./copy-Ce613eh6.js";import{n as l,t as u}from"./refresh-cw-CDBooOzs.js";import{n as d,t as f}from"./trash-DXS7JFmh.js";import{n as p,t as m}from"./NoteLine-DCMsQqWm.js";import{n as h,t as g}from"./PrimaryButton-BS971O0a.js";import{n as _,t as v}from"./SecondaryButton-DyDrxp7l.js";import{n as y,o as b}from"./stackFixtures-DLE0JGwT.js";import{n as x,t as S}from"./StartFreshSheet-CM5nJfAP.js";var C,w,T,E,D,O,k,A;function j(){return(j=e((()=>{C=`_screen_1kz1v_4`,w=`_content_1kz1v_13`,T=`_title_1kz1v_19`,E=`_body_1kz1v_28`,D=`_body2_1kz1v_29`,O=`_actions_1kz1v_41`,k=`_note_1kz1v_49`,A={screen:C,content:w,title:T,body:E,body2:D,actions:O,note:k}})))()}function M({copyText:e,copyable:t,onTryAgain:n,onStartFresh:r,onNavigate:a,defaultSheetOpen:s=!1,defaultCopyFailed:l=!1,defaultStillUnreadable:d=!1,className:p}){let[h,_]=(0,N.useState)(!1),[y,b]=(0,N.useState)(l?`copy-failed`:d?`still-unreadable`:null),[x,C]=(0,N.useState)(s),w=(0,N.useRef)(void 0);(0,N.useEffect)(()=>()=>window.clearTimeout(w.current),[]);async function T(){b(null);try{await navigator.clipboard.writeText(e),_(!0),window.clearTimeout(w.current),w.current=window.setTimeout(()=>_(!1),F)}catch{b(`copy-failed`)}}function E(){b(null),n()||b(`still-unreadable`)}async function D(){C(!1),b(null),await r()||b(`fresh-failed`)}let O=y===`copy-failed`?`Couldn’t copy from this address. Open the app on localhost or https and try again.`:y===`still-unreadable`?`Still can’t read it. Nothing has changed.`:y===`fresh-failed`?`Couldn’t move the saved data aside. Nothing was changed.`:t?``:`Nothing could be read, so there is nothing to copy.`;return(0,P.jsxs)(`div`,{className:[A.screen,p].filter(Boolean).join(` `),children:[(0,P.jsxs)(`main`,{className:A.content,children:[(0,P.jsx)(`h1`,{className:A.title,children:`Your saved positions won’t open`}),(0,P.jsx)(`p`,{className:A.body,children:`Something in the saved data looks damaged. Nothing has been changed or deleted.`}),(0,P.jsx)(`p`,{className:A.body2,children:`Adding and archiving are paused so it can’t be overwritten. Copy the data somewhere safe first.`}),(0,P.jsxs)(`div`,{className:A.actions,children:[(0,P.jsx)(`div`,{className:A.note,role:`status`,children:O&&(0,P.jsx)(m,{children:O})}),(0,P.jsx)(g,{label:h?`Copied`:`Copy saved data`,icon:h?(0,P.jsx)(o,{size:16}):(0,P.jsx)(c,{size:16}),onClick:T,disabled:!t}),(0,P.jsx)(v,{label:`Try again`,icon:(0,P.jsx)(u,{size:16}),onClick:E}),(0,P.jsx)(v,{label:`Start fresh`,icon:(0,P.jsx)(f,{size:16}),variant:`danger`,onClick:()=>C(!0)})]})]}),(0,P.jsx)(i,{onNavigate:a}),(0,P.jsx)(S,{open:x,onClose:()=>C(!1),onStartFresh:D})]})}var N,P,F;function I(){return(I=e((()=>{N=t(),a(),s(),l(),d(),r(),p(),h(),_(),x(),j(),P=n(),F=2e3,M.__docgenInfo={description:`Store unreadable screen — phase B step 2a (2026-10-19), from \`design-briefs/app-shell-states.md\`
§3.4 and canvas boards 04 to 07. The whole app shows this in place of Stack, Archive and Add
when the saved data can't be read; adding and archiving are paused because their writes would
overwrite the string. Nothing here writes: Copy reads, Try again re-reads, and Start fresh only
runs after the confirmation sheet and moves the string to a backup key (the caller's operation).

Copy is the design doc's, verbatim. States: default; Copied (the primary label, about 2s);
copy failed (the note above the buttons); try again, still unreadable (a note, "Nothing has
changed."); the Start fresh sheet. Added by me, not in the design doc: the line when there is
nothing to copy ("Nothing could be read, so there is nothing to copy."), and the note after a
Start fresh that failed ("Couldn't move the saved data aside. Nothing was changed."), both in
the same voice and slot as the designed notes. The title is the heading in the Stack's
header position (no separate "Your stack" header is drawn on boards 04 to 07). The nav stays so
nothing is a dead end. Not seen on a phone by the author.`,methods:[],displayName:`UnreadableStoreScreen`,props:{copyText:{required:!0,tsType:{name:`string`},description:`The exact stored string, to copy.`},copyable:{required:!0,tsType:{name:`boolean`},description:`False when there is nothing to copy (storage could not be read, or the string is empty):
the Copy button is disabled and a line says why.`},onTryAgain:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => boolean`,signature:{arguments:[],return:{name:`boolean`}}},description:`Re-reads the store. Returns true if it can be read now (the caller then replaces this
screen); false keeps this screen and shows "Still can't read it."`},onStartFresh:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => Promise<boolean>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`boolean`}],raw:`Promise<boolean>`}}},description:`Moves the saved string to a backup key (the data layer's start-fresh). Returns true when it
worked. The sheet that asks first is this screen's.`},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BottomNavItemId) => void`,signature:{arguments:[{type:{name:`union`,raw:`'stack' | 'archive' | 'add' | 'dashboard' | 'search'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`},{name:`literal`,value:`'add'`},{name:`literal`,value:`'dashboard'`},{name:`literal`,value:`'search'`}]},name:`item`}],return:{name:`void`}}},description:``},defaultSheetOpen:{required:!1,tsType:{name:`boolean`},description:`Story convenience: start with the sheet open / a note showing.`,defaultValue:{value:`false`,computed:!1}},defaultCopyFailed:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},defaultStillUnreadable:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{I(),y(),L=n(),{expect:R,userEvent:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Screens/Unreadable store`,component:M,parameters:{layout:`fullscreen`},args:{copyText:`{"version":1,"positions":[`,copyable:!0,onTryAgain:()=>!1,onStartFresh:async()=>!0},decorators:[e=>(0,L.jsx)(`div`,{style:b,children:(0,L.jsx)(e,{})})]},H={},U={args:{defaultCopyFailed:!0}},W={play:async({canvasElement:e})=>{let t=B(e);await z.click(t.getByRole(`button`,{name:`Try again`})),await R(t.getByText(`Still can’t read it. Nothing has changed.`)).toBeInTheDocument()}},G={args:{copyText:``,copyable:!1}},K={args:{defaultSheetOpen:!0}},q={args:{onStartFresh:async()=>!1},play:async({canvasElement:e})=>{let t=B(e);await z.click(t.getByRole(`button`,{name:`Start fresh`}));let n=B(await B(document.body).findByRole(`dialog`));await z.click(n.getByRole(`button`,{name:`Start fresh`})),await R(await t.findByText(`Couldn’t move the saved data aside. Nothing was changed.`)).toBeInTheDocument()}},J=[`Default`,`CopyFailed`,`StillUnreadable`,`NothingToCopy`,`StartFreshSheetOpen`,`StartFreshFailed`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{}`,...H.parameters?.docs?.source},description:{story:`Canvas board 04. The safe action (Copy saved data) is the primary button.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    defaultCopyFailed: true
  }
}`,...U.parameters?.docs?.source},description:{story:`Board 06: the clipboard refused (plain http on a LAN address has none).`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Try again'
    }));
    await expect(canvas.getByText('Still can’t read it. Nothing has changed.')).toBeInTheDocument();
  }
}`,...W.parameters?.docs?.source},description:{story:`Try again that still cannot read: the same screen with a note, so the button does not look dead.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    copyText: '',
    copyable: false
  }
}`,...G.parameters?.docs?.source},description:{story:`Nothing could be read at all (storage refused, or an unstable read): nothing to copy.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSheetOpen: true
  }
}`,...K.parameters?.docs?.source},description:{story:`Board 07: the confirmation. "Keep my data" takes focus first.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    onStartFresh: async () => false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Start fresh'
    }));
    const sheet = within(await within(document.body).findByRole('dialog'));
    await userEvent.click(sheet.getByRole('button', {
      name: 'Start fresh'
    }));
    await expect(await canvas.findByText('Couldn’t move the saved data aside. Nothing was changed.')).toBeInTheDocument();
  }
}`,...q.parameters?.docs?.source},description:{story:`A Start fresh that could not move the data: nothing changed, and it says so.`,...q.parameters?.docs?.description}}}})))()}Y();export{U as CopyFailed,H as Default,G as NothingToCopy,q as StartFreshFailed,K as StartFreshSheetOpen,W as StillUnreadable,J as __namedExportsOrder,V as default};