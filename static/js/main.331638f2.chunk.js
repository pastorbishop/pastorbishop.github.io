(this["webpackJsonpreact-vitrine"]=this["webpackJsonpreact-vitrine"]||[]).push([[0],{18:function(e,t,a){e.exports=a(35)},23:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),o=(a(23),a(3)),i=a(1),s=function(){return l.a.createElement("div",{className:"navigation"},l.a.createElement("ul",null,l.a.createElement(o.b,{to:"/",exact:!0,className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null,"Accueil")),l.a.createElement("li",{className:"nav-portfolio"},"Services",l.a.createElement("ul",{className:"nav-projects"},l.a.createElement(o.b,{to:"/project-1",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Plomberie")),l.a.createElement(o.b,{to:"/project-2",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Sanitaire")),l.a.createElement(o.b,{to:"/project-3",activeClassName:"nav-active",className:"hover"},l.a.createElement("li",null,"Chauffage")))),l.a.createElement(o.b,{to:"/contact",exact:!0,className:"hover",activeClassName:"nav-active"},l.a.createElement("li",null,"Contact"))))},m=function(e){return l.a.createElement("div",{className:"scroll-bottom"},l.a.createElement("div",{className:"sb-main"},e.left&&l.a.createElement(o.b,{to:e.left,className:"left hover"},l.a.createElement("span",null,"\u276c")," "),l.a.createElement("p",{className:"center"},"scroll"),e.right&&l.a.createElement(o.b,{to:e.right,className:"right hover"},l.a.createElement("span",null,"\u276d"))))},u=a(8),d=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),i=o[0],s=o[1],m=Object(n.useState)(""),d=Object(u.a)(m,2),p=d[0],E=d[1],v=Object(n.useState)(""),f=Object(u.a)(v,2),g=f[0],h=f[1],b=Object(n.useState)(""),y=Object(u.a)(b,2),N=y[0],x=y[1],j=function(e,t){var a=document.querySelector(".form-message");window.emailjs.send("service_4e1t9bk",e,t).then((function(e){a.innerHTML="Message envoy\xe9 ! Nous vous recontacterons d\xe8s que possible.",a.style.background="#00c1ec",a.style.opacity="1",document.getElementById("name").classList.remove("error"),document.getElementById("email").classList.remove("error"),document.getElementById("message").classList.remove("error"),r(""),s(""),E(""),h(""),x(""),setTimeout((function(){a.style.opacity="0"}),5e3)})).catch((function(e){return a.innerHTML="Une erreur s'est produite, veuillez r\xe9essayer."}))};return l.a.createElement("form",{className:"contact-form"},l.a.createElement("h2",null,"contactez-nous"),l.a.createElement("div",{className:"form-content"},l.a.createElement("input",{type:"text",id:"name",name:"name",required:!0,onChange:function(e){return r(e.target.value)},placeholder:"nom *",value:a}),l.a.createElement("input",{type:"text",id:"company",name:"company",onChange:function(e){return s(e.target.value)},placeholder:"soci\xe9t\xe9",value:i}),l.a.createElement("input",{type:"text",id:"phone",name:"phone",onChange:function(e){return E(e.target.value)},placeholder:"t\xe9l\xe9phone",value:p}),l.a.createElement("div",{className:"email-content"},l.a.createElement("label",{id:"not-mail"},"Email non valide"),l.a.createElement("input",{type:"mail",id:"email",name:"email",required:!0,onChange:function(e){return h(e.target.value)},placeholder:"email *",value:g})),l.a.createElement("textarea",{id:"message",name:"message",onChange:function(e){return x(e.target.value)},placeholder:"message *",value:N,required:!0})),l.a.createElement("input",{className:"button hover",type:"submit",value:"envoyer",onClick:function(e){e.preventDefault();var t=document.getElementById("name"),n=document.getElementById("email"),l=document.getElementById("message"),r=document.querySelector(".form-message");if(a&&function(){var e=document.getElementById("not-mail");return g.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)?(e.style.display="none",!0):(e.style.display="block",e.style.animation="dongle 1s",setTimeout((function(){e.style.animation="none"}),1e3),!1)}()&&N){t.classList.remove("red"),n.classList.remove("red"),l.classList.remove("red"),j("template_oq0ntvb",{name:a,company:i,phone:p,email:g,message:N})}else r.innerHTML="Merci de remplir correctement les champs requis *",r.style.background="rgb(253, 87, 87)",r.style.opacity="1",a||t.classList.add("error"),g||n.classList.add("error"),N||l.classList.add("error")}}),l.a.createElement("div",{className:"form-message"}))},p=function(){var e=function(){document.querySelectorAll(".social-network a").forEach((function(e){e.addEventListener("mouseover",(function(t){var a=t.offsetX-20,n=t.offsetY-13;e.style.transform="translate( ".concat(a,"px, ").concat(n,"px)")})),e.addEventListener("mouseleave",(function(){e.style.transform=""}))}))};return l.a.createElement("div",{className:"social-network"},l.a.createElement("ul",{className:"content"},l.a.createElement("a",{href:"https://www.facebook.com",target:"blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-facebook-f"}))," "),l.a.createElement("a",{href:"https://www.twitter.com",target:"blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-twitter"}))," "),l.a.createElement("a",{href:"https://www.instagram.com",target:"blank",rel:"noopener noreferrer",className:"hover",onMouseOver:e},l.a.createElement("li",null,l.a.createElement("i",{className:"fab fa-instagram"}))," ")))},E=function(){return l.a.createElement("div",null,l.a.createElement("span",{className:"logo"},"OTTEN"))},v=a(14),f=function(){return Object(n.useEffect)((function(){window.addEventListener("mousemove",(function(e){document.querySelector(".cursor").style.top=e.pageY+"px",document.querySelector(".cursor").style.left=e.pageX+"px"}));var e=function(){document.querySelector(".cursor").classList.add("hovered")},t=function(){document.querySelector(".cursor").style.transition=".3s ease-out",document.querySelector(".cursor").classList.remove("hovered")};document.querySelectorAll(".hover").forEach((function(a){a.addEventListener("mouseover",e),a.addEventListener("mouseleave",t)}))}),[]),l.a.createElement("span",{className:"cursor"})},g=a(7),h=function(){return l.a.createElement("main",null,l.a.createElement(f,null),l.a.createElement(g.b.div,{className:"contact",exit:"out",animate:"in",initial:"out",variants:{in:{opacity:1,x:0},out:{opacity:0,x:300}},transition:{ease:[.03,.87,.73,.9],duration:.6}},l.a.createElement(s,null),l.a.createElement(E,null),l.a.createElement(d,null),l.a.createElement("div",{className:"contact-infos"},l.a.createElement("div",{className:"address"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"adresse"),l.a.createElement("p",null,"33290 Ludon Medoc"))),l.a.createElement("div",{className:"phone"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"t\xe9l\xe9phone"),l.a.createElement(v.CopyToClipboard,{text:"0642844284",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("T\xe9l\xe9phone copi\xe9 !")}},"06 30 19 92 59")))),l.a.createElement("div",{className:"email"},l.a.createElement("div",{className:"content"},l.a.createElement("h4",null,"email"),l.a.createElement(v.CopyToClipboard,{text:"fsagency@gmail.com",className:"hover"},l.a.createElement("p",{style:{cursor:"pointer"},className:"clipboard",onClick:function(){alert("Email copi\xe9 !")}},"plomberiechauffageotten@gmail.com")))),l.a.createElement(p,null),l.a.createElement("div",{className:"credits"},l.a.createElement("p",null,"Eureka DigiWeb - 2021"))),l.a.createElement(m,{left:"/project-4"})))},b=function(){var e=["24h/24 et 7j/7","plomberie","sanitaire","chauffage","d\xe9pannage","installation"],t=0,a=0;return Object(n.useEffect)((function(){var n=document.getElementById("text-target");!function l(){setTimeout((function(){t>=e.length?(t=0,a=0,l()):a<e[t].length?(!function(){var l=document.createElement("span");n.appendChild(l),l.classList.add("letter"),l.style.opacity="0",l.style.animation="anim 9s ease forwards",l.textContent=e[t][a],setTimeout((function(){l.remove()}),2e3)}(),a++,l()):(a=0,t++,setTimeout((function(){l()}),2e3))}),80)}()}),[]),l.a.createElement("span",{className:"dynamic-text"},l.a.createElement("span",{className:"simply"},"Services : "),l.a.createElement("span",{id:"text-target"}))},y=function(){return l.a.createElement("main",null,l.a.createElement(f,null),l.a.createElement(g.b.div,{className:"home",initial:"initial",animate:"visible",exit:"exit",variants:{initial:{opacity:0,transition:{duration:.5},x:100},visible:{opacity:1,x:0},exit:{opacity:0,transition:{duration:.3},x:-100}}},l.a.createElement(s,null),l.a.createElement(p,null),l.a.createElement("div",{className:"home-main"},l.a.createElement("div",{className:"main-content"},l.a.createElement(g.b.h1,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:950,top:-200,bottom:250}},"Plomberie Chauffage"),l.a.createElement("p",null,"OTTEN"),l.a.createElement(g.b.h2,{drag:!0,onDragEnd:!0,dragConstraints:{left:-250,right:1250,top:-200,bottom:250}},l.a.createElement(b,null)))),l.a.createElement(m,{right:"/project-1"})))},N=[{id:1,title:"Plomberie",languages:["Installation","D\xe9pannage","D\xe9bouchage de canalisations"],infos:"Canalisation bouch\xe9e, fuite d\u2019eau, besoin d\u2019une nouvelle arriv\xe9e d\u2019eau, nous sommes en mesure de r\xe9pondre \xe0 tous vos besoins de d\xe9pannage ou de r\xe9novation plomberie.",img:"./assets/img/plomberie.jpg",link:"http://www.google.com"},{id:2,title:"Sanitaire",languages:["Robinetterie","Lavabo/Evier","Toilette/WC","Chauffe-eau","Cumulus"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/sanitaire.jpg",link:"http://www.google.com"},{id:3,title:"Chauffage",languages:["Chaudi\xe8re","Radiateur"],infos:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas cumque labore suscipit, pariatur laboriosam autem omnis saepe quisquam enim iste.",img:"./assets/img/chauffage.jpg",link:"http://www.google.com"}],x=function(e){var t=Object(n.useState)(N),a=Object(u.a)(t,1)[0][e.projectNumber],r=Math.floor(200*Math.random()+700)+"px",c=Math.floor(200*Math.random()+150)+"px",i="scale("+(Math.random()+.7)+")",s=Math.random()>.4?1:-1,m={initial:{opacity:0,x:350*Math.random()*s,y:120*Math.random()*s},visible:{opacity:1,x:0,y:0}};return l.a.createElement(g.b.div,{className:"project-main",initial:"initial",animate:"visible",exit:"exit",transition:{ease:[.03,.87,.73,.9],duration:.6},variants:{initial:{opacity:0,transition:{duration:.5},x:200},visible:{opacity:1,x:0},exit:{opacity:.4,transition:{duration:.35},x:-800}}},l.a.createElement("div",{className:"project-content"},l.a.createElement("h1",null,a.title),l.a.createElement("p",null,a.date),l.a.createElement("ul",{className:"languages"},a.languages.map((function(e){return l.a.createElement("li",{key:e},e)})))),l.a.createElement(g.b.div,{className:"img-content",initial:"initial",animate:"visible",variants:m,transition:{duration:1.2}},l.a.createElement("div",{className:"img-container hover"},l.a.createElement("span",null,l.a.createElement("h3",null,a.title),l.a.createElement("p",null,a.infos)),l.a.createElement("img",{src:a.img,alt:a.title,className:"img"})),l.a.createElement("div",{className:"button-container"},l.a.createElement(o.b,{to:"/contact",exact:!0,className:"hover"},l.a.createElement("span",{className:"button"},"Plus d'infos")))),l.a.createElement("span",{className:"random-circle",style:{left:r,top:c,transform:i}}))},j=function(){return l.a.createElement("main",null,l.a.createElement(f,null),l.a.createElement("div",{className:"project"},l.a.createElement(s,null),l.a.createElement(E,null),l.a.createElement(x,{projectNumber:0}),l.a.createElement(m,{left:"/",right:"project-2"})))},C=function(){return l.a.createElement("main",null,l.a.createElement(f,null),l.a.createElement("div",{className:"project"},l.a.createElement(s,null),l.a.createElement(E,null),l.a.createElement(x,{projectNumber:1}),l.a.createElement(m,{left:"project-1",right:"project-3"})))},w=function(){return l.a.createElement("main",null,l.a.createElement(f,null),l.a.createElement("div",{className:"project"},l.a.createElement(s,null),l.a.createElement(E,null),l.a.createElement(x,{projectNumber:2}),l.a.createElement(m,{left:"project-2",right:"contact"})))},L=function(){return l.a.createElement(g.a,null,l.a.createElement(i.d,null,l.a.createElement(i.b,{exact:!0,path:"/",component:y}),l.a.createElement(i.b,{exact:!0,path:"/project-1",component:j}),l.a.createElement(i.b,{exact:!0,path:"/project-2",component:C}),l.a.createElement(i.b,{exact:!0,path:"/project-3",component:w}),l.a.createElement(i.b,{exact:!0,path:"/contact",component:h}),l.a.createElement(i.a,{to:"/"})))};c.a.render(l.a.createElement(o.a,null,l.a.createElement(L,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.331638f2.chunk.js.map