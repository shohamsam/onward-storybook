import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./check-jRkMlj5W.js";import{n as i,t as a}from"./refresh-cw-CDBooOzs.js";import{n as o,t as s}from"./PrimaryButton-BS971O0a.js";var c,l,u,d,f,p,m,h;function g(){return(g=e((()=>{n(),i(),o(),c=t(),l={title:`Atoms/Primary Button`,component:s,parameters:{layout:`padded`}},u={args:{label:`Save`,icon:(0,c.jsx)(r,{size:16})},render:e=>(0,c.jsx)(`div`,{style:{width:305},children:(0,c.jsx)(s,{...e})})},d={args:{label:`Save`},render:e=>(0,c.jsx)(`div`,{style:{width:305},children:(0,c.jsx)(s,{...e})})},f={args:{label:`Save`,icon:(0,c.jsx)(r,{size:16})},render:e=>(0,c.jsx)(`div`,{style:{width:305},children:(0,c.jsx)(s,{...e})})},p={args:{label:`Create position`,icon:(0,c.jsx)(a,{size:16}),loading:!0},render:e=>(0,c.jsx)(`div`,{style:{width:353},children:(0,c.jsx)(s,{...e})})},m={args:{label:`Save`,icon:(0,c.jsx)(r,{size:16}),disabled:!0},render:e=>(0,c.jsx)(`div`,{style:{width:305},children:(0,c.jsx)(s,{...e})})},h=[`Save`,`WithoutIcon`,`Pressed`,`Loading`,`Disabled`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: <Check size={16} />
  },
  render: args => <div style={{
    width: 305
  }}>
      <PrimaryButton {...args} />
    </div>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save'
  },
  render: args => <div style={{
    width: 305
  }}>
      <PrimaryButton {...args} />
    </div>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: <Check size={16} />
  },
  render: args => <div style={{
    width: 305
  }}>
      <PrimaryButton {...args} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:`Hover or click-and-hold to see the Pressed state — real :hover/:active, no addon needed.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Create position',
    icon: <RefreshCw size={16} />,
    loading: true
  },
  render: args => <div style={{
    width: 353
  }}>
      <PrimaryButton {...args} />
    </div>
}`,...p.parameters?.docs?.source},description:{story:`The Create position flow's busy state — the sync icon turns (linear, one turn per second),
and further presses are ignored. Keeps the Default look rather than Disabled. Under
\`prefers-reduced-motion: reduce\` the icon holds still.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Save',
    icon: <Check size={16} />,
    disabled: true
  },
  render: args => <div style={{
    width: 305
  }}>
      <PrimaryButton {...args} />
    </div>
}`,...m.parameters?.docs?.source}}}})))()}g();export{m as Disabled,p as Loading,f as Pressed,u as Save,d as WithoutIcon,h as __namedExportsOrder,l as default};