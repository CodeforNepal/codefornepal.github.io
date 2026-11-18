import{j as e,h as r,r as i}from"./index-xgGkv5ml.js";function g({children:a,blog:o=!1}){return e.jsxs(e.Fragment,{children:[e.jsx(r,{}),e.jsx("div",{className:o?"container blog":"container",id:"pagecontainer",children:a})]})}function u(a){const[o,t]=i.useState(()=>{try{return window.localStorage.getItem(a)==="cards"?"cards":"table"}catch{return"table"}}),s=i.useCallback(l=>{t(l);try{window.localStorage.setItem(a,l)}catch{}},[a]);return[o,s]}const n=[{value:"table",label:"Table",icon:"fas fa-list"},{value:"cards",label:"Cards",icon:"fas fa-th-large"}];function c({value:a,onChange:o}){return e.jsxs("div",{className:"view-toggle",role:"group","aria-label":"Choose view",children:[n.map(t=>e.jsxs("button",{type:"button","aria-pressed":a===t.value,title:`${t.label} view`,className:a===t.value?"is-active":void 0,onClick:()=>o(t.value),children:[e.jsx("i",{className:t.icon,"aria-hidden":!0})," ",e.jsx("span",{className:"view-toggle-label",children:t.label})]},t.value)),e.jsx("style",{children:`
        .view-toggle { display: inline-flex; border: 1px solid #e5e7eb; background: white; flex-shrink: 0; }
        .view-toggle button { display: inline-flex; align-items: center; gap: 0.4rem; padding: 0 0.9rem; height: 38px; border: 0; background: transparent; color: #6b7280; font-family: 'Montserrat',sans-serif; font-size: 0.72rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; cursor: pointer; transition: background 0.2s, color 0.2s; }
        .view-toggle button + button { border-left: 1px solid #e5e7eb; }
        .view-toggle button:hover { color: #111827; }
        .view-toggle button.is-active { background: #111827; color: white; }
        .view-toggle i { font-size: 0.7rem; }
        /* Icon-only on small phones so the toggle never crowds the controls beside it. */
        @media (max-width: 480px) {
          .view-toggle button { padding: 0 0.75rem; }
          .view-toggle .view-toggle-label { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; }
        }
      `})]})}function b({children:a,view:o,onViewChange:t,summary:s}){return e.jsxs("div",{className:"list-toolbar",children:[e.jsxs("div",{className:"list-toolbar-row",children:[e.jsx("div",{className:"list-toolbar-controls",children:a}),e.jsx(c,{value:o,onChange:t})]}),e.jsx("p",{className:"list-toolbar-summary",children:s})]})}export{b as L,g as P,u};
