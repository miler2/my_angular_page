import './polyfills.server.mjs';
import{B as D,a as o,b as v,c as p,d as m,e as n,f as a,g as r,l as C,o as b,q as x,r as h,u as y,y as M}from"./chunk-7ICXBUEW.mjs";var s=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-navbar"]],standalone:!0,features:[r],decls:11,vars:0,consts:[["data-bs-theme","dark",1,"navbar","navbar-expand-lg","bg-primary"],[1,"container-fluid"],["href","",1,"navbar-brand"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarColor01","aria-controls","navbarColor01","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarColor01",1,"collapse","navbar-collapse"],[1,"navbar-nav","me-auto"],[1,"nav-item"],["href","mi_cv",1,"nav-link"]],template:function(e,f){e&1&&(p(0,"nav",0)(1,"div",1)(2,"a",2),a(3,"Home"),m(),p(4,"button",3),n(5,"span",4),m(),p(6,"div",5)(7,"ul",6)(8,"li",7)(9,"a",8),a(10,"Mi CV"),m()()()()()())},styles:[".navbar[_ngcontent-%COMP%]{padding-left:150px;padding-right:150px}"]})};var l=class t{title="my_angular_page";static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-root"]],standalone:!0,features:[r],decls:2,vars:0,template:function(e,f){e&1&&n(0,"app-navbar")(1,"router-outlet")},dependencies:[M,s]})};var c=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-landpage"]],standalone:!0,features:[r],decls:10,vars:0,consts:[[1,"landpage_text"],[1,"lead"]],template:function(e,f){e&1&&(p(0,"div",0)(1,"h1"),a(2,"Bienvenido a mi p\xE1gina!"),m(),p(3,"p",1),a(4,' Si clickas en "CV" en la barra de arriba, podr\xE1s acceder a mi CV. '),n(5,"br"),a(6," Si vienes a ver mis otros projectos si\xE9ntete libre de explorar la p\xE1gina a tu gusto. "),n(7,"br")(8,"br"),a(9," Un gusto tenerte de visita \u{1F60B} "),m()())},styles:[".landpage_text[_ngcontent-%COMP%]{text-align:center;color:#0ff;margin-top:130px}"]})};var d=class t{static \u0275fac=function(e){return new(e||t)};static \u0275cmp=o({type:t,selectors:[["app-mi-cv"]],standalone:!0,features:[r],decls:1,vars:0,consts:[["src",v`../../../assets/CV.pdf`,"width","100%","height","500px"]],template:function(e,f){e&1&&n(0,"iframe",0)}})};var N=[{path:"mi_cv",component:d,title:"Mi CV"},{path:"",component:c,title:"Landpage"},{path:"**",redirectTo:"",pathMatch:"full"}];var S={providers:[C({eventCoalescing:!0}),D(N),h()]};var E={providers:[y()]},A=b(S,E);var F=()=>x(l,A),Y=F;export{Y as a};
