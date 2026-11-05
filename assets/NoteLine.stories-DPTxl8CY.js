import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./link-2-f4WfhGwu.js";import{n as i,t as a}from"./NoteLine-DCMsQqWm.js";var o,s,c,l,u,d,f;function p(){return(p=e((()=>{n(),i(),o=t(),s={title:`Atoms/Note Line`,component:a,parameters:{layout:`padded`}},c={args:{children:`Couldn’t read that link. Add the details below.`},render:e=>(0,o.jsx)(`div`,{style:{width:353},children:(0,o.jsx)(a,{...e})})},l={args:{children:`Couldn’t save that. Nothing was changed, try again.`},render:e=>(0,o.jsx)(`div`,{style:{width:353},children:(0,o.jsx)(a,{...e})})},u={args:{children:`Couldn’t read that link, and the page needs you to sign in first. Add the details below.`},render:e=>(0,o.jsx)(`div`,{style:{width:240},children:(0,o.jsx)(a,{...e})})},d={args:{children:`Filled in from the link. Check the details.`,icon:(0,o.jsx)(r,{size:16,"aria-hidden":`true`})},render:e=>(0,o.jsx)(`div`,{style:{width:353},children:(0,o.jsx)(a,{...e})})},f=[`FetchFailed`,`SaveFailed`,`Wrapping`,`FilledFromLink`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Couldn’t read that link. Add the details below."
  },
  render: args => <div style={{
    width: 353
  }}>
      <NoteLine {...args} />
    </div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Couldn’t save that. Nothing was changed, try again."
  },
  render: args => <div style={{
    width: 353
  }}>
      <NoteLine {...args} />
    </div>
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Couldn’t read that link, and the page needs you to sign in first. Add the details below."
  },
  render: args => <div style={{
    width: 240
  }}>
      <NoteLine {...args} />
    </div>
}`,...u.parameters?.docs?.source},description:{story:`Wraps rather than truncating — the icon stays on the first line.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Filled in from the link. Check the details.',
    icon: <Link2 size={16} aria-hidden="true" />
  },
  render: args => <div style={{
    width: 353
  }}>
      <NoteLine {...args} />
    </div>
}`,...d.parameters?.docs?.source},description:{story:"A heads-up rather than a failure (2026-10-22): the Add screen's note after the link was read,\nwith the `Link2` icon in place of the triangle. Copy pending ux-writer review.",...d.parameters?.docs?.description}}}})))()}p();export{c as FetchFailed,d as FilledFromLink,l as SaveFailed,u as Wrapping,f as __namedExportsOrder,s as default};