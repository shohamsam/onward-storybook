import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./StackScreen-BIsVc3WH.js";import{i as a,n as o,o as s,r as c,t as l}from"./stackFixtures-DLE0JGwT.js";import{n as u,t as d}from"./ReasonSheet-DA6cZRSQ.js";function f({failFirst:e}){let[t,n]=(0,m.useState)(!1),[r,a]=(0,m.useState)(!1),[o,c]=(0,m.useState)(0),[u,f]=(0,m.useState)(null),p={...l,defaultExpanded:!0,onArchive:()=>{a(!1),n(!0)}};return(0,h.jsxs)(`div`,{style:s,children:[(0,h.jsx)(i,{records:[p]}),(0,h.jsx)(d,{open:t,companyName:p.companyName,error:r,onClose:()=>n(!1),onMove:({reason:t,note:r})=>{if(e&&o===0){c(1),a(!0);return}f(`${t}${r?` — "${r}"`:``}`),n(!1)}}),u&&(0,h.jsxs)(`p`,{role:`status`,style:{position:`absolute`,top:8,left:20,margin:0},children:[`Would move to Archive: `,u]})]})}function p(e){return{...s,width:e}}var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{m=t(),u(),r(),o(),h=n(),{expect:g,fn:_,userEvent:v,within:y}=__STORYBOOK_MODULE_TEST__,b={title:`Molecules/Reason Sheet`,component:d,parameters:{layout:`fullscreen`},args:{open:!0,companyName:`Acme Corp`,onMove:()=>{},onClose:()=>{}}},x={render:e=>(0,h.jsxs)(`div`,{style:s,children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]})},S={args:{defaultReason:`Withdrawn`,defaultNote:`Accepted another offer, told them I would stay in touch.`},render:e=>(0,h.jsxs)(`div`,{style:s,children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]})},C={args:{companyName:a.companyName,defaultReason:`Ghosted`,defaultNote:`Their recruiter said the team was restructuring and that they would get back to me in a few weeks but never did.`,error:!0},render:e=>(0,h.jsxs)(`div`,{style:s,children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]})},w={render:()=>(0,h.jsx)(f,{})},T={render:()=>(0,h.jsx)(f,{failFirst:!0})},E={args:{companyName:`Northwind Labs`,defaultReason:`Rejected`,defaultNote:`They went with someone else.`,saving:!0},render:e=>(0,h.jsxs)(`div`,{style:s,children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]})},D={args:{companyName:`Northwind Labs`,defaultReason:`Position closed`},render:e=>(0,h.jsxs)(`div`,{style:p(393),children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]}),play:async()=>{let e=y(await y(document.body).findByRole(`dialog`));for(let t of[`Rejected`,`Ghosted`,`Withdrawn`,`Position closed`]){let n=e.getByRole(`button`,{name:t});await g(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44)}await g(e.getByText(`Closed`)).toBeInTheDocument();let t=e.getByRole(`tablist`),n=e.getByRole(`button`,{name:`Position closed`});await g(n.getBoundingClientRect().right).toBeLessThanOrEqual(t.getBoundingClientRect().right+1)}},O={...D,render:e=>(0,h.jsxs)(`div`,{style:p(360),children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]})},k={...D,render:e=>(0,h.jsxs)(`div`,{style:p(320),children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]})},A={args:{companyName:`Northwind Labs`,onMove:_()},render:e=>(0,h.jsxs)(`div`,{style:p(393),children:[(0,h.jsx)(i,{records:[c]}),(0,h.jsx)(d,{...e})]}),play:async({args:e})=>{let t=y(await y(document.body).findByRole(`dialog`));await v.click(t.getByRole(`button`,{name:`Position closed`})),await v.click(t.getByRole(`button`,{name:`Move to Archive`})),await g(e.onMove).toHaveBeenCalledWith({reason:`Position closed`,note:void 0})}},j=[`NothingChosen`,`ReasonChosen`,`LongNameAndSaveFailed`,`FromArchiveAction`,`SaveFailsOnce`,`Saving`,`FourReasons`,`FourReasons360`,`FourReasons320`,`ChooseClosed`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <div style={phoneFrameStyle}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>
}`,...x.parameters?.docs?.source},description:{story:`Canvas artboard 10, the view behind the sheet when it is reached by pulling a collapsed card
down: the sheet over the collapsed card. Nothing is chosen, so Move to Archive is disabled.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    defaultReason: 'Withdrawn',
    defaultNote: 'Accepted another offer, told them I would stay in touch.'
  },
  render: args => <div style={phoneFrameStyle}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Artboard 12: a reason chosen and a note typed.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: longNameRecord.companyName,
    defaultReason: 'Ghosted',
    defaultNote: 'Their recruiter said the team was restructuring and that they would get back to me in a few weeks but never did.',
    error: true
  },
  render: args => <div style={phoneFrameStyle}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>
}`,...C.parameters?.docs?.source},description:{story:`Artboard 13: a company name too long for one line (clamped with an ellipsis), a longer note
that has grown the field, and the save-failed note line above the buttons.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ArchiveActionFlow />
}`,...w.parameters?.docs?.source},description:{story:`Artboard 11, live: the expanded card's Archive button opens the sheet, Escape / scrim / Keep
it close it with focus back on Archive, and Move to Archive reports what it would write.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <ArchiveActionFlow failFirst />
}`,...T.parameters?.docs?.source},description:{story:`The first Move to Archive "fails to save": the note line appears, the sheet stays open with
everything typed; the second attempt succeeds.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Northwind Labs',
    defaultReason: 'Rejected',
    defaultNote: 'They went with someone else.',
    saving: true
  },
  render: args => <div style={phoneFrameStyle}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>
}`,...E.parameters?.docs?.source},description:{story:`B2b: the save is in flight. Move to Archive shows its loading look and cannot be pressed again,
"Keep it" is off; what was chosen and typed stays.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Northwind Labs',
    defaultReason: 'Position closed'
  },
  render: args => <div style={frame(393)}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>,
  play: async () => {
    const dialog = within(await within(document.body).findByRole('dialog'));
    for (const name of ['Rejected', 'Ghosted', 'Withdrawn', 'Position closed']) {
      const button = dialog.getByRole('button', {
        name
      });
      await expect(button.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    }
    await expect(dialog.getByText('Closed')).toBeInTheDocument(); // the visible label
    const track = dialog.getByRole('tablist');
    const selected = dialog.getByRole('button', {
      name: 'Position closed'
    });
    await expect(selected.getBoundingClientRect().right).toBeLessThanOrEqual(track.getBoundingClientRect().right + 1);
  }
}`,...D.parameters?.docs?.source},description:{story:"Rejected, Ghosted, Withdrawn, Closed (stored as `Position closed`). The control scrolls when four\ndo not fit; the selected segment is scrolled into view. 393px phone.",...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  ...FourReasons,
  render: args => <div style={frame(360)}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  ...FourReasons,
  render: args => <div style={frame(320)}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Northwind Labs',
    onMove: fn()
  },
  render: args => <div style={frame(393)}>
      <StackScreen records={[justAddedRecord]} />
      <ReasonSheet {...args} />
    </div>,
  play: async ({
    args
  }) => {
    const dialog = within(await within(document.body).findByRole('dialog'));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Position closed'
    }));
    await userEvent.click(dialog.getByRole('button', {
      name: 'Move to Archive'
    }));
    await expect(args.onMove).toHaveBeenCalledWith({
      reason: 'Position closed',
      note: undefined
    });
  }
}`,...A.parameters?.docs?.source},description:{story:"Choosing Closed and Move to Archive hands over the STORED reason, `Position closed`, not the label.",...A.parameters?.docs?.description}}}})))()}M();export{A as ChooseClosed,D as FourReasons,k as FourReasons320,O as FourReasons360,w as FromArchiveAction,C as LongNameAndSaveFailed,x as NothingChosen,S as ReasonChosen,T as SaveFailsOnce,E as Saving,j as __namedExportsOrder,b as default};