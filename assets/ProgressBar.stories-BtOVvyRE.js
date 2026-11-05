import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./ProgressBar-xuuQpk9q.js";var i,a,o,s,c,l;function u(){return(u=e((()=>{n(),i=t(),a={title:`Atoms/Progress Bar`,component:r,parameters:{layout:`padded`},argTypes:{currentStep:{control:{type:`number`,min:1}},totalSteps:{control:{type:`number`,min:1}}}},o={args:{stageLabel:`Second interview`,totalSteps:6,currentStep:3},render:e=>(0,i.jsx)(`div`,{style:{width:321},children:(0,i.jsx)(r,{...e})})},s={args:{stageLabel:`Initial call`,totalSteps:6,currentStep:1},render:e=>(0,i.jsx)(`div`,{style:{width:321},children:(0,i.jsx)(r,{...e})})},c={args:{stageLabel:`Offer`,totalSteps:6,currentStep:6},render:e=>(0,i.jsx)(`div`,{style:{width:321},children:(0,i.jsx)(r,{...e})})},l=[`SecondInterview`,`FirstStep`,`LastStep`],o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    stageLabel: 'Second interview',
    totalSteps: 6,
    currentStep: 3
  },
  render: args => <div style={{
    width: 321
  }}>
      <ProgressBar {...args} />
    </div>
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    stageLabel: 'Initial call',
    totalSteps: 6,
    currentStep: 1
  },
  render: args => <div style={{
    width: 321
  }}>
      <ProgressBar {...args} />
    </div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    stageLabel: 'Offer',
    totalSteps: 6,
    currentStep: 6
  },
  render: args => <div style={{
    width: 321
  }}>
      <ProgressBar {...args} />
    </div>
}`,...c.parameters?.docs?.source}}}})))()}u();export{s as FirstStep,c as LastStep,o as SecondInterview,l as __namedExportsOrder,a as default};