(function(t){function e(e){for(var a,s,i=e[0],c=e[1],u=e[2],d=0,g=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&g.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(g.length)g.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},r=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/readiteasy-frontend/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0324":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0adc":function(t,e,n){},"17a6":function(t,e,n){"use strict";var a=n("e0b1"),o=n.n(a);o.a},"1a1a":function(t,e,n){"use strict";var a=n("61e7"),o=n.n(a);o.a},"23e4":function(t,e,n){"use strict";var a=n("0adc"),o=n.n(a);o.a},"26d2":function(t,e,n){},"42d7":function(t,e,n){"use strict";var a=n("8611"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("4160"),n("d3b7"),n("ac1f"),n("5319"),n("159b"),n("ddb0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar",{staticClass:"fixed-header"}),n("router-view",{staticClass:"content"})],1)},r=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav header",attrs:{id:"nav"}},[[n("Burger",{staticClass:"nav-item"}),n("Sidebar",[n("nav",{staticClass:"sidebar-panel-nav",on:{click:t.clickLinkToggleNav}},[n("router-link",{attrs:{to:{name:"books"}}},[t._v("Books")]),t.loggedIn?[n("router-link",{attrs:{to:{name:"profile"}}},[t._v("Profile")]),n("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])]:[n("router-link",{attrs:{to:{name:"login"}}},[t._v("Login")]),n("router-link",{attrs:{to:{name:"register"}}},[t._v("Register")])]],2)])],n("router-link",{staticClass:"brand nav-item",attrs:{to:"/"}},[t._v("ReadItEasy")]),n("button",{directives:[{name:"show",rawName:"v-show",value:"reader-tool"==t.$route.name,expression:"$route.name == 'reader-tool'"}],staticClass:"settings-btn",on:{click:function(e){return t.toggleShowSettings()}}},[n("BaseIcon",{attrs:{color:t.$store.state.settings.showSettings?"#39b982":"",name:"settings"}})],1),t.$store.state.settings.showSettings?n("Settings",{directives:[{name:"show",rawName:"v-show",value:"reader-tool"==t.$route.name,expression:"$route.name == 'reader-tool'"}]}):t._e()],2)},i=[],c=n("5530"),u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{active:t.isBurgerActive},attrs:{id:"burger"},on:{click:function(e){return e.preventDefault(),t.toggle(e)}}},[t._t("default",[t._m(0)])],2)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"burger-button",attrs:{type:"button",title:"Menu"}},[n("span",{staticClass:"burger-bar burger-bar--1"}),n("span",{staticClass:"burger-bar burger-bar--2"}),n("span",{staticClass:"burger-bar burger-bar--3"})])}],d={computed:{isBurgerActive:function(){return this.$store.state.isNavOpen}},methods:{toggle:function(){this.$store.dispatch("toggleNav")}}},g=d,p=(n("42d7"),n("2877")),f=Object(p["a"])(g,u,l,!1,null,"c1b4f1be",null),m=f.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[t.isPanelOpen?n("div",{staticClass:"sidebar-backdrop",on:{click:t.closeSidebarPanel}}):t._e(),n("transition",{attrs:{name:"slidebar"}},[t.isPanelOpen?n("div",{staticClass:"sidebar-panel"},[t._t("default")],2):t._e()])],1)},v=[],w={computed:{isPanelOpen:function(){return this.$store.state.isNavOpen}},methods:{closeSidebarPanel:function(){this.$store.dispatch("toggleNav")}}},b=w,_=(n("e1c5"),Object(p["a"])(b,h,v,!1,null,"65add6b4",null)),k=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"settings__menu"},[t._m(0),n("div",[t.$store.getters.loggedIn?n("p",[t._v(" Show unknown words : "),n("button",{on:{click:function(e){return t.toggleShowUnknown()}}},[t._v(" "+t._s(t.$store.state.settings.showUnknown?"on":"off")+" ")])]):t._e(),n("p",[t._v(" Font size "),n("button",{on:{click:function(e){return t.incrementFontSize(-1)}}},[t._v(" - ")]),n("button",{on:{click:function(e){return t.incrementFontSize(1)}}},[t._v(" + ")])])])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h6",[t._v("Settings")])])}],N={methods:{toggleShowUnknown:function(){this.$store.dispatch("toggleShowUnknown")},incrementFontSize:function(t){this.$store.dispatch("incrementFontSize",t)}}},x=N,E=(n("dc70"),Object(p["a"])(x,y,S,!1,null,"ccd30f74",null)),L=E.exports,O=n("2f62"),C=Object(c["a"])({},Object(O["b"])(["loggedIn"])),W=Object(c["a"])({},Object(O["c"])({targetLanguage:function(t){return t.book.targetLanguage}})),T={components:{Burger:m,Sidebar:k,Settings:L},methods:{logout:function(){this.$store.dispatch("logout")},clickLinkToggleNav:function(t){"A"==t.target.tagName&&this.$store.dispatch("toggleNav")},toggleShowSettings:function(){this.$store.dispatch("toggleShowSettings")}},computed:Object(c["a"])({},C)},$=T,I=(n("6a8c"),Object(p["a"])($,s,i,!1,null,"54706383",null)),R=I.exports,j={components:{NavBar:R}},D=j,A=(n("034f"),Object(p["a"])(D,o,r,!1,null,null,null)),K=A.exports,M=(n("45fc"),n("8c4f")),P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("ReadItEasy")]),n("p",[t._v(" Welcome to ReadItEasy, an app with the purpose of helping you read in a target language. Currently, we have just a few books in only chinese, but more content will arrive soon! ")]),n("p",[t._v(" Start reading right now with one of my favorite chinese books: "),n("router-link",{attrs:{to:{path:"/mandarin/book/活着/1"}}},[t._v("To Live")]),t._v(" by Hua Yu. ")],1),n("br"),n("p",[t._v(" If you create an account, you can save your known words. Unknown words will then appear in red, so you can see at a glance the words you don't yet know in a book. ")]),n("p",[t._v(" With this information, you can then evaluate if a particular book suits your level. This level is up to you. Some people like to have a smooth reading experience, so they target books where they know at least 98% of the words. Others are more obstinate and choose books where they barely know half of the words. For both cases, ReadItEasy can help you quickly look up definitions and statistics for a given word. ")])])},G=[],U={},H=U,B=Object(p["a"])(H,P,G,!1,null,"44674874",null),F=B.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"reader-tool"}},[n("v-touch",{on:{swiperight:t.doSomething}},[n("ReaderDrawer",{directives:[{name:"show",rawName:"v-show",value:t.showReaderDrawer,expression:"showReaderDrawer"}],attrs:{clickedWord:t.clickedWord,bookName:t.bookName,targetLanguage:t.targetLanguage}})],1),n("transition",{attrs:{name:"slide-fade"}},[n("div",{style:"tablet"===t.$mq||"mobile"===t.$mq?"no-resize":t.showReaderDrawer?"padding-left:10px;padding-right:310px":"padding-left:160px;padding-right:160px",attrs:{id:"reader-content"},on:{click:t.onClickHandler}},[n("h1",[t._v(t._s(t.bookName.replace(/_/g," ")))]),n("Pagination",{attrs:{page:t.chapterNumber,bookName:t.bookName,targetLanguage:t.targetLanguage}}),n("div",{staticClass:"text-container",class:t.$store.state.settings.showUnknown&&t.loggedIn?"active":"",style:"font-size:"+t.$store.state.settings.fontSize+"px"},t._l(t.chapterText,(function(e,a){return n("span",{key:a,attrs:{isKnown:t.$store.state.userKnownWordsDict[e.toLowerCase()],isPunct:t.isPunctDict[e]},on:{mouseenter:t.mouseEnter,mouseleave:t.mouseLeave,contextmenu:function(e){return e.preventDefault(),t.openContextMenu(e)}}},[t._v(t._s(e))])})),0),n("Pagination",{attrs:{page:t.chapterNumber,bookName:t.bookName,targetLanguage:t.targetLanguage}}),n("contextMenu",{attrs:{targetLanguage:t.targetLanguage}})],1)])],1)},z=[],J=n("bc3a"),X=n.n(J),Y=n("323e"),V=n.n(Y),Z=X.a.create({baseURL:"https://readiteasy.com",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},xsrfHeaderName:"X-CSRFToken",xsrfCookieName:"XCSRF-TOKEN"});Z.interceptors.request.use((function(t){return V.a.start(),t})),Z.interceptors.response.use((function(t){return V.a.done(),t}));var Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.viewMenu?n("div",{ref:"contextMenu",attrs:{id:"context-menu","target-word":t.targetWord}},[n("ul",[n("li",{on:{click:t.openWikt}},[t._v("See in wiktionary")]),t.loggedIn?[t.isKnown?n("li",{on:{click:t.toggleIsKnown}},[t._v("Remove from known words")]):n("li",{on:{click:t.toggleIsKnown}},[t._v("Add to known words")])]:t._e()],2)]):t._e()},tt=[],et={name:"ContextMenu",props:{targetLanguage:{type:String}},data:function(){return{viewMenu:!1,targetWord:null,isKnown:null}},created:function(){this.$parent.$on("openContextMenu",this.openMenu),document.addEventListener("click",this.onWindowClick)},methods:{onWindowClick:function(t){if(this.viewMenu){var e=this.$refs.contextMenu;t.target.closest("#context-menu")!==e&&this.closeMenu()}},openMenu:function(t){var e=this;this.viewMenu=!0,this.targetWord=t.target.innerText,this.isKnown=t.target.getAttribute("isKnown");var n=function(){var n=e.$refs.contextMenu;e.contextMenuDiv=n;var a=document.documentElement.clientWidth,o=document.documentElement.clientHeight,r=n.offsetWidth,s=n.offsetHeight,i=25,c=Math.min(a-(r+t.x+i),0),u=Math.min(o-(s+t.y+i),0);n.style.top=u<0?t.layerY-s+"px":t.layerY+u+"px",n.style.left=c<0?t.layerX-r+"px":t.layerX+c+"px"};setTimeout(n,0)},closeMenu:function(){this.viewMenu=!1,this.targetWord=null,this.isKnown=null},openWikt:function(){window.open("https://en.wiktionary.org/wiki/".concat(this.targetWord),"_blank"),this.closeMenu()},toggleIsKnown:function(){var t={};t["word"]=this.targetWord,t["targetLanguage"]=this.targetLanguage,this.$store.dispatch("toggleKnownWord",t),this.closeMenu()}},computed:Object(c["a"])({},C)},nt=et,at=(n("976a"),Object(p["a"])(nt,Q,tt,!1,null,"42563e08",null)),ot=at.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"slide-fade"}},[n("div",{staticClass:"drawer",attrs:{id:"reader-drawer"}},[n("span",{staticClass:"clicked-word"},[t._v(t._s(t.clickedWord))]),n("div",{staticClass:"tab-header"},[n("a",{staticClass:"btn-tab",class:0==t.tab?"active":"",attrs:{tab:"0"},on:{click:t.btnTabClick}},[t._v("WORDS")]),n("a",{staticClass:"btn-tab",class:1==t.tab?"active":"",attrs:{tab:"1"},on:{click:t.btnTabClick}},[t._v("STATS")]),n("a",{staticClass:"btn-tab",class:2==t.tab?"active":"",attrs:{tab:"2"},on:{click:t.btnTabClick}},[t._v("SIMILAR")])]),n("div",{staticClass:"slide-container"},[n("transition",{attrs:{name:"slide"}},[0==t.tab?n("div",{key:0,staticClass:"slide-item"},["mandarin"==t.targetLanguage?t._l(t.processedWord,(function(t){return n("WordCardMandarin",{key:t.id,attrs:{word:t}})})):t._e(),"english"==t.targetLanguage?t._l(t.englishWords,(function(t,e){return n("WordCardEnglish",{key:e,attrs:{englishWord:t}})})):t._e()],2):t._e(),1==t.tab?n("div",{key:1,staticClass:"slide-item"},[n("table",[n("tr",[n("th"),n("th",[t._v("book")]),n("th",[t._v("corpus")])]),n("tr",[n("th",[t._v("rank")]),n("td",[t._v(t._s(t.wordBookStatistics.rank))]),n("td",[t._v(t._s(t.wordCorpusStatistics.rank))])]),n("tr",[n("th",[t._v("freq")]),n("td",[t._v(" "+t._s((1e6*t.wordBookStatistics.count/t.wordBookStatistics.n_tokens).toFixed(0))+" ")]),n("td",[t._v(" "+t._s((1e6*t.wordCorpusStatistics.count/t.wordCorpusStatistics.n_tokens).toFixed(0))+" ")])])])]):t._e(),2==t.tab?n("div",{key:2,staticClass:"slide-item"},[n("ol",t._l(t.wordSimilarWords.target_similar_words,(function(e,a){return n("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)]):t._e()])],1)])])},st=[],it=(n("a4d3"),n("e01a"),n("d28b"),n("4de4"),n("caad"),n("3ca3"),n("1276"),n("2532"),X.a.create({baseURL:"https://fr.wiktionary.org/w/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},xsrfHeaderName:"X-CSRFToken",xsrfCookieName:"XCSRF-TOKEN"}));function ct(t,e){var n=document.createElement("div"),a=[t];t=t.nextElementSibling;while(t){if(t.matches(e))break;a.push(t),t=t.nextElementSibling}for(var o=0,r=a;o<r.length;o++){var s=r[o];n.innerHTML+=s.outerHTML}return n}var ut=function(t){var e=it.get("api.php",{params:{action:"parse",format:"json",page:t,origin:"*"}}).then((function(e){var n=e.data,a=[],o=document.createElement("html");o.innerHTML=n.parse.text["*"];var r=o.querySelectorAll("div.mw-parser-output > h2"),s=!0,i=!1,c=void 0;try{for(var u,l=r[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var d=u.value;if(d.querySelectorAll("#Anglais.mw-headline").length)var g=ct(d,"h2")}}catch(N){i=!0,c=N}finally{try{s||null==l.return||l.return()}finally{if(i)throw c}}var p=g.querySelectorAll("h3"),f=!0,m=!1,h=void 0;try{for(var v,w=function(){var e=v.value,n=e.querySelector(".mw-headline").getAttribute("id");if(_=ct(e,"h3"),!n.includes("mologi")&&!n.includes("onciatio")&&!n.includes("oir_auss")&&!n.includes("éférenc")&&!n.includes("agra")){k={},y=[],S=[],_.querySelectorAll("ol > li").forEach((function(t){var e=t.querySelector("ul");if(n.includes("orme_de")){var a=t.querySelector("a").getAttribute("title");S.includes(a)||S.push(a)}e&&t.removeChild(e),y.push(t.innerText)})),k["form"]=t,k["definitions"]=y;var o=_.querySelector(".API");o&&(k["pronunciation"]=o.innerText),k["POS"]=n,k["lemmas"]=S,a.push(k)}},b=p[Symbol.iterator]();!(f=(v=b.next()).done);f=!0){var _,k,y,S;w()}}catch(N){m=!0,h=N}finally{try{f||null==b.return||b.return()}finally{if(m)throw h}}return a}));return e},lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"word-card container"},[n("span",{staticClass:"item1a simplified"},[t._v(t._s(t.word.simplified))]),n("span",{staticClass:"item1b traditional"},[t._v(t._s(t.word.traditional))]),n("span",{staticClass:"item2 pronunciation"},[t._v(t._s(t.word.pronunciation))]),n("ul",{staticClass:"item3"},t._l(t.word.definitions,(function(e){return n("li",{key:e},[t._v(" "+t._s(e)+" ")])})),0)])},dt=[],gt={props:["word"],data:function(){return{isKnown:!1}},methods:{toggleIsKnown:function(){this.$store.dispatch("toggleKnownWord",this.word.simplified),this.$forceUpdate()}},computed:Object(c["a"])({},C)},pt=gt,ft=(n("7283"),Object(p["a"])(pt,lt,dt,!1,null,"beb39ca6",null)),mt=ft.exports,ht=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"word-card container"},[n("span",{staticClass:"item1a form"},[t._v(t._s(t.englishWord.form))]),n("span",{staticClass:"item1b pos"},[t._v(t._s(t.englishWord.POS.replace(/_/g," ")))]),n("span",{staticClass:"item2 pronunciation"},[t._v(t._s(t.englishWord.pronunciation))]),n("ul",{staticClass:"item3"},t._l(t.englishWord.definitions,(function(e,a){return n("li",{key:a},[t._v(" "+t._s(e)+" ")])})),0)])},vt=[],wt={props:["englishWord"],data:function(){return{isKnown:!1}},methods:{toggleIsKnown:function(){this.$store.dispatch("toggleKnownWord",this.word.simplified),this.$forceUpdate()}},computed:Object(c["a"])({},C)},bt=wt,_t=(n("23e4"),Object(p["a"])(bt,ht,vt,!1,null,"46a7fe98",null)),kt=_t.exports,yt={components:{WordCardMandarin:mt,WordCardEnglish:kt},props:{clickedWord:{type:String,required:!0},bookName:{type:String},targetLanguage:{type:String}},data:function(){return{processedWord:null,wordCorpusStatistics:{},wordBookStatistics:{},wordSimilarWords:{},tab:0,englishWords:[]}},watch:{clickedWord:function(t){var e=this;this.englishWords=[],"mandarin"==this.targetLanguage?(Z.get("/api/words/mandarin/",{params:{simplified:t}}).then((function(t){var n=t.data;e.processedWord=e.wordJSONToObject(n)})),Z.get("/api/words/mandarin/word_corpus_statistics",{params:{word:t}}).then((function(t){var n=t.data;e.wordCorpusStatistics=n})),Z.get("/api/words/mandarin/word_book_statistics",{params:{word:t,bookName:this.bookName,targetLanguage:this.targetLanguage}}).then((function(t){var n=t.data;e.wordBookStatistics=n})),Z.get("/api/words/mandarin/word_similar_words",{params:{word:t}}).then((function(t){var n=t.data;e.wordSimilarWords=n}))):"english"==this.targetLanguage&&(ut(t.toLowerCase()).then((function(t){var n=[],a=!0,o=!1,r=void 0;try{for(var s,i=t[Symbol.iterator]();!(a=(s=i.next()).done);a=!0){var c=s.value;e.englishWords.push(c);var u=!0,l=!1,d=void 0;try{for(var g,p=c["lemmas"][Symbol.iterator]();!(u=(g=p.next()).done);u=!0){var f=g.value;n.includes(f)||(n.push(f),ut(f).then((function(t){var n=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var i=r.value;e.englishWords.push(i)}}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}})))}}catch(m){l=!0,d=m}finally{try{u||null==p.return||p.return()}finally{if(l)throw d}}}}catch(m){o=!0,r=m}finally{try{a||null==i.return||i.return()}finally{if(o)throw r}}})),t.toLowerCase()[0]!=t[0]&&ut(t).then((function(t){var n=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var i=r.value;e.englishWords.push(i)}}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}})))}},methods:{wordJSONToObject:function(t){if(t){var e=[],n=!0,a=!1,o=void 0;try{for(var r,s=t[Symbol.iterator]();!(n=(r=s.next()).done);n=!0){var i=r.value;i.definitions=i.definitions.split("/").filter(Boolean),e.push(i)}}catch(c){a=!0,o=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return e}return null},btnTabClick:function(t){var e=t.target.getAttribute("tab");this.tab!=e&&(this.tab=e)}}},St=yt,Nt=(n("6067"),Object(p["a"])(St,rt,st,!1,null,null,null)),xt=Nt.exports,Et=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("button",{attrs:{disabled:1==t.page},on:{click:function(e){return t.redirect(t.page-1)}}},[t._v(" prev ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.pageInput,expression:"pageInput"}],attrs:{type:"text"},domProps:{value:t.pageInput},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.redirect(t.pageInput)},input:function(e){e.target.composing||(t.pageInput=e.target.value)}}}),n("button",{on:{click:function(e){return t.redirect(t.page+1)}}},[t._v(" next ")])])},Lt=[],Ot=(n("a9e3"),{props:{page:{type:Number,default:1},bookName:{type:String},targetLanguage:{type:String}},data:function(){return{pageInput:1}},created:function(){this.pageInput=this.page},watch:{page:function(t){this.pageInput=t}},methods:{redirect:function(t){this.$router.push({name:"reader-tool",params:{bookName:this.bookName,targetLanguage:this.targetLanguage,chapterNumber:parseInt(t)}}).then(window.scroll({top:0,left:0,behavior:"smooth"}))}}}),Ct=Ot,Wt=(n("ba58"),Object(p["a"])(Ct,Et,Lt,!1,null,"38b969cb",null)),Tt=Wt.exports,$t={components:{ContextMenu:ot,ReaderDrawer:xt,Pagination:Tt},props:["bookName","chapterNumber"],data:function(){return{chapterText:[],isActiveColor:!0,hoveredWord:null,showReaderDrawer:!1,clickedWord:"",clickedWordLemma:"",ontouchmove:!1,isPunctDict:{".":!0,"\n":!0,"\t":!0,"?":!0,"!":!0," ":!0,",":!0,"’":!0,"，":!0,"。":!0,"”":!0,"“":!0,"：":!0,"《":!0,"》":!0,"—":!0,"；":!0}}},watch:{"$route.params":function(){this.onLoad()}},created:function(){this.onLoad()},mounted:function(){var t=this;document.addEventListener("keydown",(function(){"65"==event.keyCode&&t.hoveredWord&&t.loggedIn&&t.toggleIsKnown(t.hoveredWord)})),document.addEventListener("touchmove",(function(){0==t.ontouchmove&&(t.ontouchmove=!0)})),document.addEventListener("touchend",(function(){1==t.ontouchmove&&setTimeout((function(){t.ontouchmove=!1}),1500)}))},methods:{onLoad:function(){var t=this;Z.get("/api/books/".concat(this.targetLanguage),{params:this.$route.params}).then((function(e){t.chapterText=e.data.tokenized_chapter_text}))},switchStylingKnownWords:function(){this.isActiveColor=!this.isActiveColor},toggleIsKnown:function(t){var e={};e["word"]=t.innerText,e["targetLanguage"]=this.targetLanguage,this.$store.dispatch("toggleKnownWord",e)},openContextMenu:function(t){this.$emit("openContextMenu",t)},mouseEnter:function(t){this.hoveredWord=t.target},mouseLeave:function(){this.hoveredWord=null},toggleDrawer:function(){this.showReaderDrawer=!this.showReaderDrawer},onClickHandler:function(){this.ontouchmove||(this.drawerHandler(),this.hoveredWord&&(this.clickedWord=this.hoveredWord.innerText,this.clickedWordLemma=this.hoveredWord.getAttribute("lemma")))},drawerHandler:function(){this.hoveredWord&&!this.showReaderDrawer&&(this.showReaderDrawer=!0),!this.hoveredWord&&this.showReaderDrawer&&(this.showReaderDrawer=!1)},doSomething:function(){this.showReaderDrawer&&(this.showReaderDrawer=!1)}},computed:Object(c["a"])({},C,{},W)},It=$t,Rt=(n("a0fd"),Object(p["a"])(It,q,z,!1,null,"8d3b17e2",null)),jt=Rt.exports,Dt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Books")]),t._l(t.languages,(function(t,e){return n("div",{key:e},[n("LanguageSection",{attrs:{targetLanguage:t.lang,books:t.books}})],1)}))],2)},At=[],Kt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"language-card"},[n("div",{staticClass:"title"},[n("h2",{on:{click:function(e){return t.switchShow()}}},[t._v(t._s(t.targetLanguage))]),n("BaseIcon",{attrs:{name:"book"}}),n("span",[t._v(t._s(t.books.length)+" books")]),n("div",{staticClass:"subheader"})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showBoolean,expression:"showBoolean"}],staticClass:"books-section"},t._l(t.books,(function(e){return n("div",{key:e,staticClass:"book-card"},[n("router-link",{staticClass:"book-link",attrs:{to:{name:"reader-tool",params:{bookName:e,targetLanguage:t.targetLanguage,chapterNumber:1}}}},[t._v(" "+t._s(e)+" ")]),t.booksStatistics?[t.booksStatistics[e]?n("p",[t._v(" book lenght : "+t._s(t.booksStatistics[e].n_book_tokens)+" "),n("br"),t._v(" book unique words : "+t._s(t.booksStatistics[e].n_book_types)+" "),n("br"),t._v(" known words : "+t._s(t.booksStatistics[e].n_user_tokens)+" "),n("br"),t._v(" ratio known words : "+t._s((100*t.booksStatistics[e].n_user_tokens/t.booksStatistics[e].n_book_tokens).toFixed(2))+" % "),n("br"),t._v(" 95% percentile word : "+t._s(t.booksStatistics[e].book_char_95percentile)+" "),n("br"),t._v(" 95% percentile rank :"+t._s(t.booksStatistics[e].book_rank_95percentile)+" ")]):t._e()]:t._e()],2)})),0)])},Mt=[],Pt={props:{targetLanguage:String,books:Array},data:function(){return{showBoolean:!0,booksStatistics:{}}},created:function(){var t=this;if(this.loggedIn){var e=!0,n=!1,a=void 0;try{for(var o,r=function(){var e=o.value;Z.get("/api/users/".concat(t.$store.state.user.userId,"/book_known_words"),{params:{bookName:e,targetLanguage:t.targetLanguage}}).then((function(n){var a=n.data;t.$set(t.booksStatistics,e,a)}))},s=this.books[Symbol.iterator]();!(e=(o=s.next()).done);e=!0)r()}catch(i){n=!0,a=i}finally{try{e||null==s.return||s.return()}finally{if(n)throw a}}}},methods:{switchShow:function(){this.showBoolean=!this.showBoolean}},computed:Object(c["a"])({},C)},Gt=Pt,Ut=(n("17a6"),Object(p["a"])(Gt,Kt,Mt,!1,null,"294bf679",null)),Ht=Ut.exports,Bt={components:{LanguageSection:Ht},data:function(){return{languages:{}}},created:function(){var t=this;Z.get("/api/books/languages").then((function(e){t.languages=e.data.languages}))}},Ft=Bt,qt=Object(p["a"])(Ft,Dt,At,!1,null,"632c4d06",null),zt=qt.exports,Jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Language Detector")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.textInput,expression:"textInput"}],attrs:{placeholder:"enter your text here"},domProps:{value:t.textInput},on:{input:[function(e){e.target.composing||(t.textInput=e.target.value)},function(e){return t.guessLanguage()}]}}),n("h2",[t._v(t._s(t.prediction))]),n("h3",[t._v("the message is "+t._s(t.message))]),n("h3",[t._v(t._s(t.$store.state.tokens))])])},Xt=[],Yt={data:function(){return{textInput:"",prediction:"Come on !",message:"..."}},methods:{guessLanguage:function(){var t=this;Z.get("/api/books/language-detector",{params:{textInput:this.textInput}}).then((function(e){t.prediction=e.data.prediction}))}},created:function(){var t=this;Z.get("api/users/hello").then((function(e){var n=e.data;t.message=n.message}))}},Vt=Yt,Zt=(n("c71f"),Object(p["a"])(Vt,Jt,Xt,!1,null,"287ac125",null)),Qt=Zt.exports,te=n("48ac"),ee=n.n(te);a["a"].use(O["a"]);var ne={state:{targetLanguage:""},mutations:{SET_TARGET_LANGUAGE:function(t,e){t.targetLanguage=e}},actions:{setTargetLanguage:function(t,e){var n=t.commit;n("SET_TARGET_LANGUAGE",e)}}},ae={state:{fontSize:28,showSettings:!1,showUnknown:!0},mutations:{INCREMENT_FONT_SIZE:function(t,e){t.fontSize=t.fontSize+e},TOGGLE_SHOW_SETTINGS:function(t){t.showSettings=!t.showSettings},TOGGLE_SHOW_UNKNOWN:function(t){t.showUnknown=!t.showUnknown}},actions:{incrementFontSize:function(t,e){var n=t.commit;n("INCREMENT_FONT_SIZE",e)},toggleShowSettings:function(t){var e=t.commit;e("TOGGLE_SHOW_SETTINGS")},toggleShowUnknown:function(t){var e=t.commit;e("TOGGLE_SHOW_UNKNOWN")}}},oe={state:{tokens:null,userId:null,firstName:null},mutations:{LOGIN:function(t,e){t.tokens=e,localStorage.setItem("tokens",JSON.stringify(e)),Z.defaults.headers.common["Authorization"]="Bearer ".concat(e.access),t.userId=ee.a.decode(e.access).user_id,t.firstName=ee.a.decode(e.access).first_name},LOGOUT:function(){localStorage.removeItem("tokens"),location.reload()},SET_TOKENS:function(t,e){t.tokens=e,localStorage.setItem("tokens",JSON.stringify(e))},SET_JWT_HEADERS:function(t){Z.defaults.headers.common["Authorization"]="Bearer ".concat(t.tokens.access)},SET_USER_INFO:function(t){t.userId=ee.a.decode(t.tokens.access).user_id,t.firstName=ee.a.decode(t.tokens.access).first_name}},actions:{credentialsLogin:function(t,e){var n=t.commit;return Z.post("api/users/token/",e).then((function(t){var e=t.data;n("SET_TOKENS",e),n("SET_JWT_HEADERS"),n("SET_USER_INFO")}))},logout:function(t){var e=t.commit;e("LOGOUT")},setJwtHeaders:function(t){var e=t.commit;e("SET_JWT_HEADERS")},refreshTokens:function(t){var e=t.commit,n=t.state,a=ee.a.decode(n.tokens.access).exp,o=Math.round(Date.now()/1e3);o>a&&Z.post("/api/users/token/refresh/",{refresh:n.tokens.refresh}).then((function(t){var n=t.data;e("SET_TOKENS",n),e("SET_JWT_HEADERS"),e("SET_USER_INFO")}))},checkLocalStorage:function(t){var e=t.commit,n=t.state;if(!n.tokens){var a=JSON.parse(localStorage.getItem("tokens"));a&&(e("SET_TOKENS",a),e("SET_JWT_HEADERS"),e("SET_USER_INFO"))}}},getters:{loggedIn:function(t){return!!t.tokens}}},re=new O["a"].Store({modules:{book:ne,settings:ae,user:oe},state:{userKnownWordsDict:{},targetLanguage:"",firstName:null,isNavOpen:!1},mutations:{LOAD_KNOWN_WORDS:function(t,e){t.userKnownWordsDict=e.mandarinKnownWordsDict,t.targetLanguage=e.targetLanguage},TOGGLE_WORD:function(t,e){var n=e.word,o=e.targetLanguage;t.userKnownWordsDict[n]?(t.userKnownWordsDict[n]=!1,Z.post("api/users/".concat(t.user.userId,"/remove_word/"),{word:n,targetLanguage:o})):(a["a"].set(t.userKnownWordsDict,n,!0),Z.post("api/users/".concat(t.user.userId,"/add_word/"),{word:n,targetLanguage:o}))},TOGGLE_NAV:function(t){t.isNavOpen=!t.isNavOpen}},actions:{loadKnownWords:function(t,e){var n=t.commit;e&&e!=this.state.book.targetLanguage&&Z.get("api/users/".concat(this.state.user.userId,"/")).then((function(t){var a=t.data.profile["".concat(e,"_known_words")],o=a.split("\n"),r={},s=!0,i=!1,c=void 0;try{for(var u,l=o[Symbol.iterator]();!(s=(u=l.next()).done);s=!0){var d=u.value;r[d]=!0}}catch(p){i=!0,c=p}finally{try{s||null==l.return||l.return()}finally{if(i)throw c}}var g={};g["mandarinKnownWordsDict"]=r,g["targetLanguage"]=e,n("LOAD_KNOWN_WORDS",g)}))},toggleKnownWord:function(t,e){var n=t.commit;n("TOGGLE_WORD",e)},toggleNav:function(t){var e=t.commit;e("TOGGLE_NAV")}}}),se=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-div"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("label",{attrs:{for:"username"}},[t._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",value:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",{attrs:{for:"password"}},[t._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",value:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"submit",name:"button"}},[t._v(" Login ")])])])},ie=[],ce={data:function(){return{email:"",password:""}},methods:{login:function(){var t=this;this.$store.dispatch("credentialsLogin",{email:this.email,password:this.password}).then((function(){t.$router.go(-1)}))}}},ue=ce,le=(n("cda4"),Object(p["a"])(ue,se,ie,!1,null,"3c92c62e",null)),de=le.exports,ge=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"register-div"},[n("h1",[t._v("REGISTER")]),n("form",{on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[n("label",{attrs:{for:"email"}},[t._v("Email:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",name:"email",value:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("label",{attrs:{for:"country"}},[t._v("Country:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],attrs:{type:"text",name:"country",value:""},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}}),n("label",{attrs:{for:"firstName"}},[t._v("Fist name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],attrs:{type:"text",name:"firstName",value:""},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),n("label",{attrs:{for:"lastName"}},[t._v("Last name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],attrs:{type:"text",name:"lastName",value:""},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),n("label",{attrs:{for:"password"}},[t._v("Password:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",name:"password",value:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{attrs:{type:"submit",name:"button"}},[t._v(" Register ")])])])},pe=[],fe={data:function(){return{email:"",password:"",firstName:"",lastName:"",country:""}},methods:{register:function(){var t=this;Z.post("api/users/",{email:this.email,first_name:this.firstName,last_name:this.lastName,password:this.password,profile:{country:this.country}}).then((function(){return t.$store.dispatch("login",{email:t.email,password:t.password})})).then((function(){t.$router.push({name:"profile"})}))}},created:function(){}},me=fe,he=(n("ff70"),Object(p["a"])(me,ge,pe,!1,null,"d7b722d8",null)),ve=he.exports,we=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Profile")]),n("p",[t._v(" Hello "),n("strong",[t._v(t._s(t.$store.state.user.firstName))]),t._v(". Here will soon be displayed tons of statistics about your known words, target languages and time spent reading ! ")]),n("p",[t._v(" You can start reading "),n("router-link",{attrs:{to:{path:"/mandarin/book/活着/1"}}},[t._v("To Live")]),t._v(" by Hua Yu ")],1)])},be=[],_e={data:function(){return{}},methods:{}},ke=_e,ye=Object(p["a"])(ke,we,be,!1,null,null,null),Se=ye.exports;a["a"].use(M["a"]);var Ne=[{path:"/",name:"home",component:F},{path:"/books",name:"books",component:zt},{path:"/:targetLanguage/book/:bookName/:chapterNumber",name:"reader-tool",component:jt,props:function(t){var e=Object(c["a"])({},t.params);return e.chapterNumber=+e.chapterNumber,e}},{path:"/language-detector",name:"language-detector",component:Qt,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:de},{path:"/register",name:"register",component:ve},{path:"/profile",name:"profile",component:Se,meta:{requiresAuth:!0}}],xe=new M["a"]({mode:"history",base:"/readiteasy-frontend/",routes:Ne});xe.afterEach((function(t){re.getters.loggedIn&&re.dispatch("loadKnownWords",t.params.targetLanguage),t.params.targetLanguage&&t.params.targetLanguage!=re.state.book.targetLanguage&&re.dispatch("setTargetLanguage",t.params.targetLanguage)})),xe.beforeResolve((function(t,e,n){re.dispatch("checkLocalStorage");var a=re.getters.loggedIn;a&&re.dispatch("refreshTokens"),t.matched.some((function(t){return t.meta.requiresAuth}))&&!a&&n({name:"login"}),n()}));var Ee=xe,Le=n("8103"),Oe=n.n(Le),Ce=n("bba4"),We=n.n(Ce),Te=(n("a5d8"),n("660e")),$e=n("ca95"),Ie=n.n($e);a["a"].use(Te["a"],{breakpoints:{mobile:450,tablet:800,laptop:1250,desktop:1/0}}),a["a"].use(Ie.a);var Re=n("ef13");Re.keys().forEach((function(t){var e=Re(t),n=Oe()(We()(t.replace(/^\.\/(.*)\.\w+$/,"$1")));a["a"].component(n,e.default||e)})),a["a"].config.productionTip=!1,new a["a"]({router:Ee,store:re,render:function(t){return t(K)}}).$mount("#app")},"5a27":function(t,e,n){},6067:function(t,e,n){"use strict";var a=n("9ddb"),o=n.n(a);o.a},"61e7":function(t,e,n){},"6a8c":function(t,e,n){"use strict";var a=n("d102"),o=n.n(a);o.a},"6cea":function(t,e,n){},7283:function(t,e,n){"use strict";var a=n("a450"),o=n.n(a);o.a},7461:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"icon-wrapper"},[n("svg",{staticClass:"icon",attrs:{width:t.width,height:t.height,color:t.color}},[n("use",t._b({},"use",{"xlink:href":t.href},!1))])])},o=[],r=(n("b0c0"),n("a9e3"),{props:{name:String,width:{type:[Number,String],default:24},height:{type:[Number,String],default:24},color:{type:[String],default:"#00000066"}},computed:{href:function(){var t="/readiteasy-frontend/feather-sprite.svg#"+this.name;this.name;return t}}}),s=r,i=(n("1a1a"),n("2877")),c=Object(i["a"])(s,a,o,!1,null,"4337877c",null);e["default"]=c.exports},"84d5":function(t,e,n){},"85ec":function(t,e,n){},8611:function(t,e,n){},"976a":function(t,e,n){"use strict";var a=n("ee47"),o=n.n(a);o.a},"9ddb":function(t,e,n){},a0fd:function(t,e,n){"use strict";var a=n("0324"),o=n.n(a);o.a},a450:function(t,e,n){},b072:function(t,e,n){},ba58:function(t,e,n){"use strict";var a=n("fe8f"),o=n.n(a);o.a},c71f:function(t,e,n){"use strict";var a=n("b072"),o=n.n(a);o.a},cda4:function(t,e,n){"use strict";var a=n("84d5"),o=n.n(a);o.a},d102:function(t,e,n){},dc70:function(t,e,n){"use strict";var a=n("26d2"),o=n.n(a);o.a},e0b1:function(t,e,n){},e1c5:function(t,e,n){"use strict";var a=n("6cea"),o=n.n(a);o.a},ee47:function(t,e,n){},ef13:function(t,e,n){var a={"./BaseIcon.vue":"7461"};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}o.keys=function(){return Object.keys(a)},o.resolve=r,t.exports=o,o.id="ef13"},fe8f:function(t,e,n){},ff70:function(t,e,n){"use strict";var a=n("5a27"),o=n.n(a);o.a}});
//# sourceMappingURL=app.e2bc3e4d.js.map