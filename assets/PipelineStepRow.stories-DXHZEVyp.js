import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./PipelineStepRow-08DZKwCJ.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{n(),i=t(),{expect:a,fn:o,userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Molecules/Pipeline Step Row`,component:r,parameters:{layout:`padded`}},u={args:{label:`Initial call`,date:`Sep 15`,state:`done`},render:e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(r,{...e})})},d={args:{label:`Second interview`,date:`Oct 8`,state:`current`,onClick:()=>{}},render:e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(r,{...e})})},f={args:{label:`Home assignment`,state:`upcoming`},render:e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(r,{...e})})},p={render:()=>(0,i.jsxs)(`div`,{style:{width:320,display:`flex`,flexDirection:`column`},children:[(0,i.jsx)(r,{label:`Initial call`,date:`Sep 15`,state:`done`}),(0,i.jsx)(r,{label:`First interview`,date:`Sep 22`,state:`done`}),(0,i.jsx)(r,{label:`Second interview`,date:`Oct 8`,state:`current`,onClick:()=>{}}),(0,i.jsx)(r,{label:`Home assignment`,state:`upcoming`}),(0,i.jsx)(r,{label:`Offer`,state:`upcoming`})]})},m=e=>(0,i.jsx)(`div`,{style:{width:320},children:e}),h={args:{label:`Home assignment`,state:`planned`},render:e=>m((0,i.jsx)(r,{...e})),play:async({canvasElement:e})=>{await a(c(e).getByText(`Planned`)).toBeInTheDocument(),await a(c(e).queryByRole(`button`)).toBeNull()}},g={args:{label:`Portfolio review`,state:`planned`,onClick:o()},render:e=>m((0,i.jsx)(r,{...e})),play:async({args:e,canvasElement:t})=>{let n=c(t).getByRole(`button`,{name:`Portfolio review, planned. Opens a sheet.`});await a(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await a(n).toHaveTextContent(`Planned`),await s.click(n),await a(e.onClick).toHaveBeenCalledTimes(1)}},_={args:{label:`Interview 2`,date:`Nov 12`,state:`upcoming`,onClick:o()},render:e=>m((0,i.jsx)(r,{...e})),play:async({canvasElement:e})=>{let t=c(e).getByRole(`button`);await a(t.textContent).toMatch(/Interview 2, upcoming\s*Nov 12/),await a(t.getBoundingClientRect().height).toBeGreaterThanOrEqual(44)}},v={args:{label:`Recruiter call`,date:`Nov 3`,state:`done`,onClick:o()},render:e=>m((0,i.jsx)(r,{...e}))},y={args:{label:`Interview 1`,date:`Sep 22`,state:`done`},render:e=>m((0,i.jsx)(r,{...e})),play:async({canvasElement:e})=>{await a(c(e).queryByRole(`button`)).toBeNull()}},b={args:{label:`Meet the whole extended product leadership team for an informal conversation about the roadmap`,state:`planned`,onClick:o()},render:e=>m((0,i.jsx)(r,{...e}))},x={render:()=>m((0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r,{label:`Applied`,date:`Sep 10`,state:`done`}),(0,i.jsx)(r,{label:`Recruiter call`,date:`Sep 12`,state:`done`,onClick:()=>{}}),(0,i.jsx)(r,{label:`Interview`,date:`Nov 12`,state:`upcoming`,onClick:()=>{}}),(0,i.jsx)(r,{label:`Home assignment`,state:`planned`,onClick:()=>{}}),(0,i.jsx)(r,{label:`Offer`,state:`planned`,onClick:()=>{}})]}))},S=[`Done`,`Current`,`Upcoming`,`FullChecklist`,`Planned`,`PlannedButton`,`UpcomingWithDate`,`DoneAppAdded`,`DoneImportedNotAButton`,`LongLabel`,`AllKinds`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Initial call',
    date: 'Sep 15',
    state: 'done'
  },
  render: args => <div style={{
    width: 320
  }}>
      <PipelineStepRow {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Second interview',
    date: 'Oct 8',
    state: 'current',
    onClick: () => {}
  },
  render: args => <div style={{
    width: 320
  }}>
      <PipelineStepRow {...args} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Home assignment',
    state: 'upcoming'
  },
  render: args => <div style={{
    width: 320
  }}>
      <PipelineStepRow {...args} />
    </div>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320,
    display: 'flex',
    flexDirection: 'column'
  }}>
      <PipelineStepRow label="Initial call" date="Sep 15" state="done" />
      <PipelineStepRow label="First interview" date="Sep 22" state="done" />
      <PipelineStepRow label="Second interview" date="Oct 8" state="current" onClick={() => {}} />
      <PipelineStepRow label="Home assignment" state="upcoming" />
      <PipelineStepRow label="Offer" state="upcoming" />
    </div>
}`,...p.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Home assignment',
    state: 'planned'
  },
  render: args => frame(<PipelineStepRow {...args} />),
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Planned')).toBeInTheDocument();
    await expect(within(canvasElement).queryByRole('button')).toBeNull();
  }
}`,...h.parameters?.docs?.source},description:{story:`A step with no date yet: the word "Planned", not colour alone. Not a button here (an imported or
read-only context); the next story is the tappable one.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Portfolio review',
    state: 'planned',
    onClick: fn()
  },
  render: args => frame(<PipelineStepRow {...args} />),
  play: async ({
    args,
    canvasElement
  }) => {
    const row = within(canvasElement).getByRole('button', {
      name: 'Portfolio review, planned. Opens a sheet.'
    });
    await expect(row.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await expect(row).toHaveTextContent('Planned');
    await userEvent.click(row);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...g.parameters?.docs?.source},description:{story:`The tappable planned row: a 44px button named "<Label>, planned. Opens a sheet."`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Interview 2',
    date: 'Nov 12',
    state: 'upcoming',
    onClick: fn()
  },
  render: args => frame(<PipelineStepRow {...args} />),
  play: async ({
    canvasElement
  }) => {
    const row = within(canvasElement).getByRole('button');
    await expect(row.textContent).toMatch(/Interview 2, upcoming\\s*Nov 12/);
    await expect(row.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
  }
}`,..._.parameters?.docs?.source},description:{story:`A dated step in the future: outline dot, the date, and ", upcoming" for a screen reader.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Recruiter call',
    date: 'Nov 3',
    state: 'done',
    onClick: fn()
  },
  render: args => frame(<PipelineStepRow {...args} />)
}`,...v.parameters?.docs?.source},description:{story:`A done step the app added: a check icon, and a button (it opens the remove-only sheet).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Interview 1',
    date: 'Sep 22',
    state: 'done'
  },
  render: args => frame(<PipelineStepRow {...args} />),
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole('button')).toBeNull();
  }
}`,...y.parameters?.docs?.source},description:{story:`An imported done row is a plain row, never a button.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Meet the whole extended product leadership team for an informal conversation about the roadmap',
    state: 'planned',
    onClick: fn()
  },
  render: args => frame(<PipelineStepRow {...args} />)
}`,...b.parameters?.docs?.source},description:{story:`A very long own-step name stops at two lines in the row; the whole text is in the page.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => frame(<>
        <PipelineStepRow label="Applied" date="Sep 10" state="done" />
        <PipelineStepRow label="Recruiter call" date="Sep 12" state="done" onClick={() => {}} />
        <PipelineStepRow label="Interview" date="Nov 12" state="upcoming" onClick={() => {}} />
        <PipelineStepRow label="Home assignment" state="planned" onClick={() => {}} />
        <PipelineStepRow label="Offer" state="planned" onClick={() => {}} />
      </>)
}`,...x.parameters?.docs?.source}}}})))()}C();export{x as AllKinds,d as Current,u as Done,v as DoneAppAdded,y as DoneImportedNotAButton,p as FullChecklist,b as LongLabel,h as Planned,g as PlannedButton,f as Upcoming,_ as UpcomingWithDate,S as __namedExportsOrder,l as default};