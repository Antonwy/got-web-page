(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/arrow.ff1c04d7.svg"},function(e,a,t){e.exports=t.p+"static/media/daenerys.8579337a.jpg"},function(e,a,t){e.exports=t.p+"static/media/jon-snow.9ed1f5ee.jpeg"},function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/arya-stark.16ba98ac.jpg"},function(e,a,t){e.exports=t.p+"static/media/tyrion-lannister.deecd113.png"},,,,,,,function(e,a,t){},,,,,,,,function(e,a,t){e.exports=t.p+"static/media/got-logo.00b66283.svg"},function(e,a,t){e.exports=t.p+"static/media/menu-icon.e45451f7.svg"},function(e,a,t){e.exports=t.p+"static/media/close-icon.310a810c.svg"},function(e,a,t){e.exports=t.p+"static/media/main-theme.a321e872.mp3"},function(e,a,t){e.exports=t.p+"static/media/play.56efac77.svg"},function(e,a,t){e.exports=t.p+"static/media/pause.1a326f80.svg"},,,,,,,function(e,a,t){e.exports=t.p+"static/media/got-wall.94ac2bf1.jpg"},function(e,a,t){e.exports=t.p+"static/media/kings-landing.8e773c20.jpg"},function(e,a,t){e.exports=t.p+"static/media/braavos.6087ddcf.jpg"},function(e,a,t){e.exports=t.p+"static/media/winterfell.241050e7.jpg"},function(e,a,t){e.exports=t.p+"static/media/casterly-rock.12206767.png"},function(e,a,t){e.exports=t.p+"static/media/old-valyria.29e0921a.png"},function(e,a,t){e.exports=t.p+"static/media/quarth.52dca4cd.jpg"},function(e,a,t){e.exports=t.p+"static/media/dorne.6ae33cf9.png"},function(e,a,t){e.exports=t.p+"static/media/volantis.634ef704.jpg"},,function(e,a,t){e.exports=t(107)},,,,,,function(e,a,t){},,,,,,,,,,function(e,a,t){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(31),c=t.n(r),s=(t(60),t(3)),l=t(4),o=t(6),d=t(5),u=t(7),h=(t(24),t(32)),m=t.n(h),p=t(33),b=t.n(p),v=t(34),y=t.n(v),f=(t(15),t(2)),g=f.a.p({visible:{opacity:1,y:0,delay:function(e){return 250*e.i}},hidden:{opacity:0,y:-100}}),E=f.a.p({visible:{opacity:.8,scaleX:1,delay:function(e){return 250*e.i}},hidden:{opacity:0,scaleX:0}}),k=function(e){return i.a.createElement("div",null,e.x?i.a.createElement(E,{onClick:e.onClick,i:e.delay,pose:e.isVisible?"visible":"hidden",className:"underlineParagraph"},e.children):i.a.createElement(g,{onClick:e.onClick,i:e.delay,pose:e.isVisible?"visible":"hidden",className:"underlineParagraph"},e.children))},w=t(110),j=t(19),x=t.n(j),O=t(35),C=t.n(O),V=t(22),N=t.n(V),S=t(36),I=t.n(S),T=t(37),A=t.n(T),B=f.a.div({visible:{opacity:1,delay:250,x:0},hidden:{opacity:0,x:-100}}),P=f.a.div({visible:{height:"100%"},hidden:{height:"0%"}}),D=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={isPlaying:!1,showNavMenu:!1},t.handleClick=function(e){return function(){t.props.history.push(e)}},t.handleNavOpen=function(){t.setState({showNavMenu:!t.state.showNavMenu})},t.toggleMusic=function(){t.setState({isPlaying:!t.state.isPlaying})},t.renderNavParagraphs=function(e){var a=t.props.isVisible;return console.log(a),i.a.createElement("div",null,i.a.createElement(k,{x:e,onClick:t.handleClick("/allCharacters"),delay:1,isVisible:a},"Characters"),i.a.createElement(k,{x:e,onClick:t.handleClick("/place/The Wall"),delay:2,isVisible:a},"Places"),i.a.createElement(k,{x:e,onClick:t.handleClick("/about"),delay:3,isVisible:a},"About"))},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.isVisible,a=this.state,t=a.isPlaying,n=a.showNavMenu;return i.a.createElement("div",{className:"navBar"},i.a.createElement(x.a,null,"url=",C.a,"playStatus=",t?x.a.status.PLAYING:x.a.status.PAUSED,"loop=",!0),i.a.createElement(B,{pose:e?"visible":"hidden",className:"playMusic"},i.a.createElement("img",{onClick:this.handleClick("/"),alt:"Logo",src:m.a}),i.a.createElement("img",{onClick:this.toggleMusic,className:"playPause",width:"10px",height:"30px",src:t?A.a:I.a,alt:"play"}),i.a.createElement("p",null,"".concat(t?"Pause":"Play"))),i.a.createElement(N.a,{minDeviceWidth:601},i.a.createElement("div",{className:"navMenu"},this.renderNavParagraphs(!1))),i.a.createElement(N.a,{maxDeviceWidth:601},i.a.createElement("div",{className:"mobileNav"},i.a.createElement("img",{alt:"menu",onClick:this.handleNavOpen,src:b.a}),i.a.createElement(P,{pose:n?"visible":"hidden",className:"mobileNavMenu"},i.a.createElement("img",{alt:"close",src:y.a,onClick:this.handleNavOpen}),i.a.createElement("div",null,this.renderNavParagraphs(!0))))))}}]),a}(n.Component),L=Object(w.a)(D),M={display:"flex",flexDirection:"row",alignItems:"center",fontFamily:"Libre Baskerville, serif",fontWeight:"bold",fontStyle:"italic",fontSize:"20px"},R={width:"75px",height:"5px",backgroundColor:"#F45757",marginRight:"10px",borderRadius:"2px"},W=f.a.div({visible:{width:"50px",transition:{duration:500,delay:250}},hidden:{width:0}}),J=f.a.p({visible:{opacity:1,transition:{duration:500,delay:1e3}},hidden:{opacity:0}}),G={margin:"0"},F=function(e){var a=e.text,t=e.isVisible;return i.a.createElement("div",{style:M,className:"lineParagraph"},i.a.createElement(W,{pose:t?"visible":"hidden",style:R}),i.a.createElement(J,{pose:t?"visible":"hidden",style:G},a))},H=f.a.h1({visible:{opacity:1,delay:500,transition:{duration:1e3}},hidden:{opacity:0}}),Q=f.a.p({visible:{opacity:1,delay:500,transition:{duration:1500}},hidden:{opacity:0}}),z=function(e){var a=e.isVisible;return i.a.createElement("div",{className:"mainHeader"},i.a.createElement(F,{isVisible:a,text:"Song of Ice and Fire"}),i.a.createElement(H,{pose:a?"visible":"hidden"},"Game of Thrones"),i.a.createElement(Q,{pose:a?"visible":"hidden"},"Fan-Page for all Game of Thrones Character\u2019s and Places."))},K=["Jon Snow","Arya Stark","Daenerys Targaryen","Tyrion Lannister"],q=["The Wall","Dorne","Braavos","Volantis"],X=f.a.h3({visible:{opacity:1,delay:function(e){return 250*e.i}},hidden:{opacity:0}}),Y=Object(w.a)(function(e){var a=e.isVisible,t=e.history;return i.a.createElement("div",{className:"popularList"},i.a.createElement("div",null,i.a.createElement(X,{i:1,pose:a?"visible":"hidden"},"Popular Characters:"),K.map(function(e,n){return i.a.createElement(k,{key:n,onClick:function(){return a=e,void t.push({pathname:"/character/"+a+"/"+!0});var a},x:!0,delay:n+2,isVisible:a},e)})),i.a.createElement("div",null,i.a.createElement(X,{i:6,pose:a?"visible":"hidden"},"Popular Places:"),q.map(function(e,n){return i.a.createElement(k,{key:n,onClick:function(){return a=e,void t.push({pathname:"/place/"+a});var a},x:!0,delay:n+7,isVisible:a},e)})))}),U=f.a.h3({visible:{opacity:1,delay:500,transition:{duration:1e3}},hidden:{opacity:0}}),Z=f.a.p({visible:{opacity:1,delay:500,transition:{duration:750}},hidden:{opacity:0}}),$=function(e){var a=e.header,t=e.text,n=e.isVisible;return i.a.createElement("div",null,i.a.createElement(U,{pose:n?"visible":"hidden"},a),i.a.createElement(Z,{pose:n?"visible":"hidden",style:{opacity:".7"}},t))},_=function(e){var a=e.isVisible;return i.a.createElement("div",{className:"mainBottomPart"},i.a.createElement(Y,{isVisible:a}),i.a.createElement("div",{className:"storyArticle"},i.a.createElement($,{header:"The Story:",text:"Based on the bestselling book series A Song of Ice and Fire by George R.R. Martin, this sprawling new HBO drama is set in a world where summers span decades and winters can last a lifetime. From the scheming south and the savage eastern lands, to the frozen north and ancient Wall that protects the realm from the mysterious darkness beyond, the powerful families of the Seven Kingdoms are locked in a battle for the Iron Throne. This is a story of duplicity and treachery, nobility and honor, conquest and triumph. In the Game of Thrones, you either win or you die.",isVisible:a})))},ee=f.a.div({visible:{opacity:1,scale:1,transition:{duration:750}},hidden:{opacity:0,scale:1.5}}),ae=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={isVisible:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"render",value:function(){var e=this.state.isVisible;return i.a.createElement("div",null,i.a.createElement(ee,{pose:e?"visible":"hidden",className:"bg"}),i.a.createElement(z,{isVisible:e}),i.a.createElement(_,{isVisible:e}))}}]),a}(n.Component),te=t(109),ne=t(108),ie=(t(70),t(40)),re=t.n(ie),ce=f.a.h1({visible:{opacity:1,x:0,transition:{duration:500}},hidden:{opacity:0,x:-100}}),se=f.a.ul({visible:{staggerChildren:100},hidden:{}}),le=f.a.li({visible:{opacity:1,x:0},hidden:{opacity:0,x:-100}}),oe=f.a.div({visible:{opacity:1},hidden:{opacity:0}}),de=f.a.p({visible:{opacity:1,x:0,delay:500,transition:{duration:500}},hidden:{opacity:0,x:-100}}),ue=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={character:void 0,isVisible:!1},t.getData=function(e){var a={name:e[0].name,aliases:e[0].aliases,titles:e[0].titles,gender:e[0].gender,born:e[0].born,culture:e[0].culture,playedBy:e[0].playedBy,tvSeries:e[0].tvSeries};return e.forEach(function(e){Object.keys(a).forEach(function(n){t.checkLength(e[n],a[n])&&(a[n]=e[n])})}),a},t.checkLength=function(e,a){return Array.isArray(e)?e.length>a.length||e.length===a.length&&e[0].length>a[0].length:e.length>=a.length},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){var e=this;re.a.get("https://www.anapioficeandfire.com/api/characters?name=".concat(this.props.character)).then(function(a){e.setState({character:e.getData(a.data)},function(){e.setState({isVisible:!0})})})}},{key:"render",value:function(){var e=this.state,a=e.character,t=e.isVisible?"visible":"hidden";return i.a.createElement("div",null,a?i.a.createElement("div",{className:"characterHeader"},i.a.createElement(ce,{pose:t},a.name),i.a.createElement(de,{pose:t},"Watch the Video ",i.a.createElement("span",{onClick:this.props.handleClick(a)},"here"),"."),i.a.createElement("div",null,i.a.createElement(se,{pose:t,className:"characterInfo"},i.a.createElement(oe,null,i.a.createElement("li",null,i.a.createElement("span",null,"Aliases:")),i.a.createElement(se,{pose:t},a.aliases.map(function(e,a){return i.a.createElement(le,{key:a},e)})),i.a.createElement("li",null,i.a.createElement("span",null,"Titles:")),i.a.createElement(se,{pose:t},a.titles.map(function(e,a){return i.a.createElement(le,{key:a},e)}))),i.a.createElement(oe,null,i.a.createElement("li",null,i.a.createElement("span",null,"Gender: "),a.gender),i.a.createElement("li",null,i.a.createElement("span",null,"Born: "),a.born),i.a.createElement("li",null,i.a.createElement("span",null,"Culture: "),a.culture),i.a.createElement("li",null,i.a.createElement("span",null,"Played by: "),a.playedBy[0]),i.a.createElement("li",null,i.a.createElement("span",null,"Tv-Series:")),i.a.createElement(se,{pose:t},a.tvSeries.map(function(e,a){return i.a.createElement(le,{key:a},e)})))))):i.a.createElement("div",null))}}]),a}(i.a.Component),he=t(13),me=t.n(he),pe=t(14),be=t.n(pe),ve=t(16),ye=t.n(ve),fe=t(17),ge=t.n(fe),Ee=t(41),ke=f.a.div({visible:{width:"90%",height:"90%",borderRadius:0},hidden:{width:0,height:0,borderRadius:"50%"}}),we=f.a.div({visible:{opacity:1},hidden:{opacity:0}}),je=(f.a.iframe({visible:{opacity:1,delay:500},hidden:{opacity:0}}),function(e){var a=e.character,t=e.showVideo,n=e.hideVideo,r=t?"visible":"hidden";return i.a.createElement(we,{style:{pointerEvents:t?"all":"none"},onClick:function(){n()},pose:r,className:"videoBack"},i.a.createElement(ke,{pose:r,className:"characterVideo"},t?i.a.createElement(Ee.a,{videoId:function(){var e="uuDu43Gnyts";switch(a){case"Jon Snow":e="uuDu43Gnyts";break;case"Arya Stark":e="yMAmQhkkn4k";break;case"Daenerys Targaryen":e="wpYL7kO0WmA";break;case"Tyrion Lannister":e="J1TL-EQWtvo";break;default:e="uuDu43Gnyts"}return e}(),className:"video",containerClassName:"video"}):i.a.createElement("div",null)))}),xe=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={isVisible:!1,character:t.props.match.params.name,background:me.a,showVideo:!1},t.chooseImage=function(){switch(t.state.character){case"Jon Snow":return be.a;case"Arya Stark":return ye.a;case"Daenerys Targaryen":return me.a;case"Tyrion Lannister":return ge.a;default:return be.a}},t.handleVideoClick=function(e){return function(){t.setState({showVideo:!0})}},t.hideVideo=function(){t.setState({showVideo:!1})},t.checkTransition=function(){var e=t.state.isVisible,a="false"!==t.props.match.params.transition;return e&&a?"visible":a?!e&&a?"hidden":void 0:"normal"},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0,background:this.chooseImage()}),console.log(this.props)}},{key:"render",value:function(){var e=this.state,a=(e.isVisible,e.character),t=e.background,n=e.showVideo;return i.a.createElement("div",null,i.a.createElement(ee,{pose:this.checkTransition(),style:{backgroundImage:"url(".concat(t,")")},className:"bg"}),i.a.createElement(ue,{handleClick:this.handleVideoClick,character:a}),i.a.createElement(je,{character:a,hideVideo:this.hideVideo,showVideo:n}))}}]),a}(n.Component),Oe=(t(101),t(53)),Ce=t(12),Ve=t.n(Ce),Ne=f.a.div({middle:{opacity:1},left:{opacity:0},right:{opacity:0}}),Se=f.a.img({middle:{opacity:1},left:{opacity:0},right:{opacity:0}}),Ie=f.a.div({middle:{opacity:1,width:"22vw",height:"22vw",transition:{duration:500}},left:{opacity:1,width:"15vw",height:"15vw",transition:{duration:500}},right:{opacity:1,width:"15vw",height:"15vw",transition:{duration:500}},full:{width:"100vw",height:"100vh",flip:!0,borderRadius:0,position:"fixed",top:0,zIndex:20}}),Te=f.a.div({middle:{opacity:1,left:"calc(50vw - 200px)",transition:{duration:500},scale:1},left:{opacity:1,left:"-200px",transition:{duration:500},scale:1},right:{opacity:1,left:"calc(100vw - 200px)",transition:{duration:500},scale:1},hidden:{opacity:0,left:"calc(50vw - 200px)",scale:0}}),Ae=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={clicked:!1},t.imageClick=function(){t.setState({clicked:!0}),setTimeout(function(){t.props.history.push({pathname:"/character/"+t.props.character.name+"/"+!1})},300)},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props,a=e.character,t=e.handleClick,n=e.isVisible,r="middle";switch(a.pos){case 0:r="left";break;case 1:r="middle";break;case 2:r="right";break;case 3:r="hidden";break;default:r="middle"}var c=this.state.clicked&&"middle"===r;return i.a.createElement(Te,{pose:n?r:"hidden",className:"characterItem"},i.a.createElement("div",{className:"characterImgButtons"},c?i.a.createElement("div",null):i.a.createElement(Se,{alt:"arrow",src:Ve.a,onClick:t(1)}),i.a.createElement(Ie,{onClick:"middle"===r?this.imageClick:function(){console.log(r)},pose:c?"full":r,className:"characterItemImage",style:{backgroundImage:"url(".concat(a.image,")")}}),c?i.a.createElement("div",null):i.a.createElement(Se,{className:"arrowRotate",alt:"arrow",src:Ve.a,onClick:t(-1)})),c?i.a.createElement("div",null):i.a.createElement(Ne,{pose:r},i.a.createElement("h2",null,a.name),i.a.createElement("p",null,a.description)))}}]),a}(i.a.Component),Be=Object(w.a)(Ae),Pe=[{pos:0,name:"Tyrion Lannister",description:"Lord Tyrion Lannister is the youngest child of Lord Tywin Lannister and younger brother of Cersei and Jaime Lannister. A dwarf, he uses his wit and intellect to overcome the prejudice he faces.",image:ge.a},{pos:1,name:"Jon Snow",description:"Jon Snow, born Aegon Targaryen, is the son of Lyanna Stark and Rhaegar Targaryen, the late Prince of Dragonstone. From infancy, Jon is presented as the bastard son of Lord Eddard Stark, Lyanna's brother, and raised by Eddard alongside his lawful children at Winterfell but his true parentage is kept secret from everyone, including Jon himself.",image:be.a},{pos:2,name:"Arya Stark",description:"Arya Stark is the third child and second daughter of Lord Eddard Stark and his wife, Lady Catelyn Stark. After narrowly escaping the persecution of House Stark by House Lannister, Arya is trained as a Faceless Man at the House of Black and White in Braavos, and uses her new skills to bring those who have wronged her family to justice.",image:ye.a},{pos:3,name:"Daenerys Targaryen",description:"Queen Daenerys Targaryen, also known as Dany and Daenerys Stormborn, is the younger sister of Rhaegar Targaryen and Viserys Targaryen and only daughter of King Aerys II Targaryen and Queen Rhaella Targaryen, who were both ousted from the Iron Throne during Robert Baratheon's rebellion.",image:me.a}],De=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).state={characterInfo:Pe},t.handleClick=function(e){return function(){var a=t.state.characterInfo;console.log(a.length);var n=Object(Oe.a)(a);a.forEach(function(a,t){var i=a.pos;3===i?n[t].pos=e>0?0:2:0===i?n[t].pos=e>0?1:3:n[t].pos+=e}),t.setState({characterInfo:n})}},t.renderItems=function(){var e=[];return Pe.forEach(function(a,n){return e.push(i.a.createElement(Be,{key:n,handleClick:t.handleClick,isVisible:t.props.isVisible,character:a}))}),e},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"carousel"},this.renderItems())}}]),a}(i.a.Component),Le=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={isVisible:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"render",value:function(){var e=this.state.isVisible;return i.a.createElement("div",null,i.a.createElement(ee,{pose:e?"visible":"hidden",className:"bg allCharactersBg"}),i.a.createElement(De,{isVisible:e}))}}]),a}(n.Component),Me=(t(103),function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={isVisible:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"render",value:function(){var e=this.state.isVisible;return i.a.createElement("div",null,i.a.createElement(ee,{pose:e?"visible":"hidden",className:"bg aboutBg"}),i.a.createElement("h1",null,"About"),i.a.createElement(F,{isVisible:e,text:"Fan Page of Game of Thrones"}))}}]),a}(n.Component)),Re=(t(105),f.a.h1({visible:{opacity:1},hidden:{opacity:0}})),We=function(e){var a=e.transition,t=e.name,n=e.isVisible;return i.a.createElement("div",{className:"placeHeader"},i.a.createElement("img",{src:Ve.a,alt:"arrow",onClick:a(1)}),i.a.createElement(Re,{pose:n?"hidden":"visible"},t),i.a.createElement("img",{className:"rotatetArrow",src:Ve.a,alt:"arrow",onClick:a(-1)}))},Je=f.a.div({visible:{staggerChildren:0},hidden:{staggerChildren:150}}),Ge=f.a.div({visible:{height:"100%",transition:{duration:0}},hidden:{height:"0%",transition:{duration:750,ease:"easeOut"}}}),Fe=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(r)))).showBlocks=function(){for(var e=[],a=0;a<6;a++)e.push(i.a.createElement(Ge,{className:"imgContainer",key:a},i.a.createElement("div",{style:{backgroundImage:"url(".concat(t.props.img,")")}})));return e},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.animateBlock?"visible":"hidden";return i.a.createElement(Je,{className:"blockContainer",pose:e},this.showBlocks())}}]),a}(n.Component),He=t(44),Qe=t.n(He),ze=t(45),Ke=t.n(ze),qe=t(46),Xe=t.n(qe),Ye=t(47),Ue=t.n(Ye),Ze=t(48),$e=t.n(Ze),_e=t(49),ea=t.n(_e),aa=t(50),ta=t.n(aa),na=t(51),ia=t.n(na),ra=t(52),ca=t.n(ra),sa=f.a.div({visible:{staggerChildren:0},hidden:{staggerChildren:150}}),la=f.a.div({visible:{height:"100%",y:"100%",transition:{duration:0}},hidden:{height:"0%",y:"0%",transition:{duration:750,ease:"easeOut"}}}),oa=function(e){var a=e.animateBlock,t=e.color,n=a?"visible":"hidden";return i.a.createElement(sa,{className:"blockContainer",pose:n},function(){for(var e=[],a=0;a<6;a++)e.push(i.a.createElement(la,{style:{backgroundColor:t},className:"secAnimBlock",key:a}));return e}())},da=[{name:"The Wall",img:Qe.a,color:"rgb(54, 96, 142)"},{name:"King's Landing",img:Ke.a,color:"rgb(86, 61, 40)"},{name:"Braavos",img:Xe.a,color:"rgb(76, 90, 95)"},{name:"Winterfell",img:Ue.a,color:"rgb(93, 97, 114)"},{name:"Casterly Rock",img:$e.a,color:"rgb(99, 101, 97)"},{name:"Old Valyria",img:ea.a,color:"rgb(55, 63, 63)"},{name:"Quarth",img:ta.a,color:"rgb(150, 153, 149)"},{name:"Dorne",img:ia.a,color:"rgb(113, 78, 53)"},{name:"Volantis",img:ca.a,color:"rgb(188, 176, 169)"}],ua=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).getPlace=function(){var e=da.findIndex(function(e){return e.name===t.props.match.params.name});return da[e]},t.getIndex=function(){return da.findIndex(function(e){return e.name===t.props.match.params.name})},t.state={isVisible:!1,animateBlock:!1,place:t.getPlace(),currIndex:t.getIndex(),secondIndex:t.getIndex()},t.animateTransition=function(e){return function(){var a=t.state.currIndex;t.setState({animateBlock:!t.state.animateBlock,secondIndex:a}),setTimeout(function(){a===da.length-1&&e>0?t.setState({place:da[0],currIndex:0}):0===a&&e<0?t.setState({place:da[da.length-1],currIndex:da.length-1}):t.setState({place:da[a+e],currIndex:a+e}),t.setState({animateBlock:!t.state.animateBlock})},300)}},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"render",value:function(){var e=this.state,a=e.isVisible,t=e.animateBlock,n=e.secondIndex,r=this.state.place,c=r.name,s=r.img,l=a?"visible":"hidden";return i.a.createElement("div",null,i.a.createElement(ee,{style:{backgroundImage:"url(".concat(s,")")},pose:l,className:"bg placeBg"}),i.a.createElement(We,{isVisible:t,anim:l,transition:this.animateTransition,name:c}),i.a.createElement(Fe,{animateBlock:t,img:da[n].img}),i.a.createElement(oa,{animateBlock:t,color:da[n].color}))}}]),a}(n.Component),ha=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(i)))).state={isVisible:!1},t}return Object(u.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.setState({isVisible:!0})}},{key:"render",value:function(){var e=this.state.isVisible;return i.a.createElement(te.a,{basename:"/got-web-page/#/"},i.a.createElement("div",{className:"App"},i.a.createElement(L,{isVisible:e}),i.a.createElement(ne.a,{exact:!0,path:"/",component:ae}),i.a.createElement(ne.a,{path:"/character/:name/:transition",component:xe}),i.a.createElement(ne.a,{path:"/allCharacters",component:Le}),i.a.createElement(ne.a,{path:"/place/:name",component:ua}),i.a.createElement(ne.a,{path:"/about",component:Me})))}}]),a}(n.Component);c.a.render(i.a.createElement(ha,null),document.getElementById("root"))}],[[54,2,1]]]);
//# sourceMappingURL=main.e6979f33.chunk.js.map