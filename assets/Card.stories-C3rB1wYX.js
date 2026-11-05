import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./Card-BHwN1aSu.js";var i,a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=e((()=>{n(),i=t(),{expect:a,fn:o,userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Molecules/Card`,component:r,parameters:{layout:`padded`}},u={args:{companyName:`Northwind Labs`,role:`Product Designer (UI UX)`,stageLabel:`Second interview`,totalSteps:6,currentStep:3,signalState:`matched`,location:`Tel Aviv, Example St`,officeDays:`Mon, Wed`}},d={args:{...u.args,showDepthEffect:!1}},f={args:{companyName:`Acme Corp`,role:`Senior Product Designer`,stageLabel:`Initial call`,totalSteps:5,currentStep:1,signalState:`lowball`,location:`Remote`,officeDays:`No in-office days`}},p={args:{...u.args,companyName:`A Very Long Company Name That Wraps`,role:`An Equally Long Role Title To Stress-Test The Layout`}},m={args:{...u.args,location:`Remote, anywhere in the European Union`,officeDays:`No in-office days`},decorators:[e=>(0,i.jsx)(`div`,{style:{width:320},children:(0,i.jsx)(e,{})})]},h={...u.args,compensationAsked:`35k - 37k`,signalLabel:`Close`,signalState:`close`,contacts:{hr:{name:`Noa Example`,email:`noa@northwind.example`,phone:`050-000-0000`},hiringManager:{name:`Eli Sample`,email:`eli@northwind.example`}},pipeline:[{label:`Initial call`,date:`Sep 15`,state:`done`},{label:`First interview`,date:`Sep 22`,state:`done`},{label:`Second interview`,date:`Oct 8`,state:`current`},{label:`Home assignment`,state:`upcoming`},{label:`Offer`,state:`upcoming`}],appliedDate:`Sep 15, 2026`,howAppliedIndex:1,notes:`Recruiter said the team is growing steadily this year. Made-up note for the sample card.`,defaultExpanded:!0},g={args:h},_={args:{...h,location:`Remote, anywhere in the European Union`,officeDays:`No in-office days`},decorators:m.decorators},v={args:{...h,termination:{reason:`Rejected`,feedback:`Recruiter said they went with someone with more B2B SaaS experience.`}}},y={args:{...h,companyName:`Acme Corp`,role:`Senior Product Designer`,compensationAsked:`28k - 30k`,signalState:`none`,signalLabel:`No offer yet`,pipeline:[{label:`Initial call`,date:`Oct 1`,state:`current`},{label:`First interview`,state:`upcoming`}],notes:void 0}},b={...h,companyName:`Quillfeather Labs`,role:`Product Designer`,signalState:`none`,signalLabel:void 0,pipeline:[{label:`Applied`,date:`Sep 2`,state:`done`},{label:`Recruiter call`,date:`Sep 9`,state:`done`},{label:`First interview`,date:`Sep 18`,state:`current`},{label:`Home assignment`,state:`upcoming`},{label:`Offer`,state:`upcoming`}],pipelineReached:`First interview`,termination:{reason:`Rejected`,feedback:`They went with someone who had more experience in regulated products.`},onRestore:()=>{},onOpenLink:()=>{}},x={args:b},S={args:{...b,onOpenLink:void 0}},C={args:{companyName:`Tessellate`,role:``,stageLabel:`No stages yet`,totalSteps:1,currentStep:0,signalState:`none`,location:``,officeDays:``,appliedDate:`Aug 14, 2026`,termination:{reason:`Ghosted`},defaultExpanded:!0,onRestore:()=>{}}},w={args:{...b,companyName:`Brightloom Hydroponic & Vertical Farming Infrastructure Holdings International`,role:`Principal Product Designer, Design Systems & Developer Experience Platform`,termination:{reason:`Position closed`,feedback:`The recruiter wrote that the opening was withdrawn internally and that there was no timeline for reopening it, but that they would keep my details on file.`}}},T={args:{...u.args,unreadable:{copyText:`{
  "id": "broken",
  "role": "no company here"
}`}}},E={args:{...u.args,unreadable:{copyText:``,copyable:!1}}},D={args:{...h,howAppliedIndex:void 0}},O={args:{...u.args,location:``,officeDays:``}},k={args:{...h,location:``,officeDays:``}},A={args:{...u.args,officeDays:``}},j={args:{...b,restoreUnavailable:!0}},M={args:{...h,onOpenLink:()=>{},editUnavailable:!0,archiveUnavailable:!0}},N={args:{...h,onOpenLink:()=>{},onEdit:()=>{},onArchive:()=>{}}},P={args:{...h,onOpenLink:void 0}},F={args:{...h,onOpenLink:()=>{},onEdit:()=>{},onArchive:()=>{},hasDraft:!0},play:async({canvasElement:e})=>{let t=c(e).getByRole(`button`,{name:`Continue editing, not saved yet`});await a(t).toHaveTextContent(`Continue editing`),await a(c(e).queryByRole(`button`,{name:`Edit`})).toBeNull()}},I={args:{...h,onOpenLink:()=>{},onEdit:()=>{},onArchive:()=>{}},play:async({canvasElement:e})=>{await a(c(e).getByRole(`button`,{name:`Edit`})).toBeEnabled()}},L={args:{...h,officeDays:`Hybrid`,onOpenLink:()=>{},onEdit:()=>{},onArchive:()=>{}}},R={args:{...b,onEdit:()=>{}},play:async({canvasElement:e})=>{let t=c(e).getAllByRole(`button`).map(e=>e.textContent).slice(-4);await a(t).toEqual([`Show less`,`Edit`,`Open original link`,`Restore to stack`])}},z={args:{...b,onEdit:()=>{},hasDraft:!0},play:async({canvasElement:e})=>{await a(c(e).getByRole(`button`,{name:`Continue editing, not saved yet`})).toBeEnabled()}},B={args:{...b,editUnavailable:!0},play:async({canvasElement:e})=>{await a(c(e).getByRole(`button`,{name:`Edit`})).toBeDisabled()}},V={...h,companyName:`Alder Works`,role:`Product Designer`,stageLabel:`Interview 1`,totalSteps:6,currentStep:3,pipeline:[{label:`Applied`,date:`Sep 10`,state:`done`},{label:`Recruiter call`,date:`Sep 12`,state:`done`},{label:`Interview 1`,date:`Oct 2`,state:`done`,eventId:`ev-1`},{label:`Interview 2`,date:`Nov 12`,state:`upcoming`,eventId:`ev-2`},{label:`Home assignment`,state:`planned`,eventId:`ev-3`},{label:`Portfolio review`,state:`planned`,eventId:`ev-4`}],onAddStep:o(),onAdvanceStep:o()},H={args:V,play:async({args:e,canvasElement:t})=>{let n=c(t);await a(n.getByText(`Hiring process`)).toBeInTheDocument(),await a(n.queryByText(`Pipeline`)).toBeNull();for(let e of[`Interview 1`,`Interview 2`,`Home assignment, planned. Opens a sheet.`,`Portfolio review, planned. Opens a sheet.`])await a(n.getByRole(`button`,{name:RegExp(`^${e.replace(`.`,`\\.`)}`)})).toBeInTheDocument();await a(n.queryByRole(`button`,{name:/^Applied/})).toBeNull(),await a(n.queryByRole(`button`,{name:/^Recruiter call/})).toBeNull(),await s.click(n.getByRole(`button`,{name:/^Home assignment, planned/})),await a(e.onAdvanceStep).toHaveBeenCalledWith(4);let r=n.getByRole(`button`,{name:`Add a step`});await a(r.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await s.click(r),await a(e.onAddStep).toHaveBeenCalledTimes(1)}},U={args:{...V,stageLabel:`No stages yet`,totalSteps:1,currentStep:0,pipeline:void 0,appliedDate:void 0,notes:void 0,contacts:void 0,compensationAsked:void 0},play:async({canvasElement:e})=>{let t=c(e);await a(t.getByText(`Hiring process`)).toBeInTheDocument(),await a(t.getByRole(`button`,{name:`Add a step`})).toBeEnabled()}},W={args:{...V,stepsUnavailable:!0},play:async({canvasElement:e})=>{let t=c(e);await a(t.getByRole(`button`,{name:`Add a step`})).toBeDisabled(),await a(t.queryByRole(`button`,{name:/planned/})).toBeNull()}},G={args:{...V,onAddStep:void 0,onAdvanceStep:void 0},play:async({canvasElement:e})=>{await a(c(e).queryByRole(`button`,{name:`Add a step`})).toBeNull()}},K={args:{...b,onAddStep:o(),onAdvanceStep:o()},play:async({canvasElement:e})=>{let t=c(e);await a(t.getByText(`Hiring process · reached First interview`)).toBeInTheDocument(),await a(t.queryByRole(`button`,{name:`Add a step`})).toBeNull()}},q={args:{...V,pipeline:[...V.pipeline.slice(0,4),{label:`Meet the whole extended product leadership team for an informal conversation about the role and the roadmap`,state:`planned`,eventId:`ev-9`}]}},J=`NorthwindReference.NoDepthEffect.LowballEarlyStage.LongCompanyName.LongLocationWraps.Expanded.ExpandedLongLocationWraps.ExpandedDismissed.ExpandedNoOfferYet.ArchivedExpanded.ArchivedNoLink.ArchivedSparse.ArchivedLongContent.Unreadable.UnreadableNothingToCopy.ExpandedHowAppliedUnknown.NoLocationNoOfficeDays.ExpandedNoLocationNoOfficeDays.OnlyLocation.ArchivedRestoreUnavailable.ExpandedEditArchiveUnavailable.ExpandedAllActionsEnabled.ExpandedNoLinkSaved.ExpandedContinueEditing.ExpandedEditEnabled.WorkModelInTheOfficeDaysSlot.ArchivedWithEdit.ArchivedContinueEditing.ArchivedEditUnavailable.ExpandedHiringProcess.ExpandedNoStepsJustTheButton.ExpandedStepsUnavailable.ExpandedNoAddStepHandler.ArchivedHiringProcess.ExpandedLongStepName`.split(`.`),u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Northwind Labs',
    role: 'Product Designer (UI UX)',
    stageLabel: 'Second interview',
    totalSteps: 6,
    currentStep: 3,
    signalState: 'matched',
    location: 'Tel Aviv, Example St',
    officeDays: 'Mon, Wed'
  }
}`,...u.parameters?.docs?.source},description:{story:`Matches the live Figma instance (node 142:1262) field-for-field, for direct
side-by-side comparison against the Figma screenshot. Collapsed state only.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...NorthwindReference.args,
    showDepthEffect: false
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Acme Corp',
    role: 'Senior Product Designer',
    stageLabel: 'Initial call',
    totalSteps: 5,
    currentStep: 1,
    signalState: 'lowball',
    location: 'Remote',
    officeDays: 'No in-office days'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...NorthwindReference.args,
    companyName: 'A Very Long Company Name That Wraps',
    role: 'An Equally Long Role Title To Stress-Test The Layout'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...NorthwindReference.args,
    location: 'Remote, anywhere in the European Union',
    officeDays: 'No in-office days'
  },
  decorators: [Story => <div style={{
    width: 320
  }}>
        <Story />
      </div>]
}`,...m.parameters?.docs?.source},description:{story:`Added 2026-10-16: the Brightwater fixture's long location. At phone width (320px wrapper) the
meta row wraps — the briefcase item drops to its own line below the location — instead of
running past the card's right edge. Wrapper width is a story-only stand-in for a phone.`,...m.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: expandedArgs
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    location: 'Remote, anywhere in the European Union',
    officeDays: 'No in-office days'
  },
  decorators: LongLocationWraps.decorators
}`,..._.parameters?.docs?.source},description:{story:`Added 2026-10-16: the Logistics section reuses the same meta row, so it wraps the same way.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    termination: {
      reason: 'Rejected',
      feedback: "Recruiter said they went with someone with more B2B SaaS experience."
    }
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    companyName: 'Acme Corp',
    role: 'Senior Product Designer',
    compensationAsked: '28k - 30k',
    signalState: 'none',
    signalLabel: 'No offer yet',
    pipeline: [{
      label: 'Initial call',
      date: 'Oct 1',
      state: 'current' as const
    }, {
      label: 'First interview',
      state: 'upcoming' as const
    }],
    notes: undefined
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: archivedArgs
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...archivedArgs,
    onOpenLink: undefined
  }
}`,...S.parameters?.docs?.source},description:{story:'No saved link: "Open original link" stays in place but is disabled, labelled `No link saved`.',...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Tessellate',
    role: '',
    stageLabel: 'No stages yet',
    totalSteps: 1,
    currentStep: 0,
    signalState: 'none',
    location: '',
    officeDays: '',
    appliedDate: 'Aug 14, 2026',
    termination: {
      reason: 'Ghosted'
    },
    defaultExpanded: true,
    onRestore: () => {}
  }
}`,...C.parameters?.docs?.source},description:{story:`Sparse record: no role, pipeline, contact, location, office days, notes or how-applied. Only
what exists is drawn (the archived card leaves empty meta items and an unset chip out).`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    ...archivedArgs,
    companyName: 'Brightloom Hydroponic & Vertical Farming Infrastructure Holdings International',
    role: 'Principal Product Designer, Design Systems & Developer Experience Platform',
    termination: {
      reason: 'Position closed',
      feedback: 'The recruiter wrote that the opening was withdrawn internally and that there was no timeline for reopening it, but that they would keep my details on file.'
    }
  }
}`,...w.parameters?.docs?.source},description:{story:`Long company and role in the archived card: they wrap in the header, nothing is clipped.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...NorthwindReference.args,
    unreadable: {
      copyText: '{\\n  "id": "broken",\\n  "role": "no company here"\\n}'
    }
  }
}`,...T.parameters?.docs?.source},description:{story:`Phase B step 2a (2026-10-19): a stored record the data layer could not read. The "Couldn't read
this one" card (position-card-states.md 3.7): a "?" tile, a warning line and Copy saved data.
There is no Remove yet (it needs a data operation, step 2b). The text is made up.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    ...NorthwindReference.args,
    unreadable: {
      copyText: '',
      copyable: false
    }
  }
}`,...E.parameters?.docs?.source},description:{story:`The value could not be turned into text: nothing to copy, so the button is disabled.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    howAppliedIndex: undefined
  }
}`,...D.parameters?.docs?.source},description:{story:'B2a: no `howAppliedIndex` (a record whose how-applied is unknown) shows no chip, not "Cold".',...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    ...NorthwindReference.args,
    location: '',
    officeDays: ''
  }
}`,...O.parameters?.docs?.source},description:{story:`B2a: a record with no location and no office days draws no bare icons, collapsed or expanded.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    location: '',
    officeDays: ''
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...NorthwindReference.args,
    officeDays: ''
  }
}`,...A.parameters?.docs?.source},description:{story:`Only one of the two: just that item, no empty icon next to it.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...archivedArgs,
    restoreUnavailable: true
  }
}`,...j.parameters?.docs?.source},description:{story:`B2a: archived card on a screen where Restore does not exist yet: the button is there, disabled.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    onOpenLink: () => {},
    editUnavailable: true,
    archiveUnavailable: true
  }
}`,...M.parameters?.docs?.source},description:{story:`2026-10-19: Edit and Archive drawn disabled in place (Archive keeps its danger look) until
step 2b; the link button is enabled because a link handler is passed.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    onOpenLink: () => {},
    onEdit: () => {},
    onArchive: () => {}
  }
}`,...N.parameters?.docs?.source},description:{story:"With the callbacks and no `*Unavailable` props, all four buttons are enabled (as 2b will have it).",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    onOpenLink: undefined
  }
}`,...P.parameters?.docs?.source},description:{story:'No usable link (the callback is absent): "Open original link" is disabled and reads `No link saved`.',...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    onOpenLink: () => {},
    onEdit: () => {},
    onArchive: () => {},
    hasDraft: true
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole('button', {
      name: 'Continue editing, not saved yet'
    });
    await expect(button).toHaveTextContent('Continue editing');
    await expect(within(canvasElement).queryByRole('button', {
      name: 'Edit'
    })).toBeNull();
  }
}`,...F.parameters?.docs?.source},description:{story:`EP-CARD-CONT: with a kept draft the Edit button reads "Continue editing" and is announced as
"Continue editing, not saved yet".`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    onOpenLink: () => {},
    onEdit: () => {},
    onArchive: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole('button', {
      name: 'Edit'
    })).toBeEnabled();
  }
}`,...I.parameters?.docs?.source},description:{story:`Without a draft the button is plain "Edit" (and enabled).`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    ...expandedArgs,
    officeDays: 'Hybrid',
    onOpenLink: () => {},
    onEdit: () => {},
    onArchive: () => {}
  }
}`,...L.parameters?.docs?.source},description:{story:`The work model sits where the office days did, with the Briefcase icon ("Hybrid").`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    ...archivedArgs,
    onEdit: () => {}
  },
  play: async ({
    canvasElement
  }) => {
    const names = within(canvasElement).getAllByRole('button').map(b => b.textContent).slice(-4);
    await expect(names).toEqual(['Show less', 'Edit', 'Open original link', 'Restore to stack']);
  }
}`,...R.parameters?.docs?.source},description:{story:`EP-ARCH-EDIT: an opened archived card with Edit as the second action
(Show less, Edit, Open original link, Restore to stack).`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    ...archivedArgs,
    onEdit: () => {},
    hasDraft: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole('button', {
      name: 'Continue editing, not saved yet'
    })).toBeEnabled();
  }
}`,...z.parameters?.docs?.source},description:{story:`EP-ARCH-CONT: the same button on an archived card with a draft.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    ...archivedArgs,
    editUnavailable: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole('button', {
      name: 'Edit'
    })).toBeDisabled();
  }
}`,...B.parameters?.docs?.source},description:{story:`A twin or unreadable-store card: Edit stays in place, disabled.`,...B.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: hiringProcessArgs,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Hiring process')).toBeInTheDocument();
    await expect(canvas.queryByText('Pipeline')).toBeNull();
    const rowButtons = ['Interview 1', 'Interview 2', 'Home assignment, planned. Opens a sheet.', 'Portfolio review, planned. Opens a sheet.'];
    for (const name of rowButtons) await expect(canvas.getByRole('button', {
      name: new RegExp(\`^\${name.replace('.', '\\\\.')}\`)
    })).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: /^Applied/
    })).toBeNull();
    await expect(canvas.queryByRole('button', {
      name: /^Recruiter call/
    })).toBeNull();
    await userEvent.click(canvas.getByRole('button', {
      name: /^Home assignment, planned/
    }));
    await expect(args.onAdvanceStep).toHaveBeenCalledWith(4);
    const add = canvas.getByRole('button', {
      name: 'Add a step'
    });
    await expect(add.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await userEvent.click(add);
    await expect(args.onAddStep).toHaveBeenCalledTimes(1);
  }
}`,...H.parameters?.docs?.source},description:{story:`Rows of every kind under "Hiring process", then "Add a step". Applied and the imported call are not
buttons; the app-added done row, the upcoming row and both planned rows are.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    ...hiringProcessArgs,
    stageLabel: 'No stages yet',
    totalSteps: 1,
    currentStep: 0,
    pipeline: undefined,
    appliedDate: undefined,
    notes: undefined,
    contacts: undefined,
    compensationAsked: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Hiring process')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Add a step'
    })).toBeEnabled();
  }
}`,...U.parameters?.docs?.source},description:{story:`A card with no steps and no applied date: the section is still drawn, with just the button.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    ...hiringProcessArgs,
    stepsUnavailable: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: 'Add a step'
    })).toBeDisabled();
    await expect(canvas.queryByRole('button', {
      name: /planned/
    })).toBeNull();
  }
}`,...W.parameters?.docs?.source},description:{story:`A twin or a leaving card: the button is drawn disabled and no row is a button.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    ...hiringProcessArgs,
    onAddStep: undefined,
    onAdvanceStep: undefined
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole('button', {
      name: 'Add a step'
    })).toBeNull();
  }
}`,...G.parameters?.docs?.source},description:{story:`Without the handler (a story, an old call site) there is no "Add a step" and the card is as before.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    ...archivedArgs,
    onAddStep: fn(),
    onAdvanceStep: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Hiring process · reached First interview')).toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: 'Add a step'
    })).toBeNull();
  }
}`,...K.parameters?.docs?.source},description:{story:`Archived: no "Add a step", no tappable rows; the heading reads "Hiring process · reached ...".`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    ...hiringProcessArgs,
    pipeline: [...hiringProcessArgs.pipeline.slice(0, 4), {
      label: 'Meet the whole extended product leadership team for an informal conversation about the role and the roadmap',
      state: 'planned' as const,
      eventId: 'ev-9'
    }]
  }
}`,...q.parameters?.docs?.source},description:{story:`A long own-step name clamps to two lines in its row.`,...q.parameters?.docs?.description}}}})))()}Y();export{z as ArchivedContinueEditing,B as ArchivedEditUnavailable,x as ArchivedExpanded,K as ArchivedHiringProcess,w as ArchivedLongContent,S as ArchivedNoLink,j as ArchivedRestoreUnavailable,C as ArchivedSparse,R as ArchivedWithEdit,g as Expanded,N as ExpandedAllActionsEnabled,F as ExpandedContinueEditing,v as ExpandedDismissed,M as ExpandedEditArchiveUnavailable,I as ExpandedEditEnabled,H as ExpandedHiringProcess,D as ExpandedHowAppliedUnknown,_ as ExpandedLongLocationWraps,q as ExpandedLongStepName,G as ExpandedNoAddStepHandler,P as ExpandedNoLinkSaved,k as ExpandedNoLocationNoOfficeDays,y as ExpandedNoOfferYet,U as ExpandedNoStepsJustTheButton,W as ExpandedStepsUnavailable,p as LongCompanyName,m as LongLocationWraps,f as LowballEarlyStage,d as NoDepthEffect,O as NoLocationNoOfficeDays,u as NorthwindReference,A as OnlyLocation,T as Unreadable,E as UnreadableNothingToCopy,L as WorkModelInTheOfficeDaysSlot,J as __namedExportsOrder,l as default};