import{S as a,i as s,s as t,e as r,t as e,k as o,c as n,a as l,g as c,d as i,n as d,b as h,E as u,f,F as m,h as v,r as p,u as b,w as g,x as E,D as x,W as y,X as w,G as D,H as I,a2 as V,V as $,a1 as N,I as T,A as j,j as k,m as S,o as A,v as M,l as P,a5 as U}from"../../../chunks/vendor-969998bb.js";import{s as B}from"../../../chunks/global-04cce44f.js";function L(a){let s,t,o,d,u,v,p,b,g;return{c(){s=r("div"),t=r("button"),o=r("i"),d=e("\r\n\t\t\t\t\t\tDemote to Standard"),this.h()},l(a){s=n(a,"DIV",{class:!0});var r=l(s);t=n(r,"BUTTON",{class:!0});var e=l(t);o=n(e,"I",{class:!0}),l(o).forEach(i),d=c(e,"\r\n\t\t\t\t\t\tDemote to Standard"),e.forEach(i),r.forEach(i),this.h()},h(){h(o,"class","bi bi-arrow-down me-2"),h(t,"class","btn btn-outline-warning"),h(s,"class","d-flex flex-column")},m(r,e){f(r,s,e),m(s,t),m(t,o),m(t,d),p=!0,b||(g=D(t,"click",a[7]),b=!0)},p:I,i(a){p||(x((()=>{v&&v.end(1),u=y(s,V,{duration:200}),u.start()})),p=!0)},o(a){u&&u.invalidate(),v=$(s,N,{duration:200}),p=!1},d(a){a&&i(s),a&&v&&v.end(),b=!1,g()}}}function O(a){let s,t,u,v,p,b,g,E,w,j,k,S,A,M,P;return{c(){s=r("div"),t=r("p"),u=e("Do you want to demote this account to a Standard Account?"),v=o(),p=r("div"),b=r("button"),g=e("Yes"),E=o(),w=r("button"),j=e("No"),this.h()},l(a){s=n(a,"DIV",{class:!0});var r=l(s);t=n(r,"P",{});var e=l(t);u=c(e,"Do you want to demote this account to a Standard Account?"),e.forEach(i),v=d(r),p=n(r,"DIV",{class:!0,role:!0,"aria-label":!0});var o=l(p);b=n(o,"BUTTON",{type:!0,class:!0});var h=l(b);g=c(h,"Yes"),h.forEach(i),E=d(o),w=n(o,"BUTTON",{type:!0,class:!0});var f=l(w);j=c(f,"No"),f.forEach(i),o.forEach(i),r.forEach(i),this.h()},h(){h(b,"type","button"),h(b,"class","btn btn-outline-primary"),h(w,"type","button"),h(w,"class","btn btn-outline-danger"),h(p,"class","btn-group"),h(p,"role","group"),h(p,"aria-label",""),h(s,"class","d-flex flex-column")},m(r,e){f(r,s,e),m(s,t),m(t,u),m(s,v),m(s,p),m(p,b),m(b,g),m(p,E),m(p,w),m(w,j),A=!0,M||(P=[D(b,"click",a[5]),D(w,"click",a[6])],M=!0)},p:I,i(a){A||(x((()=>{S&&S.end(1),k=y(s,V,{duration:200}),k.start()})),A=!0)},o(a){k&&k.invalidate(),S=$(s,N,{duration:200}),A=!1},d(a){a&&i(s),a&&S&&S.end(),M=!1,T(P)}}}function _(a){let s,t,D,I,V,$,N,T,j,k,S,A,M,P,U,B,_,q,H=a[0].given_name+"",G=a[0].family_name+"";const Y=[O,L],z=[];function C(a,s){return 1==a[2]?0:1}return U=C(a),B=z[U]=Y[U](a),{c(){s=r("div"),t=r("div"),D=r("div"),I=r("p"),V=e(a[3]),$=o(),N=r("p"),T=e(H),j=o(),k=e(G),S=o(),A=r("p"),M=e(a[4]),P=o(),B.c(),this.h()},l(r){s=n(r,"DIV",{class:!0});var e=l(s);t=n(e,"DIV",{class:!0});var o=l(t);D=n(o,"DIV",{class:!0,style:!0});var h=l(D);I=n(h,"P",{class:!0});var u=l(I);V=c(u,a[3]),u.forEach(i),$=d(h),N=n(h,"P",{class:!0});var f=l(N);T=c(f,H),j=d(f),k=c(f,G),f.forEach(i),S=d(h),A=n(h,"P",{class:!0});var m=l(A);M=c(m,a[4]),m.forEach(i),P=d(h),B.l(h),h.forEach(i),o.forEach(i),e.forEach(i),this.h()},h(){h(I,"class","text-muted col-12 text-center"),h(N,"class","m-0 text-center text-primary fs-6"),h(A,"class","display-6 text-center m-0 mb-4"),h(D,"class","row row-cols-1"),u(D,"font-size","0.8em"),h(t,"class","card-body"),h(s,"class","card rounded-3 shadow-sm card1 mb-2 bg-transparent")},m(a,r){f(a,s,r),m(s,t),m(t,D),m(D,I),m(I,V),m(D,$),m(D,N),m(N,T),m(N,j),m(N,k),m(D,S),m(D,A),m(A,M),m(D,P),z[U].m(D,null),q=!0},p(s,[t]){a=s,(!q||1&t)&&H!==(H=a[0].given_name+"")&&v(T,H),(!q||1&t)&&G!==(G=a[0].family_name+"")&&v(k,G);let r=U;U=C(a),U===r?z[U].p(a,t):(p(),b(z[r],1,1,(()=>{z[r]=null})),g(),B=z[U],B?B.p(a,t):(B=z[U]=Y[U](a),B.c()),E(B,1),B.m(D,null))},i(t){q||(E(B),_||x((()=>{_=y(s,w,{y:20,duration:500,delay:100+50*a[1]}),_.start()})),q=!0)},o(a){b(B),q=!1},d(a){a&&i(s),z[U].d()}}}function q(a,s,t){let{thisuser:r,index:e}=s,o=r?r.id.toUpperCase():"",n=r.email.split("@")[0],l=!1;return a.$$set=a=>{"thisuser"in a&&t(0,r=a.thisuser),"index"in a&&t(1,e=a.index)},[r,e,l,o,n,async a=>{const{data:s,error:t}=await supabase.from("users").update({isModerator:"false"}).eq("id",r.id);t||(console.log("Account Updated"),window.location.reload())},()=>{t(2,l=!l)},()=>{t(2,l=!l)}]}class H extends a{constructor(a){super(),s(this,a,q,_,t,{thisuser:0,index:1})}}function G(a,s,t){const r=a.slice();return r[2]=s[t],r[4]=t,r}function Y(a){let s,t,u,v,p;return{c(){s=r("div"),t=r("strong"),u=e("Loading..."),v=o(),p=r("div"),this.h()},l(a){s=n(a,"DIV",{class:!0});var r=l(s);t=n(r,"STRONG",{});var e=l(t);u=c(e,"Loading..."),e.forEach(i),v=d(r),p=n(r,"DIV",{class:!0,role:!0,"aria-hidden":!0}),l(p).forEach(i),r.forEach(i),this.h()},h(){h(p,"class","spinner-border ms-auto"),h(p,"role","status"),h(p,"aria-hidden","true"),h(s,"class","d-flex align-items-center")},m(a,r){f(a,s,r),m(s,t),m(t,u),m(s,v),m(s,p)},p:I,i:I,o:I,d(a){a&&i(s)}}}function z(a){let s,t,r=a[0],e=[];for(let n=0;n<r.length;n+=1)e[n]=C(G(a,r,n));const o=a=>b(e[a],1,1,(()=>{e[a]=null}));return{c(){for(let a=0;a<e.length;a+=1)e[a].c();s=P()},l(a){for(let s=0;s<e.length;s+=1)e[s].l(a);s=P()},m(a,r){for(let s=0;s<e.length;s+=1)e[s].m(a,r);f(a,s,r),t=!0},p(a,t){if(1&t){let n;for(r=a[0],n=0;n<r.length;n+=1){const o=G(a,r,n);e[n]?(e[n].p(o,t),E(e[n],1)):(e[n]=C(o),e[n].c(),E(e[n],1),e[n].m(s.parentNode,s))}for(p(),n=r.length;n<e.length;n+=1)o(n);g()}},i(a){if(!t){for(let a=0;a<r.length;a+=1)E(e[a]);t=!0}},o(a){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)b(e[s]);t=!1},d(a){U(e,a),a&&i(s)}}}function C(a){let s,t;return s=new H({props:{thisuser:a[2],index:a[4]}}),{c(){k(s.$$.fragment)},l(a){S(s.$$.fragment,a)},m(a,r){A(s,a,r),t=!0},p(a,t){const r={};1&t&&(r.thisuser=a[2]),s.$set(r)},i(a){t||(E(s.$$.fragment,a),t=!0)},o(a){b(s.$$.fragment,a),t=!1},d(a){M(s,a)}}}function F(a){let s,t,u,D,I,V,$,N,T,j,k,S,A,M,P,U,B,L,O,_,q,H=a[0].length+"";const G=[z,Y],C=[];function F(a,s){return a[1]?0:1}return L=F(a),O=C[L]=G[L](a),{c(){s=r("main"),t=r("div"),u=r("div"),D=r("div"),I=r("h5"),V=e("Verified Moderators"),$=o(),N=r("h1"),T=e(H),j=o(),k=r("i"),S=o(),A=r("div"),M=r("p"),P=e("List of moderators"),U=o(),B=r("div"),O.c(),this.h()},l(a){s=n(a,"MAIN",{class:!0});var r=l(s);t=n(r,"DIV",{class:!0});var e=l(t);u=n(e,"DIV",{class:!0});var o=l(u);D=n(o,"DIV",{class:!0});var h=l(D);I=n(h,"H5",{});var f=l(I);V=c(f,"Verified Moderators"),f.forEach(i),$=d(h),N=n(h,"H1",{class:!0});var m=l(N);T=c(m,H),m.forEach(i),j=d(h),k=n(h,"I",{class:!0}),l(k).forEach(i),h.forEach(i),o.forEach(i),e.forEach(i),S=d(r),A=n(r,"DIV",{class:!0});var v=l(A);M=n(v,"P",{class:!0});var p=l(M);P=c(p,"List of moderators"),p.forEach(i),U=d(v),B=n(v,"DIV",{class:!0});var b=l(B);O.l(b),b.forEach(i),v.forEach(i),r.forEach(i),this.h()},h(){h(N,"class","mt-4"),h(k,"class","bi bi-pencil-square svelte-1oj9r5s"),h(D,"class","card-body svelte-1oj9r5s"),h(u,"class","card border-3 rounded-3 shadow-sm svelte-1oj9r5s"),h(t,"class","container"),h(M,"class","display-6"),h(B,"class","row row-cols-md-2"),h(A,"class","container mt-5"),h(s,"class","text-white svelte-1oj9r5s")},m(a,r){f(a,s,r),m(s,t),m(t,u),m(u,D),m(D,I),m(I,V),m(D,$),m(D,N),m(N,T),m(D,j),m(D,k),m(s,S),m(s,A),m(A,M),m(M,P),m(A,U),m(A,B),C[L].m(B,null),q=!0},p(a,[s]){(!q||1&s)&&H!==(H=a[0].length+"")&&v(T,H);let t=L;L=F(a),L===t?C[L].p(a,s):(p(),b(C[t],1,1,(()=>{C[t]=null})),g(),O=C[L],O?O.p(a,s):(O=C[L]=G[L](a),O.c()),E(O,1),O.m(B,null))},i(a){q||(E(O),_||x((()=>{_=y(s,w,{y:20,duration:500}),_.start()})),q=!0)},o(a){b(O),q=!1},d(a){a&&i(s),C[L].d()}}}function R(a,s,t){let r=[],e=!1;return j((async a=>{let{data:s,error:o}=await B.from("users").select("*").filter("isModerator","eq","true");o||(t(0,r=s),setTimeout((()=>{t(1,e=!0)}),200))})),[r,e]}class W extends a{constructor(a){super(),s(this,a,R,F,t,{})}}export{W as default};