import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as ee}from"./check-jRkMlj5W.js";import{n as i,t as a}from"./StackScreen-BIsVc3WH.js";import{n as o,t as s}from"./info-Cx06VA8T.js";import{n as te,t as c}from"./NoteLine-DCMsQqWm.js";import{n as l,t as ne}from"./TextInputField-BktQP6Eo.js";import{n as u,t as re}from"./PrimaryButton-BS971O0a.js";import{n as d,t as f}from"./ConfirmationSheet-DdxaNsJg.js";import{n as p,t as m}from"./SecondaryButton-DyDrxp7l.js";import{T as ie,d as ae,n as oe,s as se,u as h,w as g}from"./stepSheet-MaAOKa5l.js";import{n as _,o as v,r as y}from"./stackFixtures-DLE0JGwT.js";var b,x,S,C,w,T,E;function D(){return(D=e((()=>{b=`_line_87j0a_3`,x=`_when_87j0a_12`,S=`_status_87j0a_16`,C=`_actions_87j0a_28`,w=`_actionsAfterNote_87j0a_35`,T=`_touch_87j0a_42`,E={line:b,when:x,status:S,actions:C,actionsAfterNote:w,touch:T}})))()}function ce({mode:e,dateText:t,today:n,appliedIso:r,onMarkDone:i,onRemove:a,onClose:o,defaultError:te,defaultSaving:l,onBusy:u}){let d=(0,k.useRef)(!1),f=(0,k.useId)(),[p,h]=(0,k.useState)(n),[g,_]=(0,k.useState)(l?`mark`:null),[v,y]=(0,k.useState)(te??null);async function b(e){if(d.current)return;d.current=!0,u(!0),_(e),y(null);let t;try{t=e===`mark`?await i(p):await a()}catch{t={ok:!1,error:`save`}}(!t||typeof t!=`object`||!(`ok`in t))&&(t={ok:!1,error:`save`}),t.ok||y(e===`remove`&&t.error===`save`?`remove`:t.error),d.current=!1,u(!1),_(null)}let x=ie(p),S=e===`mark`&&x?se(p,n,r):{future:!1,beforeApplied:!1},C=ae(v),w=C||v===`changed`||!x,T=C,D=(0,A.jsxs)(`div`,{className:E.status,id:f,role:`status`,children:[S.future&&(0,A.jsx)(c,{icon:(0,A.jsx)(s,{size:16,"aria-hidden":`true`}),children:`Ahead of today, so it will show as upcoming.`}),S.beforeApplied&&(0,A.jsx)(c,{icon:(0,A.jsx)(s,{size:16,"aria-hidden":`true`}),children:`That’s before the day you applied.`}),v&&(0,A.jsx)(c,{children:oe[v]})]});return e===`remove`?(0,A.jsxs)(A.Fragment,{children:[t&&(0,A.jsx)(`p`,{className:E.line,children:t}),D,(0,A.jsxs)(`div`,{className:[E.actions,v?E.actionsAfterNote:``].filter(Boolean).join(` `),children:[(0,A.jsx)(m,{className:E.touch,label:`Remove this step`,onClick:()=>void b(`remove`),disabled:T||g!==null}),(0,A.jsx)(m,{className:E.touch,label:`Not now`,onClick:o,disabled:g!==null})]})]}):(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)(ne,{className:E.when,label:`When`,type:`date`,value:p,onChange:h,invalid:!x,describedBy:f}),D,(0,A.jsxs)(`div`,{className:[E.actions,v?E.actionsAfterNote:``].filter(Boolean).join(` `),children:[(0,A.jsx)(re,{label:`Mark as done`,icon:(0,A.jsx)(ee,{size:16}),onClick:()=>void b(`mark`),disabled:w||g===`remove`,loading:g===`mark`}),(0,A.jsx)(m,{className:E.touch,label:`Not now`,onClick:o,disabled:g!==null}),(0,A.jsx)(m,{className:E.touch,label:`Remove this step`,onClick:()=>void b(`remove`),disabled:T||g!==null})]})]})}function O({open:e,mode:t,label:n,onClose:r,className:ee,...i}){let a=(0,k.useRef)(!1),o=()=>{a.current||r()};return(0,A.jsx)(f,{open:e,onClose:o,title:t===`mark`?`${n} happened?`:n,className:ee,children:(0,A.jsx)(ce,{mode:t,label:n,...i,onClose:o,onBusy:e=>{a.current=e}})})}var k,A;function j(){return(j=e((()=>{k=t(),r(),o(),d(),l(),u(),p(),te(),g(),h(),D(),A=n(),O.__docgenInfo={description:`Mark-done and remove sheet — Add a step, Part B (2026-11-04), from \`design-briefs/stage-advance.md\`
sections 2, 3, 5 and 8 and the copy file's section 5. On \`ConfirmationSheet\`. Code-only (no canvas
board or Linear ticket was opened).

Two modes. \`mark\` is what a planned row opens: title "<Label> happened?", When (today), "Mark as
done", "Not now", and "Remove this step" below the pair as a plain SecondaryButton (no red: the
system has no danger-link style). \`remove\` is what a done or upcoming row the app added opens:
title <Label>, the date as a line, only "Remove this step" and "Not now". A future date is allowed in
\`mark\` and says so (the step becomes upcoming). Failures keep the sheet open: save failed, changed
elsewhere, archived, gone, remove failed; archived and gone disable the actions ("Not now" is the
way out). A second press while one runs does nothing.

Calls I made (the briefs were silent): "Remove this step" is a SecondaryButton in both modes, with
no confirmation question (the design says Undo covers adding, and removing is reversible by adding
the step again); in \`remove\` mode "Not now" comes after it; no company line under the title (the
copy file lists none for these sheets).`,methods:[],displayName:`StepDoneSheet`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},mode:{required:!0,tsType:{name:`union`,raw:`'mark' | 'remove'`,elements:[{name:`literal`,value:`'mark'`},{name:`literal`,value:`'remove'`}]},description:`'mark': a planned step ("<Label> happened?"). 'remove': a done or upcoming step the app added,
which can only be removed (title <Label>, a line with its date).`},label:{required:!0,tsType:{name:`string`},description:`The row's label as the card shows it ("Interview 2").`},dateText:{required:!1,tsType:{name:`string`},description:`Remove-only: the row's date as the card shows it ("Sep 15").`},today:{required:!0,tsType:{name:`string`},description:``},appliedIso:{required:!1,tsType:{name:`string`},description:``},onMarkDone:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(date: string) => Promise<StepDoneOutcome> | StepDoneOutcome`,signature:{arguments:[{type:{name:`string`},name:`date`}],return:{name:`union`,raw:`Promise<StepDoneOutcome> | StepDoneOutcome`,elements:[{name:`Promise`,elements:[{name:`union`,raw:`{ ok: true } | { ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`error`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},{name:`union`,raw:`'remove' | 'dup'`,elements:[{name:`literal`,value:`'remove'`},{name:`literal`,value:`'dup'`}]}],raw:`Exclude<StepErrorKind, 'remove' | 'dup'>`,required:!0}}]}}]}],raw:`Promise<StepDoneOutcome>`},{name:`union`,raw:`{ ok: true } | { ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`error`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},{name:`union`,raw:`'remove' | 'dup'`,elements:[{name:`literal`,value:`'remove'`},{name:`literal`,value:`'dup'`}]}],raw:`Exclude<StepErrorKind, 'remove' | 'dup'>`,required:!0}}]}}]}]}}},description:`Mark as done, with the chosen day (today unless she changed it).`},onRemove:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => Promise<StepDoneOutcome> | StepDoneOutcome`,signature:{arguments:[],return:{name:`union`,raw:`Promise<StepDoneOutcome> | StepDoneOutcome`,elements:[{name:`Promise`,elements:[{name:`union`,raw:`{ ok: true } | { ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`error`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},{name:`union`,raw:`'remove' | 'dup'`,elements:[{name:`literal`,value:`'remove'`},{name:`literal`,value:`'dup'`}]}],raw:`Exclude<StepErrorKind, 'remove' | 'dup'>`,required:!0}}]}}]}],raw:`Promise<StepDoneOutcome>`},{name:`union`,raw:`{ ok: true } | { ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,elements:[{name:`signature`,type:`object`,raw:`{ ok: true }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`true`,required:!0}}]}},{name:`signature`,type:`object`,raw:`{ ok: false; error: Exclude<StepErrorKind, 'remove' | 'dup'> }`,signature:{properties:[{key:`ok`,value:{name:`literal`,value:`false`,required:!0}},{key:`error`,value:{name:`Exclude`,elements:[{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},{name:`union`,raw:`'remove' | 'dup'`,elements:[{name:`literal`,value:`'remove'`},{name:`literal`,value:`'dup'`}]}],raw:`Exclude<StepErrorKind, 'remove' | 'dup'>`,required:!0}}]}}]}]}}},description:`Remove this step.`},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`"Not now", Escape and the scrim (all ignored while a save or remove runs).`},defaultError:{required:!1,tsType:{name:`union`,raw:`'save' | 'archived' | 'gone' | 'dup' | 'changed' | 'remove'`,elements:[{name:`literal`,value:`'save'`},{name:`literal`,value:`'archived'`},{name:`literal`,value:`'gone'`},{name:`literal`,value:`'dup'`},{name:`literal`,value:`'changed'`},{name:`literal`,value:`'remove'`}]},description:`Story conveniences; in the app never pass them.`},defaultSaving:{required:!1,tsType:{name:`boolean`},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}var M,N,P,F,I,L,R,z,le,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,ue;function de(){return(de=e((()=>{j(),i(),_(),M=n(),{expect:N,fireEvent:P,fn:F,userEvent:I,waitFor:L,within:R}=__STORYBOOK_MODULE_TEST__,z=`2026-11-04`,le={title:`Molecules/Step Done Sheet`,component:O,parameters:{layout:`fullscreen`},args:{open:!0,mode:`mark`,label:`Home assignment`,today:z,appliedIso:`2026-10-01`,onMarkDone:F(async()=>({ok:!0})),onRemove:F(async()=>({ok:!0})),onClose:F()},render:e=>(0,M.jsxs)(`div`,{style:v,children:[(0,M.jsx)(a,{records:[{...y,defaultExpanded:!0}]}),(0,M.jsx)(O,{...e})]})},B=async()=>R(await R(document.body).findByRole(`dialog`)),V={play:async({args:e})=>{let t=await B();await N(R(document.body).getByRole(`dialog`,{name:`Home assignment happened?`})).toBeInTheDocument(),await N(t.getByLabelText(`When`)).toHaveValue(z),await N(t.getByRole(`button`,{name:`Remove this step`})).toBeEnabled(),await I.click(t.getByRole(`button`,{name:`Mark as done`})),await N(e.onMarkDone).toHaveBeenCalledWith(z)}},H={play:async({args:e})=>{let t=await B();await P.change(t.getByLabelText(`When`),{target:{value:`2026-11-10`}}),await N(t.getByText(`Ahead of today, so it will show as upcoming.`)).toBeInTheDocument(),await I.click(t.getByRole(`button`,{name:`Mark as done`})),await N(e.onMarkDone).toHaveBeenCalledWith(`2026-11-10`)}},U={play:async()=>{let e=await B();await P.change(e.getByLabelText(`When`),{target:{value:`2026-09-15`}}),await N(e.getByText(`That’s before the day you applied.`)).toBeInTheDocument(),await N(e.getByRole(`button`,{name:`Mark as done`})).toBeEnabled()}},W={play:async()=>{let e=await B();await P.change(e.getByLabelText(`When`),{target:{value:``}}),await N(e.getByRole(`button`,{name:`Mark as done`})).toBeDisabled()}},G={args:{defaultSaving:!0},play:async()=>{let e=await B();await N(e.getByRole(`button`,{name:`Mark as done`})).toHaveAttribute(`aria-busy`,`true`),await N(e.getByRole(`button`,{name:`Not now`})).toBeDisabled(),await N(e.getByRole(`button`,{name:`Remove this step`})).toBeDisabled()}},K={args:{defaultError:`save`},play:async()=>{let e=await B();await N(e.getByText(`Couldn’t save that. Nothing was changed, try again.`)).toBeInTheDocument(),await N(e.getByRole(`button`,{name:`Mark as done`})).toBeEnabled()}},q={args:{defaultError:`changed`},play:async()=>{let e=await B();await N(e.getByText(`That step has changed. Nothing was updated.`)).toBeInTheDocument(),await N(e.getByRole(`button`,{name:`Mark as done`})).toBeDisabled()}},J={args:{defaultError:`archived`},play:async()=>{let e=await B();await N(e.getByText(`This position is in the Archive now. Nothing was added.`)).toBeInTheDocument(),await N(e.getByRole(`button`,{name:`Mark as done`})).toBeDisabled(),await N(e.getByRole(`button`,{name:`Remove this step`})).toBeDisabled()}},Y={args:{defaultError:`gone`},play:async()=>{let e=await B();await N(e.getByText(`This position is no longer in your saved positions.`)).toBeInTheDocument(),await N(e.getByRole(`button`,{name:`Mark as done`})).toBeDisabled()}},X={args:{mode:`remove`,label:`Interview 2`,dateText:`Oct 28`},play:async({args:e})=>{let t=await B();await N(t.getByText(`Oct 28`)).toBeInTheDocument(),await N(t.queryByLabelText(`When`)).toBeNull(),await N(t.queryByRole(`button`,{name:`Mark as done`})).toBeNull(),await I.click(t.getByRole(`button`,{name:`Remove this step`})),await N(e.onRemove).toHaveBeenCalledTimes(1)}},Z={args:{mode:`remove`,label:`Interview 2`,dateText:`Oct 28`,onRemove:F(async()=>({ok:!1,error:`save`}))},play:async()=>{let e=await B();await I.click(e.getByRole(`button`,{name:`Remove this step`})),await L(()=>N(e.getByText(`Couldn’t remove that. Nothing was changed, try again.`)).toBeInTheDocument()),await N(e.getByRole(`button`,{name:`Remove this step`})).toBeEnabled()}},Q={args:{mode:`remove`,label:`Offer`,onRemove:F(()=>new Promise(e=>setTimeout(()=>e({ok:!0}),300)))},play:async({args:e})=>{let t=(await B()).getByRole(`button`,{name:`Remove this step`});await I.click(t),await I.click(t),await new Promise(e=>setTimeout(e,400)),await N(e.onRemove).toHaveBeenCalledTimes(1)}},$={args:{label:`A very long step name that someone typed to describe a quite complicated stage`}},ue=[`MarkDone`,`MarkDoneFutureDate`,`MarkDoneBeforeApplied`,`MarkDoneDateCleared`,`MarkDoneSaving`,`MarkDoneSaveFailed`,`StepChangedElsewhere`,`ArchivedElsewhere`,`PositionGone`,`RemoveOnly`,`RemoveFailed`,`DoubleTapRemovesOnce`,`LongLabel`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  play: async ({
    args
  }) => {
    const d = await dialog();
    await expect(within(document.body).getByRole('dialog', {
      name: 'Home assignment happened?'
    })).toBeInTheDocument();
    await expect(d.getByLabelText('When')).toHaveValue(TODAY);
    await expect(d.getByRole('button', {
      name: 'Remove this step'
    })).toBeEnabled();
    await userEvent.click(d.getByRole('button', {
      name: 'Mark as done'
    }));
    await expect(args.onMarkDone).toHaveBeenCalledWith(TODAY);
  }
}`,...V.parameters?.docs?.source},description:{story:`A planned row opens "<Label> happened?": When (today), "Mark as done", "Not now", and "Remove this
step" below the pair. Focus goes into the sheet.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  play: async ({
    args
  }) => {
    const d = await dialog();
    await fireEvent.change(d.getByLabelText('When'), {
      target: {
        value: '2026-11-10'
      }
    });
    await expect(d.getByText('Ahead of today, so it will show as upcoming.')).toBeInTheDocument();
    await userEvent.click(d.getByRole('button', {
      name: 'Mark as done'
    }));
    await expect(args.onMarkDone).toHaveBeenCalledWith('2026-11-10');
  }
}`,...H.parameters?.docs?.source},description:{story:`A future day is allowed and says the step will show as upcoming.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const d = await dialog();
    await fireEvent.change(d.getByLabelText('When'), {
      target: {
        value: '2026-09-15'
      }
    });
    await expect(d.getByText('That’s before the day you applied.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Mark as done'
    })).toBeEnabled();
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  play: async () => {
    const d = await dialog();
    await fireEvent.change(d.getByLabelText('When'), {
      target: {
        value: ''
      }
    });
    await expect(d.getByRole('button', {
      name: 'Mark as done'
    })).toBeDisabled();
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    defaultSaving: true
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByRole('button', {
      name: 'Mark as done'
    })).toHaveAttribute('aria-busy', 'true');
    await expect(d.getByRole('button', {
      name: 'Not now'
    })).toBeDisabled();
    await expect(d.getByRole('button', {
      name: 'Remove this step'
    })).toBeDisabled();
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    defaultError: 'save'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('Couldn’t save that. Nothing was changed, try again.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Mark as done'
    })).toBeEnabled();
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    defaultError: 'changed'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('That step has changed. Nothing was updated.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Mark as done'
    })).toBeDisabled();
  }
}`,...q.parameters?.docs?.source},description:{story:`The step was done or removed in another tab.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    defaultError: 'archived'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('This position is in the Archive now. Nothing was added.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Mark as done'
    })).toBeDisabled();
    await expect(d.getByRole('button', {
      name: 'Remove this step'
    })).toBeDisabled();
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    defaultError: 'gone'
  },
  play: async () => {
    const d = await dialog();
    await expect(d.getByText('This position is no longer in your saved positions.')).toBeInTheDocument();
    await expect(d.getByRole('button', {
      name: 'Mark as done'
    })).toBeDisabled();
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'remove',
    label: 'Interview 2',
    dateText: 'Oct 28'
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    await expect(d.getByText('Oct 28')).toBeInTheDocument();
    await expect(d.queryByLabelText('When')).toBeNull();
    await expect(d.queryByRole('button', {
      name: 'Mark as done'
    })).toBeNull();
    await userEvent.click(d.getByRole('button', {
      name: 'Remove this step'
    }));
    await expect(args.onRemove).toHaveBeenCalledTimes(1);
  }
}`,...X.parameters?.docs?.source},description:{story:`A done or upcoming row the app added: title is the label, the date is the line, only "Remove this
step" and "Not now".`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'remove',
    label: 'Interview 2',
    dateText: 'Oct 28',
    onRemove: fn(async (): Promise<StepDoneOutcome> => ({
      ok: false,
      error: 'save'
    }))
  },
  play: async () => {
    const d = await dialog();
    await userEvent.click(d.getByRole('button', {
      name: 'Remove this step'
    }));
    await waitFor(() => expect(d.getByText('Couldn’t remove that. Nothing was changed, try again.')).toBeInTheDocument());
    await expect(d.getByRole('button', {
      name: 'Remove this step'
    })).toBeEnabled();
  }
}`,...Z.parameters?.docs?.source},description:{story:`A failed remove says so (not the save line) and the sheet stays.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    mode: 'remove',
    label: 'Offer',
    onRemove: fn(() => new Promise<StepDoneOutcome>(resolve => setTimeout(() => resolve({
      ok: true
    }), 300)))
  },
  play: async ({
    args
  }) => {
    const d = await dialog();
    const remove = d.getByRole('button', {
      name: 'Remove this step'
    });
    await userEvent.click(remove);
    await userEvent.click(remove);
    await new Promise(r => setTimeout(r, 400));
    await expect(args.onRemove).toHaveBeenCalledTimes(1);
  }
}`,...Q.parameters?.docs?.source},description:{story:`Two quick taps remove once.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'A very long step name that someone typed to describe a quite complicated stage'
  }
}`,...$.parameters?.docs?.source}}}})))()}de();export{J as ArchivedElsewhere,Q as DoubleTapRemovesOnce,$ as LongLabel,V as MarkDone,U as MarkDoneBeforeApplied,W as MarkDoneDateCleared,H as MarkDoneFutureDate,K as MarkDoneSaveFailed,G as MarkDoneSaving,Y as PositionGone,Z as RemoveFailed,X as RemoveOnly,q as StepChangedElsewhere,ue as __namedExportsOrder,le as default};