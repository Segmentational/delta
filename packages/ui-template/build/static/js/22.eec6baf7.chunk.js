(this["webpackJsonp@cloud-technology/ui-template"]=this["webpackJsonp@cloud-technology/ui-template"]||[]).push([[22],{792:function(e,t,n){},793:function(e,t,n){e.exports={form:"Index_form__1NCKm",fields:"Index_fields__3weEF",normalized:"Index_normalized__v75ct",field:"Index_field__2bfls",footer:"Index_footer__1S7b1",button:"Index_button__c6Osp",notification:"Index_notification__2APeM",container:"Index_container__PZsay"}},988:function(e,t,n){"use strict";n.r(t);var o=n(572),r=n(103),a=n(573),s=n.n(a),i=n(574),d=n(92),l=(n(792),n(793)),u=n(0),c=n(22),m=n(104),v=n(115),p=n(91),b={Button:{Kind:{primary:"primary",secondary:"secondary",ghost:"ghost",tertiary:"tertiary",danger:{normal:"danger",primary:"danger--primary",ghost:"danger--ghost",tertiary:"danger--tertiary"}},Attributes:{Types:function e(t){var n,o,r,a,s,i,d,l,u,c,b,g,f,h,y,E,w,x,I,k,T,P,S,j=t.as,A=void 0===j?null===(n=v.a.props)||void 0===n?void 0:n.as:j,O=t.children,U=void 0===O?null===(o=v.a.props)||void 0===o?void 0:o.children:O,B=t.className,_=void 0===B?null===(r=v.a.props)||void 0===r?void 0:r.className:B,D=t.dangerDescription,C=void 0===D?null===(a=v.a.props)||void 0===a?void 0:a.dangerDescription:D,N=t.disabled,L=void 0===N?null===(s=v.a.props)||void 0===s?void 0:s.disabled:N,z=t.hasIconOnly,J=void 0===z?null===(i=v.a.props)||void 0===i?void 0:i.hasIconOnly:z,W=t.href,M=void 0===W?null===(d=v.a.props)||void 0===d?void 0:d.href:W,F=t.iconDescription,R=void 0===F?null===(l=v.a.props)||void 0===l?void 0:l.iconDescription:F,K=t.isExpressive,H=void 0===K?null===(u=v.a.props)||void 0===u?void 0:u.isExpressive:K,q=t.isSelected,V=void 0===q?null===(c=v.a.props)||void 0===c?void 0:c.isSelected:q,G=t.kind,Z=void 0===G?null===(b=v.a.props)||void 0===b?void 0:b.kind:G,Q=t.onBlur,X=void 0===Q?null===(g=v.a.props)||void 0===g?void 0:g.onBlur:Q,Y=t.onClick,$=void 0===Y?null===(f=v.a.props)||void 0===f?void 0:f.onClick:Y,ee=t.onFocus,te=void 0===ee?null===(h=v.a.props)||void 0===h?void 0:h.onFocus:ee,ne=t.onMouseEnter,oe=void 0===ne?null===(y=v.a.props)||void 0===y?void 0:y.onMouseEnter:ne,re=t.onMouseLeave,ae=void 0===re?null===(E=v.a.props)||void 0===E?void 0:E.onMouseLeave:re,se=t.renderIcon,ie=void 0===se?null===(w=v.a.props)||void 0===w?void 0:w.renderIcon:se,de=t.role,le=void 0===de?null===(x=v.a.props)||void 0===x?void 0:x.role:de,ue=t.size,ce=void 0===ue?null===(I=v.a.props)||void 0===I?void 0:I.size:ue,me=t.tabIndex,ve=void 0===me?null===(k=v.a.props)||void 0===k?void 0:k.tabIndex:me,pe=t.tooltipAlignment,be=void 0===pe?null===(T=v.a.props)||void 0===T?void 0:T.tooltipAlignment:pe,ge=t.tooltipPosition,fe=void 0===ge?null===(P=v.a.props)||void 0===P?void 0:P.tooltipPosition:ge,he=t.type,ye={as:A,children:U,className:_,dangerDescription:C,disabled:L,hasIconOnly:J,href:M,iconDescription:R,isExpressive:H,isSelected:V,kind:Z,onBlur:X,onClick:$,onFocus:te,onMouseEnter:oe,onMouseLeave:ae,renderIcon:ie,role:le,size:ce,tabIndex:ve,tooltipAlignment:be,tooltipPosition:fe,type:void 0===he?null===(S=v.a.props)||void 0===S?void 0:S.type:he};return Object(p.jsx)(e,Object(m.a)({},ye))}.propTypes}},Input:{button:"button",checkbox:"checkbox",color:"color",date:"date",datetime:"datetime-local",email:"email",file:"file",hidden:"hidden",image:"image",month:"month",number:"number",password:"password",radio:"radio",range:"range",reset:"reset",search:"search",submit:"submit",tel:"tel",text:"text",time:"time",url:"url",week:"week"}},g=n(578),f=n.n(g),h=n(606),y="https://localhost:3443/v1/authorization/login",E=n.n(h).a.createInstance({name:"Nexus-UI",storeName:"JWT",description:"Nexus Dashboard Login State"}),w=function(){var e=Object(i.a)(s.a.mark((function e(t,n){var o,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={Data:null,Loading:!0,Error:!1,Status:{Code:-1,Message:""}},console.debug("[Trace] Submitting Authentication Payload ..."),r=function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post(y,{Grant:"Password",Username:t.Username,Password:t.Password},{cancelToken:n.token}).then((function(e){console.debug("[Debug] Response Data",e),console.debug("[Debug] JWT Authorization Data",e.data),console.debug("[Debug] JWT Authorization Return Headers",e.headers),o.Error=!1,o.Data={Payload:e.data,Headers:e.headers,Status:{Code:e.status,Message:e.statusText}},o.Status.Code=e.status,o.Status.Message=e.statusText;try{return console.trace("[Trace] Authentication Object",o),console.debug("[Debug]","JWT Token (Pre-Storage Setter)",o.Data.Payload.JWT),E.setItem("JWT",o.Data.Payload.JWT,(function(e,t){e&&console.error("[Fatal Error] Unknown Exception",e),e?n.cancel("Unknown Error Establishing JWT Token"):console.debug("[Debug]","Established JWT Token in Storage",t)}))}catch(t){return console.debug("[Warning] Unsuccessfully Established JWT Token",t),o.Error=t,n.cancel("Error Establishing JWT Token"),E.clear((function(e){e&&console.error("[Fatal Error] Unknown Exception",e),console.debug("[Debug]","Removed Stale JWT Token(s) from Storage")}))}})).finally((function(){return o.Loading=!1}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),console.debug("[Debug]","Initializing Authorization Awaitable ..."),console.trace(y),e.next=7,r();case 7:return console.debug("[Debug]","Awaitable Complete","Session Storage Awaitable(s) ?:= Complete"),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),x=function(e){var t=e.Authorizer,n=Object(c.g)(),o=Object(u.useState)(!1),a=Object(d.a)(o,2),m=a[0],v=a[1],g=Object(u.useState)(!0),h=Object(d.a)(g,2),y=h[0],E=h[1],x=Object(u.useState)(!0),I=Object(d.a)(x,2),k=I[0],T=I[1];Object(u.useEffect)((function(){!function(){var e,t,n,o=document.getElementById("username-field"),r=document.getElementById("submit-button");o.autofocus=!0,o.focus(),o.click(),null===(e=document.getElementById("login-form"))||void 0===e||e.addEventListener("submit",(function(e){e.preventDefault(),console.trace("[Trace]","Trusted Event",e.isTrusted),console.trace("[Trace]","Phase #",e.eventPhase),console.trace("[Trace]","Composed Event Path(s)",e.composedPath()),console.trace("[Trace]","Event Time-Stamp",e.timeStamp)})),null===(t=document.getElementById("username-field"))||void 0===t||t.addEventListener("keydown",(function(e){"Enter"===e.key&&(console.trace("[Trace]","Username","Return Key Event"),r.click())})),null===(n=document.getElementById("password-field"))||void 0===n||n.addEventListener("keydown",(function(e){"Enter"===e.key&&(console.trace("[Trace]","Password","Return Key Event"),r.click())})),console.debug("[Debug]","Event Listeners","Successfully Loaded Page Listeners")}()}),[]);var P=function(e){var t,n={Username:!1,Password:!1,Error:{Username:document.getElementById("username-field-error-msg")||!1,Password:document.getElementById("password-field-error-msg")||!1}},o=document.getElementById("username-field"),r=document.getElementById("password-field"),a=document.getElementById("submit-button");n.Username=String(null===o||void 0===o?void 0:o.value).length>=6&&!0,n.Password=String(null===r||void 0===r?void 0:r.value).length>=8&&!0,n.Password&&o.classList.toggle("cds--text-input--invalid",!1),n.Password&&o.removeAttribute("data-invalid"),n.Password&&o.removeAttribute("aria-invalid"),n.Password&&o.removeAttribute("aria-describedby"),n.Password&&(null===(t=document.getElementById("password-field-error-msg"))||void 0===t||t.remove()),n.Username&&n.Password&&a.removeAttribute("disabled"),n.Username&&n.Password&&a.classList.toggle("cds--btn--disabled",!1);var s=document.getElementsByClassName("cds--form__requirements").item(0);s&&(n.Username||null===n.Username||n.Password||null===n.Password)&&s.remove()},S=function(e){var t,n={Username:!1,Password:!1,Error:{Username:document.getElementById("username-field-error-msg")||!1,Password:document.getElementById("password-field-error-msg")||!1}},o=document.getElementById("username-field"),r=document.getElementById("password-field"),a=document.getElementById("submit-button");n.Username=String(null===o||void 0===o?void 0:o.value).length>=6&&!0,n.Password=String(null===r||void 0===r?void 0:r.value).length>=8&&!0,n.Username&&o.classList.toggle("cds--text-input--invalid",!1),n.Username&&o.removeAttribute("data-invalid"),n.Username&&o.removeAttribute("aria-invalid"),n.Username&&o.removeAttribute("aria-describedby"),n.Username&&(null===(t=document.getElementById("username-field-error-msg"))||void 0===t||t.remove()),n.Username&&n.Password&&a.removeAttribute("disabled"),n.Username&&n.Password&&a.classList.toggle("cds--btn--disabled",!1);var s=document.getElementsByClassName("cds--form__requirements").item(0);s&&(n.Username||null===n.Username||n.Password||null===n.Password)&&s.remove()},j=function(){return Object(p.jsxs)(r.n,{id:"login-form",className:l.form,onSubmit:function(e){E(null),T(null);var o=document.getElementById("username-field"),r=document.getElementById("password-field"),a=document.getElementById("submit-button");o.toggleAttribute("readonly",!0),r.toggleAttribute("readonly",!0),a.toggleAttribute("disabled",!0),o.contentEditable="false",r.contentEditable="false";var d=function(){var e=Object(i.a)(s.a.mark((function e(){var t,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v(!0),t=f.a.CancelToken.source(),e.next=4,w({Username:null===o||void 0===o?void 0:o.value,Password:null===r||void 0===r?void 0:r.value},t);case 4:if(n=e.sent,console.debug("[Debug] Validating Authentication Attempt ...",n),-1!==n.Status.Code){e.next=12;break}return console.warn("@Task: Implement Race-Condition Notification"),console.warn(n),e.abrupt("return",!0);case 12:if(200!==n.Status.Code){e.next=17;break}return console.log("@Task: Implement Successful Notification"),e.abrupt("return",!0);case 17:if(!(n.Status.Code>=300&&n.Status.Code<500)){e.next=23;break}return console.error("@Task: Implement Error Notification"),console.warn(n),e.abrupt("return",!1);case 23:if(!(n.Status.Code>=500)){e.next=29;break}return console.warn("@Task: Implement Internal Server Error Notification"),console.warn(n),e.abrupt("return",!1);case 29:return console.error("@Task: !!! Handle Unknown Error"),console.error(n),e.abrupt("return",!1);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();d().then((function(e){console.debug("[Debug]","Validation Outcome",e);try{if(!0!==e){var o=JSON.stringify(e,null,4);throw console.error("[Error]",JSON.stringify({Response:e,Error:o},null,4)),new Error(JSON.stringify({Response:e,Error:o},null,4))}v(!1),t[1](!0),n(-1)}catch(o){throw console.warn("[Warning]","Caught Exception",o),new Error(o)}})).catch((function(e){console.warn("[Warning]",e),o.removeAttribute("readonly"),r.removeAttribute("readonly"),o.contentEditable="true",r.contentEditable="true",o.focus(),o.click(),E(!1),T(!1),v(!1),console.log("[Log]","Form Submission Attempt Complete")}))},children:[Object(p.jsxs)(r.o,{legendText:"",className:l.fields,children:[Object(p.jsx)(r.zb,{id:"username-field",className:[l.field,l.normalized].join(" "),invalid:!1===y,inline:!1,type:b.Input.text,invalidText:"Username must contain 6 or more characters",labelText:"Account",autoComplete:"false",hideLabel:!1,onChange:S}),Object(p.jsx)(r.zb,{id:"password-field",className:l.field,inline:!1,invalid:!1===k,type:b.Input.password,invalidText:"Password must contain a minimum of 8 characters, at least one number, and include uppercase & lowercase letters",labelText:"Password",autoComplete:"false",hideLabel:!1,onChange:P})]}),Object(p.jsx)(r.d,{id:"submit-button",className:l.button,kind:b.Button.Kind.tertiary,tabIndex:0,disabled:!0,type:b.Input.submit,tooltipAlignment:"center",tooltipPosition:"right",name:"submit",onClick:function(){v(!0),console.debug("[Debug]","Submit Button Event","Submitting ...");var e=document.getElementById("login-form");null===e||void 0===e||e.submit()},children:!0===m?Object(p.jsx)(r.A,{description:"Loading..."}):Object(p.jsx)(p.Fragment,{children:"Submit"})})]})};return Object(p.jsx)(j,{})},I=function(e){var t=e.Authorizer;return Object(p.jsx)(x,{Authorizer:t})},k=["Authorizer"],T=function(e){var t=e.Authorizer,n=Object(o.a)(e,k);return console.debug("[Debug] Unassigned Properties",n),Object(p.jsx)(r.p,{children:Object(p.jsx)(r.i,{lg:16,md:8,sm:4,children:Object(p.jsx)(I,{Authorizer:t})})})};T.defaultProps={};t.default=T}}]);
//# sourceMappingURL=22.eec6baf7.chunk.js.map