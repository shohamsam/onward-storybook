import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./BottomNav-yNyHYz7t.js";import{n as a,t as ee}from"./check-jRkMlj5W.js";import{n as o,t as te}from"./clipboard-C-IThcF1.js";import{n as s,t as ne}from"./link-2-f4WfhGwu.js";import{n as re,t as ie}from"./refresh-cw-CDBooOzs.js";import{i as ae,n as oe,r as se,t as ce}from"./FetchingIndicator-CsFDBRG8.js";import{n as le,t as ue}from"./NoteLine-DCMsQqWm.js";import{n as de,t as fe}from"./x-DLqO42RV.js";import{n as c,t as pe}from"./TextInputField-BktQP6Eo.js";import{n as me,t as he}from"./Dropdown-_el6jnaL.js";import{n as l,t as ge}from"./PrimaryButton-BS971O0a.js";import{a as u,c as d,i as f,n as _e,o as ve,r as ye,s as be,t as p}from"./pasteFields-hQG-Gcsi.js";var m,h,xe,g,Se,Ce,we,_,Te,Ee,De,Oe,v;function y(){return(y=e((()=>{m=`_screen_y5efm_6`,h=`_content_y5efm_18`,xe=`_intro_y5efm_28`,g=`_headline_y5efm_36`,Se=`_subtext_y5efm_48`,Ce=`_urlGroup_y5efm_59`,we=`_note_y5efm_69`,_=`_noteInDetails_y5efm_70`,Te=`_reveal_y5efm_78`,Ee=`_divider_y5efm_103`,De=`_details_y5efm_112`,Oe=`_detailsHeading_y5efm_119`,v={screen:m,content:h,intro:xe,headline:g,subtext:Se,urlGroup:Ce,note:we,noteInDetails:_,reveal:Te,"reveal-in":`_reveal-in_y5efm_1`,divider:Ee,details:De,detailsHeading:Oe}})))()}function ke(){return new Promise(e=>{window.setTimeout(()=>e({company:`Acme Corp`,role:`Senior Product Designer`}),C)})}function b({readClipboardText:e,onSave:t,onFetch:n,onNavigate:r,defaultUrl:a=``,defaultCompany:o=``,defaultRole:s=``,defaultHowApplied:re=``,defaultRevealed:ae,defaultFetchState:oe,defaultSaveFailed:se=!1,defaultFilledFromLink:le=!1,className:de}){let[c,me]=(0,x.useState)(a),[l,u]=(0,x.useState)(o),[d,f]=(0,x.useState)(s),[ve,ye]=(0,x.useState)(re),be=ae??!!(o||s||re),p=oe??(be?`success`:`idle`),[m,h]=(0,x.useState)(p),[xe,g]=(0,x.useState)(p!==`idle`||be),[Se,Ce]=(0,x.useState)(!1),[we,_]=(0,x.useState)(le&&p===`success`),[Te,Ee]=(0,x.useState)(se),[De,Oe]=(0,x.useState)(``),y=(0,x.useRef)(0),b=(0,x.useRef)(!1),C=m===`fetching`,je=c.trim()!==``&&l.trim()!==``&&d.trim()!==``;function Me(e){me(e),Oe(``),C&&(y.current+=1,h(`idle`)),m===`success`?(h(`idle`),g(!1),u(``),f(``),Ce(!1),_(!1)):m===`failed`&&h(`idle`)}async function Ne(){if(!c.trim()||C||m===`success`)return;let e=++y.current;h(`fetching`);try{let t=await(n??ke)(c);if(e!==y.current)return;u(e=>e.trim()?e:t.company),f(e=>e.trim()?e:t.role),Ce(!n);let r=!l.trim()&&t.company.trim()!==``||!d.trim()&&t.role.trim()!==``;_(!!n&&r),g(!0),h(`success`)}catch{if(e!==y.current)return;g(!0),h(`failed`)}}async function Pe(){let t=await _e(`link`,e);t.status===`filled`?Me(t.value):Oe(t.status===`note`?t.note:``)}async function Fe(){if(je&&!b.current){b.current=!0,Ee(!1);try{await t?.({url:c,company:l,role:d,howApplied:ve})}catch{Ee(!0)}finally{b.current=!1}}}let Ie=De||(m===`success`&&Se?`Auto-filled below (demo data — real fetch not wired up yet).`:void 0);return(0,S.jsxs)(`div`,{className:[v.screen,de].filter(Boolean).join(` `),children:[(0,S.jsxs)(`div`,{className:v.content,children:[(0,S.jsxs)(`header`,{className:v.intro,children:[(0,S.jsx)(`h1`,{className:v.headline,tabIndex:-1,children:`Start here`}),(0,S.jsx)(`p`,{className:v.subtext,children:`The right door often looks like just another tab.`})]}),(0,S.jsxs)(`section`,{className:v.urlGroup,children:[(0,S.jsx)(pe,{label:`Paste the job posting URL here`,type:`url`,value:c,onChange:Me,placeholder:`https://...`,inputMode:`url`,autoCapitalize:`none`,autoCorrect:`off`,autoComplete:`off`,trailingIcon:c?(0,S.jsx)(fe,{size:20,"aria-hidden":`true`}):(0,S.jsx)(te,{size:20,"aria-hidden":`true`}),onTrailingIconClick:c?()=>Me(``):Pe,trailingIconLabel:c?`Clear job link`:`Paste job link`,trailingTouchTarget:!0,helperText:Ie}),(0,S.jsx)(ge,{label:`Create position`,icon:(0,S.jsx)(ie,{size:16}),onClick:Ne,disabled:!c.trim()||m===`success`,loading:C}),C&&(0,S.jsx)(ce,{}),(0,S.jsxs)(`div`,{className:v.note,role:`status`,children:[m===`failed`&&(0,S.jsx)(ue,{children:`Couldn’t read that link. Add the details below.`}),m===`success`&&we&&(0,S.jsx)(ue,{icon:(0,S.jsx)(ne,{size:16,"aria-hidden":`true`}),children:`Filled in from the link. Check the details.`})]})]}),xe&&(0,S.jsxs)(`div`,{className:v.reveal,children:[(0,S.jsx)(`hr`,{className:v.divider}),(0,S.jsxs)(`section`,{className:v.details,children:[(0,S.jsx)(`h2`,{className:v.detailsHeading,children:`Position details`}),(0,S.jsx)(pe,{label:`Company`,value:l,onChange:u,placeholder:`Company name`,autoCapitalize:`words`,autoCorrect:`off`,autoComplete:`off`}),(0,S.jsx)(pe,{label:`Role`,value:d,onChange:f,placeholder:`Role title`,autoCapitalize:`words`,autoCorrect:`off`,autoComplete:`off`}),(0,S.jsx)(he,{label:`How did I apply?`,value:ve,onChange:ye,options:Ae,placeholder:`Please select`}),(0,S.jsx)(`div`,{className:v.noteInDetails,role:`status`,children:Te&&(0,S.jsx)(ue,{children:`Couldn’t save that. Nothing was changed, try again.`})}),(0,S.jsx)(ge,{label:`Save details`,icon:(0,S.jsx)(ee,{size:16}),onClick:Fe,disabled:!je})]})]})]}),(0,S.jsx)(i,{active:`add`,onNavigate:r})]})}var x,S,Ae,C;function je(){return(je=e((()=>{x=t(),a(),o(),s(),re(),de(),r(),c(),me(),l(),oe(),le(),ae(),p(),y(),S=n(),Ae=[{value:`cold`,label:`Cold`},{value:`referred`,label:`Referred`},{value:`other`,label:`Other`}],C=500*se,b.__docgenInfo={description:`Add Position screen (Linear SHO-27, "Screen: Add flow") — first built 2026-10-08, redesigned
2026-10-11, and **rebuilt 2026-10-13 to Shoham's "Create position flow" in Figma (node
302:2265)**, four frames left to right: empty → URL filled → Create position pressed →
Position details revealed.

**What the 2026-10-13 frames changed** (from the user's screenshots + the frame's layout
metadata; per-node styles for most of the screen could not be pulled — Figma MCP quota — so
type sizes below for the header are matched to the measured heights, see "Not from Figma"):
  - No Header Bar / back arrow any more — the screen opens straight on the "Start here"
    headline. \`onBack\` is gone; navigation is the Bottom Nav (Add is the current item).
  - Copy: "Start here" / "The right door often looks like just another tab." (was "Start
    here." / "Paste the link below — you never know where it'll lead."), field label "Paste
    the job posting URL here", trailing clipboard icon, "How did I apply?", "Save details".
  - **"Fetch details" (a Secondary Button) became "Create position" (a Primary Button)** with a
    sync icon that turns while the sync runs — Shoham's explicit ask. The button keeps its
    Default look while busy (see PrimaryButton's \`loading\`).
  - The details block (divider → "Position details" → Company, Role, How did I apply?, Save
    details) appears below the URL group once the sync resolves. Company and Role are
    auto-filled; How did I apply? is left for the person to choose, per the brief.
  - Groups are 48px apart (\`--spacing-flow-gap\`), fields 16px apart, label-to-field 4px.
  - "Required" tags are gone from the fields. Save is still gated on URL + Company + Role.

**Decisions made without asking, easy to reverse:**
  - **The "Or enter the details yourself" link is removed** — the frames don't have it. That
    was this screen's only manual path (design-brief.md §5: Company "typed if fetch fails").
    While the fetch is a stub that never fails, nothing is lost; a real fetch will need a
    failure path, which should be designed then rather than kept as an orphan link now.
  - **Create position is disabled while the URL is empty** (the Primary Button's locked
    Disabled look). Figma frame 1 shows it fully purple with an empty field; pressing it with
    nothing to sync would do nothing, so it's disabled rather than a dead-looking active
    button. One-line change if the literal frame is wanted.
  - **The three-stage FetchingIndicator text stays** under the button while the icon spins
    (it was requested 2026-10-12 and the new frames don't mention removing it). Drop the
    \`{fetching && <FetchingIndicator />}\` line to go icon-only.
  - **The clipboard icon is wired up** to paste from the clipboard (the frames only show it).
    Where the browser won't allow clipboard reads — notably plain-HTTP origins, like opening
    the dev build over a LAN IP — it says so under the field instead of silently doing
    nothing.
  - The auto-fill is still the same fixed stub ("Acme Corp" / "Senior Product Designer"), and
    the "demo data — real fetch not wired up yet" disclosure under the URL field stays even
    though the Figma frame doesn't show it: the data is fake and shouldn't pass as real.

**Not from Figma:** the header's type styles (28px/700 display for the title; 14px/600
body-strong for the subtext — matched to the frame's 31px and 20px text heights), the
clipboard/chevron icon size (20, measured from the screenshots), and everything about the
Bottom Nav beyond its 393x57 box. See BottomNav's doc comment.

Swapping in a real fetch now means passing \`onFetch\` (the stub is just its default).

**2026-10-15 — app shell, phase A: the fetch can fail, and the screen has four states.**
Source: \`briefs/app-shell.md\` §4 (Shoham's decisions), \`design-briefs/app-shell-states.md\`
§3.5, canvas artboards 08 and 09. The earlier "Calls made" about the removed manual-entry link
(item 2 above) is closed by this: the failed fetch is the manual path.
  - **idle** — URL only; details hidden. **fetching** — the existing FetchingIndicator.
  - **fetched-success** — details revealed and autofilled; **Create position is DISABLED**, so
    Save details is the only call to action (Shoham, comment on artboard 09). This reverses
    the 2026-10-13 behavior, where it stayed enabled.
  - **fetched-failed** — details revealed EMPTY, a note line under Create position ("Couldn't
    read that link. Add the details below."), Create position stays ENABLED so retrying is
    pressing it again. Focus is not moved (it would raise the keyboard on a phone). A retry
    that succeeds fills only the fields that are still empty — it never overwrites typing.
  - **Editing the URL**: from success it returns to idle — details hidden, Create position
    enabled, the autofilled Company and Role cleared (the old fetch's data no longer describes
    this URL; How did I apply? is the person's own answer, so it's kept). From failed the
    details stay open, what was typed is kept, and only the note clears.
  - **Save failed** — if \`onSave\` rejects or throws, the note line "Couldn’t save that. Nothing
    was changed, try again." appears between How did I apply? and Save details; nothing else
    changes and Save stays enabled. It clears when Save is tried again.
The two note lines live in persistent \`role="status"\` regions so they're announced; an empty
region takes no space. The fetch is injectable (\`onFetch\`) so a story can show the failure.

Judgment calls (flagged, easy to reverse): the canvas draws 24px between the divider and
"Position details" and between that heading and the first field; this build keeps the
Figma-measured 48px / 16px of the 2026-10-13 frames (decision #23: Figma wins) — the canvas
artboards were not drawn from those frames' metadata. The fetch result is discarded if the URL
is edited while it is still running. Disclosure "demo data" is shown only when the default
stub produced the fill.

**2026-10-22 — the app reads the link locally.** The app now passes an \`onFetch\` backed by the
pure parser \`app/linkDetails.ts\` (no network): a link that yields a company opens the existing
fetched-success state with Company (and Role, when the link carries one) filled in, How did I
apply? untouched and Create position disabled, exactly as before; nothing readable is the
existing fetched-failed state. One addition on this screen: when a SUPPLIED \`onFetch\` actually
filled a field, the note region under Create position says "Filled in from the link. Check the
details." (NoteLine with a \`Link2\` icon instead of the warning triangle). Calls I made, easy to
reverse: the note sits in the same live region as the failure note (announced once, 16px under
the button); it is not shown when nothing was filled (both fields already typed, after a
failure); it goes when the URL is edited (the fill is cleared then too). The copy is pending
ux-writer review. The default stub (stories only) and its "demo data" line are unchanged. With
a local parse there is no wait, so the FetchingIndicator is not seen in the app (at most a
frame); the screen was not given an artificial delay.

**Later on 2026-10-22 — the live link reader.** The app's \`onFetch\` now asks Shoham's link reader
(a Cloudflare Worker, up to 6 seconds) before falling back to the local parser
(\`app/linkReader.ts\`). Nothing on this screen changed: while the reader is awaited the existing
fetching state shows (the three-step FetchingIndicator is seen again), and its answer arrives
through the same success / failure states and the same "Filled in from the link" note.

**2026-10-25 — paste and clear on the job link** (\`design-briefs/field-behavior.md\`, Shoham's
decisions; strings from \`design-briefs/copy-field-behavior.md\`). The link field shows the clipboard
(label "Paste job link", was "Paste from clipboard") while empty and an X ("Clear job link") once
filled: one slot, one job. Paste keeps the first link in what was copied (\`app/pasteFields.ts\`,
which agrees with \`linkDetails.ts\` on what a link is; no scheme added); text with no link in it is
REFUSED with "No link found in what you copied." (before, any text was taken). The three notes
(empty clipboard, nothing recognised, clipboard unavailable) replace the two old ones, which had an
em dash; a dismissed iOS Paste bubble and a good paste say nothing. A pasted or cleared link goes
through the same change handler as typing, so the link reader flow (Create position, Company and
Role from the link) is unchanged. Nothing is focused after a paste (no keyboard). Also: the link
field asks for the url keyboard, no capitals, no autocorrect; all three fields set autoComplete off
(Company and Role also words / autocorrect off, per the brief's table). Calls I made: the paste
button now has the 44px tap area (\`trailingTouchTarget\`, icon unmoved) like Edit's date clear;
\`readClipboardText\` is a test seam. Not seen on a phone (the iOS Paste bubble is a two-tap path).`,methods:[],displayName:`AddPositionScreen`,props:{readClipboardText:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => Promise<string>`,signature:{arguments:[],return:{name:`Promise`,elements:[{name:`string`}],raw:`Promise<string>`}}},description:`Replaces the clipboard read behind the paste button (stories and tests; the app leaves it off).`},onSave:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(data: { url: string; company: string; role: string; howApplied: string }) => void | Promise<void>`,signature:{arguments:[{type:{name:`signature`,type:`object`,raw:`{ url: string; company: string; role: string; howApplied: string }`,signature:{properties:[{key:`url`,value:{name:`string`,required:!0}},{key:`company`,value:{name:`string`,required:!0}},{key:`role`,value:{name:`string`,required:!0}},{key:`howApplied`,value:{name:`string`,required:!0}}]}},name:`data`}],return:{name:`union`,raw:`void | Promise<void>`,elements:[{name:`void`},{name:`Promise`,elements:[{name:`void`}],raw:`Promise<void>`}]}}},description:`Called with the form's data. May return a promise; if it rejects (or throws), the screen
shows the save-failed note line and changes nothing else.`},onFetch:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(url: string) => Promise<FetchedDetails>`,signature:{arguments:[{type:{name:`string`},name:`url`}],return:{name:`Promise`,elements:[{name:`signature`,type:`object`,raw:`{ company: string; role: string }`,signature:{properties:[{key:`company`,value:{name:`string`,required:!0}},{key:`role`,value:{name:`string`,required:!0}}]}}],raw:`Promise<FetchedDetails>`}}},description:`Replaces the stubbed "Create position" sync. Resolve with the details, reject for a failed
fetch. When omitted the stub runs (fixed "Acme Corp" / "Senior Product Designer") and the
"demo data" disclosure is shown under the URL field; when supplied, it isn't.`},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BottomNavItemId) => void`,signature:{arguments:[{type:{name:`union`,raw:`'stack' | 'archive' | 'add' | 'dashboard' | 'search'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`},{name:`literal`,value:`'add'`},{name:`literal`,value:`'dashboard'`},{name:`literal`,value:`'search'`}]},name:`item`}],return:{name:`void`}}},description:`Bottom Nav taps. The screen marks Add as the current destination.`},defaultUrl:{required:!1,tsType:{name:`string`},description:"Story/demo convenience, matching Card's `defaultExpanded` pattern — lets a story start\nwith the form already filled in, without needing real navigation state.",defaultValue:{value:`''`,computed:!1}},defaultCompany:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},defaultRole:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},defaultHowApplied:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},defaultRevealed:{required:!1,tsType:{name:`boolean`},description:`Story/demo convenience — forces the details open without needing a default Company/Role
value to infer it from (e.g. to show the revealed-but-empty state).`},defaultFetchState:{required:!1,tsType:{name:`union`,raw:`'idle' | 'success' | 'failed'`,elements:[{name:`literal`,value:`'idle'`},{name:`literal`,value:`'success'`},{name:`literal`,value:`'failed'`}]},description:"Story/demo convenience — starts the screen in a fetch outcome without running a fetch.\n`'failed'` shows the note and the empty details; `'success'` shows the details with Create\nposition disabled. Defaults to `'success'` when `defaultRevealed` or any default Company /\nRole / How applied is passed (the previous behavior's closest equivalent), else `'idle'`."},defaultSaveFailed:{required:!1,tsType:{name:`boolean`},description:`Story/demo convenience — starts with the save-failed note showing.`,defaultValue:{value:`false`,computed:!1}},defaultFilledFromLink:{required:!1,tsType:{name:`boolean`},description:"Story/demo convenience — with `defaultFetchState: 'success'`, also shows the \"Filled in from\nthe link\" note, as after a supplied `onFetch` filled something in.",defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function Me(e){return e.replace(/&(#x[0-9a-f]{1,6}|#\d{1,7}|[a-z]+);/gi,(e,t)=>{if(t[0]===`#`){let e=t[1]===`x`||t[1]===`X`?parseInt(t.slice(2),16):parseInt(t.slice(1),10);return e>0&&e<=1114111&&!(e>=55296&&e<=57343)?String.fromCodePoint(e):` `}return Ge[t.toLowerCase()]??e})}function Ne(e,t){let n=e=>e.toLowerCase().replace(/[^\p{L}\p{N}]/gu,``);return n(e)!==``&&n(e)===n(t)}function Pe(e,t){if(!e)return;let n=e.replace(/^job application for\s+/i,``).trim(),r=n.match(/^(.*\S)\s+(?:at|@|-|–|—|\|)\s+(.+)$/i);if(r&&t&&Ne(r[2],t)&&(n=r[1].trim()),!(t&&Ne(n,t))&&/\p{L}|\p{N}/u.test(n)&&!(n.length<We||n.length>80))return n}function Fe(e){return`${Ve}?url=${encodeURIComponent(e)}`}function Ie(e){return e<=31||e>=127&&e<=159||e>=8203&&e<=8207||e===8232||e===8233||e>=8234&&e<=8238||e>=8288&&e<=8297||e===65279}function Le(e){let t=``;for(let n of e)t+=Ie(n.codePointAt(0)??0)?` `:n;return t}function Re(e,t){if(typeof e!=`string`)return;let n=Me(Le(e.slice(0,t*8))).replace(/<[^>]*>?/g,` `).replace(/[<>]/g,` `).replace(/\s+/g,` `).trim();if(/\p{L}|\p{N}/u.test(n))return ye(n,t)}async function ze(e,t={}){let n=t.fetchImpl??(typeof fetch==`function`?fetch.bind(globalThis):void 0);if(!n)return null;let r=new AbortController,i=setTimeout(()=>r.abort(),t.timeoutMs??6e3);try{let t=await n(Fe(e),{method:`GET`,mode:`cors`,credentials:`omit`,referrerPolicy:`no-referrer`,cache:`no-store`,signal:r.signal});if(t.status!==200)return null;let i=await t.text();if(i.length>He)return null;let a=JSON.parse(i);if(!a||typeof a!=`object`||Array.isArray(a))return null;let{source:ee,title:o,company:te}=a;if(ee!==`jobposting`&&ee!==`meta`)return null;let s=e=>e==null||typeof e==`string`;return!s(o)||!s(te)?null:{source:ee,title:Re(o,Ue),company:Re(te,60)}}catch{return null}finally{clearTimeout(i)}}async function Be(e,t={}){let n=d(e),r=f(e),i=n?await ze(n,t):null;if(i?.source===`jobposting`){let e=i.company??r?.company??``,t=(i.title&&ye(i.title,80))??r?.role??``;if(e||t)return{company:e,role:t}}if(i?.source===`meta`&&be(e)){let e=r?.company??``,t=Pe(i.title,e)??r?.role??``;if(e||t)return{company:e,role:t}}return r?{company:r.company,role:r.role??``}:i?.source===`meta`&&i.company&&!ve(e)?{company:i.company,role:``}:null}var Ve,He,Ue,We,Ge;function Ke(){return(Ke=e((()=>{u(),Ve=`https://onward-links.shohamsam.workers.dev/`,He=32768,Ue=200,We=2,Ge={amp:`&`,lt:`<`,gt:`>`,quot:`"`,apos:`'`,nbsp:` `}})))()}function qe(){return new Promise((e,t)=>window.setTimeout(()=>t(Error(`unreadable`)),1500))}function Je(){return new Promise((e,t)=>window.setTimeout(()=>t(Error(`storage full`)),400))}function w(e){let t=f(e);return t?Promise.resolve({company:t.company,role:t.role??``}):Promise.reject(Error(`unreadable-link`))}function Ye(e,t=200){return n=>Be(n,{fetchImpl:()=>new Promise(n=>window.setTimeout(()=>n(new Response(JSON.stringify(e),{status:t})),1500))}).then(e=>e||Promise.reject(Error(`unreadable-link`)))}var T,E,D,Xe,O,Ze,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,Qe,J,Y,X,Z,Q,$,$e;function et(){return(et=e((()=>{je(),u(),Ke(),T=n(),{expect:E,userEvent:D,waitFor:Xe,within:O}=__STORYBOOK_MODULE_TEST__,Ze={title:`Screens/Add Position`,component:b,parameters:{layout:`fullscreen`}},k=`https://careers.example.com/jobs/senior-designer`,A={args:{onSave:()=>{},onNavigate:()=>{}},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid #e3e5ea`},children:(0,T.jsx)(b,{...e})})},j={args:{onSave:()=>{},onNavigate:()=>{},defaultUrl:`https://www.comeet.com/jobs/northwindlabs/senior-product-designer`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid #e3e5ea`},children:(0,T.jsx)(b,{...e})})},M={args:{onSave:()=>{},onNavigate:()=>{},defaultUrl:`https://www.comeet.com/jobs/northwindlabs/senior-product-designer`,defaultRevealed:!0,defaultFetchState:`failed`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid #e3e5ea`},children:(0,T.jsx)(b,{...e})})},N={args:{onSave:()=>{},onNavigate:()=>{},defaultUrl:`https://www.comeet.com/jobs/northwindlabs/senior-product-designer`,defaultCompany:`NORTHWIND Labs`,defaultRole:`Senior Product Designer`,defaultHowApplied:`referred`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid #e3e5ea`},children:(0,T.jsx)(b,{...e})})},P={name:`Fetch success (interactive)`,args:{onNavigate:()=>{},onSave:()=>{},defaultUrl:k},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})})},F={name:`Fetch failed (interactive)`,args:{onNavigate:()=>{},onSave:()=>{},onFetch:qe,defaultUrl:k},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})})},I={args:{onNavigate:()=>{},onSave:()=>{},onFetch:qe,defaultUrl:k,defaultFetchState:`failed`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})})},L={args:{onNavigate:()=>{},onSave:Je,defaultUrl:k,defaultCompany:`Acme Corp`,defaultRole:`Senior Product Designer`,defaultHowApplied:`referred`,defaultSaveFailed:!0},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})})},R={name:`Save failed (interactive)`,args:{onNavigate:()=>{},onSave:Je,defaultUrl:k,defaultCompany:`Acme Corp`,defaultRole:`Senior Product Designer`,defaultHowApplied:`referred`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})})},z=`https://www.comeet.com/jobs/northwind-labs/A6.F4D/senior-product-designer/1C.A4B`,B={args:{onNavigate:()=>{},onSave:()=>{},onFetch:w,defaultUrl:z,defaultCompany:`Northwind Labs`,defaultRole:`Senior Product Designer`,defaultFetchState:`success`,defaultFilledFromLink:!0},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})})},V={name:`Read link: company and role (interactive)`,args:{onNavigate:()=>{},onSave:()=>{},onFetch:w,defaultUrl:z},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})}),play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:/Create position/})),await E(await t.findByLabelText(`Company`)).toHaveValue(`Northwind Labs`),await E(t.getByLabelText(`Role`)).toHaveValue(`Senior Product Designer`),await E(t.getByText(`Filled in from the link. Check the details.`)).toBeInTheDocument(),await E(t.getByRole(`button`,{name:/Create position/})).toBeDisabled(),await E(t.getByLabelText(`How did I apply?`)).toHaveValue(``)}},H={name:`Read link: company only (interactive)`,args:{onNavigate:()=>{},onSave:()=>{},onFetch:w,defaultUrl:`https://jobs.lever.co/marlowe/3f2a1b4c-5d6e-4f70-8a9b-0c1d2e3f4a5b`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})}),play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:/Create position/})),await E(await t.findByLabelText(`Company`)).toHaveValue(`Marlowe`),await E(t.getByLabelText(`Role`)).toHaveValue(``),await E(t.getByText(`Filled in from the link. Check the details.`)).toBeInTheDocument(),await E(t.getByRole(`button`,{name:/Save details/})).toBeDisabled()}},U={name:`Read link: nothing readable (interactive)`,args:{onNavigate:()=>{},onSave:()=>{},onFetch:w,defaultUrl:`https://www.linkedin.com/jobs/view/3912345678/`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})}),play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:/Create position/})),await E(await t.findByText(`Couldn’t read that link. Add the details below.`)).toBeInTheDocument(),await E(t.getByLabelText(`Company`)).toHaveValue(``),await E(t.queryByText(`Filled in from the link. Check the details.`)).toBeNull(),await E(t.getByRole(`button`,{name:/Create position/})).toBeEnabled()}},W={name:`Reader: job posting (mocked, interactive)`,args:{onNavigate:()=>{},onSave:()=>{},onFetch:Ye({source:`jobposting`,title:`Staff Product Designer`,company:`Quarry`,location:`Tel Aviv`,logoUrl:`https://example.test/logo.png`}),defaultUrl:`https://www.linkedin.com/jobs/view/3912345678/`},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})}),play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:/Create position/})),await E(t.getByRole(`button`,{name:/Create position/})).toHaveAttribute(`aria-busy`,`true`),await E(await t.findByLabelText(`Company`,{},{timeout:4e3})).toHaveValue(`Quarry`),await E(t.getByLabelText(`Role`)).toHaveValue(`Staff Product Designer`),await E(t.getByText(`Filled in from the link. Check the details.`)).toBeInTheDocument()}},G={name:`Reader: refused, local fallback (mocked, interactive)`,args:{onNavigate:()=>{},onSave:()=>{},onFetch:Ye({error:`not allowed`},403),defaultUrl:z},render:e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})}),play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:/Create position/})),await E(await t.findByLabelText(`Company`,{},{timeout:4e3})).toHaveValue(`Northwind Labs`),await E(t.getByLabelText(`Role`)).toHaveValue(`Senior Product Designer`)}},K=e=>(0,T.jsx)(`div`,{style:{width:393,border:`1px solid var(--color-border-default)`},children:(0,T.jsx)(b,{...e})}),q=e=>e.getByLabelText(`Paste the job posting URL here`),Qe=()=>{let e=Error(`denied`);return e.name=`NotAllowedError`,Promise.reject(e)},J={args:{onNavigate:()=>{},onSave:()=>{},readClipboardText:async()=>`Designer at Acme https://jobs.example.test/acme/42 `},render:K,play:async({canvasElement:e})=>{let t=O(e);await E(t.getByRole(`button`,{name:/Create position/})).toBeDisabled(),await D.click(t.getByRole(`button`,{name:`Paste job link`})),await Xe(()=>E(q(t)).toHaveValue(`https://jobs.example.test/acme/42`)),await E(document.activeElement).not.toBe(q(t)),await E(t.queryByRole(`button`,{name:`Paste job link`})).toBeNull(),await E(t.getByRole(`button`,{name:/Create position/})).toBeEnabled(),await D.click(t.getByRole(`button`,{name:`Clear job link`})),await E(q(t)).toHaveValue(``),await E(t.getByRole(`button`,{name:`Paste job link`})).toBeInTheDocument(),await E(t.getByRole(`button`,{name:/Create position/})).toBeDisabled()}},Y={args:{onNavigate:()=>{},onSave:()=>{},onFetch:w,readClipboardText:async()=>z},render:K,play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:`Paste job link`})),await D.click(await t.findByRole(`button`,{name:/Create position/})),await E(await t.findByLabelText(`Company`)).toHaveValue(`Northwind Labs`),await D.click(t.getByRole(`button`,{name:`Clear job link`})),await E(t.queryByLabelText(`Company`)).toBeNull()}},X={args:{onNavigate:()=>{},onSave:()=>{},readClipboardText:async()=>` 
`},render:K,play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:`Paste job link`})),await E(await t.findByText(`Your clipboard is empty. Copy the link first.`)).toBeInTheDocument(),await E(q(t)).toHaveValue(``),await D.type(q(t),`a`),await E(t.queryByText(`Your clipboard is empty. Copy the link first.`)).toBeNull()}},Z={args:{onNavigate:()=>{},onSave:()=>{},readClipboardText:async()=>`call me tomorrow`},render:K,play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:`Paste job link`})),await E(await t.findByText(`No link found in what you copied.`)).toBeInTheDocument(),await E(q(t)).toHaveValue(``)}},Q={args:{onNavigate:()=>{},onSave:()=>{},readClipboardText:()=>Promise.reject(Error(`no clipboard`))},render:K,play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:`Paste job link`})),await E(await t.findByText(`Couldn’t read your clipboard. Paste into the field instead.`)).toBeInTheDocument()}},$={args:{onNavigate:()=>{},onSave:()=>{},readClipboardText:Qe},render:K,play:async({canvasElement:e})=>{let t=O(e);await D.click(t.getByRole(`button`,{name:`Paste job link`})),await new Promise(e=>window.setTimeout(e,50)),await E(q(t)).toHaveValue(``),await E(t.queryByText(/clipboard|No link found/)).toBeNull()}},$e=[`Empty`,`UrlFilled`,`RevealedEmpty`,`Filled`,`FetchSuccess`,`FetchFailed`,`FetchFailedShown`,`SaveFailedShown`,`SaveFailed`,`FilledFromLinkShown`,`ReadLinkCompanyAndRole`,`ReadLinkCompanyOnly`,`ReadLinkNothing`,`ReaderJobPosting`,`ReaderRefusedFallsBack`,`PasteAndClearLink`,`PasteThenReadLink`,`PasteNoteEmptyClipboard`,`PasteNoteNoLink`,`PasteNoteClipboardUnavailable`,`PasteRefusedSaysNothing`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: () => {},
    onNavigate: () => {}
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid #e3e5ea'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...A.parameters?.docs?.source},description:{story:`Frame 1 of the Create position flow — just the headline, the URL field and "Create
position" (disabled until there's a URL). Type or paste a URL, then press Create position:
the sync icon turns, the staged text plays, and the position details appear below with
Company and Role auto-filled. How did I apply? is left for you to choose, then Save details.
(The fetch itself is a stub — see the component's doc comment.)`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: () => {},
    onNavigate: () => {},
    defaultUrl: 'https://www.comeet.com/jobs/northwindlabs/senior-product-designer'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid #e3e5ea'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...j.parameters?.docs?.source},description:{story:`Frame 2 — a URL has been pasted; Create position is ready to press.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: () => {},
    onNavigate: () => {},
    defaultUrl: 'https://www.comeet.com/jobs/northwindlabs/senior-product-designer',
    defaultRevealed: true,
    defaultFetchState: 'failed'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid #e3e5ea'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...M.parameters?.docs?.source},description:{story:`Frame 4 with nothing filled in yet — details visible, Save details disabled. Since the
2026-10-15 app-shell build the only way to reach this is a failed fetch, so it now shows that
state (with its note and Create position enabled) — see FetchFailedShown, which is the same
thing; kept so the story list doesn't lose an entry.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    onSave: () => {},
    onNavigate: () => {},
    defaultUrl: 'https://www.comeet.com/jobs/northwindlabs/senior-product-designer',
    defaultCompany: 'NORTHWIND Labs',
    defaultRole: 'Senior Product Designer',
    defaultHowApplied: 'referred'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid #e3e5ea'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...N.parameters?.docs?.source},description:{story:`Frame 4 as designed — Company and Role filled, How did I apply? chosen, Save details enabled.
Create position is disabled (a fetch has succeeded, so Save details is the one call to
action); edit the URL to see it return to the idle state with the details hidden.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Fetch success (interactive)',
  args: {
    onNavigate: () => {},
    onSave: () => {},
    defaultUrl: URL_SAMPLE
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...P.parameters?.docs?.source},description:{story:`The default stub, with a URL already in: press Create position, the sync plays, Company and
Role fill in and Create position goes disabled — Save details is the only call to action.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Fetch failed (interactive)',
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: failingFetch,
    defaultUrl: URL_SAMPLE
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...F.parameters?.docs?.source},description:{story:`Press Create position: the sync plays, then the link "fails to read" — the details block
opens EMPTY with the note under the button, Create position stays enabled so retrying is
pressing it again, and Save details stays disabled until Company and Role are typed. Editing
the URL clears the note but keeps the details open.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: failingFetch,
    defaultUrl: URL_SAMPLE,
    defaultFetchState: 'failed'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...I.parameters?.docs?.source},description:{story:`Canvas artboard 08 as a still: failed fetch, details open and empty, note showing.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: failingSave,
    defaultUrl: URL_SAMPLE,
    defaultCompany: 'Acme Corp',
    defaultRole: 'Senior Product Designer',
    defaultHowApplied: 'referred',
    defaultSaveFailed: true
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...L.parameters?.docs?.source},description:{story:`Canvas artboard 09 as a still: fetched, filled, Save details enabled, and the save has
failed — the note sits between How did I apply? and Save details.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Save failed (interactive)',
  args: {
    onNavigate: () => {},
    onSave: failingSave,
    defaultUrl: URL_SAMPLE,
    defaultCompany: 'Acme Corp',
    defaultRole: 'Senior Product Designer',
    defaultHowApplied: 'referred'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...R.parameters?.docs?.source},description:{story:`Press Save details: the save rejects, the note appears, nothing else changes. Press again to
retry (this one always fails).`,...R.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: readLink,
    defaultUrl: COMEET_SAMPLE,
    defaultCompany: 'Northwind Labs',
    defaultRole: 'Senior Product Designer',
    defaultFetchState: 'success',
    defaultFilledFromLink: true
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>
}`,...B.parameters?.docs?.source},description:{story:`A still of the filled state after the link was read: Company and Role from the Comeet link, the
"Filled in from the link" note under Create position (disabled), How did I apply? untouched.
Note copy pending ux-writer review.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Read link: company and role (interactive)',
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: readLink,
    defaultUrl: COMEET_SAMPLE
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Create position/
    }));
    await expect(await canvas.findByLabelText('Company')).toHaveValue('Northwind Labs');
    await expect(canvas.getByLabelText('Role')).toHaveValue('Senior Product Designer');
    await expect(canvas.getByText('Filled in from the link. Check the details.')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: /Create position/
    })).toBeDisabled();
    await expect(canvas.getByLabelText('How did I apply?')).toHaveValue('');
  }
}`,...V.parameters?.docs?.source},description:{story:`Press Create position with a Comeet link: Company and Role fill in from the link, the note
shows, Create position goes disabled, How did I apply? stays empty.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Read link: company only (interactive)',
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: readLink,
    defaultUrl: 'https://jobs.lever.co/marlowe/3f2a1b4c-5d6e-4f70-8a9b-0c1d2e3f4a5b'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Create position/
    }));
    await expect(await canvas.findByLabelText('Company')).toHaveValue('Marlowe');
    await expect(canvas.getByLabelText('Role')).toHaveValue('');
    await expect(canvas.getByText('Filled in from the link. Check the details.')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: /Save details/
    })).toBeDisabled();
  }
}`,...H.parameters?.docs?.source},description:{story:`A Lever link carries only the company: Role stays empty for the person to type, so Save
details stays disabled until they do.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Read link: nothing readable (interactive)',
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: readLink,
    defaultUrl: 'https://www.linkedin.com/jobs/view/3912345678/'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Create position/
    }));
    await expect(await canvas.findByText('Couldn’t read that link. Add the details below.')).toBeInTheDocument();
    await expect(canvas.getByLabelText('Company')).toHaveValue('');
    await expect(canvas.queryByText('Filled in from the link. Check the details.')).toBeNull();
    await expect(canvas.getByRole('button', {
      name: /Create position/
    })).toBeEnabled();
  }
}`,...U.parameters?.docs?.source},description:{story:`A LinkedIn link gives nothing (job boards are skipped): the existing failure state.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Reader: job posting (mocked, interactive)',
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: mockedReader({
      source: 'jobposting',
      title: 'Staff Product Designer',
      company: 'Quarry',
      location: 'Tel Aviv',
      logoUrl: 'https://example.test/logo.png'
    }),
    defaultUrl: 'https://www.linkedin.com/jobs/view/3912345678/'
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Create position/
    }));
    await expect(canvas.getByRole('button', {
      name: /Create position/
    })).toHaveAttribute('aria-busy', 'true');
    await expect(await canvas.findByLabelText('Company', {}, {
      timeout: 4000
    })).toHaveValue('Quarry');
    await expect(canvas.getByLabelText('Role')).toHaveValue('Staff Product Designer');
    await expect(canvas.getByText('Filled in from the link. Check the details.')).toBeInTheDocument();
  }
}`,...W.parameters?.docs?.source},description:{story:`The reader found a JobPosting on a LinkedIn page (which the local parser can't read): the
fetching state plays for about 1.5s, then Company and Role come from the reader. Location and
logo in the answer are ignored.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Reader: refused, local fallback (mocked, interactive)',
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: mockedReader({
      error: 'not allowed'
    }, 403),
    defaultUrl: COMEET_SAMPLE
  },
  render: args => <div style={{
    width: 393,
    border: '1px solid var(--color-border-default)'
  }}>
      <AddPositionScreen {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Create position/
    }));
    await expect(await canvas.findByLabelText('Company', {}, {
      timeout: 4000
    })).toHaveValue('Northwind Labs');
    await expect(canvas.getByLabelText('Role')).toHaveValue('Senior Product Designer');
  }
}`,...G.parameters?.docs?.source},description:{story:`The reader refuses (403, as it does outside the hosted app): the local parser fills from the
Comeet address instead, after the same wait.`,...G.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    readClipboardText: async () => 'Designer at Acme https://jobs.example.test/acme/42 '
  },
  render: frame,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: /Create position/
    })).toBeDisabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await waitFor(() => expect(urlField(canvas)).toHaveValue('https://jobs.example.test/acme/42'));
    await expect(document.activeElement).not.toBe(urlField(canvas));
    await expect(canvas.queryByRole('button', {
      name: 'Paste job link'
    })).toBeNull();
    await expect(canvas.getByRole('button', {
      name: /Create position/
    })).toBeEnabled();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear job link'
    }));
    await expect(urlField(canvas)).toHaveValue('');
    await expect(canvas.getByRole('button', {
      name: 'Paste job link'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: /Create position/
    })).toBeDisabled();
  }
}`,...J.parameters?.docs?.source},description:{story:`Empty -> paste -> filled -> clear. The clipboard button ("Paste job link") fills the first link in
what was copied, nothing is focused (no keyboard), the slot becomes "Clear job link", Create
position turns on, and Clear empties the field and brings Paste back.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    onFetch: readLink,
    readClipboardText: async () => COMEET_SAMPLE
  },
  render: frame,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await userEvent.click(await canvas.findByRole('button', {
      name: /Create position/
    }));
    await expect(await canvas.findByLabelText('Company')).toHaveValue('Northwind Labs');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Clear job link'
    }));
    await expect(canvas.queryByLabelText('Company')).toBeNull();
  }
}`,...Y.parameters?.docs?.source},description:{story:`A pasted link feeds the link reader exactly like a typed one: Create position fills Company and
Role from it. Clearing the link afterwards hides the details again (a URL edit, as before).`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    readClipboardText: async () => ' \\n'
  },
  render: frame,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await expect(await canvas.findByText('Your clipboard is empty. Copy the link first.')).toBeInTheDocument();
    await expect(urlField(canvas)).toHaveValue('');
    await userEvent.type(urlField(canvas), 'a');
    await expect(canvas.queryByText('Your clipboard is empty. Copy the link first.')).toBeNull();
  }
}`,...X.parameters?.docs?.source},description:{story:`Note A: an empty clipboard. Nothing is filled; typing in the field clears the note.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    readClipboardText: async () => 'call me tomorrow'
  },
  render: frame,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await expect(await canvas.findByText('No link found in what you copied.')).toBeInTheDocument();
    await expect(urlField(canvas)).toHaveValue('');
  }
}`,...Z.parameters?.docs?.source},description:{story:`Note B: text with no link in it is refused (before, Add took any text).`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    readClipboardText: () => Promise.reject(new Error('no clipboard'))
  },
  render: frame,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await expect(await canvas.findByText('Couldn’t read your clipboard. Paste into the field instead.')).toBeInTheDocument();
  }
}`,...Q.parameters?.docs?.source},description:{story:`Note C: the clipboard cannot be read.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    onNavigate: () => {},
    onSave: () => {},
    readClipboardText: refusedRead
  },
  render: frame,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Paste job link'
    }));
    await new Promise(resolve => window.setTimeout(resolve, 50));
    await expect(urlField(canvas)).toHaveValue('');
    await expect(canvas.queryByText(/clipboard|No link found/)).toBeNull();
  }
}`,...$.parameters?.docs?.source},description:{story:`The iOS Paste bubble was dismissed (the read is refused): nothing is filled and nothing is said.`,...$.parameters?.docs?.description}}}})))()}et();export{A as Empty,F as FetchFailed,I as FetchFailedShown,P as FetchSuccess,N as Filled,B as FilledFromLinkShown,J as PasteAndClearLink,Q as PasteNoteClipboardUnavailable,X as PasteNoteEmptyClipboard,Z as PasteNoteNoLink,$ as PasteRefusedSaysNothing,Y as PasteThenReadLink,V as ReadLinkCompanyAndRole,H as ReadLinkCompanyOnly,U as ReadLinkNothing,W as ReaderJobPosting,G as ReaderRefusedFallsBack,M as RevealedEmpty,R as SaveFailed,L as SaveFailedShown,j as UrlFilled,$e as __namedExportsOrder,Ze as default};