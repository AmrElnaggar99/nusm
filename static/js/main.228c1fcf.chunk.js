(this.webpackJsonpnusum=this.webpackJsonpnusum||[]).push([[0],{14:function(e,t,a){},34:function(e,t,a){e.exports=a(50)},39:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);for(var n=a(0),s=a.n(n),r=a(17),o=a.n(r),c=(a(39),a(5)),l=a(6),i=a(8),u=a(7),m=a(51),p=a(30),E=(a(14),a(31)),h=a(12),d=a(13),y=[{id:1,name:"ECEN101"},{id:2,name:"ARTS108"},{id:3,name:"ECEN102"},{id:4,name:"ECEN203"},{id:5,name:"ENGL101"},{id:6,name:"ENGL102"},{id:7,name:"ENGL201"},{id:8,name:"ENGL202"},{id:9,name:"ENGR101"},{id:10,name:"ENGR102"}],N=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={selectedShips:[]},e.handleSelectionChange=function(t){e.setState({selectedShips:t})},e}return Object(l.a)(a,[{key:"handleDeselect",value:function(e){var t=this.state.selectedShips.slice();t.splice(e,1),this.setState({selectedShips:t})}},{key:"render",value:function(){var e=this,t=this.state.selectedShips;return s.a.createElement(s.a.Fragment,null,s.a.createElement(m.a,{md:4,lg:3},s.a.createElement("div",{className:"phone-collapse"},s.a.createElement("div",{className:"select-courses",style:{height:this.props.chooseCourses&&this.props.isPhone?"auto":"97vh"}},s.a.createElement("div",{className:"main-head"},s.a.createElement("h1",{className:"brand-text"},"NU Schedule Maker"),this.props.chooseCourses&&this.props.isPhone?s.a.createElement("button",{onClick:function(){return e.props.toggleChangeCourses()},className:"choose-courses-btn"},"Change Courses",s.a.createElement(h.a,{icon:d.a})):""),s.a.createElement("div",{className:"collapse-wrapper",style:{display:this.props.isPhone?this.props.chooseCourses?"none":"block":"auto"}},s.a.createElement("div",{className:"head-info"},s.a.createElement(E.a,null,s.a.createElement("div",{className:"cofigure-courses"},0===t.length&&s.a.createElement("small",{className:"notice text-center"},"Double click on courses bellow to select"),t.length>0&&s.a.createElement("div",null,s.a.createElement("div",{className:"slots-head"},s.a.createElement("b",null,"Slots per"),s.a.createElement("span",null,"LE"),s.a.createElement("span",null,"LAB"),s.a.createElement("span",null,"Tut")),s.a.createElement("ul",null,t.map((function(t,a){return s.a.createElement("li",{key:t.id},s.a.createElement("button",{type:"button",onClick:function(){return e.handleDeselect(a)}},"\xd7"),"".concat(t.name," "),s.a.createElement("div",{className:"slots-per"},s.a.createElement("input",{required:!0,type:"text",value:"2"}),s.a.createElement("input",{required:!0,type:"text",value:"1"}),s.a.createElement("input",{required:!0,type:"text",value:"1"})))}))))))),s.a.createElement("div",{className:"filter-form"},s.a.createElement("div",{className:"select-wrapper"},s.a.createElement(p.a,{onChange:this.handleSelectionChange,options:y,selectedOptions:t,textProp:"name",valueProp:"id"})),s.a.createElement("div",{className:"btn-container"},s.a.createElement("button",{onClick:function(){return e.props.toggleChangeCourses()},className:"btn btn-success done-button"},"DONE")),s.a.createElement("small",{className:"last-update-date"},"updated: ","July 17, 2020 08:45 PM")))))))}}]),a}(n.Component),C=a(53),v=a(52),f=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{style:{visibility:"empty"===this.props.course?"hidden":"visible"},className:"single-slot ".concat(this.props.color?this.props.color+"-card course-slot":""," ").concat(this.props.type?this.props.type+"-type":"")},this.props.course?this.props.course:"")}}]),a}(n.Component),g=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).slots=["8:30","9:30","10:30","11:30","12:30","1:30","2:30","3:30","4:30"],e.days=["sun","mon","tue","wed","thu"],e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"schedule-card"},s.a.createElement(v.a,null,this.props.timetable?"vertical"===this.props.layout?s.a.createElement(C.a,null,s.a.createElement(m.a,{className:"no-pad",xs:2},s.a.createElement(f,{key:Math.random(),type:"head"}),this.slots.map((function(e){return s.a.createElement(f,{type:"side",course:e,key:e})}))),this.days.map((function(t,a){return s.a.createElement(m.a,{className:"no-pad",key:a,xs:2},s.a.createElement(f,{type:"head",course:t,key:t}),e.props.timetable[t].map((function(t,a){var n=t;return"T"!==t[t.length-1]&&"L"!==t[t.length-1]||(n=t.substring(0,t.length-1)),s.a.createElement(f,{key:a,type:"side",course:t,color:e.props.courseColors[n]})})))}))):s.a.createElement(C.a,null,s.a.createElement(m.a,{xs:1},s.a.createElement(f,{key:Math.random(),type:"head",course:"empty"}),Object.keys(this.props.timetable).map((function(e,t){return s.a.createElement(f,{type:"side",course:e,key:t})}))),this.slots.map((function(t,a){return s.a.createElement(m.a,{className:"no-pad",key:a,xs:1},s.a.createElement(f,{type:"side",course:t,key:a}),Object.keys(e.props.timetable).map((function(t,n){var r=e.props.timetable[t][a],o=r;return"T"!==r[r.length-1]&&"L"!==r[r.length-1]||(o=r.substring(0,r.length-1)),s.a.createElement(f,{key:n,type:"head",course:r,color:e.props.courseColors[o]})})))}))):""))}}]),a}(n.Component),b=["Safety","ECEN302","ECEN306","ECEN304","HUMA102","IENG301","ECEN402"],k=["orange","pink","purple","green","blue","yellow","teal","red"],S={},T=0;T<b.length;T++)S[b[T]]=k[T];var O=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).randomColor=function(){return k[k.length*Math.random()<<0]},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return this.props.chooseCourses?s.a.createElement(m.a,{md:8,lg:9},s.a.createElement("div",{className:"main-app"},s.a.createElement(C.a,null,s.a.createElement(v.a,null,s.a.createElement("div",{className:"schedules-head"},s.a.createElement("h2",null,"Possible Schedules"),s.a.createElement("span",{id:"change_mode"},"Mode:",s.a.createElement("button",{className:this.props.darkmode?"active":"",onClick:function(){return e.props.changeMode()}},s.a.createElement(h.a,{icon:d.d}))),s.a.createElement("span",{id:"change_layout"},"Layout:",s.a.createElement("button",{className:"vertical"===this.props.layout?"active":"",onClick:function(){return e.props.changeLayout("vertical")}},s.a.createElement(h.a,{icon:d.c})),s.a.createElement("button",{className:"horizontal"===this.props.layout?"active":"",onClick:function(){return e.props.changeLayout("horizontal")}},s.a.createElement(h.a,{icon:d.b})))))),s.a.createElement("div",{className:"schedule-cards ".concat(this.props.layout,"-cards")},s.a.createElement(C.a,null,this.props.schedules.map((function(t,a){return s.a.createElement(m.a,{key:a,md:12,xl:e.props.cardWidth?e.props.cardWidth:"",lg:6},s.a.createElement(g,{layout:e.props.layout?e.props.layout:"",courseColors:S,timetable:e.props.schedules?t:""}))})))))):""}}]),a}(n.Component),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isPhone:window.innerWidth<768,layout:"vertical",cardWidth:4,darkmode:!0,chooseCourses:!1,schedules:[{sun:["Safety","Safety","empty","empty","empty","empty","empty","empty","empty"],mon:["ECEN304T","ECEN304T","ECEN402","ECEN402","empty","ECEN402T","ECEN402T","ECEN306T","ECEN306L"],tue:["ECEN302","ECEN302","ECEN304","ECEN304","ECEN306","ECEN306","ECEN302T","ECEN302T","empty"],wed:["empty","empty","ECEN306T","ECEN306T","empty","empty","empty","empty","empty"],thu:["empty","HUMA102","IENG301","IENG301","Safety","Safety","IENG301T","IENG301T","empty"]},{sun:["ECEN302","ECEN302","ECEN304","ECEN304","ECEN306","ECEN306","ECEN302T","ECEN302T","empty"],mon:["ECEN304T","ECEN304T","ECEN402","ECEN402","empty","ECEN402T","ECEN402T","ECEN306T","ECEN306L"],tue:["Safety","Safety","empty","empty","empty","empty","empty","empty","empty"],wed:["empty","HUMA102","IENG301","IENG301","Safety","Safety","IENG301T","IENG301T","empty"],thu:["empty","empty","ECEN306T","ECEN306T","empty","empty","empty","empty","empty"]}]},e.changeMode=function(){e.setState((function(e){return{darkmode:!e.darkmode}}))},e.changeLayout=function(t){var a;if(t===e.layout)return"";a="horizontal"===t?12:4,e.setState({layout:t,cardWidth:a})},e.toggleChangeCourses=function(){e.setState((function(e){return{chooseCourses:!e.chooseCourses}}))},e}return Object(l.a)(a,[{key:"render",value:function(){return this.state.darkmode?(document.body.classList.remove("light-mode"),document.body.classList.add("dark-mode")):(document.body.classList.add("light-mode"),document.body.classList.remove("dark-mode")),s.a.createElement(s.a.Fragment,null,s.a.createElement(v.a,{fluid:!0},s.a.createElement("div",{className:"wrapper"},s.a.createElement(C.a,{className:"flex-xl-nowrap"},s.a.createElement(N,{isPhone:this.state.isPhone,chooseCourses:this.state.chooseCourses,toggleChangeCourses:this.toggleChangeCourses}),s.a.createElement(O,{isPhone:this.state.isPhone,chooseCourses:this.state.chooseCourses,changeMode:this.changeMode,darkmode:this.state.darkmode,changeLayout:this.changeLayout,layout:this.state.layout,cardWidth:this.state.cardWidth,schedules:this.state.schedules})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(21);o.a.render(s.a.createElement(j.a,null,s.a.createElement(s.a.StrictMode,null,s.a.createElement(w,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.228c1fcf.chunk.js.map