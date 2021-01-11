(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[2],{135:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(5),i=n.n(o),s=(n(129),n(0)),c=n.n(s),l=n(158),u=n(41),f=n(97),d=n(6),p=n(160),b=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.split,s=e.className,b=e.childBsPrefix,g=e.as,v=void 0===g?f.a:g,h=Object(r.a)(e,["bsPrefix","split","className","childBsPrefix","as"]),m=Object(d.a)(n,"dropdown-toggle");void 0!==b&&(h.bsPrefix=b);var O=Object(l.b)(),j=O[0],w=O[1].toggle;return j.ref=Object(u.a)(j.ref,Object(p.a)(t,"DropdownToggle")),c.a.createElement(v,Object(a.a)({onClick:w,className:i()(s,m,o&&m+"-split")},j,h))}));b.displayName="DropdownToggle",t.a=b},147:function(e,t,n){"use strict";var a,r=n(1),o=n(2),i=n(5),s=n.n(i),c=n(0),l=n.n(c);var u=n(48),f=n(4),d=n.n(f),p=n(24),b=n(148),g=n(121),v=n(54),h=n(25),m=n(149),O=n(157),j=n(158),w={children:d.a.func.isRequired,drop:d.a.oneOf(["up","left","right","down"]),focusFirstItemOnShow:d.a.oneOf([!1,!0,"keyboard"]),itemSelector:d.a.string,alignEnd:d.a.bool,show:d.a.bool,defaultShow:d.a.bool,onToggle:d.a.func};function E(e){var t=e.drop,n=e.alignEnd,r=e.defaultShow,o=e.show,i=e.onToggle,s=e.itemSelector,f=void 0===s?"* > *":s,d=e.focusFirstItemOnShow,O=e.children,j=Object(v.a)(),w=Object(p.b)(o,r,i),E=w[0],y=w[1],x=Object(g.a)(),C=x[0],P=x[1],R=Object(c.useRef)(null),N=R.current,M=Object(c.useCallback)((function(e){R.current=e,j()}),[j]),T=Object(b.a)(E),S=Object(c.useRef)(null),k=Object(c.useRef)(!1),D=Object(c.useCallback)((function(e){y(!E,e)}),[y,E]),z=Object(c.useMemo)((function(){return{toggle:D,drop:t,show:E,alignEnd:n,menuElement:N,toggleElement:C,setMenu:M,setToggle:P}}),[D,t,E,n,N,C,M,P]);N&&T&&!E&&(k.current=N.contains(document.activeElement));var I=Object(h.a)((function(){C&&C.focus&&C.focus()})),F=Object(h.a)((function(){var e=S.current,t=d;if(null==t&&(t=!(!R.current||!function(e,t){if(!a){var n=document.body,r=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;a=function(e,t){return r.call(e,t)}}return a(e,t)}(R.current,"[role=menu]"))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=Object(u.a)(R.current,f)[0];n&&n.focus&&n.focus()}}));Object(c.useEffect)((function(){E?F():k.current&&(k.current=!1,I())}),[E,k,I,F]),Object(c.useEffect)((function(){S.current=null}));var A=function(e,t){if(!R.current)return null;var n=Object(u.a)(R.current,f),a=n.indexOf(e)+t;return n[a=Math.max(0,Math.min(a,n.length))]};return l.a.createElement(m.a.Provider,{value:z},O({props:{onKeyDown:function(e){var t=e.key,n=e.target;if(!/input|textarea/i.test(n.tagName)||!(" "===t||"Escape"!==t&&R.current&&R.current.contains(n)))switch(S.current=e.type,t){case"ArrowUp":var a=A(n,-1);return a&&a.focus&&a.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),E){var r=A(n,1);r&&r.focus&&r.focus()}else D(e);return;case"Escape":case"Tab":y(!1,e)}}}}))}E.displayName="ReactOverlaysDropdown",E.propTypes=w,E.Menu=O.a,E.Toggle=j.a;var y=E,x=n(13),C=n(6),P=n(27),R={as:n(44).a,disabled:!1},N=l.a.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,i=e.children,u=e.eventKey,f=e.disabled,d=e.href,p=e.onClick,b=e.onSelect,g=e.active,v=e.as,m=Object(o.a)(e,["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"]),O=Object(C.a)(n,"dropdown-item"),j=Object(c.useContext)(x.a),w=(Object(c.useContext)(P.a)||{}).activeKey,E=Object(x.b)(u,d),y=null==g&&null!=E?Object(x.b)(w)===E:g,R=Object(h.a)((function(e){f||(p&&p(e),j&&j(E,e),b&&b(E,e))}));return l.a.createElement(v,Object(r.a)({},m,{ref:t,href:d,disabled:f,className:s()(a,O,y&&"active",f&&"disabled"),onClick:R}),i)}));N.displayName="DropdownItem",N.defaultProps=R;var M=N,T=n(159),S=n(135),k=n(11),D=Object(k.a)("dropdown-header",{defaultProps:{role:"heading"}}),z=Object(k.a)("dropdown-divider",{defaultProps:{role:"separator"}}),I=Object(k.a)("dropdown-item-text",{Component:"span"}),F=l.a.forwardRef((function(e,t){var n=Object(p.a)(e,{show:"onToggle"}),a=n.bsPrefix,i=n.drop,u=n.show,f=n.className,d=n.alignRight,b=n.onSelect,g=n.onToggle,v=n.focusFirstItemOnShow,m=n.as,O=void 0===m?"div":m,j=(n.navbar,Object(o.a)(n,["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"])),w=Object(c.useContext)(x.a),E=Object(C.a)(a,"dropdown"),P=Object(h.a)((function(e,t,n){void 0===n&&(n=t.type),t.currentTarget===document&&(n="rootClose"),g&&g(e,t,{source:n})})),R=Object(h.a)((function(e,t){w&&w(e,t),b&&b(e,t),P(!1,t,"select")}));return l.a.createElement(x.a.Provider,{value:R},l.a.createElement(y,{drop:i,show:u,alignEnd:d,onToggle:P,focusFirstItemOnShow:v,itemSelector:"."+E+"-item:not(.disabled):not(:disabled)"},(function(e){var n=e.props;return l.a.createElement(O,Object(r.a)({},j,n,{ref:t,className:s()(f,u&&"show",(!i||"down"===i)&&E,"up"===i&&"dropup","right"===i&&"dropright","left"===i&&"dropleft")}))})))}));F.displayName="Dropdown",F.defaultProps={navbar:!1},F.Divider=z,F.Header=D,F.Item=M,F.ItemText=I,F.Menu=T.b,F.Toggle=S.a;t.a=F},148:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(0);function r(e){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){t.current=e})),t.current}},149:function(e,t,n){"use strict";var a=n(0),r=n.n(a).a.createContext(null);t.a=r},157:function(e,t,n){"use strict";n.d(t,"b",(function(){return g}));var a=n(1),r=n(2),o=n(4),i=n.n(o),s=n(0),c=n.n(s),l=n(121),u=n(149),f=n(139),d=n(140),p=n(133),b=function(){};function g(e){void 0===e&&(e={});var t=Object(s.useContext)(u.a),n=Object(l.a)(),o=n[0],i=n[1],c=Object(s.useRef)(!1),g=e,v=g.flip,h=g.offset,m=g.rootCloseEvent,O=g.popperConfig,j=void 0===O?{}:O,w=g.usePopper,E=void 0===w?!!t:w,y=null==(null==t?void 0:t.show)?e.show:t.show,x=null==(null==t?void 0:t.alignEnd)?e.alignEnd:t.alignEnd;y&&!c.current&&(c.current=!0);var C=function(e){null==t||t.toggle(!1,e)},P=t||{},R=P.drop,N=P.setMenu,M=P.menuElement,T=P.toggleElement,S=x?"bottom-end":"bottom-start";"up"===R?S=x?"top-end":"top-start":"right"===R?S=x?"right-end":"right-start":"left"===R&&(S=x?"left-end":"left-start");var k,D=Object(f.a)(T,M,Object(p.a)({placement:S,enabled:!(!E||!y),enableEvents:y,offset:h,flip:v,arrowElement:o,popperConfig:j})),z=D.styles,I=D.attributes,F=Object(r.a)(D,["styles","attributes"]),A={ref:N||b,"aria-labelledby":null==T?void 0:T.id},B={show:y,alignEnd:x,hasShown:c.current,close:C};return k=E?Object(a.a)({},F,B,{props:Object(a.a)({},A,I.popper,{style:z.popper}),arrowProps:Object(a.a)({ref:i},I.arrow,{style:z.arrow})}):Object(a.a)({},B,{props:A}),Object(d.a)(M,C,{clickTrigger:m,disabled:!(k&&y)}),k}var v={children:i.a.func.isRequired,show:i.a.bool,alignEnd:i.a.bool,flip:i.a.bool,usePopper:i.a.oneOf([!0,!1]),popperConfig:i.a.object,rootCloseEvent:i.a.string};function h(e){var t=e.children,n=g(Object(r.a)(e,["children"]));return c.a.createElement(c.a.Fragment,null,n.hasShown?t(n):null)}h.displayName="ReactOverlaysDropdownMenu",h.propTypes=v,h.defaultProps={usePopper:!0},t.a=h},158:function(e,t,n){"use strict";n.d(t,"b",(function(){return l}));var a=n(4),r=n.n(a),o=n(0),i=n.n(o),s=n(149),c=function(){};function l(){var e=Object(o.useContext)(s.a)||{},t=e.show,n=void 0!==t&&t,a=e.toggle,r=void 0===a?c:a;return[{ref:e.setToggle||c,"aria-haspopup":!0,"aria-expanded":!!n},{show:n,toggle:r}]}var u={children:r.a.func.isRequired};function f(e){var t=e.children,n=l(),a=n[0],r=n[1],o=r.show,s=r.toggle;return i.a.createElement(i.a.Fragment,null,t({show:o,toggle:s,props:a}))}f.displayName="ReactOverlaysDropdownToggle",f.propTypes=u,t.a=f},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(1),r=n(2),o=n(5),i=n.n(o),s=n(4),c=n.n(s),l=n(0),u=n.n(l),f=n(157),d=n(41),p=(n(59),n(14)),b=n(6),g=n(160),v=n(134),h=c.a.oneOf(["left","right"]),m=c.a.oneOfType([h,c.a.shape({sm:h}),c.a.shape({md:h}),c.a.shape({lg:h}),c.a.shape({xl:h})]),O=u.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,s=e.align,c=e.alignRight,h=e.rootCloseEvent,m=e.flip,O=e.show,j=e.renderOnMount,w=e.as,E=void 0===w?"div":w,y=e.popperConfig,x=Object(r.a)(e,["bsPrefix","className","align","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"]),C=Object(l.useContext)(p.a),P=Object(b.a)(n,"dropdown-menu"),R=Object(v.a)(),N=R[0],M=R[1],T=[];if(s)if("object"===typeof s){var S=Object.keys(s);if(S.length){var k=S[0],D=s[k];c="left"===D,T.push(P+"-"+k+"-"+D)}}else"right"===s&&(c=!0);var z=Object(f.b)({flip:m,rootCloseEvent:h,show:O,alignEnd:c,usePopper:!C&&0===T.length,popperConfig:Object(a.a)({},y,{modifiers:M.concat((null==y?void 0:y.modifiers)||[])})}),I=z.hasShown,F=z.placement,A=z.show,B=z.alignEnd,q=z.close,K=z.props;if(K.ref=Object(d.a)(N,Object(d.a)(Object(g.a)(t,"DropdownMenu"),K.ref)),!I&&!j)return null;"string"!==typeof E&&(K.show=A,K.close=q,K.alignRight=B);var J=x.style;return F&&(J=Object(a.a)({},x.style,K.style),x["x-placement"]=F),u.a.createElement(E,Object(a.a)({},x,K,{style:J,className:i.a.apply(void 0,[o,P,A&&"show",B&&P+"-right"].concat(T))}))}));O.displayName="DropdownMenu",O.defaultProps={align:"left",alignRight:!1,flip:!0},t.b=O},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(33),n(0),n(41);function a(e,t){return e}},173:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(5),i=n.n(o),s=n(0),c=n.n(s),l=n(6),u=c.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.size,s=e.toggle,u=e.vertical,f=e.className,d=e.as,p=void 0===d?"div":d,b=Object(r.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),g=Object(l.a)(n,"btn-group"),v=g;return u&&(v=g+"-vertical"),c.a.createElement(p,Object(a.a)({},b,{ref:t,className:i()(f,v,o&&g+"-"+o,s&&g+"-toggle")}))}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,toggle:!1,role:"group"},t.a=u},210:function(e,t,n){"use strict";var a=n(1),r=n(2),o=n(0),i=n.n(o),s=n(4),c=n.n(s),l=n(147),u=n(135),f=n(159),d={id:c.a.any,href:c.a.string,onClick:c.a.func,title:c.a.node.isRequired,disabled:c.a.bool,menuAlign:f.a,menuRole:c.a.string,renderMenuOnMount:c.a.bool,rootCloseEvent:c.a.string,bsPrefix:c.a.string,variant:c.a.string,size:c.a.string},p=i.a.forwardRef((function(e,t){var n=e.title,o=e.children,s=e.bsPrefix,c=e.rootCloseEvent,d=e.variant,p=e.size,b=e.menuAlign,g=e.menuRole,v=e.renderMenuOnMount,h=e.disabled,m=e.href,O=e.id,j=Object(r.a)(e,["title","children","bsPrefix","rootCloseEvent","variant","size","menuAlign","menuRole","renderMenuOnMount","disabled","href","id"]);return i.a.createElement(l.a,Object(a.a)({ref:t},j),i.a.createElement(u.a,{id:O,href:m,size:p,variant:d,disabled:h,childBsPrefix:s},n),i.a.createElement(f.b,{align:b,role:g,renderOnMount:v,rootCloseEvent:c},o))}));p.displayName="DropdownButton",p.propTypes=d,t.a=p}}]);
//# sourceMappingURL=2.7e4e1568.chunk.js.map