(this["webpackJsonpbounding-boxes"]=this["webpackJsonpbounding-boxes"]||[]).push([[0],{63:function(t,e,a){},69:function(t,e){},70:function(t,e){},71:function(t,e){},78:function(t,e,a){},79:function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),c=a(11),o=a.n(c),r=(a(63),a(15)),s=a(25),l=a(119),d=a(111),h=a(49),j=a(118),b=a(120),p=a(121),u=a(117),m=a(52),g=a(127),f=a(122),x=a(123),v=a(124),O=a(27),w=function(t,e){e.width,e.height;return t.getObjects().filter((function(t){return t.selectable})).map((function(e){var a=Object.values(e.aCoords),n=function(t){var e=t.map((function(t){return t.y})),a=t.map((function(t){return t.x})),n=Math.min.apply(Math,Object(O.a)(a)),i=Math.max.apply(Math,Object(O.a)(a)),c=Math.min.apply(Math,Object(O.a)(e));return{left:n,top:c,width:i-n,height:Math.max.apply(Math,Object(O.a)(e))-c}}(a),i=n.left,c=n.top,o=n.height,r=n.width,s=t.getContext("2d").getImageData(i,c,r,o),l=function(t){var e=document.createElement("canvas"),a=e.getContext("2d");return e.width=t.width,e.height=t.height,a.putImageData(t,0,0),e.toDataURL()}(s);return console.log(a,n),{previewWindow:n,imageData:s,dataUrl:l,_original:e}}))},y=a(114),C=a(116),N=a(126),M=a(125),S=a(7),I=Object(d.a)((function(t){return{root:{marginTop:t.spacing(1)},media:{height:140,width:"30%",objectFit:"contain",display:"inline-block"},textContent:{width:"70%",paddingLeft:t.spacing(1),display:"inline-block"},chipList:{display:"flex",flexWrap:"wrap","& > *":{margin:t.spacing(.5)}}}})),k=function(t){var e=I(),a=Object(n.useState)([]),i=Object(r.a)(a,2),c=i[0],o=i[1],s=Object(n.useState)(""),l=Object(r.a)(s,2),d=l[0],h=l[1],j=t.selectedItem,b=t.position,p=j.previewWindow,m=p.left,g=p.top,f=p.height,x=p.width;return Object(S.jsx)(y.a,{className:e.root,children:Object(S.jsxs)(C.a,{children:[Object(S.jsx)("img",{src:j.dataUrl,className:e.media,alt:"preview"}),Object(S.jsxs)("div",{className:e.textContent,children:[Object(S.jsxs)(u.a,{variant:"h5",component:"h2",children:["Item ",b+1]}),Object(S.jsxs)(u.a,{variant:"body2",color:"textSecondary",component:"p",children:["left: ",m.toFixed(2)," top: ",g.toFixed(2),Object(S.jsx)("br",{}),"width: ",x.toFixed(2)," height: ",f.toFixed(2),Object(S.jsx)("br",{}),Object(S.jsx)("br",{})]}),Object(S.jsx)("div",{className:e.chipList,children:c.map((function(t,e){return Object(S.jsx)(N.a,{variant:"outlined",size:"small",label:t,onDelete:(a=t,function(){o((function(t){return t.filter((function(t){return t.trim().toLowerCase()!==a.trim().toLowerCase()}))}))})},"".concat(e,"-").concat(t));var a}))}),Object(S.jsx)("form",{className:e.root,noValidate:!0,onSubmit:function(t){t.preventDefault(),o((function(t){return t.concat(d.trim())})),h("")},children:Object(S.jsx)(M.a,{label:"New Tag",value:d,onChange:function(t){h(t.target.value)}})})]})]})})},F=a.p+"static/media/fruits.f39ea5b0.jpg",W=(a(78),Object(d.a)((function(t){return{root:{flexGrow:1},bottomAppBar:{top:"auto",bottom:0},title:{flexGrow:1},panelsContainer:{width:"100vw",overflow:"hidden"},panels:{transition:"transform .3s",width:"200vw",display:"grid",gridTemplateColumns:"1fr 1fr",padding:"2.5vw",gridGap:"5vw","& > *":{height:"80vh",overflow:"scroll"}},imageWrapper:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",height:"100%"},image:{maxWidth:"100%",maxHeight:"75vh",objectFit:"contain",opacity:0},canvasWrapper:{position:"absolute",top:0}}})));var L=function(){var t=W(),e=Object(n.useState)(null),a=Object(r.a)(e,2),i=a[0],c=a[1],o=Object(n.useState)([]),d=Object(r.a)(o,2),O=d[0],y=d[1],C=Object(n.useState)(0),N=Object(r.a)(C,2),M=N[0],I=N[1],L=Object(n.useState)(0),B=Object(r.a)(L,2),D=B[0],T=B[1],z=Object(n.useState)(0),A=Object(r.a)(z,2),P=A[0],E=A[1],G=Object(h.a)({palette:{type:"dark"}});return Object(S.jsxs)(j.a,{className:"App",theme:G,children:[Object(S.jsx)(l.a,{}),Object(S.jsx)(b.a,{position:"static",children:Object(S.jsx)(p.a,{children:Object(S.jsx)(u.a,{variant:"h6",className:t.title,children:M?"Categorize your selection":"Isolate objects"})})}),Object(S.jsx)("div",{className:t.panelsContainer,children:Object(S.jsxs)("div",{className:t.panels,style:{transform:"translateX(-".concat(100*M,"vw)")},children:[Object(S.jsx)(m.a,{elevation:3,children:Object(S.jsxs)("div",{className:t.imageWrapper,children:[Object(S.jsx)("img",{id:"image",src:F,className:t.image,alt:"logo",onLoad:function(){var t=document.getElementById("image"),e=window.getComputedStyle(t),a=e.height,n=e.width.replace("px",""),i=a.replace("px",""),o=function(t,e){var a,n,i,c=!1,o=new s.fabric.Canvas(t,{height:e.height,width:e.width,containerClass:"canvas"});return o.on("mouse:down",(function(t){var e=o.getPointer(t.e);t.target&&t.target.selectable||(c=!0,a=e.x,n=e.y,i=new s.fabric.Rect({left:a,top:n,fill:"transparent",stroke:"red",strokeWidth:3}),o.add(i))})),o.on("mouse:move",(function(t){if(c){var e=o.getPointer(t.e);a>e.x&&i.set({left:Math.abs(e.x)}),n>e.y&&i.set({top:Math.abs(e.y)}),i.set({width:Math.abs(a-e.x)}),i.set({height:Math.abs(n-e.y)}),o.renderAll()}})),o.on("mouse:up",(function(t){c=!1})),o}("canvas",{height:i,width:n});T(i),E(n),c(o),window.theCanvas=o,window.theImage=t,console.log("Drawing image onto canvas",n,i);var r=new s.fabric.Image(t,{originX:"left",originY:"top",top:0,left:0,selectable:!1});r.scaleToHeight(i),r.scaleToWidth(n),o.add(r)}}),Object(S.jsx)("div",{className:t.canvasWrapper,children:Object(S.jsx)("canvas",{className:t.canvas,id:"canvas"})})]})}),Object(S.jsx)("div",{children:O.map((function(t,e){return Object(S.jsx)(k,{selectedItem:t,position:e},e)}))})]})}),Object(S.jsx)(b.a,{position:"fixed",color:"primary",className:t.bottomAppBar,children:Object(S.jsx)(p.a,{children:Object(S.jsx)(g.a,{steps:2,variant:"text",color:"primary",activeStep:M,nextButton:Object(S.jsxs)(f.a,{size:"small",variant:"contained",color:"primary",onClick:function(){var t=w(i,{height:D,width:P});y(t),I((function(t){return t+1}))},disabled:1<=M,children:["Next",Object(S.jsx)(x.a,{})]}),backButton:Object(S.jsxs)(f.a,{size:"small",variant:"contained",color:"primary",onClick:function(){I((function(t){return t-1}))},disabled:M<=0,children:[Object(S.jsx)(v.a,{}),"Back"]})})})})]})},B=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,128)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;a(t),n(t),i(t),c(t),o(t)}))};o.a.render(Object(S.jsx)(i.a.StrictMode,{children:Object(S.jsx)(L,{})}),document.getElementById("root")),B()}},[[79,1,2]]]);
//# sourceMappingURL=main.7565e7c8.chunk.js.map