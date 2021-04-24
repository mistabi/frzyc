(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[15],{116:function(e,t,n){"use strict";var r=n(2),a=n(4),c=n(5),i=n.n(c),o=n(0),s=n.n(o),l=(n(152),n(7)),d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.placement,o=e.className,d=e.style,u=e.children,h=e.arrowProps,f=(e.popper,e.show,Object(a.a)(e,["bsPrefix","placement","className","style","children","arrowProps","popper","show"]));n=Object(l.a)(n,"tooltip");var j=((null==c?void 0:c.split("-"))||[])[0];return s.a.createElement("div",Object(r.a)({ref:t,style:d,role:"tooltip","x-placement":j,className:i()(o,n,"bs-tooltip-"+j)},f),s.a.createElement("div",Object(r.a)({className:"arrow"},h)),s.a.createElement("div",{className:n+"-inner"},u))}));d.defaultProps={placement:"right"},d.displayName="Tooltip",t.a=d},119:function(e,t,n){"use strict";var r=n(2),a=n(4),c=n(142),i=n(129),o=n(0),s=n.n(o),l=n(130),d=n(127),u=(n(77),n(32)),h=n(5),f=n.n(h),j=n(8),b=n(11),p=n(3),O=n.n(p),m=n(24),x=n.n(m),g=n(132),y=n(52),w=n(122),v=n(163),E=n(164),C=n(144),k=n(158),N=s.a.forwardRef((function(e,t){var n=e.flip,r=e.offset,a=e.placement,c=e.containerPadding,i=void 0===c?5:c,l=e.popperConfig,d=void 0===l?{}:l,u=e.transition,h=Object(g.a)(),f=h[0],p=h[1],O=Object(g.a)(),m=O[0],w=O[1],N=Object(y.a)(p,t),P=Object(C.a)(e.container),A=Object(C.a)(e.target),_=Object(o.useState)(!e.show),T=_[0],R=_[1],U=Object(v.a)(A,f,Object(k.a)({placement:a,enableEvents:!!e.show,containerPadding:i||5,flip:n,offset:r,arrowElement:m,popperConfig:d})),G=U.styles,B=U.attributes,D=Object(b.a)(U,["styles","attributes"]);e.show?T&&R(!1):e.transition||T||R(!0);var z=e.show||u&&!T;if(Object(E.a)(f,e.onHide,{disabled:!e.rootClose||e.rootCloseDisabled,clickTrigger:e.rootCloseEvent}),!z)return null;var F=e.children(Object(j.a)({},D,{show:!!e.show,props:Object(j.a)({},B.popper,{style:G.popper,ref:N}),arrowProps:Object(j.a)({},B.arrow,{style:G.arrow,ref:w})}));if(u){var I=e.onExit,S=e.onExiting,W=e.onEnter,H=e.onEntering,X=e.onEntered;F=s.a.createElement(u,{in:e.show,appear:!0,onExit:I,onExiting:S,onExited:function(){R(!0),e.onExited&&e.onExited.apply(e,arguments)},onEnter:W,onEntering:H,onEntered:X},F)}return P?x.a.createPortal(F,P):null}));N.displayName="Overlay",N.propTypes={show:O.a.bool,placement:O.a.oneOf(w.h),target:O.a.any,container:O.a.any,flip:O.a.bool,children:O.a.func.isRequired,containerPadding:O.a.number,popperConfig:O.a.object,rootClose:O.a.bool,rootCloseEvent:O.a.oneOf(["click","mousedown"]),rootCloseDisabled:O.a.bool,onHide:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a;return e.rootClose?(a=O.a.func).isRequired.apply(a,[e].concat(n)):O.a.func.apply(O.a,[e].concat(n))},transition:O.a.elementType,onEnter:O.a.func,onEntering:O.a.func,onEntered:O.a.func,onExit:O.a.func,onExiting:O.a.func,onExited:O.a.func};var P=N,A=n(157),_=n(120),T={transition:_.a,rootClose:!1,show:!1,placement:"top"};function R(e){var t=e.children,n=e.transition,c=e.popperConfig,i=void 0===c?{}:c,l=Object(a.a)(e,["children","transition","popperConfig"]),u=Object(o.useRef)({}),h=Object(A.a)(),j=h[0],b=h[1],p=!0===n?_.a:n||null;return s.a.createElement(P,Object(r.a)({},l,{ref:j,popperConfig:Object(r.a)({},i,{modifiers:b.concat(i.modifiers||[])}),transition:p}),(function(e){var c,i=e.props,o=e.arrowProps,l=e.show,h=e.update,j=(e.forceUpdate,e.placement),b=e.state,p=Object(a.a)(e,["props","arrowProps","show","update","forceUpdate","placement","state"]);!function(e,t){var n=e.ref,r=t.ref;e.ref=n.__wrapped||(n.__wrapped=function(e){return n(Object(d.a)(e))}),t.ref=r.__wrapped||(r.__wrapped=function(e){return r(Object(d.a)(e))})}(i,o);var O=Object.assign(u.current,{state:b,scheduleUpdate:h,placement:j,outOfBoundaries:(null==b||null==(c=b.modifiersData.hide)?void 0:c.isReferenceHidden)||!1});return"function"===typeof t?t(Object(r.a)({},p,i,{placement:j,show:l},!n&&l&&{className:"show"},{popper:O,arrowProps:o})):s.a.cloneElement(t,Object(r.a)({},p,i,{placement:j,arrowProps:o,popper:O,className:f()(t.props.className,!n&&l&&"show"),style:Object(r.a)({},t.props.style,i.style)}))}))}R.defaultProps=T;var U=R,G=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){return this.props.children},t}(s.a.Component);function B(e,t,n){var r=t[0],a=r.currentTarget,c=r.relatedTarget||r.nativeEvent[n];c&&c===a||Object(i.a)(a,c)||e.apply(void 0,t)}function D(e){var t=e.trigger,n=e.overlay,c=e.children,i=e.popperConfig,h=void 0===i?{}:i,f=e.show,j=e.defaultShow,b=void 0!==j&&j,p=e.onToggle,O=e.delay,m=e.placement,x=e.flip,g=void 0===x?m&&-1!==m.indexOf("auto"):x,y=Object(a.a)(e,["trigger","overlay","children","popperConfig","show","defaultShow","onToggle","delay","placement","flip"]),w=Object(o.useRef)(null),v=Object(l.a)(),E=Object(o.useRef)(""),C=Object(u.b)(f,b,p),k=C[0],N=C[1],P=function(e){return e&&"object"===typeof e?e:{show:e,hide:e}}(O),A="function"!==typeof c?s.a.Children.only(c).props:{},_=A.onFocus,T=A.onBlur,R=A.onClick,D=Object(o.useCallback)((function(){return Object(d.a)(w.current)}),[]),z=Object(o.useCallback)((function(){v.clear(),E.current="show",P.show?v.set((function(){"show"===E.current&&N(!0)}),P.show):N(!0)}),[P.show,N,v]),F=Object(o.useCallback)((function(){v.clear(),E.current="hide",P.hide?v.set((function(){"hide"===E.current&&N(!1)}),P.hide):N(!1)}),[P.hide,N,v]),I=Object(o.useCallback)((function(){z();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==_||_.apply(void 0,t)}),[z,_]),S=Object(o.useCallback)((function(){F();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];null==T||T.apply(void 0,t)}),[F,T]),W=Object(o.useCallback)((function(){N(!k),R&&R.apply(void 0,arguments)}),[R,N,k]),H=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];B(z,t,"fromElement")}),[z]),X=Object(o.useCallback)((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];B(F,t,"toElement")}),[F]),L=null==t?[]:[].concat(t),q={};return-1!==L.indexOf("click")&&(q.onClick=W),-1!==L.indexOf("focus")&&(q.onFocus=I,q.onBlur=S),-1!==L.indexOf("hover")&&(q.onMouseOver=H,q.onMouseOut=X),s.a.createElement(s.a.Fragment,null,"function"===typeof c?c(Object(r.a)({},q,{ref:w})):s.a.createElement(G,{ref:w},Object(o.cloneElement)(c,q)),s.a.createElement(U,Object(r.a)({},y,{show:k,onHide:F,flip:g,placement:m,popperConfig:h,target:D}),n))}D.defaultProps={defaultShow:!1,trigger:["hover","focus"]};t.a=D},120:function(e,t,n){"use strict";var r,a=n(2),c=n(4),i=n(5),o=n.n(i),s=n(0),l=n.n(s),d=n(26),u=n(57),h=n(56),f=((r={})[d.b]="show",r[d.a]="show",r),j=l.a.forwardRef((function(e,t){var n=e.className,r=e.children,i=Object(c.a)(e,["className","children"]),j=Object(s.useCallback)((function(e){Object(h.a)(e),i.onEnter&&i.onEnter(e)}),[i]);return l.a.createElement(d.e,Object(a.a)({ref:t,addEndListener:u.a},i,{onEnter:j}),(function(e,t){return l.a.cloneElement(r,Object(a.a)({},t,{className:o()("fade",n,r.props.className,f[e])}))}))}));j.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},j.displayName="Fade",t.a=j},129:function(e,t,n){"use strict";function r(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}n.d(t,"a",(function(){return r}))},130:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(0),a=n(131),c=n(143),i=Math.pow(2,31)-1;function o(e,t,n){var r=n-Date.now();e.current=r<=i?setTimeout(t,r):setTimeout((function(){return o(e,t,n)}),i)}function s(){var e=Object(a.a)(),t=Object(r.useRef)();return Object(c.a)((function(){return clearTimeout(t.current)})),Object(r.useMemo)((function(){var n=function(){return clearTimeout(t.current)};return{set:function(r,a){void 0===a&&(a=0),e()&&(n(),a<=i?t.current=setTimeout(r,a):o(t,r,Date.now()+a))},clear:n}}),[])}},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){var e=Object(r.useRef)(!0),t=Object(r.useRef)((function(){return e.current}));return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),t.current}},132:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(){return Object(r.useState)(null)}},133:function(e,t,n){"use strict";var r=n(2),a=n(4),c=n(5),i=n.n(c),o=n(0),s=n.n(o),l=n(7),d=s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.variant,o=e.pill,d=e.className,u=e.as,h=void 0===u?"span":u,f=Object(a.a)(e,["bsPrefix","variant","pill","className","as"]),j=Object(l.a)(n,"badge");return s.a.createElement(h,Object(r.a)({ref:t},f,{className:i()(d,j,o&&j+"-pill",c&&j+"-"+c)}))}));d.displayName="Badge",d.defaultProps={pill:!1},t.a=d},142:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,"a",(function(){return a}))},143:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0);function a(e){var t=function(e){var t=Object(r.useRef)(e);return t.current=e,t}(e);Object(r.useEffect)((function(){return function(){return t.current()}}),[])}},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(53),a=n(0),c=function(e){var t;return"undefined"===typeof document?null:null==e?Object(r.a)().body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),null!=(t=e)&&t.nodeType&&e||null)};function i(e,t){var n=Object(a.useState)((function(){return c(e)})),r=n[0],i=n[1];if(!r){var o=c(e);o&&i(o)}return Object(a.useEffect)((function(){t&&r&&t(r)}),[t,r]),Object(a.useEffect)((function(){var t=c(e);t!==r&&i(t)}),[e,r]),r}},148:function(e,t,n){"use strict";var r=n(119),a=n(116),c=n(1);t.a=function(e){var t=e.children;return Object(c.jsx)(r.a,{overlay:Object(c.jsx)(a.a,{children:"Work In Progress"}),children:Object(c.jsx)("span",{children:t})})}},149:function(e,t,n){"use strict";var r=n(2),a=n(4),c=n(5),i=n.n(c),o=n(0),s=n.n(o),l=n(3),d=n.n(l),u=n(7),h=(d.a.string,d.a.bool,d.a.bool,d.a.bool,d.a.bool,s.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,o=e.fluid,l=e.rounded,d=e.roundedCircle,h=e.thumbnail,f=Object(a.a)(e,["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"]);n=Object(u.a)(n,"img");var j=i()(o&&n+"-fluid",l&&"rounded",d&&"rounded-circle",h&&n+"-thumbnail");return s.a.createElement("img",Object(r.a)({ref:t},f,{className:i()(c,j)}))})));h.displayName="Image",h.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1},t.a=h},165:function(e,t,n){"use strict";function r(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}n.d(t,"a",(function(){return r}))},276:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return O}));var r=n(73),a=n(51),c=n(41),i=n(42),o=n(149),s=n(133),l=n(25),d=n(148),u=n.p+"static/media/art_editor.f440facc.png",h=n.p+"static/media/build_generator.d1120e05.png",f=n.p+"static/media/character_editor.4f98af14.png",j=n.p+"static/media/talent_scr.9d4af30a.png",b=n.p+"static/media/tools.2724d338.png",p=n(1);function O(e){return l.a.pageview("/home"),Object(p.jsx)(r.a,{className:"my-2",children:Object(p.jsx)(a.a,{children:Object(p.jsx)(c.a,{children:Object(p.jsxs)(i.a,{bg:"darkcontent",text:"lightfont",children:[Object(p.jsx)(i.a.Header,{children:"Welcome to Genshin Optimizer!"}),Object(p.jsxs)(i.a.Body,{children:[Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(p.jsx)(i.a.Body,{children:Object(p.jsx)(a.a,{children:Object(p.jsxs)(c.a,{children:[Object(p.jsx)("h5",{children:"What is Genshin Optimizer?"}),Object(p.jsxs)("p",{children:["Genshin Optimizer is a tool for the action-rpg gacha game ",Object(p.jsx)("a",{href:"https://genshin.mihoyo.com/",target:"_blank",rel:"noreferrer",children:Object(p.jsx)("strong",{children:"Genshin Impact"})}),". It is intended to help you with dealing with the more complex aspect of the game: Artifacts. Artifacts are heavily RNG-based elements that directly contributes to how effective your characters are in the game. This tool seek to alleviate some of the complexity associated with artifact efficiency, along with which artifact to choose on your character to maximize your stats."]}),Object(p.jsx)("p",{children:"However, this tool can do so much more. It will allow calculations of all conditional stats from artifacts, weapons, teams buffs, and calculate how those stats will affect your character in REAL TIME."})]})})})}),Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(p.jsx)(i.a.Body,{children:Object(p.jsxs)(a.a,{children:[Object(p.jsx)(c.a,{xs:12,md:4,children:Object(p.jsx)(o.a,{src:u,className:"w-100 h-auto",rounded:!0})}),Object(p.jsxs)(c.a,{children:[Object(p.jsx)("h5",{children:"Artifact Editor"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Full featured Artifact editor."}),Object(p.jsx)("li",{children:"Add Artifacts by scanning a screenshot."}),Object(p.jsx)("li",{children:"Automatically calculate the exact rolled value of each artifact."}),Object(p.jsx)("li",{children:"Calculate substat efficiency, using the roll calculations. Use a single number to determine whether to keep or trash an artifact!"}),Object(p.jsx)("li",{children:"Equip/unequip/swap artifacts between your characters, try out different builds."})]})]})]})})}),Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(p.jsx)(i.a.Body,{children:Object(p.jsxs)(a.a,{children:[Object(p.jsxs)(c.a,{children:[Object(p.jsx)("h5",{children:"Character Editor"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Full featured Character editor."}),Object(p.jsx)("li",{children:"Automatically populate character stats at every milestone level/ascension."}),Object(p.jsx)("li",{children:"Fully editable stats for customization."}),Object(p.jsx)("li",{children:"Calculate current stats based on weapon/artifacts."}),Object(p.jsx)("li",{children:"Fully featured weapon, with milestone level/ascension stats"}),Object(p.jsx)("li",{children:"Apply conditional passives, e.g. Whiteblind's ATK&DEF stacking bonus, to your character stats."}),Object(p.jsx)("li",{children:"Apply conditional passives from Artifacts sets as well!"}),Object(p.jsx)("li",{children:"Under Construction Talent damage calculations."}),Object(p.jsx)("li",{children:"Under Construction Update character stats/talents based on constellation."})]})]}),Object(p.jsx)(c.a,{xs:12,md:4,children:Object(p.jsx)(o.a,{src:f,className:"w-100 h-auto",rounded:!0})})]})})}),Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(p.jsx)(i.a.Body,{children:Object(p.jsxs)(a.a,{children:[Object(p.jsx)(c.a,{xs:12,md:4,children:Object(p.jsx)(o.a,{src:j,className:"w-100 h-auto",rounded:!0})}),Object(p.jsxs)(c.a,{children:[Object(p.jsx)("h5",{children:"Character Damage Calculations"}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["All the details for Every ",Object(p.jsx)(d.a,{children:Object(p.jsx)(s.a,{variant:"warning",children:"WIP"})})," character's talents."]}),Object(p.jsx)("li",{children:"All numbers should reflect real in game damage."}),Object(p.jsx)("li",{children:"Conditional stats and modifications from every Constellation accounted for."}),Object(p.jsx)("li",{children:"Shows calculations for all the numbers, along with formulas. I show my work."}),Object(p.jsx)("li",{children:"Enemy editor with level/ resistance fields to customize damage calcualtions."}),Object(p.jsx)("li",{children:"Account for elemental infusion for normal/charged/plunging attacks."}),Object(p.jsx)("li",{children:"Real time damage calculations."})]})]})]})})}),Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(p.jsx)(i.a.Body,{children:Object(p.jsxs)(a.a,{children:[Object(p.jsxs)(c.a,{children:[Object(p.jsx)("h5",{children:"Build Generator"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Generator builds for specific characters using artifacts added by user."}),Object(p.jsx)("li",{children:"Limit the builds by artifact sets, main stats..."}),Object(p.jsx)("li",{children:"Sort the generated builds by a specific stat for maximization."}),Object(p.jsx)("li",{children:"Generator will not pick up artifacts already equipped on a differnt character."}),Object(p.jsx)("li",{children:"Compare generated artifact build against artifact currently on character."}),Object(p.jsx)("li",{children:"Use conditional stats from artifact sets, e.g. Gladitator's 4-set normal attack DMG Bonus, as part of the build calculations."})]})]}),Object(p.jsx)(c.a,{xs:12,md:4,children:Object(p.jsx)(o.a,{src:h,className:"w-100 h-auto",rounded:!0})})]})})}),Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(p.jsx)(i.a.Body,{children:Object(p.jsxs)(a.a,{children:[Object(p.jsx)(c.a,{xs:12,md:4,children:Object(p.jsx)(o.a,{src:b,className:"w-100 h-auto",rounded:!0})}),Object(p.jsxs)(c.a,{children:[Object(p.jsx)("h5",{children:"Tools and Doodads"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Server time, with countdown to reset."}),Object(p.jsx)("li",{children:"Resin Counter."}),Object(p.jsx)("li",{children:"Experience Calculator, to optimize EXP. books usage."}),Object(p.jsxs)("li",{children:[Object(p.jsx)(s.a,{variant:"warning",children:"Under Construction"})," Resource Coverter, for all those pesky x3 tiered resources."]}),Object(p.jsxs)("li",{children:[Object(p.jsx)(s.a,{variant:"warning",children:"Under Construction"})," To-Do list: a dynamic to-do list to tell you what to grind for every day"]})]})]})]})})}),Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(p.jsx)(i.a.Body,{children:Object(p.jsxs)(a.a,{children:[Object(p.jsxs)(c.a,{xs:12,md:6,children:[Object(p.jsx)("h5",{children:"What's for the future?"}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("li",{children:"Full talent/constellation calculations for every released character."}),Object(p.jsx)("li",{children:"Saving multiple artifact builds per character, for comparasion."}),Object(p.jsx)("li",{children:"Food buffs, team buffs."}),Object(p.jsx)("li",{children:"Resource planning to see artifact/character/weapon commitment costs."}),Object(p.jsx)("li",{children:"Artifact Analytics, graphs to show your artifact data."})]}),Object(p.jsxs)("p",{children:["For more, and to check on what is being worked on, join our ",Object(p.jsx)("a",{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord."})]})]}),Object(p.jsxs)(c.a,{xs:12,md:6,children:[Object(p.jsx)("h5",{children:"Want to help the developer?"}),Object(p.jsxs)("p",{children:["Genshin Optimizer has been the manifestation of many days and weeks of sleepless nights, and the developer is still actively trying to improve and add features. If you want to give feedback, request a feature, report a bug, please join our ",Object(p.jsx)("a",{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord."})]}),Object(p.jsxs)("p",{children:["If you want to fiancially support the developer, please either donate via ",Object(p.jsx)("a",{href:"https://www.paypal.com/donate?hosted_button_id=WAHN2DGLCXPZW",target:"_blank",rel:"noreferrer",children:"Paypal"})," or ",Object(p.jsx)("a",{href:"https://www.patreon.com/frzyc",target:"_blank",rel:"noreferrer",children:"Patreon"}),"."]})]})]})})}),Object(p.jsx)(i.a,{bg:"lightcontent",text:"lightfont",children:Object(p.jsxs)(i.a.Body,{children:[Object(p.jsx)("h5",{children:"Credit where credit is due"}),Object(p.jsx)("p",{children:"GO would not be where it is where all these sources/people. Time to take a bow and thank them."}),Object(p.jsxs)("ul",{children:[Object(p.jsxs)("li",{children:["Thanks to everyone in the community, and especially people on our ",Object(p.jsx)("a",{href:"https://discord.gg/CXUbQXyfUs",target:"_blank",rel:"noreferrer",children:"discord"})," for providing feedback and helping me improve this tool."]}),Object(p.jsxs)("li",{children:["Thanks to ",Object(p.jsx)("a",{href:"https://genshin.honeyhunterworld.com/",target:"_blank",rel:"noreferrer",children:"Honey Impact"}),", for giving us a reliable, consistent source for data and numbers. All our calculations would be moot without them."]}),Object(p.jsxs)("li",{children:["A healthy percent of our Genshin images are yoinked from ",Object(p.jsx)("a",{href:"https://genshin-impact.fandom.com/",target:"_blank",rel:"noreferrer",children:"The Genshin Impact Wiki"}),", so a serendipitous thanks for them."]}),Object(p.jsx)("li",{children:"Special thanks to members of our community who has gone the extra file, and has been helping us test formulas by recording in-game data, and people who has helped us with source code contributions."}),Object(p.jsx)("li",{children:"Thanks for everyone else, for sharing this tool, and getting more people to use this tool."}),Object(p.jsxs)("li",{children:["Lastly, and most importantly, thank ",Object(p.jsx)("b",{children:"YOU"}),", for using GO right now."]})]})]})})]})]})})})})}}}]);
//# sourceMappingURL=15.f6256e3b.chunk.js.map