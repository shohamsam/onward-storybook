import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./react-dom-D6mSsMrF.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./createLucideIcon-BIy-x5OT.js";import{n as o,t as s}from"./BottomNav-yNyHYz7t.js";import{i as c,n as ee,r as te,t as ne}from"./plus-DYr_X5sv.js";import{n as l,t as re}from"./chevron-left-CevI2vwH.js";import{n as u,t as ie}from"./Card-BHwN1aSu.js";import{n as d,t as ae}from"./PrimaryButton-BS971O0a.js";import{n as f,t as p}from"./SecondaryButton-DyDrxp7l.js";import{n as oe,t as se}from"./TempBackupLink-AHxhzBim.js";import{n as m,t as ce}from"./Toast-B6sCiTHK.js";var h,g;function _(){return(_=e((()=>{i(),h={name:`chevron-right`,size:24,node:[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]},h.node,g=a(h)})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;function z(){return(z=e((()=>{v=`_screen_137zc_10`,y=`_header_137zc_46`,b=`_deck_137zc_62`,x=`_track_137zc_76`,S=`_slotTop_137zc_83`,C=`_box_137zc_90`,w=`_measure_137zc_98`,T=`_slotUnder_137zc_114`,E=`_card_137zc_75`,D=`_empty_137zc_141`,O=`_emptyBlock_137zc_152`,k=`_emptyTitle_137zc_159`,A=`_emptyBody_137zc_172`,j=`_emptyActions_137zc_183`,M=`_tempBackupLink_137zc_193`,N=`_toastSlot_137zc_200`,P=`_toastPlace_137zc_209`,F=`_browseGroup_137zc_226`,I=`_browseButton_137zc_247`,L=`_srOnly_137zc_253`,R={screen:v,header:y,deck:b,track:x,slotTop:S,box:C,measure:w,slotUnder:T,card:E,empty:D,emptyBlock:O,emptyTitle:k,emptyBody:A,emptyActions:j,tempBackupLink:M,toastSlot:N,toastPlace:P,browseGroup:F,browseButton:I,srOnly:L,"settle-in":`_settle-in_137zc_1`}})))()}function B(e,t){let n=getComputedStyle(document.documentElement).getPropertyValue(e).trim(),r=parseFloat(n);return Number.isNaN(r)?t:n.endsWith(`ms`)?r:r*1e3}function V(){return typeof window<`u`&&window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function H({records:e,archivedCount:t=0,toast:n,onNavigate:r,onAdd:i,onOpenArchive:a,onOpenBackupTemp:o,archiveExit:c,deckInert:ee,settleToken:l,className:u}){let d=e.length,[f,oe]=(0,U.useState)(n??``);n&&n!==f&&oe(n);let[m,h]=(0,U.useState)(0),_=d>0?Math.min(m,d-1):0,v=e.map(e=>e.id).join(``),y=d>0?e[_].id:``,[b,x]=(0,U.useState)({order:v,top:y});if(v!==b.order){let t=b.top?e.findIndex(e=>e.id===b.top):-1;t>=0&&t!==_&&h(t),x({order:v,top:t>=0?b.top:y})}else b.top!==y&&x({order:v,top:y});let S=(0,U.useRef)(null),C=(0,U.useRef)(null),w=(0,U.useRef)(null),T=(0,U.useRef)(null),E=(0,U.useRef)(null),D=(0,U.useRef)(!1),O=(0,U.useRef)(!1),k=(0,U.useRef)(!0),A=(0,U.useRef)(null),[j,M]=(0,U.useState)(null),N=(0,U.useRef)(null),P=(0,U.useRef)(!!e[0]?.defaultExpanded),F=(0,U.useRef)([]);(0,U.useEffect)(()=>{let e=T.current,t=E.current;if(!e||!t||typeof ResizeObserver>`u`)return;let n=-1,r,i=!1,a=new ResizeObserver(()=>{let a=t.offsetHeight;if(a===0&&(n>0||e.getClientRects().length===0)){i=!0;return}if(a===n){i=!1;return}n<0||k.current||i||V()?(i=!1,e.style.transition=`none`,e.style.height=`${a}px`,e.offsetHeight,e.style.transition=``,k.current=!1):(e.setAttribute(`data-easing`,``),e.style.height=`${a}px`,window.clearTimeout(r),r=window.setTimeout(()=>e.removeAttribute(`data-easing`),B(`--duration-base`,220)+50)),n=a});return a.observe(t),()=>{a.disconnect(),window.clearTimeout(r)}},[d]);let I=(0,U.useCallback)(()=>{let e=S.current;e&&e.getBoundingClientRect().top<0&&e.scrollIntoView({block:`start`})},[]);(0,U.useEffect)(()=>{let e=F.current;return()=>e.forEach(e=>window.clearTimeout(e))},[]);let L=d>0?e[_].id:``,z=(0,U.useRef)(!0);(0,U.useEffect)(()=>{z.current?z.current=!1:P.current=!1},[L]);function H(e,t){let n=window.setTimeout(()=>{F.current=F.current.filter(e=>e!==n),e()},t);F.current.push(n)}function q(){return w.current?.querySelector(`[data-stack-top]`)??null}function J(e){N.current!==e&&(N.current=e,(0,W.flushSync)(()=>M({index:(_+e+d)%d,dir:e})))}function me(){N.current=null,M(null),C.current?.removeAttribute(`data-moving`)}function Y(e){k.current=!0,N.current=null,(0,W.flushSync)(()=>{h(t=>(Math.min(t,d-1)+e+d)%d),M(null)}),C.current?.removeAttribute(`data-moving`),I()}function he(e){let t=w.current;if(!t)return;D.current=!0,C.current?.setAttribute(`data-moving`,``);let n=()=>{t.style.transition=``,t.style.transform=``,C.current?.removeAttribute(`data-moving`),D.current=!1},r=()=>{k.current=!0,(0,W.flushSync)(()=>h(t=>(Math.min(t,d-1)+e+d)%d)),I()};if(V()){t.style.transition=`none`,t.style.transform=``,r(),n();return}let i=t.offsetWidth,a=B(`--duration-fast`,150),o=B(`--duration-base`,220);t.style.transition=`transform ${a}ms var(--ease-out)`,t.style.transform=`translateX(${-e*i}px)`,H(()=>{r(),t.style.transition=`none`,t.style.transform=`translateX(${e*i}px)`,t.offsetWidth,t.style.transition=`transform ${o}ms var(--ease-out)`,t.style.transform=`translateX(0)`,H(n,o)},a)}function ge(e){if(D.current=!0,V()){Y(e),D.current=!1;return}J(e),C.current?.setAttribute(`data-moving`,``);let t=q();if(!t){Y(e),D.current=!1;return}let n=S.current?.offsetWidth??window.innerWidth,r=B(`--duration-base`,220);t.offsetWidth,t.style.transition=`transform ${r}ms var(--ease-out)`,t.style.transform=`translateX(${-e*n}px)`,H(()=>{Y(e),D.current=!1},r)}let X=(0,U.useRef)(c);(0,U.useEffect)(()=>{X.current=c});let _e=c?.id;(0,U.useEffect)(()=>{if(!_e)return;D.current=!0;let e=C.current,t=V();window.scrollTo(0,0);let n=B(`--duration-fast`,150)+30,r=B(`--duration-pop`,280),i,a=window.setTimeout(()=>{let n=e?.querySelector(`[data-stack-top]`);if(n){if(n.setAttribute(`data-leaving`,``),t)n.style.visibility=`hidden`;else{let t=S.current?.offsetHeight??window.innerHeight;e?.setAttribute(`data-moving`,``),n.style.transition=`transform ${r}ms ease-in`,n.style.transform=`translateY(${t}px)`}}X.current?.onStart?.(),i=window.setTimeout(()=>{D.current=!1,e?.removeAttribute(`data-moving`),X.current?.onDone()},t?0:r)},n);return()=>{window.clearTimeout(a),window.clearTimeout(i)}},[_e]),(0,U.useEffect)(()=>{let e=C.current;if(!l||!e||V())return;e.setAttribute(`data-settle`,``);let t=window.setTimeout(()=>e.removeAttribute(`data-settle`),B(`--duration-base`,220)+50);return()=>window.clearTimeout(t)},[l]);function ve(e){D.current||d<2||!w.current||(P.current?he(e):ge(e))}function ye(e){let t=w.current;if(!t)return;let n=e.mode===`face`?q():t;if(!n)return;let r=()=>{A.current?.locked||(n.style.transition=``,e.mode===`face`?me():C.current?.removeAttribute(`data-moving`))};if(V()){n.style.transition=`none`,n.style.transform=``,r();return}let i=B(`--duration-base`,220);n.style.transition=`transform ${i}ms var(--ease-out)`,n.style.transform=``,H(r,i)}function Z(){C.current?.removeAttribute(`data-dragging`)}function be(e,t){let n=e.samples[e.samples.length-1];if(!n||t-n.t>pe)return 0;let r=e.samples.find(e=>n.t-e.t<=fe)??n,i=n.t-r.t;return i>0?(n.x-r.x)/i:0}function xe(e){D.current||d===0||(e.pointerType!==`mouse`||e.button===0)&&(A.current={id:e.pointerId,x0:e.clientX,y0:e.clientY,locked:null,dx:0,mode:`track`,samples:[{t:e.timeStamp,x:e.clientX}]})}function Se(e){let t=A.current,n=w.current;if(!t||t.id!==e.pointerId||!n)return;let r=e.clientX-t.x0,i=e.clientY-t.y0;if(t.locked===null){if(Math.max(Math.abs(r),Math.abs(i))<le)return;if(Math.abs(r)<=Math.abs(i)){A.current=null;return}t.locked=`h`;try{e.currentTarget.setPointerCapture(e.pointerId)}catch{}let a=e.currentTarget;if(a.setAttribute(`data-dragging`,``),a.setAttribute(`data-moving`,``),d>1&&!P.current){t.mode=`face`,J(r<0?1:-1);let e=q();e&&(e.style.transition=`none`)}else n.style.transition=`none`}if(t.dx=r,t.samples.push({t:e.timeStamp,x:e.clientX}),t.samples.length>8&&t.samples.shift(),t.mode===`face`){r!==0&&J(r<0?1:-1);let e=q();e&&(e.style.transform=`translateX(${r}px)`)}else if(d>1)n.style.transform=`translateX(${r}px)`;else if(!V()){let e=n.offsetWidth*.1;n.style.transform=`translateX(${Math.sign(r)*Math.min(Math.abs(r)*.3,e)}px)`}}function Ce(e){let t=A.current;if(!t||t.id!==e.pointerId||(A.current=null,Z(),t.locked!==`h`))return;O.current=!0,window.setTimeout(()=>{O.current=!1},0);let n=e.clientY-t.y0,r=Math.abs(t.dx)>Math.abs(n),i=Math.abs(t.dx)>=K,a=be(t,e.timeStamp),o=Math.abs(t.dx)>=de&&Math.abs(a)>=ue&&Math.sign(a)===Math.sign(t.dx);if(d>1&&r&&(i||o)){let e=t.dx<0?1:-1;t.mode===`face`?ge(e):he(e)}else ye(t)}function we(e){let t=A.current;t&&t.id===e.pointerId&&(A.current=null,Z(),t.locked===`h`&&ye(t))}let Q=!!(c||ee),Te=[R.screen,u].filter(Boolean).join(` `),Ee=f?(0,G.jsx)(`div`,{className:R.toastSlot,children:(0,G.jsx)(`div`,{className:R.toastPlace,children:(0,G.jsx)(ce,{message:f,visible:!!n})})}):null;if(d===0){let e=t>0;return(0,G.jsxs)(`div`,{ref:S,className:Te,children:[(0,G.jsx)(`h1`,{className:R.header,children:`Your stack`}),(0,G.jsx)(`main`,{className:R.empty,children:(0,G.jsxs)(`div`,{className:R.emptyBlock,children:[(0,G.jsx)(`h2`,{className:R.emptyTitle,children:e?`All wrapped up`:`A clean slate`}),(0,G.jsx)(`p`,{className:R.emptyBody,children:e?`Everything you tracked is in the Archive. Ready for the next one?`:`Add your first position and it’ll wait for you right here.`}),(0,G.jsxs)(`div`,{className:R.emptyActions,children:[(0,G.jsx)(ae,{label:`Add a position`,icon:(0,G.jsx)(ne,{size:16}),onClick:i}),e&&(0,G.jsx)(p,{label:`Open Archive`,icon:(0,G.jsx)(te,{size:16}),onClick:a})]}),o&&(0,G.jsx)(se,{className:R.tempBackupLink,onOpen:o})]})}),Ee,(0,G.jsx)(s,{active:`stack`,onNavigate:r})]})}let De=j&&j.index!==_?e[j.index]:void 0,$=[{index:_,top:!0}];return De&&j&&$.push({index:j.index,top:!1}),$.sort((e,t)=>e.index-t.index),(0,G.jsxs)(`div`,{ref:S,className:Te,children:[(0,G.jsx)(`h1`,{className:R.header,children:`Your stack`}),(0,G.jsx)(`main`,{ref:C,className:R.deck,inert:Q?!0:void 0,onPointerDown:xe,onPointerMove:Se,onPointerUp:Ce,onPointerCancel:we,onClickCapture:e=>{O.current&&(e.stopPropagation(),e.preventDefault())},children:(0,G.jsx)(`div`,{ref:w,className:R.track,children:(0,G.jsx)(`div`,{ref:T,className:R.box,children:(0,G.jsx)(`div`,{ref:E,className:R.measure,children:$.map(({index:t,top:n})=>{let{id:r,sample:i,...a}=e[t];return n?(0,G.jsx)(`div`,{className:R.slotTop,"data-stack-top":``,children:(0,G.jsx)(ie,{...a,showDepthEffect:j===null&&a.showDepthEffect,onExpandedChange:e=>{P.current=e,a.onExpandedChange?.(e)},className:R.card})},r):(0,G.jsx)(`div`,{className:R.slotUnder,"data-stack-under":``,"aria-hidden":`true`,inert:!0,children:(0,G.jsx)(ie,{...a,defaultExpanded:!1,onExpandedChange:void 0,className:R.card})},r)})})})})}),(0,G.jsx)(`div`,{className:R.srOnly,inert:Q?!0:void 0,children:(0,G.jsxs)(`p`,{role:`status`,children:[`Card `,_+1,` of `,d]})}),d>1&&(0,G.jsxs)(`div`,{className:R.browseGroup,inert:Q?!0:void 0,children:[(0,G.jsx)(p,{className:R.browseButton,label:`Previous card`,icon:(0,G.jsx)(re,{size:16}),iconPosition:`leading`,onClick:()=>ve(-1)}),(0,G.jsx)(p,{className:R.browseButton,label:`Next card`,icon:(0,G.jsx)(g,{size:16}),iconPosition:`trailing`,onClick:()=>ve(1)})]}),Ee,(0,G.jsx)(s,{active:`stack`,onNavigate:r})]})}var U,W,G,K,le,ue,de,fe,pe;function q(){return(q=e((()=>{U=t(),W=n(),c(),l(),_(),ee(),u(),o(),d(),f(),oe(),m(),z(),G=r(),K=70,le=8,ue=.5,de=24,fe=100,pe=80,H.__docgenInfo={description:`Stack screen — built 2026-10-15 (app shell, phase A). Code-only: no Figma node; the design is
\`design-briefs/app-shell-states.md\` §3.1–3.3 and canvas artboards 01–03, with the layout rules
Shoham gave in comments on artboard 03 (briefs/app-shell.md §4).

It receives \`records\` as props and stores nothing. Header "Your stack" only (no count, no
"Steady week."), then the card deck, then the Bottom Nav with Stack current.

**Resting position.** The collapsed card rests centered between the header and the nav,
measured against a FIXED reference height (\`--size-stack-card-reference\`, 320px — was 280px until 2026-10-16) rather than
the card's own height, so every card's top edge is in the same place. In CSS, no JS: the
deck's top padding is \`max(24px, (screen − header − nav − 320px) / 2)\` to the card's top
edge (the Card's depth layers peek 16px above that). The screen's height is \`100dvh\`;
a parent can set \`--stack-screen-height\` to size it instead (the stories do).

**Expanding** grows the card downward only, its top edge fixed, with a height ease
(\`--duration-base\`, 220ms — the brief said "about 200ms"). There is no internal scroll box:
the page scrolls and the card moves up with it. The Bottom Nav is \`sticky\` at the bottom of
the screen, so it stays pinned while the page scrolls. While the height is easing the box
clips its bottom edge, so the card's shadow is cut off for those ~220ms. The ease runs on
expand AND collapse, but only the expand reads as an ease: the Card swaps its content
instantly, so on collapse the card is small at once and the space under it eases away.

**Browsing** is a horizontal swipe only; a tap on the card does nothing. It wraps last to
first; with one card it rubber-bands and returns. A swipe needs about 70px and to be mostly
horizontal. \`touch-action: pan-y\` leaves vertical scrolling native. Swiping to another card
remounts the Card (\`key\`), which collapses an expanded one, and scrolls the page back to the
top. Previous/Next buttons and a "Card n of m" status are the non-gesture path (design doc
§6); the buttons are visually hidden until one of them has keyboard focus (below). Reduced
motion: no slide, no rubber-band travel; the card just changes.

**Previous/Next revealed on keyboard focus (2026-10-16, Shoham approved after QA).** They used
to be a 1x1 clipped wrapper, so a sighted keyboard user tabbing onto one saw nothing. Now,
while either has focus (\`:focus-within\` on their group), both show as one row directly under
the "Your stack" header, absolutely positioned over the screen so nothing else shifts and the
card does not move. Each is the existing Secondary Button (reused, sized through \`className\`)
with a 16px Lucide ChevronLeft (leading) / ChevronRight (trailing), at least 44px tall
(\`--size-touch-target\`, new token). Unfocused, the group is clipped to nothing and has
\`pointer-events: none\`, so it can't swallow a tap meant for the card. They stay in the tab
order, Enter and Space still work (they are real buttons), and the reveal has no transition,
so reduced motion needs nothing special. Focusing one while the page is scrolled scrolls the
page to the top, because the row lives at the top — accepted by Shoham. Guessed: the row has a
\`--color-bg-app\` backing (the Secondary Button is transparent, so over the card it would be
unreadable) and an 8px gap to the header; neither was specified. \`:focus-within\` rather than
\`:focus-visible\` on the group, because the hidden buttons can't be reached by pointer anyway.

**Swipe reveals the card underneath (2026-10-16, Shoham's phone test: "it feels like you're
swiping the whole deck").** Before, the Card and its two depth layers moved as one block. Now,
for a COLLAPSED top card with 2+ records: past an 8px slop and mostly horizontal, only the top
card's wrapper (\`data-stack-top\`) follows the finger, 1:1, transform only. At that moment the
record that will become the top one (next for a left drag, previous for a right drag, wrapping;
it switches if the finger crosses back over the start point) is rendered in \`data-stack-under\`:
the true Card at the resting position (same box, so same top edge and width), below the face,
\`aria-hidden\`, \`inert\`, \`pointer-events: none\`, no scale or fade. The depth layers are the
underneath card's own, so they stay put; the moving face is rendered with \`showDepthEffect\`
off for the duration (the same layers, same pixels, so nothing jumps at drag start or end).
The Card component was not touched. Release: past 70px (unchanged), or a flick (at least 24px
and at least 0.5px/ms over the last 100ms, same direction), and mostly horizontal -> the face
flies the rest of the way off screen from where it is (\`--duration-base\`, \`--ease-out\`, at
least the screen width), then \`commit()\` changes the index. Both cards are keyed by record id
inside one parent, in a fixed order, so the underneath card's DOM node is kept and only moves
from the absolute slot into the flow: same pixels, no remount, no flicker. Otherwise the face
springs back. Input is ignored from release until the swap (\`busy\`), at most 220ms. The hidden
Previous/Next buttons use the same fly-out (Next = left). Under reduced motion the drag still
follows the finger (and the card underneath shows) but release, and the buttons, change the
card instantly. Unchanged on purpose: a single record rubber-bands the whole deck as before; an
EXPANDED card does not reveal anything (it has no depth layers and a different height) and keeps
the old behavior exactly, the whole deck sliding out and the next card sliding in, collapsing
as the Card remounts. \`.screen\` got \`overflow-x: clip\` so a flying card can't widen the page.
\`will-change: transform\` is set only while something moves. Known and left alone: the
underneath card is a true card, so one TALLER than the top card shows its extra height below
the top card from the first pixel of the drag (collapsed cards run 318-395px). Not yet seen on
a phone; the numbers (8px, 24px, 0.5px/ms) are guesses.

Not built here: persistence, the Archive action's sheet wiring, pull-down terminate, and
routing — \`onNavigate\`/\`onAdd\`/\`onOpenArchive\` are callbacks and nothing more.

Guesses, for review: the two empty states' layout follows the artboards' numbers
(block centered in the free area between the header's bottom edge and the nav's top edge —
the 24px top padding they were first built with was removed 2026-10-16, it put the block
12.5px low); the Toast's 16px-above-the-nav position is the brief's own proposal.

**2026-10-22, TEMPORARY: \`onOpenBackupTemp\`.** A mockup aid (Shoham: "we will not keep" it): the
home-screen app has no address bar, so the Backup page could not be reached. When passed,
\`TempBackupLink\` is drawn centred 16px below the empty state's buttons, in both empty states
only (as the brief says; never over the deck). It is part of the centred block, so the block's
centre moves up by half the link's height (about 30px), my call. Remove with the prop.

**2026-11-04, Add a step (Part B): follows the top card by id.** When the order of \`records\`
changes (adding a dated step moves its position to the front of the Stack), the deck keeps showing
the same card, at its new index, instead of keeping the old index and showing whichever card slid
into it. The Card is keyed by id, so it stays mounted and stays expanded: nothing jumps under her
thumb and no reorder animation plays. If the top card left the list (archived), the index behaves as
before.`,methods:[],displayName:`StackScreen`,props:{records:{required:!0,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`CardProps & {
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
no per-card mark (the Card has no slot for one); the first-run Toast is how it's said.`}]}}]}],raw:`StackRecord[]`},description:`The active positions, in deck order (newest first). No storage here — the caller owns it.`},archivedCount:{required:!1,tsType:{name:`number`},description:'How many archived positions exist. Only read when `records` is empty: more than 0 picks\nthe "All wrapped up" wording, 0 picks "A clean slate".',defaultValue:{value:`0`,computed:!1}},toast:{required:!1,tsType:{name:`string`},description:"A one-line toast, shown 16px above the Bottom Nav, centered. Pass `undefined` to hide it;\nthe caller decides how long it stays."},onNavigate:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(item: BottomNavItemId) => void`,signature:{arguments:[{type:{name:`union`,raw:`'stack' | 'archive' | 'add' | 'dashboard' | 'search'`,elements:[{name:`literal`,value:`'stack'`},{name:`literal`,value:`'archive'`},{name:`literal`,value:`'add'`},{name:`literal`,value:`'dashboard'`},{name:`literal`,value:`'search'`}]},name:`item`}],return:{name:`void`}}},description:``},onAdd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`The empty state's "Add a position".`},onOpenArchive:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`The "all wrapped up" state's "Open Archive".`},onOpenBackupTemp:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`TEMPORARY (2026-10-22, mockup aid; switched in \`app/tempBackupLink.ts\`): when passed, both
empty states ("A clean slate", "All wrapped up") draw a quiet "Backup and restore" link below
their buttons, and pressing it calls this. Omitted, nothing is drawn. Not shown with cards.`},archiveExit:{required:!1,tsType:{name:`union`,raw:`{ id: string; onStart?: () => void; onDone: () => void } | null`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; onStart?: () => void; onDone: () => void }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`onStart`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!1}},{key:`onDone`,value:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}},required:!0}}]}},{name:`null`}]},description:"Phase B step 2b, reshaped 2026-10-20: a position was just archived. While this is set the card\nwith this `id` (it must still be in `records`) leaves the screen (after the reason sheet has had\ntime to leave): `onStart` is called as the card starts to leave (the caller starts fading the\npost-archive screen in over it), then `onDone` when it is gone (the caller drops the record).\nThe phrase and snackbar are not this component's. Reduced motion: the card is\nhidden at once instead of flying. Input on the deck is off meanwhile."},deckInert:{required:!1,tsType:{name:`boolean`},description:`Keeps the deck inert (no taps, no focus) while the caller shows something over it, i.e. the
post-archive screen. The Bottom Nav is not affected.`},settleToken:{required:!1,tsType:{name:`number`},description:`Changing this value plays the next card's settle-in (a fade and rise; none under reduced
motion). The caller bumps it when the post-archive screen starts to leave.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{_ as i,q as n,g as r,H as t};