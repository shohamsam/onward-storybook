import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./SignalChip-sW0m-9mb.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),a={title:`Atoms/Signal Chip`,component:r,parameters:{layout:`centered`},argTypes:{state:{control:`select`,options:[`lowball`,`close`,`matched`,`none`]}}},o={args:{state:`lowball`}},s={args:{state:`close`}},c={args:{state:`matched`}},l={args:{state:`none`}},u={render:()=>(0,i.jsxs)(`div`,{style:{display:`flex`,gap:12},children:[(0,i.jsx)(r,{state:`lowball`}),(0,i.jsx)(r,{state:`close`}),(0,i.jsx)(r,{state:`matched`}),(0,i.jsx)(r,{state:`none`})]})},d=[`Lowball`,`Close`,`Matched`,`NoOfferYet`,`AllStates`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'lowball'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'close'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'matched'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    state: 'none'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12
  }}>
      <SignalChip state="lowball" />
      <SignalChip state="close" />
      <SignalChip state="matched" />
      <SignalChip state="none" />
    </div>
}`,...u.parameters?.docs?.source}}}})))()}f();export{u as AllStates,s as Close,o as Lowball,c as Matched,l as NoOfferYet,d as __namedExportsOrder,a as default};