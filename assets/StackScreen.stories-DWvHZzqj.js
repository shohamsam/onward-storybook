import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./StackScreen-BIsVc3WH.js";import{a,i as o,n as s,o as c,r as l,s as u,t as d}from"./stackFixtures-DLE0JGwT.js";import{i as f,n as p,r as m}from"./postArchiveCopy-1pncx0XP.js";import{n as h,t as g}from"./ReasonSheet-DA6cZRSQ.js";function _(e){return t=>{let n=window.matchMedia;return window.matchMedia=t=>t.includes(`prefers-reduced-motion`)?{...n.call(window,t),matches:e}:n.call(window,t),(0,S.jsx)(t,{})}}function v({failFirst:e}){let[t,n]=(0,x.useState)([d,a].map(e=>({...e,defaultExpanded:e===d}))),[r,o]=(0,x.useState)(!1),[s,l]=(0,x.useState)(!1),[u,f]=(0,x.useState)(0),[h,_]=(0,x.useState)(null),[v,y]=(0,x.useState)(null),b=t.map(e=>({...e,onArchive:()=>{l(!1),o(!0)},editUnavailable:!0}));return(0,S.jsxs)(`div`,{style:c,children:[(0,S.jsx)(i,{records:b,archivedCount:3,deckInert:!!v,archiveExit:h?{id:h.id,onDone:()=>{n(e=>e.filter(e=>e.id!==h.id)),y({phrase:`Not this one. On to the next.`,snackbar:h.snackbar}),_(null)}}:null}),v&&(0,S.jsx)(m,{phrase:v.phrase,snackbar:v.snackbar,onClose:()=>y(null)}),(0,S.jsx)(g,{open:r,companyName:d.companyName,error:s,onClose:()=>o(!1),onMove:()=>{if(e&&u===0){f(1),l(!0);return}o(!1),_({id:d.id,snackbar:p(t.length-1)})}})]})}async function y(e){let t=(await O(e).findAllByRole(`button`,{name:`Archive`})).find(e=>e.dataset.variant===`danger`);await E.click(t);let n=O(await O(document.body).findByRole(`dialog`));await E.click(n.getByRole(`button`,{name:`Rejected`})),await E.click(n.getByRole(`button`,{name:`Move to Archive`}))}function b(){let[e,t]=(0,x.useState)([d,l,a]);return(0,S.jsxs)(`div`,{style:c,children:[(0,S.jsx)(i,{records:e}),(0,S.jsx)(`button`,{type:`button`,style:{position:`fixed`,top:0,right:0,zIndex:5},onClick:()=>t(e=>[...e.filter(e=>e.id===a.id),...e.filter(e=>e.id!==a.id)]),children:`Move Kestrel Health to the front`})]})}var x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y;function X(){return(X=e((()=>{x=t(),r(),f(),h(),s(),S=n(),{expect:C,fireEvent:w,fn:T,userEvent:E,waitFor:D,within:O}=__STORYBOOK_MODULE_TEST__,k={title:`Screens/Stack`,component:i,parameters:{layout:`fullscreen`},args:{onNavigate:()=>{},onAdd:()=>{},onOpenArchive:()=>{}},render:e=>(0,S.jsx)(`div`,{style:c,children:(0,S.jsx)(i,{...e})})},A={args:{records:u}},j={args:{records:[d,l]}},M={args:{records:[d]}},N={args:{records:[o]}},P={args:{records:[a]}},F={args:{records:[],archivedCount:0}},I={args:{records:[],archivedCount:3}},L={args:{records:u.map(e=>({...e,sample:!0})),toast:`Sample positions loaded. Swipe to look around.`}},R={args:{records:u},play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`button`,{name:`Next card`}),r=n.parentElement;await C(getComputedStyle(r).pointerEvents).toBe(`none`),n.focus(),await C(getComputedStyle(r).clipPath).toBe(`none`),await C(getComputedStyle(r).pointerEvents).toBe(`auto`),await C(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await C(t.getByRole(`button`,{name:`Previous card`})).toBeInTheDocument()}},z={args:{records:u},play:async({canvasElement:e})=>{let t=O(e).getByRole(`main`),n=e.querySelector(`[data-stack-top]`).getBoundingClientRect(),r=n.left+n.width/2,i=n.top+n.height/2,a={pointerId:7,pointerType:`touch`,isPrimary:!0,bubbles:!0};w.pointerDown(t,{...a,clientX:r,clientY:i}),w.pointerMove(t,{...a,clientX:r-20,clientY:i});let o=-Math.round(n.width*.4);w.pointerMove(t,{...a,clientX:r+o,clientY:i}),await D(()=>{let t=e.querySelector(`[data-stack-under]`);C(t).not.toBeNull(),C(t.getAttribute(`aria-hidden`)).toBe(`true`),C(t.hasAttribute(`inert`)).toBe(!0),C(O(t).getByText(`Acme Corp`)).toBeInTheDocument()});let s=e.querySelector(`[data-stack-top]`),c=new DOMMatrix(getComputedStyle(s).transform).m41;await C(Math.round(c)).toBe(o),await C(O(s).getByText(`Northwind Labs`)).toBeInTheDocument()}},B={args:{records:[{...d,editUnavailable:!0,archiveUnavailable:!0}]},play:async({canvasElement:e})=>{let t=O(e);await w.click(t.getByRole(`button`,{name:`Show more details`})),await C(await t.findByRole(`button`,{name:`Edit`})).toBeDisabled();let n=t.getAllByRole(`button`,{name:`Archive`}).find(e=>e.dataset.variant===`danger`);await C(n).toBeDisabled(),await C(t.getByRole(`button`,{name:`No link saved`})).toBeDisabled()}},V={render:()=>(0,S.jsx)(v,{}),decorators:[_(!1)],play:async({canvasElement:e})=>{await y(e);let t=O(e);await C(await t.findByText(`Archived · 1 in your stack`,{},{timeout:3e3})).toBeInTheDocument(),await E.click(await t.findByRole(`button`,{name:`Done, back to your stack`})),await D(()=>C(t.queryByText(`Archived · 1 in your stack`)).toBeNull(),{timeout:2e3}),await C(t.getByText(`Kestrel Health`)).toBeInTheDocument()}},H={render:()=>(0,S.jsx)(v,{}),decorators:[_(!0)],play:async({canvasElement:e})=>{await y(e);let t=O(e);await C(await t.findByText(`Archived · 1 in your stack`,{},{timeout:3e3})).toBeInTheDocument();let n=e.querySelector(`[data-stack-top]`);await C(n===null||n.style.transform===``).toBe(!0),await E.keyboard(`{Escape}`),await D(()=>C(t.queryByText(`Archived · 1 in your stack`)).toBeNull(),{timeout:2e3})}},U={render:()=>(0,S.jsx)(v,{failFirst:!0}),decorators:[_(!1)],play:async({canvasElement:e})=>{await y(e);let t=O(await O(document.body).findByRole(`dialog`));await C(await t.findByText(/Couldn’t save that/)).toBeInTheDocument(),await C(O(e).queryByText(/in your stack/)).toBeNull(),await C(e.querySelector(`[data-stack-top]`)).not.toBeNull()}},W={args:{records:u,deckInert:!0},play:async({canvasElement:e})=>{let t=O(e),n=t.getByRole(`button`,{name:`Next card`,hidden:!0}),r=t.getByRole(`button`,{name:`Previous card`,hidden:!0});await C(n.closest(`[inert]`)).not.toBeNull(),await C(r.closest(`[inert]`)).not.toBeNull(),await C(e.querySelector(`[role="status"]`)?.closest(`[inert]`)).not.toBeNull(),await C(e.querySelector(`nav`)?.closest(`[inert]`)).toBeNull(),document.activeElement?.blur();for(let e=0;e<12;e+=1){await E.tab();let e=document.activeElement;await C(e?.closest(`[inert]`)??null).toBeNull()}await C(t.getByText(/Card 1 of/)).toBeInTheDocument()}},G={name:`Temporary: Backup link, A clean slate`,args:{records:[],archivedCount:0,onOpenBackupTemp:T()},play:async({canvasElement:e,args:t})=>{let n=O(e);await C(n.getByText(`A clean slate`)).toBeInTheDocument();let r=n.getByRole(`link`,{name:`Backup and restore`}),i=n.getByRole(`button`,{name:/Add a position/});await C(r.getBoundingClientRect().top).toBeGreaterThanOrEqual(i.getBoundingClientRect().bottom),await C(r.getBoundingClientRect().height).toBeGreaterThanOrEqual(44),await E.click(r),await C(t.onOpenBackupTemp).toHaveBeenCalledTimes(1)}},K={name:`Temporary: Backup link, All wrapped up`,args:{records:[],archivedCount:3,onOpenBackupTemp:T()},play:async({canvasElement:e,args:t})=>{let n=O(e);await C(n.getByText(`All wrapped up`)).toBeInTheDocument();let r=n.getByRole(`link`,{name:`Backup and restore`}),i=n.getByRole(`button`,{name:/Open Archive/});await C(r.getBoundingClientRect().top).toBeGreaterThanOrEqual(i.getBoundingClientRect().bottom),await E.click(r),await C(t.onOpenBackupTemp).toHaveBeenCalledTimes(1)}},q={name:`Temporary: no Backup link over the deck`,args:{records:u,onOpenBackupTemp:T()},play:async({canvasElement:e})=>{await C(O(e).queryByRole(`link`,{name:`Backup and restore`})).toBeNull()}},J={render:()=>(0,S.jsx)(b,{}),play:async({canvasElement:e})=>{let t=O(e);await w.click(t.getByRole(`button`,{name:`Next card`})),await D(()=>C(t.getByText(`Card 2 of 3`)).toBeInTheDocument(),{timeout:3e3}),await w.click(t.getByRole(`button`,{name:`Next card`})),await D(()=>C(t.getByText(`Card 3 of 3`)).toBeInTheDocument(),{timeout:3e3}),await C(t.getByText(`Kestrel Health`)).toBeInTheDocument(),await E.click(t.getByRole(`button`,{name:`Show more details`})),await E.click(t.getByRole(`button`,{name:`Move Kestrel Health to the front`})),await D(()=>C(t.getByText(`Card 1 of 3`)).toBeInTheDocument()),await C(t.getByText(`Kestrel Health`)).toBeInTheDocument(),await C(t.getByRole(`button`,{name:`Show less`})).toBeInTheDocument()}},Y=[`WithSeveralRecords`,`TwoRecords`,`OneRecord`,`LongNameRecord`,`PartialRecord`,`Empty`,`AllArchived`,`FirstRunWithToast`,`KeyboardFocusRevealed`,`SwipeMidway`,`ExpandedEditArchiveDisabled`,`ArchiveFlow`,`ArchiveFlowReducedMotion`,`ArchiveFlowSaveFails`,`EverythingBehindIsInert`,`TemporaryBackupLinkCleanSlate`,`TemporaryBackupLinkAllWrappedUp`,`TemporaryBackupLinkNotOnDeck`,`FollowsTheCardWhenTheOrderChanges`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    records: severalRecords
  }
}`,...A.parameters?.docs?.source},description:{story:`Four records: complete, just added, partial, and a long-name one. Swipe left or right (mouse
drag works too) to browse — it wraps from the last to the first; tapping the card does
nothing. Press Show more details to expand: the card grows downward from a fixed top edge and
the page scrolls. Swiping to another card collapses it and returns to the top. Tab to find
the Previous card / Next card buttons (hidden until focused — see KeyboardFocusRevealed).`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    records: [completeRecord, justAddedRecord]
  }
}`,...j.parameters?.docs?.source},description:{story:`Two records: a swipe to the left and a swipe to the right both reveal the other one.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    records: [completeRecord]
  }
}`,...M.parameters?.docs?.source},description:{story:`One card: a swipe rubber-bands a little and returns. No Previous/Next buttons.`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    records: [longNameRecord]
  }
}`,...N.parameters?.docs?.source},description:{story:`The same single card, to compare how the top edge is identical whichever card it is — the
resting position is measured against a fixed 320px reference, not each card's own height.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    records: [partialRecord]
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    records: [],
    archivedCount: 0
  }
}`,...F.parameters?.docs?.source},description:{story:`No active positions and nothing archived — artboard 01.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    records: [],
    archivedCount: 3
  }
}`,...I.parameters?.docs?.source},description:{story:`Everything is archived — artboard 02, with the second button.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    records: severalRecords.map(r => ({
      ...r,
      sample: true
    })),
    toast: 'Sample positions loaded. Swipe to look around.'
  }
}`,...L.parameters?.docs?.source},description:{story:"First run: sample records and the one toast, 16px above the nav — artboard 03. Records are\nflagged `sample`; the flag is carried, not drawn.",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    records: severalRecords
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const next = canvas.getByRole('button', {
      name: 'Next card'
    });
    const group = next.parentElement as HTMLElement;
    // Hidden before focus: clipped away and transparent to the pointer.
    await expect(getComputedStyle(group).pointerEvents).toBe('none');
    next.focus();
    await expect(getComputedStyle(group).clipPath).toBe('none');
    await expect(getComputedStyle(group).pointerEvents).toBe('auto');
    await expect(next.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await expect(canvas.getByRole('button', {
      name: 'Previous card'
    })).toBeInTheDocument();
  }
}`,...R.parameters?.docs?.source},description:{story:`Previous card / Next card while one of them has keyboard focus: both appear as one row directly
under the header, over the screen (the card does not move). Unfocused they are hidden. The
play function focuses "Next card" the way Tab would, then checks the row is unclipped, takes
pointer events, and is at least 44px tall. Click away or Tab out in the canvas and the row
disappears again. Added 2026-10-16.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    records: severalRecords
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const deck = canvas.getByRole('main');
    const face = canvasElement.querySelector<HTMLElement>('[data-stack-top]') as HTMLElement;
    const rect = face.getBoundingClientRect();
    const x0 = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;
    const pointer = {
      pointerId: 7,
      pointerType: 'touch',
      isPrimary: true,
      bubbles: true
    };
    fireEvent.pointerDown(deck, {
      ...pointer,
      clientX: x0,
      clientY: y
    });
    fireEvent.pointerMove(deck, {
      ...pointer,
      clientX: x0 - 20,
      clientY: y
    });
    const target = -Math.round(rect.width * 0.4);
    fireEvent.pointerMove(deck, {
      ...pointer,
      clientX: x0 + target,
      clientY: y
    });
    await waitFor(() => {
      const under = canvasElement.querySelector('[data-stack-under]') as HTMLElement;
      expect(under).not.toBeNull();
      expect(under.getAttribute('aria-hidden')).toBe('true');
      expect(under.hasAttribute('inert')).toBe(true);
      expect(within(under).getByText('Acme Corp')).toBeInTheDocument();
    });
    const topFace = canvasElement.querySelector('[data-stack-top]') as HTMLElement;
    const dx = new DOMMatrix(getComputedStyle(topFace).transform).m41;
    await expect(Math.round(dx)).toBe(target);
    await expect(within(topFace).getByText('Northwind Labs')).toBeInTheDocument();
  }
}`,...z.parameters?.docs?.source},description:{story:`Mid-swipe, pinned for review (added 2026-10-16). The play function presses on the top card and
drags it about 40% of its width to the left, then does NOT release: only the top card's face has
moved, the two gray depth layers above it have stayed where they were, and the next record
(Acme Corp) is already showing underneath at the resting position. Reload the story to reset.
(Pointer events are synthetic here, so there is no real touch; the gesture code treats them the
same.) The assertions check the face's offset, that the underneath card is the NEXT record and is
aria-hidden and inert.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    records: [{
      ...completeRecord,
      editUnavailable: true,
      archiveUnavailable: true
    }]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await fireEvent.click(canvas.getByRole('button', {
      name: 'Show more details'
    }));
    await expect(await canvas.findByRole('button', {
      name: 'Edit'
    })).toBeDisabled();
    // "Archive" is also a Bottom Nav item; the card's own button is the danger one.
    const cardArchive = canvas.getAllByRole('button', {
      name: 'Archive'
    }).find(b => b.dataset.variant === 'danger');
    await expect(cardArchive).toBeDisabled();
    await expect(canvas.getByRole('button', {
      name: 'No link saved'
    })).toBeDisabled();
  }
}`,...B.parameters?.docs?.source},description:{story:`2026-10-19 (phase B2a): the Stack's expanded card with Edit and Archive disabled (not hidden)
until step 2b, and "Open original link" disabled as \`No link saved\` for a record with no link.
A play function expands the card and checks the three buttons.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <ArchiveFlowDemo />,
  decorators: [withReducedMotion(false)],
  play: async ({
    canvasElement
  }) => {
    await archiveThroughSheet(canvasElement);
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Archived · 1 in your stack', {}, {
      timeout: 3000
    })).toBeInTheDocument();
    await userEvent.click(await canvas.findByRole('button', {
      name: 'Done, back to your stack'
    }));
    await waitFor(() => expect(canvas.queryByText('Archived · 1 in your stack')).toBeNull(), {
      timeout: 2000
    });
    await expect(canvas.getByText('Kestrel Health')).toBeInTheDocument();
  }
}`,...V.parameters?.docs?.source},description:{story:`The whole flow: expanded card, Archive opens the reason sheet, Move to Archive closes it, the card
leaves, then the soft post-archive screen shows the phrase and the snackbar (\`Archived · 1 in your
stack\` + Done); Done ends it and the next card is the top one.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <ArchiveFlowDemo />,
  decorators: [withReducedMotion(true)],
  play: async ({
    canvasElement
  }) => {
    await archiveThroughSheet(canvasElement);
    const canvas = within(canvasElement);
    await expect(await canvas.findByText('Archived · 1 in your stack', {}, {
      timeout: 3000
    })).toBeInTheDocument();
    const face = canvasElement.querySelector<HTMLElement>('[data-stack-top]');
    await expect(face === null || face.style.transform === '').toBe(true);
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(canvas.queryByText('Archived · 1 in your stack')).toBeNull(), {
      timeout: 2000
    });
  }
}`,...H.parameters?.docs?.source},description:{story:`Reduced motion: the card is hidden at once (nothing flies) and the post-archive screen is a plain
swap, no fades and no drift.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <ArchiveFlowDemo failFirst />,
  decorators: [withReducedMotion(false)],
  play: async ({
    canvasElement
  }) => {
    await archiveThroughSheet(canvasElement);
    const dialog = within(await within(document.body).findByRole('dialog'));
    await expect(await dialog.findByText(/Couldn’t save that/)).toBeInTheDocument();
    await expect(within(canvasElement).queryByText(/in your stack/)).toBeNull();
    await expect(canvasElement.querySelector('[data-stack-top]')).not.toBeNull(); // the card is still there
  }
}`,...U.parameters?.docs?.source},description:{story:`The first Move to Archive fails to save: the sheet stays open with its note, the card stays, and the
post-archive screen never shows.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    records: severalRecords,
    deckInert: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const next = canvas.getByRole('button', {
      name: 'Next card',
      hidden: true
    });
    const previous = canvas.getByRole('button', {
      name: 'Previous card',
      hidden: true
    });
    await expect(next.closest('[inert]')).not.toBeNull();
    await expect(previous.closest('[inert]')).not.toBeNull();
    await expect(canvasElement.querySelector('[role="status"]')?.closest('[inert]')).not.toBeNull();
    await expect(canvasElement.querySelector('nav')?.closest('[inert]')).toBeNull();
    // Tab through the whole page: focus never lands on an inert control.
    (document.activeElement as HTMLElement | null)?.blur();
    for (let i = 0; i < 12; i += 1) {
      await userEvent.tab();
      const active = document.activeElement as HTMLElement | null;
      await expect(active?.closest('[inert]') ?? null).toBeNull();
    }
    await expect(canvas.getByText(/Card 1 of/)).toBeInTheDocument(); // still card 1
  }
}`,...W.parameters?.docs?.source},description:{story:`Behind a post-archive screen (\`deckInert\`): the deck, the Previous / Next buttons and the "Card n of m"
status are all inert, so Tab never reaches them, Enter cannot change the card, and the status is not
announced; the Bottom Nav stays live.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Temporary: Backup link, A clean slate',
  args: {
    records: [],
    archivedCount: 0,
    onOpenBackupTemp: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('A clean slate')).toBeInTheDocument();
    const link = canvas.getByRole('link', {
      name: 'Backup and restore'
    });
    const add = canvas.getByRole('button', {
      name: /Add a position/
    });
    await expect(link.getBoundingClientRect().top).toBeGreaterThanOrEqual(add.getBoundingClientRect().bottom);
    await expect(link.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await userEvent.click(link);
    await expect(args.onOpenBackupTemp).toHaveBeenCalledTimes(1);
  }
}`,...G.parameters?.docs?.source},description:{story:`TEMPORARY: "A clean slate" with the "Backup and restore" link under Add a position.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Temporary: Backup link, All wrapped up',
  args: {
    records: [],
    archivedCount: 3,
    onOpenBackupTemp: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('All wrapped up')).toBeInTheDocument();
    const link = canvas.getByRole('link', {
      name: 'Backup and restore'
    });
    const open = canvas.getByRole('button', {
      name: /Open Archive/
    });
    await expect(link.getBoundingClientRect().top).toBeGreaterThanOrEqual(open.getBoundingClientRect().bottom);
    await userEvent.click(link);
    await expect(args.onOpenBackupTemp).toHaveBeenCalledTimes(1);
  }
}`,...K.parameters?.docs?.source},description:{story:`TEMPORARY: "All wrapped up" with the link under Open Archive.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Temporary: no Backup link over the deck',
  args: {
    records: severalRecords,
    onOpenBackupTemp: fn()
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole('link', {
      name: 'Backup and restore'
    })).toBeNull();
  }
}`,...q.parameters?.docs?.source},description:{story:`TEMPORARY: with cards in the Stack the link is not drawn, even with the prop passed.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <FollowDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    // "Next card" is hidden until focused (no pointer events), so it is pressed the way the other stories do.
    await fireEvent.click(canvas.getByRole('button', {
      name: 'Next card'
    }));
    await waitFor(() => expect(canvas.getByText('Card 2 of 3')).toBeInTheDocument(), {
      timeout: 3000
    });
    await fireEvent.click(canvas.getByRole('button', {
      name: 'Next card'
    }));
    await waitFor(() => expect(canvas.getByText('Card 3 of 3')).toBeInTheDocument(), {
      timeout: 3000
    });
    await expect(canvas.getByText('Kestrel Health')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'Show more details'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Move Kestrel Health to the front'
    }));
    await waitFor(() => expect(canvas.getByText('Card 1 of 3')).toBeInTheDocument());
    await expect(canvas.getByText('Kestrel Health')).toBeInTheDocument();
    await expect(canvas.getByRole('button', {
      name: 'Show less'
    })).toBeInTheDocument(); // still expanded
  }
}`,...J.parameters?.docs?.source},description:{story:`Browse to the third card, open it, then the list order changes so that card is first: the deck keeps
showing the same card (still expanded), at its new place, instead of jumping to another.`,...J.parameters?.docs?.description}}}})))()}X();export{I as AllArchived,V as ArchiveFlow,H as ArchiveFlowReducedMotion,U as ArchiveFlowSaveFails,F as Empty,W as EverythingBehindIsInert,B as ExpandedEditArchiveDisabled,L as FirstRunWithToast,J as FollowsTheCardWhenTheOrderChanges,R as KeyboardFocusRevealed,N as LongNameRecord,M as OneRecord,P as PartialRecord,z as SwipeMidway,K as TemporaryBackupLinkAllWrappedUp,G as TemporaryBackupLinkCleanSlate,q as TemporaryBackupLinkNotOnDeck,j as TwoRecords,A as WithSeveralRecords,Y as __namedExportsOrder,k as default};