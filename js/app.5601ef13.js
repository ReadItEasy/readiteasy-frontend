(function(t){function e(e){for(var a,s,i=e[0],u=e[1],c=e[2],d=0,f=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);l&&l(e);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/readiteasy-frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var l=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},"19d3":function(t,e,n){"use strict";var a=n("5582"),r=n.n(a);r.a},"400f":function(t,e,n){},"434d":function(t,e,n){},"43ed":function(t,e,n){},"49e4":function(t,e,n){},5582:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4160"),n("b0c0"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar",{staticClass:"fixed-header"}),n("router-view",{staticClass:"content"})],1)},o=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav header",attrs:{id:"nav"}},[n("router-link",{staticClass:"brand",attrs:{to:"/"}},[t._v("ReadItEasy")]),n("nav",[n("router-link",{attrs:{to:{name:"languages"}}},[t._v("Languages")]),t.loggedIn?[n("router-link",{attrs:{to:{name:"profile"}}},[t._v("Profile")]),n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])]:[n("router-link",{attrs:{to:{name:"login"}}},[t._v("Login")]),n("router-link",{attrs:{to:{name:"register"}}},[t._v("Register")])]],2)],1)},i=[],u=n("5530"),c=n("2f62"),l=Object(u["a"])({},Object(c["b"])(["loggedIn"])),d={methods:{logout:function(){this.$store.dispatch("logout")}},computed:Object(u["a"])({},l)},f=d,p=(n("badd"),n("2877")),m=Object(p["a"])(f,s,i,!1,null,"25bf68f3",null),v=m.exports,h={components:{NavBar:v}},g=h,b=(n("034f"),Object(p["a"])(g,r,o,!1,null,null,null)),w=b.exports,_=(n("45fc"),n("8c4f")),k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("ReadItEasy")]),n("p",[t._v(" Welcome on ReadItEasy, an app that purpuse is to help you reading in one of your target languages. We currently just have few books and only for chinese, but more content will soon arrive ! ")]),n("p",[t._v(" Start reading right now with one of my favorite chinese book : "),n("router-link",{attrs:{to:{path:"/mandarin/book/活着/1"}}},[t._v("To Live")]),t._v(" from Hua Yu ")],1),n("br"),n("p",[t._v(" If you create an account, you can save your known words. Unknown words will then lighten in red so you can see in a glimpse words you don't know yet in a book. ")]),n("p",[t._v(" With this information, you can then evaluate if a word is too complex to read, or if it suits your level. This level is up to you. Some people like to have a smooth reading so they target books which they already know at least 98% of the words. Some others are more obstinate and barely know half of the words from a book. For both cases, ReadItEasy can help you quickly look up definitions and statistics about a given word ")])])},y=[],x={},C=x,N=(n("19d3"),Object(p["a"])(C,k,y,!1,null,"425cbfa8",null)),O=N.exports,W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"reader-tool"}},[n("ReaderDrawer",{directives:[{name:"show",rawName:"v-show",value:t.showReaderDrawer,expression:"showReaderDrawer"}],attrs:{clickedWord:t.clickedWord}}),n("transition",{attrs:{name:"slide-fade"}},[n("div",{style:t.showReaderDrawer?"padding-left:10px;padding-right:310px":"padding-left:160px;padding-right:160px",attrs:{id:"reader-content"},on:{click:t.onClickHandler}},[n("h1",[t._v(t._s(t.bookName))]),n("h2",[t._v("Chapter "+t._s(t.chapterNumber))]),n("div",[t.chapterNumber>1?n("router-link",{staticClass:"book-link",attrs:{to:{name:"reader-tool",params:{bookName:t.bookName,targetLanguage:t.targetLanguage,chapterNumber:parseInt(t.chapterNumber)-1}}}},[n("span",{staticClass:"nav-chapter"},[t._v("previous chapter")])]):t._e(),n("router-link",{staticClass:"book-link",attrs:{to:{name:"reader-tool",params:{bookName:t.bookName,targetLanguage:t.targetLanguage,chapterNumber:parseInt(t.chapterNumber)+1}}}},[n("span",[t._v("next chapter")])])],1),t.loggedIn?n("button",{on:{click:function(e){return t.switchStylingKnownWords()}}},[t._v(" button ")]):t._e(),n("div",{staticClass:"text-container",class:t.isActiveColor&&t.loggedIn?"active":""},t._l(t.chapterText,(function(e,a){return n("span",{key:a,attrs:{isKnown:t.$store.state.userKnownWordsDict[e]},on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave,contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}},[t._v(t._s(e))])})),0),n("Burger"),n("contextMenu")],1)])],1)},L=[],S=n("bc3a"),E=n.n(S),D=n("323e"),$=n.n(D),I=E.a.create({baseURL:"https://readiteasy.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},xsrfHeaderName:"X-CSRFToken",xsrfCookieName:"XCSRF-TOKEN"});I.interceptors.request.use((function(t){return $.a.start(),t})),I.interceptors.response.use((function(t){return $.a.done(),t}));var j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.viewMenu?n("div",{ref:"contextMenu",attrs:{id:"context-menu","target-word":t.targetWord}},[n("ul",[n("li",{on:{click:t.openWikt}},[t._v("See in wiktionary")]),t.loggedIn?[t.isKnown?n("li",[t._v("Remove from known words")]):n("li",[t._v("Add to known words")])]:t._e()],2)]):t._e()},T=[],M={name:"ContextMenu",data:function(){return{viewMenu:!1,targetWord:null,isKnown:null}},created:function(){this.$parent.$on("openContextMenu",this.openMenu),document.addEventListener("click",this.onWindowClick)},methods:{onWindowClick:function(t){if(this.viewMenu){var e=this.$refs.contextMenu;t.target.closest("#context-menu")!==e&&this.closeMenu()}},openMenu:function(t){var e=this;this.viewMenu=!0,this.targetWord=t.target.textContent,this.isKnown=t.target.getAttribute("isKnown");var n=function(){var n=e.$refs.contextMenu;e.contextMenuDiv=n;var a=document.documentElement.clientWidth,r=document.documentElement.clientHeight,o=n.offsetWidth,s=n.offsetHeight,i=25,u=Math.min(a-(o+t.x+i),0),c=Math.min(r-(s+t.y+i),0);n.style.top=c<0?t.layerY-s+"px":t.layerY+c+"px",n.style.left=u<0?t.layerX-o+"px":t.layerX+u+"px"};setTimeout(n,0)},closeMenu:function(){this.viewMenu=!1,this.targetWord=null,this.isKnown=null},openWikt:function(){window.open("https://en.wiktionary.org/wiki/".concat(this.targetWord),"_blank"),this.closeMenu()}},computed:Object(u["a"])({},l)},R=M,K=(n("833d"),Object(p["a"])(R,j,T,!1,null,"28b03eb0",null)),A=K.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{active:t.isBurgerActive},attrs:{id:"burger"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("default",[t._m(0)])],2)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[n("span",{staticClass:"burger-bar burger-bar--1"}),n("span",{staticClass:"burger-bar burger-bar--2"}),n("span",{staticClass:"burger-bar burger-bar--3"})])}],H={data:function(){return{isBurgerActive:!1}},methods:{toggle:function(){this.isBurgerActive=!this.isBurgerActive}}},J=H,G=(n("e556"),Object(p["a"])(J,B,P,!1,null,null,null)),q=G.exports,U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[n("div",{staticClass:"drawer",attrs:{id:"reader-drawer"}},[n("span",{staticClass:"clicked-word"},[t._v(t._s(t.clickedWord))]),n("div",{staticClass:"tab-header"},[n("a",{staticClass:"btn-tab",class:0==t.tab?"active":"",attrs:{tab:"0"},on:{click:t.btnTabClick}},[t._v("WORDS")]),n("a",{staticClass:"btn-tab",class:1==t.tab?"active":"",attrs:{tab:"1"},on:{click:t.btnTabClick}},[t._v("STATS")]),n("a",{staticClass:"btn-tab",class:2==t.tab?"active":"",attrs:{tab:"2"},on:{click:t.btnTabClick}},[t._v("BOOK")])]),n("div",{staticClass:"slide-container"},[n("transition",{attrs:{name:"slide"}},[0==t.tab?n("div",{key:0,staticClass:"slide-item"},t._l(t.processedWord,(function(t){return n("WordCardMandarin",{key:t.id,attrs:{word:t}})})),1):t._e(),1==t.tab?n("div",{key:1,staticClass:"slide-item"},[n("p",[t._v("rank : "+t._s(t.wordStatistics.rank))]),n("p",[t._v("freq in corpus : "+t._s(t.wordStatistics.freq))])]):t._e(),2==t.tab?n("div",{key:2,staticClass:"slide-item"},[n("span",[t._v("My third tab")])]):t._e()])],1)])])},F=[],X=(n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("3ca3"),n("1276"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"word-card container"},[n("span",{staticClass:"item1a simplified"},[t._v(t._s(t.word.simplified))]),n("span",{staticClass:"item1b traditional"},[t._v(t._s(t.word.traditional))]),n("span",{staticClass:"item2 pronunciation"},[t._v(t._s(t.word.pronunciation))]),n("ul",{staticClass:"item3"},t._l(t.word.definitions,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)])}),z=[],Y={props:["word"],data:function(){return{isKnown:!1}},methods:{toggleIsKnown:function(){this.$store.dispatch("toggleKnownWord",this.word.simplified),this.$forceUpdate()}},computed:Object(u["a"])({},l)},Q=Y,V=(n("8715"),Object(p["a"])(Q,X,z,!1,null,"c87c5222",null)),Z=V.exports,tt={components:{WordCardMandarin:Z},props:{clickedWord:{type:String,required:!0}},data:function(){return{processedWord:null,wordStatistics:{},tab:0}},watch:{clickedWord:function(t){var e=this;I.get("/api/words/mandarin/",{params:{simplified:t}}).then((function(t){var n=t.data;e.processedWord=e.wordJSONToObject(n)})),I.get("/api/words/mandarin/word_statistics",{params:{word:t}}).then((function(t){var n=t.data;e.wordStatistics=n}))}},methods:{wordJSONToObject:function(t){if(t){var e=[],n=!0,a=!1,r=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var i=o.value;i.definitions=i.definitions.split("/").filter(Boolean),e.push(i)}}catch(u){a=!0,r=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}return e}return null},btnTabClick:function(t){var e=t.target.getAttribute("tab");this.tab!=e&&(this.tab=e)}}},et=tt,nt=(n("e0a4"),Object(p["a"])(et,U,F,!1,null,null,null)),at=nt.exports,rt={components:{ContextMenu:A,Burger:q,ReaderDrawer:at},props:["bookName","targetLanguage","chapterNumber"],data:function(){return{chapterText:[],isActiveColor:!0,hoveredWord:null,showReaderDrawer:!1,clickedWord:""}},watch:{"$route.params":function(){this.onLoad()}},created:function(){this.onLoad()},mounted:function(){var t=this;document.addEventListener("keydown",(function(){"65"==event.keyCode&&t.hoveredWord&&t.loggedIn&&t.toggleIsKnown(t.hoveredWord)}))},methods:{onLoad:function(){var t=this;I.get("/api/books/book",{params:this.$route.params}).then((function(e){t.chapterText=e.data.tokenized_chapter_text}))},switchStylingKnownWords:function(){this.isActiveColor=!this.isActiveColor},toggleIsKnown:function(t){var e=t.textContent;this.$store.dispatch("toggleKnownWord",e),this.$forceUpdate()},wordInfo:function(t){I.get("/api/words/mandarin/",{params:{simplified:t.target.innerText}})},openContextMenu:function(t){this.$emit("openContextMenu",t)},mouseEnter:function(t){this.hoveredWord=t.target},mouseLeave:function(){this.hoveredWord=null},toggleDrawer:function(){this.showReaderDrawer=!this.showReaderDrawer},onClickHandler:function(){this.drawerHandler(),this.hoveredWord&&(this.clickedWord=this.hoveredWord.innerText)},drawerHandler:function(){this.hoveredWord&&!this.showReaderDrawer&&(this.showReaderDrawer=!0),!this.hoveredWord&&this.showReaderDrawer&&(this.showReaderDrawer=!1)}},computed:Object(u["a"])({},l)},ot=rt,st=(n("79b0"),Object(p["a"])(ot,W,L,!1,null,"799cf390",null)),it=st.exports,ut=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Languages")]),t._l(t.languages,(function(t,e){return n("div",{key:e},[n("LanguageSection",{attrs:{targetLanguage:t.lang,books:t.books}})],1)}))],2)},ct=[],lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-section"},[n("h3",{staticClass:"title",on:{click:function(e){return t.switchShow()}}},[t._v(t._s(t.targetLanguage))]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBoolean,expression:"showBoolean"}],staticClass:"books-section"},t._l(t.books,(function(e){return n("p",{key:e,attrs:{a:""}},[n("router-link",{staticClass:"book-link",attrs:{to:{name:"reader-tool",params:{bookName:e,targetLanguage:t.targetLanguage,chapterNumber:1}}}},[t._v(" "+t._s(e)+" ")])],1)})),0),n("BaseIcon",{attrs:{name:"book"}}),n("span",[t._v(t._s(t.books.length)+" books")])],1)},dt=[],ft={props:{targetLanguage:String,books:Array},data:function(){return{showBoolean:!0}},methods:{switchShow:function(){this.showBoolean=!this.showBoolean}}},pt=ft,mt=(n("8104"),Object(p["a"])(pt,lt,dt,!1,null,"49c96d9e",null)),vt=mt.exports,ht={components:{LanguageSection:vt},data:function(){return{languages:{}}},created:function(){var t=this;I.get("/api/books/languages").then((function(e){t.languages=e.data.languages}))}},gt=ht,bt=Object(p["a"])(gt,ut,ct,!1,null,null,null),wt=bt.exports,_t=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Language Detector")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],attrs:{placeholder:"enter your text here"},domProps:{value:t.textInput},on:{input:[function(e){e.target.composing||(t.textInput=e.target.value)},function(e){return t.guessLanguage()}]}}),n("h2",[t._v(t._s(t.prediction))]),n("h3",[t._v("the message is "+t._s(t.message))]),n("h3",[t._v(t._s(t.$store.state.tokens))])])},kt=[],yt={data:function(){return{textInput:"",prediction:"Come on !",message:"..."}},methods:{guessLanguage:function(){var t=this;I.get("/api/books/language-detector",{params:{textInput:this.textInput}}).then((function(e){t.prediction=e.data.prediction}))}},created:function(){var t=this;I.get("api/users/hello").then((function(e){var n=e.data;t.message=n.message}))}},xt=yt,Ct=(n("7bf5"),Object(p["a"])(xt,_t,kt,!1,null,"0a4b172c",null)),Nt=Ct.exports,Ot=n("48ac"),Wt=n.n(Ot);a["a"].use(c["a"]);var Lt=new c["a"].Store({state:{userKnownWordsDict:{},targetLanguage:"",tokens:null,userId:null,firstName:null},mutations:{LOAD_KNOWN_WORDS:function(t,e){t.userKnownWordsDict=e.mandarinKnownWordsDict,t.targetLanguage=e.targetLanguage},TOGGLE_WORD:function(t,e){e in t.userKnownWordsDict?(delete t.userKnownWordsDict[e],I.post("api/users/".concat(t.userId,"/remove_word/"),{word:e})):(t.userKnownWordsDict[e]=!0,I.post("api/users/".concat(t.userId,"/add_word/"),{word:e}))},LOGIN:function(t,e){t.tokens=e,localStorage.setItem("tokens",JSON.stringify(e)),I.defaults.headers.common["Authorization"]="Bearer ".concat(e.access),t.userId=Wt.a.decode(e.access).user_id,t.firstName=Wt.a.decode(e.access).first_name},LOGOUT:function(){localStorage.removeItem("tokens"),location.reload()},SET_JWT_HEADERS:function(t){I.defaults.headers.common["Authorization"]="Bearer ".concat(t.tokens.access),t.userId=Wt.a.decode(t.tokens.access).user_id,t.firstName=Wt.a.decode(t.tokens.access).first_name}},actions:{loadKnownWords:function(t,e){var n=t.commit;e&&e!=this.state.targetLanguage&&I.get("api/users/".concat(this.state.userId,"/")).then((function(t){var a=t.data.profile.mandarin_known_words,r=a.split("\n"),o={},s=!0,i=!1,u=void 0;try{for(var c,l=r[Symbol.iterator]();!(s=(c=l.next()).done);s=!0){var d=c.value;o[d]=!0}}catch(p){i=!0,u=p}finally{try{s||null==l.return||l.return()}finally{if(i)throw u}}var f={};f["mandarinKnownWordsDict"]=o,f["targetLanguage"]=e,n("LOAD_KNOWN_WORDS",f)}))},toggleKnownWord:function(t,e){var n=t.commit;n("TOGGLE_WORD",e)},login:function(t,e){var n=t.commit;return I.post("api/users/token/",e).then((function(t){n("LOGIN",t.data)}))},logout:function(t){var e=t.commit;e("LOGOUT")},setJwtHeaders:function(t){var e=t.commit;e("SET_JWT_HEADERS")},refreshTokens:function(t){var e=t.commit;e("TODO : Create a commit"),I.post("/api/users/token/refresh/",{refresh:this.$store.state.tokens.refresh})}},getters:{loggedIn:function(t){return!!t.tokens}},modules:{}}),St=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-div"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("label",{attrs:{for:"username"}},[t._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",value:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",{attrs:{for:"password"}},[t._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",value:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"submit",name:"button"}},[t._v(" Login ")])])])},Et=[],Dt={data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;this.$store.dispatch("login",{email:this.email,password:this.password}).then((function(){t.$router.go(-1)}))}}},$t=Dt,It=(n("65b7"),Object(p["a"])($t,St,Et,!1,null,"5dd8577e",null)),jt=It.exports,Tt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register-div"},[n("h1",[t._v("REGISTER")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[n("label",{attrs:{for:"email"}},[t._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",value:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",{attrs:{for:"country"}},[t._v("Country:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{type:"text",name:"country",value:""},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}}),n("label",{attrs:{for:"firstName"}},[t._v("Fist name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",name:"firstName",value:""},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),n("label",{attrs:{for:"lastName"}},[t._v("Last name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",name:"lastName",value:""},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),n("label",{attrs:{for:"password"}},[t._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",value:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"submit",name:"button"}},[t._v(" Register ")])])])},Mt=[],Rt={data:function(){return{email:"",password:"",firstName:"",lastName:"",country:""}},methods:{register:function(){var t=this;I.post("/users/",{email:this.email,first_name:this.firstName,last_name:this.lastName,password:this.password,profile:{country:this.country}}).then((function(){return t.$store.dispatch("login",{email:t.email,password:t.password})})).then((function(){t.$router.push({name:"profile"})}))}},created:function(){}},Kt=Rt,At=(n("f9d4"),Object(p["a"])(Kt,Tt,Mt,!1,null,"06ee4e50",null)),Bt=At.exports,Pt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Profile")]),n("p",[t._v(" Hello "),n("strong",[t._v(t._s(t.$store.state.firstName))]),t._v(". Here will soon be displayed tons of statistics about your known words, target languages and time spent reading ! ")])])},Ht=[],Jt={data:function(){return{}},methods:{}},Gt=Jt,qt=Object(p["a"])(Gt,Pt,Ht,!1,null,null,null),Ut=qt.exports;a["a"].use(_["a"]);var Ft=[{path:"/",name:"home",component:O},{path:"/languages",name:"languages",component:wt},{path:"/:targetLanguage/book/:bookName/:chapterNumber",name:"reader-tool",component:it,props:function(t){var e=Object(u["a"])({},t.params);return e.chapterNumber=+e.chapterNumber,e}},{path:"/language-detector",name:"language-detector",component:Nt,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:jt},{path:"/register",name:"register",component:Bt},{path:"/profile",name:"profile",component:Ut,meta:{requiresAuth:!0}}],Xt=new _["a"]({mode:"history",base:"/readiteasy-frontend/",routes:Ft});Xt.afterEach((function(t){Lt.state.tokens&&Lt.dispatch("loadKnownWords",t.params.targetLanguage)})),Xt.beforeResolve((function(t,e,n){Lt.state.tokens||(Lt.state.tokens=JSON.parse(localStorage.getItem("tokens")),Lt.state.tokens&&Lt.dispatch("setJwtHeaders"));var a=!!Lt.state.tokens;t.matched.some((function(t){return t.meta.requiresAuth}))&&!a&&n({name:"login"}),n()}));var zt=Xt,Yt=n("8103"),Qt=n.n(Yt),Vt=n("bba4"),Zt=n.n(Vt),te=(n("a5d8"),n("ef13"));te.keys().forEach((function(t){var e=te(t),n=Qt()(Zt()(t.replace(/^\.\/(.*)\.\w+$/,"$1")));a["a"].component(n,e.default||e)})),a["a"].config.productionTip=!1,a["a"].component("tabs",{template:'\n      <div>\n          <div class="tabs">\n            <ul>\n              <li v-for="tab in tabs" :class="{ \'is-active\': tab.isActive }">\n                  <a :href="tab.href" @click="selectTab(tab)">{{ tab.name }}</a>\n              </li>\n            </ul>\n          </div>\n\n          <div class="tabs-details">\n              <slot></slot>\n          </div>\n      </div>\n  ',data:function(){return{tabs:[]}},created:function(){this.tabs=this.$children},methods:{selectTab:function(t){this.tabs.forEach((function(e){e.isActive=e.name==t.name}))}}}),new a["a"]({router:zt,store:Lt,render:function(t){return t(w)}}).$mount("#app")},"65b7":function(t,e,n){"use strict";var a=n("434d"),r=n.n(a);r.a},7461:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-wrapper"},[n("svg",{staticClass:"icon",attrs:{width:t.width,height:t.height}},[n("use",t._b({},"use",{"xlink:href":"/feather-sprite.svg#"+t.name},!1))])])},r=[],o=(n("a9e3"),{props:{name:String,width:{type:[Number,String],default:24},height:{type:[Number,String],default:24}}}),s=o,i=(n("eefc"),n("2877")),u=Object(i["a"])(s,a,r,!1,null,"0fff9815",null);e["default"]=u.exports},"79b0":function(t,e,n){"use strict";var a=n("d4cd"),r=n.n(a);r.a},"7b26":function(t,e,n){},"7bf5":function(t,e,n){"use strict";var a=n("43ed"),r=n.n(a);r.a},8104:function(t,e,n){"use strict";var a=n("ec56"),r=n.n(a);r.a},"833d":function(t,e,n){"use strict";var a=n("400f"),r=n.n(a);r.a},"85ec":function(t,e,n){},8715:function(t,e,n){"use strict";var a=n("7b26"),r=n.n(a);r.a},a7ad:function(t,e,n){},b66f:function(t,e,n){},badd:function(t,e,n){"use strict";var a=n("a7ad"),r=n.n(a);r.a},bd56:function(t,e,n){},c229:function(t,e,n){},d4cd:function(t,e,n){},e0a4:function(t,e,n){"use strict";var a=n("49e4"),r=n.n(a);r.a},e556:function(t,e,n){"use strict";var a=n("c229"),r=n.n(a);r.a},ec56:function(t,e,n){},eefc:function(t,e,n){"use strict";var a=n("b66f"),r=n.n(a);r.a},ef13:function(t,e,n){var a={"./BaseIcon.vue":"7461"};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}r.keys=function(){return Object.keys(a)},r.resolve=o,t.exports=r,r.id="ef13"},f9d4:function(t,e,n){"use strict";var a=n("bd56"),r=n.n(a);r.a}});
//# sourceMappingURL=app.5601ef13.js.map