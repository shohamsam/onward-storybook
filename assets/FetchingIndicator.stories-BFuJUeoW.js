import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./FetchingIndicator-CsFDBRG8.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=t(),r(),o=n(),s={title:`Molecules/Fetching Indicator`,component:i,parameters:{layout:`centered`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:320,padding:24},children:(0,o.jsx)(e,{})})]},c={render:function(){let[e,t]=(0,a.useState)(0);return(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:24,alignItems:`flex-start`},children:[(0,o.jsx)(i,{},e),(0,o.jsx)(`button`,{type:`button`,onClick:()=>t(e=>e+1),children:`Replay`})]})}},l={args:{stageIndex:0}},u={args:{stageIndex:1}},d={args:{stageIndex:2}},f=[`Live`,`StageOpening`,`StageReading`,`StageSpotting`],c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function LiveStory() {
    const [run, setRun] = useState(0);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }}>
        <FetchingIndicator key={run} />
        <button type="button" onClick={() => setRun(r => r + 1)}>
          Replay
        </button>
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:`The real thing — cycles through all three stages and then holds on the last one, exactly as
it does on the Add Position screen. Use Replay to watch it again.`,...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    stageIndex: 0
  }
}`,...l.parameters?.docs?.source},description:{story:`Pinned to stage 1 of 3 — deterministic, for screenshots and visual review.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    stageIndex: 1
  }
}`,...u.parameters?.docs?.source},description:{story:`Pinned to stage 2 of 3.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    stageIndex: 2
  }
}`,...d.parameters?.docs?.source},description:{story:`Pinned to stage 3 of 3.`,...d.parameters?.docs?.description}}}})))()}p();export{c as Live,l as StageOpening,u as StageReading,d as StageSpotting,f as __namedExportsOrder,s as default};