(this.webpackJsonpe1t1leaderboard=this.webpackJsonpe1t1leaderboard||[]).push([[0],{72:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),o=a.n(i),c=a(28),l=a(10),s=a(61),u=a(122),m=a(123),p=a(114),d=a(116),f=a(37),h=a(38),g=a(45),v=a(44),E=a(113),b=a(115),w=a(124),y=a(86),j=a(111),x=Object(j.a)({button:{margin:"25px 15px",paddingLeft:40,paddingRight:40}});function I(e){var t=e.primary,a=e.to,n=e.color,i=e.variant,o=x(),l=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(c.b,Object.assign({to:a,ref:t},e))}))}),[a]);return r.a.createElement(E.a,{color:n,variant:i,component:l,className:o.button},t)}var k=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={showInputField:!1},e}return Object(h.a)(a,[{key:"showPasswordField",value:function(){this.setState({showInputField:!0})}},{key:"render",value:function(){var e=this,t=this.state.showInputField,a=this.props.classes;return r.a.createElement(p.a,{container:!0,alignItems:"center",direction:"column",justify:"center"},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(E.a,{color:"secondary",variant:"outlined",className:a.button,onClick:function(){return e.showPasswordField()}},"Team Leaders"),r.a.createElement(I,{primary:"Interns",to:"/interns",color:"primary",variant:"contained",func:null})),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(b.a,{in:t,timeout:1e3},r.a.createElement(w.a,{id:"outlined-password-input",label:"Password",type:"password",margin:"dense",color:"secondary",autoComplete:"current-password",variant:"outlined"}))))}}]),a}(n.Component),O=Object(y.a)((function(e){return{button:{margin:"25px 15px",paddingLeft:25,paddingRight:25}}}))(k);function L(){return r.a.createElement(p.a,{container:!0,alignItems:"center",direction:"column",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"h1"}," E1T1 Leaderboard")),r.a.createElement(O,null))}var P=a(117),N=a(118),S=a(119),B=a(60),C=a.n(B),D=Object(j.a)((function(e){return{homeButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appbar:{background:e.palette.background.default,color:e.palette.text.primary,marginBottom:e.spacing(4)}}}));function F(e){var t=e.primary,a=e.to,n=D(),i=r.a.useMemo((function(){return r.a.forwardRef((function(e,t){return r.a.createElement(c.b,Object.assign({to:a,ref:t},e))}))}),[a]);return r.a.createElement(P.a,{edge:"start",className:n.homeButton,color:"inherit",component:i},t)}function M(e){var t=D();return r.a.createElement(N.a,{position:"static",className:t.appbar,elevation:0},r.a.createElement(S.a,null,r.a.createElement(F,{primary:r.a.createElement(C.a,null),to:"/"}),r.a.createElement(d.a,{variant:"h6",className:t.title},e.name)))}var T={apiKey:"AIzaSyCaS_MvM8zO_IpBmura0jDUbZ4JscmjjPY",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1akEpKJrNmFzd2fZVIPWWSCu3EGiQbL0HM1-SjoJj45c"};function J(e){window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.get({spreadsheetId:T.spreadsheetId,range:"apitesting!A2:B22"}).then((function(t){var a=t.result.values.map((function(e){return{name:e[0],points:e[1]}}))||[];e({interns:a})}),(function(t){e(!1,t.result.error)}))}))}var R=a(125),A=a(88),K=a(120),z=a(121),G=function(e){Object(g.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={interns:[],error:null,loading:!0},e.onLoad=function(t,a){if(t){var n=t.interns;e.setState({interns:n}),e.setState({loading:!1})}else e.setState({error:a})},e.initClient=function(){window.gapi.client.init({apiKey:T.apiKey,discoveryDocs:T.discoveryDocs}).then((function(){J(e.onLoad)}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"Bar",value:function(e){var t=e.name,a=e.points,n=e.color,i=e.classes,o=a/e.maxPoints;return r.a.createElement(R.a,{width:o},r.a.createElement(A.a,{elevation:3,className:n},r.a.createElement(d.a,{className:i.name}," ",t," "),r.a.createElement(d.a,null," ",a," ")))}},{key:"comparePoints",value:function(e,t){return parseInt(e.points)===parseInt(t.points)?0:parseInt(e.points)>parseInt(t.points)?-1:1}},{key:"render",value:function(){var e=this,t=this.state,a=t.interns,n=t.error,i=t.loading,o=this.props.classes,c=0,l=o.barPaperTL,s="secondary";if(n)return r.a.createElement("div",null,this.state.error);var u=a.sort(this.comparePoints);a[0]&&(c=a[0].points),"/interns"===window.location.pathname&&(l=o.barPaperIntern,u=a.slice(0,3),s="primary");var m=o.loading;return i||(m=o.notLoading),r.a.createElement(K.a,{maxWidth:"lg"},r.a.createElement(A.a,{elevation:2,className:o.paper,width:1},r.a.createElement(b.a,{in:i,timeout:30},r.a.createElement(z.a,{color:s,className:m})),r.a.createElement(b.a,{in:!i,timeout:1e3},r.a.createElement("div",null,u.map((function(t,a){return r.a.createElement(e.Bar,{key:a,name:t.name,points:t.points,color:l,classes:o,maxPoints:c})}))))))}}]),a}(n.Component),W=Object(y.a)((function(e){return{paper:{padding:e.spacing(2)},barPaperIntern:{padding:e.spacing(2),margin:e.spacing(2),display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:e.palette.primary.dark},barPaperTL:{padding:e.spacing(2),margin:e.spacing(2),display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:e.palette.secondary.dark},name:{flexGrow:1},loading:{margin:e.spacing(2)},notLoading:{padding:0}}}))(G);function H(){return r.a.createElement("div",null,r.a.createElement(M,{name:"Team Leaders"}),r.a.createElement(W,null))}function Z(){return r.a.createElement("div",null,r.a.createElement(M,{name:"Interns"}),r.a.createElement(W,null))}var _=Object(s.a)({palette:{type:"light"}});var Q=function(){return r.a.createElement(u.a,{theme:_},r.a.createElement(m.a,null),r.a.createElement(c.a,{basename:"/E1T1Leaderboard"},r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/"}," ",r.a.createElement(L,null)," "),r.a.createElement(l.a,{exact:!0,path:"/teamleaders"}," ",r.a.createElement(H,null)," "),r.a.createElement(l.a,{exact:!0,path:"/interns"}," ",r.a.createElement(Z,null)," "))))};o.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.3dc26b28.chunk.js.map