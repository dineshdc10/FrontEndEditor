(this.webpackJsonpfrontendeditor=this.webpackJsonpfrontendeditor||[]).push([[0],{53:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(12),s=n.n(o),r=(n(53),n(38)),c=n(39),d=n(46),h=n(45),l=n(40),m=n.n(l),u=(n(61),n(62),n(63),n(64),n(65),n(66),n(67),n(68),n(70),n(71),n(72),n(73),n(74),n(105)),j=n(102),g=n(44),f=n.n(g),b=n(43),x=n.n(b),p=n(42),w=n.n(p),y=n(101),O=n(106),v=n(103),k=n(104),C=n(3),L=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e,i){var a;Object(r.a)(this,n),(a=t.call(this,e,i)).resizeListener=function(){var e=a.getWidth(),t=a.getHeight();a.setState({width:e,height:t})},a.onRun=function(){var e=a.state.value;a.setState({codevalue:e})},a.onChange=function(e){a.setState({value:e})},a.onLangChange=function(e){a.setState({selectedLanguage:e.target.value})},a.onThemeChange=function(){var e=!a.state.darkmode,t="github";t=e?"monokai":"github",a.setState({thememode:t,darkmode:e})},a.downloadToTxtFile=function(){var e=document.createElement("a"),t=a.state.value,n=new Blob([t],{type:"text/plain"});e.href=URL.createObjectURL(n),e.download="download.txt",document.body.appendChild(e),e.click()},a.getWidth=function(){var e=window.innerWidth;return e>1920?e=(e-400)/2:e>1280?e=(e-300)/2:e>960?e=(e-200)/2:e>600?e=(e-150)/2:e-=50,console.log(e+"px"),e+"px"},a.getHeight=function(){var e=window.innerWidth-800,t=window.innerHeight;return e>1920||e>1280||e>960||(t/=2),console.log(t),t+"px"};var o=a.getWidth(),s=a.getHeight();return a.state={value:"",darkmode:!0,thememode:"monokai",height:s,width:o,codevalue:"",languages:["javascript","java","python","xml","ruby","sass","markdown","mysql","json","html","handlebars","golang","csharp","elixir","typescript","css"],selectedLanguage:"html"},a}return Object(c.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeListener)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeListener)}},{key:"render",value:function(){return Object(C.jsx)(y.a,{maxWidth:"xl",style:this.state.darkmode?{backgroundColor:"#404452"}:{backgroundColor:"#ffffff"},children:Object(C.jsxs)(j.a,{container:!0,spacing:3,style:{height:window.innerHeight},children:[Object(C.jsx)(j.a,{item:!0,xs:12,children:Object(C.jsx)(j.a,{container:!0,spacing:1,children:Object(C.jsx)(j.a,{item:!0,xs:12,sm:12,style:{display:"flex",alignItems:"center"},children:Object(C.jsx)(O.a,{position:"static",color:this.state.darkmode?"secondary":"primary",style:this.state.darkmode?{backgroundColor:"#404452"}:{backgroundColor:"#1976d2"},children:Object(C.jsx)(v.a,{children:Object(C.jsxs)(j.a,{container:!0,children:[Object(C.jsxs)(j.a,{item:!0,xs:12,sm:6,md:6,style:{display:"flex",alignItems:"center"},children:[Object(C.jsx)(k.a,{variant:"h6",children:"DC FrontEnd Editor"}),Object(C.jsx)(u.a,{endIcon:Object(C.jsx)(w.a,{}),onClick:this.onRun,style:{marginLeft:20,color:"#fff"},children:"Run"})]}),Object(C.jsxs)(j.a,{item:!0,xs:9,sm:6,md:6,children:[Object(C.jsx)(u.a,{endIcon:Object(C.jsx)(x.a,{}),onClick:this.onThemeChange,style:{marginLeft:20,color:"#fff",float:"right"},children:this.state.darkmode?"Light Mode":"Dark Mode"}),Object(C.jsx)(u.a,{endIcon:Object(C.jsx)(f.a,{}),onClick:this.downloadToTxtFile,style:{color:"#fff",float:"right"},children:"Save"})]})]})})})})})}),Object(C.jsx)(j.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)(m.a,{placeholder:"Type your code here..... Happy Coding...",mode:this.state.selectedLanguage,theme:this.state.thememode,name:"blah2",onChange:this.onChange,value:this.state.value,fontSize:14,showPrintMargin:!1,showGutter:!0,highlightActiveLine:!0,height:this.state.height,width:this.state.width,setOptions:{useWorker:!0,enableBasicAutocompletion:!0,enableLiveAutocompletion:!0,enableSnippets:!0,showLineNumbers:!0,tabSize:2}})}),Object(C.jsx)(j.a,{item:!0,xs:12,sm:6,children:Object(C.jsx)("iframe",{srcDoc:this.state.codevalue,height:this.state.height,style:{backgroundColor:"#ffffff"},width:this.state.width,name:"iframe_code",title:"Code Visual"})}),Object(C.jsx)(j.a,{item:!0,xs:12,sm:12,style:{display:"flex",alignItems:"flex-end",justifyContent:"center"},children:Object(C.jsxs)("i",{style:this.state.darkmode?{color:"#ffffff"}:{color:"#404452"},children:[" Made with \u2764\ufe0f by",Object(C.jsxs)("a",{href:"https://www.linkedin.com/in/dineshdc7",style:this.state.darkmode?{color:"hotpink",textDecoration:"none"}:{color:"red",textDecoration:"none"},children:[" ",Object(C.jsx)("b",{children:"Dinesh Choudhary"})]})]})})]})})}}]),n}(a.a.Component);s.a.render(Object(C.jsx)(a.a.StrictMode,{children:Object(C.jsx)(L,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.e03b7e3d.chunk.js.map