(this.webpackJsonpe1t1leaderboard=this.webpackJsonpe1t1leaderboard||[]).push([[0],{59:function(e,a,t){e.exports=t(71)},71:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),i=t.n(o),l=t(21),c=t(7),s=t(48),m=t(95),u=t(96),p=t(88),d=t(89),g=t(86),v=t(87),f=Object(g.a)({button:{margin:"25px 15px",paddingLeft:40,paddingRight:40}});function h(e){var a=e.primary,t=e.to,n=e.color,o=e.variant,i=f(),c=r.a.useMemo((function(){return r.a.forwardRef((function(e,a){return r.a.createElement(l.b,Object.assign({to:t,ref:a},e))}))}),[t]);return r.a.createElement(v.a,{color:n,variant:o,component:c,className:i.button},a)}function E(){return r.a.createElement(p.a,{container:!0,alignItems:"center",direction:"column",justify:"center",style:{minHeight:"100vh"}},r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(d.a,{variant:"h1"}," E1T1 Leaderboard")),r.a.createElement(p.a,{item:!0,xs:12},r.a.createElement(h,{primary:"Cumalative",to:"/cumalative",color:"primary",variant:"contained"}),r.a.createElement(h,{primary:"Week 8/2",to:"/current-week",color:"primary",variant:"contained"})))}var w=t(90),b=t(91),y=t(92),k=t(45),x=t.n(k),j=Object(g.a)((function(e){return{homeButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appbar:{background:e.palette.background.default,color:e.palette.text.primary,marginBottom:e.spacing(4)}}}));function C(e){var a=e.primary,t=e.to,n=j(),o=r.a.useMemo((function(){return r.a.forwardRef((function(e,a){return r.a.createElement(l.b,Object.assign({to:t,ref:a},e))}))}),[t]);return r.a.createElement(w.a,{edge:"start",className:n.homeButton,color:"inherit",component:o},a)}function I(e){var a=j();return r.a.createElement(b.a,{position:"static",className:a.appbar,elevation:0},r.a.createElement(y.a,null,r.a.createElement(C,{primary:r.a.createElement(x.a,null),to:"/"}),r.a.createElement(d.a,{variant:"h6",className:a.title},e.name)))}var O=t(46),S=t(47),B=t(50),D=t(49),N={apiKey:"AIzaSyCaS_MvM8zO_IpBmura0jDUbZ4JscmjjPY",discoveryDocs:["https://sheets.googleapis.com/$discovery/rest?version=v4"],spreadsheetId:"1DqQ79VxTRVUSAiDb0ZXbMFeouZEINaXBZv3zQ4gYZSQ"};function P(e){console.log(window.location.pathname);var a="CumPoints 7/30";"/e1t1-leaderboard/current-week"===window.location.pathname&&(a="CumPoints 8/2"),window.gapi.client.load("sheets","v4",(function(){window.gapi.client.sheets.spreadsheets.values.batchGet({spreadsheetId:N.spreadsheetId,majorDimension:"COLUMNS",ranges:[a+"!C11:C68",a+"!BF11:BF52"]}).then((function(a){for(var t=a.result.valueRanges[0].values,n=a.result.valueRanges[1].values,r=[],o=0;o<t[0].length;o++)r.push({name:t[0][o],points:parseInt(n[0][o])});e({fullSend:r||[]})}),(function(a){console.log(a.result.error),e(!1,a.result.error)}))}))}var L=t(76),M=t(97),R=t(74),Z=t(93),z=t(98),F=t(94),G=function(e){Object(B.a)(t,e);var a=Object(D.a)(t);function t(){var e;Object(O.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={interns:[],error:null,loading:!0},e.onLoad=function(a,t){if(a){var n=a.fullSend;e.setState({interns:n}),e.setState({loading:!1})}else e.setState({error:t})},e.initClient=function(){window.gapi.client.init({apiKey:N.apiKey,discoveryDocs:N.discoveryDocs}).then((function(){P(e.onLoad)}))},e}return Object(S.a)(t,[{key:"componentDidMount",value:function(){window.gapi.load("client",this.initClient)}},{key:"Bar",value:function(e){var a=e.name,t=e.points,n=e.classes,o=t/e.max;"/e1t1-leaderboard/current-week"===window.location.pathname&&(o=t>1e3?1:t<100?.09:t/1e3);var i=n.barPaper;return t>=1e3&&"/e1t1-leaderboard/current-week"===window.location.pathname&&(i=n.barPaperComplete),r.a.createElement(M.a,{width:o},r.a.createElement(R.a,{elevation:3,className:i},r.a.createElement(d.a,{className:n.name}," ",a," "),r.a.createElement(d.a,null," ",t," ")))}},{key:"comparePoints",value:function(e,a){return parseInt(e.points)===parseInt(a.points)?0:parseInt(e.points)>parseInt(a.points)?-1:1}},{key:"render",value:function(){var e=this,a=this.state,t=a.interns,n=a.error,o=a.loading,i=this.props.classes,l=[],c=1,s=i.loading;if(!o){if(s=i.notLoading,n)return console.log(n),r.a.createElement("div",null," error occured fetching data, contact Lucas Guzman-Finn ");(l=t).sort(this.comparePoints),"/e1t1-leaderboard/cumalative"===window.location.pathname&&(c=l[0].points)}return r.a.createElement(Z.a,{maxWidth:"lg"},r.a.createElement(R.a,{elevation:2,className:i.paper,width:1},r.a.createElement(z.a,{in:o,timeout:30,className:s},r.a.createElement(F.a,{color:"primary"})),r.a.createElement(z.a,{in:!o,timeout:1e3},r.a.createElement("div",null,l.map((function(a,t){return r.a.createElement(e.Bar,{key:t,name:a.name,points:a.points,classes:i,max:c})}))))))}}]),t}(n.Component),A=Object(L.a)((function(e){return{paper:{padding:e.spacing(2)},barPaper:{padding:e.spacing(2),margin:e.spacing(2),display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:e.palette.primary.dark},barPaperComplete:{padding:e.spacing(2),margin:e.spacing(2),display:"flex",flexDirection:"row",overflow:"hidden",whiteSpace:"nowrap",color:"white",background:"green"},name:{flexGrow:1},loading:{margin:e.spacing(2)},notLoading:{padding:0,margin:0}}}))(G);function J(){return r.a.createElement("div",null,r.a.createElement(I,{name:"Week 8/2"}),r.a.createElement(A,null))}function K(){return r.a.createElement("div",null,r.a.createElement(I,{name:"Cumalative"}),r.a.createElement(A,null))}var Q=Object(s.a)({palette:{type:"dark"}});var U=function(){return r.a.createElement(m.a,{theme:Q},r.a.createElement(u.a,null),r.a.createElement(l.a,{basename:"/e1t1-leaderboard"},r.a.createElement(c.c,null,r.a.createElement(c.a,{exact:!0,path:"/"}," ",r.a.createElement(E,null)," "),r.a.createElement(c.a,{exact:!0,path:"/current-week"}," ",r.a.createElement(J,null)," "),r.a.createElement(c.a,{exact:!0,path:"/cumalative"}," ",r.a.createElement(K,null)," "))))};i.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.ad7fbf69.chunk.js.map