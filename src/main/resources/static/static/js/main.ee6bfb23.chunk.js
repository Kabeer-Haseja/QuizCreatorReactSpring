(this.webpackJsonpquizappreactspring=this.webpackJsonpquizappreactspring||[]).push([[0],{13:function(e,t,c){},30:function(e,t,c){},54:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(23),l=c.n(s),i=(c(30),c(13),c(31),c(8)),j=c(12),o=c(6),b=c(57),r=c(56),u=c(25),O=(c(24),c(1));function d(){var e=Object(n.useState)(2),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(1),l=Object(o.a)(s,2),d=l[0],h=(l[1],Object(n.useState)(0)),x=Object(o.a)(h,2),p=x[0],v=x[1],C=Object(n.useState)(!1),g=Object(o.a)(C,2),f=g[0],m=g[1],y=Object(n.useState)(""),S=Object(o.a)(y,2),_=S[0],Q=S[1],q=Object(n.useState)(!1),w=Object(o.a)(q,2),G=w[0],T=w[1],k=Object(n.useState)(""),L=Object(o.a)(k,2),A=L[0],F=L[1],P=Object(n.useState)(""),z=Object(o.a)(P,2),B=z[0],M=z[1],D=Object(n.useState)(""),I=Object(o.a)(D,2),J=I[0],E=I[1],N=Object(n.useState)([]),W=Object(o.a)(N,2),H=W[0],K=(W[1],Object(n.useState)([])),R=Object(o.a)(K,2),U=R[0],V=(R[1],Object(n.useState)("")),X=Object(o.a)(V,2),Y=(X[0],X[1],Object(n.useState)("")),Z=Object(o.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ce=Object(o.a)(te,2),ne=ce[0],ae=ce[1],se=Object(n.useState)(""),le=Object(o.a)(se,2),ie=le[0],je=le[1],oe=Object(n.useState)(""),be=Object(o.a)(oe,2),re=be[0],ue=be[1],Oe=Object(n.useState)(-1),de=Object(o.a)(Oe,2),he=de[0],xe=de[1],pe=Object(n.useState)([]),ve=Object(o.a)(pe,2),Ce=ve[0],ge=ve[1],fe=function(){a(3)},me=function(e){E(e.target.value)};return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{class:"container col-4 float-left p-6",children:2==c?Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(b.a.Group,{children:[Object(O.jsx)(b.a.Label,{children:"Quiz Title"}),Object(O.jsx)(b.a.Control,{type:"text",name:"q_title",value:$,placeholder:"Quiz Title",onChange:function(e){ee(e.target.value)}})]}),Object(O.jsxs)(b.a.Group,{children:[Object(O.jsx)(b.a.Label,{children:"Total points"}),Object(O.jsx)(b.a.Control,{type:"number",name:"q_totalpoints",value:ne,placeholder:"Total points",onChange:function(e){ae(e.target.value)}})]}),Object(O.jsxs)("div",{class:"row",children:[Object(O.jsx)("div",{class:"col-6",children:Object(O.jsxs)(b.a.Group,{children:[Object(O.jsx)(b.a.Label,{children:"Time Allowed"}),Object(O.jsx)(b.a.Control,{type:"number",name:"q_timeAllowed",value:ie,onChange:function(e){je(e.target.value)}})]})}),Object(O.jsx)("div",{class:"col-6",children:Object(O.jsxs)(b.a.Group,{children:[Object(O.jsx)(b.a.Label,{children:"Select Date "}),Object(O.jsx)(b.a.Control,{type:"date",name:"q_datetime",onChange:function(e){ue(e.target.value)},value:re})]})}),Object(O.jsx)(b.a.Group,{class:"row",children:Object(O.jsxs)("div",{class:"col-12",children:[Object(O.jsx)(b.a.Label,{children:"Question  "}),Object(O.jsx)("div",{class:"card col-12 w-100",children:Object(O.jsxs)("div",{class:"card-body",children:[Object(O.jsx)("p",{class:"card-text",children:"With supporting text below as a natural lead-in to additional content."}),Object(O.jsx)("button",{onClick:function(){!1===f?Ce.push({q_title:$,q_timeAllowed:ie,q_datetime:re,q_totalpoints:ne,Questions:U}):m(!0),xe(he+1),alert(he),fe()},type:"button",class:"btn btn-primary",onChange:function(e){var t=e.target,c=t.name,n=t.value;ee(e.target.value),ge((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(i.a)({},c,n))}))},children:"Add Question "})]})})]})})]}),Object(O.jsx)(b.a.Group,{class:"row",children:Object(O.jsxs)("div",{class:" text-right",children:[Object(O.jsx)("button",{type:"button",class:"btn btn-light",children:"Cancel"}),Object(O.jsx)("button",{type:"button",class:"btn btn-success",children:"Save"})]})})]}):3==c?Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(b.a.Group,{children:[Object(O.jsx)(b.a.Label,{children:"Question"}),Object(O.jsx)(b.a.Control,{as:"textarea",rows:3,name:"Question_Text",value:A,onChange:function(e){F(e.target.value)}})]}),Object(O.jsxs)(b.a.Group,{children:[Object(O.jsx)(b.a.Label,{children:"Total points"}),Object(O.jsx)(b.a.Control,{type:"number",name:"Question_Points",value:B,placeholder:"Total points",onChange:function(e){M(e.target.value)}})]}),Object(O.jsx)("fieldset",{children:Object(O.jsx)(b.a.Group,{as:r.a,class:"text-left",children:Object(O.jsxs)(u.a,{sm:10,children:[Object(O.jsx)(b.a.Check,{type:"radio",label:"Single_Choice",name:J,value:"Single_Choice",onChange:me}),Object(O.jsx)(b.a.Check,{type:"radio",label:"Multiple_Choice",name:J,value:"Multiple Choice",onChange:me})]})})}),Object(O.jsx)(b.a.Group,{class:"row",children:Object(O.jsxs)("div",{class:"col-12",children:[Object(O.jsx)(b.a.Label,{children:"Question  "}),Object(O.jsx)("div",{class:"card col-12 w-100",children:Object(O.jsx)("div",{class:"card-body",children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary",onClick:function(){!1===f?(Ce[0].Questions.push({Question_Text:A,Question_Points:B,q_type:J,q_choice:H}),m(!0)):p==d&&(Ce[0].Questions.push({Question_Text:A,Question_Points:B,q_type:J,q_choice:H}),alert("increment value"+d)),a(4)},children:"Add Choice"})})})]})}),Object(O.jsx)(b.a.Group,{class:"row",children:Object(O.jsxs)("div",{class:" text-right",children:[Object(O.jsx)("button",{type:"button",class:"btn btn-light",children:"Cancel"}),Object(O.jsx)("button",{type:"button",class:"btn btn-success",onClick:function(){a(2),v(1)},children:"Save"})]})})]}):4==c?Object(O.jsxs)(b.a,{children:[Object(O.jsxs)(b.a.Group,{children:[Object(O.jsx)(b.a.Label,{children:"Choice"}),Object(O.jsx)(b.a.Control,{type:"text",value:_,placeholder:"Question Choice",onChange:function(e){Q(e.target.value),T(!1)}})]}),Object(O.jsx)(b.a.Group,{class:"text-left",children:Object(O.jsx)(b.a.Check,{type:"checkbox",value:G,label:"Correct Option",class:"text-left",onClick:function(){G||T(!0)}})}),Object(O.jsx)(b.a.Group,{class:"row",children:Object(O.jsxs)("div",{class:" text-right",children:[Object(O.jsx)("button",{type:"button",class:"btn btn-light",children:"Cancel"}),Object(O.jsx)("button",{type:"reset",class:"btn btn-success",onClick:function(){alert(he),Ce[0].Questions[he].q_choice.push({Question_Body:_,isCorrect:G}),fe()},name:!0,children:"save Choice"})]})})]}):Object(O.jsx)("div",{})})})}var h=function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(d,{})})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,58)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,l=t.getTTFB;c(e),n(e),a(e),s(e),l(e)}))};l.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(h,{})}),document.getElementById("root")),x()}},[[54,1,2]]]);
//# sourceMappingURL=main.ee6bfb23.chunk.js.map