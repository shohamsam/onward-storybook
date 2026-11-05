import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{v as t}from"./iframe-Ck-7skPs.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./chevron-down-Ch9_feXk.js";var a,o,s,c,l,u,d,f;function p(){return(p=e((()=>{a=`_field_1adg0_3`,o=`_labelRow_1adg0_10`,s=`_label_1adg0_10`,c=`_requiredTag_1adg0_29`,l=`_selectWrap_1adg0_37`,u=`_select_1adg0_37`,d=`_chevron_1adg0_83`,f={field:a,labelRow:o,label:s,requiredTag:c,selectWrap:l,select:u,chevron:d}})))()}function m({label:e,value:t,onChange:n,options:r,placeholder:a=`Select one`,required:o,disabled:s,emptyLabel:c,selectId:l,onBlur:u,className:d}){let p=(0,h.useId)(),m=l??p;return(0,g.jsxs)(`div`,{className:[f.field,d].filter(Boolean).join(` `),children:[(0,g.jsxs)(`div`,{className:f.labelRow,children:[(0,g.jsx)(`label`,{htmlFor:m,className:f.label,children:e}),o&&(0,g.jsx)(`span`,{className:f.requiredTag,children:`Required`})]}),(0,g.jsxs)(`div`,{className:f.selectWrap,children:[(0,g.jsxs)(`select`,{id:m,className:f.select,value:t,disabled:s,onChange:e=>n(e.target.value),onBlur:u,children:[c===void 0?(0,g.jsx)(`option`,{value:``,disabled:!0,hidden:!0,children:a}):(0,g.jsx)(`option`,{value:``,children:c}),r.map(e=>(0,g.jsx)(`option`,{value:e.value,children:e.label},e.value))]}),(0,g.jsx)(i,{size:20,className:f.chevron,"aria-hidden":`true`})]})]})}var h,g;function _(){return(_=e((()=>{h=t(),r(),p(),g=n(),m.__docgenInfo={description:`Dropdown (brand-new atom, built 2026-10-11) — no Figma node and no Linear ticket exist for
this yet. It replaces Segmented Control (SHO-14) for the Add Position screen's "How Applied"
field specifically, per Shoham's direct feedback: three equal-weight segmented buttons for an
optional, rarely-filled field read as more visual commitment than the field deserves — a
single tappable row that opens a real picker feels lighter. This does NOT touch how "How
Applied" is *displayed* read-only on the expanded Card — that's still the Signal-Chip-based
chip added 2026-10-08 (decision #23), untouched by this change. Segmented Control itself isn't
retired; it's just no longer this field's input.

Built as a real native <select>, not a custom-rendered popover/listbox — gets free keyboard
nav, screen-reader semantics, and correct mobile picker behavior (the iOS/Android wheel
picker) for nothing, the same reasoning that kept Text Input Field a real <input>. The select
is visually transparent; the chrome around it (border, height, radius, background, label) is
a styled wrapper plus a decorative chevron icon, so it reads as part of this app's component
family rather than a bare OS control.

Visual chrome was originally copied from Text Input Field (SHO-13)'s own locked spec —
\`radius/chip\`, 52px height, \`spacing/section-gap\` horizontal padding — for family
consistency, with nothing locking it for THIS component.

**2026-10-13:** a real Figma node now exists for this — the "How did I apply?" Input Field
instance in the Create position flow (302:2308), read directly. It confirms the chrome
(14px radius, 16px padding, 1px default border, surface fill, \`type/body\` text, trailing
ChevronDown), and corrects two guesses: the label is \`type/label\` (13px Bold), not
\`type/caption\`, and the placeholder "Please select" is \`color/text/primary\`, not dimmed
tertiary. Still no Linear ticket for Dropdown itself.

**2026-10-25 — Edit position:** optional \`emptyLabel\` (a real first option with an empty value,
so a choice can be cleared: the design brief's "gap"), \`selectId\` and \`onBlur\`. Without them the
placeholder behaves as before. A value that is not one of the options shows the empty option.`,methods:[],displayName:`Dropdown`,props:{label:{required:!0,tsType:{name:`string`},description:``},value:{required:!0,tsType:{name:`string`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: string) => void`,signature:{arguments:[{type:{name:`string`},name:`value`}],return:{name:`void`}}},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  value: string;
  label: string;
}`,signature:{properties:[{key:`value`,value:{name:`string`,required:!0}},{key:`label`,value:{name:`string`,required:!0}}]}}],raw:`DropdownOption[]`},description:``},placeholder:{required:!1,tsType:{name:`string`},description:`Shown as the empty/unselected option — e.g. "Select one". Not itself selectable once a
real choice has been made (mirrors how a native <select> placeholder normally works).`,defaultValue:{value:`'Select one'`,computed:!1}},required:{required:!1,tsType:{name:`boolean`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``},emptyLabel:{required:!1,tsType:{name:`string`},description:`A real, selectable first option with an empty value that clears the field (Edit position,
2026-10-25: "Not added yet"). When set, \`placeholder\` is not used and the closed field shows
this text while the value is empty.`},selectId:{required:!1,tsType:{name:`string`},description:`Overrides the generated select id (a screen can focus the field by id).`},onBlur:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},className:{required:!1,tsType:{name:`string`},description:``}}}})))()}export{_ as n,m as t};