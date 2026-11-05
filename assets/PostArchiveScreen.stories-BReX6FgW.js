import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./StackScreen-BIsVc3WH.js";import{n as i,o as a,t as o}from"./stackFixtures-DLE0JGwT.js";import{a as s,i as c,n as l,o as u,r as d}from"./postArchiveCopy-1pncx0XP.js";var f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;function B(){return(B=e((()=>{c(),n(),i(),s(),f=t(),{expect:p,fn:m,userEvent:h,waitFor:g,within:_}=__STORYBOOK_MODULE_TEST__,v={title:`Screens/Post-archive`,component:d,parameters:{layout:`fullscreen`},args:{phrase:u(`Rejected`)[1],snackbar:l(7),holdMs:6e5,onClose:m(),onLeaving:m()},render:e=>(0,f.jsxs)(`div`,{style:a,children:[(0,f.jsx)(r,{records:[o],deckInert:!0}),(0,f.jsx)(d,{...e})]})},y={args:{phrase:u(`Rejected`)[1]}},b={args:{phrase:u(`Ghosted`)[5]}},x={args:{phrase:u(`Withdrawn`)[0]}},S={args:{phrase:u(`Position closed`)[4]}},C={args:{phrase:u(`Role put on hold`)[0]}},w={args:{snackbar:l(12)},play:async({canvasElement:e})=>{await p(_(e).getByText(`Archived · 12 in your stack`)).toBeInTheDocument()}},T={args:{snackbar:l(1)},play:async({canvasElement:e})=>{await p(_(e).getByText(`Archived · 1 in your stack`)).toBeInTheDocument(),await p(await _(e).findByRole(`button`,{name:`Done, back to your stack`})).toBeInTheDocument()}},E={args:{snackbar:l(0)},play:async({canvasElement:e})=>{await p(_(e).getByText(`Your stack is clear`)).toBeInTheDocument(),await p(await _(e).findByRole(`button`,{name:`Add a position`})).toBeInTheDocument(),await p(_(e).queryByText(/Archived · 0/)).toBeNull()}},D={args:{phrase:`A no from them, not a ruling on you.`}},O={args:{phrase:`One company’s answer. Not the last word on you.`}},k={play:async({canvasElement:e})=>{await p(await _(e).findByRole(`button`,{name:`Done, back to your stack`})).toBeInTheDocument()}},A={play:async({canvasElement:e,args:t})=>{let n=await _(e).findByRole(`button`,{name:`Done, back to your stack`});await g(()=>p(n).toHaveFocus()),await h.click(n),await g(()=>p(t.onClose).toHaveBeenCalledWith(`action`),{timeout:2e3}),await p(t.onClose).toHaveBeenCalledTimes(1)}},j={play:async({canvasElement:e,args:t})=>{let n=e.querySelector(`p[aria-hidden="true"]`);await h.dblClick(n),await g(()=>p(t.onClose).toHaveBeenCalledWith(`tap`),{timeout:2e3}),await p(t.onClose).toHaveBeenCalledTimes(1),await p(t.onLeaving).toHaveBeenCalledTimes(1)}},M={play:async({args:e})=>{await h.keyboard(`{Escape}`),await g(()=>p(e.onClose).toHaveBeenCalledWith(`key`),{timeout:2e3})}},N={play:async({canvasElement:e,args:t})=>{document.activeElement?.blur(),await h.keyboard(`{Enter}`),await g(()=>p(t.onClose).toHaveBeenCalledWith(`key`),{timeout:2e3}),await p(t.onClose).toHaveBeenCalledTimes(1)}},P={args:{holdMs:600},play:async({args:e})=>{await g(()=>p(e.onClose).toHaveBeenCalledWith(`timeout`),{timeout:3e3})}},F={args:{snackbar:l(0)},play:async({canvasElement:e,args:t})=>{await h.click(await _(e).findByRole(`button`,{name:`Add a position`})),await g(()=>p(t.onClose).toHaveBeenCalledWith(`add`)),await p(t.onClose).toHaveBeenCalledTimes(1)}},I={play:async({canvasElement:e})=>{await p(e.querySelector(`[data-countdown]`)).toBeNull(),await p(await _(e).findByRole(`button`,{name:`Done, back to your stack`})).toBeInTheDocument()}},L={play:async({canvasElement:e,args:t})=>{let n=await _(e).findByText(`Archived · 7 in your stack`);await h.click(n),await g(()=>p(t.onClose).toHaveBeenCalledWith(`tap`),{timeout:2e3}),await p(t.onClose).toHaveBeenCalledTimes(1)}},R={args:{phrase:`You did your part.
The quiet is theirs.`},play:async({canvasElement:e})=>{let t=e.querySelectorAll(`p[aria-hidden="true"] > span`);await p(t).toHaveLength(2),await p(t[0].textContent).toBe(`You did your part.`),await p(t[1].textContent).toBe(`The quiet is theirs.`),await g(()=>{let t=[...e.querySelectorAll(`[role="status"]`)].map(e=>e.textContent);p(t).toContain(`You did your part. The quiet is theirs. Archived · 7 in your stack`)})}},z=[`Rejected`,`Ghosted`,`Withdrawn`,`PositionClosed`,`CustomReason`,`ManyLeft`,`ExactlyOneLeft`,`NoneLeft`,`TwoLinePhrase`,`ThreeLinePhrase`,`ReducedMotionNote`,`DismissByAction`,`DismissByTap`,`DismissByEscape`,`DismissByEnter`,`DismissByTimeout`,`EmptyStackAddAction`,`NoCountdown`,`DismissByTapOnSnackbarText`,`PhraseWithBreaks`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: poolFor('Rejected')[1]
  }
}`,...y.parameters?.docs?.source},description:{story:`The five reason cases. Each phrase is the first of its pool (R2, G3, W1, N1, N1 of the neutral pool).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: poolFor('Ghosted')[5]
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: poolFor('Withdrawn')[0]
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: poolFor('Position closed')[4]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: poolFor('Role put on hold')[0]
  }
}`,...C.parameters?.docs?.source},description:{story:`A custom or imported reason: the neutral pool (N1 to N4), never the "nobody's fault" lines.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    snackbar: snackbarFor(12)
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Archived · 12 in your stack')).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source},description:{story:`The count cases: many left, exactly one left (the same string), and none left (the stack is clear,
with the "Add a position" action).`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    snackbar: snackbarFor(1)
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Archived · 1 in your stack')).toBeInTheDocument();
    await expect(await within(canvasElement).findByRole('button', {
      name: 'Done, back to your stack'
    })).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    snackbar: snackbarFor(0)
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByText('Your stack is clear')).toBeInTheDocument();
    await expect(await within(canvasElement).findByRole('button', {
      name: 'Add a position'
    })).toBeInTheDocument();
    await expect(within(canvasElement).queryByText(/Archived · 0/)).toBeNull();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: 'A no from them, not a ruling on you.'
  }
}`,...D.parameters?.docs?.source},description:{story:`A two-line and a three-line phrase (the longest pool line wraps to three lines on a 393px phone).`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: 'One company’s answer. Not the last word on you.'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(await within(canvasElement).findByRole('button', {
      name: 'Done, back to your stack'
    })).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source},description:{story:`Reduced motion is a CSS setting (\`prefers-reduced-motion\`); a story cannot flip it, so this one
documents the behaviour (no fade) and checks the screen is complete
and dismissible. Turn the setting on in the browser or the OS to see it.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const done = await within(canvasElement).findByRole('button', {
      name: 'Done, back to your stack'
    });
    await waitFor(() => expect(done).toHaveFocus());
    await userEvent.click(done);
    await waitFor(() => expect(args.onClose).toHaveBeenCalledWith('action'), {
      timeout: 2000
    });
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  }
}`,...A.parameters?.docs?.source},description:{story:`The action. Focus is on it when the screen opens.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const phrase = canvasElement.querySelector('p[aria-hidden="true"]') as HTMLElement;
    await userEvent.dblClick(phrase);
    await waitFor(() => expect(args.onClose).toHaveBeenCalledWith('tap'), {
      timeout: 2000
    });
    await expect(args.onClose).toHaveBeenCalledTimes(1);
    await expect(args.onLeaving).toHaveBeenCalledTimes(1);
  }
}`,...j.parameters?.docs?.source},description:{story:`A tap anywhere on the screen; and a double tap acts once.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  play: async ({
    args
  }) => {
    await userEvent.keyboard('{Escape}');
    await waitFor(() => expect(args.onClose).toHaveBeenCalledWith('key'), {
      timeout: 2000
    });
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    (document.activeElement as HTMLElement | null)?.blur();
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(args.onClose).toHaveBeenCalledWith('key'), {
      timeout: 2000
    });
    await expect(args.onClose).toHaveBeenCalledTimes(1);
    void canvasElement;
  }
}`,...N.parameters?.docs?.source},description:{story:`Enter with focus on the action is that button's own click (once); Enter with focus elsewhere ends it.`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    holdMs: 600
  },
  play: async ({
    args
  }) => {
    await waitFor(() => expect(args.onClose).toHaveBeenCalledWith('timeout'), {
      timeout: 3000
    });
  }
}`,...P.parameters?.docs?.source},description:{story:`By itself, after the hold (shortened to 600ms here; the app's is about 5 seconds).`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    snackbar: snackbarFor(0)
  },
  play: async ({
    canvasElement,
    args
  }) => {
    await userEvent.click(await within(canvasElement).findByRole('button', {
      name: 'Add a position'
    }));
    await waitFor(() => expect(args.onClose).toHaveBeenCalledWith('add'));
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  }
}`,...F.parameters?.docs?.source},description:{story:"The empty-stack action opens Add: it ends the screen at once (no fade), as `add`.",...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector('[data-countdown]')).toBeNull();
    await expect(await within(canvasElement).findByRole('button', {
      name: 'Done, back to your stack'
    })).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source},description:{story:`Nothing counts down on screen: the snackbar is the pill and its action, and nothing else.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const text = await within(canvasElement).findByText('Archived · 7 in your stack');
    await userEvent.click(text);
    await waitFor(() => expect(args.onClose).toHaveBeenCalledWith('tap'), {
      timeout: 2000
    });
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  }
}`,...L.parameters?.docs?.source},description:{story:"A tap on the snackbar's text is a tap anywhere; the Done button keeps its own meaning (it ends the\nscreen as `action`, once).",...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    phrase: 'You did your part.\\nThe quiet is theirs.'
  },
  play: async ({
    canvasElement
  }) => {
    const lines = canvasElement.querySelectorAll('p[aria-hidden="true"] > span');
    await expect(lines).toHaveLength(2);
    await expect(lines[0].textContent).toBe('You did your part.');
    await expect(lines[1].textContent).toBe('The quiet is theirs.');
    await waitFor(() => {
      const regions = [...canvasElement.querySelectorAll('[role="status"]')].map(r => r.textContent);
      expect(regions).toContain('You did your part. The quiet is theirs. Archived · 7 in your stack');
    });
  }
}`,...R.parameters?.docs?.source},description:{story:`The phrase is drawn one block line per part, and announced as ONE phrase: the parts joined with a
single space, no break.`,...R.parameters?.docs?.description}}}})))()}B();export{C as CustomReason,A as DismissByAction,N as DismissByEnter,M as DismissByEscape,j as DismissByTap,L as DismissByTapOnSnackbarText,P as DismissByTimeout,F as EmptyStackAddAction,T as ExactlyOneLeft,b as Ghosted,w as ManyLeft,I as NoCountdown,E as NoneLeft,R as PhraseWithBreaks,S as PositionClosed,k as ReducedMotionNote,y as Rejected,O as ThreeLinePhrase,D as TwoLinePhrase,x as Withdrawn,z as __namedExportsOrder,v as default};