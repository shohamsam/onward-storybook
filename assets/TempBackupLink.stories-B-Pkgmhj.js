import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";import{n,t as r}from"./TempBackupLink-AHxhzBim.js";var i,a,o,s,c,l,u,d;function f(){return(f=e((()=>{n(),i=t(),{expect:a,fn:o,userEvent:s,within:c}=__STORYBOOK_MODULE_TEST__,l={title:`Temporary/Backup and restore link (temporary)`,component:r,parameters:{layout:`padded`,docs:{description:{component:`TEMPORARY (2026-10-22, mockup aid, remove before the real settings screen).`}}},args:{onOpen:o()}},u={name:`Temporary link`,render:e=>(0,i.jsx)(`div`,{style:{width:353,display:`flex`,justifyContent:`center`},children:(0,i.jsx)(r,{...e})}),play:async({canvasElement:e,args:t})=>{let n=c(e).getByRole(`link`,{name:`Backup and restore`});await a(n).toHaveAttribute(`href`,`#backup`),await a(n.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);let r=window.location.hash;await s.click(n),await a(t.onOpen).toHaveBeenCalledTimes(1),await a(window.location.hash).toBe(r)}},d=[`TemporaryLink`],u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Temporary link',
  render: args => <div style={{
    width: 353,
    display: 'flex',
    justifyContent: 'center'
  }}>
      <TempBackupLink {...args} />
    </div>,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: 'Backup and restore'
    });
    await expect(link).toHaveAttribute('href', '#backup');
    await expect(link.getBoundingClientRect().height).toBeGreaterThanOrEqual(44);
    const hashBefore = window.location.hash;
    await userEvent.click(link);
    await expect(args.onOpen).toHaveBeenCalledTimes(1);
    await expect(window.location.hash).toBe(hashBefore);
  }
}`,...u.parameters?.docs?.source},description:{story:"The temporary link on its own. Pressing it calls `onOpen` once and does not change the URL\n(the app's own navigation pushes `#backup`). The tap area is at least 44px tall.",...u.parameters?.docs?.description}}}})))()}f();export{u as TemporaryLink,d as __namedExportsOrder,l as default};