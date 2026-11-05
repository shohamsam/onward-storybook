import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./clipboard-C-IThcF1.js";import{n as a,t as o}from"./TextInputField-BktQP6Eo.js";function s(e){let[t,n]=(0,c.useState)(e.value);return(0,l.jsx)(`div`,{style:{width:305},children:(0,l.jsx)(o,{...e,value:t,onChange:n})})}var c,l,u,d,f,p,m,h,g,_,v;function y(){return(y=e((()=>{c=t(),r(),a(),l=n(),u={title:`Atoms/Text Input Field`,component:o,parameters:{layout:`padded`}},d={args:{label:`Company`,placeholder:`Company name`,value:``,required:!0},render:e=>(0,l.jsx)(s,{...e})},f={args:{label:`Role`,value:`Senior Product Designer`,required:!0},render:e=>(0,l.jsx)(s,{...e})},p={args:{label:`Job posting URL`,value:`https://example.com/careers/123`,required:!0,helperText:`Auto-filled below (demo data — real fetch not wired up yet).`},render:e=>(0,l.jsx)(s,{...e})},m={args:{label:`Paste the job posting URL here`,value:``,type:`url`,placeholder:`https://...`,trailingIcon:(0,l.jsx)(i,{size:20}),onTrailingIconClick:()=>{},trailingIconLabel:`Paste from clipboard`},render:e=>(0,l.jsx)(s,{...e})},h={args:{label:`Company`,value:`Northwind Labs`,disabled:!0},render:e=>(0,l.jsx)(s,{...e})},g={args:{label:`A note for later (optional)`,value:``,multiline:!0,placeholder:`What they said, what you learned`},render:e=>(0,l.jsx)(s,{...e})},_={args:{label:`A note for later (optional)`,value:`Their recruiter said the team was restructuring and that they would get back to me in a few weeks, but never did. Worth a gentle follow-up in the new quarter, and worth asking the referrer what changed on their side.`,multiline:!0,placeholder:`What they said, what you learned`},render:e=>(0,l.jsx)(s,{...e})},v=[`Empty`,`Filled`,`WithHelperText`,`WithTrailingIcon`,`Disabled`,`Multiline`,`MultilineLong`],d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Company',
    placeholder: 'Company name',
    value: '',
    required: true
  },
  render: args => <Interactive {...args} />
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Role',
    value: 'Senior Product Designer',
    required: true
  },
  render: args => <Interactive {...args} />
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Job posting URL',
    value: 'https://example.com/careers/123',
    required: true,
    helperText: 'Auto-filled below (demo data — real fetch not wired up yet).'
  },
  render: args => <Interactive {...args} />
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Paste the job posting URL here',
    value: '',
    type: 'url',
    placeholder: 'https://...',
    trailingIcon: <Clipboard size={20} />,
    onTrailingIconClick: () => {},
    trailingIconLabel: 'Paste from clipboard'
  },
  render: args => <Interactive {...args} />
}`,...m.parameters?.docs?.source},description:{story:`The Create position flow's URL field — Figma's Input Field with its trailing icon slot used
for a clipboard button (here a no-op; the real screen pastes from the clipboard).`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Company',
    value: 'Northwind Labs',
    disabled: true
  },
  render: args => <Interactive {...args} />
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'A note for later (optional)',
    value: '',
    multiline: true,
    placeholder: 'What they said, what you learned'
  },
  render: args => <Interactive {...args} />
}`,...g.parameters?.docs?.source},description:{story:`Multi-line variant — at least three lines (96px) tall, grows as you type, no resize handle.
Same border, radius, fill and label as the single-line field. Type a few lines to watch it
grow.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'A note for later (optional)',
    value: 'Their recruiter said the team was restructuring and that they would get back to me in a few weeks, but never did. Worth a gentle follow-up in the new quarter, and worth asking the referrer what changed on their side.',
    multiline: true,
    placeholder: 'What they said, what you learned'
  },
  render: args => <Interactive {...args} />
}`,..._.parameters?.docs?.source},description:{story:`Multi-line with content longer than three lines — the box has already grown to fit it.`,..._.parameters?.docs?.description}}}})))()}y();export{h as Disabled,d as Empty,f as Filled,g as Multiline,_ as MultilineLong,p as WithHelperText,m as WithTrailingIcon,v as __namedExportsOrder,u as default};