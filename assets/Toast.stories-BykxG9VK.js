import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./Toast-B6sCiTHK.js";function a(){let[e,t]=(0,o.useState)(!0);return(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:16,alignItems:`flex-start`},children:[(0,s.jsx)(`button`,{type:`button`,onClick:()=>t(e=>!e),children:e?`Hide`:`Show`}),(0,s.jsx)(i,{message:`Sample positions loaded. Swipe to look around.`,visible:e})]})}var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o=t(),r(),s=n(),{expect:c,fn:l,userEvent:u,waitFor:d,within:f}=__STORYBOOK_MODULE_TEST__,p={title:`Atoms/Toast`,component:i,parameters:{layout:`padded`}},m={args:{message:`Sample positions loaded. Swipe to look around.`}},h={args:{message:`Nice, moving up.`}},g={render:()=>(0,s.jsx)(a,{})},_={args:{message:`Archived · 7 in your stack`,action:{label:`Done`,name:`Done, back to your stack`,onAction:l()}},play:async({canvasElement:e,args:t})=>{let n=await f(e).findByRole(`button`,{name:`Done, back to your stack`});await d(()=>c(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44)),await u.click(n),await c(t.action?.onAction).toHaveBeenCalledTimes(1)}},v={args:{message:`Your stack is clear`,action:{label:`Add a position`,onAction:l()}}},y={args:{message:`Archived · 120 in your stack`,action:{label:`Done`,name:`Done, back to your stack`,onAction:l()}},render:e=>(0,s.jsx)(`div`,{style:{width:280},children:(0,s.jsx)(i,{...e})}),play:async({canvasElement:e})=>{let t=e.querySelector(`[data-shown], div[class*="toast"]`);await d(()=>c(t.getBoundingClientRect().right).toBeLessThanOrEqual(320))}},b={args:{message:`Archived · 7 in your stack`,announce:!1},play:async({canvasElement:e})=>{await c(f(e).queryByRole(`status`)).toBeNull()}},x=[`FirstRun`,`Short`,`EnterAndExit`,`WithAction`,`WithLongerAction`,`WithActionAt320`,`NotAnnounced`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Sample positions loaded. Swipe to look around.'
  }
}`,...m.parameters?.docs?.source},description:{story:`The first-run line. A Toast shrink-wraps its text and has no position of its own.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Nice, moving up.'
  }
}`,...h.parameters?.docs?.source},description:{story:`The short line from the Paper component.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleDemo />
}`,...g.parameters?.docs?.source},description:{story:`Enter fades in over --duration-base, exit out over --duration-fast. With
prefers-reduced-motion it just appears and disappears.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Archived · 7 in your stack',
    action: {
      label: 'Done',
      name: 'Done, back to your stack',
      onAction: fn()
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const button = await within(canvasElement).findByRole('button', {
      name: 'Done, back to your stack'
    });
    await waitFor(() => expect(button.getBoundingClientRect().height).toBeGreaterThanOrEqual(44));
    await userEvent.click(button);
    await expect(args.action?.onAction).toHaveBeenCalledTimes(1);
  }
}`,..._.parameters?.docs?.source},description:{story:"With an action: a text button at the right of the pill, in an accent tint that reads on the dark\npill, at least 44px tall. The pill grows to the 44px touch target. `Done` has the accessible name\n`Done, back to your stack`.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Your stack is clear',
    action: {
      label: 'Add a position',
      onAction: fn()
    }
  }
}`,...v.parameters?.docs?.source},description:{story:`A longer action label (the empty-stack snackbar).`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Archived · 120 in your stack',
    action: {
      label: 'Done',
      name: 'Done, back to your stack',
      onAction: fn()
    }
  },
  render: args => <div style={{
    width: 320 - 40
  }}>
      <Toast {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const pill = canvasElement.querySelector('[data-shown], div[class*="toast"]') as HTMLElement;
    await waitFor(() => expect(pill.getBoundingClientRect().right).toBeLessThanOrEqual(320));
  }
}`,...y.parameters?.docs?.source},description:{story:`At the narrowest phone the pill still fits: text plus action on one line.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Archived · 7 in your stack',
    announce: false
  },
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).queryByRole('status')).toBeNull();
  }
}`,...b.parameters?.docs?.source},description:{story:"`announce={false}`: the pill is not a live region (the caller announces its text itself).",...b.parameters?.docs?.description}}}})))()}S();export{g as EnterAndExit,m as FirstRun,b as NotAnnounced,h as Short,_ as WithAction,y as WithActionAt320,v as WithLongerAction,x as __namedExportsOrder,p as default};