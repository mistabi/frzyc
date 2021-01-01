(this["webpackJsonpgenshin-optimizer"]=this["webpackJsonpgenshin-optimizer"]||[]).push([[10],{212:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return H}));var n=a(2),r=a(80),c=a(82),i=a(86),s=a(98),l=a(97),o=a(83),d=a(23),u=a(0),j=a.n(u),f=a(194),b=a(202),h=a(201),m=a(32),O=a(41),x=a(30),g=a(160),S=a(158),y=a(103),v=a(214),p=a(207),k=a(55),C=a(17);function B(){return new Worker(a.p+"static/js/BuildWorker.9a7937ac.worker.js")}var I=a(93),N=a(96),w=a(94),A=a(150),F=a(89),K=a(154),T=a(126),E=a(100),_=a(107),M=a(87),D=a(115),G=a(85),P=a(88),W=a(95),U=function(){function t(){Object(c.a)(this,t)}return Object(i.a)(t,null,[{key:"splitArtifactsBySlot",value:function(t){var e={},a=function(a){e[a]=Object.values(t).filter((function(t){return t.slotKey===a}))};for(var n in E.d)a(n);return e}},{key:"generateAllPossibleArtifactSetPerm",value:function(t){var e=t.filter((function(t){return t.key})).map((function(t){return t.key}));t.reduce((function(t,e){return e.key?t+e.num:t}),0)<5&&e.push("Other");var a=[],n=I.a.getArtifactSlotKeys();return function r(c,i){if(c>=n.length){var s={};Object.values(i).forEach((function(t){s[t]?s[t]+=1:s[t]=1}));var l,o=!0,d=Object(W.a)(t);try{for(d.s();!(l=d.n()).done;){var u=l.value;if(u.key&&(!s[u.key]||s[u.key]<u.num)){o=!1;break}}}catch(f){d.e(f)}finally{d.f()}o&&a.push(i)}else{var j=n[c];e.forEach((function(t){("Other"===t||E.c[t]&&E.c[t].pieces&&Object.keys(E.c[t].pieces).includes(j))&&(i[j]=t,r(c+1,Object(P.a)({},i)))}))}}(0,{}),a}},{key:"calculateTotalBuildNumber",value:function(t,e,a){var n=a.filter((function(t){return t.key})).map((function(t){return t.key})),c={};return Object.entries(t).forEach((function(t){var e=Object(r.a)(t,2),a=e[0],i=e[1],s={};i.forEach((function(t){n.includes(t.setKey)?s[t.setKey]=(s[t.setKey]||0)+1:s.Other=(s.Other||0)+1})),c[a]=s})),e.reduce((function(t,e){return t+Object.entries(e).reduce((function(t,e){var a=Object(r.a)(e,2),n=a[0],i=a[1];return c[n]&&c[n][i]?t*c[n][i]:0}),1)}),0)}}]),t}(),H=function(t){Object(s.a)(a,t);var e=Object(l.a)(a);function a(t){var i;if(Object(c.a)(this,a),(i=e.call(this,t)).forceUpdateBuildDisplay=function(){return i.forceUpdate()},i.statsDisplayKeys=function(){return["hp","atk","def","ele_mas","crit_rate","crit_dmg","heal_bonu","ener_rech","phy_dmg","ele_dmg","phy_avg_dmg","ele_avg_dmg"]},i.splitArtifacts=function(){if(!i.state.selectedCharacterId)return{};var t=N.a.getArtifactDatabase();if(Object.entries(t).forEach((function(e){var a=Object(r.a)(e,2),n=a[0],c=a[1];c.lock&&delete t[n],i.state.selectedCharacterId&&c.location&&c.location!==i.state.selectedCharacterId&&delete t[n]})),i.state.setFilters.every((function(t){return t.key}))){var e=i.state.setFilters.map((function(t){return t.key}));Object.entries(t).forEach((function(a){var n=Object(r.a)(a,2),c=n[0],i=n[1];e.includes(i.setKey)&&delete t[c]}))}var n=U.splitArtifactsBySlot(t);return a.artifactsSlotsToSelectMainStats.forEach((function(t,e){return i.state.mainStat[e]&&(n[t]=n[t].filter((function(t){return t.mainStatKey===i.state.mainStat[e]})))})),n},i.changeMainStat=function(t,e){i.setState((function(a){var n=Object(G.e)(a.mainStat);return n[t]=e,{mainStat:n}}))},i.changeSetFilterKey=function(t,e,a){return i.setState((function(n){var r=n.setFilters[t].key;if(r!==e){var c=n.artifactConditionals?n.artifactConditionals.filter((function(t){return t.setKey!==r})):[],i=n.setFilters,s=0;return a&&a[0]&&(s=parseInt(a[0])),i[t]={key:e,num:s},{setFilters:i,artifactConditionals:c}}}))},i.dropdownitemsForStar=function(t,e){return I.a.getArtifactSetsByMaxStarEntries(t).map((function(t){var a=Object(r.a)(t,2),c=a[0],s=a[1];if(i.state.setFilters.some((function(t){return t.key===c})))return!1;var l=Object.keys(I.a.getArtifactSets(c)),o=i.state.setFilters.reduce((function(t,a,n){return a.key&&n!==e?t+a.num:t}),0);return!l.every((function(t){return parseInt(t)+o>5}))&&Object(n.jsx)(f.a.Item,{onClick:function(){return i.changeSetFilterKey(e,c,l)},children:s.name},c)}))},i.generateBuilds=function(t,e){i.setState({generatingBuilds:!0,builds:[]});var a=i.state,n=a.setFilters,r=a.asending,c=a.buildFilterKey,s=a.maxBuildsToShow,l=a.artifactConditionals,o=F.a.getCharacter(i.state.selectedCharacterId),d=w.a.calculateCharacterWithWeaponStats(o),u=I.a.getAllArtifactSetEffectsObj(l),j=Object(G.e)(t);Object.values(j).forEach((function(t){t.forEach((function(t){t.mainStatVal=I.a.getMainStatValue(t.mainStatKey,t.numStars,t.level)}))}));var f=Object(M.b)(c),b={splitArtifacts:j,artifactSetPerms:e,initialStats:d,artifactSetEffects:u,depdendencyStatKeys:f,setFilters:n,maxBuildsToShow:s,buildFilterKey:c,asending:r};i.worker&&i.worker.terminate(),i.worker=new B,i.worker.onmessage=function(a){C.a.timing({category:"Build Generation",variable:"timing",value:a.data.timing,label:U.calculateTotalBuildNumber(t,e,i.state.setFilters)});var n=a.data.builds.map((function(t){return w.a.calculateBuildWithObjs(l,d,t.artifacts)}));i.setState({builds:n,generatingBuilds:!1}),i.worker.terminate(),delete i.worker},i.worker.postMessage(b)},i.BuildGeneratorEditorCard=function(t){var e=F.a.getCharacterDatabase(),c=F.a.getCharacter(i.state.selectedCharacterId),s=c?c.name:"Character Name",l=i.state.setFilters.reduce((function(t,e){return e.key?t+e.num:t}),0),u=i.splitArtifacts(),j=U.generateAllPossibleArtifactSetPerm(i.state.setFilters),v=U.calculateTotalBuildNumber(u,j,i.state.setFilters),p=0===v?Object(n.jsx)(b.a,{variant:"warning",className:"mb-0",children:Object(n.jsxs)("span",{children:["Current configuration will not generate any builds for ",Object(n.jsx)("b",{children:s}),". Please change your Artifact configurations, or add/unlock more Artifacts."]})}):v>i.state.maxBuildsToGenerate?Object(n.jsx)(b.a,{variant:"danger",className:"mb-0",children:Object(n.jsxs)("span",{children:["Current configuration will generate ",Object(n.jsx)("b",{children:v})," builds for ",Object(n.jsx)("b",{children:s}),". Please restrict artifact configuration to reduce builds to less than ",i.state.maxBuildsToGenerate,", or your browser might crash."]})}):Object(n.jsx)(b.a,{variant:"success",className:"mb-0",children:Object(n.jsxs)("span",{children:["Current configuration will generate ",Object(n.jsx)("b",{children:v})," builds for ",Object(n.jsx)("b",{children:s}),"."]})}),k=Object(n.jsxs)(h.a,{title:i.state.selectedCharacterId?s:"Select Character",children:[Object(n.jsx)(f.a.Item,{onClick:function(){return i.setState({selectedCharacterId:"",builds:[]})},children:"No Character"}),Object.values(e).map((function(t,e){return Object(n.jsx)(f.a.Item,{onClick:function(){return i.setState({selectedCharacterId:t.id,builds:[]})},children:t.name},t.name+e)}))]});return Object(n.jsxs)(m.a,{bg:"darkcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:"Build Generator"}),Object(n.jsxs)(m.a.Body,{children:[Object(n.jsxs)(O.a,{children:[Object(n.jsxs)(x.a,{xs:12,lg:6,className:"mb-2",children:[i.state.selectedCharacterId?Object(n.jsx)(A.a,{header:k,characterId:i.state.selectedCharacterId,bg:"lightcontent",footer:!1,cardClassName:"mb-2"}):Object(n.jsx)(m.a,{bg:"lightcontent",text:"lightfont",className:"mb-2",children:Object(n.jsx)(m.a.Header,{children:k})}),Object(n.jsxs)(m.a,{bg:"lightcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:"Artifact Main Stat (Optional)"}),Object(n.jsx)(m.a.Body,{children:a.artifactsSlotsToSelectMainStats.map((function(t,e){return Object(n.jsxs)("div",{className:"text-inline mb-1 d-flex justify-content-between",children:[Object(n.jsx)("h6",{className:"d-inline mr-2",children:I.a.getArtifactSlotNameWithIcon(t)}),Object(n.jsxs)(h.a,{title:i.state.mainStat[e]?M.c.getStatNameWithPercent(i.state.mainStat[e]):"Select a mainstat",className:"d-inline",children:[Object(n.jsx)(f.a.Item,{onClick:function(){return i.changeMainStat(e,"")},children:"No MainStat"}),E.d[t].stats.map((function(t){return Object(n.jsx)(f.a.Item,{onClick:function(){return i.changeMainStat(e,t)},children:M.c.getStatNameWithPercent(t)},t)}))]})]},t)}))})]})]}),Object(n.jsx)(x.a,{xs:12,lg:6,className:"mb-2",children:Object(n.jsx)(O.a,{children:i.state.setFilters.map((function(t,e){var a=t.key,c=t.num,s=i.state.artifactConditionals;return Object(n.jsx)(x.a,{className:"mb-2",xs:12,children:Object(n.jsxs)(m.a,{className:"h-100",bg:"lightcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:Object(n.jsxs)(g.a,{children:[Object(n.jsxs)(h.a,{as:g.a,title:I.a.getArtifactSetName(t.key,"Set (Optional)"),children:[Object(n.jsx)(f.a.Item,{onClick:function(){return i.changeSetFilterKey(e,"")},children:"Unselect Artifact"}),Object(n.jsx)(f.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca"}),i.dropdownitemsForStar(5,e),Object(n.jsx)(f.a.Divider,{}),Object(n.jsx)(f.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca\ud83d\udfca"}),i.dropdownitemsForStar(4,e),Object(n.jsx)(f.a.Divider,{}),Object(n.jsx)(f.a.ItemText,{children:"Max Rarity \ud83d\udfca\ud83d\udfca\ud83d\udfca"}),i.dropdownitemsForStar(3,e)]}),Object(n.jsx)(h.a,{as:g.a,title:"".concat(t.num,"-set"),disabled:!t.key||l>=5,children:t.key&&I.a.getArtifactSetEffectsObj(t.key)&&Object.keys(I.a.getArtifactSetEffectsObj(t.key)).map((function(a){var r=i.state.setFilters.reduce((function(e,a){return a.key&&a.key!==t.key?e+a.num:e}),0);return parseInt(a)+r<=5&&Object(n.jsx)(f.a.Item,{onClick:function(){return i.setState((function(t){var n=Object(G.e)(t.setFilters);return n[e].num=parseInt(a),{setFilters:n}}))},children:"".concat(a,"-set")},a)}))})]})}),t.key?Object(n.jsx)(m.a.Body,{children:Object(n.jsx)(O.a,{children:Object.keys(I.a.getArtifactSets(a)).filter((function(t){return parseInt(t)<=c})).map((function(t){var e=I.a.getArtifactSetNumStats(a,t),c=0,l=I.a.getArtifactSetEffectConditional(a,t);if(l){c=D.a.getConditionalNum(s,a,t);var o=I.a.getArtifactConditionalStats(a,t,c);o&&(e||(e={}),Object.entries(o).forEach((function(t){var a=Object(r.a)(t,2),n=a[0],c=a[1];return e[n]=(e[n]||0)+c})))}var d=Object(n.jsx)(T.a,{conditional:l,conditionalNum:c,setConditional:function(e){return i.setState((function(n){return{artifactConditionals:D.a.setConditional(n.artifactConditionals,a,t,e)}}))},defEle:Object(n.jsxs)(S.a,{variant:"success",children:[t,"-Set"]})});return Object(n.jsxs)(x.a,{xs:12,className:"mb-2",children:[Object(n.jsxs)("h6",{children:[d," ",I.a.getArtifactSetEffectText(a,t)]}),e?Object(n.jsx)(O.a,{children:Object.entries(e).map((function(t){var e=Object(r.a)(t,2),a=e[0],c=e[1];return Object(n.jsxs)(x.a,{xs:12,children:[M.c.getStatName(a),": ",c,M.c.getStatUnit(a)]},a)}))}):null]},t)}))})}):null]})},e)}))})})]}),Object(n.jsx)(O.a,{className:"mb-2",children:Object(n.jsx)(x.a,{children:i.state.selectedCharacterId&&p})}),Object(n.jsxs)(O.a,{className:"d-flex justify-content-between",children:[Object(n.jsx)(x.a,{xs:"auto",children:Object(n.jsx)(y.a,{className:"h-100",disabled:!i.state.selectedCharacterId||v>i.state.maxBuildsToGenerate||i.state.generatingBuilds,variant:i.state.selectedCharacterId&&v<=i.state.maxBuildsToGenerate?"success":"danger",onClick:function(){return setTimeout((function(){i.generateBuilds(u,j)}),0)},children:Object(n.jsx)("span",{children:"Generate Builds"})})}),Object(n.jsx)(x.a,{xs:"auto",children:Object(n.jsxs)(g.a,{children:[Object(n.jsx)(h.a,{disabled:!i.state.selectedCharacterId,title:"Sort by ".concat(M.c.getStatNameWithPercent(i.state.buildFilterKey)),as:g.a,children:i.state.selectedCharacterId&&i.statsDisplayKeys().map((function(t){return"ele_dmg"!==t&&"ele_avg_dmg"!==t||(t="".concat(w.a.getElementalKey(c.characterKey),"_").concat(t)),Object(n.jsx)(f.a.Item,{onClick:function(){return i.setState({buildFilterKey:t})},children:M.c.getStatNameWithPercent(t)},t)}))}),Object(n.jsx)(y.a,{onClick:function(){return i.setState((function(t){return{asending:!t.asending}}))},children:Object(n.jsx)(d.a,{icon:i.state.asending?o.u:o.v,className:"fa-fw"})})]})})]})]})]})},i.ArtifactDisplayItem=function(t){var e=t.build,a=t.character;return Object(n.jsx)("div",{children:Object(n.jsxs)(v.a.Item,{variant:t.index%2?"customdark":"customdarker",className:"text-white",action:!0,onClick:function(){return i.setState({modalBuild:e})},children:[Object(n.jsx)(O.a,{children:Object(n.jsx)(x.a,{children:Object.entries(e.setToSlots).sort((function(t,e){var a=Object(r.a)(t,2),n=(a[0],a[1]),c=Object(r.a)(e,2);c[0];return c[1].length-n.length})).map((function(t){var e=Object(r.a)(t,2),a=e[0],c=e[1];return Object(n.jsxs)(S.a,{variant:"primary",className:"mr-2",children:[c.map((function(t){return I.a.getArtifactSlotIcon(t)}))," ",I.a.getArtifactSetName(a)]},a)}))})}),Object(n.jsx)(O.a,{children:i.statsDisplayKeys().map((function(t){var r;"ele_dmg"!==t&&"ele_avg_dmg"!==t||(t="".concat(w.a.getElementalKey(a.characterKey),"_").concat(t));var c=M.c.getStatUnit(t);return Object(n.jsx)(x.a,{className:"text-nowrap",xs:12,sm:6,md:4,lg:3,children:Object(n.jsxs)("span",{children:[M.c.getStatName(t),": ",Object(n.jsxs)("span",{className:"text-warning",children:[null===(r=e.finalStats[t])||void 0===r?void 0:r.toFixed(M.c.fixedUnit(t)),c]})]})},t)}))})]})})},i.BuildModal=function(t){var e=t.build,a=t.character;return e?Object(n.jsx)(p.a,{show:null!==i.state.modalBuild,onHide:function(){return i.setState({modalBuild:null})},size:"xl",dialogAs:k.a,className:"pt-3 pb-3",children:Object(n.jsx)(K.a,{characterToEdit:a,newBuild:e,onClose:function(){return i.setState({modalBuild:null})},forceUpdate:i.forceUpdateBuildDisplay})}):null},Object(_.a)(),i.state=a.getInitialState(),t.location.selectedCharacterId)i.state=a.getInitialState(),t.location.selectedCharacterId&&(i.state.selectedCharacterId=t.location.selectedCharacterId);else{var s=Object(G.i)("BuildsDisplay.state");if(s){var l=F.a.getCharacter(s.selectedCharacterId);s&&l&&(i.state=s)}}return C.a.pageview("/build"),i}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){var t=Object(G.e)(this.state);t.builds=[],delete t.generatingBuilds,delete t.modalBuild,Object(G.j)("BuildsDisplay.state",t)}},{key:"componentWillUnmount",value:function(){var t;null===(t=this.worker)||void 0===t||t.terminate(),delete this.worker}},{key:"render",value:function(){var t=this,e=F.a.getCharacter(this.state.selectedCharacterId),a=e?e.name:"Character Name";return Object(n.jsxs)(k.a,{children:[Object(n.jsx)(this.BuildModal,{build:this.state.modalBuild,character:e}),Object(n.jsx)(O.a,{className:"mt-2 mb-2",children:Object(n.jsx)(x.a,{children:Object(n.jsx)(this.BuildGeneratorEditorCard,{})})}),Object(n.jsx)(O.a,{className:"mb-2",children:Object(n.jsx)(x.a,{children:Object(n.jsxs)(m.a,{bg:"darkcontent",text:"lightfont",children:[Object(n.jsx)(m.a.Header,{children:this.state.selectedCharacterId?"Showing ".concat(this.state.builds.length," Builds generated for ").concat(a):"Select a character to generate builds."}),Object(n.jsx)(v.a,{children:this.state.builds.map((function(a,r){return r<t.state.maxBuildsToShow&&Object(n.jsx)(t.ArtifactDisplayItem,{build:a,character:e,index:r},Object.values(a.artifactIds).join("_"))}))})]})})})]})}}]),a}(j.a.Component);H.initialState={builds:[],generatingBuilds:!1,selectedCharacterId:"",sandsMainKey:"",gobletMainKey:"",circletMainkey:"",setFilters:[{key:"",num:0},{key:"",num:0},{key:"",num:0}],artifactConditionals:[],mainStat:["","",""],buildFilterKey:"atk",asending:!1,modalBuild:null,maxBuildsToShow:100,maxBuildsToGenerate:5e5},H.maxBuildsToShowList=[100,50,25,5],H.maxBuildsToGenerateList=[5e4,1e4,5e3,1e3,500,100],H.getInitialState=function(){return JSON.parse(JSON.stringify(H.initialState))},H.artifactsSlotsToSelectMainStats=["sands","goblet","circlet"]}}]);
//# sourceMappingURL=10.b9615341.chunk.js.map