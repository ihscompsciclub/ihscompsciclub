(this.webpackJsonpihscompsciclub=this.webpackJsonpihscompsciclub||[]).push([[0],{34:function(e,t,s){},35:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var c=s(0),r=s.n(c),n=s(23),i=s.n(n),o=(s(34),s(4)),a=s(5),l=s(7),d=s(6),j=(s(35),s(36),s(3)),h=s(12),m=s(26),b=s(14),p=(s(37),s(38),s(1)),u=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"topnav",children:[Object(p.jsx)("img",{src:"/transBGLogo.png",alt:"logo"}),Object(p.jsx)("p",{children:"IHS Comp Sci Club"}),Object(p.jsx)(h.b,{to:"/",onClick:function(){window.scroll({top:0,left:0})},children:"Home"}),Object(p.jsx)(h.b,{to:"/faqs",onClick:function(){window.scroll({top:0,left:0})},children:"FAQs"}),Object(p.jsx)(O,{items:["Officers","Members","Gallery"],idItems:["officers","members","gallery"],to:"/about",curPage:this.props.curPage,children:"About Us"}),Object(p.jsx)(O,{items:["Workshops","Hackathons","Projects","Upcoming Events","Career Days"],to:"/activities",idItems:["clubWorkshops","hackathons","projects","upcomingEvents","careerDays"],curPage:this.props.curPage,children:"Activities"}),Object(p.jsx)(O,{items:["Form","Socials"],idItems:["airtableForm","socials"],to:"/contact",curPage:this.props.curPage,children:"Contact Us"})]}),Object(p.jsx)("p",{id:"firstItem"})]})}}]),s}(r.a.Component),O=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var c;Object(o.a)(this,s),(c=t.call(this,e)).idItems="undefined"==typeof c.props.idItems?c.props.items:c.props.idItems,console.log(c.idItems),c.renderItems=[];for(var r=0;r<c.props.items.length;r++)c.renderItems.push(c.createHashLinks(r));return c.title=c.props.title,c.state={show_items:!1},c.color="white",c.timeout="undefined"==typeof c.props.timeout?1e3:c.props.timeout,c}return Object(a.a)(s,[{key:"createHashLinks",value:function(e){return Object(p.jsx)(m.a,{className:"dropdown-item",to:this.props.to+"#"+this.idItems[e],children:this.props.items[e]},this.idItems[e])}},{key:"render",value:function(){var e=this;return Object(p.jsxs)(b.a,{as:"span",align:"start",className:"topnavdd",onMouseOver:function(){e.color="black",e.setState({show_items:!0}),console.log("entered")},onMouseLeave:function(){e.color="white",e.setState({show_items:!1}),console.log("left")},onClick:function(){e.setState({show_items:!1})},show:this.state.show_items,children:[Object(p.jsx)(h.b,{onClick:function(){window.scroll({top:0,left:0}),console.log("top")},to:this.props.to,style:{textAlign:"center",width:"max-content",float:"center",color:this.color},children:this.props.children}),Object(p.jsx)(b.a.Menu,{show:this.state.show_items,style:{backgroundColor:"#26428b",color:"white",width:"unset",transform:"translateY("+1/this.renderItems.length*100+"%) translateX(-11.65%)"},children:this.renderItems})]})}}]),s}(r.a.Component),g=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsx)("img",{src:this.props.imgSrc,alt:this.props.name}),Object(p.jsx)("h3",{children:this.props.name}),Object(p.jsx)("p",{children:this.props.shortDesc})]})}}]),s}(r.a.Component),x=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"coolScrollEffect",children:[this.props.children,Object(p.jsx)("hr",{})]})}}]),s}(r.a.Component),f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"fill",value:function(e){for(var t="",s=0;s<e;s++)t+="Filler<br/>\n";return t}},{key:"render",value:function(){return Object(p.jsx)("h2",{children:this.fill(300)})}}]),s}(r.a.Component),k=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Home Content",children:[Object(p.jsx)(u,{curPage:"home"}),Object(p.jsxs)(x,{children:[Object(p.jsx)("h1",{id:"hp_header",className:"centeredContent paddedContent",children:"Welcome to IHS Computer Science Club"}),Object(p.jsx)("video",{playsInline:!0,id:"hp_vid",width:"100%",autoPlay:!0,loop:!0,muted:!0,children:Object(p.jsx)("source",{src:"Videos/A.mp4",type:"video/mp4"})})]}),Object(p.jsxs)(x,{children:[Object(p.jsx)("h1",{className:"centeredContent paddedContent",children:"K-33 | 3:30 - 4:30 PM PST | Wednesdays"}),Object(p.jsx)("table",{children:Object(p.jsx)("tbody",{children:Object(p.jsxs)("tr",{children:[Object(p.jsx)("th",{children:Object(p.jsx)("img",{alt:"club",className:"centeredContent paddedContent",id:"clubpic"})}),Object(p.jsxs)("th",{children:[Object(p.jsx)("h1",{children:"Yeah, us"}),Object(p.jsxs)("p",{children:["Club Description",Object(p.jsx)("br",{}),"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."]})]})]})})})]}),Object(p.jsx)(f,{})]})}}]),s}(r.a.Component),v=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Content",children:[Object(p.jsx)(u,{curPage:"about"}),Object(p.jsxs)("div",{className:"centeredContent paddedContent",children:[Object(p.jsx)("h1",{id:"officers",children:"Our Officers"}),Object(p.jsxs)("div",{className:"personBlock",children:[Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"})]}),Object(p.jsx)("h1",{id:"members",children:"Our Members"}),Object(p.jsxs)("div",{className:"personBlock",children:[Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Guy",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/cpic.png",name:"Girl",shortDesc:"A regular person who likes to code/design"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/yorinamu.png",name:"Yori Namu",shortDesc:"lol"})]}),Object(p.jsx)("h1",{id:"gallery",children:"Gallery"}),Object(p.jsx)(f,{})]})]})}}]),s}(r.a.Component),S=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"paddedContent Content",children:[Object(p.jsx)(u,{curPage:"activities"}),Object(p.jsx)("h1",{id:"clubWorkshops",className:"centeredContent",children:"CLUB WORKSHOPS"}),Object(p.jsx)("h3",{children:"We have workshops on multiple programming languages, including workshops on web development, game development as well as cybersecurity. We also have guest speakers and career fairs."}),Object(p.jsx)("h3",{children:"Links to our workshops:"}),Object(p.jsxs)("li",{children:["September 15th - Intro to JS - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1X25EUVfhqo5IY37lySNBjxJYqObj5BOuPjR5zV7fLeE/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsxs)("li",{children:["September 22nd - JavaScript, Week 2 - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1otMvo6YIxJAhTd5OLH9v5R3QNlP_MREu2V1sIpGe8cc/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsxs)("li",{children:["October 6th - JavaScript, Week 3 - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1WzOG8fZYrqFmi6ocixuBlB6NCMY930bxYYa_4EycpbE/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsxs)("li",{children:["October 13th - JavaScript, Week 4 (Intro to HTML) - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1a6lQlZHAcveHT4g8ZwVLM43E46n84V_mqfWvaLyP1AY/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsxs)("li",{children:["October 20th - JavaScript, Week 5 (HTML, CSS, JS)- ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/13xbqdkeIoxD_CtR3cd2svG9oZrhhYJaTPpSRSISRdfU/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsx)("li",{children:"October 27th - No Slides (had a guest speaker instead)"}),Object(p.jsxs)("li",{children:["November 3th - Version Control Week 1 - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1GDZHlU9hCABsqSTGaLThmWfdxpPhizL-KcM12cVQnts/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsxs)("li",{children:["November 10th - Version Control Week 2 - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1SIDPjSei_lMAtBdv6JW0HKDHN7bPe_4ZiBKx7hjGFWY/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsxs)("li",{children:["November 17th - Discord Bot Development Week 1 - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/19fkM1rKOrKBa1110PCBYVf_G82WUw37aOrAB4vaEJfA/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsx)("li",{children:"November 24th - Thanksgiving Break (No Slides)"}),Object(p.jsxs)("li",{children:["December 1st - Discord Bot Development Week 2 - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1XjNqEvlBUkYQdOOi4c8YEJjoXgSCF8TDQZOa9PX2OqM/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsxs)("li",{children:["December 8th - Discord Bot Development Week 3 - ",Object(p.jsx)("a",{href:"https://docs.google.com/presentation/d/1nmgzrrSf5BYfkwOotVNSGiCRUKZ-bEtjUA2uyLJCSEg/edit?usp=sharing",target:"blank",children:"Slides"})]}),Object(p.jsx)("h1",{id:"hackathons",className:"centeredContent",children:"HACKATHONS"}),Object(p.jsx)("h3",{children:"We host hackathons, which are themed competitions where our members try to code the best solution to a problem"}),Object(p.jsxs)("p",{children:["October Hackathon link: ",Object(p.jsx)("a",{href:"https://cs-club-2021-october.devpost.com/",target:"blank",children:"Here"})]}),Object(p.jsx)("h1",{id:"projects",className:"centeredContent",children:"PROJECTS"}),Object(p.jsx)("h3",{children:"As a club, we\u2019re currently working on: this website! We encourage our members to try developing their own projects. heck out these magnificent projects made by our outstanding people in our club."}),Object(p.jsx)(y,{linkArray:["https://replit.com/@ritza/demo-embed?embed=true","https://replit.com/@Chreliot/CardGames?embed=true","https://replit.com/@Chreliot/Poker?embed=true"],projectNames:["Python Demo","Black Jack","Poker"]}),Object(p.jsx)("h1",{id:"upcomingEvents",className:"centeredContent",children:"UPCOMING EVENTS TODO"}),Object(p.jsx)("h3",{children:"Cool Calendar HERE"}),Object(p.jsx)(f,{}),Object(p.jsx)("h1",{id:"careerDays",children:"CAREER DAYS TODO"}),Object(p.jsx)("p",{children:"In CS Club, we host career days where guest speakers come to our meetings and give presentations about how their experience the CS field has been! Our past guest speakers:"}),Object(p.jsx)(g,{imgSrc:"./memberImgs/Philip Reasa.png",name:"Philip Reasa",shortDesc:"Former Google Software Engineer"})]})}}]),s}(r.a.Component),y=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var c;if(Object(o.a)(this,s),(c=t.call(this,e)).items=c.props.linkArray,c.names=c.props.projectNames,"undefined"==typeof c.names){c.names=[];for(var r=0;r<c.items.length;r++)c.names.push("project "+r)}c.renderItems=[],c.menuItems=[];for(var n=0;n<c.items.length;n++)c.menuItems.push(c.createMenuItems(n)),c.renderItems.push(Object(p.jsx)("iframe",{title:"project"+n,frameborder:"0",width:"100%",height:"500px",src:c.items[n]}));return c.state={index:0},c}return Object(a.a)(s,[{key:"createMenuItems",value:function(e){var t=this;return Object(p.jsx)(b.a.Item,{onClick:function(){t.setState({index:e}),console.log("will set state to"+e)},children:this.names[e]})}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)(b.a,{children:[Object(p.jsx)(b.a.Toggle,{children:"See All of our Projects"}),Object(p.jsx)(b.a.Menu,{style:{backgroundColor:"lightblue"},children:this.menuItems})]}),Object(p.jsx)("br",{}),this.renderItems[this.state.index]]})}}]),s}(r.a.Component),C=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return document.getElementsByTagName("html")[0].style="background:#212121",Object(p.jsxs)("div",{className:"Content",children:[Object(p.jsx)(u,{curPage:"contact"}),Object(p.jsxs)("div",{className:"centeredContent paddedContent",children:[Object(p.jsx)("h1",{id:"airtableForm",children:"AIRTABLE FORM TODO"}),Object(p.jsx)(f,{}),Object(p.jsx)("h1",{id:"socials",children:"SOCIALS TODO"}),Object(p.jsx)(f,{})]})]})}}]),s}(r.a.Component),w=(s(44),function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Content",children:[Object(p.jsx)(u,{curPage:"faqs"}),Object(p.jsx)("h1",{className:"centeredContent",children:"FAQs"}),Object(p.jsxs)("div",{className:"paddedContent larger",children:[Object(p.jsxs)("li",{className:"numberedList",children:["How much experience will we need? Are you required to already know any type of programming?",Object(p.jsx)("li",{className:"letteredList",children:"No experience required, we will teach you the basics of programming and many different skills and languages!"})]}),Object(p.jsxs)("li",{className:"numberedList",children:["What languages do you use?",Object(p.jsxs)("div",{className:"letteredList",children:[Object(p.jsx)("li",{children:"Python"}),Object(p.jsx)("li",{children:"Html"}),Object(p.jsx)("li",{children:"LaTeX"}),Object(p.jsx)("li",{children:"Css"}),Object(p.jsx)("li",{children:"Java"}),Object(p.jsx)("li",{children:"Js"}),Object(p.jsx)("li",{children:"Rust"}),Object(p.jsx)("li",{children:"Lua"}),Object(p.jsx)("li",{children:"Scratch"}),Object(p.jsx)("li",{children:"Julia"}),Object(p.jsx)("li",{children:"Vim Script"})]})]})]})]})}}]),s}(r.a.Component)),I=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(o.a)(this,s),t.apply(this,arguments)}return Object(a.a)(s,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)(j.c,{children:[Object(p.jsx)(j.a,{path:"/",component:k,exact:!0}),Object(p.jsx)(j.a,{path:"/faqs",component:w}),Object(p.jsx)(j.a,{path:"/about",component:v}),Object(p.jsx)(j.a,{path:"/activities",component:S}),Object(p.jsx)(j.a,{path:"/contact",component:C})]})})}}]),s}(r.a.Component),N=I,A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,50)).then((function(t){var s=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),c(e),r(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(h.a,{children:Object(p.jsx)(N,{})})}),document.getElementById("root")),A()}},[[45,1,2]]]);
//# sourceMappingURL=main.badc87cd.chunk.js.map