import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./StepChips-DADFMRsn.js";import{a,c as o,o as s,u as c}from"./stepSheet-MaAOKa5l.js";function l({remembered:e=[],width:t=345}){let[n,r]=(0,u.useState)(``);return(0,d.jsxs)(`div`,{style:{width:t,display:`flex`,flexDirection:`column`,gap:16},children:[(0,d.jsx)(i,{chips:s(e),isSelected:e=>a(n,e),onPick:e=>r(t=>o(t,e))}),(0,d.jsx)(`output`,{"aria-label":`Field`,children:n})]})}var u,d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{u=t(),r(),c(),d=n(),{expect:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h={title:`Molecules/Step Chips`,component:i,parameters:{layout:`padded`}},g={render:()=>(0,d.jsx)(l,{}),play:async({canvasElement:e})=>{let t=m(e);await p.click(t.getByRole(`button`,{name:`Call`})),await p.click(t.getByRole(`button`,{name:`Offer`})),await f(t.getByLabelText(`Field`)).toHaveTextContent(`Call, Offer`),await f(t.getByRole(`button`,{name:`Offer`})).toHaveAttribute(`aria-pressed`,`true`),await f(t.getByRole(`button`,{name:`Interview`})).toHaveAttribute(`aria-pressed`,`false`)}},_={render:()=>(0,d.jsx)(l,{width:300,remembered:[`Portfolio review`,`Team lunch`,`Case study`,`A remembered step with an extremely long name that must not break the row`]}),play:async({canvasElement:e})=>{let t=m(e).getAllByRole(`button`);for(let e of t)await f(e.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);await f(t[t.length-1].getBoundingClientRect().right).toBeLessThanOrEqual(e.getBoundingClientRect().right)}},v={args:{chips:[`Call`,`Interview`],disabled:!0,onPick:()=>{}}},y=[`Defaults`,`WithRememberedAndWrapping`,`Disabled`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Call'
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: 'Offer'
    }));
    await expect(canvas.getByLabelText('Field')).toHaveTextContent('Call, Offer');
    await expect(canvas.getByRole('button', {
      name: 'Offer'
    })).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByRole('button', {
      name: 'Interview'
    })).toHaveAttribute('aria-pressed', 'false');
  }
}`,...g.parameters?.docs?.source},description:{story:`The four defaults. Tapping fills a field, then adds with ", "; a tapped word shows a check and fill.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => <Interactive width={300} remembered={['Portfolio review', 'Team lunch', 'Case study', 'A remembered step with an extremely long name that must not break the row']} />,
  play: async ({
    canvasElement
  }) => {
    const chips = within(canvasElement).getAllByRole('button');
    for (const chip of chips) await expect(chip.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    await expect(chips[chips.length - 1].getBoundingClientRect().right).toBeLessThanOrEqual(canvasElement.getBoundingClientRect().right);
  }
}`,..._.parameters?.docs?.source},description:{story:`Her own names after the defaults wrap onto more lines; a very long one stops at one line.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    chips: ['Call', 'Interview'],
    disabled: true,
    onPick: () => {}
  }
}`,...v.parameters?.docs?.source}}}})))()}b();export{g as Defaults,v as Disabled,_ as WithRememberedAndWrapping,y as __namedExportsOrder,h as default};