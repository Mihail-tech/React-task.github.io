(this.webpackJsonpreac=this.webpackJsonpreac||[]).push([[0],{108:function(e,t,n){},109:function(e,t,n){},116:function(e,t,n){},117:function(e,t,n){},118:function(e,t,n){},183:function(e,t,n){"use strict";n.r(t);var s,a=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,184)).then((function(t){var n=t.getCLS,s=t.getFID,a=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),s(e),a(e),r(e),c(e)}))},r=n(24),c=n(2),i="SEND_MESSAGE",o={DialogsData:[{id:1,name:"Mike"},{id:2,name:"Vlad"},{id:3,name:"Petr"},{id:4,name:"Nastya"},{id:5,name:"Artem"}],MessageData:[{id:1,messange:"hi"},{id:2,messange:"hi"},{id:3,messange:"hi"},{id:4,messange:"hi"},{id:5,messange:"hi"}]},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i:var n=t.newMessageBody;return Object(c.a)(Object(c.a)({},e),{},{MessageData:[].concat(Object(r.a)(e.MessageData),[{id:6,messange:n}])});default:return e}},l=n(7),d=n.n(l),j=n(17),p=n(81).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"274619bf-c707c44db-90e2-34bfeccdc4fc"}}),b=function(e){return p.post("follow/".concat(e))},g=function(e){return p.delete("follow/".concat(e))},h=function(e){return console.warn("Obsolete method. please profileAPI object"),A.getProfile(e)},A={getProfile:function(e){return p.get("profile/"+e)},getStatus:function(e){return p.get("profile/status/"+e)},updateStatus:function(e){return p.put("profile/status/",{status:e})}},f=function(){return p.get("auth/me")},O=function(){return p.delete("auth/me")},m="ADD_POST",x="SET_USER_PROFILE",v="SET_STATUS",S="DELETE_POST",B={PostsData:[{id:1,messange:"hi",like:12},{id:2,messange:"hi",like:23}],profile:null,status:""},w=function(e){return{type:v,status:e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:var n={id:5,message:t.newPostText,like:0};return Object(c.a)(Object(c.a)({},e),{},{PostsData:[].concat(Object(r.a)(e.PostsData),[n]),newPostText:""});case x:return Object(c.a)(Object(c.a)({},e),{},{profile:t.profile});case v:return Object(c.a)(Object(c.a)({},e),{},{status:t.status});case S:return Object(c.a)(Object(c.a)({},e),{},{PostsData:e.PostsData.felter((function(e){return e.postId!==t.postId}))});default:return e}},C={},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C;return e},I={_state:{profilePage:{PostsData:[{id:1,messange:"hi",like:12},{id:2,messange:"hi",like:23}],newPostText:"what happen?"},dialogPage:{DialogsData:[{id:1,name:"Mike"},{id:2,name:"Vlad"},{id:3,name:"Petr"},{id:4,name:"Nastya"},{id:5,name:"Artem"}],MessageData:[{id:1,messange:"hi"},{id:2,messange:"hi"},{id:3,messange:"hi"},{id:4,messange:"hi"},{id:5,messange:"hi"}],newMessageBody:""},sidebar:{}},getState:function(){return this._state},_callSubscriber:function(){console.log("state is changed")},subscribe:function(e){this._callSubscriber=e},dispatch:function(e){this._state.profilePage=P(this._state.profilePage,e),this._state.dialogPage=u(this._state.dialogPage,e),this._state.sidebar=E(this._state.sidebar,e),this._callSubscriber(this._state)}},y=n(1),M=n.n(y),N=n(41),D=n.n(N),K=(n(108),n(19)),U=n(20),Q=n(22),k=n(21),L=(n(109),n(6)),z=n(8),T=n.n(z),Z=n(0),G=function(){return Object(Z.jsx)("nav",{className:T.a.nav,children:Object(Z.jsxs)("ul",{className:T.a.table,children:[Object(Z.jsx)("li",{className:"".concat(T.a.item," ").concat(T.a.active),children:Object(Z.jsx)(L.b,{to:"/profile",activeClassName:T.a.active,children:"Profile"})}),Object(Z.jsx)("li",{className:"".concat(T.a.item," ").concat(T.a.active),children:Object(Z.jsx)(L.b,{to:"/dialogs",activeClassName:T.a.active,children:"Messages"})}),Object(Z.jsx)("li",{className:"".concat(T.a.item," ").concat(T.a.active),children:Object(Z.jsx)(L.b,{to:"/news",activeClassName:T.a.active,children:"News"})}),Object(Z.jsx)("li",{className:"".concat(T.a.item," ").concat(T.a.active),children:Object(Z.jsx)(L.b,{to:"/music",activeClassName:T.a.active,children:"Music"})}),Object(Z.jsx)("li",{className:"".concat(T.a.item," ").concat(T.a.active),children:Object(Z.jsx)(L.b,{to:"/settings",activeClassName:T.a.active,children:"Settings"})}),Object(Z.jsx)("li",{className:"".concat(T.a.item," ").concat(T.a.active),children:Object(Z.jsx)(L.b,{to:"/recomendation",activeClassName:T.a.active,children:"Recomendation frends"})})]})})},H=n(5),W=(n(116),function(){return Object(Z.jsx)("div",{children:"News"})}),F=(n(117),function(){return Object(Z.jsx)("div",{children:"Music"})}),Y=(n(118),function(){return Object(Z.jsx)("div",{children:"Settings"})}),V=n(9),R=n(23),q=n.n(R),X=function(e){return Object(Z.jsx)("div",{className:q.a.dialog+""+q.a.active,children:Object(Z.jsxs)(L.b,{to:"/dialogs/"+e.id,children:[" ",e.name," "]})})},J=function(e){return Object(Z.jsx)("div",{className:q.a.dialog,children:e.messange})},_=n(11),$=n(34),ee=n(26),te=n.n(ee),ne=["input","meta"],se=["input","meta"],ae=function(e){var t=e.input,n=e.meta,s=Object($.a)(e,ne),a=n.touched&&n.error;return Object(Z.jsx)("div",{className:te.a.formControl+""+(a?te.a.error:""),children:Object(Z.jsx)("textarea",Object(c.a)(Object(c.a)({},t),s))})},re=function(e){var t=e.input,n=e.meta,s=Object($.a)(e,se),a=n.touched&&n.error;return Object(Z.jsx)("div",{className:te.a.formControl+""+(a?te.a.error:""),children:Object(Z.jsx)("input",Object(c.a)(Object(c.a)({},t),s))})},ce=function(e){return e?void 0:"error message, field is required"},ie=function(e){return function(t){if(t&&t.length>e)return"max length is ".concat(e," symbols")}},oe=ie(100),ue=(Object(_.reduxForm)({formsReducer:"dialogAddMessageForm"})((function(e){return Object(Z.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Z.jsx)("div",{children:Object(Z.jsx)(_.Field,{component:ae,validate:[ce,oe],name:"newMessageBody",placeholder:"write text"})}),Object(Z.jsxs)("div",{children:[" ",Object(Z.jsx)("button",{children:"click"}),"  "]})]})})),function(e){var t=e.dialogPage,n=t.DialogsData.map((function(e){return Object(Z.jsx)(X,{name:e.name,id:e.id},e.id)})),s=t.MessageData.map((function(e){return Object(Z.jsx)(J,{messange:e.messange},e.id)}));t.newMessageBody;return e.isAuth?Object(Z.jsxs)("div",{className:q.a.dialogs,children:[Object(Z.jsx)("div",{className:q.a.dialogsItems,children:n}),Object(Z.jsxs)("div",{className:q.a.messanges,children:[Object(Z.jsxs)("div",{children:[" ",s," "]}),Object(Z.jsx)("addMessageFormRedux",{onSubmit:function(t){e.sendMessage(t.newMessageBody)}})]})]}):Object(Z.jsx)(H.a,{to:"/login"})}),le=function(e){return{isAuth:e.props.isAuth}},de=n(25),je=Object(de.a)(Object(V.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{sendMessage:function(t){e(function(e){return{type:i,newMessageBody:e}}(t))}}})),(function(e){var t=function(t){Object(Q.a)(s,t);var n=Object(k.a)(s);function s(){return Object(K.a)(this,s),n.apply(this,arguments)}return Object(U.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(Z.jsx)(e,Object(c.a)({},this.props)):Object(Z.jsx)(H.a,{to:"/login"})}}]),s}(M.a.Component);return Object(V.b)(le)(t)}))(ue),pe="FOLLOW",be="UNFOLLOW",ge="SET_CURRENT_PAGE",he="TOGGLE_IS_FOLLOWING_PROGRESS",Ae=function(e){return{type:pe,userId:e}},fe=function(e){return{type:be,userId:e}},Oe=function(e){return{type:ge,currentPage:e}},me=function(e,t){return{type:he,isFetching:e,userId:t}},xe=n(29),ve=n.n(xe),Se=n(33),Be=function(e){for(var t=e.totalItemCount,n=e.pageSize,s=e.currentPage,a=e.onPageChanged,r=e.porti,c=void 0===r?10:r,i=Math.ceil(t/n),o=[],u=1;u<=i;u++)o.push(u);var l=Math.ceil(i/c),d=Object(y.useState)(1),j=Object(Se.a)(d,2),p=j[0],b=j[1],g=(p-1)*c+1,h=p+c;return Object(Z.jsxs)("div",{className:ve.a.paginator,children:[p>1&&Object(Z.jsx)("button",{onClick:function(){return b(p-1)},children:" back "}),o.filter((function(e){return e>=g&&e<=h})).map((function(e){return Object(Z.jsx)("div",{className:(s===e&&ve.a.selectedPage,ve.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),l>p&&Object(Z.jsx)("button",{onCanPlay:function(){b(p+1)},children:" next "})]})},we=["currentPage","onPageChanged","totalItemCount","pageSize","users"],Pe=function(e){var t=e.currentPage,n=e.onPageChanged,s=e.totalItemCount,a=e.pageSize,r=e.users,c=Object($.a)(e,we);return Object(Z.jsxs)("div",{children:[Object(Z.jsx)(Be,{currentPage:t,onPageChanged:n,totalItemCount:s,pageSize:a}),r.map((function(e){return Object(Z.jsxs)("div",{children:[Object(Z.jsxs)("span",{children:[Object(Z.jsx)("div",{children:Object(Z.jsx)(L.b,{to:"/profile/"+e.id,children:Object(Z.jsx)("img",{src:null!=e.photos.small?e.photos.small:"data:image/png;base64,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",className:ve.a.userPhoto})})}),Object(Z.jsx)("div",{children:e.followed?Object(Z.jsx)("button",{disabled:c.followingInProgress.some((function(t){return t===e.id})),onClick:function(){c.follow(e.id)},children:" Follow"}):Object(Z.jsx)("button",{disabled:c.followingInProgress.some((function(t){return t===e.id})),onClick:function(){c.unfollow(e.id)},children:"Unfollow"})})]}),Object(Z.jsxs)("span",{children:[Object(Z.jsxs)("span",{children:[Object(Z.jsx)("div",{children:e.name}),Object(Z.jsx)("div",{children:e.status})]}),Object(Z.jsxs)("span",{children:[Object(Z.jsx)("div",{children:"user.location.city"}),Object(Z.jsx)("div",{children:"user.location.country"})]})]})]},e.id)}))]})},Ce=n.p+"static/media/loading.006e018f.svg",Ee=function(e){return Object(Z.jsx)("div",{children:Object(Z.jsx)("img",{src:Ce})})},Ie=n(82),ye=Object(Ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Me=function(e){return e.usersPage.pageSize},Ne=function(e){return e.usersPage.totalUsersCount},De=function(e){return e.usersPage.currentPage},Ke=function(e){return e.usersPage.isFetching},Ue=function(e){return e.usersPage.followingInProgress},Qe=function(e){Object(Q.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(K.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getUsers(t,e.props.pageSize)},e}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsers(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(Z.jsxs)(Z.Fragment,{children:[this.props.isFetching?Object(Z.jsx)(Ee,{}):null,Object(Z.jsx)(Pe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),n}(M.a.Component),ke=Object(de.a)(Object(V.b)((function(e){return{users:ye(e),pageSize:Me(e),totalUsersCount:Ne(e),currentPage:De(e),isFetching:Ke(e),followingInProgress:Ue(e)}}),{follow:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(me(!0,e)),t.next=3,b(e);case 3:0===t.sent.data.resultCode&&n(Ae(e)),n(me(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(me(!0,e)),t.next=3,g(e);case 3:0===t.sent.data.resultCode&&n(fe(e)),n(me(!1,e));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:Oe,toggleFollowingProgress:me,getUsers:ye}))(Qe),Le=n(83),ze=n.n(Le),Te=function(e){var t=Object(y.useState)(!1),n=Object(Se.a)(t,2),s=n[0],a=n[1],r=Object(y.useState)(e.status),c=Object(Se.a)(r,2),i=c[0],o=c[1];Object(y.useEffect)((function(){o(e.status)}),[e.status]);return Object(Z.jsxs)("div",{children:[!s&&Object(Z.jsx)("div",{children:Object(Z.jsx)("span",{onClick:function(){a(!0)},children:e.status||"--------"})}),s&&Object(Z.jsx)("div",{children:Object(Z.jsx)("input",{autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(i)},value:i,onChange:function(e){o(e.currentTarget.value)}})})]})},Ze=function(e){return e.profile?Object(Z.jsx)("div",{children:Object(Z.jsxs)("div",{className:ze.a.descriptionBlock,children:[Object(Z.jsx)("img",{src:e.profile.photos.large}),Object(Z.jsx)(Te,{status:e.status,updateStatus:e.updateStatus})]})}):Object(Z.jsx)(Ee,{})},Ge=n(84),He=n.n(Ge),We=function(e){return Object(Z.jsxs)("div",{className:He.a.item,children:[Object(Z.jsx)("img",{src:"https://www.interfax.ru/ftproot/photos/photostory/2019/07/09/week4_700.jpg"}),e.messange,Object(Z.jsx)("div",{children:Object(Z.jsxs)("span",{children:[" like ",e.like]})})]})},Fe=n(57),Ye=n.n(Fe),Ve=(n(78),M.a.memo((function(e){var t=Object(r.a)(e.PostsData).revers().map((function(e){return Object(Z.jsx)(We,{messange:e.messange,like:e.like})}));return Object(Z.jsxs)("div",{className:Ye.a.postsBlock,children:[Object(Z.jsx)("h3",{children:"My posts"}),Object(Z.jsx)(qe,{onSubmit:function(t){e.addPost(t.newPostText)}}),Object(Z.jsxs)("div",{className:Ye.a.posts,children:["posts",t]})]})}))),Re=ie(15),qe=Object(_.reduxForm)({formsReducer:"ProfileAddNewPostForm"})((function(e){return Object(Z.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Z.jsx)("div",{children:Object(Z.jsx)(_.Field,{name:"newPostText",component:ae,placeholder:"post message",validate:[ce,Re]})}),Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{children:"Send"})})]})})),Xe=Ve,Je=Object(V.b)((function(e){return{PostsData:e.profilePage.PostsData,newPostText:e.profilePage.newPostText}}),(function(e){return{addPost:function(t){e(function(e){return{type:m,newPostText:e}}(t))}}}))(Xe),_e=function(e){return e.profile?Object(Z.jsxs)("div",{children:[Object(Z.jsx)(Ze,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(Z.jsx)(Je,{})]}):Object(Z.jsx)(Ee,{})},$e=function(e){Object(Q.a)(n,e);var t=Object(k.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.patams.userId;e||(e=this.props.authorizedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(Z.jsx)(_e,Object(c.a)(Object(c.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.ptops.updateStatus}))}}]),n}(M.a.Component),et=Object(de.a)(Object(V.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h(e);case 2:s=t.sent,n((a=s.data,{type:x,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},getStatus:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){var s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.getStatus(e);case 2:s=t.sent,n(w(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(j.a)(d.a.mark((function t(n){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,A.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(w(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),H.f)($e),tt=n(58),nt=n.n(tt),st=function(e){return Object(Z.jsxs)("header",{className:nt.a.header,children:[Object(Z.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Logo%21_Logo.svg/1200px-Logo%21_Logo.svg.png"}),Object(Z.jsx)("div",{className:nt.a.loginBlock,children:e.isAuth?Object(Z.jsxs)("div",{children:[e.login," - ",Object(Z.jsx)("button",{onClick:e.logout,children:"Log out"})," "]}):Object(Z.jsx)(L.b,{to:"/login",children:" Login "})})]})},at="auth/SET_AUTH_USER_DATA",rt={userId:null,email:null,login:null,isAuth:!1},ct=function(e,t,n,s){return{type:at,payload:{userId:e,email:t,login:n,isAuth:s}}},it=function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){var n,s,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,a=s.id,r=s.email,c=s.login,t(ct(a,r,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:rt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case at:return Object(c.a)(Object(c.a)({},e),t.payload);default:return}},ut=function(e){Object(Q.a)(n,e);var t=Object(k.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"render",value:function(){return Object(Z.jsx)(st,Object(c.a)({},this.props))}}]),n}(M.a.Component),lt=Object(V.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(j.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O();case 2:0===e.sent.data.resultCode&&t(ct(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(ut),dt=Object(_.reduxForm)({formsReducer:"login"})((function(e){return Object(Z.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(Z.jsx)("div",{children:Object(Z.jsx)(_.Field,{placeholder:"Email",name:"email",component:re,validate:[ce]})}),Object(Z.jsx)("div",{children:Object(Z.jsx)(_.Field,{placeholder:"password",name:"password",component:re,validate:[ce],type:"password"})}),Object(Z.jsxs)("div",{children:[Object(Z.jsx)(_.Field,{type:"checkbox",name:"remember",component:re})," remember"]}),e.error&&Object(Z.jsx)("div",{className:te.a.formSummaryError,children:e.error}),Object(Z.jsx)("div",{children:Object(Z.jsx)("button",{children:"Login"})})]})})),jt=Object(V.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:ot})((function(e){return e.isAuth?Object(Z.jsx)(H.a,{to:"/profile"}):Object(Z.jsxs)("div",{children:[Object(Z.jsx)("h1",{children:"Login"}),Object(Z.jsx)(dt,{onSubmit:function(t){e.login(t.email,t.password,t.remember)}})]})})),pt="INITIALIZED_SUCCESS",bt=function(e){Object(Q.a)(n,e);var t=Object(k.a)(n);function n(){return Object(K.a)(this,n),t.apply(this,arguments)}return Object(U.a)(n,[{key:"componentDidMount",value:function(){this.props.initialiseApp()}},{key:"render",value:function(){return this.props.initialized?Object(Z.jsxs)("div",{className:"app-wrap",children:[Object(Z.jsx)(lt,{}),Object(Z.jsx)(G,{}),Object(Z.jsxs)("div",{className:"app-wrap-content",children:[Object(Z.jsx)(H.b,{path:"/profile/:userId?",render:function(){return Object(Z.jsx)(et,{})}}),Object(Z.jsx)(H.b,{path:"/dialogs",render:function(){return Object(Z.jsx)(je,{})}}),Object(Z.jsx)(H.b,{path:"/news",render:function(){return Object(Z.jsx)(W,{})}}),Object(Z.jsx)(H.b,{path:"/music",render:function(){return Object(Z.jsx)(F,{})}}),Object(Z.jsx)(H.b,{path:"/settings",render:function(){return Object(Z.jsx)(Y,{})}}),Object(Z.jsx)(H.b,{path:"/recomendation",render:function(){return Object(Z.jsx)(ke,{})}}),Object(Z.jsx)(H.b,{path:"/login",render:function(){return Object(Z.jsx)(jt,{})}})]})]}):Object(Z.jsx)(Ee,{})}}]),n}(M.a.Component),gt=Object(de.a)(H.f,Object(V.b)((function(e){return{initialized:e.app.initialized}}),{initialiseApp:function(){return function(e){var t=e(it());Promise.all([t]).then((function(){e({type:pt})}))}}})(bt));D.a.render(Object(Z.jsx)(M.a.StrictMode,{children:Object(Z.jsx)(L.a,{children:Object(Z.jsx)(V.a,{store:I,children:Object(Z.jsx)(gt,{state:s,dispatch:I.dispatch.bind(I),store:I})})})}),document.getElementById("root")),a()},23:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",dialog:"Dialogs_dialog__lk_cw",messanges:"Dialogs_messanges__15hj9"}},26:function(e,t,n){e.exports={formControl:"FormsControls_formControl__2xwGT",error:"FormsControls_error__2Ejqv",formSummaryError:"FormsControls_formSummaryError__YAaKP"}},29:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__1TL3E",selectedPage:"Users_selectedPage__1OUOE",paginator:"Users_paginator__1tIIM",pageNumber:"Users_pageNumber__3Xl1r"}},57:function(e,t,n){e.exports={postsBlock:"PostInfo_postsBlock__1EfAW",posts:"PostInfo_posts__1IoKm"}},58:function(e,t,n){e.exports={header:"Header_header__1VCKf",loginBlock:"Header_loginBlock__6mma5"}},8:function(e,t,n){e.exports={nav:"Nav_nav__3gICw",table:"Nav_table__2n9TQ",item:"Nav_item__96rLj",active:"Nav_active__XSt-p"}},83:function(e,t,n){e.exports={descriptionBlock:"Avatar_descriptionBlock__1D2TS"}},84:function(e,t,n){e.exports={item:"Post1_item__3-5PK",posts:"Post1_posts__1UEkj"}}},[[183,1,2]]]);
//# sourceMappingURL=main.cd8236e2.chunk.js.map