import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./createLucideIcon-BIy-x5OT.js";import{i,n as a,r as o,t as s}from"./plus-DYr_X5sv.js";import{n as c,t as l}from"./copy-Ce613eh6.js";var u,d;function f(){return(f=e((()=>{n(),u={name:`activity`,size:24,node:[[`path`,{d:`M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2`,key:`169zse`}]]},u.node,d=r(u)})))()}var p,m;function h(){return(h=e((()=>{n(),p={name:`search`,size:24,node:[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]},p.node,m=r(p)})))()}var g,_,v,y;function b(){return(b=e((()=>{g=`_nav_r760q_7`,_=`_item_r760q_30`,v=`_addButton_r760q_31`,y={nav:g,item:_,addButton:v}})))()}function x({active:e,onNavigate:t,className:n}){return(0,S.jsx)(`nav`,{className:[y.nav,n].filter(Boolean).join(` `),"aria-label":`Primary`,children:C.map(({id:n,label:r,Icon:i,disabled:a})=>{let o=n===`add`;return(0,S.jsx)(`button`,{type:`button`,className:o?y.addButton:y.item,"data-active":e===n||void 0,"aria-label":r,"aria-current":e===n?`page`:void 0,disabled:a,onClick:()=>t?.(n),children:(0,S.jsx)(i,{size:o?22:26,"aria-hidden":`true`})},n)})})}var S,C;function w(){return(w=e((()=>{f(),i(),c(),a(),h(),b(),S=t(),C=[{id:`stack`,label:`Stack`,Icon:l},{id:`archive`,label:`Archive`,Icon:o},{id:`add`,label:`Add position`,Icon:s},{id:`dashboard`,label:`Dashboard`,Icon:d,disabled:!0},{id:`search`,label:`Search`,Icon:m}],x.__docgenInfo={description:`Bottom Nav — built in code 2026-10-13. It exists in Figma (SHO-18, with Nav Item SHO-7 and Nav
Add Button SHO-8) but was never translated; this is the first code version, made for the
"Create position" flow whose frames each show it (instance 302:2294).

**What's confirmed vs. inferred — read this before trusting it.** The Figma MCP quota ran out
before this instance's own styles could be pulled, so:
  - *From the frame metadata (exact):* 393x57 across the bottom edge of the screen.
  - *From the user's screenshots (measured, not read from Figma):* five icon-only items (decision
    #9 — no labels), the Add item a dark rounded square with a white plus, the others in
    tertiary gray, a 1px top border on a surface fill. The 8px padding / 16px gap / item size
    was the arithmetic that reproduced the 57px height and the icons' horizontal positions.
  - *Guessed:* icon identities — \`Copy\` for Stack (two overlapping rounded squares in the
    screenshot; the Figma file's icon names are literal Lucide names, so this is the closest
    match, not a confirmed one) — the Add fill (\`--color-nav-add-bg\`, gray-700, matched by eye),
    the active tint (\`color/text/primary\`), and the pressed treatment.
  - *Deviation from the frames, decided 2026-10-15:* Dashboard is dimmed (\`--opacity-disabled\`)
    and disabled, as design-brief.md §1 says ("coming soon"). The frames show it undimmed.

**Made bigger 2026-10-19 (Archive brief, decision 12 — Shoham, "feels right" on the phone).**
Bar 64px (was 57), items 48px tall (was 40), Add button 48x48 (was 40x40), nav icons 26px (was
24) and the plus 22px (was 20). Driven by \`--size-nav-item\` (40 -> 48). Why: the 40px items
broke the project's own 44px \`--size-touch-target\`. The icon sizes are literals in this file as
before (there is no icon-size token). CALL I MADE: the brief says "64px" but also "8 + 48 + 8
+ 1px border", which adds to 65. Its other derived numbers (Toast 80 = 64 + 16, "3px higher"
= 7 / 2) all assume 64, and Figma-wins, so the bar is 64 with the border drawn inside the top
8px (\`padding-top: 8px - 1px\`). If 65 was meant, change that one padding and the \`+ 1px\` that
StackScreen's \`--stack-nav-height\` no longer carries.

Needs a Figma pass (node 302:2294 and the Nav Item / Nav Add Button components) when quota
allows. Icon-only, so each item carries an \`aria-label\`.`,methods:[],displayName:`BottomNav`,props:{active:{required:!1,tsType:{name:`union`,raw:`'stack' | 'archive' | 'add' | 'dashboard' | 'search'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`},{name:`literal`,value:`'add'`},{name:`literal`,value:`'dashboard'`},{name:`literal`,value:`'search'`}]},description:"Which destination is current. `add` is the elevated dark button; the rest tint to\n`color/text/primary` when active."},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BottomNavItemId) => void`,signature:{arguments:[{type:{name:`union`,raw:`'stack' | 'archive' | 'add' | 'dashboard' | 'search'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`},{name:`literal`,value:`'add'`},{name:`literal`,value:`'dashboard'`},{name:`literal`,value:`'search'`}]},name:`item`}],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{w as n,x as t};