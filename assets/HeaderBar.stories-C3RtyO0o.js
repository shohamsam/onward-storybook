import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./HeaderBar-Bp4ZgIQL.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Molecules/Header Bar`,component:r,parameters:{layout:`padded`}},o={args:{companyName:`Northwind Labs`,role:`Product Designer (UI UX)`,onBack:()=>{},onOpenLink:()=>{},onMore:()=>{}},render:e=>(0,i.jsx)(`div`,{style:{width:360},children:(0,i.jsx)(r,{...e})})},s={args:{companyName:`Acme Corp`,role:`Senior Product Designer`,onBack:()=>{}},render:e=>(0,i.jsx)(`div`,{style:{width:360},children:(0,i.jsx)(r,{...e})})},c={args:{title:`Add Position`,onBack:()=>{}},render:e=>(0,i.jsx)(`div`,{style:{width:360},children:(0,i.jsx)(r,{...e})})},l=[`Default`,`BackOnly`,`SingleLineTitle`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Northwind Labs',
    role: 'Product Designer (UI UX)',
    onBack: () => {},
    onOpenLink: () => {},
    onMore: () => {}
  },
  render: args => <div style={{
    width: 360
  }}>
      <HeaderBar {...args} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    companyName: 'Acme Corp',
    role: 'Senior Product Designer',
    onBack: () => {}
  },
  render: args => <div style={{
    width: 360
  }}>
      <HeaderBar {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Add Position',
    onBack: () => {}
  },
  render: args => <div style={{
    width: 360
  }}>
      <HeaderBar {...args} />
    </div>
}`,...c.parameters?.docs?.source},description:{story:"The single-line `title` mode added 2026-10-08 for screens with no company/role yet, e.g.\nthe Add flow (SHO-27).",...c.parameters?.docs?.description}}}})))()}u();export{s as BackOnly,o as Default,c as SingleLineTitle,l as __namedExportsOrder,a as default};