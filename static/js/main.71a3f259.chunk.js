(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),r=n(8),s=n.n(r),o=n(2),c=n(3),l=n(6),u=n(4),v=n(5),d=n(1),m=(n(14),function(){return a.a.createElement("div",{id:"header"},a.a.createElement("div",{className:"custom-row"},a.a.createElement("h1",null,"Azure solution architectures"),a.a.createElement("p",null,"Architectures to help you design and implement secure, highly-available, performant and resilient solutions on Azure.")))}),p=(n(16),{1:{name:"Data Warehousing and Reporting",type:"some_type",levels:{1:{name:"Data Sources",isActive:!1,options:{111:{name:"Azure SQL DB",isActive:!1,parent_entities:[]},112:{name:"Stream Sources",isActive:!1,parent_entities:[]}}},2:{name:"Ingestion",isActive:!1,options:{111:{name:"Azure SQL DB",isActive:!1,parent_entities:["111"]},113:{name:"ADLS",isActive:!1,parent_entities:["111"]},114:{name:"Event Hub",isActive:!1,parent_entities:["112"]}}},3:{name:"Staging",isActive:!1,options:{111:{name:"Azure SQL DB",isActive:!1,parent_entities:["111","113"]},115:{name:"ADW",isActive:!1,parent_entities:["111","113"]},116:{name:"AML",isActive:!1,parent_entities:["111","114","113"]},117:{name:"Cognitive Services",isActive:!1,parent_entities:["111","114","113"]},118:{name:"HD Insights",isActive:!1,parent_entities:["111","114"]},119:{name:"Stream Analytics",isActive:!1,parent_entities:["114"]}}},4:{name:"Publishing",isActive:!1,options:{111:{name:"Azure SQL DB",isActive:!1,parent_entities:["111","116","117"]},115:{name:"ADW",isActive:!1,parent_entities:["115","116","117","118","119"]},116:{name:"AML Web Services",isActive:!1,parent_entities:["115","116","117","118","119"]},121:{name:"Cloud Services",isActive:!1,parent_entities:["115","116","117","118","119"]}}},5:{name:"Consumption",isActive:!1,options:{122:{name:"Power BI",isActive:!1,parent_entities:["116","111","115","121"]},123:{name:"HTML Reports",isActive:!1,parent_entities:["116","111","115","121"]}}}}}}),h={1:{1:[{question:"Do you need Realtime Streaming or something similar to SQL DB will do?",choices:"Non Realtime|Realtime",id:"1"}],2:[{question:"Do you need a single store for file system and object data?",choices:"Yes|No",id:"2"}],3:[{question:"Do you need to embrace the power of Cognitive services?",choices:"Yes|No",id:"4"}],4:[{question:"Do you want to apply machine learning on your data?",choices:"Yes|No",id:"3"}],5:[{question:"Is there a need to consume data from multiple sources and report it without much development effort?",choices:"Yes|No",id:"5"}]}},b={1:{111:"Non Realtime",112:"Realtime"},2:{113:"Yes"},3:{116:"Yes"},4:{117:"Yes"},5:{122:"Yes"}},f={1:"Data Warehousing and Reporting"},y=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderSolutionlist=n.renderSolutionlist.bind(Object(d.a)(Object(d.a)(n))),n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"renderSolutionlist",value:function(e){return Object.keys(e).map(function(t){return a.a.createElement("option",{value:t,key:t},e[t])})}},{key:"render",value:function(){return a.a.createElement("div",{id:"filters"},a.a.createElement("label",{htmlFor:"architecture-solutions"},a.a.createElement("b",null,"Solutions"))," ",a.a.createElement("br",null),a.a.createElement("select",{id:"architecture-solutions",ref:this.props.selectRef,onChange:this.props.selectArchitectureType},this.renderSolutionlist(f)),a.a.createElement("button",{onClick:this.props.resetState},"Reset"))}}]),t}(i.Component),A=function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(v.a)(t,e),Object(c.a)(t,[{key:"renderQuestions",value:function(e){var t=this,n=e.questionsObj,i=e.activeQuestion,r=0;return Object.keys(n).map(function(e){return n[e].map(function(n,s){return r+=1,a.a.createElement("div",{key:s,className:i+1==r?"question":"disable question","data-id":n.id,"data-level":e},a.a.createElement("span",null,r,"."),a.a.createElement("span",{className:"question-title"},n.question),t.renderChoices(n,r,i))})})}},{key:"renderChoices",value:function(e,t,n){var i=this;return e.choices.split("|").map(function(r,s){return a.a.createElement("div",{className:"option",key:e.id+s},0===n?a.a.createElement("input",{type:"radio",id:e.id+s,name:t,onChange:i.props.onOptionSelectHandler,checked:!1}):a.a.createElement("input",{type:"radio",id:e.id+s,name:t,onChange:i.props.onOptionSelectHandler}),a.a.createElement("label",{htmlFor:e.id+s,className:"pointer"},r))})}},{key:"render",value:function(){return a.a.createElement("div",{id:"questions-container"},this.renderQuestions(this.props))}}]),t}(i.Component),O=(n(18),function(e){function t(e){return Object(o.a)(this,t),Object(l.a)(this,Object(u.a)(t).call(this,e))}return Object(v.a)(t,e),Object(c.a)(t,[{key:"renderEntities",value:function(e){var t=[];for(var n in e){var i=a.a.createElement("div",{key:n,className:e[n].isActive?"show":"hide"},e[n].name);t.push(i)}return t}},{key:"render",value:function(){var e=this.props,t=e.levelData,n=e.showLevel,i=e.levelId;return a.a.createElement("div",{className:n?"show outer-box":"hide outer-box"},a.a.createElement("div",{className:"inner-box"},this.renderEntities(t.options)),a.a.createElement("span",{className:"layer-name"},a.a.createElement("b",null,t.name)),"5"!==i?a.a.createElement("span",{className:"arrow"},"-----\x3e"):"")}}]),t}(i.Component)),j=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).renderLayerBox=n.renderLayerBox.bind(Object(d.a)(Object(d.a)(n))),n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"renderLayerBox",value:function(e){var t=[],n=e.architectureDataObj.levels;for(var i in n)t.push(a.a.createElement(O,{key:i,levelId:i,levelData:n[i],showLevel:n[i].isActive}));return t}},{key:"render",value:function(){return a.a.createElement("div",{id:"diagram-container"},a.a.createElement("div",{id:"diagram-wrapper"},this.renderLayerBox(this.props)))}}]),t}(i.Component),S=(n(20),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={activeQuestion:0},n.activeLevel="",n.onOptionSelectHandler=n.onOptionSelectHandler.bind(Object(d.a)(Object(d.a)(n))),n.questionCount=0,n}return Object(v.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({activeQuestion:e.activeQuestion})}},{key:"onOptionSelectHandler",value:function(e){var t=this,n=this.props,i=n.architectureDataObj,a=n.filterAzureIdentityMapping;this.activeLevel=e.target.closest(".question").getAttribute("data-level");var r=e.target.closest(".question").getAttribute("data-id"),s=e.target.nextElementSibling.innerHTML,o=a[r],c=[],l=[];for(var u in console.log(e.target.checked),o)o[u]===s?c.push(u):l.push(u);for(var v in i.levels)if(v===this.activeLevel){i.levels[v].isActive=!0;break}var d=i.levels;for(var m in d){var p=d[m].options,h=parseInt(m)-1;if(m==this.activeLevel)if(0===c.length)for(var b in p)if(l.includes(b))p[b].isActive=!1;else{var f=!0,y=!1,A=void 0;try{for(var O,j=p[b].parent_entities[Symbol.iterator]();!(f=(O=j.next()).done);f=!0){var S=O.value;if(d[h].options[S].isActive){p[b].isActive=!0;break}p[b].isActive=!1}}catch(_){y=!0,A=_}finally{try{f||null==j.return||j.return()}finally{if(y)throw A}}}else for(var E in p)c.includes(E)?p[E].isActive=!0:p[E].isActive=!1;else if(m>this.activeLevel)for(var g in p){var k=!0,w=!1,D=void 0;try{for(var q,C=p[g].parent_entities[Symbol.iterator]();!(k=(q=C.next()).done);k=!0){var L=q.value;if(d[h].options[L].isActive){p[g].isActive=!0;break}p[g].isActive=!1}}catch(_){w=!0,D=_}finally{try{k||null==C.return||C.return()}finally{if(w)throw D}}}}this.questionCount=parseInt(e.target.name),this.setState({activeQuestion:this.questionCount}),setTimeout(function(){5===t.questionCount&&(alert("Architecture is complete. Happy hunting"),t.questionCount=0)},1e3)}},{key:"render",value:function(){var e=this.props,t=e.questionsObj,n=e.architectureDataObj;return a.a.createElement("div",{id:"workspace"},a.a.createElement(A,{questionsObj:t,activeQuestion:this.state.activeQuestion,onOptionSelectHandler:this.onOptionSelectHandler}),a.a.createElement(j,{architectureDataObj:n}))}}]),t}(i.Component)),E=(n(22),function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(l.a)(this,Object(u.a)(t).call(this))).state={selectedSolutionId:"1"},e.selectedNode=a.a.createRef(),e.selectArchitectureType=e.selectArchitectureType.bind(Object(d.a)(Object(d.a)(e))),e.resetState=e.resetState.bind(Object(d.a)(Object(d.a)(e))),e}return Object(v.a)(t,e),Object(c.a)(t,[{key:"selectArchitectureType",value:function(){var e=this.selectedNode.current.value;this.setState({selectedSolutionId:e})}},{key:"resetState",value:function(){var e=p[1].levels;for(var t in p[1].levels)for(var n in e[t].isActive=!1,e[t].option)n.isActive=!1;this.setState({selectedSolutionId:1})}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m,null),a.a.createElement(y,{selectRef:this.selectedNode,selectArchitectureType:this.selectArchitectureType,resetState:this.resetState}),a.a.createElement(S,{architectureDataObj:p[this.state.selectedSolutionId],filterAzureIdentityMapping:b,questionsObj:h[this.state.selectedSolutionId],activeQuestion:0}))}}]),t}(i.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,2,1]]]);
//# sourceMappingURL=main.71a3f259.chunk.js.map