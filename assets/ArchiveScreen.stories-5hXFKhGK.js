import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./BottomNav-yNyHYz7t.js";import{n as a,t as ee}from"./Card-BHwN1aSu.js";import{n as te,t as ne}from"./LogoTile-BhGxr8df.js";import{n as o,t as re}from"./SegmentedControl-WhDVHhYo.js";import{n as ie,t as ae}from"./TempBackupLink-AHxhzBim.js";import{n as s,o as c}from"./stackFixtures-DLE0JGwT.js";var l,u,d,f,p,m;function h(){return(h=e((()=>{l=`_row_7bm8y_2`,u=`_text_7bm8y_36`,d=`_name_7bm8y_44`,f=`_secondary_7bm8y_55`,p=`_reason_7bm8y_67`,m={row:l,text:u,name:d,secondary:f,reason:p}})))()}function oe({companyName:e,secondary:t,reason:n,logoUrl:r,onOpen:i,className:a}){return(0,g.jsxs)(`button`,{type:`button`,className:[m.row,a].filter(Boolean).join(` `),onClick:i,"aria-expanded":`false`,children:[(0,g.jsx)(ne,{companyName:e,logoUrl:r}),(0,g.jsxs)(`span`,{className:m.text,children:[(0,g.jsx)(`span`,{className:m.name,children:e}),t&&(0,g.jsx)(`span`,{className:m.secondary,children:t})]}),n&&(0,g.jsx)(`span`,{className:m.reason,children:n})]})}var g;function _(){return(_=e((()=>{te(),h(),g=n(),oe.__docgenInfo={description:`Archive Row — built 2026-10-19 for the Archive tab (briefs/archive.md decision 5). The List
Item exists in Figma (SHO-21) but not in code, so this is a small row of its own that reuses
\`LogoTile\` (48px) rather than a translation of that component; the Linear ticket was not
checked (no Linear access in this environment), so a locked SHO-21 spec could differ.

Logo tile, company name (heading-sm), an optional secondary line, and on the right the reason
as quiet text: 13px, weight 600, \`color/text/secondary\`, no fill — 25 of 37 archived positions
are Rejected and a coloured chip repeated down the list was too loud (Shoham, 2026-10-19).
Minimum height 64px (\`--size-list-row-min-height\`, a token added with this row). The name and
the secondary line are one line each with an ellipsis; the reason never wraps, so the name
truncates first.

Guessed, not from the brief: the 16px gap between the tile, the text and the reason; that a
very long reason is capped at 40% of the row and ellipsised (the brief says only that it never
wraps); the pressed fill (\`color/bg/surface-sunken\`), with the same fill on hover behind
\`(hover: hover) and (pointer: fine)\`; the 2px accent focus ring, copied from Bottom Nav.
Separators between rows are drawn by the list that holds the rows (ArchiveScreen), not here.`,methods:[],displayName:`ArchiveRow`,props:{companyName:{required:!0,tsType:{name:`string`},description:``},secondary:{required:!1,tsType:{name:`string`},description:`One optional line under the name: the role if known, otherwise a one-line note such as the
applied date. The caller chooses; the row only truncates it to one line.`},reason:{required:!1,tsType:{name:`string`},description:`The stored reason, as is, shown on the right as quiet text (not a chip). Any non-empty
string; omit when the record holds none.`},logoUrl:{required:!1,tsType:{name:`string`},description:``},onOpen:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`The whole row is this one button. The screen swaps the row for the full Card.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var v,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,y;function xe(){return(xe=e((()=>{v=`_screen_iubff_3`,se=`_header_iubff_13`,ce=`_filterWrap_iubff_24`,le=`_filter_iubff_24`,ue=`_main_iubff_39`,de=`_list_iubff_44`,fe=`_item_iubff_51`,pe=`_openCard_iubff_57`,me=`_card_iubff_62`,he=`_empty_iubff_69`,ge=`_emptyBlock_iubff_77`,_e=`_emptyTitle_iubff_84`,ve=`_emptyBody_iubff_96`,ye=`_tempBackupRow_iubff_109`,be=`_tempBackupLink_iubff_116`,y={screen:v,header:se,filterWrap:ce,filter:le,main:ue,list:de,item:fe,openCard:pe,card:me,empty:he,emptyBlock:ge,emptyTitle:_e,emptyBody:ve,tempBackupRow:ye,tempBackupLink:be}})))()}function Se(e){return e.termination?.reason.trim()??``}function Ce(e){let t=Se(e);return t===`Rejected`||t===`Ghosted`?t:`Other`}function we(e){return e.role.trim()?e.role:e.appliedDate?`Applied ${e.appliedDate}`:void 0}function Te(e){for(let t=e.length-1;t>=0;--t)if(e[t].state!==`upcoming`&&e[t].state!==`planned`)return t;return-1}function Ee(e){if(!e||e.length===0)return{};let t=e.some(e=>e.state===`current`),n=t?e.findIndex(e=>e.state===`current`):Te(e);return n<0?{steps:e}:{steps:t?e:e.map((e,t)=>t===n?{...e,state:`current`}:e),reached:e[n].label}}function b({records:e,onRestore:t,onNavigate:n,onOpenBackupTemp:r,defaultOpenId:a,defaultFilter:te=`All`,className:ne}){let[o,ie]=(0,x.useState)(te),[s,c]=(0,x.useState)(a??null),l={All:e.length,Rejected:0,Ghosted:0,Other:0};for(let t of e)l[Ce(t)]+=1;let u=o===`All`?e:e.filter(e=>Ce(e)===o),d=(0,x.useRef)(null),f=(0,x.useRef)(null),p=(0,x.useRef)(s);(0,x.useEffect)(()=>{let e=p.current;if(p.current=s,e!==s){if(s)f.current?.focus({preventScroll:!0});else if(e){let t=d.current?.querySelectorAll(`[data-record-id]`);(t?Array.from(t).find(t=>t.dataset.recordId===e):void 0)?.querySelector(`button`)?.focus({preventScroll:!0})}}},[s]);let m=(0,x.useRef)(null),h=(0,x.useRef)(null),g=(0,x.useRef)(null);(0,x.useEffect)(()=>{let t=g.current;if(!t||e.some(e=>e.id===t.removedId))return;g.current=null;let n=d.current?.querySelectorAll(`[data-record-id]`);((n?Array.from(n).find(e=>e.dataset.recordId===t.targetId):void 0)?.querySelector(`button`)??h.current?.querySelector(`button[aria-pressed="true"]`)??m.current)?.focus({preventScroll:!0})},[e]);async function _(e){let n=u.findIndex(t=>t.id===e),r=u[n+1]??u[n-1];g.current={removedId:e,targetId:r?.id??null},await t?.(e)===!1&&(g.current=null)}let v=[y.screen,ne].filter(Boolean).join(` `);return(0,S.jsxs)(`div`,{className:v,children:[(0,S.jsx)(`h1`,{className:y.header,ref:m,tabIndex:-1,children:`Archive`}),e.length>0&&(0,S.jsx)(`div`,{className:y.filterWrap,ref:h,children:(0,S.jsx)(re,{className:y.filter,segments:C.map(e=>`${e} · ${l[e]}`),selectedIndex:C.indexOf(o),onChange:e=>{ie(C[e]),c(null)},fullWidth:!0,scrollable:!0,ariaLabel:`Filter by reason`})}),u.length===0?(0,S.jsx)(`main`,{className:y.empty,children:(0,S.jsxs)(`div`,{className:y.emptyBlock,children:[(0,S.jsx)(`h2`,{className:y.emptyTitle,children:e.length===0?`Nothing archived yet`:`Nothing here`}),(0,S.jsx)(`p`,{className:y.emptyBody,children:`Positions you close out will wait here, with the reason you gave.`}),r&&(0,S.jsx)(ae,{className:y.tempBackupLink,onOpen:r})]})}):(0,S.jsxs)(`main`,{className:y.main,children:[(0,S.jsx)(`ul`,{className:y.list,ref:d,children:u.map(e=>{let n=e.id===s,{steps:r,reached:i}=Ee(e.pipeline);return(0,S.jsx)(`li`,{className:y.item,"data-record-id":e.id,children:n?(0,S.jsx)(`div`,{ref:f,tabIndex:-1,className:y.openCard,children:(0,S.jsx)(ee,{...e,pipeline:r,pipelineReached:i,defaultExpanded:!0,showDepthEffect:!1,onExpandedChange:e=>{e||c(null)},onRestore:()=>_(e.id),restoreUnavailable:!t||e.restoreUnavailable,className:y.card})}):(0,S.jsx)(oe,{companyName:e.companyName,secondary:we(e),reason:Se(e)||void 0,logoUrl:e.logoUrl,onOpen:()=>c(e.id)})},e.id)})}),r&&(0,S.jsx)(`div`,{className:y.tempBackupRow,children:(0,S.jsx)(ae,{onOpen:r})})]}),(0,S.jsx)(i,{active:`archive`,onNavigate:n})]})}var x,S,C;function De(){return(De=e((()=>{x=t(),_(),r(),a(),o(),ie(),xe(),S=n(),C=[`All`,`Rejected`,`Ghosted`,`Other`],b.__docgenInfo={description:`Archive screen — built 2026-10-19 from \`briefs/archive.md\` (UI slice, boards A, C, D of the
canvas "Archive"). Props-driven: no store, no router, no toast. Header "Archive" (same type as
"Your stack", no count), a full-width filter, a flat list of \`ArchiveRow\`s, the Bottom Nav with
Archive current.

**Filter** (decision 3): the existing SegmentedControl, four options labelled
\`All · 37\` / \`Rejected · 25\` / \`Ghosted · 8\` / \`Other · 4\` (a middle dot, counts computed from
\`records\`), segments 44px tall, on a white track (decision 4, via the control's new
\`--segment-track-bg\` hook). \`Other\` is every reason that is not exactly \`Rejected\` or \`Ghosted\`.
Hidden when there are no records. Changing the filter closes the open row.

The filter is \`scrollable\` (Shoham, 2026-10-19, after seeing it on her iPhone): every segment is
padded 12px each side and sized to its content, so the title and count are never cut, and the
track scrolls sideways when the four don't fit (at 393px wide, with the brief's counts, they just
don't). The selected segment is scrolled fully into view. This replaced a shrink-and-ellipsis
version made after QA at 320px.

**Opening** (decision 6): tapping a row replaces it, in place, with the full Card in archived
mode (see Card's \`onRestore\`), so any other open row closes; Show less puts the row back. The
page scrolls; nothing is clipped. Focus moves to the opened card and returns to the row on
close. After Restore, focus goes to the next row's button
(else the previous one, else the filter, else the header) once the parent has removed the record.
No animation, so there is nothing to gate for reduced motion.

**Empty** (decision 10): \`Nothing archived yet\` with no button and no filter; a filter that
matches nothing shows the same block headed \`Nothing here\` (same body line — a literal reading
of "the same empty block"; reversible).

Calls I made: the header is its own \`h1\` styled like the Stack's, not \`HeaderBar\` (that one has
a back arrow); the row's second line is the role, else \`Applied <date>\`; the screen promotes the
last reached pipeline step to \`current\` for the card (see \`endedAt\`); a record's own
\`onOpenLink\` is what enables "Open original link" — the data mapping produces no link yet, so
the wiring (B2) has to supply one. Spacing between header, filter and list (16px) is a guess.
Not seen in a browser by the author.

**2026-10-22, TEMPORARY: \`onOpenBackupTemp\`.** A mockup aid (Shoham: "we will not keep" it): the
home-screen app has no address bar, so the Backup page could not be reached. When the prop is
passed, \`TempBackupLink\` ("Backup and restore") is drawn centred below the list's last row (16px
under it) and below the empty block's body line, in both the "Nothing archived yet" and the
filtered "Nothing here" versions (my call: the brief names the empty state, and the filtered one
is the same block). It sits inside \`<main>\`, so it scrolls with the list; it is not in the
Bottom Nav. Remove with the prop when the real settings screen exists.`,methods:[],displayName:`ArchiveScreen`,props:{records:{required:!0,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`CardProps & {
  id: string;
  /** Marks first-run sample data (briefs/app-shell.md §4). Carried only — there is deliberately
   * no per-card mark (the Card has no slot for one); the first-run Toast is how it's said. */
  sample?: boolean;
}`,elements:[{name:`signature`,type:`object`,raw:`{
  companyName: string;
  role: string;
  logoUrl?: string;

  stageLabel: string;
  totalSteps: number;
  currentStep: number;

  signalState: SignalChipState;
  signalLabel?: string;

  location: string;
  officeDays: string;

  // Expanded-only content, all optional so the Card still renders collapsed-only (e.g. an
  // isolated story, or a job record that hasn't been fleshed out with every field yet).
  /** Shown as a range per SHO-34 (e.g. "35k - 37k") — "Offered" is intentionally not a prop
   * here; dropped from this view 2026-10-05 since recruiters rarely give a hard number this
   * early, and the signal chip already carries that comparative meaning. */
  compensationAsked?: string;
  contacts?: { hr: Contact; hiringManager: Contact };
  /** Full step checklist for the expanded Pipeline section — distinct from the collapsed
   * Progress Bar above, which just needs stageLabel/totalSteps/currentStep. */
  pipeline?: PipelineStep[];
  /** Absolute applied date, e.g. "Sep 10, 2026". The expanded Logistics section also shows a
   * relative string ("20 days ago") computed from this at render time. */
  appliedDate?: string;
  /** Index into ['Cold', 'Referred', 'Other']. Rendered as an informational chip (reusing
   * Signal Chip with its dot hidden), not an editable control — set once at Add time,
   * design-brief.md §5, not re-edited from here. Was a disabled Segmented Control until
   * 2026-10-07, when Shoham replaced it with a chip in Figma. */
  howAppliedIndex?: number;
  notes?: string;
  /** Present only once the card has been dismissed — design-brief.md §4.7. */
  termination?: { reason: string; feedback?: string };

  /** A row of the hiring process was tapped. Since 2026-11-04 (Add a step, Part B) only rows the app
   * added are buttons: a planned step, or a done / upcoming one that can be removed (a step that has
   * an \`eventId\`). Imported rows and Applied never are, and none on an archived card. */
  onAdvanceStep?: (index: number) => void;
  /** Add a step (2026-11-04): "Add a step" under the hiring-process rows, on an expanded card that is
   * not archived. Giving this prop also draws the section on a card with no steps (just the button).
   * Absent, the card is exactly what it was. */
  onAddStep?: () => void;
  /** Draws "Add a step" disabled and makes no row a button: for a twin or a card that is leaving
   * (same idea as \`editUnavailable\`). */
  stepsUnavailable?: boolean;
  onEdit?: () => void;
  onOpenLink?: () => void;
  onArchive?: () => void;
  /** Archive tab (2026-10-19). **Giving this prop turns the card into an archived card**: the
   * actions become Show less, Open original link, Restore to stack (no Edit, no Archive), the
   * Termination block moves up to sit right after the header, the pipeline rows stop being
   * tappable, and the empty-data cases below are hidden rather than drawn bare. Restore is a
   * normal secondary button, not danger (briefs/archive.md decision 8). Absent, the card is
   * exactly what it always was. The caller removes the card after this fires; the Card itself
   * shows no toast and asks for no confirmation (decision 9). */
  onRestore?: () => void;
  /** Phase B2a (2026-10-19). **Turns the card into the "Couldn't read this one" card** for a stored
   * record the data layer could not read (position-card-states.md 3.7, artboard 09): a "?" tile,
   * the title, one line with a warning icon, and a "Copy saved data" button. Every other prop is
   * ignored. \`copyText\` is the record exactly as stored; \`copyable: false\` (the value could not be
   * turned into text) disables the button. There is no Remove here: removing a record needs a data
   * operation that does not exist yet (step 2b). */
  unreadable?: { copyText: string; copyable?: boolean };
  /** Label of the last stage reached, e.g. "First interview". Only changes one thing: the
   * hiring-process section title reads \`Hiring process · reached <label>\` (was \`Pipeline\`, until 2026-11-04). Independent of \`onRestore\`. */
  pipelineReached?: string;
  /** Archived mode only: draw "Restore to stack" disabled. For a screen that shows archived cards
   * before Restore exists (phase B2a), so the button is not a dead tap. */
  restoreUnavailable?: boolean;
  /** Expanded card, not archived: draw "Edit" / "Archive" disabled (same place, same labels;
   * Archive keeps its danger look) until the screen can do them (phase B step 2a, Shoham,
   * 2026-10-19). Pass \`onEdit\` / \`onArchive\` and leave these off to enable them. */
  editUnavailable?: boolean;
  archiveUnavailable?: boolean;
  /** Edit position (2026-10-25): the position has a kept draft, so the Edit button reads
   * "Continue editing" (accessible name "Continue editing, not saved yet"). Applies to the Stack
   * card and the archived card. No badge anywhere else (decided). */
  hasDraft?: boolean;

  /** Starts the card expanded — a story/demo convenience, since there's no real navigation or
   * persisted state yet (SHO-26). The toggle itself is always owned internally. */
  defaultExpanded?: boolean;
  /** Fires on every toggle (e.g. for analytics) — informational only, does not control state. */
  onExpandedChange?: (expanded: boolean) => void;

  /** The two stacked-card-behind layers that give the deck depth. Default true, and only
   * shown while collapsed — an expanded card is taller and sits on top of the stack, so the
   * peek-behind effect would just look like misaligned clutter. */
  showDepthEffect?: boolean;

  className?: string;
}`,signature:{properties:[{key:`companyName`,value:{name:`string`,required:!0}},{key:`role`,value:{name:`string`,required:!0}},{key:`logoUrl`,value:{name:`string`,required:!1}},{key:`stageLabel`,value:{name:`string`,required:!0}},{key:`totalSteps`,value:{name:`number`,required:!0}},{key:`currentStep`,value:{name:`number`,required:!0}},{key:`signalState`,value:{name:`union`,raw:`'lowball' | 'close' | 'matched' | 'none'`,elements:[{name:`literal`,value:`'lowball'`},{name:`literal`,value:`'close'`},{name:`literal`,value:`'matched'`},{name:`literal`,value:`'none'`}],required:!0}},{key:`signalLabel`,value:{name:`string`,required:!1}},{key:`location`,value:{name:`string`,required:!0}},{key:`officeDays`,value:{name:`string`,required:!0}},{key:`compensationAsked`,value:{name:`string`,required:!1},description:`Shown as a range per SHO-34 (e.g. "35k - 37k") — "Offered" is intentionally not a prop
here; dropped from this view 2026-10-05 since recruiters rarely give a hard number this
early, and the signal chip already carries that comparative meaning.`},{key:`contacts`,value:{name:`signature`,type:`object`,raw:`{ hr: Contact; hiringManager: Contact }`,signature:{properties:[{key:`hr`,value:{name:`signature`,type:`object`,raw:`{ name: string; email?: string; phone?: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!1}},{key:`phone`,value:{name:`string`,required:!1}}]},required:!0}},{key:`hiringManager`,value:{name:`signature`,type:`object`,raw:`{ name: string; email?: string; phone?: string }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`email`,value:{name:`string`,required:!1}},{key:`phone`,value:{name:`string`,required:!1}}]},required:!0}}]},required:!1}},{key:`pipeline`,value:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ label: string; date?: string; state: PipelineStepState; eventId?: string }`,signature:{properties:[{key:`label`,value:{name:`string`,required:!0}},{key:`date`,value:{name:`string`,required:!1}},{key:`state`,value:{name:`union`,raw:`'done' | 'current' | 'upcoming' | 'planned'`,elements:[{name:`literal`,value:`'done'`},{name:`literal`,value:`'current'`},{name:`literal`,value:`'upcoming'`},{name:`literal`,value:`'planned'`}],required:!0}},{key:`eventId`,value:{name:`string`,required:!1}}]}}],raw:`PipelineStep[]`,required:!1},description:`Full step checklist for the expanded Pipeline section — distinct from the collapsed
Progress Bar above, which just needs stageLabel/totalSteps/currentStep.`},{key:`appliedDate`,value:{name:`string`,required:!1},description:`Absolute applied date, e.g. "Sep 10, 2026". The expanded Logistics section also shows a
relative string ("20 days ago") computed from this at render time.`},{key:`howAppliedIndex`,value:{name:`number`,required:!1},description:`Index into ['Cold', 'Referred', 'Other']. Rendered as an informational chip (reusing
Signal Chip with its dot hidden), not an editable control — set once at Add time,
design-brief.md §5, not re-edited from here. Was a disabled Segmented Control until
2026-10-07, when Shoham replaced it with a chip in Figma.`},{key:`notes`,value:{name:`string`,required:!1}},{key:`termination`,value:{name:`signature`,type:`object`,raw:`{ reason: string; feedback?: string }`,signature:{properties:[{key:`reason`,value:{name:`string`,required:!0}},{key:`feedback`,value:{name:`string`,required:!1}}]},required:!1},description:`Present only once the card has been dismissed — design-brief.md §4.7.`},{key:`onAdvanceStep`,value:{name:`signature`,type:`function`,raw:`(index: number) => void`,signature:{arguments:[{type:{name:`number`},name:`index`}],return:{name:`void`}},required:!1},description:`A row of the hiring process was tapped. Since 2026-11-04 (Add a step, Part B) only rows the app
added are buttons: a planned step, or a done / upcoming one that can be removed (a step that has
an \`eventId\`). Imported rows and Applied never are, and none on an archived card.`},{key:`onAddStep`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Add a step (2026-11-04): "Add a step" under the hiring-process rows, on an expanded card that is
not archived. Giving this prop also draws the section on a card with no steps (just the button).
Absent, the card is exactly what it was.`},{key:`stepsUnavailable`,value:{name:`boolean`,required:!1},description:'Draws "Add a step" disabled and makes no row a button: for a twin or a card that is leaving\n(same idea as `editUnavailable`).'},{key:`onEdit`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1}},{key:`onOpenLink`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1}},{key:`onArchive`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1}},{key:`onRestore`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1},description:`Archive tab (2026-10-19). **Giving this prop turns the card into an archived card**: the
actions become Show less, Open original link, Restore to stack (no Edit, no Archive), the
Termination block moves up to sit right after the header, the pipeline rows stop being
tappable, and the empty-data cases below are hidden rather than drawn bare. Restore is a
normal secondary button, not danger (briefs/archive.md decision 8). Absent, the card is
exactly what it always was. The caller removes the card after this fires; the Card itself
shows no toast and asks for no confirmation (decision 9).`},{key:`unreadable`,value:{name:`signature`,type:`object`,raw:`{ copyText: string; copyable?: boolean }`,signature:{properties:[{key:`copyText`,value:{name:`string`,required:!0}},{key:`copyable`,value:{name:`boolean`,required:!1}}]},required:!1},description:`Phase B2a (2026-10-19). **Turns the card into the "Couldn't read this one" card** for a stored
record the data layer could not read (position-card-states.md 3.7, artboard 09): a "?" tile,
the title, one line with a warning icon, and a "Copy saved data" button. Every other prop is
ignored. \`copyText\` is the record exactly as stored; \`copyable: false\` (the value could not be
turned into text) disables the button. There is no Remove here: removing a record needs a data
operation that does not exist yet (step 2b).`},{key:`pipelineReached`,value:{name:`string`,required:!1},description:'Label of the last stage reached, e.g. "First interview". Only changes one thing: the\nhiring-process section title reads `Hiring process · reached <label>` (was `Pipeline`, until 2026-11-04). Independent of `onRestore`.'},{key:`restoreUnavailable`,value:{name:`boolean`,required:!1},description:`Archived mode only: draw "Restore to stack" disabled. For a screen that shows archived cards
before Restore exists (phase B2a), so the button is not a dead tap.`},{key:`editUnavailable`,value:{name:`boolean`,required:!1},description:'Expanded card, not archived: draw "Edit" / "Archive" disabled (same place, same labels;\nArchive keeps its danger look) until the screen can do them (phase B step 2a, Shoham,\n2026-10-19). Pass `onEdit` / `onArchive` and leave these off to enable them.'},{key:`archiveUnavailable`,value:{name:`boolean`,required:!1}},{key:`hasDraft`,value:{name:`boolean`,required:!1},description:`Edit position (2026-10-25): the position has a kept draft, so the Edit button reads
"Continue editing" (accessible name "Continue editing, not saved yet"). Applies to the Stack
card and the archived card. No badge anywhere else (decided).`},{key:`defaultExpanded`,value:{name:`boolean`,required:!1},description:`Starts the card expanded — a story/demo convenience, since there's no real navigation or
persisted state yet (SHO-26). The toggle itself is always owned internally.`},{key:`onExpandedChange`,value:{name:`signature`,type:`function`,raw:`(expanded: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`expanded`}],return:{name:`void`}},required:!1},description:`Fires on every toggle (e.g. for analytics) — informational only, does not control state.`},{key:`showDepthEffect`,value:{name:`boolean`,required:!1},description:`The two stacked-card-behind layers that give the deck depth. Default true, and only
shown while collapsed — an expanded card is taller and sits on top of the stack, so the
peek-behind effect would just look like misaligned clutter.`},{key:`className`,value:{name:`string`,required:!1}}]}},{name:`signature`,type:`object`,raw:`{
  id: string;
  /** Marks first-run sample data (briefs/app-shell.md §4). Carried only — there is deliberately
   * no per-card mark (the Card has no slot for one); the first-run Toast is how it's said. */
  sample?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`sample`,value:{name:`boolean`,required:!1},description:`Marks first-run sample data (briefs/app-shell.md §4). Carried only — there is deliberately
no per-card mark (the Card has no slot for one); the first-run Toast is how it's said.`}]}}]}],raw:`StackRecord[]`},description:"The archived positions, already in Archive order (newest archived first; the data layer's\n`orderForArchive` + `toStackRecord`). Each one's `termination.reason` is its reason; a record\nwith none counts as Other. No storage here — the caller owns it."},onRestore:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(id: string) => void | boolean | Promise<void | boolean>`,signature:{arguments:[{type:{name:`string`},name:`id`}],return:{name:`union`,raw:`void | boolean | Promise<void | boolean>`,elements:[{name:`void`},{name:`boolean`},{name:`Promise`,elements:[{name:`union`,raw:`void | boolean`,elements:[{name:`void`},{name:`boolean`}]}],raw:`Promise<void | boolean>`}]}}},description:'"Restore to stack" on an opened card. Called once per tap with the card\'s `id` (a display id:\nthe parent maps it to the stored id; see app/storeView.ts). The parent removes the record; the\nscreen shows no toast and no confirmation. May return a promise; resolving `false` means it did\nnot happen. A record with `restoreUnavailable` set has the button drawn disabled.'},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BottomNavItemId) => void`,signature:{arguments:[{type:{name:`union`,raw:`'stack' | 'archive' | 'add' | 'dashboard' | 'search'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`},{name:`literal`,value:`'add'`},{name:`literal`,value:`'dashboard'`},{name:`literal`,value:`'search'`}]},name:`item`}],return:{name:`void`}}},description:``},onOpenBackupTemp:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`TEMPORARY (2026-10-22, mockup aid; switched in \`app/tempBackupLink.ts\`): when passed, a quiet
"Backup and restore" link is drawn below the last row and in the empty state, and pressing it
calls this. Omitted, nothing is drawn.`},defaultOpenId:{required:!1,tsType:{name:`string`},description:"Story/demo convenience (like the other screens' `default*` props): start with one row open\n/ a filter chosen. The screen owns both after that."},defaultFilter:{required:!1,tsType:{name:`union`,raw:`'All' | 'Rejected' | 'Ghosted' | 'Other'`,elements:[{name:`literal`,value:`'All'`},{name:`literal`,value:`'Rejected'`},{name:`literal`,value:`'Ghosted'`},{name:`literal`,value:`'Other'`}]},description:``,defaultValue:{value:`'All'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}function w(e,t,n,r,i={}){return{id:e,companyName:t,role:n,stageLabel:`No stages yet`,totalSteps:1,currentStep:0,signalState:`none`,location:``,officeDays:``,termination:{reason:r},...i}}var Oe,ke,T,E,D,O,k;function Ae(){return(Ae=e((()=>{Oe=`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Crect%20width%3D%2248%22%20height%3D%2248%22%20rx%3D%2210%22%20fill%3D%22%232e7d6b%22%2F%3E%3Cpath%20d%3D%22M12%2030%2024%2012l12%2018z%22%20fill%3D%22%23fff%22%2F%3E%3C%2Fsvg%3E`,ke=()=>{},T={id:`quillfeather`,companyName:`Quillfeather Labs`,role:`Product Designer`,logoUrl:Oe,stageLabel:`First interview`,totalSteps:3,currentStep:3,signalState:`none`,location:`Tel Aviv, Example St`,officeDays:`Mon, Wed`,compensationAsked:`34k - 36k`,contacts:{hr:{name:`Noa Barak`,email:`noa@quillfeather.example`,phone:`054-555-0142`},hiringManager:{name:`Eli Stern`,email:`eli@quillfeather.example`}},pipeline:[{label:`Applied`,date:`Sep 2`,state:`done`},{label:`Recruiter call`,date:`Sep 9`,state:`done`},{label:`First interview`,date:`Sep 18`,state:`done`}],appliedDate:`Sep 2, 2026`,howAppliedIndex:1,notes:`Met the team lead at a meetup. Liked the design-ops angle of the role.`,termination:{reason:`Rejected`,feedback:`They went with someone who had more experience in regulated products.`},onOpenLink:ke},E={id:`tessellate`,companyName:`Tessellate`,role:``,stageLabel:`No stages yet`,totalSteps:1,currentStep:0,signalState:`none`,location:``,officeDays:``,appliedDate:`Aug 14, 2026`,termination:{reason:`Ghosted`}},D={id:`oatmeal`,companyName:`Oatmeal Robotics`,role:``,stageLabel:`No stages yet`,totalSteps:1,currentStep:0,signalState:`none`,location:``,officeDays:``},O=[T,w(`harbor-pine`,`Harbor & Pine`,`Senior UX Designer`,`Ghosted`),w(`marlowe`,`Marlowe Analytics`,`Product Designer`,`Rejected`,{stageLabel:`Recruiter call`,pipeline:[{label:`Applied`,date:`Aug 30`,state:`done`},{label:`Recruiter call`,date:`Sep 6`,state:`done`}],totalSteps:2,currentStep:2,appliedDate:`Aug 30, 2026`}),E,w(`copperfield`,`Copperfield Health`,`Design Lead`,`Withdrawn`,{appliedDate:`Aug 2, 2026`}),w(`fernbank`,`Fernbank Studio`,`UI Designer`,`Rejected`),w(`lumenary`,`Lumenary`,`Product Designer, Growth`,`Position closed`),w(`kestrel`,`Kestrel Freight`,``,`Rejected`,{appliedDate:`Jul 21, 2026`}),w(`pinewick`,`Pinewick`,`Senior Product Designer`,`Ghosted`),w(`juniper-rail`,`Juniper Rail`,`Design Systems Designer`,`Rejected`),w(`brackenfield`,`Brackenfield`,`Product Designer`,`Role put on hold`),w(`saltmarsh`,`Saltmarsh`,`UX Researcher`,`Ghosted`),w(`wrenfield`,`Wrenfield Systems`,`Product Designer`,`Rejected`)],k=[{...T,id:`brightloom`,companyName:`Brightloom Hydroponic & Vertical Farming Infrastructure Holdings International`,role:`Principal Product Designer, Design Systems & Developer Experience Platform`,logoUrl:void 0,termination:{reason:`Rejected`,feedback:`The hiring manager wrote a long reply about timing, budget, and a reorganisation that had not been announced yet, and asked me to apply again next year.`}},w(`long-reason`,`Northgate Tooling`,`Product Designer, Platform Experience and Internal Tools`,`Position closed after a hiring freeze`),w(`short`,`Ivy`,`UX`,`Ghosted`)]})))()}var A,j,M,je,N,P,Me,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,Ne;function Pe(){return(Pe=e((()=>{A=t(),De(),Ae(),s(),j=n(),{expect:M,fn:je,userEvent:N,within:P}=__STORYBOOK_MODULE_TEST__,Me={title:`Screens/Archive`,component:b,parameters:{layout:`fullscreen`},decorators:[e=>(0,j.jsx)(`div`,{style:c,children:(0,j.jsx)(e,{})})]},F={args:{records:O},play:async({canvasElement:e})=>{let t=P(e);await M(t.getByRole(`button`,{name:`All · 13`})).toBeInTheDocument(),await M(t.getByRole(`button`,{name:`Rejected · 6`})).toBeInTheDocument(),await M(t.getByRole(`button`,{name:`Ghosted · 4`})).toBeInTheDocument(),await M(t.getByRole(`button`,{name:`Other · 3`})).toBeInTheDocument()}},I={args:{records:O,defaultFilter:`Rejected`}},L={args:{records:O,defaultFilter:`Ghosted`}},R={args:{records:O,defaultFilter:`Other`}},z={args:{records:O,defaultOpenId:T.id}},B={args:{records:O,defaultOpenId:E.id}},V={args:{records:[D,...O.slice(1,4)]}},H={args:{records:[]}},U={args:{records:O.filter(e=>e.termination?.reason===`Rejected`),defaultFilter:`Ghosted`}},W={args:{records:k}},G={args:{records:k,defaultOpenId:`brightloom`}},K={render:function(e){let[t,n]=(0,A.useState)(e.records),[r,i]=(0,A.useState)([]);return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(b,{...e,records:t,onRestore:e=>{i(t=>[...t,e]),n(t=>t.filter(t=>t.id!==e))}}),(0,j.jsx)(`output`,{"data-testid":`restore-calls`,hidden:!0,children:r.join(`,`)})]})},args:{records:O},play:async({canvasElement:e})=>{let t=P(e);await N.click(t.getByRole(`button`,{name:/Harbor & Pine/})),await M(t.getByRole(`button`,{name:`Restore to stack`})).toBeInTheDocument(),await N.click(t.getByRole(`button`,{name:/Marlowe Analytics/})),await M(t.getAllByRole(`button`,{name:`Restore to stack`})).toHaveLength(1),await M(t.getByRole(`button`,{name:/Harbor & Pine/})).toBeInTheDocument(),await N.click(t.getByRole(`button`,{name:`Restore to stack`})),await M(t.queryByText(`Marlowe Analytics`)).toBeNull(),await M(t.getByTestId(`restore-calls`).textContent).toBe(`marlowe`),await M(t.getByRole(`button`,{name:/Tessellate/})).toHaveFocus()}},q={render:function(e){let[t,n]=(0,A.useState)(e.records);return(0,j.jsx)(b,{...e,records:t,onRestore:e=>n(t=>t.filter(t=>t.id!==e))})},args:{records:k.slice(1)},play:async({canvasElement:e})=>{let t=P(e);await N.click(t.getByRole(`button`,{name:/Ivy/})),await N.click(t.getByRole(`button`,{name:`Restore to stack`})),await M(t.getByRole(`button`,{name:/Northgate Tooling/})).toHaveFocus(),await N.click(t.getByRole(`button`,{name:/Northgate Tooling/})),await N.click(t.getByRole(`button`,{name:`Restore to stack`})),await M(t.getByRole(`heading`,{name:`Archive`})).toHaveFocus()}},J={args:{records:Array.from({length:37},(e,t)=>({...D,id:`generated-${t}`,companyName:`Company ${t+1}`,termination:{reason:t<25?`Rejected`:t<33?`Ghosted`:`Withdrawn`}}))}},Y={args:{records:Array.from({length:137},(e,t)=>({...D,id:`generated-${t}`,companyName:`Company ${t+1}`,termination:{reason:t%3==0?`Rejected`:t%3==1?`Ghosted`:`Withdrawn`}}))}},X={args:{records:O.map(e=>e.id===T.id?{...e,restoreUnavailable:!0}:e),defaultOpenId:T.id,onRestore:()=>!0},play:async({canvasElement:e})=>{await M(P(e).getByRole(`button`,{name:`Restore to stack`})).toBeDisabled()}},Z={name:`Temporary: Backup link below the list`,args:{records:O,onOpenBackupTemp:je()},play:async({canvasElement:e,args:t})=>{let n=P(e).getByRole(`link`,{name:`Backup and restore`}),r=e.querySelectorAll(`[data-record-id]`),i=r[r.length-1];await M(n.getBoundingClientRect().top).toBeGreaterThanOrEqual(i.getBoundingClientRect().bottom),await M(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await N.click(n),await M(t.onOpenBackupTemp).toHaveBeenCalledTimes(1)}},Q={name:`Temporary: Backup link in the empty state`,args:{records:[],onOpenBackupTemp:je()},play:async({canvasElement:e,args:t})=>{let n=P(e);await M(n.getByText(`Nothing archived yet`)).toBeInTheDocument(),await N.click(n.getByRole(`link`,{name:`Backup and restore`})),await M(t.onOpenBackupTemp).toHaveBeenCalledTimes(1)}},$={name:`Temporary: Backup link switched off`,args:{records:O},play:async({canvasElement:e})=>{await M(P(e).queryByRole(`link`,{name:`Backup and restore`})).toBeNull()}},Ne=[`Filled`,`FilteredRejected`,`FilteredGhosted`,`FilteredOther`,`OneRowOpen`,`OpenRowSparse`,`RowWithNothingElse`,`Empty`,`NoMatch`,`LongContent`,`LongContentOpen`,`RestoreRemovesRow`,`RestoreLastRowsMoveFocus`,`BriefCounts`,`LargeCounts`,`OpenRowTwinRestoreDisabled`,`TemporaryBackupLinkBelowList`,`TemporaryBackupLinkEmpty`,`TemporaryBackupLinkOff`],F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'All · 13'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Rejected · 6'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Ghosted · 4'
    })).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Other · 3'
    })).toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source},description:{story:"All reasons, filter All, nothing open. Records are synthetic. The filter counts add up to the\ntotal, and `Other` takes Withdrawn, Position closed and any reason that isn't Rejected/Ghosted.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords,
    defaultFilter: 'Rejected'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords,
    defaultFilter: 'Ghosted'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords,
    defaultFilter: 'Other'
  }
}`,...R.parameters?.docs?.source},description:{story:`Withdrawn, Position closed, a custom reason ("Role put on hold") — every reason that is not
Rejected or Ghosted.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords,
    defaultOpenId: richRecord.id
  }
}`,...z.parameters?.docs?.source},description:{story:`One row open: the full Card in archived mode, in place of its row. Termination first, then the
pipeline with \`· ended here\` on the last reached step, then the rest, then Show less / Open
original link / Restore to stack.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords,
    defaultOpenId: sparseRecord.id
  }
}`,...B.parameters?.docs?.source},description:{story:'The open row with almost no data: no role, pipeline, contact, location or link. Sections with\nnothing in them are left out; "Open original link" stays, disabled, as `No link saved`.',...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    records: [bareRecord, ...archiveRecords.slice(1, 4)]
  }
}`,...V.parameters?.docs?.source},description:{story:`A record with no reason and no applied date still gets a row (a name, nothing else), counted
under Other.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    records: []
  }
}`,...H.parameters?.docs?.source},description:{story:`No archived positions: the headline and body, no button, no filter.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords.filter(r => r.termination?.reason === 'Rejected'),
    defaultFilter: 'Ghosted'
  }
}`,...U.parameters?.docs?.source},description:{story:"A filter that matches nothing (only Rejected records, Ghosted chosen): same block, `Nothing\nhere`; the filter stays so it can be changed.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    records: longContentRecords
  }
}`,...W.parameters?.docs?.source},description:{story:`Long company, role and reason: one line each in the row (the name truncates first, the
reason never wraps).`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    records: longContentRecords,
    defaultOpenId: 'brightloom'
  }
}`,...G.parameters?.docs?.source},description:{story:`The same long record opened: the company and role wrap in the card, nothing is clipped.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [records, setRecords] = useState(args.records);
    const [calls, setCalls] = useState<string[]>([]);
    return <>
        <ArchiveScreen {...args} records={records} onRestore={id => {
        setCalls(c => [...c, id]);
        setRecords(rs => rs.filter(r => r.id !== id));
      }} />
        <output data-testid="restore-calls" hidden>
          {calls.join(',')}
        </output>
      </>;
  },
  args: {
    records: archiveRecords
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Harbor & Pine/
    }));
    await expect(canvas.getByRole('button', {
      name: 'Restore to stack'
    })).toBeInTheDocument();
    // Opening another row closes this one: still exactly one Restore button.
    await userEvent.click(canvas.getByRole('button', {
      name: /Marlowe Analytics/
    }));
    await expect(canvas.getAllByRole('button', {
      name: 'Restore to stack'
    })).toHaveLength(1);
    await expect(canvas.getByRole('button', {
      name: /Harbor & Pine/
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Restore to stack'
    }));
    await expect(canvas.queryByText('Marlowe Analytics')).toBeNull();
    await expect(canvas.getByTestId('restore-calls').textContent).toBe('marlowe');
    // Focus is handed to the next row (Tessellate) rather than dropped to the page.
    await expect(canvas.getByRole('button', {
      name: /Tessellate/
    })).toHaveFocus();
  }
}`,...K.parameters?.docs?.source},description:{story:`The real interaction, with a parent that behaves like the app will: tapping a row opens it,
opening another closes the first, Restore calls \`onRestore(id)\` once and the parent removes the
row (no toast here; the app shell owns that). The play function walks it.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [records, setRecords] = useState(args.records);
    return <ArchiveScreen {...args} records={records} onRestore={id => setRecords(rs => rs.filter(r => r.id !== id))} />;
  },
  args: {
    records: longContentRecords.slice(1)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /Ivy/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Restore to stack'
    }));
    await expect(canvas.getByRole('button', {
      name: /Northgate Tooling/
    })).toHaveFocus();
    await userEvent.click(canvas.getByRole('button', {
      name: /Northgate Tooling/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Restore to stack'
    }));
    await expect(canvas.getByRole('heading', {
      name: 'Archive'
    })).toHaveFocus();
  }
}`,...q.parameters?.docs?.source},description:{story:`The last row restored: focus goes to the previous row; with nothing left, to the heading.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    records: Array.from({
      length: 37
    }, (_, i) => ({
      ...bareRecord,
      id: \`generated-\${i}\`,
      companyName: \`Company \${i + 1}\`,
      termination: {
        reason: i < 25 ? 'Rejected' : i < 33 ? 'Ghosted' : 'Withdrawn'
      }
    }))
  }
}`,...J.parameters?.docs?.source},description:{story:"The brief's own numbers: `All · 37`, `Rejected · 25`, `Ghosted · 8`, `Other · 4`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    records: Array.from({
      length: 137
    }, (_, i) => ({
      ...bareRecord,
      id: \`generated-\${i}\`,
      companyName: \`Company \${i + 1}\`,
      termination: {
        reason: i % 3 === 0 ? 'Rejected' : i % 3 === 1 ? 'Ghosted' : 'Withdrawn'
      }
    }))
  }
}`,...Y.parameters?.docs?.source},description:{story:`Three-digit counts (the filter has to fit its track at 320, 360 and 393 wide; the title gives
way with an ellipsis before the count does). 137 records, generated.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    records: archiveRecords.map(r => r.id === richRecord.id ? {
      ...r,
      restoreUnavailable: true
    } : r),
    defaultOpenId: richRecord.id,
    onRestore: () => true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole('button', {
      name: 'Restore to stack'
    })).toBeDisabled();
  }
}`,...X.parameters?.docs?.source},description:{story:`B2b: a duplicate-id twin (a record that repeats an earlier readable id) has its Restore button
disabled, because the data operation would act on the first record with that id.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Temporary: Backup link below the list',
  args: {
    records: archiveRecords,
    onOpenBackupTemp: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: 'Backup and restore'
    });
    const rows = canvasElement.querySelectorAll('[data-record-id]');
    const lastRow = rows[rows.length - 1] as HTMLElement;
    await expect(link.getBoundingClientRect().top).toBeGreaterThanOrEqual(lastRow.getBoundingClientRect().bottom);
    await expect(link.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await userEvent.click(link);
    await expect(args.onOpenBackupTemp).toHaveBeenCalledTimes(1);
  }
}`,...Z.parameters?.docs?.source},description:{story:'TEMPORARY: the "Backup and restore" link below the last row (`onOpenBackupTemp` passed, as the\napp does while `SHOW_TEMP_BACKUP_LINK` is on). Pressing it calls the handler once.',...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Temporary: Backup link in the empty state',
  args: {
    records: [],
    onOpenBackupTemp: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Nothing archived yet')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('link', {
      name: 'Backup and restore'
    }));
    await expect(args.onOpenBackupTemp).toHaveBeenCalledTimes(1);
  }
}`,...Q.parameters?.docs?.source},description:{story:`TEMPORARY: the same link in the empty Archive, under the body line.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Temporary: Backup link switched off',
  args: {
    records: archiveRecords
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole('link', {
      name: 'Backup and restore'
    })).toBeNull();
  }
}`,...$.parameters?.docs?.source},description:{story:`Without the prop (the switch off) there is no link.`,...$.parameters?.docs?.description}}}})))()}Pe();export{J as BriefCounts,H as Empty,F as Filled,L as FilteredGhosted,R as FilteredOther,I as FilteredRejected,Y as LargeCounts,W as LongContent,G as LongContentOpen,U as NoMatch,z as OneRowOpen,B as OpenRowSparse,X as OpenRowTwinRestoreDisabled,q as RestoreLastRowsMoveFocus,K as RestoreRemovesRow,V as RowWithNothingElse,Z as TemporaryBackupLinkBelowList,Q as TemporaryBackupLinkEmpty,$ as TemporaryBackupLinkOff,Ne as __namedExportsOrder,Me as default};