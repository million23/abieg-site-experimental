import{S as t,i as a,s,e as r,t as e,k as o,c as n,a as c,g as l,n as i,d,b as u,f as h,F as f,h as m,$ as p,r as v,u as b,w as E,x as g,l as y,G as D,H as w,D as x,Y as I,a3 as M,X as N,a2 as T,I as V,a1 as P,E as A,Z as U,A as Y,j as k,m as q,o as B,v as O,a9 as R}from"../../../chunks/vendor-1b153074.js";import{s as S}from"../../../chunks/global-f53028be.js";function $(t){let a,s;return{c(){a=r("i"),s=e("\r\n\t\t\t\t\tShow Details"),this.h()},l(t){a=n(t,"I",{class:!0}),c(a).forEach(d),s=l(t,"\r\n\t\t\t\t\tShow Details"),this.h()},h(){u(a,"class","bi bi-arrow-down")},m(t,r){h(t,a,r),h(t,s,r)},d(t){t&&d(a),t&&d(s)}}}function j(t){let a,s;return{c(){a=r("i"),s=e("\r\n\t\t\t\t\tHide Details"),this.h()},l(t){a=n(t,"I",{class:!0}),c(a).forEach(d),s=l(t,"\r\n\t\t\t\t\tHide Details"),this.h()},h(){u(a,"class","bi bi-arrow-up")},m(t,r){h(t,a,r),h(t,s,r)},d(t){t&&d(a),t&&d(s)}}}function _(t){let a,s,y,D,w,I,M,N,V,A,U,Y,k,q,B,O,R,S,$,j,_,L,z,C,F,Z,J,K,Q,W=t[0].given_name+"",tt=t[0].family_name+"",at=p(t[0].birthdate).format("MMMM DD, YYYY")+"",st=p().diff(t[0].birthdate,"year")+"",rt=t[0].gender+"",et=t[0].shipping_address+"";const ot=[G,H],nt=[];function ct(t,a){return t[0].isModerator?0:1}j=ct(t),_=nt[j]=ot[j](t);let lt=!t[0].isModerator&&X(t);return{c(){a=r("div"),s=r("p"),y=e(W),D=o(),w=e(tt),I=o(),M=r("p"),N=e(at),V=e(" -\r\n\t\t\t\t\t\t"),A=r("span"),U=e(st),Y=e(" year old"),k=o(),q=r("span"),B=e(rt),O=o(),R=r("p"),S=e(et),$=o(),_.c(),L=o(),lt&&lt.c(),z=o(),C=r("div"),F=r("button"),Z=e("Remove Account"),this.h()},l(t){a=n(t,"DIV",{});var r=c(a);s=n(r,"P",{class:!0});var e=c(s);y=l(e,W),D=i(e),w=l(e,tt),e.forEach(d),I=i(r),M=n(r,"P",{class:!0});var o=c(M);N=l(o,at),V=l(o," -\r\n\t\t\t\t\t\t"),A=n(o,"SPAN",{class:!0});var u=c(A);U=l(u,st),Y=l(u," year old"),u.forEach(d),k=i(o),q=n(o,"SPAN",{});var h=c(q);B=l(h,rt),h.forEach(d),o.forEach(d),O=i(r),R=n(r,"P",{class:!0});var f=c(R);S=l(f,et),f.forEach(d),$=i(r),_.l(r),L=i(r),lt&&lt.l(r),z=i(r),C=n(r,"DIV",{class:!0});var m=c(C);F=n(m,"BUTTON",{class:!0});var p=c(F);Z=l(p,"Remove Account"),p.forEach(d),m.forEach(d),r.forEach(d),this.h()},h(){u(s,"class","display-6 m-0 mt-5"),u(A,"class","text-success"),u(M,"class","m-0"),u(R,"class","m-0 mt-4 "),u(F,"class","btn btn-danger"),F.disabled=J=!0,u(C,"class","d-flex flex-column mt-3")},m(t,r){h(t,a,r),f(a,s),f(s,y),f(s,D),f(s,w),f(a,I),f(a,M),f(M,N),f(M,V),f(M,A),f(A,U),f(A,Y),f(M,k),f(M,q),f(q,B),f(a,O),f(a,R),f(R,S),f(a,$),nt[j].m(a,null),f(a,L),lt&&lt.m(a,null),f(a,z),f(a,C),f(C,F),f(F,Z),Q=!0},p(t,s){(!Q||1&s)&&W!==(W=t[0].given_name+"")&&m(y,W),(!Q||1&s)&&tt!==(tt=t[0].family_name+"")&&m(w,tt),(!Q||1&s)&&at!==(at=p(t[0].birthdate).format("MMMM DD, YYYY")+"")&&m(N,at),(!Q||1&s)&&st!==(st=p().diff(t[0].birthdate,"year")+"")&&m(U,st),(!Q||1&s)&&rt!==(rt=t[0].gender+"")&&m(B,rt),(!Q||1&s)&&et!==(et=t[0].shipping_address+"")&&m(S,et);let r=j;j=ct(t),j===r?nt[j].p(t,s):(v(),b(nt[r],1,1,(()=>{nt[r]=null})),E(),_=nt[j],_?_.p(t,s):(_=nt[j]=ot[j](t),_.c()),g(_,1),_.m(a,L)),t[0].isModerator?lt&&(v(),b(lt,1,1,(()=>{lt=null})),E()):lt?(lt.p(t,s),1&s&&g(lt,1)):(lt=X(t),lt.c(),g(lt,1),lt.m(a,z))},i(t){Q||(g(_),g(lt),x((()=>{K||(K=P(a,T,{duration:200},!0)),K.run(1)})),Q=!0)},o(t){b(_),b(lt),K||(K=P(a,T,{duration:200},!1)),K.run(0),Q=!1},d(t){t&&d(a),nt[j].d(),lt&&lt.d(),t&&K&&K.end()}}}function H(t){let a,s,m,p,D,w,x;const I=[z,L],M=[];function N(t,a){return 1==t[3]?0:1}return p=N(t),D=M[p]=I[p](t),{c(){a=r("p"),s=e("Standard Account"),m=o(),D.c(),w=y(),this.h()},l(t){a=n(t,"P",{class:!0});var r=c(a);s=l(r,"Standard Account"),r.forEach(d),m=i(t),D.l(t),w=y(),this.h()},h(){u(a,"class","mt-4")},m(t,r){h(t,a,r),f(a,s),h(t,m,r),M[p].m(t,r),h(t,w,r),x=!0},p(t,a){let s=p;p=N(t),p===s?M[p].p(t,a):(v(),b(M[s],1,1,(()=>{M[s]=null})),E(),D=M[p],D?D.p(t,a):(D=M[p]=I[p](t),D.c()),g(D,1),D.m(w.parentNode,w))},i(t){x||(g(D),x=!0)},o(t){b(D),x=!1},d(t){t&&d(a),t&&d(m),M[p].d(t),t&&d(w)}}}function G(t){let a,s,m,p,D,w,x;const I=[F,C],M=[];function N(t,a){return 1==t[4]?0:1}return p=N(t),D=M[p]=I[p](t),{c(){a=r("p"),s=e("Moderator Account"),m=o(),D.c(),w=y(),this.h()},l(t){a=n(t,"P",{class:!0});var r=c(a);s=l(r,"Moderator Account"),r.forEach(d),m=i(t),D.l(t),w=y(),this.h()},h(){u(a,"class","mt-4")},m(t,r){h(t,a,r),f(a,s),h(t,m,r),M[p].m(t,r),h(t,w,r),x=!0},p(t,a){let s=p;p=N(t),p===s?M[p].p(t,a):(v(),b(M[s],1,1,(()=>{M[s]=null})),E(),D=M[p],D?D.p(t,a):(D=M[p]=I[p](t),D.c()),g(D,1),D.m(w.parentNode,w))},i(t){x||(g(D),x=!0)},o(t){b(D),x=!1},d(t){t&&d(a),t&&d(m),M[p].d(t),t&&d(w)}}}function L(t){let a,s,o,i,m,p,v,b,E;return{c(){a=r("div"),s=r("button"),o=r("i"),i=e("\r\n\t\t\t\t\t\t\t\t\tPromote to Moderator"),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);s=n(r,"BUTTON",{class:!0});var e=c(s);o=n(e,"I",{class:!0}),c(o).forEach(d),i=l(e,"\r\n\t\t\t\t\t\t\t\t\tPromote to Moderator"),e.forEach(d),r.forEach(d),this.h()},h(){u(o,"class","bi bi-arrow-up me-2"),u(s,"class","btn btn-outline-success"),u(a,"class","d-flex flex-column")},m(r,e){h(r,a,e),f(a,s),f(s,o),f(s,i),v=!0,b||(E=D(s,"click",t[14]),b=!0)},p:w,i(t){v||(x((()=>{p&&p.end(1),m=I(a,M,{duration:200}),m.start()})),v=!0)},o(t){m&&m.invalidate(),p=N(a,T,{duration:200}),v=!1},d(t){t&&d(a),t&&p&&p.end(),b=!1,E()}}}function z(t){let a,s,m,p,v,b,E,g,y,P,A,U,Y,k,q;return{c(){a=r("div"),s=r("p"),m=e("Do you want to promote this account to a Moderator?"),p=o(),v=r("div"),b=r("button"),E=e("Yes"),g=o(),y=r("button"),P=e("No"),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);s=n(r,"P",{});var e=c(s);m=l(e,"Do you want to promote this account to a Moderator?"),e.forEach(d),p=i(r),v=n(r,"DIV",{class:!0,role:!0,"aria-label":!0});var o=c(v);b=n(o,"BUTTON",{type:!0,class:!0});var u=c(b);E=l(u,"Yes"),u.forEach(d),g=i(o),y=n(o,"BUTTON",{type:!0,class:!0});var h=c(y);P=l(h,"No"),h.forEach(d),o.forEach(d),r.forEach(d),this.h()},h(){u(b,"type","button"),u(b,"class","btn btn-outline-primary"),u(y,"type","button"),u(y,"class","btn btn-outline-danger"),u(v,"class","btn-group"),u(v,"role","group"),u(v,"aria-label",""),u(a,"class","d-flex flex-column")},m(r,e){h(r,a,e),f(a,s),f(s,m),f(a,p),f(a,v),f(v,b),f(b,E),f(v,g),f(v,y),f(y,P),Y=!0,k||(q=[D(b,"click",t[7]),D(y,"click",t[13])],k=!0)},p:w,i(t){Y||(x((()=>{U&&U.end(1),A=I(a,M,{duration:200}),A.start()})),Y=!0)},o(t){A&&A.invalidate(),U=N(a,T,{duration:200}),Y=!1},d(t){t&&d(a),t&&U&&U.end(),k=!1,V(q)}}}function C(t){let a,s,o,i,m,p,v,b,E;return{c(){a=r("div"),s=r("button"),o=r("i"),i=e("\r\n\t\t\t\t\t\t\t\t\tDemote to Standard"),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);s=n(r,"BUTTON",{class:!0});var e=c(s);o=n(e,"I",{class:!0}),c(o).forEach(d),i=l(e,"\r\n\t\t\t\t\t\t\t\t\tDemote to Standard"),e.forEach(d),r.forEach(d),this.h()},h(){u(o,"class","bi bi-arrow-down me-2"),u(s,"class","btn btn-outline-warning"),u(a,"class","d-flex flex-column")},m(r,e){h(r,a,e),f(a,s),f(s,o),f(s,i),v=!0,b||(E=D(s,"click",t[12]),b=!0)},p:w,i(t){v||(x((()=>{p&&p.end(1),m=I(a,M,{duration:200}),m.start()})),v=!0)},o(t){m&&m.invalidate(),p=N(a,T,{duration:200}),v=!1},d(t){t&&d(a),t&&p&&p.end(),b=!1,E()}}}function F(t){let a,s,m,p,v,b,E,g,y,P,A,U,Y,k,q;return{c(){a=r("div"),s=r("p"),m=e("Do you want to demote this account to a Standard Account?"),p=o(),v=r("div"),b=r("button"),E=e("Yes"),g=o(),y=r("button"),P=e("No"),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);s=n(r,"P",{});var e=c(s);m=l(e,"Do you want to demote this account to a Standard Account?"),e.forEach(d),p=i(r),v=n(r,"DIV",{class:!0,role:!0,"aria-label":!0});var o=c(v);b=n(o,"BUTTON",{type:!0,class:!0});var u=c(b);E=l(u,"Yes"),u.forEach(d),g=i(o),y=n(o,"BUTTON",{type:!0,class:!0});var h=c(y);P=l(h,"No"),h.forEach(d),o.forEach(d),r.forEach(d),this.h()},h(){u(b,"type","button"),u(b,"class","btn btn-outline-primary"),u(y,"type","button"),u(y,"class","btn btn-outline-danger"),u(v,"class","btn-group"),u(v,"role","group"),u(v,"aria-label",""),u(a,"class","d-flex flex-column")},m(r,e){h(r,a,e),f(a,s),f(s,m),f(a,p),f(a,v),f(v,b),f(b,E),f(v,g),f(v,y),f(y,P),Y=!0,k||(q=[D(b,"click",t[8]),D(y,"click",t[11])],k=!0)},p:w,i(t){Y||(x((()=>{U&&U.end(1),A=I(a,M,{duration:200}),A.start()})),Y=!0)},o(t){A&&A.invalidate(),U=N(a,T,{duration:200}),Y=!1},d(t){t&&d(a),t&&U&&U.end(),k=!1,V(q)}}}function X(t){let a,s,r,e=t[5]&&!t[0].canRequestMod&&Z(t),n=!t[5]&&!t[0].canRequestMod&&J(t);return{c(){e&&e.c(),a=o(),n&&n.c(),s=y()},l(t){e&&e.l(t),a=i(t),n&&n.l(t),s=y()},m(t,o){e&&e.m(t,o),h(t,a,o),n&&n.m(t,o),h(t,s,o),r=!0},p(t,r){t[5]&&!t[0].canRequestMod?e?(e.p(t,r),33&r&&g(e,1)):(e=Z(t),e.c(),g(e,1),e.m(a.parentNode,a)):e&&(v(),b(e,1,1,(()=>{e=null})),E()),t[5]||t[0].canRequestMod?n&&(v(),b(n,1,1,(()=>{n=null})),E()):n?(n.p(t,r),33&r&&g(n,1)):(n=J(t),n.c(),g(n,1),n.m(s.parentNode,s))},i(t){r||(g(e),g(n),r=!0)},o(t){b(e),b(n),r=!1},d(t){e&&e.d(t),t&&d(a),n&&n.d(t),t&&d(s)}}}function Z(t){let a,s,m,p,v,b,E,g,y,P,A,U,Y,k,q;return{c(){a=r("div"),s=r("p"),m=e("This user can request for a moderator account. Proceed?"),p=o(),v=r("div"),b=r("button"),E=e("Yes"),g=o(),y=r("button"),P=e("No"),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);s=n(r,"P",{});var e=c(s);m=l(e,"This user can request for a moderator account. Proceed?"),e.forEach(d),p=i(r),v=n(r,"DIV",{class:!0,role:!0,"aria-label":!0});var o=c(v);b=n(o,"BUTTON",{type:!0,class:!0});var u=c(b);E=l(u,"Yes"),u.forEach(d),g=i(o),y=n(o,"BUTTON",{type:!0,class:!0});var h=c(y);P=l(h,"No"),h.forEach(d),o.forEach(d),r.forEach(d),this.h()},h(){u(b,"type","button"),u(b,"class","btn btn-outline-primary"),u(y,"type","button"),u(y,"class","btn btn-outline-danger"),u(v,"class","btn-group"),u(v,"role","group"),u(v,"aria-label",""),u(a,"class","d-flex flex-column")},m(r,e){h(r,a,e),f(a,s),f(s,m),f(a,p),f(a,v),f(v,b),f(b,E),f(v,g),f(v,y),f(y,P),Y=!0,k||(q=[D(b,"click",t[9]),D(y,"click",t[15])],k=!0)},p:w,i(t){Y||(x((()=>{U&&U.end(1),A=I(a,M,{duration:200}),A.start()})),Y=!0)},o(t){A&&A.invalidate(),U=N(a,T,{duration:200}),Y=!1},d(t){t&&d(a),t&&U&&U.end(),k=!1,V(q)}}}function J(t){let a,s,o,i,m,p,v,b,E;return{c(){a=r("div"),s=r("button"),o=r("i"),i=e("\r\n\t\t\t\t\t\t\t\t\tGive Request"),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);s=n(r,"BUTTON",{class:!0});var e=c(s);o=n(e,"I",{class:!0}),c(o).forEach(d),i=l(e,"\r\n\t\t\t\t\t\t\t\t\tGive Request"),e.forEach(d),r.forEach(d),this.h()},h(){u(o,"class","bi bi-arrow-up me-2 "),u(s,"class","btn btn-outline-success"),u(a,"class","d-flex flex-column mb-2")},m(r,e){h(r,a,e),f(a,s),f(s,o),f(s,i),v=!0,b||(E=D(s,"click",t[16]),b=!0)},p:w,i(t){v||(x((()=>{p&&p.end(1),m=I(a,M,{duration:200}),m.start()})),v=!0)},o(t){m&&m.invalidate(),p=N(a,T,{duration:200}),v=!1},d(t){t&&d(a),t&&p&&p.end(),b=!1,E()}}}function K(t){let a,s,p,y,w,M,N,T,V,P,Y,k,q,B,O,R=t[0].email+"";function S(t,a){return t[2]?j:$}let H=S(t),G=H(t),L=t[2]&&_(t);return{c(){a=r("div"),s=r("div"),p=r("div"),y=r("p"),w=e(t[6]),M=o(),N=r("p"),T=e(R),V=o(),P=r("button"),G.c(),Y=o(),L&&L.c(),this.h()},l(r){a=n(r,"DIV",{class:!0,style:!0});var e=c(a);s=n(e,"DIV",{class:!0});var o=c(s);p=n(o,"DIV",{class:!0});var u=c(p);y=n(u,"P",{class:!0,style:!0});var h=c(y);w=l(h,t[6]),h.forEach(d),M=i(u),N=n(u,"P",{class:!0});var f=c(N);T=l(f,R),f.forEach(d),V=i(u),P=n(u,"BUTTON",{class:!0});var m=c(P);G.l(m),m.forEach(d),Y=i(u),L&&L.l(u),u.forEach(d),o.forEach(d),e.forEach(d),this.h()},h(){u(y,"class","text-muted"),A(y,"font-size","0.8em"),u(N,"class","m-0"),u(P,"class","btn link-secondary"),u(p,"class","d-flex text-center flex-column justify-content-center align-items-stretch"),u(s,"class","card-body"),u(a,"class","card rounded-3 shadow-sm card1 p-1 mb-2 bg-transparent"),A(a,"user-select","none")},m(r,e){h(r,a,e),f(a,s),f(s,p),f(p,y),f(y,w),f(p,M),f(p,N),f(N,T),f(p,V),f(p,P),G.m(P,null),f(p,Y),L&&L.m(p,null),q=!0,B||(O=D(P,"click",t[10]),B=!0)},p(a,[s]){t=a,(!q||1&s)&&R!==(R=t[0].email+"")&&m(T,R),H!==(H=S(t))&&(G.d(1),G=H(t),G&&(G.c(),G.m(P,null))),t[2]?L?(L.p(t,s),4&s&&g(L,1)):(L=_(t),L.c(),g(L,1),L.m(p,null)):L&&(v(),b(L,1,1,(()=>{L=null})),E())},i(s){q||(g(L),k||x((()=>{k=I(a,U,{y:20,duration:500,delay:100+50*t[1]}),k.start()})),q=!0)},o(t){b(L),q=!1},d(t){t&&d(a),G.d(),L&&L.d(),B=!1,O()}}}function Q(t,a,s){let{thisuser:r}=a,{index:e}=a,o=r?r.id.toUpperCase():"",n=!1,c=!1,l=!1,i=!1;return t.$$set=t=>{"thisuser"in t&&s(0,r=t.thisuser),"index"in t&&s(1,e=t.index)},[r,e,n,c,l,i,o,async t=>{const{data:a,error:s}=await S.from("users").update({isModerator:"true"}).eq("id",r.id);s||(console.log("Account Updated"),window.location.reload())},async t=>{const{data:a,error:s}=await S.from("users").update({isModerator:"false"}).eq("id",r.id);s||(console.log("Account Updated"),window.location.reload())},async t=>{const{data:a,error:s}=await S.from("users").update({canRequestMod:!0}).eq("id",r.id);s||(console.log("Account Updated"),window.location.reload())},()=>{s(2,n=!n)},()=>{s(4,l=!l)},()=>{s(4,l=!l)},()=>{s(3,c=!c)},()=>{s(3,c=!c)},()=>{s(5,i=!i)},()=>{s(5,i=!i)}]}class W extends t{constructor(t){super(),a(this,t,Q,K,s,{thisuser:0,index:1})}}function tt(t,a,s){const r=t.slice();return r[2]=a[s],r[4]=s,r}function at(t){let a,s,m,p,v;return{c(){a=r("div"),s=r("strong"),m=e("Loading..."),p=o(),v=r("div"),this.h()},l(t){a=n(t,"DIV",{class:!0});var r=c(a);s=n(r,"STRONG",{});var e=c(s);m=l(e,"Loading..."),e.forEach(d),p=i(r),v=n(r,"DIV",{class:!0,role:!0,"aria-hidden":!0}),c(v).forEach(d),r.forEach(d),this.h()},h(){u(v,"class","spinner-border ms-auto"),u(v,"role","status"),u(v,"aria-hidden","true"),u(a,"class","d-flex align-items-center")},m(t,r){h(t,a,r),f(a,s),f(s,m),f(a,p),f(a,v)},p:w,i:w,o:w,d(t){t&&d(a)}}}function st(t){let a,s,r=t[0],e=[];for(let n=0;n<r.length;n+=1)e[n]=rt(tt(t,r,n));const o=t=>b(e[t],1,1,(()=>{e[t]=null}));return{c(){for(let t=0;t<e.length;t+=1)e[t].c();a=y()},l(t){for(let a=0;a<e.length;a+=1)e[a].l(t);a=y()},m(t,r){for(let a=0;a<e.length;a+=1)e[a].m(t,r);h(t,a,r),s=!0},p(t,s){if(1&s){let n;for(r=t[0],n=0;n<r.length;n+=1){const o=tt(t,r,n);e[n]?(e[n].p(o,s),g(e[n],1)):(e[n]=rt(o),e[n].c(),g(e[n],1),e[n].m(a.parentNode,a))}for(v(),n=r.length;n<e.length;n+=1)o(n);E()}},i(t){if(!s){for(let t=0;t<r.length;t+=1)g(e[t]);s=!0}},o(t){e=e.filter(Boolean);for(let a=0;a<e.length;a+=1)b(e[a]);s=!1},d(t){R(e,t),t&&d(a)}}}function rt(t){let a,s;return a=new W({props:{thisuser:t[2],index:t[4]}}),{c(){k(a.$$.fragment)},l(t){q(a.$$.fragment,t)},m(t,r){B(a,t,r),s=!0},p(t,s){const r={};1&s&&(r.thisuser=t[2]),a.$set(r)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){b(a.$$.fragment,t),s=!1},d(t){O(a,t)}}}function et(t){let a,s,p,y,D,w,M,N,T,V,P,A,Y,k,q,B,O,R,S,$,j,_=t[0].length+"";const H=[st,at],G=[];function L(t,a){return t[1]?0:1}return R=L(t),S=G[R]=H[R](t),{c(){a=r("main"),s=r("div"),p=r("div"),y=r("div"),D=r("h5"),w=e("Registered Members"),M=o(),N=r("h1"),T=e(_),V=o(),P=r("i"),A=o(),Y=r("div"),k=r("p"),q=e("List of users"),B=o(),O=r("div"),S.c(),this.h()},l(t){a=n(t,"MAIN",{class:!0});var r=c(a);s=n(r,"DIV",{class:!0});var e=c(s);p=n(e,"DIV",{class:!0});var o=c(p);y=n(o,"DIV",{class:!0});var u=c(y);D=n(u,"H5",{});var h=c(D);w=l(h,"Registered Members"),h.forEach(d),M=i(u),N=n(u,"H1",{class:!0});var f=c(N);T=l(f,_),f.forEach(d),V=i(u),P=n(u,"I",{class:!0}),c(P).forEach(d),u.forEach(d),o.forEach(d),e.forEach(d),A=i(r),Y=n(r,"DIV",{class:!0});var m=c(Y);k=n(m,"P",{class:!0});var v=c(k);q=l(v,"List of users"),v.forEach(d),B=i(m),O=n(m,"DIV",{class:!0});var b=c(O);S.l(b),b.forEach(d),m.forEach(d),r.forEach(d),this.h()},h(){u(N,"class","mt-4"),u(P,"class","bi bi-person-circle svelte-1oj9r5s"),u(y,"class","card-body svelte-1oj9r5s"),u(p,"class","card border-3 rounded-3 shadow-sm svelte-1oj9r5s"),u(s,"class","container"),u(k,"class","display-6"),u(O,"class","row row-cols-lg-2"),u(Y,"class","container mt-5 "),u(a,"class","text-white svelte-1oj9r5s")},m(t,r){h(t,a,r),f(a,s),f(s,p),f(p,y),f(y,D),f(D,w),f(y,M),f(y,N),f(N,T),f(y,V),f(y,P),f(a,A),f(a,Y),f(Y,k),f(k,q),f(Y,B),f(Y,O),G[R].m(O,null),j=!0},p(t,[a]){(!j||1&a)&&_!==(_=t[0].length+"")&&m(T,_);let s=R;R=L(t),R===s?G[R].p(t,a):(v(),b(G[s],1,1,(()=>{G[s]=null})),E(),S=G[R],S?S.p(t,a):(S=G[R]=H[R](t),S.c()),g(S,1),S.m(O,null))},i(t){j||(g(S),$||x((()=>{$=I(a,U,{y:20,duration:500}),$.start()})),j=!0)},o(t){b(S),j=!1},d(t){t&&d(a),G[R].d()}}}function ot(t,a,s){let r=[],e=!1;return Y((async t=>{let{data:a,error:o}=await S.from("users").select("*");o||(s(0,r=a),setTimeout((()=>{s(1,e=!0)}),200))})),[r,e]}class nt extends t{constructor(t){super(),a(this,t,ot,et,s,{})}}export{nt as default};