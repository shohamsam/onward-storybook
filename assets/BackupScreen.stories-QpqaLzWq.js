import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./createLucideIcon-BIy-x5OT.js";import{n as a,t as ee}from"./check-jRkMlj5W.js";import{n as te,t as ne}from"./chevron-left-CevI2vwH.js";import{n as re,t as ie}from"./copy-Ce613eh6.js";import{n as o,t as s}from"./NoteLine-DCMsQqWm.js";import{n as c,t as ae}from"./TextInputField-BktQP6Eo.js";import{n as l,t as oe}from"./PrimaryButton-BS971O0a.js";import{n as se,t as ce}from"./ConfirmationSheet-DdxaNsJg.js";import{n as le,t as u}from"./SecondaryButton-DyDrxp7l.js";import{o as ue}from"./mapping-BSBavKZV.js";import{n as de,t as fe}from"./SectionLabel-B7xTMq9B.js";import{n as d,o as f}from"./stackFixtures-DLE0JGwT.js";import{r as pe,t as me}from"./data-U_75tm97.js";var p,he;function m(){return(m=e((()=>{r(),p={name:`download`,size:24,node:[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]},p.node,he=i(p)})))()}var h,ge;function _e(){return(_e=e((()=>{r(),h={name:`file-up`,size:24,node:[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M12 12v6`,key:`3ahymv`}],[`path`,{d:`m15 15-3-3-3 3`,key:`15xj92`}]]},h.node,ge=i(h)})))()}var g,ve;function _(){return(_=e((()=>{r(),g={name:`upload`,size:24,node:[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]},g.node,ve=i(g)})))()}function ye(e){switch(e){case`not-json`:return`That isn’t valid JSON, so there is nothing to import.`;case`wrong-shape`:return`That doesn’t look like an Onward file. It needs a list of positions.`;case`newer-version`:return`That file was made by a newer version of the app, so it can’t be imported here.`;case`no-records`:return`That file has no position with a company name, so there is nothing to import.`}}var v,y,b,x,S,C,w,be,T,xe,E,D,O,k,A,j,M,N,Se,P;function Ce(){return(Ce=e((()=>{v=`_screen_jy3xa_4`,y=`_content_jy3xa_11`,b=`_title_jy3xa_19`,x=`_section_jy3xa_28`,S=`_body_jy3xa_34`,C=`_tall_jy3xa_44`,w=`_fileName_jy3xa_48`,be=`_status_jy3xa_58`,T=`_preview_jy3xa_62`,xe=`_previewLine_jy3xa_68`,E=`_problems_jy3xa_76`,D=`_done_jy3xa_84`,O=`_backups_jy3xa_95`,k=`_backup_jy3xa_95`,A=`_backupKind_jy3xa_110`,j=`_backupMeta_jy3xa_117`,M=`_sheetBody_jy3xa_123`,N=`_sheetActions_jy3xa_130`,Se=`_paste_jy3xa_139`,P={screen:v,content:y,title:b,section:x,body:S,tall:C,fileName:w,status:be,preview:T,previewLine:xe,problems:E,done:D,backups:O,backup:k,backupKind:A,backupMeta:j,sheetBody:M,sheetActions:N,paste:Se}})))()}function we(e){if(!e)return``;let t=new Date(e);return Number.isNaN(t.getTime())?e:t.toLocaleString(`en-US`,{dateStyle:`medium`,timeStyle:`short`})}function Te({store:e,backups:t,usageCharacters:n,hasLocks:r,onImport:i,onBack:a,defaultText:te=``,className:re}){let[o,c]=(0,F.useState)(te),[l,se]=(0,F.useState)(``),[le,de]=(0,F.useState)(!1),[d,f]=(0,F.useState)(`idle`),[me,p]=(0,F.useState)(``),[m,h]=(0,F.useState)(0),[_e,g]=(0,F.useState)(!1),[_,v]=(0,F.useState)(!1),[y,b]=(0,F.useState)(``),x=(0,F.useRef)(null),S=(0,F.useRef)(void 0),C=(0,F.useMemo)(()=>o.trim()===``?null:pe(o),[o]),w=e.kind!==`unreadable`,be=e.kind===`ok`&&e.positions>0,T=C?.ok===!0&&C.counts.problems>0,xe=C?.ok===!0&&w&&d!==`importing`;function E(e,t=``){c(e),se(t),de(!1),d!==`importing`&&(f(`idle`),p(``))}async function D(e){if(e)try{E(await e.text(),e.name)}catch{de(!0)}}async function O(){g(!1),f(`importing`);let e=await i(o,T);e.ok?(h(e.count),f(`done`),c(``),se(``)):(p(e.message),f(`failed`))}function k(){be?g(!0):O()}async function A(){if(e.kind!==`absent`){b(``);try{await navigator.clipboard.writeText(e.raw),v(!0),window.clearTimeout(S.current),S.current=window.setTimeout(()=>v(!1),De)}catch{b(`Couldn’t copy from this address. Download a file instead, or open the app on localhost or https.`)}}}function j(){if(e.kind!==`absent`){b(``);try{let t=URL.createObjectURL(new Blob([e.raw],{type:`application/json`})),n=document.createElement(`a`);n.href=t,n.download=`onward-backup-${new Date().toISOString().slice(0,10)}.json`,document.body.appendChild(n),n.click(),n.remove(),window.setTimeout(()=>URL.revokeObjectURL(t),1e3)}catch{b(`Couldn’t start a download here. Copy the data instead.`)}}}let M=e.kind===`absent`,N=e.kind===`ok`||e.kind===`unreadable`&&e.copyable;return(0,I.jsxs)(`div`,{className:[P.screen,re].filter(Boolean).join(` `),children:[(0,I.jsxs)(`main`,{className:P.content,children:[(0,I.jsx)(u,{className:P.tall,label:`Back to the app`,icon:(0,I.jsx)(ne,{size:16}),iconPosition:`leading`,onClick:a}),(0,I.jsx)(`h1`,{className:P.title,children:`Backup`}),(0,I.jsxs)(`section`,{className:P.section,children:[(0,I.jsx)(fe,{text:`Import`}),(0,I.jsx)(`p`,{className:P.body,children:`Choose a saved file or paste its text. Nothing is saved until you press Import.`}),!w&&(0,I.jsx)(s,{children:`The saved data can’t be read, so importing is paused. Start fresh from the main screen first; the old data is kept as a backup.`}),(0,I.jsx)(`input`,{ref:x,type:`file`,accept:`.json,application/json,text/plain`,hidden:!0,"data-testid":`backup-file`,onChange:e=>{D(e.target.files?.[0]),e.target.value=``}}),(0,I.jsx)(u,{className:P.tall,label:`Choose a file`,icon:(0,I.jsx)(ge,{size:16}),onClick:()=>x.current?.click()}),l&&(0,I.jsx)(`p`,{className:P.fileName,children:l}),le&&(0,I.jsx)(s,{children:`Couldn’t read that file. Try pasting its text instead.`}),(0,I.jsx)(ae,{className:P.paste,label:`Or paste the text here`,value:o,onChange:e=>E(e),placeholder:`{ "positions": [ … ] }`,multiline:!0}),(0,I.jsxs)(`div`,{role:`status`,className:P.status,children:[C&&!C.ok&&(0,I.jsx)(s,{children:ye(C.error)}),C?.ok&&(0,I.jsxs)(`div`,{className:P.preview,children:[(0,I.jsxs)(`p`,{className:P.previewLine,children:[C.count===1?`1 position found`:`${R(C.count)} positions found`,(()=>{let e=C.records.filter(e=>ue(e.status)).length;return`: ${R(C.count-e)} on the stack, ${R(e)} archived.`})()]}),T&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(s,{children:C.counts.problems===1?`1 entry has a problem and will be kept as an unreadable record.`:`${R(C.counts.problems)} entries have problems and will be kept as unreadable records.`}),(0,I.jsxs)(`ul`,{className:P.problems,children:[C.problems.slice(0,L).map(e=>(0,I.jsx)(`li`,{children:e},e)),C.problems.length>L&&(0,I.jsxs)(`li`,{children:[`And `,R(C.problems.length-L),` more.`]})]})]})]}),d===`failed`&&(0,I.jsx)(s,{children:me}),d===`done`&&(0,I.jsxs)(`p`,{className:P.done,children:[(0,I.jsx)(ee,{size:16,"aria-hidden":`true`}),(0,I.jsx)(`span`,{children:m===1?`Imported 1 position.`:`Imported ${R(m)} positions.`})]})]}),(0,I.jsx)(oe,{label:T?`Import anyway`:C?.ok?`Import ${R(C.count)} ${C.count===1?`position`:`positions`}`:`Import`,icon:(0,I.jsx)(ve,{size:16}),onClick:k,disabled:!xe,loading:d===`importing`}),d===`done`&&(0,I.jsx)(u,{className:P.tall,label:`Open the stack`,onClick:a})]}),(0,I.jsxs)(`section`,{className:P.section,children:[(0,I.jsx)(fe,{text:`Export`}),(0,I.jsx)(`p`,{className:P.body,children:M?`Nothing is saved yet, so there is nothing to export.`:`Copy everything that is saved, or download it as a file.`}),(0,I.jsx)(u,{className:P.tall,label:_?`Copied`:`Copy saved data`,icon:_?(0,I.jsx)(ee,{size:16}):(0,I.jsx)(ie,{size:16}),onClick:A,disabled:!N}),(0,I.jsx)(u,{className:P.tall,label:`Download a file`,icon:(0,I.jsx)(he,{size:16}),onClick:j,disabled:!N}),(0,I.jsx)(`div`,{role:`status`,className:P.status,children:y&&(0,I.jsx)(s,{children:y})})]}),(0,I.jsxs)(`section`,{className:P.section,children:[(0,I.jsx)(fe,{text:`Backups on this device`}),t===null?(0,I.jsx)(`p`,{className:P.body,children:`The backups couldn’t be listed here.`}):t.length===0?(0,I.jsx)(`p`,{className:P.body,children:`No backups yet. One is made automatically before every change.`}):(0,I.jsx)(`ul`,{className:P.backups,children:t.map(e=>(0,I.jsxs)(`li`,{className:P.backup,children:[(0,I.jsx)(`span`,{className:P.backupKind,children:Ee[e.kind]}),(0,I.jsx)(`span`,{className:P.backupMeta,children:[e.timestamp?we(e.timestamp):``,e.sizeChars===null?`size unknown`:`${R(e.sizeChars)} characters`].filter(Boolean).join(` · `)})]},e.key))}),n!==null&&n>0&&(0,I.jsxs)(`p`,{className:P.body,children:[`The saved data and its backups take about `,R(n),` of roughly 5,000,000 characters of space.`]}),!r&&(0,I.jsx)(`p`,{className:P.body,children:`This address can’t lock saves between tabs. Keep one tab of the app open at a time.`})]})]}),(0,I.jsxs)(ce,{open:_e,onClose:()=>g(!1),title:`Replace what’s saved?`,children:[(0,I.jsxs)(`p`,{className:P.sheetBody,children:[e.kind===`ok`&&e.positions===1?`The 1 saved position`:`The ${R(e.kind===`ok`?e.positions:0)} saved positions`,` `,`will be replaced by the file’s. The current data stays on this device as a backup copy.`]}),(0,I.jsxs)(`div`,{className:P.sheetActions,children:[(0,I.jsx)(oe,{label:`Keep what I have`,icon:(0,I.jsx)(ee,{size:16}),onClick:()=>g(!1)}),(0,I.jsx)(u,{className:P.tall,label:`Replace`,onClick:()=>void O()})]})]})]})}var F,I,Ee,L,De,R;function Oe(){return(Oe=e((()=>{F=t(),te(),re(),a(),m(),_e(),_(),se(),o(),l(),le(),de(),c(),me(),Ce(),I=n(),Ee={previous:`Before the last change`,replaced:`Before an import replaced the data`,unreadable:`Moved aside by Start fresh`},L=10,De=2e3,R=e=>e.toLocaleString(`en-US`),Te.__docgenInfo={description:`Backup page — phase B step 2a (2026-10-19), reached at \`#backup\`, not in the nav and not on the
canvas: a plain, calm page built from existing parts (briefs/app-shell-phase-b2a.md §2.6).

**Import.** Choose a file or paste text; \`parseImport\` runs on every change and nothing is written
until the Import button. The preview says how many positions the file holds (and how many are
active or archived) and lists the problem entries (the first ten, then a count). Problems need an
explicit "Import anyway". When the app already holds positions the import REPLACES them, asked
through the confirmation sheet, which says the old data is kept as a backup copy; an empty store
imports straight away. An unreadable store pauses importing (the data layer refuses it): Start
fresh from the main screen first. **Export.** Copy the exact stored string, or download it as a
file (\`onward-backup-<date>.json\`; 2026-10-20 hosting preparation: was \`job-tracker-backup-<date>.json\`,
renamed with the app's new name; the import never reads the file name, so older files still import). **Backups.** A read-only list with dates and sizes in
characters, and the usage line. There is no delete and no restore here.

The page does not read or write storage itself: the caller passes the store, the lists and
\`onImport\`. My calls, not from a design: the section order (Import, Export, Backups), the wording
of the backup kinds, the "about 5,000,000 characters" figure (the usual per-origin limit; an
estimate), the Replace sheet's copy, and 44px minimum height on the buttons here. Not seen on a
phone by the author.`,methods:[],displayName:`BackupScreen`,props:{store:{required:!0,tsType:{name:`union`,raw:`| { kind: 'absent' }
| { kind: 'ok'; positions: number; raw: string }
| { kind: 'unreadable'; raw: string; copyable: boolean }`,elements:[{name:`signature`,type:`object`,raw:`{ kind: 'absent' }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'absent'`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: 'ok'; positions: number; raw: string }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'ok'`,required:!0}},{key:`positions`,value:{name:`number`,required:!0}},{key:`raw`,value:{name:`string`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ kind: 'unreadable'; raw: string; copyable: boolean }`,signature:{properties:[{key:`kind`,value:{name:`literal`,value:`'unreadable'`,required:!0}},{key:`raw`,value:{name:`string`,required:!0}},{key:`copyable`,value:{name:`boolean`,required:!0}}]}}]},description:``},backups:{required:!0,tsType:{name:`union`,raw:`BackupInfo[] | null`,elements:[{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  key: string;
  kind: BackupKind;
  /** Length of the stored string in characters (UTF-16 code units), or null if it couldn't be read. */
  sizeChars: number | null;
  /** The ISO timestamp from the key name; null for \`.previous\`, which has none. */
  timestamp: string | null;
}`,signature:{properties:[{key:`key`,value:{name:`string`,required:!0}},{key:`kind`,value:{name:`union`,raw:`'previous' | 'replaced' | 'unreadable'`,elements:[{name:`literal`,value:`'previous'`},{name:`literal`,value:`'replaced'`},{name:`literal`,value:`'unreadable'`}],required:!0}},{key:`sizeChars`,value:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}],required:!0},description:`Length of the stored string in characters (UTF-16 code units), or null if it couldn't be read.`},{key:`timestamp`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0},description:"The ISO timestamp from the key name; null for `.previous`, which has none."}]}}],raw:`BackupInfo[]`},{name:`null`}]},description:"The backups on this device (`listBackups`), or null when they could not be listed."},usageCharacters:{required:!0,tsType:{name:`union`,raw:`number | null`,elements:[{name:`number`},{name:`null`}]},description:"`estimateUsage` characters for the saved data and its backups, or null."},hasLocks:{required:!0,tsType:{name:`boolean`},description:"False where `navigator.locks` is missing (plain http on a LAN address): saves are then not\nlocked between tabs, and the page says so."},onImport:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(text: string, acknowledgeProblems: boolean) => Promise<ImportOutcome>`,signature:{arguments:[{type:{name:`string`},name:`text`},{type:{name:`boolean`},name:`acknowledgeProblems`}],return:{name:`Promise`,elements:[{name:`union`,raw:`{ ok: true; count: number } | { ok: false; message: string }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true; count: number }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}},{key:`count`,value:{name:`number`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; message: string }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`message`,value:{name:`string`,required:!0}}]}}]}],raw:`Promise<ImportOutcome>`}}},description:`Runs the import. The caller picks the mode (absent store: initial; saved positions: replace).`},onBack:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`"Back to the app".`},defaultText:{required:!1,tsType:{name:`string`},description:`Story convenience: start with this text pasted.`,defaultValue:{value:`''`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function ke(){let e=[];for(let t=0;t<45;t+=1){let n=t<8,r=null;if(!n){let e=t-8;r=e<25?`Rejected`:e<33?`Ghosted`:e<35?`Withdrawn`:`Position closed`}let i=String(t%27+1).padStart(2,`0`);e.push({id:`syn-${String(t+1).padStart(2,`0`)}`,company:`${je[t]} ${Me[t%Me.length]}`,role:t%4==3?``:Ne[t%Ne.length],location:t%3==0?`Testville`:null,workModel:null,jobLink:t%2==0?`https://jobs.example.test/${t+1}`:null,ats:null,howApplied:t%5==0?`cold`:t%5==1?`referred`:t%5==2?`unknown`:null,referredBy:null,appliedDate:t%6==5?null:`2026-09-${i}`,status:n?`active`:`archived`,phase:n?`waiting`:null,lastActivity:`2026-10-${String(t%18+1).padStart(2,`0`)}`,createdAt:`2026-09-${i}T08:00:00.000Z`,events:t%3==1?[{date:`2026-09-${i}`,time:null,type:`recruiter-call`,summary:`Intro call.`,people:[],threadId:`t-${t}`}]:[],contacts:t%7==0?[{name:`Pat Example`,title:`Senior Recruiter`,email:`pat@example.test`,phone:`555-0101`}]:[],nextStep:null,compensation:null,notes:``,flags:[],termination:n?null:{reason:r,feedback:t%4==0?`Went with someone else.`:``,date:`2026-10-${String(t%18+1).padStart(2,`0`)}`,via:`action`},source:`fixture`})}return e}function Ae(){return JSON.stringify({version:1,positions:ke().slice(0,12)})}var je,Me,Ne;function Pe(){return(Pe=e((()=>{je=`Northwind.Lumen.Quillfeather.Marrow.Tidewater.Copperleaf.Paperlark.Bramble.Saltmarsh.Orbit.Glassworks.Fennel.Hollow.Ironbark.Juniper.Kestrel.Lantern.Mossgate.Nimbus.Oakridge.Pinewick.Quarry.Ridgeline.Sundial.Thistle.Umber.Velvet.Wrenfield.Yarrow.Zephyr.Amberly.Birchwood.Cobalt.Dovetail.Elmstead.Foxglove.Gablewick.Harbor.Ivywell.Jasper.Kingfisher.Larkspur.Meadowbrook.Nettle.Orchard`.split(`.`),Me=[`Labs`,`Systems`,`Studio`,`Robotics`,`Analytics`,`Co`,`Health`,`Cloud`],Ne=[`Product Designer`,`Senior UX Designer`,`Design Lead`,`UI Designer`,`Design Systems Designer`]})))()}var Fe,z,B,V,H,Ie,Le,Re,U,W,G,K,q,J,Y,X,Z,Q,$,ze;function Be(){return(Be=e((()=>{Oe(),d(),Pe(),Fe=n(),{expect:z,userEvent:B,within:V}=__STORYBOOK_MODULE_TEST__,H=Ae(),Ie=JSON.stringify({version:1,positions:[...ke().slice(0,3),{id:`no-company`},7]}),Le={title:`Screens/Backup`,component:Te,parameters:{layout:`fullscreen`},args:{store:{kind:`absent`},backups:[],usageCharacters:null,hasLocks:!0,onImport:async()=>({ok:!0,count:12}),onBack:()=>{}},decorators:[e=>(0,Fe.jsx)(`div`,{style:f,children:(0,Fe.jsx)(e,{})})]},Re={kind:`ok`,positions:12,raw:H},U={},W={args:{defaultText:H},play:async({canvasElement:e})=>{let t=V(e);await z(t.getByText(`12 positions found: 8 on the stack, 4 archived.`)).toBeInTheDocument(),await z(t.getByRole(`button`,{name:`Import 12 positions`})).toBeEnabled()}},G={args:{defaultText:Ie},play:async({canvasElement:e})=>{let t=V(e);await z(t.getByText(/2 entries have problems/)).toBeInTheDocument(),await z(t.getByRole(`button`,{name:`Import anyway`})).toBeEnabled()}},K={args:{defaultText:`this is not json`},play:async({canvasElement:e})=>{let t=V(e);await z(t.getByText(`That isn’t valid JSON, so there is nothing to import.`)).toBeInTheDocument(),await z(t.getByRole(`button`,{name:`Import`})).toBeDisabled()}},q={args:{defaultText:`{"hello": "world"}`}},J={args:{defaultText:H,onImport:()=>new Promise(()=>{})},play:async({canvasElement:e})=>{let t=V(e);await B.click(t.getByRole(`button`,{name:`Import 12 positions`})),await z(t.getByRole(`button`,{name:`Import 12 positions`})).toBeDisabled()}},Y={args:{defaultText:H},play:async({canvasElement:e})=>{let t=V(e);await B.click(t.getByRole(`button`,{name:`Import 12 positions`})),await z(await t.findByText(`Imported 12 positions.`)).toBeInTheDocument()}},X={args:{store:Re,defaultText:H},play:async({canvasElement:e})=>{let t=V(e);await B.click(t.getByRole(`button`,{name:`Import 12 positions`}));let n=await V(document.body).findByRole(`dialog`);await z(V(n).getByText(/stays on this device as a backup copy/)).toBeInTheDocument()}},Z={args:{defaultText:H,onImport:async()=>({ok:!1,message:`Couldn’t import that. The saved data was left as it was.`})},play:async({canvasElement:e})=>{let t=V(e);await B.click(t.getByRole(`button`,{name:`Import 12 positions`})),await z(await t.findByText(`Couldn’t import that. The saved data was left as it was.`)).toBeInTheDocument()}},Q={args:{store:{kind:`unreadable`,raw:`{"version":1,"positions":[`,copyable:!0},defaultText:H}},$={args:{store:Re,usageCharacters:183204,hasLocks:!1,backups:[{key:`k.previous`,kind:`previous`,sizeChars:91650,timestamp:null},{key:`k.replaced-2026-10-19T09:30:00.000Z`,kind:`replaced`,sizeChars:45120,timestamp:`2026-10-19T09:30:00.000Z`},{key:`k.unreadable-2026-10-18T18:02:10.000Z`,kind:`unreadable`,sizeChars:412,timestamp:`2026-10-18T18:02:10.000Z`}]}},ze=[`NothingChosen`,`FileParsedOk`,`ParsedWithProblems`,`NotJson`,`WrongShape`,`Importing`,`Imported`,`ReplaceConfirmation`,`ImportFailed`,`UnreadableStore`,`WithBackups`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{}`,...U.parameters?.docs?.source},description:{story:`Nothing chosen, nothing saved: Import is off, Export is off.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    defaultText: goodText
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('12 positions found: 8 on the stack, 4 archived.')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Import 12 positions'
    })).toBeEnabled();
  }
}`,...W.parameters?.docs?.source},description:{story:`A file's text pasted (the file picker fills the same field): the preview counts positions. Not
saved until Import. The store is empty, so Import goes straight through.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    defaultText: withProblems
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/2 entries have problems/)).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Import anyway'
    })).toBeEnabled();
  }
}`,...G.parameters?.docs?.source},description:{story:`Two entries are not usable positions: listed, and Import becomes "Import anyway".`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultText: 'this is not json'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('That isn’t valid JSON, so there is nothing to import.')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Import'
    })).toBeDisabled();
  }
}`,...K.parameters?.docs?.source},description:{story:`Not JSON: a plain note with the reason, Import stays off.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultText: '{"hello": "world"}'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    defaultText: goodText,
    onImport: () => new Promise(() => {})
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import 12 positions'
    }));
    await expect(canvas.getByRole('button', {
      name: 'Import 12 positions'
    })).toBeDisabled();
  }
}`,...J.parameters?.docs?.source},description:{story:`The call is in flight: the button shows its loading look and cannot be pressed twice.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultText: goodText
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import 12 positions'
    }));
    await expect(await canvas.findByText('Imported 12 positions.')).toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source},description:{story:`Done: the line, and a way back to the Stack.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    store: okStore,
    defaultText: goodText
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import 12 positions'
    }));
    const dialog = await within(document.body).findByRole('dialog');
    await expect(within(dialog).getByText(/stays on this device as a backup copy/)).toBeInTheDocument();
  }
}`,...X.parameters?.docs?.source},description:{story:`The app already holds positions, so an import replaces them: the sheet asks, and says the old
data is kept as a backup copy. "Keep what I have" (primary) takes focus first.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    defaultText: goodText,
    onImport: async () => ({
      ok: false,
      message: 'Couldn’t import that. The saved data was left as it was.'
    })
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Import 12 positions'
    }));
    await expect(await canvas.findByText('Couldn’t import that. The saved data was left as it was.')).toBeInTheDocument();
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    store: {
      kind: 'unreadable',
      raw: '{"version":1,"positions":[',
      copyable: true
    },
    defaultText: goodText
  }
}`,...Q.parameters?.docs?.source},description:{story:`Saved data that can't be read: importing is paused (the data layer refuses it), export still
offers the exact string.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    store: okStore,
    usageCharacters: 183_204,
    hasLocks: false,
    backups: [{
      key: 'k.previous',
      kind: 'previous',
      sizeChars: 91_650,
      timestamp: null
    }, {
      key: 'k.replaced-2026-10-19T09:30:00.000Z',
      kind: 'replaced',
      sizeChars: 45_120,
      timestamp: '2026-10-19T09:30:00.000Z'
    }, {
      key: 'k.unreadable-2026-10-18T18:02:10.000Z',
      kind: 'unreadable',
      sizeChars: 412,
      timestamp: '2026-10-18T18:02:10.000Z'
    }]
  }
}`,...$.parameters?.docs?.source},description:{story:`Saved data present, with backups and the usage line; a store on plain http says it cannot lock.`,...$.parameters?.docs?.description}}}})))()}Be();export{W as FileParsedOk,Z as ImportFailed,Y as Imported,J as Importing,K as NotJson,U as NothingChosen,G as ParsedWithProblems,X as ReplaceConfirmation,Q as UnreadableStore,$ as WithBackups,q as WrongShape,ze as __namedExportsOrder,Le as default};