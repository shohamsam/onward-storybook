import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./SegmentedControl-WhDVHhYo.js";function a(){let[e,t]=(0,c.useState)(-1);return(0,l.jsx)(i,{segments:[`Rejected`,`Ghosted`,`Withdrawn`],selectedIndex:e,onChange:t,fullWidth:!0,ariaLabel:`Reason`})}function o({labels:e,width:t,start:n}){let[r,a]=(0,c.useState)(n);return(0,l.jsx)(`div`,{style:{width:t,background:`var(--color-bg-app)`},children:(0,l.jsx)(i,{segments:e,selectedIndex:r,onChange:a,fullWidth:!0,scrollable:!0,ariaLabel:`Filter by reason`})})}function s(){let[e,t]=(0,c.useState)(!1);return(0,l.jsxs)(`div`,{style:{width:351,background:`var(--color-bg-app)`},children:[(0,l.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:`change labels`}),(0,l.jsx)(i,{segments:e?[`All`,`Rejected`,`Ghosted`,`Other`]:[`All · 37`,`Rejected · 25`,`Ghosted · 8`,`Other · 4`],selectedIndex:0,fullWidth:!0,scrollable:!0,ariaLabel:`Filter by reason`})]})}var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{c=t(),r(),l=n(),{expect:u,userEvent:d,waitFor:f,within:p}=__STORYBOOK_MODULE_TEST__,m={title:`Atoms/Segmented Control`,component:i,parameters:{layout:`padded`}},h={render:()=>{let[e,t]=(0,c.useState)(0);return(0,l.jsx)(i,{segments:[`HR`,`Hiring Manager`],selectedIndex:e,onChange:t})}},g={render:()=>{let[e,t]=(0,c.useState)(1);return(0,l.jsx)(i,{segments:[`Cold`,`Referred`,`Other`],selectedIndex:e,onChange:t})}},_={render:()=>(0,l.jsx)(`div`,{style:{width:305},children:(0,l.jsx)(a,{})})},v=[`All · 37`,`Rejected · 25`,`Ghosted · 8`,`Other · 4`],y=[`All · 137`,`Rejected · 125`,`Ghosted · 88`,`Other · 14`],b={render:()=>(0,l.jsx)(o,{labels:v,width:353,start:0}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`tablist`);await u(t.scrollWidth).toBeGreaterThan(t.clientWidth)}},x={render:()=>(0,l.jsx)(o,{labels:y,width:320,start:3}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`tablist`),n=p(t).getByRole(`button`,{pressed:!0});await u(n.getBoundingClientRect().right).toBeLessThanOrEqual(t.getBoundingClientRect().right)}},S={render:()=>(0,l.jsx)(o,{labels:v,width:480,start:1}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`tablist`);await u(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth)}},C={render:()=>(0,l.jsx)(o,{labels:[`Rejected`,`Ghosted`,`Withdrawn`,`Closed`],width:272,start:0}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`tablist`);await f(()=>u(t.hasAttribute(`data-fade-end`)).toBe(!0)),t.scrollLeft=t.scrollWidth,await f(()=>u(t.hasAttribute(`data-fade-end`)).toBe(!1))}},w={render:()=>(0,l.jsx)(o,{labels:[`Rejected`,`Ghosted`,`Withdrawn`,`Closed`],width:345,start:3}),play:async({canvasElement:e})=>{let t=p(e).getByRole(`tablist`);await u(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth),await u(t.hasAttribute(`data-fade-end`)).toBe(!1)}},T={render:()=>(0,l.jsx)(s,{}),play:async({canvasElement:e})=>{let t=p(e),n=t.getByRole(`tablist`);await f(()=>u(n.scrollWidth).toBeGreaterThan(n.clientWidth)),await f(()=>u(n.hasAttribute(`data-fade-end`)).toBe(!0)),await d.click(t.getByRole(`button`,{name:`change labels`})),await f(()=>u(n.scrollWidth).toBeLessThanOrEqual(n.clientWidth)),await f(()=>u(n.hasAttribute(`data-fade-end`)).toBe(!1)),await d.click(t.getByRole(`button`,{name:`change labels`})),await f(()=>u(n.hasAttribute(`data-fade-end`)).toBe(!0)),await d.click(t.getByRole(`button`,{name:`change labels`})),await f(()=>u(n.hasAttribute(`data-fade-end`)).toBe(!1));let r=n.children[0];r.style.minWidth=`420px`,await f(()=>u(n.hasAttribute(`data-fade-end`)).toBe(!0)),r.style.minWidth=``,await f(()=>u(n.hasAttribute(`data-fade-end`)).toBe(!1))}},E=[`ContactToggle`,`HowApplied`,`NoSelection`,`ScrollableDoesNotFit`,`ScrollableLastSelected`,`ScrollableFits`,`ScrollableFadesWhileMoreIsHidden`,`ScrollableNoFadeWhenItFits`,`ScrollableFadeFollowsWidthChanges`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(0);
    return <SegmentedControl segments={['HR', 'Hiring Manager']} selectedIndex={selected} onChange={setSelected} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState(1);
    return <SegmentedControl segments={['Cold', 'Referred', 'Other']} selectedIndex={selected} onChange={setSelected} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 305
  }}>
      <NoSelectionDemo />
    </div>
}`,..._.parameters?.docs?.source},description:{story:"`selectedIndex={-1}`: nothing is chosen until the person picks — the reason sheet's starting\nstate. Also shows `fullWidth`.",..._.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollableDemo labels={BRIEF} width={353} start={0} />,
  play: async ({
    canvasElement
  }) => {
    const track = within(canvasElement).getByRole('tablist');
    await expect(track.scrollWidth).toBeGreaterThan(track.clientWidth);
  }
}`,...b.parameters?.docs?.source},description:{story:`\`scrollable\`, the Archive filter's mode: segments are content-sized and 12px padded, never cut.
353px is a 393px phone's content width; with the brief's labels the four do not quite fit, so the
track scrolls and the next segment is cut off at the edge. White track here only to show it.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollableDemo labels={LARGE} width={320} start={3} />,
  play: async ({
    canvasElement
  }) => {
    const track = within(canvasElement).getByRole('tablist');
    const selected = within(track).getByRole('button', {
      pressed: true
    });
    await expect(selected.getBoundingClientRect().right).toBeLessThanOrEqual(track.getBoundingClientRect().right);
  }
}`,...x.parameters?.docs?.source},description:{story:`The last segment selected on first render: it is scrolled fully into view.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollableDemo labels={BRIEF} width={480} start={1} />,
  play: async ({
    canvasElement
  }) => {
    const track = within(canvasElement).getByRole('tablist');
    await expect(track.scrollWidth).toBeLessThanOrEqual(track.clientWidth);
  }
}`,...S.parameters?.docs?.source},description:{story:`Wide enough for everything: no scrolling, the spare room shared out so it looks balanced.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollableDemo labels={['Rejected', 'Ghosted', 'Withdrawn', 'Closed']} width={272} start={0} />,
  play: async ({
    canvasElement
  }) => {
    const track = within(canvasElement).getByRole('tablist');
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(true));
    track.scrollLeft = track.scrollWidth;
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(false));
  }
}`,...C.parameters?.docs?.source},description:{story:`When part of a \`scrollable\` control is hidden past its trailing edge, that edge fades (a mask; the
cue that there is more). It is removed when scrolled to the end, and never shown when everything
fits.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <ScrollableDemo labels={['Rejected', 'Ghosted', 'Withdrawn', 'Closed']} width={345} start={3} />,
  play: async ({
    canvasElement
  }) => {
    const track = within(canvasElement).getByRole('tablist');
    await expect(track.scrollWidth).toBeLessThanOrEqual(track.clientWidth);
    await expect(track.hasAttribute('data-fade-end')).toBe(false);
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <LabelChangeDemo />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const track = canvas.getByRole('tablist');
    // 351px, the brief's labels: they do not quite fit (scrollWidth 376), so the edge fades.
    await waitFor(() => expect(track.scrollWidth).toBeGreaterThan(track.clientWidth));
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(true));
    // Shorter labels fit: no scroll happened, the fade must go.
    await userEvent.click(canvas.getByRole('button', {
      name: 'change labels'
    }));
    await waitFor(() => expect(track.scrollWidth).toBeLessThanOrEqual(track.clientWidth));
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(false));
    // And back.
    await userEvent.click(canvas.getByRole('button', {
      name: 'change labels'
    }));
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(true));
    // A late width change of one segment alone (the track's own size and scroll position do not change).
    await userEvent.click(canvas.getByRole('button', {
      name: 'change labels'
    }));
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(false));
    const first = track.children[0] as HTMLElement;
    first.style.minWidth = '420px';
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(true));
    first.style.minWidth = '';
    await waitFor(() => expect(track.hasAttribute('data-fade-end')).toBe(false));
  }
}`,...T.parameters?.docs?.source},description:{story:`The trailing fade follows the content, not only scrolling: a label change that makes everything fit
removes it (and a change back restores it) with no scroll in between, and a segment that changes
width by itself (a late web font, a count gaining a digit) is noticed too.`,...T.parameters?.docs?.description}}}})))()}D();export{h as ContactToggle,g as HowApplied,_ as NoSelection,b as ScrollableDoesNotFit,T as ScrollableFadeFollowsWidthChanges,C as ScrollableFadesWhileMoreIsHidden,S as ScrollableFits,x as ScrollableLastSelected,w as ScrollableNoFadeWhenItFits,E as __namedExportsOrder,m as default};