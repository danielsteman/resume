(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},53:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){"use strict";n.r(t);var c=n(21),i=n.n(c),s=(n(30),n(1)),a=n.n(s),r=n(2),o=(n(31),n(32),n(22)),l=n(11),d=n.n(l),j=function(e,t,n){switch(e){case"content":try{return"pages/?type=resume.".concat(t,"&fields=_,").concat(n.join())}catch(c){throw new Error("Provide `page` and `fields` parameters to consume `content` api")}case"mlresults":return"".concat(e,"/");default:throw new Error("Provide a valid api endpoint")}},u=n(34).default,b=function(e,t,n){var c=Object(s.useState)({}),i=Object(r.a)(c,2),a=i[0],l=i[1],b=Object(s.useState)(!0),m=Object(r.a)(b,2),f=m[0],O=m[1],v=Object(s.useState)(""),h=Object(r.a)(v,2),x=h[0],g=h[1],p=j(e,t,n);return Object(s.useEffect)((function(){!function(){var t=Object(o.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.get("".concat("https://www.danielsteman.com/api/v2","/").concat(p));case 3:n=t.sent,l("mlresults"===e?n:n.data.items[0]||n),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),g("An error occurred: ".concat(t.t0));case 10:return t.prev=10,O(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}()()}),[]),x?{errorMessage:"Failed to fetch ".concat(JSON.stringify(n)," from ").concat(t)}:{data:a,loading:f,error:x}},m=(n(53),n(0)),f=function(e){var t=e.items,n=e.handleRef,c=e.refs;return Object(m.jsx)("div",{className:"nav",children:Object(m.jsx)("ul",{className:"item",children:t.navigation.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("div",{className:"navigationItem",onClick:function(){n(c[e])},role:"button",tabIndex:0,children:e})},e)}))})})},O=(n(55),n(77)),v=function(e){var t=e.items,n=e.handleRef,c=e.refs,i=Object(s.useState)(!1),a=Object(r.a)(i,2),o=a[0],l=a[1];return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{className:"hamburgerContainer",children:Object(m.jsx)(O.a,{color:"#BC6FF1",toggled:o,toggle:function(){l(!o)},size:48,rounded:!0})}),o&&Object(m.jsx)("div",{className:"mobileNav",children:Object(m.jsx)("ul",{className:"mobileItem",children:t.navigation.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)("div",{className:"mobileNavigationItem",onClick:function(){n(c[e])},role:"button",tabIndex:0,children:e})},e)}))})})]})},h=function(){var e=window;return{width:e.innerWidth,height:e.innerHeight}},x=function(){var e=Object(s.useState)(h()),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){function e(){c(h())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),n},g=function(e){var t=e.setLoading,n=e.handleRef,c=e.refs,i=b("content","Home",["navigation"]),a=i.data,r=i.loading,o=i.error,l=x(),d=l.height,j=l.width;return Object(s.useEffect)((function(){return t(r)}),[r]),Object(m.jsxs)("div",{className:"headerComponent",children:[a&&a.navigation&&(j>400&&d?Object(m.jsx)(f,{items:a,handleRef:n,refs:c}):Object(m.jsx)(v,{items:a,handleRef:n,refs:c})),o&&Object(m.jsx)("div",{children:o})]})},p=(n(56),n.p+"static/media/layered-waves-haikei.fa39e680.svg"),N=n.p+"static/media/mobile-waves.b6b47dee.svg",k=n.p+"static/media/memoji.bc90a67d.png",y=(n(57),function(){return Object(m.jsx)("div",{className:"typewriter"})}),_=function(e){var t=e.setLoading,n=b("content","Home",["custom_title"]),c=n.data,i=n.loading,a=n.error,r=x(),o=r.height,l=r.width;return Object(s.useEffect)((function(){return t(i)}),[i]),Object(m.jsxs)("div",{className:"titleComponent",children:[c&&c.custom_title&&Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{src:k,alt:"memoji",className:"memoji"}),Object(m.jsx)(y,{}),l>414&&o?Object(m.jsx)("img",{className:"pageDivider",src:p,alt:"waves"}):Object(m.jsx)("img",{className:"pageDivider",src:N,alt:"mobilewaves"})]}),a&&Object(m.jsx)("div",{children:a})]})},w=(n(58),n(23)),C=n.n(w),L=(n(59),function(e){var t=e.text,n=void 0===t?"":t,c=e.children,i=void 0===c?null:c,s=C.a.sanitize;return Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"card",children:Object(m.jsxs)("div",{className:"text",children:[Object(m.jsx)("div",{dangerouslySetInnerHTML:{__html:s(n.toString())}}),i]})})})}),D=n(4),S=(n(60),function(e,t){for(var n=[],c=0;c<e.length;c+=t)n.push(e.slice(c,c+t));return n}),E=n(9),R=n(25),z=function(e,t){return Object.assign.apply(Object,[{}].concat(Object(R.a)(e.map((function(e){return Object(E.a)({},e,t)})))))},F=function(e){var t=e.skills_,n=void 0===t?[]:t,c=e.skillYears_,i=void 0===c?[]:c,a=e.columns_,o=void 0===a?1:a,l=S(n,o),d=Object(s.useState)({}),j=Object(r.a)(d,2),u=j[0],b=j[1];return Object(m.jsx)("div",{className:"skillsContainer",children:l.map((function(e,t){return Object(m.jsx)("div",{className:"row",children:e.map((function(e,c){return Object(m.jsx)("div",{className:"column",children:Object(m.jsx)("div",{className:"skill ".concat(u[e]),onClick:function(){return function(e){var t=0===Object.keys(u).length?z(n,!1):u;t[e]=!u[e],b(Object(D.a)({},t))}(e)},role:"button",tabIndex:0,children:u[e]&&0!==i.length?Object(m.jsx)("div",{children:i[t*o+c]}):Object(m.jsx)("div",{children:e})},e)},e)}))},e[0])}))})},I=(n(61),function(e){var t=e.title;return Object(m.jsxs)("div",{className:"titleContainer",children:[Object(m.jsx)("div",{className:"title",children:t}),Object(m.jsx)("div",{className:"underline"})]})}),P=n.p+"static/media/terminal.03a62e52.svg",B=n.p+"static/media/mobile-terminal.240cf4ff.svg",A=function(e){var t=e.setLoading,n=b("content","About",["custom_title","body","skills","skill_years","n_skills_columns"]),c=n.data,i=n.loading,a=n.error,r=x(),o=r.height,l=r.width;return Object(s.useEffect)((function(){return t(i)}),[i]),Object(m.jsxs)("div",{className:"aboutComponent",children:[Object(m.jsx)(I,{title:c.custom_title}),Object(m.jsxs)("div",{className:"aboutContainer",children:[Object(m.jsx)("div",{className:"aboutAnimation",children:l>414&&o?Object(m.jsx)("img",{src:P,alt:"terminal"}):Object(m.jsx)("img",{src:B,alt:"terminal"})}),Object(m.jsxs)("div",{className:"aboutDescription",children:[c&&Object(m.jsx)("div",{children:Object(m.jsx)(L,{text:c.body,children:Object(m.jsx)(F,{skills_:c.skills,skillYears_:c.skill_years,columns_:c.n_skills_columns})})}),a&&Object(m.jsx)("div",{children:a})]})]})]})},T=(n(62),n.p+"static/media/linkedin-icon.786559cf.svg"),H=n.p+"static/media/github-icon.f434f9ff.svg",J=n.p+"static/media/lastfm-icon.9bdfda36.svg",M=n.p+"static/media/stackoverflow-icon.121f2485.svg",G=function(e){var t=e.setLoading,n=b("content","Socials",["social_links"]),c=n.data,i=n.loading,a=n.error;return Object(s.useEffect)((function(){return t(i)}),[i]),Object(m.jsxs)("div",{className:"socialsComponent",children:[c&&c.social_links&&Object(m.jsxs)("div",{className:"logoContainer",children:[Object(m.jsx)("a",{href:c.social_links[0],children:Object(m.jsx)("img",{className:"logo linkedin",src:T,alt:"LinkedIn Logo"})}),Object(m.jsx)("a",{href:c.social_links[1],children:Object(m.jsx)("img",{className:"logo github",src:H,alt:"Github Logo"})}),Object(m.jsx)("a",{href:c.social_links[2],children:Object(m.jsx)("img",{className:"logo lastfm",src:J,alt:"LastFm Logo"})}),Object(m.jsx)("a",{href:c.social_links[3],children:Object(m.jsx)("img",{className:"logo stackoverflow",src:M,alt:"StackOverflow Logo"})})]}),a&&Object(m.jsx)("div",{children:a})]})},Y=(n(63),n(76)),V=Object(s.forwardRef)((function(e,t){var n=e.setLoading,c=b("content","Experience",["custom_title","employer_ids","employers","employment_title","employment_duration","employment_description"]),i=c.data,a=c.loading,o=c.error;Object(s.useEffect)((function(){return n(a)}),[a]);var l=Object(s.useState)(0),d=Object(r.a)(l,2),j=d[0],u=d[1];return Object(m.jsxs)("div",{className:"experienceComponent",ref:t,children:[i&&i.employers&&Object(m.jsxs)("div",{children:[Object(m.jsx)(I,{title:i.custom_title}),Object(m.jsxs)("div",{className:"experienceContainer",children:[Object(m.jsxs)("div",{className:"employerContainer",children:[Object(m.jsx)("div",{className:"scrollBar",children:Object(m.jsx)("div",{className:"slider moveSlider".concat(j)})}),Object(m.jsx)("div",{className:"employerList moveList".concat(j),children:i.employers.map((function(e,t){return Object(m.jsx)("div",{className:"employer",onClick:function(){return u(t)},role:"button",tabIndex:0,children:e},i.employer_ids[t])}))})]}),Object(m.jsxs)("div",{className:"jobContainer",children:[Object(m.jsxs)("div",{className:"jobTitleContainer",children:[Object(m.jsx)("div",{className:"jobTitle",children:Object(m.jsx)(Y.a,{children:i.employment_title[j]})}),Object(m.jsx)("div",{className:"jobDuration",children:i.employment_duration[j]})]}),Object(m.jsx)("div",{className:"jobDescription",children:i.employment_description[j]})]})]})]}),o&&Object(m.jsx)("div",{children:o})]})})),W=(n(64),n(65),function(e){var t=e.setLoading,n=b("content","Projects",["custom_title","body","skills"]),c=n.data,i=n.loading,a=n.error;Object(s.useEffect)((function(){return t(i)}),[i]);return Object(m.jsxs)("div",{className:"spotifyProjectDescriptionComponent",children:[c&&Object(m.jsx)(L,{text:c.body,children:Object(m.jsx)(F,{skills_:c.skills,columns_:2})}),a&&Object(m.jsx)("div",{children:a})]})}),q=n(24),K=n.n(q),Q=(n(71),function(e){var t=e.setLoading,n=Object(s.useState)(void 0),c=Object(r.a)(n,2),i=c[0],a=c[1],o=Object(s.useState)(void 0),l=Object(r.a)(o,2),d=l[0],j=l[1],u=Object(s.useState)(),f=Object(r.a)(u,2),O=f[0],v=f[1],h=Object(s.useCallback)((function(e){null!==e&&(a(e.getBoundingClientRect().height),j(e.getBoundingClientRect().width))}),[]),x=b("mlresults"),g=x.data,p=x.loading,N=x.error;Object(s.useEffect)((function(){return t(p)}),[p]),Object(s.useEffect)((function(){v(g)}),[g]);var k={tick0:0,tickcolor:"#D3D3D3",tickwidth:2,gridcolor:"#D3D3D3",gridwidth:2,zerolinecolor:"#D3D3D3",zerolinewidth:2},y={width:d,height:i,paper_bgcolor:"black",margin:{pad:0,t:0,b:0,l:0,r:0},scene:{yaxis:k,xaxis:k,zaxis:k,camera:{eye:{x:1.5,y:1.5,z:1.5}}}};return Object(m.jsxs)("div",{className:"spotifyProjectGraphComponent",children:[O&&O.data&&Object(m.jsx)("div",{className:"plotDiv",ref:h,children:Object(m.jsx)(K.a,{config:{displayModeBar:!1},data:[{x:O.data.map((function(e){return e.fields.xDim})),y:O.data.map((function(e){return e.fields.yDim})),z:O.data.map((function(e){return e.fields.zDim})),type:"scatter3d",mode:"markers",marker:{color:O.data.map((function(e){return e.fields.cluster})),symbol:"circle",opacity:.8,size:5},hoverlabel:{font:{color:"#FFFFFF"},bgcolor:"#242424",bordercolor:"#242424"},hoverinfo:"text",text:O.data.map((function(e){return"".concat(e.fields.artist," - ").concat(e.fields.trackName)}))}],layout:y})}),N&&Object(m.jsx)("div",{children:N})]})}),U=Object(s.forwardRef)((function(e){var t=e.setLoading,n=e.projectsRef;return Object(m.jsxs)("div",{className:"spotifyProjectComponent",ref:n,children:[Object(m.jsx)(I,{title:"PROJECTS"}),Object(m.jsxs)("div",{className:"spotifyProjectContainer",children:[Object(m.jsx)(W,{setLoading:t}),Object(m.jsx)(Q,{setLoading:t})]})]})})),X=(n(72),function(e){var t=e.setLoading,n=b("content","Footer",["footer_text"]),c=n.data,i=n.loading,a=n.error;return Object(s.useEffect)((function(){return t(i)}),[i]),Object(m.jsxs)("div",{className:"footerComponent",children:[c&&Object(m.jsx)("div",{className:"footerText",children:c.footer_text}),a&&Object(m.jsx)("div",{children:a})]})}),Z=n.p+"static/media/spinner.3d4e231b.svg",$=function(){return Object(m.jsx)("div",{className:"loadingAnimationContainer",children:Object(m.jsx)("img",{src:Z,alt:"loading",className:"loadingAnimation"})})},ee=function(){var e=Object(s.useRef)(null),t=Object(s.useRef)(null),n=Object(s.useState)(!0),c=Object(r.a)(n,2),i=c[0],a=c[1],o={experience:t,projects:e};return Object(m.jsxs)("div",{children:[i&&Object(m.jsx)($,{}),Object(m.jsxs)("div",{className:"grid",children:[Object(m.jsx)(g,{setLoading:a,handleRef:function(e){null!==e.current&&e.current.scrollIntoView({behavior:"smooth"})},refs:o}),Object(m.jsx)(_,{setLoading:a}),Object(m.jsx)(A,{setLoading:a}),Object(m.jsx)(U,{setLoading:a,projectsRef:e}),Object(m.jsx)(V,{setLoading:a,ref:t}),Object(m.jsx)(G,{setLoading:a}),Object(m.jsx)(X,{setLoading:a})]})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root"))}},[[73,1,2]]]);