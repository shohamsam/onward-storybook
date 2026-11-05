import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./check-jRkMlj5W.js";var i,a,o,s,c,l,u,d,f,p,m;function h(){return(h=e((()=>{i=`_row_1r8jk_1`,a=`_srOnly_1r8jk_33`,o=`_indicator_1r8jk_44`,s=`_dot_1r8jk_53`,c=`_label_1r8jk_59`,l=`_date_1r8jk_75`,u=`_done_1r8jk_84`,d=`_current_1r8jk_92`,f=`_upcoming_1r8jk_102`,p=`_planned_1r8jk_103`,m={row:i,srOnly:a,indicator:o,dot:s,label:c,date:l,done:u,current:d,upcoming:f,planned:p}})))()}function g({label:e,date:t,state:n,onClick:i,className:a}){let o=!!i,s=o?`button`:`div`,c=n===`planned`;return(0,_.jsxs)(s,{type:o?`button`:void 0,className:[m.row,m[n],a].filter(Boolean).join(` `),onClick:i,"aria-label":o&&c?`${e}, planned. Opens a sheet.`:void 0,children:[(0,_.jsx)(`span`,{className:m.indicator,children:n===`done`?(0,_.jsx)(r,{size:14,strokeWidth:3}):(0,_.jsx)(`span`,{className:m.dot})}),(0,_.jsxs)(`span`,{className:m.label,children:[e,n===`upcoming`&&(0,_.jsx)(`span`,{className:m.srOnly,children:`, upcoming`})]}),c?(0,_.jsx)(`span`,{className:m.date,children:`Planned`}):t&&(0,_.jsx)(`span`,{className:m.date,children:t})]})}var _;function v(){return(v=e((()=>{n(),h(),_=t(),g.__docgenInfo={description:`Pipeline Step Row (Linear SHO-20) — dot/checkmark + step name + date, in the Tap-in detail
view's Pipeline section. \`State\` = Done / Current / Upcoming.

**2026-11-04 (Add a step, Part B).** \`planned\` (a step with no date yet): outline dot, the visible
word "Planned" where the date goes, and when it is a button its accessible name is
"<Label>, planned. Opens a sheet." (copy SA-L-PLANNED-AX). \`upcoming\` (dated, in the future):
outline dot plus the date, and a visually hidden ", upcoming" after the label (SA-L-UPCOMING-AX), so
the meaning never rests on colour. A row with \`onClick\` is a 44px button (\`--size-touch-target\`)
with a visible keyboard focus ring. Done is unchanged (check icon). Colours are unchanged:
\`color-text-tertiary\` is 3.06:1 on white and a separate pass darkens it (decided; this feature
ships no override).

Built directly in code 2026-10-04, same as Header Bar — no Figma node exists yet. Tokens read
straight off the ticket: \`color/status-matched/text\` (Done), \`color/accent/default\` (Current),
\`color/text/tertiary\` (Upcoming). The Done checkmark and the solid/outline dot distinction are
this component's own interpretation of "dot/checkmark" from the ticket text, not a literal
Figma read — worth comparing once the real component exists there.`,methods:[],displayName:`PipelineStepRow`,props:{label:{required:!0,tsType:{name:`string`},description:``},date:{required:!1,tsType:{name:`string`},description:``},state:{required:!0,tsType:{name:`union`,raw:`'done' | 'current' | 'upcoming' | 'planned'`,elements:[{name:`literal`,value:`'done'`},{name:`literal`,value:`'current'`},{name:`literal`,value:`'upcoming'`},{name:`literal`,value:`'planned'`}]},description:``},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Makes the row a button (at least 44px tall). Add a step, Part B (2026-11-04): only a step the app
added gets one — a planned step ("<Label> happened?") or a done / upcoming one that can be
removed. Imported steps never do.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{v as n,g as t};