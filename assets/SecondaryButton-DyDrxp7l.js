import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./jsx-runtime-DeHZSEgm.js";var n,r,i,a;function o(){return(o=e((()=>{n=`_button_143ry_1`,r=`_label_143ry_39`,i=`_icon_143ry_50`,a={button:n,label:r,icon:i}})))()}function s({label:e,icon:t,iconPosition:n=`trailing`,variant:r=`default`,onClick:i,disabled:o,ariaLabel:s,className:l}){let u=t&&(0,c.jsx)(`span`,{className:a.icon,children:t});return(0,c.jsxs)(`button`,{type:`button`,className:[a.button,l].filter(Boolean).join(` `),"data-variant":r,onClick:i,disabled:o,"aria-label":s,children:[n===`leading`&&u,(0,c.jsx)(`span`,{className:a.label,children:e}),n===`trailing`&&u]})}var c;function l(){return(l=e((()=>{o(),c=t(),s.__docgenInfo={description:`Secondary Button (Linear SHO-32) — the "Subtle" variant of the unified Button component
in Figma (node 75:48, https://figma.com/design/q6vQcpCd8syg4YJPbdZj4D/...?node-id=75-48).
Pairs with Primary Button (SHO-12, same component, "Primary" variant — not yet translated,
not used by the Card). First use: the Card's "Show more details" CTA, which opens the same
Tap-in detail view as tapping the card's center (decision #16).

Added 2026-10-04: real Default / Pressed / Disabled interaction states, read directly off
node 75:48. That node exposes three "Subtle" states — in the Figma response they only come
back as "State4/State5/State6" (not resolved to real variant names by the design-context
tool), so the Default/Pressed/Disabled mapping below is inferred from left-to-right visual
order plus consistency with the "Primary" variant's own Default/Pressed/Disabled set, not a
literal name match — worth Shoham double-checking against the actual variant names in Figma.
  - Default:  border only, transparent fill                 (state "4")
  - Pressed:  border + color/accent/subtle-bg fill (#e3e1fb) (state "5")
  - Disabled: border + color/bg/surface-sunken fill (#e9ebef), non-interactive (state "6")
Per the Figma node's own code, label color does NOT change between these three states
(unlike the Primary variant, which dims its label on Disabled) — kept as-is here.

Outlined CTA, confirmed 2026-10-04 — Shoham added the border in Figma and matched the
label to type/button (14px Bold), closing the two drifts flagged during the initial
code translation. Border color is the same subtle token Logo Tile uses
(color/status-none/bg), reused deliberately, not a mismatch.

Fixed 2026-10-16 (found on a real iPhone, approved by Shoham): hover is now gated behind
\`(hover: hover) and (pointer: fine)\`, default and danger variants. Un-gated \`:hover\` sticks
after a touch, so after a swipe the new top card's "Show more details" button showed the purple
pressed fill. \`:active\` still gives the pressed look on every device. Same fix PrimaryButton
already had. Confirmed by reading the CSS only; not yet seen on a device after the fix.`,methods:[],displayName:`SecondaryButton`,props:{label:{required:!0,tsType:{name:`string`},description:``},icon:{required:!1,tsType:{name:`ReactNode`},description:``},iconPosition:{required:!1,tsType:{name:`union`,raw:`'leading' | 'trailing'`,elements:[{name:`literal`,value:`'leading'`},{name:`literal`,value:`'trailing'`}]},description:`Where the icon renders relative to the label. Defaults to 'trailing' (the Card's
original "Show more details" chevron) — added 2026-10-05 for the Actions section's
leading pencil/external-link/archive icons (SHO-41), without changing any existing
call site's output.`,defaultValue:{value:`'trailing'`,computed:!1}},variant:{required:!1,tsType:{name:`union`,raw:`'default' | 'danger'`,elements:[{name:`literal`,value:`'default'`},{name:`literal`,value:`'danger'`}]},description:`'danger' renders the destructive-action treatment Shoham added for Archive in Figma
(2026-10-07, same node). No dedicated danger/error color exists in tokens.css yet — this
reuses the lowball-red status tokens (the only red in the system), which is a reasonable
stand-in but worth promoting to a real \`color/danger/*\` token if Figma formalizes one.`,defaultValue:{value:`'default'`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},ariaLabel:{required:!1,tsType:{name:`string`},description:`Accessible name when the visible label is not the whole story (Edit position: "Continue
editing" is announced as "Continue editing, not saved yet"). Absent, the label is the name.`},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{l as n,s as t};