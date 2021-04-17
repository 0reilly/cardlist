(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{40:function(e,t,a){e.exports=a(71)},64:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(34),l=a.n(c),s=(a(45),a(2)),o=a(4),i=a(16),m=a(3),u=a.n(m),d=a(6),p=a(10),b=a.n(p),v=b.a.create({baseURL:"http://localhost:3006/api/v1/orders"}),E=b.a.create({baseURL:"http://localhost:3006/api/v1/emails"}),f=b.a.create({baseURL:"http://localhost:3006/api/v1/cards"}),h=a(12),N=(a(64),function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2);a[0],a[1],Object(h.useStripe)(),Object(h.useElements)(),Object(o.f)();Object(n.useEffect)((function(){window.scrollTo(0,0)}),[]);var c=function(){var t=Object(d.a)(u.a.mark((function t(a){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.setDisabled(a.empty),e.setError(a.error?a.error.message:"");case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.CardElement,{id:"card-element",options:{style:{base:{color:"#32325d",fontFamily:"Arial, sans-serif",fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#32325d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}}},onChange:c}))}),g=b.a.create({baseURL:"http://localhost:3006/create-payment-intent"}),O=(a(70),a(38)),j=b.a.create({baseURL:"/start-twilio-verify"}),w=b.a.create({baseURL:"http://localhost:3006/check-twilio-verify"}),y=a(23),x=function(e){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col text-center"},r.a.createElement("p",null,"Enter the OTP in the field below to verify your phone number"),e.otp.map((function(t,a){return r.a.createElement("input",{className:"otp-field",type:"text",name:"otp",maxLength:"1",key:a,value:t,onChange:function(t){return function(t,a){if(isNaN(t.value))return!1;e.setOtp(Object(y.a)(e.otp.map((function(e,n){return n===a?t.value:e})))),t.nextSibling&&t.nextSibling.focus()}(t.target,a)},onFocus:function(e){return e.target.select}})})),r.a.createElement("p",null," OTP Entered - ",e.otp.join("")),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(t){return e.setOtp(Object(y.a)(e.otp.map((function(e){return""}))))},className:"btn btn-secondary mr-2"},"Clear"),r.a.createElement("button",{onClick:e.verifyCode,className:"btn btn-primary"},"Verify OTP"))))},k=function(){var e=Object(n.useState)(new Array(6).fill()),t=Object(s.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),i=Object(s.a)(l,2),m=i[0],p=i[1],b=Object(o.g)().id,y=Object(n.useState)(),k=Object(s.a)(y,2),S=(k[0],k[1]),C=Object(n.useState)(),F=Object(s.a)(C,2),P=F[0],A=F[1],I=Object(h.useStripe)(),J=Object(h.useElements)(),L=Object(n.useState)([]),B=Object(s.a)(L,2),D=B[0],T=B[1],U=Zt("acctID",""),R=Object(s.a)(U,2),Q=R[0],$=R[1],q=Object(n.useState)(""),z=Object(s.a)(q,2),M=z[0],_=z[1],V=Object(n.useState)(""),H=Object(s.a)(V,2),Y=H[0],K=H[1],X=Object(n.useState)(""),Z=Object(s.a)(X,2),G=Z[0],W=Z[1],ee=Object(n.useState)(0),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],re=Object(n.useState)(0),ce=Object(s.a)(re,2),le=ce[0],se=ce[1],oe=Object(n.useState)(0),ie=Object(s.a)(oe,2),me=ie[0],ue=ie[1],de=Object(n.useState)(0),pe=Object(s.a)(de,2),be=pe[0],ve=pe[1],Ee=Object(n.useState)(!1),fe=Object(s.a)(Ee,2),he=fe[0],Ne=fe[1],ge=Object(n.useState)(""),Oe=Object(s.a)(ge,2),je=Oe[0],we=Oe[1],ye=Object(n.useState)(""),xe=Object(s.a)(ye,2),ke=xe[0],Se=xe[1],Ce=Object(n.useState)(""),Fe=Object(s.a)(Ce,2),Pe=Fe[0],Ae=(Fe[1],Object(n.useState)("")),Ie=Object(s.a)(Ae,2),Je=Ie[0],Le=Ie[1],Be=Object(n.useState)(""),De=Object(s.a)(Be,2),Te=De[0],Ue=De[1],Re=Object(n.useState)(""),Qe=Object(s.a)(Re,2),$e=Qe[0],qe=Qe[1],ze=Object(n.useState)(""),Me=Object(s.a)(ze,2),_e=Me[0],Ve=Me[1],He=Object(n.useState)(!1),Ye=Object(s.a)(He,2),Ke=Ye[0],Xe=Ye[1],Ze=Object(n.useState)(""),Ge=Object(s.a)(Ze,2),We=Ge[0],et=Ge[1],tt=Object(n.useState)(!1),at=Object(s.a)(tt,2),nt=at[0],rt=at[1],ct=Object(n.useState)(),lt=Object(s.a)(ct,2),st=lt[0],ot=lt[1],it=Object(n.useState)(),mt=Object(s.a)(it,2),ut=mt[0],dt=mt[1],pt=Object(n.useState)([]),bt=Object(s.a)(pt,2),vt=bt[0],Et=bt[1],ft=Zt({}),ht=Object(s.a)(ft,2),Nt=ht[0],gt=ht[1],Ot=Object(n.useState)(!1),jt=Object(s.a)(Ot,2),wt=jt[0],yt=jt[1],xt=Object(n.useState)(!0),kt=Object(s.a)(xt,2),St=kt[0],Ct=kt[1],Ft=Object(n.useState)(!1),Pt=Object(s.a)(Ft,2),At=Pt[0],It=Pt[1],Jt=Object(n.useState)(null),Lt=Object(s.a)(Jt,2),Bt=Lt[0],Dt=Lt[1],Tt=Object(n.useState)(""),Ut=Object(s.a)(Tt,2),Rt=Ut[0],Qt=Ut[1];Object(n.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.get("/"+b);case 3:t=e.sent,console.log(t.data.data),It(t.data.data.order[0].paid),T(t.data.data.items),$(t.data.data.order[0].acctid),_(t.data.data.order[0].storename),ne(t.data.data.order[0].subtotal),se(t.data.data.order[0].shipping),ue(t.data.data.order[0].taxes),ve(t.data.data.order[0].total),K(t.data.data.order[0].successurl),W(t.data.data.order[0].returnurl),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var $t=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.post("/"+b,{paid:!0});case 3:e.sent,It(!0),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(Bt);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),qt=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("creating payment intent"),e.prev=2,e.next=5,g.post("/",{amount:be,customer:ut,account:Q});case 5:a=e.sent,console.log("payment intent created"+JSON.stringify(a)),zt(a.data.clientSecret),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(Bt);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}(),zt=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("confirming payment"),Qt(!0),e.next=4,I.confirmCardPayment(t,{payment_method:st?{card:J.getElement(h.CardElement)}:P.id});case 4:(a=e.sent).error?(Dt("Payment failed ".concat(a.error.message)),Qt(!1)):(Dt(null),Qt(!1),It(!0),$t());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Mt=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:""!=We&&rt(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),_t=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E.post("/check/",{email:We,phone:_e});case 3:if(t=e.sent,console.log(t.data.data),t.data.data.error){e.next=24;break}if(Xe(!0),console.log("cusID: "+t.data.data.customer.id),dt(t.data.data.customer.id),null==t.data.data.customer.name){e.next=22;break}return gt(t.data.data),yt(!0),e.prev=12,e.next=15,f.post("/",{id:t.data.data.customer.id});case 15:(a=e.sent).data.data.paymentMethods.data.length>0?(console.log("card form false"),ot(!1),Et(a.data.data.paymentMethods.data)):(console.log("card form true "),ot(!0)),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(12),console.log(e.t0);case 22:e.next=25;break;case 24:Ne(!0);case 25:e.next=30;break;case 27:e.prev=27,e.t1=e.catch(0),console.log(e.t1);case 30:case"end":return e.stop()}}),e,null,[[0,27],[12,19]])})));return function(){return e.apply(this,arguments)}}(),Vt=function(){var e=Object(d.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(je),e.prev=1,e.next=4,E.post("/billing/",{id:ut,name:je,address:{line1:ke,line2:Pe,city:Je,state:Te,postal_code:$e}});case 4:return t=e.sent,gt(t.data.data),yt(!0),e.prev=7,e.next=10,f.post("/",{id:t.data.data.customer.id});case 10:null!=(a=e.sent).data.data.paymentMethods.data?Et(a.data.data.paymentMethods.data):ot(!0),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),console.log(e.t0);case 17:e.next=21;break;case 19:e.prev=19,e.t1=e.catch(1);case 21:case"end":return e.stop()}}),e,null,[[1,19],[7,14]])})));return function(){return e.apply(this,arguments)}}(),Ht=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:dt(""),rt(!1),et(""),gt([]),yt(!1),Et([]);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Yt=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:yt(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Kt=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Xe(!1),p(!1);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Xt=function(){var e=Object(d.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:yt(!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function Zt(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(Bt){return console.log(Bt),t}})),r=Object(s.a)(a,2),c=r[0],l=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;l(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(Bt){console.log(Bt)}}]}var Gt=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ve(_e),p(!0),Ne(!1),console.log("requesting code"),console.log("phone: "+_e),e.prev=5,e.next=8,j.post("/",{phone:_e});case 8:t=e.sent,console.log(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(){return e.apply(this,arguments)}}(),Wt=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("verifying code: "+a.join("")),e.prev=1,e.next=4,w.post("/",{phone:_e,code:a.join("")});case 4:t=e.sent,console.log(JSON.stringify(t)),t.data&&_t(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"text-center"},r.a.createElement("h1",null,M)),At?r.a.createElement("div",{className:At?"p-4 justify-content-center result-message":"p-4 justify-content-center result-message hidden"},r.a.createElement("div",{className:"row"},r.a.createElement("p",null,"Payment succeeded! Click below to view your order summary."),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement("a",{href:Y,className:"btn btn-link p-0 m-0 d-inline align-baseline"},"Back")))):r.a.createElement("div",{className:"row "},r.a.createElement("div",{className:"col-sm-12"},nt?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card mt-4 mb-4 "},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-sm-4"},"Email"),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("span",null,We)),r.a.createElement("div",{className:"col-sm-2 text-right"},r.a.createElement("button",{className:"btn btn-link p-0 m-0 d-inline align-baseline",onClick:Ht},"edit"))),he?r.a.createElement("div",{class:"alert alert-danger",role:"alert"},"You entered a phone # that is different from the one you created your account with! Please request a new code with the correct #"):null,Ke?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-sm-4"},"Phone"),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("span",null,_e)),r.a.createElement("div",{className:"col-sm-2 text-right"},r.a.createElement("button",{onClick:Kt,className:"btn btn-link p-0 m-0 d-inline align-baseline"},"edit"))),r.a.createElement("div",null," ",wt?r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-sm-4"},"Billing Address"),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"row"},r.a.createElement("span",null,Nt.customer.name)),r.a.createElement("div",{className:"row"},r.a.createElement("span",null,Nt.customer.address.line1)),r.a.createElement("div",{className:"row"},r.a.createElement("span",null,Nt.customer.address.line2)),r.a.createElement("div",{className:"row"},r.a.createElement("span",null,Nt.customer.address.city)),r.a.createElement("div",{className:"row"},r.a.createElement("span",null,Nt.customer.address.state)),r.a.createElement("div",{className:"row"},r.a.createElement("span",null,Nt.customer.address.zip))),r.a.createElement("div",{className:"col-sm-2 text-right"},r.a.createElement("button",{onClick:Yt,className:"btn btn-link p-0 m-0 d-inline align-baseline"},"edit"))):r.a.createElement("div",{className:"row mt-4"},r.a.createElement("div",{className:"col-sm-4"},"Enter Billing Address"),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"row mt-2"},r.a.createElement("input",{value:je,onChange:function(e){return we(e.target.value)},placeholder:"Full Name"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("input",{value:ke,onChange:function(e){return Se(e.target.value)},placeholder:"Address Line 1"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("input",{value:Pe,onChange:function(e){return Se(e.target.value)},placeholder:"Address Line 2"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("input",{value:Te,onChange:function(e){return Ue(e.target.value)},placeholder:"City"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("input",{value:Je,onChange:function(e){return Le(e.target.value)},placeholder:"State"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("input",{value:$e,onChange:function(e){return qe(e.target.value)},placeholder:"Zip"})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("button",{onClick:Vt,className:"btn btn-primary  btn-block "},"Save Address"))),r.a.createElement("div",null,Nt?null:0!=Nt.customer.name?r.a.createElement("div",{className:"col-sm-2 text-right"},r.a.createElement("button",{onClick:Xt,className:"btn btn-link p-0 m-0 d-inline align-baseline"},"cancel")):null)))):r.a.createElement(r.a.Fragment,null,m&&!he?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement(x,{otp:a,setOtp:c,verifyCode:Wt}))):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"Phone"),r.a.createElement("div",{className:"col"},r.a.createElement(O.a,{placeholder:"Enter phone number",value:_e,onChange:Ve})),r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:Gt,className:"row btn btn-primary",type:"submit"},"Verify Phone to retrieve saved payment data"))))))),st&&wt?r.a.createElement("div",{className:"card mt-4 mb-4 "},r.a.createElement("div",{className:"card-header text-center "},r.a.createElement("h4",{className:"text-center"},"Save a New Card"),r.a.createElement("p",null,"so you don't have to enter it next time!")),r.a.createElement("div",{className:"card-body"},r.a.createElement(N,{setError:Dt,setDisabled:Ct,setClientSecret:S}),vt.length>0?r.a.createElement("div",{className:"col-sm-2"},r.a.createElement("button",{onClick:function(){return ot(!1)},className:"btn btn-link d-inline align-baseline"},"Back to Saved Cards")):null)):wt&&!st?r.a.createElement("div",{className:"card text-center mt-4 mb-4 "},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"text-center"},"Saved Cards")),r.a.createElement("div",{className:"card-body "},vt.map((function(e){return r.a.createElement("div",{onChange:function(t){return function(e){A(e),Ct(!1)}(e)},className:"row "},r.a.createElement("div",{className:"col-xs-3"},r.a.createElement("input",{type:"radio",name:"addon"})),r.a.createElement("div",{className:"col"},r.a.createElement("span",null,e.card.brand," - ",e.card.last4)))})),r.a.createElement("div",{className:"row mt-2"},r.a.createElement("button",{onClick:function(){return ot(!0)},className:"btn btn-primary"},"Add a new card")))):null):r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Quick checkout"),r.a.createElement("p",null,"Enter your email address to log in or sign up."),r.a.createElement("div",{className:""},r.a.createElement("input",{value:We,onChange:function(e){return et(e.target.value)},placeholder:"Email address",type:"text",className:"mt-2 mb-2 form-control"}),r.a.createElement("button",{onClick:Mt,className:"mt-2 mb-2 btn btn-primary btn-block"},"Continue with TapPay")))),r.a.createElement("div",{className:"mt-4 text-nowrap card"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h4",{className:"text-center"},"Order Details")),r.a.createElement("ul",{className:"list-group list-group-flush"},D.map((function(e){return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},e.name),r.a.createElement("div",{className:"col text-right"},"$",e.price/100)))}))),r.a.createElement("div",{className:"card-body"},r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"Subtotal"),r.a.createElement("div",{className:"col text-right"},"$",ae/100))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"Shipping"),r.a.createElement("div",{className:"col text-right"},"$",le/100))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"Taxes"),r.a.createElement("div",{className:"col text-right"},"$",me/100))),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},"Total"),r.a.createElement("div",{className:"col text-right"},"$",be/100)))),r.a.createElement("form",{id:"payment-form",onSubmit:qt},r.a.createElement("div",{className:At?"p-4 row justified-content-center result-message hidden":"p-4 row justified-content-center result-message"},r.a.createElement("button",{disabled:Rt||St||At,className:"col btn btn-primary"},r.a.createElement("span",{id:"button-text"},Rt?r.a.createElement("div",{className:"spinner",id:"spinner"}):"Pay Now"))),Bt&&r.a.createElement("div",{className:"card-error",role:"alert"},Bt)))),r.a.createElement("div",{className:"mt-4 text-center"},r.a.createElement("a",{href:G,className:"btn btn-link p-0 m-0 d-inline align-baseline"},"Back")))))},S=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(k,null))},C=a(37),F=function(){var e=Object(n.useState)((function(){return Object(C.a)("pk_test_51HX92ADV5bqQz6pNUHpNfJziKCFf5lOBPO6A30apaEDI0Yb0jvwOmQCcebkay4TIcs2JIsrNxQs9vN8NImlsaevO0030bqBsJQ")})),t=Object(s.a)(e,2),a=t[0];t[1];return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement(i.a,null,r.a.createElement(o.c,null,r.a.createElement(h.Elements,{stripe:a},r.a.createElement(o.a,{exact:!0,path:"/pay/:id",component:S}))))))};l.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.4851bb26.chunk.js.map