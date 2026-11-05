import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";var n,r,i,a,o,s;function c(){return(c=e((()=>{n=`_button_1rzhh_1`,r=`_label_1rzhh_52`,i=`_icon_1rzhh_65`,a=`_spinning_1rzhh_77`,o=`_spin_1rzhh_77`,s={button:n,label:r,icon:i,spinning:a,spin:o}})))()}function l({label:e,icon:t,iconPosition:n=`trailing`,onClick:r,disabled:i,loading:a,type:o=`button`,className:c}){let l=t&&(0,u.jsx)(`span`,{className:[s.icon,a&&s.spinning].filter(Boolean).join(` `),children:t});return(0,u.jsxs)(`button`,{type:o,className:[s.button,c].filter(Boolean).join(` `),onClick:()=>{a||r?.()},disabled:i,"aria-busy":a||void 0,children:[n===`leading`&&l,(0,u.jsx)(`span`,{className:s.label,children:e}),n===`trailing`&&l]})}var u;function d(){return(d=e((()=>{c(),u=t(),l.__docgenInfo={description:`Primary Button (Linear SHO-12) — confirmed built in Figma 2026-09-22 (marked Done), the
"Primary" variant of the unified Button component (node 75:48, same component Secondary
Button/SHO-32 translates the "Subtle" variant of). Never translated to code until now.

Built 2026-10-08, code-first: Shoham's call for this Add flow pass (SHO-27) was to work in
code first and sync to Figma later, same pattern as Header Bar and Pipeline Step Row. First
real use: the Add flow's "Save" action — the one primary confirming action against three
outlined Secondary Buttons' worth of visual weight elsewhere in this app; nothing in the
Card/expanded-card work needed a true primary CTA before this.

SHO-13's locked spec (checked only after an initial build guessed \`radius/sm\`, matching
Secondary Button — wrong, see TextInputField's doc comment for the same lesson) also covers
this component's own ticket, SHO-12, which specs:
  - \`State\` = \`Default\` / \`Disabled\` only — Pressed is NOT locked. SHO-12 itself asks: "does
    this also want the same Pressed treatment as Nav Add Button for tap feedback consistency
    — not specced yet, flag if you add it so Nav Add Button gets updated to match." This
    build adds a :hover/:active → \`color/accent/hover\` fill anyway (an unusable button with
    no press feedback felt wrong for a real Save action) — flagged on SHO-12 in Linear per
    that instruction, not silently added.
  - Default: \`color/accent/default\` background, \`color/text/on-accent\` label — matches.
  - Disabled: \`color/bg/surface-sunken\` background, \`color/text/tertiary\` label, not
    interactive — matches (this one was a correct guess before the ticket was checked).
  - \`radius/chip\` (NOT \`radius/sm\` — corrected), \`type/button\` (14px Bold) label.
Same \`iconPosition\` convention as Secondary Button, so the two buttons feel like one family.

**2026-10-13 — changes from the Create position flow (Figma node 302:2265):**
  - **Height 52px.** Both Button instances in that flow (Create position, Save details) are
    52px tall per the frame's layout metadata; this component was ~32px (8px padding around
    a 16px icon). Applied as \`min-height\`. This reads as a change to SHO-12's locked spec —
    Figma wins (decision #23), but SHO-12 hasn't been updated in Linear.
  - **\`loading\` prop**, added at Shoham's request: the sync icon should turn while the fetch
    runs. Not in Figma — a new behavior, code-first. A continuous turn is \`linear\` per the
    \`animate\` skill (constant motion), and is dropped under \`prefers-reduced-motion\`.
  - **Hover is now gated** behind \`(hover: hover) and (pointer: fine)\`. Un-gated \`:hover\` is
    sticky on touch: after one tap the button stayed in its darker Pressed color until the
    next tap elsewhere (installed \`mobile-native\` skill, §1). \`:active\` still gives press
    feedback on every input type.`,methods:[],displayName:`PrimaryButton`,props:{label:{required:!0,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},iconPosition:{required:!1,tsType:{name:`union`,raw:`'leading' | 'trailing'`,elements:[{name:`literal`,value:`'leading'`},{name:`literal`,value:`'trailing'`}]},description:`Matches Secondary Button's API — defaults to trailing.`,defaultValue:{value:`'trailing'`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},loading:{required:!1,tsType:{name:`boolean`},description:`Work is in progress: the icon spins and further presses are ignored, but the button keeps
its normal Default look — deliberately NOT the Disabled treatment, so the spinning icon
stays the clear signal. Not a Figma state (see the 2026-10-13 note below).`},type:{required:!1,tsType:{name:`union`,raw:`'button' | 'submit'`,elements:[{name:`literal`,value:`'button'`},{name:`literal`,value:`'submit'`}]},description:``,defaultValue:{value:`'button'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{d as n,l as t};