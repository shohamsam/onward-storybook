import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./plus-DYr_X5sv.js";import{i as a,n as ee,r as te,t as ne}from"./StackScreen-BIsVc3WH.js";import{n as re,t as ie}from"./info-Cx06VA8T.js";import{n as ae,t as oe}from"./trash-DXS7JFmh.js";import{n as se,t as ce}from"./NoteLine-DCMsQqWm.js";import{n as le,t as ue}from"./x-DLqO42RV.js";import{n as de,t as fe}from"./TextInputField-BktQP6Eo.js";import{n as pe,t as me}from"./PrimaryButton-BS971O0a.js";import{n as he,t as ge}from"./ConfirmationSheet-DdxaNsJg.js";import{n as _e,t as ve}from"./StepChips-DADFMRsn.js";import{n as ye,t as be}from"./SecondaryButton-DyDrxp7l.js";import{C as xe,S as o,T as Se,_ as Ce,a as we,b as Te,c as Ee,d as De,f as Oe,g as ke,h as Ae,i as je,l as Me,m as Ne,n as Pe,o as Fe,p as Ie,s as Le,u as Re,v as ze,w as s,x as Be,y as Ve}from"./stepSheet-MaAOKa5l.js";import{n as He,o as c,r as Ue}from"./stackFixtures-DLE0JGwT.js";var l,u,d,We,f,Ge,p,m,Ke,qe,h,Je,Ye,Xe,Ze,Qe,g,_,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,v;function ut(){return(ut=e((()=>{l=`_stage_1id1s_3`,u=`_company_1id1s_17`,d=`_field_1id1s_30`,We=`_chips_1id1s_34`,f=`_status_1id1s_39`,Ge=`_found_1id1s_51`,p=`_reading_1id1s_52`,m=`_dots_1id1s_70`,Ke=`_pulse_1id1s_1`,qe=`_srOnly_1id1s_95`,h=`_preview_1id1s_107`,Je=`_previewItem_1id1s_116`,Ye=`_when_1id1s_145`,Xe=`_actions_1id1s_150`,Ze=`_actionsAfterNote_1id1s_157`,Qe=`_reviewTitle_1id1s_162`,g=`_hint_1id1s_173`,_=`_rows_1id1s_182`,$e=`_row_1id1s_182`,et=`_labelButton_1id1s_203`,tt=`_renameInput_1id1s_204`,nt=`_iconButton_1id1s_238`,rt=`_meta_1id1s_265`,it=`_words_1id1s_273`,at=`_typeWord_1id1s_280`,ot=`_dateSlot_1id1s_290`,st=`_addDate_1id1s_298`,ct=`_dateInput_1id1s_310`,lt=`_touch_1id1s_369`,v={stage:l,"fade-in":`_fade-in_1id1s_1`,company:u,field:d,chips:We,status:f,found:Ge,reading:p,dots:m,pulse:Ke,srOnly:qe,preview:h,previewItem:Je,"step-in":`_step-in_1id1s_1`,when:Ye,actions:Xe,actionsAfterNote:Ze,reviewTitle:Qe,hint:g,rows:_,row:$e,labelButton:et,renameInput:tt,iconButton:nt,meta:rt,words:it,typeWord:at,dateSlot:ot,addDate:st,dateInput:ct,touch:lt}})))()}function dt(){return(0,b.jsxs)(`p`,{className:v.reading,children:[(0,b.jsx)(`span`,{children:`Reading what you wrote`}),(0,b.jsxs)(`span`,{className:v.dots,"aria-hidden":`true`,children:[(0,b.jsx)(`i`,{style:{"--i":0}}),(0,b.jsx)(`i`,{style:{"--i":1}}),(0,b.jsx)(`i`,{style:{"--i":2}})]}),(0,b.jsx)(`span`,{className:v.srOnly,children:`…`})]})}function ft({companyName:e,today:t,appliedIso:n,remembered:r=[],initialText:a=``,onTextChange:ee,onSubmit:ne,onClose:re,readPauseMs:ae=400,defaultStage:se=`text`,defaultError:le,defaultSaving:de,holdThinking:pe,onBusy:he}){let ge=(0,y.useId)(),_e=`${ge}-field`,ye=`${ge}-status`,[o,Re]=(0,y.useState)(a),[s,He]=(0,y.useState)(a),[c,Ue]=(0,y.useState)(se),[l,u]=(0,y.useState)(()=>{if(se!==`review`)return[];let e=Ie(a);return e.kind===`many`?ze(e.steps):e.kind===`one`?ze([e.step]):[]}),[d,We]=(0,y.useState)(t),[f,Ge]=(0,y.useState)(!!de),[p,m]=(0,y.useState)(le??null),[Ke,qe]=(0,y.useState)(!1),[h,Je]=(0,y.useState)(null),Ye=(0,y.useRef)(null),Xe=(0,y.useRef)(!1),Ze=(0,y.useRef)(c);(0,y.useEffect)(()=>{if(o===s)return;let e=window.setTimeout(()=>He(o),ae);return()=>window.clearTimeout(e)},[o,s,ae]),(0,y.useEffect)(()=>{Ze.current!==c&&(Ze.current=c,c===`review`?Ye.current?.focus({preventScroll:!0}):document.getElementById(_e)?.focus({preventScroll:!0}))},[c,_e]);let Qe=o.trim()!==``&&o!==s,g=!!pe||Qe,_=(0,y.useMemo)(()=>o.trim()===``?Ie(``):Ie(s),[o,s]),$e=De(p);function et(e){Xe.current||(Re(e),qe(!1),De(p)||m(null),ee?.(e))}function tt(e){let t=Ee(o,e);Re(t),He(t),qe(!1),De(p)||m(null),ee?.(t)}async function nt(e){if(Xe.current)return;Xe.current=!0,he(!0),Ge(!0),m(null);let t;try{t=await ne(e)}catch{t={ok:!1,error:`save`}}(!t||typeof t!=`object`||!(`ok`in t))&&(t={ok:!1,error:`save`}),t.ok||m(t.error),Xe.current=!1,he(!1),Ge(!1)}function rt(e){u(ze(e)),qe(!1),m(null),Ue(`review`)}function it(e){let t=Ne(l,e);u(t),t.length===0?(qe(!0),Ue(`text`)):Ye.current?.focus({preventScroll:!0})}function at(e,t){if(!h)return;let{key:n,value:r}=h;e&&u(e=>Ae(e,n,r)),Je(null),t&&window.requestAnimationFrame(()=>document.getElementById(`${ge}-name-${n}`)?.focus())}let ot=!g&&!Ke&&_.kind===`one`,st=!g&&!Ke&&_.kind===`many`,ct=!g&&!Ke&&_.kind===`over`,lt=Se(d),ut=ot&&lt?Le(d,t,n):{future:!1,beforeApplied:!1},ft;ft=c===`review`?{label:je(l.length),icon:(0,b.jsx)(i,{size:16}),enabled:l.length>0&&l.every(Ce),onClick:()=>void nt(Ve(l))}:st&&_.kind===`many`?{label:ke(_.steps.length),icon:(0,b.jsx)(te,{size:16}),enabled:!0,onClick:()=>rt(_.steps)}:ct&&_.kind===`over`?{label:ke(_.total),icon:(0,b.jsx)(te,{size:16}),enabled:!1,onClick:()=>{}}:{label:`Add step`,icon:(0,b.jsx)(i,{size:16}),enabled:ot&&lt,onClick:()=>{_.kind===`one`&&nt(xe([_.step],d))}};let pt=!ft.enabled||$e,gt=(0,b.jsxs)(`div`,{className:v.status,id:ye,role:`status`,children:[c===`text`&&g&&(0,b.jsx)(dt,{}),c===`text`&&st&&_.kind===`many`&&(0,b.jsx)(`p`,{className:v.found,children:Me(_.steps.length)}),c===`text`&&ct&&(0,b.jsx)(`p`,{className:v.found,children:`That’s more than 20 steps. Add the rest after.`}),c===`text`&&Ke&&(0,b.jsx)(ce,{icon:(0,b.jsx)(ie,{size:16,"aria-hidden":`true`}),children:`Nothing left to add.`}),c===`text`&&ut.future&&(0,b.jsx)(ce,{icon:(0,b.jsx)(ie,{size:16,"aria-hidden":`true`}),children:`Ahead of today, so it will show as upcoming.`}),c===`text`&&ut.beforeApplied&&(0,b.jsx)(ce,{icon:(0,b.jsx)(ie,{size:16,"aria-hidden":`true`}),children:`That’s before the day you applied.`}),p&&(0,b.jsx)(ce,{children:Pe[p]})]});return(0,b.jsxs)(b.Fragment,{children:[c===`text`?(0,b.jsxs)(`div`,{className:v.stage,children:[(0,b.jsx)(`p`,{className:v.company,children:e}),(0,b.jsx)(fe,{className:v.field,inputId:_e,label:`What happened, or what’s next?`,placeholder:`Phone call, interview, then a home task`,value:o,onChange:et,multiline:!0,describedBy:ye}),(0,b.jsx)(ve,{className:v.chips,chips:Fe(r),isSelected:e=>we(o,e),onPick:tt,disabled:f}),st&&_.kind===`many`&&(0,b.jsx)(`ul`,{className:v.preview,children:_.steps.map((e,t)=>(0,b.jsx)(`li`,{className:v.previewItem,style:{"--i":t},children:Oe(e)},`${t}-${Oe(e)}`))}),gt,ot&&(0,b.jsx)(`div`,{className:v.when,children:(0,b.jsx)(fe,{label:`When`,type:`date`,value:d,onChange:We,invalid:!lt,describedBy:ye})})]},`text`):(0,b.jsxs)(`div`,{className:v.stage,children:[(0,b.jsx)(`h3`,{ref:Ye,tabIndex:-1,className:v.reviewTitle,children:`Check your steps`}),(0,b.jsx)(`p`,{className:v.hint,children:`Dates are optional. Add them now or when you know.`}),(0,b.jsx)(`ul`,{className:v.rows,children:l.map(e=>{let n=Oe(e),r=Be(e),i=Le(e.date,t).future,a=e.date!==``;return(0,b.jsxs)(`li`,{className:v.row,children:[h&&h.key===e.key?(0,b.jsx)(`input`,{className:v.renameInput,value:h.value,"aria-label":`Rename ${n}`,enterKeyHint:`done`,autoCapitalize:`none`,autoCorrect:`off`,ref:e=>e?.focus({preventScroll:!0}),onChange:t=>Je({key:e.key,value:t.target.value}),onBlur:()=>at(!0,!1),onKeyDown:e=>{e.key===`Enter`?(e.preventDefault(),at(!0,!0)):e.key===`Escape`&&(e.preventDefault(),e.stopPropagation(),at(!1,!0))}}):(0,b.jsx)(`button`,{type:`button`,id:`${ge}-name-${e.key}`,className:v.labelButton,"aria-label":`Rename ${n}`,disabled:f,onClick:()=>Je({key:e.key,value:n}),children:n}),(0,b.jsx)(`button`,{type:`button`,className:v.iconButton,"aria-label":`Remove ${n}`,disabled:f,onClick:()=>it(e.key),children:(0,b.jsx)(oe,{size:16,"aria-hidden":`true`})}),(0,b.jsxs)(`div`,{className:v.meta,children:[(0,b.jsxs)(`span`,{className:v.words,children:[r&&(0,b.jsx)(`span`,{className:v.typeWord,children:r}),i&&(0,b.jsx)(`span`,{className:v.typeWord,children:`Upcoming`})]}),(0,b.jsxs)(`span`,{className:v.dateSlot,"data-filled":a||void 0,children:[!a&&(0,b.jsx)(`span`,{className:v.addDate,"aria-hidden":`true`,children:`Add date`}),(0,b.jsx)(`input`,{type:`date`,className:v.dateInput,"aria-label":a?`Date for ${n}`:`Add date for ${n}`,"aria-invalid":!Ce(e)||void 0,min:mt,max:ht,value:e.date,disabled:f,onChange:t=>u(n=>Te(n,e.key,t.target.value)),onClick:e=>{try{e.currentTarget.showPicker?.()}catch{}}}),a&&(0,b.jsx)(`button`,{type:`button`,className:v.iconButton,"aria-label":`Clear date for ${n}`,disabled:f,onClick:()=>u(t=>Te(t,e.key,``)),children:(0,b.jsx)(ue,{size:16,"aria-hidden":`true`})})]})]})]},e.key)})}),gt]},`review`),(0,b.jsxs)(`div`,{className:[v.actions,p?v.actionsAfterNote:``].filter(Boolean).join(` `),children:[(0,b.jsx)(me,{label:ft.label,icon:ft.icon,onClick:ft.onClick,disabled:pt,loading:f}),c===`review`?(0,b.jsx)(be,{className:v.touch,label:`Back`,onClick:()=>{Ue(`text`),m(null)},disabled:f}):(0,b.jsx)(be,{className:v.touch,label:`Not now`,onClick:re,disabled:f})]})]})}function pt({open:e,onClose:t,className:n,...r}){let i=(0,y.useRef)(!1);return(0,b.jsx)(ge,{open:e,onClose:()=>{i.current||t()},title:`Add a step`,className:n,children:(0,b.jsx)(ft,{...r,onClose:()=>!i.current&&t(),onBusy:e=>{i.current=e}})})}var y,b,mt,ht;function gt(){return(gt=e((()=>{y=t(),a(),re(),r(),ae(),le(),he(),de(),_e(),pe(),ye(),se(),o(),s(),Re(),ut(),b=n(),mt=`2000-01-01`,ht=`2100-12-31`,pt.__docgenInfo={description:`Add a step sheet — Add a step, Part B (2026-11-04), built from \`design-briefs/stage-advance.md\`
(sections 2 to 5, 9, 10), \`design-briefs/copy-stage-advance.md\` (every string, curly apostrophes)
and \`briefs/stage-advance.md\` section 4 ("One field decides the path", "Thinking moment", "Typed
text is kept as a draft"). On \`ConfirmationSheet\`, the way \`ReasonSheet\` is. Code-only: the canvas
page "Add a step" was not opened here, and no Linear ticket was checked.

One field. Chips fill it (", " between). About 400 ms after she stops typing the text is read on the
phone (\`app/splitSteps.ts\`): ONE step shows a required "When" (today), TWO OR MORE show "N steps
found · dates can wait" and "Review N steps", then a review list in the same sheet. Over 20 says so
and the primary stays disabled. While the pause runs, "Reading what you wrote…" shows with three
pulsing dots (static under reduced motion), announced through the sheet's one \`role="status"\`
region, which also carries the found line, the notes and the failure line.

Failure: the sheet stays, everything typed stays, the line for the error shows. Archived and gone
disable the primary ("Not now" is the way out). A second press while saving does nothing (\`busy\`).
Like ReasonSheet, the form is a child of the sheet, so its state resets every time the sheet closes
and reopens; the caller hands the kept draft back as \`initialText\`.

Calls I made (judgment, easy to change; the briefs were silent): a row's type word is left out when it
would only repeat the row's own label ("Interview" beside "Interview"); the sheet's title stays "Add a
step" and the review list has its own "Check your steps" heading under it (focus lands there); in the
review list the secondary button reads "Back" instead of "Not now" (Escape and the scrim still
close, and the text is kept as a draft); "Add date" is the native date field itself, laid
transparently over the words "Add date" (a tap opens the phone's date picker at once; no extra
tap), and a dated row gets a "Clear date" button; the remove button is a trash icon, the date clear
an X; a chip tap reads at once (no pause); tapping a chip whose word is already in the field adds
it again ("interview, interview" is two rounds); the stage change cross-fades by fading the new
stage IN only (no fade out); the When field fades in and disappears instantly (opacity only, no
height animation, as asked); a row's date outside 2000 to 2100 disables "Add N steps" (the data
layer would refuse it) with no message; the multiline field keeps its 96px minimum (the design says
two lines; the component's token is three); the notes use an info icon, the failure line the
warning triangle. NOT verified on a phone: the keyboard over the sheet, the native date picker
opened from the overlay, Safari's form bar.`,methods:[],displayName:`AddStepSheet`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},companyName:{required:!0,tsType:{name:`string`},description:`Shown under the title, clamped to one line with an ellipsis.`},today:{required:!0,tsType:{name:`string`},description:`Today as 'YYYY-MM-DD' (the When field starts here, and "ahead of today" is judged against it).`},appliedIso:{required:!1,tsType:{name:`string`},description:`The day she applied, 'YYYY-MM-DD', for the "before the day you applied" note.`},remembered:{required:!1,tsType:{name:`unknown`},description:"Her remembered own-step names, newest first (`rememberedStepNames`); the chips show up to 5."},initialText:{required:!1,tsType:{name:`string`},description:`A kept draft for this position. Read once when the sheet opens; it is read at once, with no
pause.`},onTextChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(text: string) => void`,signature:{arguments:[{type:{name:`string`},name:`text`}],return:{name:`void`}}},description:`Called with the whole text on every change she makes (a typed letter, a chip). The caller keeps
it as the draft. Not called for the text the sheet opened with.`},onSubmit:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(steps: NewStep[]) => Promise<AddStepOutcome> | AddStepOutcome`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ type: StepType; label?: string; date?: string | null }`,signature:{properties:[{key:`type`,value:{name:`unknown[number]`,raw:`(typeof STEP_TYPES)[number]`,required:!0}},{key:`label`,value:{name:`string`,required:!1}},{key:`date`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!1}}]}}],raw:`NewStep[]`},name:`steps`}],return:{name:`union`,raw:`Promise<AddStepOutcome> | AddStepOutcome`,elements:[{name:`Promise`,elements:[{name:`union`,raw:`{ ok: true } | { ok: false; error: Exclude<StepErrorKind, 'remove' | 'changed'> }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; error: Exclude<StepErrorKind, 'remove' | 'changed'> }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`error`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},{name:`union`,raw:`'remove' | 'changed'`,elements:[{name:`literal`,value:`'remove'`},{name:`literal`,value:`'changed'`}]}],raw:`Exclude<StepErrorKind, 'remove' | 'changed'>`,required:!0}}]}}]}],raw:`Promise<AddStepOutcome>`},{name:`union`,raw:`{ ok: true } | { ok: false; error: Exclude<StepErrorKind, 'remove' | 'changed'> }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; error: Exclude<StepErrorKind, 'remove' | 'changed'> }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`error`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},{name:`union`,raw:`'remove' | 'changed'`,elements:[{name:`literal`,value:`'remove'`},{name:`literal`,value:`'changed'`}]}],raw:`Exclude<StepErrorKind, 'remove' | 'changed'>`,required:!0}}]}}]}]}}},description:`"Add step" / "Add N steps". Resolve with the outcome; the sheet ignores a second press while
one is running.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`"Not now", Escape and a tap on the scrim (all ignored while saving).`},readPauseMs:{required:!1,tsType:{name:`number`},description:`How long after the last key the text is read. Default 400 ms; a test can shorten it.`},defaultStage:{required:!1,tsType:{name:`union`,raw:`'text' | 'review'`,elements:[{name:`literal`,value:`'text'`},{name:`literal`,value:`'review'`}]},description:"Story/demo conveniences, like the other sheets' `default*` props. In the app, never pass them."},defaultError:{required:!1,tsType:{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},description:``},defaultSaving:{required:!1,tsType:{name:`boolean`},description:``},holdThinking:{required:!1,tsType:{name:`boolean`},description:`Hold the "Reading what you wrote…" state on screen.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var _t,x,S,C,w,T,vt,yt,bt,E,D,O,xt,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,St;function Ct(){return(Ct=e((()=>{gt(),ee(),He(),_t=n(),{expect:x,fireEvent:S,fn:C,userEvent:w,waitFor:T,within:vt}=__STORYBOOK_MODULE_TEST__,yt=`2026-11-04`,bt={title:`Molecules/Add Step Sheet`,component:pt,parameters:{layout:`fullscreen`},args:{open:!0,companyName:`Alder Works`,today:yt,appliedIso:`2026-10-01`,onSubmit:C(async()=>({ok:!0})),onClose:C(),onTextChange:C()},render:e=>(0,_t.jsxs)(`div`,{style:c,children:[(0,_t.jsx)(ne,{records:[{...Ue,defaultExpanded:!0,onAddStep:()=>{}}]}),(0,_t.jsx)(pt,{...e})]})},E=async()=>vt(await vt(document.body).findByRole(`dialog`)),D=e=>e.getByLabelText(`What happened, or what’s next?`),O=`Phone call, interview, then a home task`,xt=Array.from({length:21},(e,t)=>`Step number ${t+1}`).join(`, `),k={play:async()=>{let e=await E();await x(D(e)).toHaveFocus(),await x(D(e)).toHaveAttribute(`placeholder`,`Phone call, interview, then a home task`),await x(e.getByRole(`button`,{name:`Add step`})).toBeDisabled(),await x(e.queryByLabelText(`When`)).toBeNull();for(let t of[`Call`,`Interview`,`Assignment`,`Offer`]){let n=e.getByRole(`button`,{name:t});await x(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await x(n).toHaveAttribute(`aria-pressed`,`false`)}await x(e.getByRole(`button`,{name:`Not now`})).toBeEnabled();for(let t of[`Add step`,`Not now`])await x(e.getByRole(`button`,{name:t}).getBoundingClientRect().height).toBeGreaterThanOrEqual(44)}},A={args:{initialText:`Phone call, interview`,holdThinking:!0},play:async()=>{let e=await E();await x(e.getByRole(`status`)).toHaveTextContent(`Reading what you wrote…`),await x(e.getByRole(`button`,{name:`Add step`})).toBeDisabled(),await x(e.queryByLabelText(`When`)).toBeNull()}},j={play:async({args:e})=>{let t=await E();await w.type(D(t),`Interview`),await x(t.getByRole(`status`)).toHaveTextContent(`Reading what you wrote…`),await x(t.getByRole(`button`,{name:`Add step`})).toBeDisabled(),await T(()=>x(t.getByLabelText(`When`)).toBeInTheDocument(),{timeout:2e3}),await x(t.queryByText(`Reading what you wrote…`)).toBeNull(),await x(t.getByLabelText(`When`)).toHaveValue(yt),await x(e.onTextChange).toHaveBeenLastCalledWith(`Interview`),await w.click(t.getByRole(`button`,{name:`Add step`})),await x(e.onSubmit).toHaveBeenCalledTimes(1),await x(e.onSubmit).toHaveBeenCalledWith([{type:`interview`,date:yt}])}},M={args:{initialText:`Interview`},play:async({args:e})=>{let t=await E();await S.change(t.getByLabelText(`When`),{target:{value:`2026-11-12`}}),await x(t.getByText(`Ahead of today, so it will show as upcoming.`)).toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Add step`})),await x(e.onSubmit).toHaveBeenCalledWith([{type:`interview`,date:`2026-11-12`}])}},N={args:{initialText:`Recruiter call`},play:async({args:e})=>{let t=await E();await S.change(t.getByLabelText(`When`),{target:{value:`2026-09-20`}}),await x(t.getByText(`That’s before the day you applied.`)).toBeInTheDocument(),await x(t.getByRole(`button`,{name:`Add step`})).toBeEnabled(),await w.click(t.getByRole(`button`,{name:`Add step`})),await x(e.onSubmit).toHaveBeenCalledWith([{type:`recruiter-call`,date:`2026-09-20`}])}},P={args:{initialText:`Offer`},play:async()=>{let e=await E();await S.change(e.getByLabelText(`When`),{target:{value:``}}),await x(e.getByRole(`button`,{name:`Add step`})).toBeDisabled()}},F={args:{initialText:O},play:async()=>{let e=await E();await x(e.queryByText(`Reading what you wrote…`)).toBeNull(),await x(e.getByText(`3 steps found · dates can wait`)).toBeInTheDocument(),await x(e.queryByLabelText(`When`)).toBeNull(),await x(e.getByText(`Home assignment`)).toBeInTheDocument(),await x(e.getByRole(`button`,{name:`Review 3 steps`})).toBeEnabled()}},I={args:{initialText:xt},play:async()=>{let e=await E();await x(e.getByText(`That’s more than 20 steps. Add the rest after.`)).toBeInTheDocument(),await x(e.getByRole(`button`,{name:/^Review/})).toBeDisabled()}},L={play:async({args:e})=>{let t=await E();await w.click(t.getByRole(`button`,{name:`Call`})),await x(D(t)).toHaveValue(`Call`),await x(t.getByRole(`button`,{name:`Call`})).toHaveAttribute(`aria-pressed`,`true`),await x(t.getByLabelText(`When`)).toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Interview`})),await x(D(t)).toHaveValue(`Call, Interview`),await w.click(t.getByRole(`button`,{name:`Offer`})),await x(D(t)).toHaveValue(`Call, Interview, Offer`),await x(t.getByText(`3 steps found · dates can wait`)).toBeInTheDocument(),await x(e.onTextChange).toHaveBeenLastCalledWith(`Call, Interview, Offer`)}},R={args:{remembered:[`Portfolio review`,`Team lunch`,`Case study`,`Reference check`,`Coffee chat`,`Skills test`,`Old one`]},play:async()=>{let e=await E(),t=e.getAllByRole(`button`).filter(e=>e.hasAttribute(`aria-pressed`));await x(t.map(e=>e.textContent)).toEqual([`Call`,`Interview`,`Assignment`,`Offer`,`Portfolio review`,`Team lunch`,`Case study`,`Reference check`,`Coffee chat`]),await w.click(e.getByRole(`button`,{name:`Team lunch`})),await x(D(e)).toHaveValue(`Team lunch`)}},z={args:{initialText:`Phone call, second interview, Portfolio review, then a home task`,defaultStage:`review`},play:async()=>{let e=await E();await x(e.getByRole(`heading`,{name:`Check your steps`})).toBeInTheDocument(),await x(e.getByText(`Dates are optional. Add them now or when you know.`)).toBeInTheDocument(),await x(e.getByRole(`button`,{name:`Rename Portfolio review`})).toBeInTheDocument(),await x(e.getByText(`Interview`)).toBeInTheDocument(),await x(e.getByRole(`button`,{name:`Rename second interview`})).toBeInTheDocument(),await x(e.getByRole(`button`,{name:`Add 4 steps`})).toBeEnabled(),await x(e.getByRole(`button`,{name:`Back`})).toBeEnabled();for(let t of[`Remove Portfolio review`,`Rename Recruiter call`])await x(e.getByRole(`button`,{name:t}).getBoundingClientRect().height).toBeGreaterThanOrEqual(44);await x(e.getByLabelText(`Add date for Portfolio review`)).toBeInTheDocument()}},B={args:{initialText:O},play:async()=>{let e=await E();await w.click(e.getByRole(`button`,{name:`Review 3 steps`})),await T(()=>x(e.getByRole(`heading`,{name:`Check your steps`})).toHaveFocus()),await w.click(e.getByRole(`button`,{name:`Back`})),await T(()=>x(D(e)).toHaveValue(O)),await x(D(e)).toHaveFocus()}},V={args:{initialText:O,defaultStage:`review`},play:async({args:e})=>{let t=await E();await w.click(t.getByRole(`button`,{name:`Rename Interview`}));let n=t.getByRole(`textbox`,{name:`Rename Interview`});await w.clear(n),await w.type(n,`Final round{Enter}`),await x(t.getByRole(`button`,{name:`Rename Final round`})).toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Rename Recruiter call`})),await w.clear(t.getByRole(`textbox`,{name:`Rename Recruiter call`})),await w.keyboard(`{Enter}`),await x(t.getByRole(`button`,{name:`Rename Recruiter call`})).toBeInTheDocument(),await S.change(t.getByLabelText(`Add date for Home assignment`),{target:{value:`2026-11-20`}}),await x(t.getByText(`Upcoming`)).toBeInTheDocument(),await w.click(t.getByRole(`button`,{name:`Add 3 steps`})),await x(e.onSubmit).toHaveBeenCalledWith([{type:`recruiter-call`,date:null},{type:`interview`,label:`Final round`,date:null},{type:`home-assignment`,date:`2026-11-20`}])}},H={args:{initialText:O,defaultStage:`review`},play:async({args:e})=>{let t=await E();await w.click(t.getByRole(`button`,{name:`Rename Interview`})),await w.type(t.getByRole(`textbox`,{name:`Rename Interview`}),`xyz{Escape}`),await x(t.getByRole(`button`,{name:`Rename Interview`})).toBeInTheDocument(),await x(e.onClose).not.toHaveBeenCalled()}},U={args:{initialText:`Call, Offer`,defaultStage:`review`},play:async()=>{let e=await E();await w.click(e.getByRole(`button`,{name:`Remove Recruiter call`})),await w.click(e.getByRole(`button`,{name:`Remove Offer`})),await T(()=>x(e.getByText(`Nothing left to add.`)).toBeInTheDocument()),await x(D(e)).toHaveValue(`Call, Offer`),await x(D(e)).toHaveFocus(),await x(e.queryByText(/steps found/)).not.toBeInTheDocument(),await x(e.queryByRole(`button`,{name:/Review/})).not.toBeInTheDocument()}},W={args:{initialText:`Call, Offer`,defaultStage:`review`},play:async({args:e})=>{let t=await E();await S.change(t.getByLabelText(`Add date for Offer`),{target:{value:`2026-11-03`}}),await x(t.getByLabelText(`Date for Offer`)).toHaveValue(`2026-11-03`),await w.click(t.getByRole(`button`,{name:`Clear date for Offer`})),await x(t.getByLabelText(`Add date for Offer`)).toHaveValue(``),await w.click(t.getByRole(`button`,{name:`Add 2 steps`})),await x(e.onSubmit).toHaveBeenCalledWith([{type:`recruiter-call`,date:null},{type:`offer`,date:null}])}},G={args:{initialText:`Interview`,defaultSaving:!0},play:async()=>{let e=await E();await x(e.getByRole(`button`,{name:`Add step`})).toHaveAttribute(`aria-busy`,`true`),await x(e.getByRole(`button`,{name:`Not now`})).toBeDisabled()}},K={args:{initialText:`Interview`,defaultError:`save`},play:async()=>{let e=await E();await x(e.getByText(`Couldn’t save that. Nothing was changed, try again.`)).toBeInTheDocument(),await x(D(e)).toHaveValue(`Interview`),await x(e.getByRole(`button`,{name:`Add step`})).toBeEnabled()}},q={args:{initialText:`Interview`,defaultError:`archived`},play:async()=>{let e=await E();await x(e.getByText(`This position is in the Archive now. Nothing was added.`)).toBeInTheDocument(),await x(e.getByRole(`button`,{name:`Add step`})).toBeDisabled(),await x(e.getByRole(`button`,{name:`Not now`})).toBeEnabled()}},J={args:{initialText:O,defaultError:`gone`},play:async()=>{let e=await E();await x(e.getByText(`This position is no longer in your saved positions.`)).toBeInTheDocument(),await x(e.getByRole(`button`,{name:`Review 3 steps`})).toBeDisabled()}},Y={args:{initialText:`Interview`,defaultError:`dup`},play:async()=>{let e=await E();await x(e.getByText(`That step is already there.`)).toBeInTheDocument()}},X={args:{initialText:`Interview, Offer`,onSubmit:(()=>{let e=0;return C(async()=>(e+=1,e===1?{ok:!1,error:`save`}:{ok:!0}))})()},play:async({args:e})=>{let t=await E();await w.click(t.getByRole(`button`,{name:`Review 2 steps`})),await w.click(t.getByRole(`button`,{name:`Add 2 steps`})),await T(()=>x(t.getByText(`Couldn’t save that. Nothing was changed, try again.`)).toBeInTheDocument()),await w.click(t.getByRole(`button`,{name:`Back`})),await x(D(t)).toHaveValue(`Interview, Offer`),await w.click(t.getByRole(`button`,{name:`Review 2 steps`})),await w.click(t.getByRole(`button`,{name:`Add 2 steps`})),await T(()=>x(e.onSubmit).toHaveBeenCalledTimes(2))}},Z={args:{initialText:`Interview`,onSubmit:C(()=>new Promise(e=>setTimeout(()=>e({ok:!0}),300)))},play:async({args:e})=>{let t=(await E()).getByRole(`button`,{name:`Add step`});await w.click(t),await w.click(t),await w.dblClick(t),await T(()=>x(e.onSubmit).toHaveBeenCalledTimes(1)),await new Promise(e=>setTimeout(e,400)),await x(e.onSubmit).toHaveBeenCalledTimes(1)}},Q={args:{initialText:`Interview`},play:async({args:e})=>{let t=await E();await w.click(t.getByRole(`button`,{name:`Not now`})),await x(e.onClose).toHaveBeenCalledTimes(1),await w.keyboard(`{Escape}`),await x(e.onClose).toHaveBeenCalledTimes(2)}},$={args:{companyName:`Northwind Orchard Holdings International Group of Companies Limited`,remembered:[`A remembered step with a very long name that goes on and on and on past the edge of the sheet`],initialText:`Meet the whole extended product leadership team for an informal conversation about the role and the roadmap, Interview, Offer`},play:async()=>{let e=await E();await x(e.getByText(`3 steps found · dates can wait`)).toBeInTheDocument()}},St=[`Empty`,`Thinking`,`TypeOneStep`,`OneStepFutureDate`,`OneStepBeforeApplied`,`OneStepDateCleared`,`SeveralSteps`,`OverTwenty`,`ChipsFillAndAppend`,`RememberedChips`,`ReviewList`,`ReviewThenBack`,`ReviewEdits`,`EscapeCancelsRename`,`RemoveAllRows`,`ReviewDateAddedAndCleared`,`Saving`,`SaveFailed`,`ArchivedElsewhere`,`PositionGone`,`AlreadyThere`,`FailsThenWorks`,`DoubleTapDoesNothing`,`NotNowCloses`,`LongContent`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const d = await dialog();
    await expect(field(d)).toHaveFocus();
    await expect(field(d)).toHaveAttribute('placeholder', 'Phone call, interview, then a home task');
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toBeDisabled();
    await expect(d.queryByLabelText('When')).toBeNull();
    for (const chip of ['Call', 'Interview', 'Assignment', 'Offer']) {
      const button = d.getByRole('button', {
        name: chip
      });
      await expect(button.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
      await expect(button).toHaveAttribute('aria-pressed', 'false');
    }
    await expect(d.getByRole('button', {
      name: 'Not now'
    })).toBeEnabled();
    for (const name of ['Add step', 'Not now']) {
      await expect(d.getByRole('button', {
        name
      }).getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    }
  }
}`,...k.parameters?.docs?.source},description:{story:`Nothing typed: the field with its placeholder, the four chips, "Add step" disabled, no When.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Phone call, interview',
    holdThinking: true
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByRole('status')).toHaveTextContent('Reading what you wrote…');
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toBeDisabled();
    await expect(d.queryByLabelText('When')).toBeNull();
  }
}`,...A.parameters?.docs?.source},description:{story:`The ~400 ms pause: "Reading what you wrote…" with three dots; the primary stays disabled. (Held
on screen here; under reduced motion the dots stand still.)`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    args
  }) => {
    const d = await dialog();
    await userEvent.type(field(d), 'Interview');
    await expect(d.getByRole('status')).toHaveTextContent('Reading what you wrote…'); // inside the pause
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toBeDisabled();
    await waitFor(() => expect(d.getByLabelText('When')).toBeInTheDocument(), {
      timeout: 2000
    });
    await expect(d.queryByText('Reading what you wrote…')).toBeNull();
    await expect(d.getByLabelText('When')).toHaveValue(TODAY);
    await expect(args.onTextChange).toHaveBeenLastCalledWith('Interview');
    await userEvent.click(d.getByRole('button', {
      name: 'Add step'
    }));
    await expect(args.onSubmit).toHaveBeenCalledTimes(1);
    await expect(args.onSubmit).toHaveBeenCalledWith([{
      type: 'interview',
      date: TODAY
    }]);
  }
}`,...j.parameters?.docs?.source},description:{story:`Typing waits ~400 ms, then the one-step path: When appears (today), "Add step" enables and hands
over the step with today's date.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview'
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    await fireEvent.change(d.getByLabelText('When'), {
      target: {
        value: '2026-11-12'
      }
    });
    await expect(d.getByText('Ahead of today, so it will show as upcoming.')).toBeInTheDocument();
    await userEvent.click(d.getByRole('button', {
      name: 'Add step'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith([{
      type: 'interview',
      date: '2026-11-12'
    }]);
  }
}`,...M.parameters?.docs?.source},description:{story:`A future date: the note says it will show as upcoming. Still saves.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Recruiter call'
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    await fireEvent.change(d.getByLabelText('When'), {
      target: {
        value: '2026-09-20'
      }
    });
    await expect(d.getByText('That’s before the day you applied.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toBeEnabled();
    await userEvent.click(d.getByRole('button', {
      name: 'Add step'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith([{
      type: 'recruiter-call',
      date: '2026-09-20'
    }]);
  }
}`,...N.parameters?.docs?.source},description:{story:`A date before the applied day: a soft note, and it still saves.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Offer'
  },
  play: async () => {
    const d = await dialog();
    await fireEvent.change(d.getByLabelText('When'), {
      target: {
        value: ''
      }
    });
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toBeDisabled();
  }
}`,...P.parameters?.docs?.source},description:{story:`The date cleared: "Add step" is disabled.`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: MANY
  },
  play: async () => {
    const d = await dialog();
    await expect(d.queryByText('Reading what you wrote…')).toBeNull();
    await expect(d.getByText('3 steps found · dates can wait')).toBeInTheDocument();
    await expect(d.queryByLabelText('When')).toBeNull();
    await expect(d.getByText('Home assignment')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Review 3 steps'
    })).toBeEnabled();
  }
}`,...F.parameters?.docs?.source},description:{story:`A kept draft is read at once: no pause, no "Reading…". Several steps found: no date field, the
found steps listed (they appear one by one), "3 steps found · dates can wait" and "Review 3 steps".`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: TWENTY_ONE
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('That’s more than 20 steps. Add the rest after.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: /^Review/
    })).toBeDisabled();
  }
}`,...I.parameters?.docs?.source},description:{story:`Over 20 steps: said plainly, the primary stays disabled.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  play: async ({
    args
  }) => {
    const d = await dialog();
    await userEvent.click(d.getByRole('button', {
      name: 'Call'
    }));
    await expect(field(d)).toHaveValue('Call');
    await expect(d.getByRole('button', {
      name: 'Call'
    })).toHaveAttribute('aria-pressed', 'true');
    await expect(d.getByLabelText('When')).toBeInTheDocument();
    await userEvent.click(d.getByRole('button', {
      name: 'Interview'
    }));
    await expect(field(d)).toHaveValue('Call, Interview');
    await userEvent.click(d.getByRole('button', {
      name: 'Offer'
    }));
    await expect(field(d)).toHaveValue('Call, Interview, Offer');
    await expect(d.getByText('3 steps found · dates can wait')).toBeInTheDocument();
    await expect(args.onTextChange).toHaveBeenLastCalledWith('Call, Interview, Offer');
  }
}`,...L.parameters?.docs?.source},description:{story:`Chips fill the empty field, then add with ", ". The tapped words show as selected (check +
aria-pressed); the text is read at once (no pause), so the several-steps path shows straight away.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    remembered: ['Portfolio review', 'Team lunch', 'Case study', 'Reference check', 'Coffee chat', 'Skills test', 'Old one']
  },
  play: async () => {
    const d = await dialog();
    const chips = d.getAllByRole('button').filter(b => b.hasAttribute('aria-pressed'));
    await expect(chips.map(b => b.textContent)).toEqual(['Call', 'Interview', 'Assignment', 'Offer', 'Portfolio review', 'Team lunch', 'Case study', 'Reference check', 'Coffee chat']);
    await userEvent.click(d.getByRole('button', {
      name: 'Team lunch'
    }));
    await expect(field(d)).toHaveValue('Team lunch');
  }
}`,...R.parameters?.docs?.source},description:{story:`Her own remembered names after the four defaults, at most five, newest first (seven were given).`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Phone call, second interview, Portfolio review, then a home task',
    defaultStage: 'review'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByRole('heading', {
      name: 'Check your steps'
    })).toBeInTheDocument();
    await expect(d.getByText('Dates are optional. Add them now or when you know.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Rename Portfolio review'
    })).toBeInTheDocument();
    await expect(d.getByText('Interview')).toBeInTheDocument(); // the type word beside her own wording, "second interview"
    await expect(d.getByRole('button', {
      name: 'Rename second interview'
    })).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Add 4 steps'
    })).toBeEnabled();
    await expect(d.getByRole('button', {
      name: 'Back'
    })).toBeEnabled();
    for (const name of ['Remove Portfolio review', 'Rename Recruiter call']) {
      await expect(d.getByRole('button', {
        name
      }).getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    }
    await expect(d.getByLabelText('Add date for Portfolio review')).toBeInTheDocument();
  }
}`,...z.parameters?.docs?.source},description:{story:`The review list: heading (focus lands on it), hint, a row per step with its type word (none for her
own step), "Add date" and a remove button; "Add 4 steps" and Back.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: MANY
  },
  play: async () => {
    const d = await dialog();
    await userEvent.click(d.getByRole('button', {
      name: 'Review 3 steps'
    }));
    await waitFor(() => expect(d.getByRole('heading', {
      name: 'Check your steps'
    })).toHaveFocus());
    await userEvent.click(d.getByRole('button', {
      name: 'Back'
    }));
    await waitFor(() => expect(field(d)).toHaveValue(MANY));
    await expect(field(d)).toHaveFocus();
  }
}`,...B.parameters?.docs?.source},description:{story:`Reached from the text: "Review 3 steps" opens the list with focus on its heading; Back returns to the
text with what she typed.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: MANY,
    defaultStage: 'review'
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    // Rename the interview, then try to rename the call to nothing: it keeps its label.
    await userEvent.click(d.getByRole('button', {
      name: 'Rename Interview'
    }));
    const input = d.getByRole('textbox', {
      name: 'Rename Interview'
    });
    await userEvent.clear(input);
    await userEvent.type(input, 'Final round{Enter}');
    await expect(d.getByRole('button', {
      name: 'Rename Final round'
    })).toBeInTheDocument();
    await userEvent.click(d.getByRole('button', {
      name: 'Rename Recruiter call'
    }));
    await userEvent.clear(d.getByRole('textbox', {
      name: 'Rename Recruiter call'
    }));
    await userEvent.keyboard('{Enter}');
    await expect(d.getByRole('button', {
      name: 'Rename Recruiter call'
    })).toBeInTheDocument();
    // A future date: "Upcoming".
    await fireEvent.change(d.getByLabelText('Add date for Home assignment'), {
      target: {
        value: '2026-11-20'
      }
    });
    await expect(d.getByText('Upcoming')).toBeInTheDocument();
    await userEvent.click(d.getByRole('button', {
      name: 'Add 3 steps'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith([{
      type: 'recruiter-call',
      date: null
    }, {
      type: 'interview',
      label: 'Final round',
      date: null
    }, {
      type: 'home-assignment',
      date: '2026-11-20'
    }]);
  }
}`,...V.parameters?.docs?.source},description:{story:'Edits in the review list: rename in place (an empty rename reverts), a date in the future shows the\nword "Upcoming", and what is handed over is exactly the rows (undated ones as `date: null`).',...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: MANY,
    defaultStage: 'review'
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    await userEvent.click(d.getByRole('button', {
      name: 'Rename Interview'
    }));
    await userEvent.type(d.getByRole('textbox', {
      name: 'Rename Interview'
    }), 'xyz{Escape}');
    await expect(d.getByRole('button', {
      name: 'Rename Interview'
    })).toBeInTheDocument();
    await expect(args.onClose).not.toHaveBeenCalled();
  }
}`,...H.parameters?.docs?.source},description:{story:`Escape while renaming cancels the rename only; it does not close the sheet.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Call, Offer',
    defaultStage: 'review'
  },
  play: async () => {
    const d = await dialog();
    await userEvent.click(d.getByRole('button', {
      name: 'Remove Recruiter call'
    }));
    await userEvent.click(d.getByRole('button', {
      name: 'Remove Offer'
    }));
    await waitFor(() => expect(d.getByText('Nothing left to add.')).toBeInTheDocument());
    await expect(field(d)).toHaveValue('Call, Offer');
    await expect(field(d)).toHaveFocus();
    // No contradicting "2 steps found" / enabled "Review 2 steps" beside it (QA finding 3).
    await expect(d.queryByText(/steps found/)).not.toBeInTheDocument();
    await expect(d.queryByRole('button', {
      name: /Review/
    })).not.toBeInTheDocument();
  }
}`,...U.parameters?.docs?.source},description:{story:`Removing every row goes back to the text (kept) with "Nothing left to add."`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Call, Offer',
    defaultStage: 'review'
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    await fireEvent.change(d.getByLabelText('Add date for Offer'), {
      target: {
        value: '2026-11-03'
      }
    });
    await expect(d.getByLabelText('Date for Offer')).toHaveValue('2026-11-03');
    await userEvent.click(d.getByRole('button', {
      name: 'Clear date for Offer'
    }));
    await expect(d.getByLabelText('Add date for Offer')).toHaveValue('');
    await userEvent.click(d.getByRole('button', {
      name: 'Add 2 steps'
    }));
    await expect(args.onSubmit).toHaveBeenCalledWith([{
      type: 'recruiter-call',
      date: null
    }, {
      type: 'offer',
      date: null
    }]);
  }
}`,...W.parameters?.docs?.source},description:{story:`A date in the past or today, a date cleared again.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview',
    defaultSaving: true
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toHaveAttribute('aria-busy', 'true');
    await expect(d.getByRole('button', {
      name: 'Not now'
    })).toBeDisabled();
  }
}`,...G.parameters?.docs?.source},description:{story:`Saving: the primary shows its loading look and cannot be pressed again; "Not now" is off.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview',
    defaultError: 'save'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('Couldn’t save that. Nothing was changed, try again.')).toBeInTheDocument();
    await expect(field(d)).toHaveValue('Interview');
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toBeEnabled();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview',
    defaultError: 'archived'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('This position is in the Archive now. Nothing was added.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Add step'
    })).toBeDisabled();
    await expect(d.getByRole('button', {
      name: 'Not now'
    })).toBeEnabled();
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: MANY,
    defaultError: 'gone'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('This position is no longer in your saved positions.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Review 3 steps'
    })).toBeDisabled();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview',
    defaultError: 'dup'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('That step is already there.')).toBeInTheDocument();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview, Offer',
    onSubmit: (() => {
      let calls = 0;
      return fn(async (): Promise<AddStepOutcome> => {
        calls += 1;
        return calls === 1 ? {
          ok: false,
          error: 'save'
        } : {
          ok: true
        };
      });
    })()
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    await userEvent.click(d.getByRole('button', {
      name: 'Review 2 steps'
    }));
    await userEvent.click(d.getByRole('button', {
      name: 'Add 2 steps'
    }));
    await waitFor(() => expect(d.getByText('Couldn’t save that. Nothing was changed, try again.')).toBeInTheDocument());
    await userEvent.click(d.getByRole('button', {
      name: 'Back'
    }));
    await expect(field(d)).toHaveValue('Interview, Offer');
    await userEvent.click(d.getByRole('button', {
      name: 'Review 2 steps'
    }));
    await userEvent.click(d.getByRole('button', {
      name: 'Add 2 steps'
    }));
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalledTimes(2));
  }
}`,...X.parameters?.docs?.source},description:{story:`The first save fails: the line shows, the sheet stays, the text is exactly as it was; the second
attempt goes through.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview',
    onSubmit: fn(() => new Promise<AddStepOutcome>(resolve => setTimeout(() => resolve({
      ok: true
    }), 300)))
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    const primary = d.getByRole('button', {
      name: 'Add step'
    });
    await userEvent.click(primary);
    await userEvent.click(primary);
    await userEvent.dblClick(primary);
    await waitFor(() => expect(args.onSubmit).toHaveBeenCalledTimes(1));
    await new Promise(r => setTimeout(r, 400));
    await expect(args.onSubmit).toHaveBeenCalledTimes(1);
  }
}`,...Z.parameters?.docs?.source},description:{story:`A second tap while the save runs does nothing: one call.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    initialText: 'Interview'
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    await userEvent.click(d.getByRole('button', {
      name: 'Not now'
    }));
    await expect(args.onClose).toHaveBeenCalledTimes(1);
    await userEvent.keyboard('{Escape}');
    await expect(args.onClose).toHaveBeenCalledTimes(2);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Escape, the scrim and "Not now" all close (the caller keeps the text as a draft).`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Northwind Orchard Holdings International Group of Companies Limited',
    remembered: ['A remembered step with a very long name that goes on and on and on past the edge of the sheet'],
    initialText: 'Meet the whole extended product leadership team for an informal conversation about the role and the roadmap, Interview, Offer'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('3 steps found · dates can wait')).toBeInTheDocument();
  }
}`,...$.parameters?.docs?.source},description:{story:`A long company (one line, ellipsis), a long own step name and a long remembered chip. The chip row wraps
and every row clamps at two lines.`,...$.parameters?.docs?.description}}}})))()}Ct();export{Y as AlreadyThere,q as ArchivedElsewhere,L as ChipsFillAndAppend,Z as DoubleTapDoesNothing,k as Empty,H as EscapeCancelsRename,X as FailsThenWorks,$ as LongContent,Q as NotNowCloses,N as OneStepBeforeApplied,P as OneStepDateCleared,M as OneStepFutureDate,I as OverTwenty,J as PositionGone,R as RememberedChips,U as RemoveAllRows,W as ReviewDateAddedAndCleared,V as ReviewEdits,z as ReviewList,B as ReviewThenBack,K as SaveFailed,G as Saving,F as SeveralSteps,A as Thinking,j as TypeOneStep,St as __namedExportsOrder,bt as default};