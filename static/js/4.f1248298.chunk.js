(this["webpackJsonpabz.agency"]=this["webpackJsonpabz.agency"]||[]).push([[4],{119:function(e,t,a){e.exports={toolTips:"UsersDraw_toolTips__3uNcG",container:"UsersDraw_container__33uwE",photoWrapper:"UsersDraw_photoWrapper__3Hyyw",avatar:"UsersDraw_avatar__2gOtk",name:"UsersDraw_name__3hY5V",position:"UsersDraw_position__ssibi",email:"UsersDraw_email__154nq",phone:"UsersDraw_phone__3b0Mx"}},120:function(e,t,a){e.exports={list:"UsersList_list__3iup0",container:"UsersList_container__3Eby0",list__item:"UsersList_list__item__3pPDU"}},121:function(e,t,a){e.exports={section:"Users_section__1Fi6P",container:"Users_container__3KOBE",title:"Users_title__23ueP",attention:"Users_attention__3-W1T",list:"Users_list__1RbVQ"}},123:function(e,t,a){e.exports={form:"Form_form__3GGu4",label:"Form_label__187J1",labelValid:"Form_labelValid__2D2e1 Form_label__187J1",input:"Form_input__3vIM6",positionTitle:"Form_positionTitle__1WBmY Form_label__187J1",radioList:"Form_radioList__1GNOj",radioItem:"Form_radioItem__1wHx6",radioLabel:"Form_radioLabel__-sB14 Form_label__187J1",radioInput:"Form_radioInput__3xBFD",inputfile:"Form_inputfile__1-Kly",labelFile:"Form_labelFile__5xZqO Form_input__3vIM6",pathFile:"Form_pathFile__3tRgG",spanFile:"Form_spanFile__2IX7b",button:"Form_button__1fiD4",radio:"Form_radio__3qHR4"}},124:function(e,t,a){e.exports={section:"Registration_section__mTVPu",container:"Registration_container__9xZFT",title:"Registration_title__1TmwS",attention:"Registration_attention__3hvmp",textWrapper:"Registration_textWrapper__fYl_V"}},125:function(e,t,a){e.exports={footer:"Footer_footer__xfYDK",container:"Footer_container__36R1G",text:"Footer_text__2hPK-"}},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),i=a(4),c=function(){return{type:i.a.SUCCESS_MODAL_CLOSE}},l=function(e){return{type:i.a.HANDLE_TOTAL_PAGE,payload:e}},s=function(e){return e.controller.burgerMenu},u=function(e){return e.controller.modal},_=function(e){return e.controller.totalPage},m=function(e){return e.controller.position},p=function(e){return e.controller.token},d=a(85),E=a.n(d),b={onClose:c},f=Object(o.b)((function(e){return{isOpen:u(e)}}),b)((function(e){var t=e.children,a=e.isOpen,o=e.onClose,i=Object(n.useRef)();Object(n.useEffect)((function(){return window.addEventListener("keydown",c),function(){window.removeEventListener("keydown",c)}}));var c=function(e){"Escape"===e.code&&o()};return a?r.a.createElement("div",{className:E.a.backdrop,ref:i,onClick:function(e){var t=i.current;t&&e.target!==t||o()}},r.a.createElement("div",{className:E.a.modal},t)):null})),h=a(86),N=a.n(h),g={onClose:c},v=Object(o.b)(null,g)((function(e){var t=e.onClose,a=function(e){t()};return r.a.createElement("div",{className:N.a.modal},r.a.createElement("div",{className:N.a.container},r.a.createElement("div",{className:N.a.header},r.a.createElement("h1",{className:N.a.header__title},"Congratulations"),r.a.createElement("button",{className:N.a.header__button,onClick:function(e){return a()}},r.a.createElement("div",{className:N.a.header__button__one}),r.a.createElement("div",{className:N.a.header__button__two}))),r.a.createElement("div",{className:N.a.main},r.a.createElement("p",{className:N.a.main__desc},"You have successfully passed the registration")),r.a.createElement("div",{className:N.a.footer},r.a.createElement("button",{className:N.a.footer__button,onClick:function(e){return a()}},"Great"))))})),k=a(62),y=a(72),S=a.n(y),O=a(94),C=a.n(O),w={onClose:function(){return{type:i.a.BURGER_MENU_CLOSE}}},T=Object(o.b)((function(e){return{isOpen:s(e)}}),w)((function(e){var t=e.onClose,a=e.isOpen,o=Object(n.useRef)();Object(n.useEffect)((function(){var e=document.querySelector("body");return a&&(e.style.overflow="hidden"),function(){e.style.overflow="auto"}}));var i=function(e){t(),k.scroller.scrollTo("form",{duration:1500,offset:50,smooth:!0})};return r.a.createElement(r.a.Fragment,null,a&&r.a.createElement("div",{className:C.a.backdrop,ref:o,onClick:function(e){var a=o.current;a&&e.target!==a||t()}},r.a.createElement("div",{className:C.a.menu},r.a.createElement("div",{className:C.a.menu__header},r.a.createElement("img",{src:S.a,alt:"logo",className:C.a.logo})),r.a.createElement("ul",{className:C.a.section},r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"About me")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Relationships")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Users")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Sign Up")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Terms and Conditions"))),r.a.createElement("ul",{className:C.a.section},r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"How it works")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Partnership")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Help")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Leave testimonial")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Contact us"))),r.a.createElement("ul",{className:C.a.section},r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Articles")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Testimonials")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Licenses")),r.a.createElement("li",{className:C.a.section__item},r.a.createElement("button",{onClick:function(e){return i()},className:C.a.section__item__button},"Privacy Policy"))))))})),U=a(95),x=a.n(U),F={handleBurgerOpen:function(){return{type:i.a.BURGER_MENU_OPEN}}},B=Object(o.b)(null,F)((function(e){var t=e.handleBurgerOpen;return r.a.createElement("div",{className:x.a.container},r.a.createElement("button",{onClick:t,className:x.a.burgerButton},r.a.createElement("div",{className:x.a.buttonOne}),r.a.createElement("div",{className:x.a.buttonTwo}),r.a.createElement("div",{className:x.a.buttonThree})))})),R=a(96),M=a.n(R),j=function(){return r.a.createElement(k.Element,{name:"home"},r.a.createElement("header",{className:M.a.header},r.a.createElement("div",{className:M.a.container},r.a.createElement("div",{className:M.a.nav},r.a.createElement(k.Link,{to:"home",smooth:!0,offset:-60,className:M.a.nav__logo},r.a.createElement("img",{src:S.a,alt:"logo"})),r.a.createElement("ul",{className:M.a.menu},r.a.createElement("li",{className:M.a.menu__item},r.a.createElement(k.Link,{to:"form",smooth:!0,activeClass:M.a.menu__item__link__active,className:M.a.menu__item__link},"About me")),r.a.createElement("li",{className:M.a.menu__item},r.a.createElement(k.Link,{to:"form",smooth:!0,activeClass:M.a.menu__item__link__active,className:M.a.menu__item__link},"Relationships")),r.a.createElement("li",{className:M.a.menu__item},r.a.createElement(k.Link,{to:"form",smooth:!0,activeClass:M.a.menu__item__link__active,className:M.a.menu__item__link},"Requirements")),r.a.createElement("li",{className:M.a.menu__item},r.a.createElement(k.Link,{to:"users",smooth:!0,activeClass:M.a.menu__item__link__active,className:M.a.menu__item__link},"Users")),r.a.createElement("li",{className:M.a.menu__item},r.a.createElement(k.Link,{to:"form",smooth:!0,activeClass:M.a.menu__item__link__active,className:M.a.menu__item__link},"Sign Up"))),r.a.createElement("div",{className:M.a.burgerButton},r.a.createElement(B,null))))))},L=a(97),A=a.n(L),P=function(){return{Btn:function(e){var t=e.children,a=e.scroll,n=e.event,o=e.disabled,i=e.styled;return r.a.createElement("div",{className:A.a.container,onClick:n||null},a&&r.a.createElement(k.Link,{to:"form",smooth:!0,className:A.a.button,style:i},t),!a&&r.a.createElement("button",{className:o?A.a.button__disabled:A.a.button},t))},Lnk:function(e){var t=e.children,a=e.styled;return r.a.createElement("div",{className:A.a.container},r.a.createElement("button",{style:a,className:A.a.link},r.a.createElement(k.Link,{to:"form",smooth:!0,className:A.a.btnLink},t)))}}},W=a(98),I=a.n(W),G=function(){var e=P().Btn,t=document.documentElement.clientWidth;return r.a.createElement("section",{className:I.a.section},r.a.createElement("div",{className:I.a.container},r.a.createElement("div",{className:I.a.titleWrapper},r.a.createElement("h1",{className:I.a.title},"Test assignment"),r.a.createElement("h1",{className:I.a.title},"for Frontend Developer position")),r.a.createElement("div",{className:I.a.subtitleWrapper},t<768&&r.a.createElement("p",{className:I.a.subtitle},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository."),t>=768&&r.a.createElement("p",{className:I.a.subtitle},"We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens")),r.a.createElement(e,{scroll:!0,styled:t>=768?{margin:0}:null},"Sign up now")))},D=a(99),H=a.n(D),J=function(){var e=P().Lnk;return r.a.createElement("section",{className:H.a.section},r.a.createElement("div",{className:H.a.container},r.a.createElement("h1",{className:H.a.title},"Let's get acquainted"),r.a.createElement("div",{className:H.a.content},r.a.createElement("div",{className:H.a.leftSide},r.a.createElement("div",{className:H.a.manImage})),r.a.createElement("div",{className:H.a.rightSide},r.a.createElement("h2",{className:H.a.subtitle},"I am cool frontend developer"),r.a.createElement("div",{className:H.a.textWrapper},r.a.createElement("p",{className:H.a.text},"We will evaluate how clean your approach to writing CSS and Javascript code is. You can use any CSS and Javascript 3rd party libraries without any restriction."),r.a.createElement("p",{className:H.a.text},"If 3rd party css/javascript libraries are added to the project via bower/npm/yarn you will get bonus points. If you use any task runner (gulp/webpack) you will get bonus points as well. Slice service directory page P\u200bSD mockup\u200b into HTML5/CSS3.")),r.a.createElement(e,{styled:{margin:0,textAlign:"left"}},"Sign up now")))))},q=a(84),V=function(e){return e.users.users},z=function(e){return e.users.loading},X=a(73),Y=a.n(X),K=a(74),Q=a(101),Z=a.n(Q);Z.a.defaults.baseURL="https://frontend-test-assignment-api.abz.agency/api/v1",Z.a.defaults.headers.common["Content-Type"]="application/json";var $=document.documentElement.clientWidth,ee=5;ee=$<768?3:6;var te="/users",ae="/positions",ne="/token",re=function(){var e=function(){var e=Object(K.a)(Y.a.mark((function e(t){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("".concat(te,"?page=").concat(t,"&count=").concat(ee));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{create:function(){var e=Object(K.a)(Y.a.mark((function e(t,a){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.post(te,t,{headers:{Token:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),all:e}},oe=function(){return{positions:function(){var e=Object(K.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("".concat(ae));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),token:function(){var e=Object(K.a)(Y.a.mark((function e(){return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.a.get("".concat(ne));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}},ie=function(e){return e.length?(e.sort((function(e,t){return e.registration_timestamp>t.registration_timestamp})),e):e},ce=function(e){var t=e.length>21;return{text:e.length<=21?e:e.slice(0,8)+"..."+e.slice(-8),long:t}},le=a(119),se=a.n(le),ue=function(e){var t=e.name,a=e.phone,n=e.photo,o=e.position,i=e.email,c=ce(i);return r.a.createElement("div",{className:se.a.container},r.a.createElement("div",{className:se.a.photoWrapper},r.a.createElement("img",{className:se.a.avatar,src:n,alt:"avatar"})),r.a.createElement("p",{className:se.a.name,style:t.length>20?{marginBottom:"10px"}:null},t),r.a.createElement("p",{className:se.a.position},o),r.a.createElement("p",{className:se.a.email,style:c.long?{cursor:"pointer"}:null},c.text,c.long?r.a.createElement("span",{className:se.a.toolTips},i):null),r.a.createElement("p",{className:se.a.phone},a))},_e=a(120),me=a.n(_e),pe=function(e){e.loading;var t=e.users,a=ie(t);return r.a.createElement("div",{className:me.a.container},r.a.createElement("ul",{className:me.a.list},a.map((function(e){return r.a.createElement("li",{key:e.id,className:me.a.list__item},r.a.createElement(ue,e))}))))},de=a(121),Ee=a.n(de),be={getUsers:function(e){return function(t){return t({type:i.a.USERS_GET_REQUEST}),re().all(e).then((function(e){t(function(e){return{type:i.a.USERS_GET_SUCCESS,payload:e}}(e.data)),t(l(e.data))})).catch((function(e){return t(function(e){return{type:i.a.USERS_GET_ERROR,payload:e}}(e))}))}}},fe=Object(o.b)((function(e){return{users:V(e),loading:z(e),totalPage:_(e)}}),be)((function(e){var t=e.loading,a=void 0!==t&&t,o=e.users,i=void 0===o?[]:o,c=e.getUsers,l=e.totalPage,s=P().Btn,u=Object(n.useState)(1),_=Object(q.a)(u,2),m=_[0],p=_[1];Object(n.useEffect)((function(){c(m)}),[c,m]);return r.a.createElement(k.Element,{name:"users"},r.a.createElement("section",{className:Ee.a.section},r.a.createElement("div",{className:Ee.a.container},r.a.createElement("h1",{className:Ee.a.title},"Our cheerful users"),r.a.createElement("p",{className:Ee.a.attention},"Attention! Sorting users by registration date"),r.a.createElement("div",{className:Ee.a.list},!!i.length&&r.a.createElement(pe,{loading:a,users:i})),r.a.createElement(s,{event:function(e){m<l&&p(m+1)},disabled:m===l},"Show More"))))})),he=a(83),Ne=a(122),ge=a(123),ve=a.n(ge),ke={handleCreateUser:function(e,t){return function(a){return a({type:i.a.USER_CREATE_REQUEST}),re().create(e,t).then((function(e){return re().all(1).then((function(e){a(function(e){return{type:i.a.USER_CREATE_SUCCESS,payload:e}}(e.data)),a(l(e.data))}))})).catch((function(e){return a(function(e){return{type:i.a.USER_CREATE_ERROR,payload:e}}(e))}))}},openModalSuccess:function(){return{type:i.a.SUCCESS_MODAL_OPEN}}},ye=Object(o.b)(null,ke)((function(e){var t=e.positions,a=e.token,o=e.handleCreateUser,i=e.openModalSuccess,c=document.documentElement.clientWidth,l={name:"",email:"",phone:"",positions_id:1,photo:""},s=Object(n.useState)(l),u=Object(q.a)(s,2),_=u[0],m=u[1],p=function(e){"positions_id"===e.target.name?m(Object(Ne.a)(Object(Ne.a)({},_),{},Object(he.a)({},e.target.name,Number(e.target.value)))):m(Object(Ne.a)(Object(Ne.a)({},_),{},Object(he.a)({},e.target.name,e.target.value)))},d=function(){var e=Object(K.a)(Y.a.mark((function e(t){var a;return Y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.persist(),a=t.target.files[0],m(Object(Ne.a)(Object(Ne.a)({},_),{},{photo:a}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(e){e.preventDefault();var t=function(e){var t=new FormData;return t.append("position_id",e.positions_id),t.append("name",e.name),t.append("email",e.email),t.append("phone",e.phone),t.append("photo",e.photo),t}(_);o(t,a),c>=1024&&i(),m(l)};return r.a.createElement("div",{className:ve.a.container},r.a.createElement("form",{className:ve.a.form,onSubmit:function(e){return E(e)}},r.a.createElement("label",{className:ve.a.label,htmlFor:"name"},"Name"),r.a.createElement("input",{className:ve.a.input,required:!0,value:_.name,name:"name",onChange:function(e){return p(e)},minLength:"2",maxLength:"60",placeholder:"Your name",id:"name",type:"text"}),r.a.createElement("label",{className:ve.a.labelValid,htmlFor:"name"},"Enter valid Name"),r.a.createElement("label",{className:ve.a.label,htmlFor:"email"},"Email"),r.a.createElement("input",{className:ve.a.input,required:!0,value:_.email,name:"email",onChange:function(e){return p(e)},minLength:"2",maxLength:"100",placeholder:"Your email",id:"email",type:"email"}),r.a.createElement("label",{className:ve.a.labelValid,htmlFor:"email"},"Enter valid Email"),r.a.createElement("label",{className:ve.a.label,htmlFor:"number"},"Phone number"),r.a.createElement("input",{className:ve.a.input,required:!0,minLength:"13",maxLength:"13",value:_.phone,name:"phone",onChange:function(e){return p(e)},pattern:"^[+]{0,1}380([0-9]{9})$",placeholder:"+380 XX XXX XX XX",id:"number",type:"tel"}),r.a.createElement("label",{className:ve.a.labelValid,htmlFor:"number"},"Enter phone number in open format"),!!t.length&&r.a.createElement("div",{className:ve.a.radio},r.a.createElement("p",{className:ve.a.positionTitle},"Select your position"),r.a.createElement("ul",{className:ve.a.radioList},t.map((function(e){return r.a.createElement("li",{key:e.id,className:ve.a.radioItem},r.a.createElement("label",{className:ve.a.radioLabel},r.a.createElement("input",{type:"radio",className:ve.a.radioInput,onChange:function(e){return p(e)},name:"positions_id",value:e.id,checked:e.id===_.positions_id}),e.name))})))),r.a.createElement("label",{htmlFor:"file",className:ve.a.labelFile},r.a.createElement("input",{type:"text",className:ve.a.pathFile,placeholder:"Upload your photo",value:_.photo?_.photo.name.length>25?_.photo.name.slice(0,25)+"..."+_.photo.name.slice(-7):_.photo.name:"",disabled:!0}),r.a.createElement("input",{type:"file",required:!0,name:"photo",id:"file",accept:".jpg, .jpeg",className:ve.a.inputfile,onChange:function(e){return d(e)}}),r.a.createElement("span",{className:ve.a.spanFile},"Browse")),r.a.createElement("button",{type:"submit",className:ve.a.button},"Sign up now")))})),Se=a(124),Oe=a.n(Se),Ce={getPositions:function(){return function(e){return e({type:i.a.POSITION_GET_REQUEST}),oe().positions().then((function(t){e(function(e){return{type:i.a.POSITION_GET_SUCCESS,payload:e}}(t.data.positions))})).catch((function(t){return e(function(e){return{type:i.a.POSITION_GET_ERROR,payload:e}}(t))}))}},getToken:function(){return function(e){return e({type:i.a.TOKEN_GET_REQUEST}),oe().token().then((function(t){e(function(e){return{type:i.a.TOKEN_GET_SUCCESS,payload:e}}(t.data.token))})).catch((function(t){return e(function(e){return{type:i.a.TOKEN_GET_ERROR,payload:e}}(t))}))}}},we=Object(o.b)((function(e){return{positions:m(e),token:p(e)}}),Ce)((function(e){var t=e.getPositions,a=e.positions,o=e.token,i=e.getToken;return Object(n.useEffect)((function(){t(),i()}),[t,i]),r.a.createElement(k.Element,{name:"form"},r.a.createElement("section",{className:Oe.a.section},r.a.createElement("div",{className:Oe.a.container},r.a.createElement("div",{className:Oe.a.textWrapper},r.a.createElement("h1",{className:Oe.a.title},"Register to get a work"),r.a.createElement("p",{className:Oe.a.attention},"Attention! After successful registration and alert, update the list of users in the block from the top")),a&&!!a.length&&r.a.createElement(ye,{positions:a,token:o}))))})),Te=a(125),Ue=a.n(Te),xe=function(){return r.a.createElement("footer",{className:Ue.a.footer},r.a.createElement("div",{className:Ue.a.container},r.a.createElement("p",{className:Ue.a.text},r.a.createElement("span",null,"\xa9"),"abz.agency specially for the test task")))};t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null,r.a.createElement(v,null)),r.a.createElement(T,null),r.a.createElement(j,null),r.a.createElement(G,null),r.a.createElement(J,null),r.a.createElement(fe,null),r.a.createElement(we,null),r.a.createElement(xe,null))}},72:function(e,t,a){e.exports=a.p+"static/media/logo.146e2926.svg"},85:function(e,t,a){e.exports={backdrop:"Modal_backdrop__1Mprn",modal:"Modal_modal__1NR4E"}},86:function(e,t,a){e.exports={header__button:"SuccessModal_header__button__2uSIQ",footer__button:"SuccessModal_footer__button__3LeTp",modal:"SuccessModal_modal__22hq4",container:"SuccessModal_container__1WQOZ",header:"SuccessModal_header__3z8aD",header__title:"SuccessModal_header__title__2JTmJ",header__button__one:"SuccessModal_header__button__one__15E-_",header__button__two:"SuccessModal_header__button__two__3bXW0 SuccessModal_header__button__one__15E-_",main:"SuccessModal_main__3HV33",main__desc:"SuccessModal_main__desc__21ihA",footer:"SuccessModal_footer__2d8zI"}},94:function(e,t,a){e.exports={menu:"BurgerMenu_menu__1jzIW",section:"BurgerMenu_section__3tZVe",section__item__button:"BurgerMenu_section__item__button__NvvVN",backdrop:"BurgerMenu_backdrop__3zB_V",menu__header:"BurgerMenu_menu__header__2mujW",logo:"BurgerMenu_logo__1PgJT",section__item:"BurgerMenu_section__item__3WnPv"}},95:function(e,t,a){e.exports={burgerButton:"BurgerButton_burgerButton__2NDZA",container:"BurgerButton_container__3dRsg",buttonOne:"BurgerButton_buttonOne__24PJt",buttonTwo:"BurgerButton_buttonTwo__2m5c_ BurgerButton_buttonOne__24PJt",buttonThree:"BurgerButton_buttonThree__2Ts1r BurgerButton_buttonOne__24PJt"}},96:function(e,t,a){e.exports={menu:"Header_menu__1kofU",header:"Header_header__3G7eN",container:"Header_container__mGzM1",nav:"Header_nav__3sNS_",nav__logo:"Header_nav__logo__1Z1E4",burgerButton:"Header_burgerButton__21YAt",menu__item:"Header_menu__item__2s40s",menu__item__link:"Header_menu__item__link__2u7yj",menu__item__link__active:"Header_menu__item__link__active__mp7YE"}},97:function(e,t,a){e.exports={button:"Actions_button__3PIUa",link:"Actions_link__3FG3y",container:"Actions_container__1J_QW",button__disabled:"Actions_button__disabled__2gq3a Actions_button__3PIUa"}},98:function(e,t,a){e.exports={section:"Banner_section__knmnz",container:"Banner_container__117KV",titleWrapper:"Banner_titleWrapper__2qOFn",title:"Banner_title__3Syfo",subtitleWrapper:"Banner_subtitleWrapper__2zZ4J",subtitle:"Banner_subtitle__3V1lu"}},99:function(e,t,a){e.exports={section:"AboutMe_section__S0aTH",container:"AboutMe_container__3F93O",title:"AboutMe_title__IJyqP",subtitle:"AboutMe_subtitle__LiZ96",manImage:"AboutMe_manImage__11wUj",text:"AboutMe_text__2Odz8",content:"AboutMe_content__18Jtl",leftSide:"AboutMe_leftSide__242jb",rightSide:"AboutMe_rightSide__2ypd9"}}}]);
//# sourceMappingURL=4.f1248298.chunk.js.map