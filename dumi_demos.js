(window.webpackJsonp=window.webpackJsonp||[]).push([[52,9],{"0zqC":function(wn,gn,e){"use strict";e.r(gn);var G=e("tJVT"),t=e("q1tI"),R=e.n(t),$=e("wx14"),me=e("rePB"),V=e("ODXe"),dn=e("U8pU"),le=e("Ff2n"),q=e("VTBJ"),Je=e("TSYQ"),ge=e.n(Je),pn=e("Zm9Q"),Cn=e("5Z9U"),en=e("6cGi"),Ge=e("KQm4"),Xe=e("wgJM"),$n=e("t23M");function Wn(n){var a=Object(t.useRef)(),u=Object(t.useRef)(!1);function h(){for(var b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];u.current||(Xe.a.cancel(a.current),a.current=Object(Xe.a)(function(){n.apply(void 0,v)}))}return Object(t.useEffect)(function(){return function(){u.current=!0,Xe.a.cancel(a.current)}},[]),h}function Dn(n){var a=Object(t.useRef)([]),u=Object(t.useState)({}),h=Object(V.a)(u,2),b=h[1],v=Object(t.useRef)(typeof n=="function"?n():n),O=Wn(function(){var W=v.current;a.current.forEach(function(K){W=K(W)}),a.current=[],v.current=W,b({})});function S(W){a.current.push(W),O()}return[v.current,S]}var we=e("4IlW");function qn(n,a){var u,h=n.prefixCls,b=n.id,v=n.active,O=n.rtl,S=n.tab,W=S.key,K=S.tab,L=S.disabled,H=S.closeIcon,J=n.tabBarGutter,oe=n.tabPosition,Y=n.closable,Q=n.renderWrapper,de=n.removeAriaLabel,U=n.editable,_=n.onClick,ae=n.onRemove,Z=n.onFocus,ue="".concat(h,"-tab");t.useEffect(function(){return ae},[]);var k={};oe==="top"||oe==="bottom"?k[O?"marginLeft":"marginRight"]=J:k.marginBottom=J;var Ce=U&&Y!==!1&&!L;function te(ie){L||_(ie)}function fe(ie){ie.preventDefault(),ie.stopPropagation(),U.onEdit("remove",{key:W,event:ie})}var pe=t.createElement("div",{key:W,ref:a,className:ge()(ue,(u={},Object(me.a)(u,"".concat(ue,"-with-remove"),Ce),Object(me.a)(u,"".concat(ue,"-active"),v),Object(me.a)(u,"".concat(ue,"-disabled"),L),u)),style:k,onClick:te},t.createElement("div",{role:"tab","aria-selected":v,id:b&&"".concat(b,"-tab-").concat(W),className:"".concat(ue,"-btn"),"aria-controls":b&&"".concat(b,"-panel-").concat(W),"aria-disabled":L,tabIndex:L?null:0,onClick:function(X){X.stopPropagation(),te(X)},onKeyDown:function(X){[we.a.SPACE,we.a.ENTER].includes(X.which)&&(X.preventDefault(),te(X))},onFocus:Z},K),Ce&&t.createElement("button",{type:"button","aria-label":de||"remove",tabIndex:0,className:"".concat(ue,"-remove"),onClick:function(X){X.stopPropagation(),fe(X)}},H||U.removeIcon||"\xD7"));return Q&&(pe=Q(pe)),pe}var Vn=t.forwardRef(qn),at={width:0,height:0,left:0,top:0};function F(n,a,u){return Object(t.useMemo)(function(){for(var h,b=new Map,v=a.get((h=n[0])===null||h===void 0?void 0:h.key)||at,O=v.left+v.width,S=0;S<n.length;S+=1){var W=n[S].key,K=a.get(W);if(!K){var L;K=a.get((L=n[S-1])===null||L===void 0?void 0:L.key)||at}var H=b.get(W)||Object(q.a)({},K);H.right=O-H.left-H.width,b.set(W,H)}return b},[n.map(function(h){return h.key}).join("_"),a,u])}var A={width:0,height:0,left:0,top:0,right:0};function B(n,a,u,h,b){var v=b.tabs,O=b.tabPosition,S=b.rtl,W,K,L;["top","bottom"].includes(O)?(W="width",K=S?"right":"left",L=Math.abs(a.left)):(W="height",K="top",L=-a.top);var H=a[W],J=u[W],oe=h[W],Y=H;return J+oe>H&&(Y=H-oe),Object(t.useMemo)(function(){if(!v.length)return[0,0];for(var Q=v.length,de=Q,U=0;U<Q;U+=1){var _=n.get(v[U].key)||A;if(_[K]+_[W]>L+Y){de=U-1;break}}for(var ae=0,Z=Q-1;Z>=0;Z-=1){var ue=n.get(v[Z].key)||A;if(ue[K]<L){ae=Z+1;break}}return[ae,de]},[n,L,Y,O,v.map(function(Q){return Q.key}).join("_"),S])}var f=e("Gytx"),o=e.n(f),g=e("Kwbf");function C(n,a){var u=n.prefixCls,h=n.invalidate,b=n.item,v=n.renderItem,O=n.responsive,S=n.registerSize,W=n.itemKey,K=n.className,L=n.style,H=n.children,J=n.display,oe=n.order,Y=n.component,Q=Y===void 0?"div":Y,de=Object(le.a)(n,["prefixCls","invalidate","item","renderItem","responsive","registerSize","itemKey","className","style","children","display","order","component"]),U=O&&!J;function _(Ce){S(W,Ce)}t.useEffect(function(){return function(){_(null)}},[]);var ae=v&&b!==void 0?v(b):H,Z;h||(Z={opacity:U?0:1,height:U?0:void 0,overflowY:U?"hidden":void 0,order:O?oe:void 0,pointerEvents:U?"none":void 0});var ue={};U&&(ue["aria-hidden"]=!0);var k=t.createElement(Q,Object($.a)({className:ge()(!h&&u,K),style:Object(q.a)(Object(q.a)({},Z),L)},ue,de,{ref:a}),ae);return O&&(k=t.createElement($n.default,{onResize:function(te){var fe=te.offsetWidth;_(fe)}},k)),k}var P=t.forwardRef(C);P.displayName="Item";var i=P;function l(){var n=Object(t.useState)({}),a=Object(V.a)(n,2),u=a[1],h=Object(t.useRef)([]),b=Object(t.useRef)(!1),v=0,O=0;Object(t.useEffect)(function(){return function(){b.current=!0}},[]);function S(W){var K=v;v+=1,h.current.length<K+1&&(h.current[K]=W);var L=h.current[K];function H(J){h.current[K]=typeof J=="function"?J(h.current[K]):J,Xe.a.cancel(O),O=Object(Xe.a)(function(){b.current||u({})})}return[L,H]}return S}var y=function(a,u){var h=t.useContext(j);if(!h){var b=a.component,v=b===void 0?"div":b,O=Object(le.a)(a,["component"]);return t.createElement(v,Object($.a)({},O,{ref:u}))}var S=h.className,W=Object(le.a)(h,["className"]),K=a.className,L=Object(le.a)(a,["className"]);return t.createElement(j.Provider,{value:null},t.createElement(i,Object($.a)({ref:u,className:ge()(S,K)},W,L)))},T=t.forwardRef(y);T.displayName="RawItem";var M=T,j=t.createContext(null),s="responsive",N="invalidate";function d(n){return"+ ".concat(n.length," ...")}function r(n,a){var u=n.prefixCls,h=u===void 0?"rc-overflow":u,b=n.data,v=b===void 0?[]:b,O=n.renderItem,S=n.renderRawItem,W=n.itemKey,K=n.itemWidth,L=K===void 0?10:K,H=n.ssr,J=n.style,oe=n.className,Y=n.maxCount,Q=n.renderRest,de=n.renderRawRest,U=n.suffix,_=n.component,ae=_===void 0?"div":_,Z=n.itemComponent,ue=n.onVisibleChange,k=Object(le.a)(n,["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"]),Ce=l(),te=H==="full",fe=Ce(null),pe=Object(V.a)(fe,2),ie=pe[0],X=pe[1],ce=ie||0,Oe=Ce(new Map),ye=Object(V.a)(Oe,2),je=ye[0],Ke=ye[1],Re=Ce(0),Pe=Object(V.a)(Re,2),Fe=Pe[0],Ae=Pe[1],Ne=Ce(0),Ie=Object(V.a)(Ne,2),$e=Ie[0],nn=Ie[1],Ve=Ce(0),Ue=Object(V.a)(Ve,2),xe=Ue[0],Le=Ue[1],In=Object(t.useState)(null),sn=Object(V.a)(In,2),ke=sn[0],cn=sn[1],Rn=Object(t.useState)(null),Sn=Object(V.a)(Rn,2),Me=Sn[0],Qe=Sn[1],tn=t.useMemo(function(){return Me===null&&te?Number.MAX_SAFE_INTEGER:Me||0},[Me,ie]),qe=Object(t.useState)(!1),Kn=Object(V.a)(qe,2),Jn=Kn[0],Ln=Kn[1],on="".concat(h,"-item"),Nn=Math.max(Fe,$e),mn=v.length&&Y===s,Mn=Y===N,rn=mn||typeof Y=="number"&&v.length>Y,ln=Object(t.useMemo)(function(){var he=v;return mn?ie===null&&te?he=v:he=v.slice(0,Math.min(v.length,ce/L)):typeof Y=="number"&&(he=v.slice(0,Y)),he},[v,L,ie,Y,mn]),An=Object(t.useMemo)(function(){return mn?v.slice(tn+1):v.slice(ln.length)},[v,ln,mn,tn]),vn=Object(t.useCallback)(function(he,De){var Be;return typeof W=="function"?W(he):(Be=W&&(he==null?void 0:he[W]))!==null&&Be!==void 0?Be:De},[W]),_e=Object(t.useCallback)(O||function(he){return he},[O]);function Ze(he,De){Qe(he),De||(Ln(he<v.length-1),ue==null||ue(he))}function Gn(he,De){X(De.clientWidth)}function Hn(he,De){Ke(function(Be){var an=new Map(Be);return De===null?an.delete(he):an.set(he,De),an})}function nt(he,De){nn(De),Ae($e)}function Pn(he,De){Le(De)}function On(he){return je.get(vn(ln[he],he))}t.useLayoutEffect(function(){if(ce&&Nn&&ln){var he=xe,De=ln.length,Be=De-1;if(!De){Ze(0),cn(null);return}for(var an=0;an<De;an+=1){var Zn=On(an);if(Zn===void 0){Ze(an-1,!0);break}if(he+=Zn,an===Be-1&&he+On(Be)<=ce){Ze(Be),cn(null);break}else if(he+Nn>ce){Ze(an-1),cn(he-Zn-xe+$e);break}else if(an===Be){Ze(Be),cn(he-xe);break}}U&&On(0)+xe>ce&&cn(null)}},[ce,je,$e,xe,vn,ln]);var Xn=Jn&&!!An.length,jn={};ke!==null&&mn&&(jn={position:"absolute",left:ke,top:0});var hn={prefixCls:on,responsive:mn,component:Z,invalidate:Mn},Yn=S?function(he,De){var Be=vn(he,De);return t.createElement(j.Provider,{key:Be,value:Object(q.a)(Object(q.a)({},hn),{},{order:De,item:he,itemKey:Be,registerSize:Hn,display:De<=tn})},S(he,De))}:function(he,De){var Be=vn(he,De);return t.createElement(i,Object($.a)({},hn,{order:De,key:Be,item:he,renderItem:_e,itemKey:Be,registerSize:Hn,display:De<=tn}))},Tn,Qn={order:Xn?tn:Number.MAX_SAFE_INTEGER,className:"".concat(on,"-rest"),registerSize:nt,display:Xn};if(de)de&&(Tn=t.createElement(j.Provider,{value:Object(q.a)(Object(q.a)({},hn),Qn)},de(An)));else{var fn=Q||d;Tn=t.createElement(i,Object($.a)({},hn,Qn),typeof fn=="function"?fn(An):fn)}var Fn=t.createElement(ae,Object($.a)({className:ge()(!Mn&&h,oe),style:J,ref:a},k),ln.map(Yn),rn?Tn:null,U&&t.createElement(i,Object($.a)({},hn,{order:tn,className:"".concat(on,"-suffix"),registerSize:Pn,display:!0,style:jn}),U));return mn&&(Fn=t.createElement($n.default,{onResize:Gn},Fn)),Fn}var p=t.forwardRef(r);p.displayName="Overflow",p.Item=M,p.RESPONSIVE=s,p.INVALIDATE=N;var m=p,D=m,w=e("1OyB"),z=e("vuIU"),ee=e("Ji7U"),se=e("LK+K"),be=e("bT9E"),yn=e("YrtM"),We=t.createContext(null);function Te(n,a){var u=Object(q.a)({},n);return Object.keys(a).forEach(function(h){var b=a[h];b!==void 0&&(u[h]=b)}),u}function En(n){var a=n.children,u=n.locked,h=Object(le.a)(n,["children","locked"]),b=t.useContext(We),v=Object(yn.a)(function(){return Te(b,h)},[b,h],function(O,S){return!u&&(O[0]!==S[0]||!o()(O[1],S[1]))});return t.createElement(We.Provider,{value:v},a)}function it(n,a,u,h){var b=t.useContext(We),v=b.activeKey,O=b.onActive,S=b.onInactive,W={active:v===n};return a||(W.onMouseEnter=function(K){u==null||u({key:n,domEvent:K}),O(n)},W.onMouseLeave=function(K){h==null||h({key:n,domEvent:K}),S(n)}),W}function _n(n){var a=n.item,u=Object(le.a)(n,["item"]);return Object.defineProperty(u,"item",{get:function(){return Object(g.a)(!1,"`info.item` is deprecated since we will move to function component that not provides React Node instance in future."),a}}),u}function c(n){var a=n.icon,u=n.props,h=n.children,b;return typeof a=="function"?b=t.createElement(a,Object(q.a)({},u)):b=a,b||h||null}function E(n){var a=t.useContext(We),u=a.mode,h=a.rtl,b=a.inlineIndent;if(u!=="inline")return null;var v=n;return h?{paddingRight:v*b}:{paddingLeft:v*b}}var I=[],ve=t.createContext(null);function ne(){return t.useContext(ve)}var Ee=t.createContext(I);function ze(n){var a=t.useContext(Ee);return t.useMemo(function(){return n!==void 0?[].concat(Object(Ge.a)(a),[n]):a},[a,n])}var Ye=t.createContext(null),Ut=t.createContext(null);function Jt(n,a){return n===void 0?null:"".concat(n,"-").concat(a)}function Gt(n){var a=t.useContext(Ut);return Jt(a,n)}var br=function(n){Object(ee.a)(u,n);var a=Object(se.a)(u);function u(){return Object(w.a)(this,u),a.apply(this,arguments)}return Object(z.a)(u,[{key:"render",value:function(){var b=this.props,v=b.title,O=b.attribute,S=b.elementRef,W=Object(le.a)(b,["title","attribute","elementRef"]),K=Object(be.a)(W,["eventKey"]);return Object(g.a)(!O,"`attribute` of Menu.Item is deprecated. Please pass attribute directly."),t.createElement(D.Item,Object($.a)({},O,{title:typeof v=="string"?v:void 0},K,{ref:S}))}}]),u}(t.Component),Or=function(a){var u,h=a.style,b=a.className,v=a.eventKey,O=a.disabled,S=a.itemIcon,W=a.children,K=a.role,L=a.onMouseEnter,H=a.onMouseLeave,J=a.onClick,oe=a.onKeyDown,Y=a.onFocus,Q=Object(le.a)(a,["style","className","eventKey","disabled","itemIcon","children","role","onMouseEnter","onMouseLeave","onClick","onKeyDown","onFocus"]),de=Gt(v),U=t.useContext(We),_=U.prefixCls,ae=U.onItemClick,Z=U.disabled,ue=U.overflowDisabled,k=U.itemIcon,Ce=U.selectedKeys,te=U.onActive,fe="".concat(_,"-item"),pe=t.useRef(),ie=t.useRef(),X=Z||O,ce=ze(v),Oe=function(Ve){return{key:v,keyPath:ce,item:pe.current,domEvent:Ve}},ye=S||k,je=it(v,X,L,H),Ke=je.active,Re=Object(le.a)(je,["active"]),Pe=Ce.includes(v),Fe=E(ce.length),Ae=function(Ve){if(!X){var Ue=Oe(Ve);J==null||J(_n(Ue)),ae(Ue)}},Ne=function(Ve){if(oe==null||oe(Ve),Ve.which===we.a.ENTER){var Ue=Oe(Ve);J==null||J(_n(Ue)),ae(Ue)}},Ie=function(Ve){te(v),Y==null||Y(Ve)},$e={};return a.role==="option"&&($e["aria-selected"]=Pe),t.createElement(br,Object($.a)({ref:pe,elementRef:ie,role:K===null?"none":K||"menuitem",tabIndex:O?null:-1,"data-menu-id":ue&&de?null:de},Q,Re,$e,{component:"li","aria-disabled":O,style:Object(q.a)(Object(q.a)({},Fe),h),className:ge()(fe,(u={},Object(me.a)(u,"".concat(fe,"-active"),Ke),Object(me.a)(u,"".concat(fe,"-selected"),Pe),Object(me.a)(u,"".concat(fe,"-disabled"),X),u),b),onClick:Ae,onKeyDown:Ne,onFocus:Ie}),W,t.createElement(c,{props:Object(q.a)(Object(q.a)({},a),{},{isSelected:Pe}),icon:ye}))};function Cr(n){var a=n.eventKey,u=ne(),h=ze(a);return t.useEffect(function(){if(u)return u.registerPath(a,h),function(){u.unregisterPath(a,h)}},[h]),u?null:t.createElement(Or,n)}var Dt=Cr;function Et(n,a){return Object(pn.a)(n).map(function(u,h){if(t.isValidElement(u)){var b=u.key;return b==null&&(b="tmp_key-".concat([].concat(Object(Ge.a)(a),[h]).join("-"))),t.cloneElement(u,{key:b,eventKey:b})}return u})}function et(n){var a=t.useRef(n);a.current=n;var u=t.useCallback(function(){for(var h,b=arguments.length,v=new Array(b),O=0;O<b;O++)v[O]=arguments[O];return(h=a.current)===null||h===void 0?void 0:h.call.apply(h,[a].concat(v))},[]);return n?u:void 0}var Rr=function(a,u){var h=a.className,b=a.children,v=Object(le.a)(a,["className","children"]),O=t.useContext(We),S=O.prefixCls,W=O.mode;return t.createElement("ul",Object($.a)({className:ge()(S,"".concat(S,"-sub"),"".concat(S,"-").concat(W==="inline"?"inline":"vertical"),h)},v,{"data-menu-list":!0,ref:u}),b)},Ht=t.forwardRef(Rr);Ht.displayName="SubMenuList";var Xt=Ht,Sr=e("uciX"),zn={adjustX:1,adjustY:1},Yt={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},leftTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},rightTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},Pr={topLeft:{points:["bl","tl"],overflow:zn,offset:[0,-7]},bottomLeft:{points:["tl","bl"],overflow:zn,offset:[0,7]},rightTop:{points:["tr","tl"],overflow:zn,offset:[-4,0]},leftTop:{points:["tl","tr"],overflow:zn,offset:[4,0]}},fa=Yt;function Qt(n,a,u){if(a)return a;if(u)return u[n]||u.other}var jr={horizontal:"bottomLeft",vertical:"rightTop","vertical-left":"rightTop","vertical-right":"leftTop"};function Dr(n){var a=n.prefixCls,u=n.visible,h=n.children,b=n.popup,v=n.popupClassName,O=n.popupOffset,S=n.disabled,W=n.mode,K=n.onVisibleChange,L=t.useContext(We),H=L.getPopupContainer,J=L.rtl,oe=L.subMenuOpenDelay,Y=L.subMenuCloseDelay,Q=L.builtinPlacements,de=L.triggerSubMenuAction,U=L.forceSubMenuRender,_=L.motion,ae=L.defaultMotions,Z=t.useState(!1),ue=Object(V.a)(Z,2),k=ue[0],Ce=ue[1],te=J?Object(q.a)(Object(q.a)({},Pr),Q):Object(q.a)(Object(q.a)({},Yt),Q),fe=jr[W],pe=Qt(W,_,ae),ie=Object(q.a)(Object(q.a)({},pe),{},{leavedClassName:"".concat(a,"-hidden"),removeOnLeave:!1,motionAppear:!0}),X=t.useRef();return t.useEffect(function(){return X.current=Object(Xe.a)(function(){Ce(u)}),function(){Xe.a.cancel(X.current)}},[u]),t.createElement(Sr.a,{prefixCls:a,popupClassName:ge()("".concat(a,"-popup"),Object(me.a)({},"".concat(a,"-rtl"),J),v),stretch:W==="horizontal"?"minWidth":null,getPopupContainer:H,builtinPlacements:te,popupPlacement:fe,popupVisible:k,popup:b,popupAlign:O&&{offset:O},action:S?[]:[de],mouseEnterDelay:oe,mouseLeaveDelay:Y,onPopupVisibleChange:K,forceRender:U,popupMotion:ie},h)}var Er=e("8XRh");function Ir(n){var a=n.id,u=n.open,h=n.keyPath,b=n.children,v="inline",O=t.useContext(We),S=O.prefixCls,W=O.forceSubMenuRender,K=O.motion,L=O.defaultMotions,H=O.mode,J=t.useRef(!1);J.current=H===v;var oe=t.useState(!J.current),Y=Object(V.a)(oe,2),Q=Y[0],de=Y[1],U=J.current?u:!1;t.useEffect(function(){J.current&&de(!1)},[H]);var _=Object(q.a)({},Qt(v,K,L));h.length>1&&(_.motionAppear=!1);var ae=_.onVisibleChanged;return _.onVisibleChanged=function(Z){return!J.current&&!Z&&de(!0),ae==null?void 0:ae(Z)},Q?null:t.createElement(En,{mode:v,locked:!J.current},t.createElement(Er.default,Object($.a)({visible:U},_,{forceRender:W,removeOnLeave:!1,leavedClassName:"".concat(S,"-hidden")}),function(Z){var ue=Z.className,k=Z.style;return t.createElement(Xt,{id:a,className:ue,style:k},b)}))}var Nr=function(a){var u,h=a.style,b=a.className,v=a.title,O=a.eventKey,S=a.disabled,W=a.internalPopupClose,K=a.children,L=a.itemIcon,H=a.expandIcon,J=a.popupClassName,oe=a.popupOffset,Y=a.onClick,Q=a.onMouseEnter,de=a.onMouseLeave,U=a.onTitleClick,_=a.onTitleMouseEnter,ae=a.onTitleMouseLeave,Z=Object(le.a)(a,["style","className","title","eventKey","disabled","internalPopupClose","children","itemIcon","expandIcon","popupClassName","popupOffset","onClick","onMouseEnter","onMouseLeave","onTitleClick","onTitleMouseEnter","onTitleMouseLeave"]),ue=Gt(O),k=t.useContext(We),Ce=k.prefixCls,te=k.mode,fe=k.openKeys,pe=k.disabled,ie=k.overflowDisabled,X=k.activeKey,ce=k.selectedKeys,Oe=k.itemIcon,ye=k.expandIcon,je=k.onItemClick,Ke=k.onOpenChange,Re=k.onActive,Pe=t.useContext(Ye),Fe=Pe.isSubPathKey,Ae=ze(),Ne="".concat(Ce,"-submenu"),Ie=pe||S,$e=t.useRef(),nn=t.useRef(),Ve=L||Oe,Ue=H||ye,xe=fe.includes(O),Le=!ie&&xe,In=Fe(ce,O),sn=it(O,Ie,_,ae),ke=sn.active,cn=Object(le.a)(sn,["active"]),Rn=t.useState(!1),Sn=Object(V.a)(Rn,2),Me=Sn[0],Qe=Sn[1],tn=function(Ze){Ie||Qe(Ze)},qe=function(Ze){tn(!0),Q==null||Q({key:O,domEvent:Ze})},Kn=function(Ze){tn(!1),de==null||de({key:O,domEvent:Ze})},Jn=t.useMemo(function(){return ke||(te!=="inline"?Me||Fe([X],O):!1)},[te,ke,X,Me,O,Fe]),Ln=E(Ae.length),on=function(Ze){Ie||(U==null||U({key:O,domEvent:Ze}),te==="inline"&&Ke(O,!xe))},Nn=et(function(_e){Y==null||Y(_n(_e)),je(_e)}),mn=function(Ze){te!=="inline"&&Ke(O,Ze)},Mn=function(){Re(O)},rn=ue&&"".concat(ue,"-popup"),ln=t.createElement("div",Object($.a)({role:"menuitem",style:Ln,className:"".concat(Ne,"-title"),tabIndex:Ie?null:-1,ref:$e,title:typeof v=="string"?v:null,"data-menu-id":ie&&ue?null:ue,"aria-expanded":Le,"aria-haspopup":!0,"aria-controls":rn,"aria-disabled":Ie,onClick:on,onFocus:Mn},cn),v,t.createElement(c,{icon:te!=="horizontal"?Ue:null,props:Object(q.a)(Object(q.a)({},a),{},{isOpen:Le,isSubMenu:!0})},t.createElement("i",{className:"".concat(Ne,"-arrow")}))),An=t.useRef(te);if(te!=="inline"&&(An.current=Ae.length>1?"vertical":te),!ie){var vn=An.current;ln=t.createElement(Dr,{mode:vn,prefixCls:Ne,visible:!W&&Le&&te!=="inline",popupClassName:J,popupOffset:oe,popup:t.createElement(En,{mode:vn},t.createElement(Xt,{id:rn,ref:nn},K)),disabled:Ie,onVisibleChange:mn},ln)}return t.createElement(En,{onItemClick:Nn,mode:te==="horizontal"?"vertical":te,itemIcon:Ve,expandIcon:Ue},t.createElement(D.Item,Object($.a)({role:"none"},Z,{component:"li",style:h,className:ge()(Ne,"".concat(Ne,"-").concat(te),b,(u={},Object(me.a)(u,"".concat(Ne,"-open"),Le),Object(me.a)(u,"".concat(Ne,"-active"),Jn),Object(me.a)(u,"".concat(Ne,"-selected"),In),Object(me.a)(u,"".concat(Ne,"-disabled"),Ie),u)),onMouseEnter:qe,onMouseLeave:Kn}),ln,!ie&&t.createElement(Ir,{id:rn,open:Le,keyPath:Ae},K)))};function Zt(n){var a=n.eventKey,u=n.children,h=ze(a),b=Et(u,h),v=ne();t.useEffect(function(){if(v)return v.registerPath(a,h),function(){v.unregisterPath(a,h)}},[h]);var O;return v?O=b:O=t.createElement(Nr,n,b),t.createElement(Ee.Provider,{value:h},O)}var Mr=e("x/xZ");function xt(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(Object(Mr.a)(n)){var u=n.nodeName.toLowerCase(),h=["input","select","textarea","button"].includes(u)||n.isContentEditable||u==="a"&&!!n.getAttribute("href"),b=n.getAttribute("tabindex"),v=Number(b),O=null;return b&&!Number.isNaN(v)?O=v:h&&O===null&&(O=0),h&&n.disabled&&(O=null),O!==null&&(O>=0||a&&O<0)}return!1}function kt(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,u=Object(Ge.a)(n.querySelectorAll("*")).filter(function(h){return xt(h,a)});return xt(n,a)&&u.unshift(n),u}var mt=null;function pa(){mt=document.activeElement}function va(){mt=null}function ha(){if(mt)try{mt.focus()}catch(n){}}function ga(n,a){if(a.keyCode===9){var u=kt(n),h=u[a.shiftKey?0:u.length-1],b=h===document.activeElement||n===document.activeElement;if(b){var v=u[a.shiftKey?u.length-1:0];v.focus(),a.preventDefault()}}}var It=we.a.LEFT,Nt=we.a.RIGHT,Mt=we.a.UP,ft=we.a.DOWN,pt=we.a.ENTER,qt=we.a.ESC,_t=[Mt,ft,It,Nt];function Ar(n,a,u,h){var b,v,O,S,W="prev",K="next",L="children",H="parent";if(n==="inline"&&h===pt)return{inlineTrigger:!0};var J=(b={},Object(me.a)(b,Mt,W),Object(me.a)(b,ft,K),b),oe=(v={},Object(me.a)(v,It,u?K:W),Object(me.a)(v,Nt,u?W:K),Object(me.a)(v,ft,L),Object(me.a)(v,pt,L),v),Y=(O={},Object(me.a)(O,Mt,W),Object(me.a)(O,ft,K),Object(me.a)(O,pt,L),Object(me.a)(O,qt,H),Object(me.a)(O,It,u?L:H),Object(me.a)(O,Nt,u?H:L),O),Q={inline:J,horizontal:oe,vertical:Y,inlineSub:J,horizontalSub:Y,verticalSub:Y},de=(S=Q["".concat(n).concat(a?"":"Sub")])===null||S===void 0?void 0:S[h];switch(de){case W:return{offset:-1,sibling:!0};case K:return{offset:1,sibling:!0};case H:return{offset:-1,sibling:!1};case L:return{offset:1,sibling:!1};default:return null}}function Tr(n){for(var a=n;a;){if(a.getAttribute("data-menu-list"))return a;a=a.parentElement}return null}function Fr(n,a){for(var u=n||document.activeElement;u;){if(a.has(u))return u;u=u.parentElement}return null}function Br(n,a){var u=kt(n,!0);return u.filter(function(h){return a.has(h)})}function er(n,a,u){var h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1;if(!n)return null;var b=Br(n,a),v=b.length,O=b.findIndex(function(S){return u===S});return h<0?O===-1?O=v-1:O-=1:h>0&&(O+=1),O=(O+v)%v,b[O]}function wr(n,a,u,h,b,v,O,S,W,K){var L=t.useRef(),H=t.useRef();H.current=a;var J=function(){Xe.a.cancel(L.current)};return t.useEffect(function(){return function(){J()}},[]),function(oe){var Y=oe.which;if([].concat(_t,[pt,qt]).includes(Y)){var Q,de,U,_=function(){Q=new Set,de=new Map,U=new Map;var Oe=v();return Oe.forEach(function(ye){var je=document.querySelector("[data-menu-id='".concat(Jt(h,ye),"']"));je&&(Q.add(je),U.set(je,ye),de.set(ye,je))}),Q};_();var ae=de.get(a),Z=Fr(ae,Q),ue=U.get(Z),k=Ar(n,O(ue,!0).length===1,u,Y);if(!k)return;_t.includes(Y)&&oe.preventDefault();var Ce=function(Oe){if(Oe){var ye=Oe,je=Oe.querySelector("a");(je==null?void 0:je.getAttribute("href"))&&(ye=je);var Ke=U.get(Oe);S(Ke),J(),L.current=Object(Xe.a)(function(){H.current===Ke&&ye.focus()})}};if(k.sibling||!Z){var te;!Z||n==="inline"?te=b.current:te=Tr(Z);var fe=er(te,Q,Z,k.offset);Ce(fe)}else if(k.inlineTrigger)W(ue);else if(k.offset>0)W(ue,!0),J(),L.current=Object(Xe.a)(function(){_();var ce=Z.getAttribute("aria-controls"),Oe=document.getElementById(ce),ye=er(Oe,Q);Ce(ye)},5);else if(k.offset<0){var pe=O(ue,!0),ie=pe[pe.length-2],X=de.get(ie);W(ie,!1),Ce(X)}}K==null||K(oe)}}var Wr=Math.random().toFixed(5).toString().slice(2),nr=0;function Kr(n){var a=Object(en.a)(n,{value:n}),u=Object(V.a)(a,2),h=u[0],b=u[1];return t.useEffect(function(){nr+=1;var v="".concat(Wr,"-").concat(nr);b("rc-menu-uuid-".concat(v))},[]),h}var ya=e("p8sG");function Lr(n){Promise.resolve().then(n)}var At="__RC_UTIL_PATH_SPLIT__",tr=function(a){return a.join(At)},$r=function(a){return a.split(At)},Tt="rc-menu-more";function Vr(){var n=t.useState({}),a=Object(V.a)(n,2),u=a[1],h=Object(t.useRef)(new Map),b=Object(t.useRef)(new Map),v=t.useState([]),O=Object(V.a)(v,2),S=O[0],W=O[1],K=Object(t.useRef)(0),L=Object(t.useCallback)(function(U,_){var ae=tr(_);b.current.set(ae,U),h.current.set(U,ae),K.current+=1;var Z=K.current;Lr(function(){Z===K.current&&u({})})},[]),H=Object(t.useCallback)(function(U,_){var ae=tr(_);b.current.delete(ae),h.current.delete(U)},[]),J=Object(t.useCallback)(function(U){W(U)},[]),oe=Object(t.useCallback)(function(U,_){var ae=h.current.get(U)||"",Z=$r(ae);return _&&S.includes(Z[0])&&Z.unshift(Tt),Z},[S]),Y=Object(t.useCallback)(function(U,_){return U.some(function(ae){var Z=oe(ae,!0);return Z.includes(_)})},[oe]),Q=function(){var _=Object(Ge.a)(h.current.keys());return S.length&&_.push(Tt),_},de=Object(t.useCallback)(function(U){var _="".concat(h.current.get(U)).concat(At),ae=new Set;return Object(Ge.a)(b.current.keys()).forEach(function(Z){Z.startsWith(_)&&ae.add(b.current.get(Z))}),ae},[]);return{registerPath:L,unregisterPath:H,refreshOverflowKeys:J,isSubPathKey:Y,getKeyPath:oe,getKeys:Q,getSubPathKeys:de}}var vt=[],zr=function(a){var u,h,b=a.prefixCls,v=b===void 0?"rc-menu":b,O=a.style,S=a.className,W=a.tabIndex,K=W===void 0?0:W,L=a.children,H=a.direction,J=a.id,oe=a.mode,Y=oe===void 0?"vertical":oe,Q=a.inlineCollapsed,de=a.disabled,U=a.disabledOverflow,_=a.subMenuOpenDelay,ae=_===void 0?.1:_,Z=a.subMenuCloseDelay,ue=Z===void 0?.1:Z,k=a.forceSubMenuRender,Ce=a.defaultOpenKeys,te=a.openKeys,fe=a.activeKey,pe=a.defaultActiveFirst,ie=a.selectable,X=ie===void 0?!0:ie,ce=a.multiple,Oe=ce===void 0?!1:ce,ye=a.defaultSelectedKeys,je=a.selectedKeys,Ke=a.onSelect,Re=a.onDeselect,Pe=a.inlineIndent,Fe=Pe===void 0?24:Pe,Ae=a.motion,Ne=a.defaultMotions,Ie=a.triggerSubMenuAction,$e=Ie===void 0?"hover":Ie,nn=a.builtinPlacements,Ve=a.itemIcon,Ue=a.expandIcon,xe=a.overflowedIndicator,Le=xe===void 0?"...":xe,In=a.getPopupContainer,sn=a.onClick,ke=a.onOpenChange,cn=a.onKeyDown,Rn=a.openAnimation,Sn=a.openTransitionName,Me=Object(le.a)(a,["prefixCls","style","className","tabIndex","children","direction","id","mode","inlineCollapsed","disabled","disabledOverflow","subMenuOpenDelay","subMenuCloseDelay","forceSubMenuRender","defaultOpenKeys","openKeys","activeKey","defaultActiveFirst","selectable","multiple","defaultSelectedKeys","selectedKeys","onSelect","onDeselect","inlineIndent","motion","defaultMotions","triggerSubMenuAction","builtinPlacements","itemIcon","expandIcon","overflowedIndicator","getPopupContainer","onClick","onOpenChange","onKeyDown","openAnimation","openTransitionName"]),Qe=Et(L,vt),tn=t.useState(!1),qe=Object(V.a)(tn,2),Kn=qe[0],Jn=qe[1],Ln=t.useRef(),on=Kr(J),Nn=H==="rtl",mn=t.useMemo(function(){return Y==="inline"&&Q?["vertical",Q]:[Y,!1]},[Y,Q]),Mn=Object(V.a)(mn,2),rn=Mn[0],ln=Mn[1],An=t.useState(0),vn=Object(V.a)(An,2),_e=vn[0],Ze=vn[1],Gn=_e>=Qe.length-1||rn!=="horizontal"||U,Hn=Object(en.a)(Ce,{value:te,postState:function(x){return x||vt}}),nt=Object(V.a)(Hn,2),Pn=nt[0],On=nt[1],Xn=t.useState(Pn),jn=Object(V.a)(Xn,2),hn=jn[0],Yn=jn[1],Tn=rn==="inline",Qn=t.useRef(!1);t.useEffect(function(){Tn&&Yn(Pn)},[Pn]),t.useEffect(function(){if(!Qn.current){Qn.current=!0;return}if(Tn)On(hn);else{var re=[];On(re),ke==null||ke(re)}},[Tn]);var fn=Vr(),Fn=fn.registerPath,he=fn.unregisterPath,De=fn.refreshOverflowKeys,Be=fn.isSubPathKey,an=fn.getKeyPath,Zn=fn.getKeys,gt=fn.getSubPathKeys,Wt=t.useMemo(function(){return{registerPath:Fn,unregisterPath:he}},[Fn,he]),Kt=t.useMemo(function(){return{isSubPathKey:Be}},[Be]);t.useEffect(function(){De(Gn?vt:Qe.slice(_e+1).map(function(re){return re.key}))},[_e,Gn]);var Lt=Object(en.a)(fe||pe&&((u=Qe[0])===null||u===void 0?void 0:u.key),{value:fe}),tt=Object(V.a)(Lt,2),yt=tt[0],ot=tt[1],bt=et(function(re){ot(re)}),$t=et(function(){ot(void 0)}),Ot=Object(en.a)(ye||[],{value:je,postState:function(x){return Array.isArray(x)?x:x==null?vt:[x]}}),Ct=Object(V.a)(Ot,2),rt=Ct[0],Bn=Ct[1],Rt=function(x){if(!!X){var Se=x.key,He=rt.includes(Se),un;He?un=rt.filter(function(kn){return kn!==Se}):Oe?un=[].concat(Object(Ge.a)(rt),[Se]):un=[Se],Bn(un);var Un=Object(q.a)(Object(q.a)({},x),{},{selectedKeys:un});He?Re==null||Re(Un):Ke==null||Ke(Un)}},St=et(function(re){sn==null||sn(_n(re)),Rt(re)}),lt=et(function(re,x){var Se=Pn.filter(function(un){return un!==re});if(x)Se.push(re);else if(rn!=="inline"){var He=gt(re);Se=Se.filter(function(un){return!He.has(un)})}o()(Pn,Se)||(On(Se),ke==null||ke(Se))}),xn=et(In),ut=function(x,Se){var He=Se!=null?Se:!Pn.includes(x);lt(x,He)},dt=wr(rn,yt,Nn,on,Ln,Zn,an,ot,ut,cn);t.useEffect(function(){Jn(!0)},[]);var Pt=rn!=="horizontal"||U?Qe:Qe.map(function(re,x){return t.createElement(En,{key:re.key,overflowDisabled:x>_e},re)}),jt=t.createElement(D,Object($.a)({id:J,ref:Ln,prefixCls:"".concat(v,"-overflow"),component:"ul",itemComponent:Dt,className:ge()(v,"".concat(v,"-root"),"".concat(v,"-").concat(rn),S,(h={},Object(me.a)(h,"".concat(v,"-inline-collapsed"),ln),Object(me.a)(h,"".concat(v,"-rtl"),Nn),h)),dir:H,style:O,role:"menu",tabIndex:K,data:Pt,renderRawItem:function(x){return x},renderRawRest:function(x){var Se=x.length,He=Se?Qe.slice(-Se):null;return t.createElement(Zt,{eventKey:Tt,title:Le,disabled:Gn,internalPopupClose:Se===0},He)},maxCount:rn!=="horizontal"||U?D.INVALIDATE:D.RESPONSIVE,ssr:"full","data-menu-list":!0,onVisibleChange:function(x){Ze(x)},onKeyDown:dt},Me));return t.createElement(Ut.Provider,{value:on},t.createElement(En,{prefixCls:v,mode:rn,openKeys:Pn,rtl:Nn,disabled:de,motion:Kn?Ae:null,defaultMotions:Kn?Ne:null,activeKey:yt,onActive:bt,onInactive:$t,selectedKeys:rt,inlineIndent:Fe,subMenuOpenDelay:ae,subMenuCloseDelay:ue,forceSubMenuRender:k,builtinPlacements:nn,triggerSubMenuAction:$e,getPopupContainer:xn,itemIcon:Ve,expandIcon:Ue,onItemClick:St,onOpenChange:lt},t.createElement(Ye.Provider,{value:Kt},jt),t.createElement(ve.Provider,{value:Wt},Qe)))},Ur=zr,Jr=function(a){var u=a.className,h=a.title,b=a.eventKey,v=a.children,O=Object(le.a)(a,["className","title","eventKey","children"]),S=t.useContext(We),W=S.prefixCls,K="".concat(W,"-item-group");return t.createElement("li",Object($.a)({},O,{onClick:function(H){return H.stopPropagation()},className:ge()(K,u)}),t.createElement("div",{className:"".concat(K,"-title"),title:typeof h=="string"?h:void 0},h),t.createElement("ul",{className:"".concat(K,"-list")},v))};function Gr(n){var a=n.children,u=Object(le.a)(n,["children"]),h=ze(u.eventKey),b=Et(a,h),v=ne();return v?b:t.createElement(Jr,u,b)}function Hr(n){var a=n.className,u=n.style,h=t.useContext(We),b=h.prefixCls,v=ne();return v?null:t.createElement("li",{className:ge()("".concat(b,"-item-divider"),a),style:u})}var st=Ur;st.Item=Dt,st.SubMenu=Zt,st.ItemGroup=Gr,st.Divider=Hr;var Xr=st,Yr=e("eDIo");function Qr(n,a){var u=n.prefixCls,h=n.editable,b=n.locale,v=n.style;return!h||h.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(u,"-nav-add"),style:v,"aria-label":(b==null?void 0:b.addAriaLabel)||"Add tab",onClick:function(S){h.onEdit("add",{event:S})}},h.addIcon||"+")}var rr=t.forwardRef(Qr);function Zr(n,a){var u=n.prefixCls,h=n.id,b=n.tabs,v=n.locale,O=n.mobile,S=n.moreIcon,W=S===void 0?"More":S,K=n.moreTransitionName,L=n.style,H=n.className,J=n.editable,oe=n.tabBarGutter,Y=n.rtl,Q=n.onTabClick,de=Object(t.useState)(!1),U=Object(V.a)(de,2),_=U[0],ae=U[1],Z=Object(t.useState)(null),ue=Object(V.a)(Z,2),k=ue[0],Ce=ue[1],te="".concat(h,"-more-popup"),fe="".concat(u,"-dropdown"),pe=k!==null?"".concat(te,"-").concat(k):null,ie=v==null?void 0:v.dropdownAriaLabel,X=t.createElement(Xr,{onClick:function(Pe){var Fe=Pe.key,Ae=Pe.domEvent;Q(Fe,Ae),ae(!1)},id:te,tabIndex:-1,role:"listbox","aria-activedescendant":pe,selectedKeys:[k],"aria-label":ie!==void 0?ie:"expanded dropdown"},b.map(function(Re){return t.createElement(Dt,{key:Re.key,id:"".concat(te,"-").concat(Re.key),role:"option","aria-controls":h&&"".concat(h,"-panel-").concat(Re.key),disabled:Re.disabled},Re.tab)}));function ce(Re){for(var Pe=b.filter(function($e){return!$e.disabled}),Fe=Pe.findIndex(function($e){return $e.key===k})||0,Ae=Pe.length,Ne=0;Ne<Ae;Ne+=1){Fe=(Fe+Re+Ae)%Ae;var Ie=Pe[Fe];if(!Ie.disabled){Ce(Ie.key);return}}}function Oe(Re){var Pe=Re.which;if(!_){[we.a.DOWN,we.a.SPACE,we.a.ENTER].includes(Pe)&&(ae(!0),Re.preventDefault());return}switch(Pe){case we.a.UP:ce(-1),Re.preventDefault();break;case we.a.DOWN:ce(1),Re.preventDefault();break;case we.a.ESC:ae(!1);break;case we.a.SPACE:case we.a.ENTER:k!==null&&Q(k,Re);break}}Object(t.useEffect)(function(){var Re=document.getElementById(pe);Re&&Re.scrollIntoView&&Re.scrollIntoView(!1)},[k]),Object(t.useEffect)(function(){_||Ce(null)},[_]);var ye=Object(me.a)({},Y?"marginLeft":"marginRight",oe);b.length||(ye.visibility="hidden",ye.order=1);var je=ge()(Object(me.a)({},"".concat(fe,"-rtl"),Y)),Ke=O?null:t.createElement(Yr.default,{prefixCls:fe,overlay:X,trigger:["hover"],visible:_,transitionName:K,onVisibleChange:ae,overlayClassName:je,mouseEnterDelay:.1,mouseLeaveDelay:.1},t.createElement("button",{type:"button",className:"".concat(u,"-nav-more"),style:ye,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":te,id:"".concat(h,"-more"),"aria-expanded":_,onKeyDown:Oe},W));return t.createElement("div",{className:ge()("".concat(u,"-nav-operations"),H),style:L,ref:a},Ke,t.createElement(rr,{prefixCls:u,locale:v,editable:J}))}var xr=t.forwardRef(Zr),Ft=Object(t.createContext)(null),kr=.1,ar=.01,ht=20,ir=Math.pow(.995,ht);function qr(n,a){var u=Object(t.useState)(),h=Object(V.a)(u,2),b=h[0],v=h[1],O=Object(t.useState)(0),S=Object(V.a)(O,2),W=S[0],K=S[1],L=Object(t.useState)(0),H=Object(V.a)(L,2),J=H[0],oe=H[1],Y=Object(t.useState)(),Q=Object(V.a)(Y,2),de=Q[0],U=Q[1],_=Object(t.useRef)();function ae(fe){var pe=fe.touches[0],ie=pe.screenX,X=pe.screenY;v({x:ie,y:X}),window.clearInterval(_.current)}function Z(fe){if(!!b){fe.preventDefault();var pe=fe.touches[0],ie=pe.screenX,X=pe.screenY;v({x:ie,y:X});var ce=ie-b.x,Oe=X-b.y;a(ce,Oe);var ye=Date.now();K(ye),oe(ye-W),U({x:ce,y:Oe})}}function ue(){if(!!b&&(v(null),U(null),de)){var fe=de.x/J,pe=de.y/J,ie=Math.abs(fe),X=Math.abs(pe);if(Math.max(ie,X)<kr)return;var ce=fe,Oe=pe;_.current=window.setInterval(function(){if(Math.abs(ce)<ar&&Math.abs(Oe)<ar){window.clearInterval(_.current);return}ce*=ir,Oe*=ir,a(ce*ht,Oe*ht)},ht)}}var k=Object(t.useRef)();function Ce(fe){var pe=fe.deltaX,ie=fe.deltaY,X=0,ce=Math.abs(pe),Oe=Math.abs(ie);ce===Oe?X=k.current==="x"?pe:ie:ce>Oe?(X=pe,k.current="x"):(X=ie,k.current="y"),a(-X,-X)&&fe.preventDefault()}var te=Object(t.useRef)(null);te.current={onTouchStart:ae,onTouchMove:Z,onTouchEnd:ue,onWheel:Ce},t.useEffect(function(){function fe(ce){te.current.onTouchStart(ce)}function pe(ce){te.current.onTouchMove(ce)}function ie(ce){te.current.onTouchEnd(ce)}function X(ce){te.current.onWheel(ce)}return document.addEventListener("touchmove",pe,{passive:!1}),document.addEventListener("touchend",ie,{passive:!1}),n.current.addEventListener("touchstart",fe,{passive:!1}),n.current.addEventListener("wheel",X),function(){document.removeEventListener("touchmove",pe),document.removeEventListener("touchend",ie)}},[])}function _r(){var n=Object(t.useRef)(new Map);function a(h){return n.current.has(h)||n.current.set(h,t.createRef()),n.current.get(h)}function u(h){n.current.delete(h)}return[a,u]}function sr(n,a){var u=t.useRef(n),h=t.useState({}),b=Object(V.a)(h,2),v=b[1];function O(S){var W=typeof S=="function"?S(u.current):S;W!==u.current&&a(W,u.current),u.current=W,v({})}return[u.current,O]}var or=function(a){var u=a.position,h=a.prefixCls,b=a.extra;if(!b)return null;var v,O=b;return u==="right"&&(v=O.right||!O.left&&O||null),u==="left"&&(v=O.left||null),v?t.createElement("div",{className:"".concat(h,"-extra-content")},v):null};function ea(n,a){var u,h=t.useContext(Ft),b=h.prefixCls,v=h.tabs,O=n.className,S=n.style,W=n.id,K=n.animated,L=n.activeKey,H=n.rtl,J=n.extra,oe=n.editable,Y=n.locale,Q=n.tabPosition,de=n.tabBarGutter,U=n.children,_=n.onTabClick,ae=n.onTabScroll,Z=Object(t.useRef)(),ue=Object(t.useRef)(),k=Object(t.useRef)(),Ce=Object(t.useRef)(),te=_r(),fe=Object(V.a)(te,2),pe=fe[0],ie=fe[1],X=Q==="top"||Q==="bottom",ce=sr(0,function(re,x){X&&ae&&ae({direction:re>x?"left":"right"})}),Oe=Object(V.a)(ce,2),ye=Oe[0],je=Oe[1],Ke=sr(0,function(re,x){!X&&ae&&ae({direction:re>x?"top":"bottom"})}),Re=Object(V.a)(Ke,2),Pe=Re[0],Fe=Re[1],Ae=Object(t.useState)(0),Ne=Object(V.a)(Ae,2),Ie=Ne[0],$e=Ne[1],nn=Object(t.useState)(0),Ve=Object(V.a)(nn,2),Ue=Ve[0],xe=Ve[1],Le=Object(t.useState)(0),In=Object(V.a)(Le,2),sn=In[0],ke=In[1],cn=Object(t.useState)(0),Rn=Object(V.a)(cn,2),Sn=Rn[0],Me=Rn[1],Qe=Object(t.useState)(null),tn=Object(V.a)(Qe,2),qe=tn[0],Kn=tn[1],Jn=Object(t.useState)(null),Ln=Object(V.a)(Jn,2),on=Ln[0],Nn=Ln[1],mn=Object(t.useState)(0),Mn=Object(V.a)(mn,2),rn=Mn[0],ln=Mn[1],An=Object(t.useState)(0),vn=Object(V.a)(An,2),_e=vn[0],Ze=vn[1],Gn=Dn(new Map),Hn=Object(V.a)(Gn,2),nt=Hn[0],Pn=Hn[1],On=F(v,nt,Ie),Xn="".concat(b,"-nav-operations-hidden"),jn=0,hn=0;X?H?(jn=0,hn=Math.max(0,Ie-qe)):(jn=Math.min(0,qe-Ie),hn=0):(jn=Math.min(0,on-Ue),hn=0);function Yn(re){return re<jn?jn:re>hn?hn:re}var Tn=Object(t.useRef)(),Qn=Object(t.useState)(),fn=Object(V.a)(Qn,2),Fn=fn[0],he=fn[1];function De(){he(Date.now())}function Be(){window.clearTimeout(Tn.current)}qr(Z,function(re,x){function Se(He,un){He(function(Un){var kn=Yn(Un+un);return kn})}if(X){if(qe>=Ie)return!1;Se(je,re)}else{if(on>=Ue)return!1;Se(Fe,x)}return Be(),De(),!0}),Object(t.useEffect)(function(){return Be(),Fn&&(Tn.current=window.setTimeout(function(){he(0)},100)),Be},[Fn]);function an(){var re=arguments.length>0&&arguments[0]!==void 0?arguments[0]:L,x=On.get(re)||{width:0,height:0,left:0,right:0,top:0};if(X){var Se=ye;H?x.right<ye?Se=x.right:x.right+x.width>ye+qe&&(Se=x.right+x.width-qe):x.left<-ye?Se=-x.left:x.left+x.width>-ye+qe&&(Se=-(x.left+x.width-qe)),Fe(0),je(Yn(Se))}else{var He=Pe;x.top<-Pe?He=-x.top:x.top+x.height>-Pe+on&&(He=-(x.top+x.height-on)),je(0),Fe(Yn(He))}}var Zn=B(On,{width:qe,height:on,left:ye,top:Pe},{width:sn,height:Sn},{width:rn,height:_e},Object(q.a)(Object(q.a)({},n),{},{tabs:v})),gt=Object(V.a)(Zn,2),Wt=gt[0],Kt=gt[1],Lt=v.map(function(re){var x=re.key;return t.createElement(Vn,{id:W,prefixCls:b,key:x,rtl:H,tab:re,closable:re.closable,editable:oe,active:x===L,tabPosition:Q,tabBarGutter:de,renderWrapper:U,removeAriaLabel:Y==null?void 0:Y.removeAriaLabel,ref:pe(x),onClick:function(He){_(x,He)},onRemove:function(){ie(x)},onFocus:function(){an(x),De(),H||(Z.current.scrollLeft=0),Z.current.scrollTop=0}})}),tt=Wn(function(){var re,x,Se,He,un,Un,kn,Vt,zt,la=((re=Z.current)===null||re===void 0?void 0:re.offsetWidth)||0,ua=((x=Z.current)===null||x===void 0?void 0:x.offsetHeight)||0,mr=((Se=Ce.current)===null||Se===void 0?void 0:Se.offsetWidth)||0,fr=((He=Ce.current)===null||He===void 0?void 0:He.offsetHeight)||0,da=((un=k.current)===null||un===void 0?void 0:un.offsetWidth)||0,ca=((Un=k.current)===null||Un===void 0?void 0:Un.offsetHeight)||0;Kn(la),Nn(ua),ln(mr),Ze(fr);var pr=(((kn=ue.current)===null||kn===void 0?void 0:kn.offsetWidth)||0)-mr,vr=(((Vt=ue.current)===null||Vt===void 0?void 0:Vt.offsetHeight)||0)-fr;$e(pr),xe(vr);var hr=(zt=k.current)===null||zt===void 0?void 0:zt.className.includes(Xn);ke(pr-(hr?0:da)),Me(vr-(hr?0:ca)),Pn(function(){var gr=new Map;return v.forEach(function(ma){var yr=ma.key,ct=pe(yr).current;ct&&gr.set(yr,{width:ct.offsetWidth,height:ct.offsetHeight,left:ct.offsetLeft,top:ct.offsetTop})}),gr})}),yt=v.slice(0,Wt),ot=v.slice(Kt+1),bt=[].concat(Object(Ge.a)(yt),Object(Ge.a)(ot)),$t=Object(t.useState)(),Ot=Object(V.a)($t,2),Ct=Ot[0],rt=Ot[1],Bn=On.get(L),Rt=Object(t.useRef)();function St(){Xe.a.cancel(Rt.current)}Object(t.useEffect)(function(){var re={};return Bn&&(X?(H?re.right=Bn.right:re.left=Bn.left,re.width=Bn.width):(re.top=Bn.top,re.height=Bn.height)),St(),Rt.current=Object(Xe.a)(function(){rt(re)}),St},[Bn,X,H]),Object(t.useEffect)(function(){an()},[L,Bn,On,X]),Object(t.useEffect)(function(){tt()},[H,de,L,v.map(function(re){return re.key}).join("_")]);var lt=!!bt.length,xn="".concat(b,"-nav-wrap"),ut,dt,Pt,jt;return X?H?(dt=ye>0,ut=ye+qe<Ie):(ut=ye<0,dt=-ye+qe<Ie):(Pt=Pe<0,jt=-Pe+on<Ue),t.createElement("div",{ref:a,role:"tablist",className:ge()("".concat(b,"-nav"),O),style:S,onKeyDown:function(){De()}},t.createElement(or,{position:"left",extra:J,prefixCls:b}),t.createElement($n.default,{onResize:tt},t.createElement("div",{className:ge()(xn,(u={},Object(me.a)(u,"".concat(xn,"-ping-left"),ut),Object(me.a)(u,"".concat(xn,"-ping-right"),dt),Object(me.a)(u,"".concat(xn,"-ping-top"),Pt),Object(me.a)(u,"".concat(xn,"-ping-bottom"),jt),u)),ref:Z},t.createElement($n.default,{onResize:tt},t.createElement("div",{ref:ue,className:"".concat(b,"-nav-list"),style:{transform:"translate(".concat(ye,"px, ").concat(Pe,"px)"),transition:Fn?"none":void 0}},Lt,t.createElement(rr,{ref:Ce,prefixCls:b,locale:Y,editable:oe,style:{visibility:lt?"hidden":null}}),t.createElement("div",{className:ge()("".concat(b,"-ink-bar"),Object(me.a)({},"".concat(b,"-ink-bar-animated"),K.inkBar)),style:Ct}))))),t.createElement(xr,Object($.a)({},n,{ref:k,prefixCls:b,tabs:bt,className:!lt&&Xn})),t.createElement(or,{position:"right",extra:J,prefixCls:b}))}var lr=t.forwardRef(ea);function na(n){var a=n.id,u=n.activeKey,h=n.animated,b=n.tabPosition,v=n.rtl,O=n.destroyInactiveTabPane,S=t.useContext(Ft),W=S.prefixCls,K=S.tabs,L=h.tabPane,H=K.findIndex(function(J){return J.key===u});return t.createElement("div",{className:ge()("".concat(W,"-content-holder"))},t.createElement("div",{className:ge()("".concat(W,"-content"),"".concat(W,"-content-").concat(b),Object(me.a)({},"".concat(W,"-content-animated"),L)),style:H&&L?Object(me.a)({},v?"marginRight":"marginLeft","-".concat(H,"00%")):null},K.map(function(J){return t.cloneElement(J.node,{key:J.key,prefixCls:W,tabKey:J.key,id:a,animated:L,active:J.key===u,destroyInactiveTabPane:O})})))}function ur(n){var a=n.prefixCls,u=n.forceRender,h=n.className,b=n.style,v=n.id,O=n.active,S=n.animated,W=n.destroyInactiveTabPane,K=n.tabKey,L=n.children,H=t.useState(u),J=Object(V.a)(H,2),oe=J[0],Y=J[1];t.useEffect(function(){O?Y(!0):W&&Y(!1)},[O,W]);var Q={};return O||(S?(Q.visibility="hidden",Q.height=0,Q.overflowY="hidden"):Q.display="none"),t.createElement("div",{id:v&&"".concat(v,"-panel-").concat(K),role:"tabpanel",tabIndex:O?0:-1,"aria-labelledby":v&&"".concat(v,"-tab-").concat(K),"aria-hidden":!O,style:Object(q.a)(Object(q.a)({},Q),b),className:ge()("".concat(a,"-tabpane"),O&&"".concat(a,"-tabpane-active"),h)},(O||oe||u)&&L)}var dr=0;function ta(n){return Object(pn.a)(n).map(function(a){if(t.isValidElement(a)){var u=a.key!==void 0?String(a.key):void 0;return Object(q.a)(Object(q.a)({key:u},a.props),{},{node:a})}return null}).filter(function(a){return a})}function ra(n,a){var u,h=n.id,b=n.prefixCls,v=b===void 0?"rc-tabs":b,O=n.className,S=n.children,W=n.direction,K=n.activeKey,L=n.defaultActiveKey,H=n.editable,J=n.animated,oe=J===void 0?{inkBar:!0,tabPane:!1}:J,Y=n.tabPosition,Q=Y===void 0?"top":Y,de=n.tabBarGutter,U=n.tabBarStyle,_=n.tabBarExtraContent,ae=n.locale,Z=n.moreIcon,ue=n.moreTransitionName,k=n.destroyInactiveTabPane,Ce=n.renderTabBar,te=n.onChange,fe=n.onTabClick,pe=n.onTabScroll,ie=Object(le.a)(n,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),X=ta(S),ce=W==="rtl",Oe;oe===!1?Oe={inkBar:!1,tabPane:!1}:oe===!0?Oe={inkBar:!0,tabPane:!0}:Oe=Object(q.a)({inkBar:!0,tabPane:!1},Object(dn.a)(oe)==="object"?oe:{});var ye=Object(t.useState)(!1),je=Object(V.a)(ye,2),Ke=je[0],Re=je[1];Object(t.useEffect)(function(){Re(Object(Cn.a)())},[]);var Pe=Object(en.a)(function(){var Me;return(Me=X[0])===null||Me===void 0?void 0:Me.key},{value:K,defaultValue:L}),Fe=Object(V.a)(Pe,2),Ae=Fe[0],Ne=Fe[1],Ie=Object(t.useState)(function(){return X.findIndex(function(Me){return Me.key===Ae})}),$e=Object(V.a)(Ie,2),nn=$e[0],Ve=$e[1];Object(t.useEffect)(function(){var Me=X.findIndex(function(tn){return tn.key===Ae});if(Me===-1){var Qe;Me=Math.max(0,Math.min(nn,X.length-1)),Ne((Qe=X[Me])===null||Qe===void 0?void 0:Qe.key)}Ve(Me)},[X.map(function(Me){return Me.key}).join("_"),Ae,nn]);var Ue=Object(en.a)(null,{value:h}),xe=Object(V.a)(Ue,2),Le=xe[0],In=xe[1],sn=Q;Ke&&!["left","right"].includes(Q)&&(sn="top"),Object(t.useEffect)(function(){h||(In("rc-tabs-".concat(dr)),dr+=1)},[]);function ke(Me,Qe){fe==null||fe(Me,Qe),Ne(Me),te==null||te(Me)}var cn={id:Le,activeKey:Ae,animated:Oe,tabPosition:sn,rtl:ce,mobile:Ke},Rn,Sn=Object(q.a)(Object(q.a)({},cn),{},{editable:H,locale:ae,moreIcon:Z,moreTransitionName:ue,tabBarGutter:de,onTabClick:ke,onTabScroll:pe,extra:_,style:U,panes:S});return Ce?Rn=Ce(Sn,lr):Rn=t.createElement(lr,Sn),t.createElement(Ft.Provider,{value:{tabs:X,prefixCls:v}},t.createElement("div",Object($.a)({ref:a,id:h,className:ge()(v,"".concat(v,"-").concat(sn),(u={},Object(me.a)(u,"".concat(v,"-mobile"),Ke),Object(me.a)(u,"".concat(v,"-editable"),H),Object(me.a)(u,"".concat(v,"-rtl"),ce),u),O)},ie),Rn,t.createElement(na,Object($.a)({destroyInactiveTabPane:k},cn,{animated:Oe}))))}var cr=t.forwardRef(ra);cr.TabPane=ur;var aa=cr,ia=aa,Bt=e("MZF8"),bn=e("dEAq"),sa=e("ZpkN"),ba=e("TIsu");function wt(n,a){var u,h=(u=n.match(/\.(\w+)$/))===null||u===void 0?void 0:u[1];return h||(h=a.tsx?"tsx":"jsx"),h}var oa=n=>{var a,u,h,b=Object(t.useRef)(),v=Object(t.useContext)(bn.context),O=v.locale,S=Object(bn.useLocaleProps)(O,n),W=Object(bn.useDemoUrl)(S.identifier),K=S.demoUrl||W,L=(Bt.a===null||Bt.a===void 0?void 0:Bt.a.location.hash)==="#".concat(S.identifier),H=Object.keys(S.sources).length===1,J=Object(bn.useCodeSandbox)((a=S.hideActions)!==null&&a!==void 0&&a.includes("CSB")?null:S),oe=Object(bn.useRiddle)((u=S.hideActions)!==null&&u!==void 0&&u.includes("RIDDLE")?null:S),Y=Object(bn.useMotions)(S.motions||[],b.current),Q=Object(G.default)(Y,2),de=Q[0],U=Q[1],_=Object(bn.useCopy)(),ae=Object(G.default)(_,2),Z=ae[0],ue=ae[1],k=Object(t.useState)("_"),Ce=Object(G.default)(k,2),te=Ce[0],fe=Ce[1],pe=Object(t.useState)(wt(te,S.sources[te])),ie=Object(G.default)(pe,2),X=ie[0],ce=ie[1],Oe=Object(t.useState)(Boolean(S.defaultShowCode)),ye=Object(G.default)(Oe,2),je=ye[0],Ke=ye[1],Re=Object(t.useState)(Math.random()),Pe=Object(G.default)(Re,2),Fe=Pe[0],Ae=Pe[1],Ne=S.sources[te][X]||S.sources[te].content,Ie=Object(bn.useTSPlaygroundUrl)(O,Ne),$e=Object(t.useRef)(),nn=Object(bn.usePrefersColor)(),Ve=Object(G.default)(nn,1),Ue=Ve[0];Object(t.useEffect)(()=>{Ae(Math.random())},[Ue]);function xe(Le){fe(Le),ce(wt(Le,S.sources[Le]))}return R.a.createElement("div",{style:S.style,className:[S.className,"__dumi-default-previewer",L?"__dumi-default-previewer-target":""].filter(Boolean).join(" "),id:S.identifier,"data-debug":S.debug||void 0,"data-iframe":S.iframe||void 0},S.iframe&&R.a.createElement("div",{className:"__dumi-default-previewer-browser-nav"}),R.a.createElement("div",{ref:b,className:"__dumi-default-previewer-demo",style:{transform:S.transform?"translate(0, 0)":void 0,padding:S.compact||S.iframe&&S.compact!==!1?"0":void 0,background:S.background}},S.iframe?R.a.createElement("iframe",{title:"dumi-previewer",style:{height:String(S.iframe).replace(/(\d)$/,"$1px")},key:Fe,src:K,ref:$e}):S.children),R.a.createElement("div",{className:"__dumi-default-previewer-desc","data-title":S.title},S.title&&R.a.createElement(bn.AnchorLink,{to:"#".concat(S.identifier)},S.title),S.description&&R.a.createElement("div",{dangerouslySetInnerHTML:{__html:S.description}})),R.a.createElement("div",{className:"__dumi-default-previewer-actions"},J&&R.a.createElement("button",{title:"Open demo on CodeSandbox.io",className:"__dumi-default-icon",role:"codesandbox",onClick:J}),oe&&R.a.createElement("button",{title:"Open demo on Riddle",className:"__dumi-default-icon",role:"riddle",onClick:oe}),S.motions&&R.a.createElement("button",{title:"Execute motions",className:"__dumi-default-icon",role:"motions",disabled:U,onClick:()=>de()}),S.iframe&&R.a.createElement("button",{title:"Reload demo iframe page",className:"__dumi-default-icon",role:"refresh",onClick:()=>Ae(Math.random())}),!((h=S.hideActions)!==null&&h!==void 0&&h.includes("EXTERNAL"))&&R.a.createElement(bn.Link,{target:"_blank",to:K},R.a.createElement("button",{title:"Open demo in new tab",className:"__dumi-default-icon",role:"open-demo",type:"button"})),R.a.createElement("span",null),R.a.createElement("button",{title:"Copy source code",className:"__dumi-default-icon",role:"copy","data-status":ue,onClick:()=>Z(Ne)}),X==="tsx"&&je&&R.a.createElement(bn.Link,{target:"_blank",to:Ie},R.a.createElement("button",{title:"Get JSX via TypeScript Playground",className:"__dumi-default-icon",role:"change-tsx",type:"button"})),R.a.createElement("button",{title:"Toggle source code panel",className:"__dumi-default-icon".concat(je?" __dumi-default-btn-expand":""),role:"source",type:"button",onClick:()=>Ke(!je)})),je&&R.a.createElement("div",{className:"__dumi-default-previewer-source-wrapper"},!H&&R.a.createElement(ia,{className:"__dumi-default-previewer-source-tab",prefixCls:"__dumi-default-tabs",moreIcon:"\xB7\xB7\xB7",defaultActiveKey:te,onChange:xe},Object.keys(S.sources).map(Le=>R.a.createElement(ur,{tab:Le==="_"?"index.".concat(wt(Le,S.sources[Le])):Le,key:Le}))),R.a.createElement("div",{className:"__dumi-default-previewer-source"},R.a.createElement(sa.a,{code:Ne,lang:X,showCopy:!1}))))},Oa=gn.default=oa},"80pN":function(wn,gn,e){"use strict";(function(G){/** @license React v16.14.0
* react-dom-test-utils.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*/var t=e("MgzW"),R=e("q1tI"),$=e("i8i4"),me=e("QCnb");function V(c){for(var E="https://reactjs.org/docs/error-decoder.html?invariant="+c,I=1;I<arguments.length;I++)E+="&args[]="+encodeURIComponent(arguments[I]);return"Minified React error #"+c+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dn=R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;dn.hasOwnProperty("ReactCurrentDispatcher")||(dn.ReactCurrentDispatcher={current:null}),dn.hasOwnProperty("ReactCurrentBatchConfig")||(dn.ReactCurrentBatchConfig={suspense:null});function le(c){var E=c,I=c;if(c.alternate)for(;E.return;)E=E.return;else{c=E;do E=c,(E.effectTag&1026)!=0&&(I=E.return),c=E.return;while(c)}return E.tag===3?I:null}function q(c){if(le(c)!==c)throw Error(V(188))}function Je(c){var E=c.alternate;if(!E){if(E=le(c),E===null)throw Error(V(188));return E!==c?null:c}for(var I=c,ve=E;;){var ne=I.return;if(ne===null)break;var Ee=ne.alternate;if(Ee===null){if(ve=ne.return,ve!==null){I=ve;continue}break}if(ne.child===Ee.child){for(Ee=ne.child;Ee;){if(Ee===I)return q(ne),c;if(Ee===ve)return q(ne),E;Ee=Ee.sibling}throw Error(V(188))}if(I.return!==ve.return)I=ne,ve=Ee;else{for(var ze=!1,Ye=ne.child;Ye;){if(Ye===I){ze=!0,I=ne,ve=Ee;break}if(Ye===ve){ze=!0,ve=ne,I=Ee;break}Ye=Ye.sibling}if(!ze){for(Ye=Ee.child;Ye;){if(Ye===I){ze=!0,I=Ee,ve=ne;break}if(Ye===ve){ze=!0,ve=Ee,I=ne;break}Ye=Ye.sibling}if(!ze)throw Error(V(189))}}if(I.alternate!==ve)throw Error(V(190))}if(I.tag!==3)throw Error(V(188));return I.stateNode.current===I?c:E}function ge(){return!0}function pn(){return!1}function Cn(c,E,I,ve){this.dispatchConfig=c,this._targetInst=E,this.nativeEvent=I,c=this.constructor.Interface;for(var ne in c)c.hasOwnProperty(ne)&&((E=c[ne])?this[ne]=E(I):ne==="target"?this.target=ve:this[ne]=I[ne]);return this.isDefaultPrevented=(I.defaultPrevented!=null?I.defaultPrevented:I.returnValue===!1)?ge:pn,this.isPropagationStopped=pn,this}t(Cn.prototype,{preventDefault:function(){this.defaultPrevented=!0;var c=this.nativeEvent;c&&(c.preventDefault?c.preventDefault():typeof c.returnValue!="unknown"&&(c.returnValue=!1),this.isDefaultPrevented=ge)},stopPropagation:function(){var c=this.nativeEvent;c&&(c.stopPropagation?c.stopPropagation():typeof c.cancelBubble!="unknown"&&(c.cancelBubble=!0),this.isPropagationStopped=ge)},persist:function(){this.isPersistent=ge},isPersistent:pn,destructor:function(){var c=this.constructor.Interface,E;for(E in c)this[E]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=pn,this._dispatchInstances=this._dispatchListeners=null}}),Cn.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(c){return c.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null},Cn.extend=function(c){function E(){}function I(){return ve.apply(this,arguments)}var ve=this;E.prototype=ve.prototype;var ne=new E;return t(ne,I.prototype),I.prototype=ne,I.prototype.constructor=I,I.Interface=t({},ve.Interface,c),I.extend=ve.extend,Xe(I),I},Xe(Cn);function en(c,E,I,ve){if(this.eventPool.length){var ne=this.eventPool.pop();return this.call(ne,c,E,I,ve),ne}return new this(c,E,I,ve)}function Ge(c){if(!(c instanceof this))throw Error(V(279));c.destructor(),10>this.eventPool.length&&this.eventPool.push(c)}function Xe(c){c.eventPool=[],c.getPooled=en,c.release=Ge}var $n=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined");function Wn(c,E){var I={};return I[c.toLowerCase()]=E.toLowerCase(),I["Webkit"+c]="webkit"+E,I["Moz"+c]="moz"+E,I}var Dn={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionend:Wn("Transition","TransitionEnd")},we={},qn={};$n&&(qn=document.createElement("div").style,"AnimationEvent"in window||(delete Dn.animationend.animation,delete Dn.animationiteration.animation,delete Dn.animationstart.animation),"TransitionEvent"in window||delete Dn.transitionend.transition);function Vn(c){if(we[c])return we[c];if(!Dn[c])return c;var E=Dn[c],I;for(I in E)if(E.hasOwnProperty(I)&&I in qn)return we[c]=E[I];return c}var at=Vn("animationend"),F=Vn("animationiteration"),A=Vn("animationstart"),B=Vn("transitionend"),f=null;function o(c){if(f===null)try{var E=("require"+Math.random()).slice(0,7);f=(G&&G[E])("timers").setImmediate}catch(I){f=function(ve){var ne=new MessageChannel;ne.port1.onmessage=ve,ne.port2.postMessage(void 0)}}return f(c)}var g=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,C=g[11],P=g[12],i=$.unstable_batchedUpdates,l=dn.IsSomeRendererActing,y=typeof me.unstable_flushAllWithoutAsserting=="function",T=me.unstable_flushAllWithoutAsserting||function(){for(var c=!1;C();)c=!0;return c};function M(c){try{T(),o(function(){T()?M(c):c()})}catch(E){c(E)}}var j=0,s=!1,N=$.findDOMNode,d=$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Events,r=d[0],p=d[4],m=d[5],D=d[6],w=d[7],z=d[8],ee=d[9],se=d[10];function be(){}function yn(c,E){if(!c)return[];if(c=Je(c),!c)return[];for(var I=c,ve=[];;){if(I.tag===5||I.tag===6||I.tag===1||I.tag===0){var ne=I.stateNode;E(ne)&&ve.push(ne)}if(I.child)I.child.return=I,I=I.child;else{if(I===c)return ve;for(;!I.sibling;){if(!I.return||I.return===c)return ve;I=I.return}I.sibling.return=I.return,I=I.sibling}}}function We(c,E){if(c&&!c._reactInternalFiber){var I=""+c;throw c=Array.isArray(c)?"an array":c&&c.nodeType===1&&c.tagName?"a DOM node":I==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":I,Error(V(286,E,c))}}var Te={renderIntoDocument:function(c){var E=document.createElement("div");return $.render(c,E)},isElement:function(c){return R.isValidElement(c)},isElementOfType:function(c,E){return R.isValidElement(c)&&c.type===E},isDOMComponent:function(c){return!(!c||c.nodeType!==1||!c.tagName)},isDOMComponentElement:function(c){return!!(c&&R.isValidElement(c)&&c.tagName)},isCompositeComponent:function(c){return Te.isDOMComponent(c)?!1:c!=null&&typeof c.render=="function"&&typeof c.setState=="function"},isCompositeComponentWithType:function(c,E){return Te.isCompositeComponent(c)?c._reactInternalFiber.type===E:!1},findAllInRenderedTree:function(c,E){return We(c,"findAllInRenderedTree"),c?yn(c._reactInternalFiber,E):[]},scryRenderedDOMComponentsWithClass:function(c,E){return We(c,"scryRenderedDOMComponentsWithClass"),Te.findAllInRenderedTree(c,function(I){if(Te.isDOMComponent(I)){var ve=I.className;typeof ve!="string"&&(ve=I.getAttribute("class")||"");var ne=ve.split(/\s+/);if(!Array.isArray(E)){if(E===void 0)throw Error(V(11));E=E.split(/\s+/)}return E.every(function(Ee){return ne.indexOf(Ee)!==-1})}return!1})},findRenderedDOMComponentWithClass:function(c,E){if(We(c,"findRenderedDOMComponentWithClass"),c=Te.scryRenderedDOMComponentsWithClass(c,E),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for class:"+E);return c[0]},scryRenderedDOMComponentsWithTag:function(c,E){return We(c,"scryRenderedDOMComponentsWithTag"),Te.findAllInRenderedTree(c,function(I){return Te.isDOMComponent(I)&&I.tagName.toUpperCase()===E.toUpperCase()})},findRenderedDOMComponentWithTag:function(c,E){if(We(c,"findRenderedDOMComponentWithTag"),c=Te.scryRenderedDOMComponentsWithTag(c,E),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for tag:"+E);return c[0]},scryRenderedComponentsWithType:function(c,E){return We(c,"scryRenderedComponentsWithType"),Te.findAllInRenderedTree(c,function(I){return Te.isCompositeComponentWithType(I,E)})},findRenderedComponentWithType:function(c,E){if(We(c,"findRenderedComponentWithType"),c=Te.scryRenderedComponentsWithType(c,E),c.length!==1)throw Error("Did not find exactly one match (found: "+c.length+") for componentType:"+E);return c[0]},mockComponent:function(c,E){return E=E||c.mockTagName||"div",c.prototype.render.mockImplementation(function(){return R.createElement(E,null,this.props.children)}),this},nativeTouchData:function(c,E){return{touches:[{pageX:c,pageY:E}]}},Simulate:null,SimulateNative:{},act:function(c){function E(){j--,l.current=I,P.current=ve}s===!1&&(s=!0,console.error("act(...) is not supported in production builds of React, and might not behave as expected.")),j++;var I=l.current,ve=P.current;l.current=!0,P.current=!0;try{var ne=i(c)}catch(Ee){throw E(),Ee}if(ne!==null&&typeof ne=="object"&&typeof ne.then=="function")return{then:function(Ee,ze){ne.then(function(){1<j||y===!0&&I===!0?(E(),Ee()):M(function(Ye){E(),Ye?ze(Ye):Ee()})},function(Ye){E(),ze(Ye)})}};try{j!==1||y!==!1&&I!==!1||T(),E()}catch(Ee){throw E(),Ee}return{then:function(Ee){Ee()}}}};function En(c){return function(E,I){if(R.isValidElement(E))throw Error(V(228));if(Te.isCompositeComponent(E))throw Error(V(229));var ve=p[c],ne=new be;ne.target=E,ne.type=c.toLowerCase();var Ee=r(E),ze=new Cn(ve,Ee,ne,E);ze.persist(),t(ze,I),ve.phasedRegistrationNames?m(ze):D(ze),$.unstable_batchedUpdates(function(){w(E),se(ze)}),z()}}Te.Simulate={};for(var it in p)Te.Simulate[it]=En(it);function _n(c,E){return function(I,ve){var ne=new be(c);t(ne,ve),Te.isDOMComponent(I)?(I=N(I),ne.target=I,ee(E,1,document,ne)):I.tagName&&(ne.target=I,ee(E,1,document,ne))}}[["abort","abort"],[at,"animationEnd"],[F,"animationIteration"],[A,"animationStart"],["blur","blur"],["canplaythrough","canPlayThrough"],["canplay","canPlay"],["cancel","cancel"],["change","change"],["click","click"],["close","close"],["compositionend","compositionEnd"],["compositionstart","compositionStart"],["compositionupdate","compositionUpdate"],["contextmenu","contextMenu"],["copy","copy"],["cut","cut"],["dblclick","doubleClick"],["dragend","dragEnd"],["dragenter","dragEnter"],["dragexit","dragExit"],["dragleave","dragLeave"],["dragover","dragOver"],["dragstart","dragStart"],["drag","drag"],["drop","drop"],["durationchange","durationChange"],["emptied","emptied"],["encrypted","encrypted"],["ended","ended"],["error","error"],["focus","focus"],["input","input"],["keydown","keyDown"],["keypress","keyPress"],["keyup","keyUp"],["loadstart","loadStart"],["loadstart","loadStart"],["load","load"],["loadeddata","loadedData"],["loadedmetadata","loadedMetadata"],["mousedown","mouseDown"],["mousemove","mouseMove"],["mouseout","mouseOut"],["mouseover","mouseOver"],["mouseup","mouseUp"],["paste","paste"],["pause","pause"],["play","play"],["playing","playing"],["progress","progress"],["ratechange","rateChange"],["scroll","scroll"],["seeked","seeked"],["seeking","seeking"],["selectionchange","selectionChange"],["stalled","stalled"],["suspend","suspend"],["textInput","textInput"],["timeupdate","timeUpdate"],["toggle","toggle"],["touchcancel","touchCancel"],["touchend","touchEnd"],["touchmove","touchMove"],["touchstart","touchStart"],[B,"transitionEnd"],["volumechange","volumeChange"],["waiting","waiting"],["wheel","wheel"]].forEach(function(c){var E=c[1];Te.SimulateNative[E]=_n(E,c[0])}),G.exports=Te.default||Te}).call(this,e("hOG+")(wn))},F4QJ:function(wn,gn,e){"use strict";Object.defineProperty(gn,"__esModule",{value:!0}),gn.default=void 0;function G(){var le=R(e("q1tI"));return G=function(){return le},le}function t(){var le=e("dEAq");return t=function(){return le},le}function R(le){return le&&le.__esModule?le:{default:le}}function $(le,q){var Je=Object.keys(le);if(Object.getOwnPropertySymbols){var ge=Object.getOwnPropertySymbols(le);q&&(ge=ge.filter(function(pn){return Object.getOwnPropertyDescriptor(le,pn).enumerable})),Je.push.apply(Je,ge)}return Je}function me(le){for(var q=1;q<arguments.length;q++){var Je=arguments[q]!=null?arguments[q]:{};q%2?$(Object(Je),!0).forEach(function(ge){V(le,ge,Je[ge])}):Object.getOwnPropertyDescriptors?Object.defineProperties(le,Object.getOwnPropertyDescriptors(Je)):$(Object(Je)).forEach(function(ge){Object.defineProperty(le,ge,Object.getOwnPropertyDescriptor(Je,ge))})}return le}function V(le,q,Je){return q in le?Object.defineProperty(le,q,{value:Je,enumerable:!0,configurable:!0,writable:!0}):le[q]=Je,le}var dn=function(q,Je){var ge=[],pn=q.match.params.uuid,Cn=q.location.query.wrapper===void 0,en=Je[pn];if(en){var Ge=me(me({},en.previewerProps),{},{hideActions:(en.previewerProps.hideActions||[]).concat(["EXTERNAL"])});q.location.query.capture!==void 0&&(Ge.motions=(Ge.motions||[]).slice(),Ge.motions.unshift("autoplay"),Ge.motions.every(function(Xe){return!Xe.startsWith("capture")})&&Ge.motions.push("capture:[id|=root]")),Cn?ge=[G().default.createElement(function(){return(0,t().useMotions)(Ge.motions||[],document.documentElement),G().default.createElement("div",{},G().default.createElement(en.component))})]:ge=[Ge,G().default.createElement(en.component)]}return ge};gn.default=dn},JjdP:function(wn,gn,e){"use strict";e.r(gn);var G=e("9og8"),t=e("WmNS"),R=e.n(t),$=e("LtsZ"),me=`import React, { useRef } from 'react';
import { CardList, Search, TableContainer, useTable } from 'card-render';
import {
  PlusOutlined,
  EllipsisOutlined,
  SettingOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { Button } from 'antd';
import request from 'umi-request';

// \u53EF\u4EE5\u4F7F\u7528schema\u7F16\u8F91\u5668\u914D\u7F6E https://form-render.github.io/schema-generator/
const schema = {
  type: 'object',
  properties: {
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '25%',
    },
  },
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u72B6\u6001',
    dataIndex: 'state',
    enum: {
      open: '\u672A\u89E3\u51B3',
      closed: '\u5DF2\u89E3\u51B3',
    },
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: row => (
      <a
        href="https://x-render.gitee.io/form-render/"
        target="_blank"
        rel="noopener noreferrer"
      >
        \u67E5\u770B
      </a>
    ),
  },
];

const searchApi = params => {
  params.pageSize = 2;
  return request
    .get(
      'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/getCardList',
      { params }
    )
    .then(res => {
      console.log('response:', res);
      if (res && res.data) {
        return {
          rows: res.data,
          total: res.data.length,
          pageSize: res.data.pageSize || 2,
        }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
      }
    })
    .catch(e => console.log('Oops, error', e));
};

const searchArr = [
  {
    name: '\u6211\u7684\u6570\u636E',
    api: searchApi,
  },
  {
    name: '\u5168\u90E8\u6570\u636E',
    api: searchApi,
  },
];

// const cardRenderOptions = {
//   type: 'default',
//   header: {
//     title: 'title',
//     extra: (card, index) => (
//       <a
//         onClick={e => {
//           e.stopPropagation();
//         }}
//       >
//         action
//       </a>
//     ),
//   },
//   content: {
//     description: 'description',
//     list: ['creator', 'createTime'],
//     remark: 'remark',
//   },
// };

const cardRenderOptions = {
  type: 'image',
  cover: 'imgUrl',
  // cover: {
  //   dataIndex: 'imgUrl',
  //   width: 100,
  //   height: 100
  // },
  header: {
    title: (card, index) => card.title,
  },
  content: {
    description: (card, index) => card.description,
    // list: ['creator', 'createTime'],
    list: [
      {
        title: '\u521B\u5EFA\u4EBA',
        render: card => card.creator,
      },
      {
        title: '\u521B\u5EFA\u65F6\u95F4',
        dataIndex: 'createTime',
      },
    ],
    remark: 'remark',
  },
  footer: (card, idx) => [
    <SettingOutlined key="setting" />,
    <EditOutlined key="edit" />,
    <EllipsisOutlined key="ellipsis" />,
  ],
};

const Demo = () => {
  const tableRef = useRef();
  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <TableContainer ref={tableRef} searchApi={searchArr}>
        <Search schema={schema} />
        <CardList
          // onCardClick={(item, idx) => alert(JSON.stringify(item))}
          cardRender={cardRenderOptions}
          paginationOptions={{ size: 'small' }}
          toolbarRender={() => [
            <Button
              key="primary"
              type="primary"
              onClick={() => alert('table-render\uFF01')}
            >
              <PlusOutlined />
              \u521B\u5EFA
            </Button>,
          ]}
          toolbarAction
        />
      </TableContainer>
    </div>
  );
};

export default Demo;`,V=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = props => {
  const form = useForm();
  return <FormRender form={form} {...props} />;
};

export default Demo;`,dn=`export const delay = ms => new Promise(res => setTimeout(res, ms));

export const fakeApi = (url, data) => {
  console.group('request:', url);
  console.log('params:', data);
  console.groupEnd();
  return delay(500);
};`,le=`import React from 'react';
import FormRender, { useForm } from 'form-render';

const Demo = ({ schema }) => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
    </div>
  );
};

export default Demo;`,q=`export const basic = {
  labelWidth: 130,
  type: 'object',
  properties: {
    url: {
      title: 'url\u8F93\u5165\u6846',
      placeholder: '//www.taobao.com',
      type: 'string',
      format: 'url',
      required: true,
    },
    email: {
      title: 'email\u8F93\u5165\u6846',
      type: 'string',
      format: 'email',
    },
    string: {
      title: '\u6B63\u5219\u6821\u9A8C\u5B57\u7B26\u4E32',
      description: 'a-z',
      type: 'string',
      hidden: false,
      disabled: true,
    },
  },
};

export const expression = {
  type: 'object',
  properties: {
    input: {
      title: '{{formData.config.title || "\u8F93\u5165\u6846"}}',
      type: 'string',
      placeholder: '{{formData.config.placeholder}}',
      props: {
        size: '{{formData.config.size}}',
      },
      hidden: '{{formData.config.hidden === true}}',
      readOnly: '{{formData.config.readOnly === true}}',
      disabled: '{{formData.config.disabled === true}}',
    },
    rate: {
      title: 'rate',
      type: 'number',
      widget: 'rate',
    },
    config: {
      title: '\u914D\u7F6E',
      type: 'object',
      properties: {
        title: {
          title: 'title',
          type: 'string',
        },
        placeholder: {
          title: 'placeholder',
          type: 'string',
        },
        size: {
          title: 'input\u5927\u5C0F',
          type: 'string',
          enum: ['large', 'middle', 'small'],
          enumNames: ['\u5927', '\u4E2D', '\u5C0F'],
          widget: 'radio',
        },
        hidden: {
          title: '\u662F\u5426\u9690\u85CF',
          type: 'boolean',
        },
        readOnly: {
          title: '\u662F\u5426\u53EA\u8BFB',
          type: 'boolean',
        },
        disabled: {
          title: '\u662F\u5426\u7F6E\u7070',
          type: 'boolean',
        },
      },
    },
  },
  required: [],
};`,Je=`import React, { Component } from 'react';
// import GithubCorner from 'react-github-corner';
import Demo from './main';
import { Radio, Select, Switch, Slider } from 'antd';
import './index.css';

const Option = Select.Option;
class Root extends Component {
  state = {
    schemaName: 'simplest',
    column: 1,
    displayType: 'column',
    readOnly: false,
    labelWidth: 110,
  };

  onColumnNumberChange = value => {
    this.setState({ column: value });
  };

  onDisplayChange = value => {
    this.setState({
      displayType: value,
      showDescIcon: value === 'row',
    });
  };

  onReadOnlyChange = value => this.setState({ readOnly: value });

  onSchemaChange = e => {
    this.setState({ schemaName: e.target.value });
  };

  onLabelWidthChange = value => {
    this.setState({ labelWidth: value });
  };

  render() {
    const { showDescIcon, readOnly, labelWidth } = this.state;
    return (
      <div className="fr-playground">
        {/* <GithubCorner
          href="https://github.com/alibaba/form-render"
          bannerColor="#F6C14F"
          className="absolute top-0 right-0 z-999"
        /> */}
        {/* <a href="/" className="f6 absolute top-1 right-1 z-999">
          \u56DE\u4E3B\u9875
        </a> */}
        <div className="w-100 flex setting-container">
          <Radio.Group
            name="schemaName"
            defaultValue="simplest"
            className="w-50 flex items-center flex-wrap z-999"
            onChange={this.onSchemaChange}
          >
            <Radio value="simplest">\u6700\u7B80\u6837\u4F8B</Radio>
            <Radio value="basic">\u57FA\u7840\u63A7\u4EF6</Radio>
            <Radio value="format">\u6821\u9A8C</Radio>
            <Radio value="new-feature">\u65B0\u529F\u80FD</Radio>
            <Radio value="function">\u590D\u6742\u8054\u52A8</Radio>
            <Radio value="input">\u4E2A\u6027\u8F93\u5165\u6846</Radio>
            <Radio value="select">\u4E2A\u6027\u9009\u62E9\u6846</Radio>
            <Radio value="demo">\u5B8C\u6574\u4F8B\u5B50</Radio>
          </Radio.Group>
          <div className="w-50 flex items-center flex-wrap z-999">
            <Select
              style={{ marginRight: 8, marginLeft: 24 }}
              onChange={this.onColumnNumberChange}
              defaultValue="1"
            >
              <Option value="1">\u4E00\u884C\u4E00\u5217</Option>
              <Option value="2">\u4E00\u884C\u4E8C\u5217</Option>
              <Option value="3">\u4E00\u884C\u4E09\u5217</Option>
            </Select>
            <Select
              style={{ marginRight: 8 }}
              onChange={this.onDisplayChange}
              defaultValue="column"
            >
              <Option value="column">\u4E0A\u4E0B\u6392\u5217</Option>
              <Option value="row">\u5DE6\u53F3\u6392\u5217</Option>
            </Select>
            <Switch
              style={{ marginRight: 8 }}
              checkedChildren="\u7F16\u8F91"
              onChange={this.onReadOnlyChange}
              unCheckedChildren="\u53EA\u8BFB"
              checked={readOnly}
            />
            <div style={{ width: 70 }}>\u6807\u7B7E\u5BBD\u5EA6\uFF1A</div>
            <Slider
              style={{ width: 80 }}
              max={200}
              min={20}
              value={labelWidth}
              onChange={this.onLabelWidthChange}
            />
          </div>
        </div>
        <Demo {...this.state} />
      </div>
    );
  }
}

export default Root;`,ge=`import React, { useState, useEffect } from 'react';
import deepEqual from 'deep-equal';
import parseJson from 'json-parse-better-errors';
import FormRender, { useForm } from 'form-render';
import DefaultSchema from './json/simplest.json';
import { Tabs } from 'antd';
import AsyncSelect from './customized/AsyncSelect';
import CodeBlock from './monaco';
const { TabPane } = Tabs;

// help functions
const schema2str = obj => JSON.stringify(obj, null, 2) || '';

const Demo = ({ schemaName, theme, ...formProps }) => {
  const [schemaStr, set1] = useState(() => schema2str(DefaultSchema.schema));
  const [error, set2] = useState('');

  useEffect(() => {
    const schema = require(\`./json/\${schemaName}.json\`);
    set1(schema2str(schema.schema));
  }, [schemaName]);

  const tryParse = schemaStr => {
    let schema = {};
    try {
      schema = parseJson(schemaStr);
      if (typeof schema !== 'object') {
        set2('schema\u975E\u6B63\u786Ejson');
        return;
      }
      set2('');
      return schema;
    } catch (error) {
      set2(String(error));
    }
  };

  const handleCodeChange = schemaStr => {
    set1(schemaStr);
    tryParse(schemaStr);
  };

  let schema = {};
  try {
    schema = parseJson(schemaStr);
  } catch (error) {
    console.log(error);
  }

  const form = useForm();

  return (
    <div className="flex-auto flex">
      <div className="w-50 h-100 pl2 flex flex-column">
        <Tabs
          defaultActiveKey="1"
          onChange={() => {}}
          className="flex flex-column"
          style={{ overflow: 'auto' }}
        >
          <TabPane tab="Schema" key="1">
            <CodeBlock value={schemaStr} onChange={handleCodeChange} />
          </TabPane>
          <TabPane tab="Data" key="2">
            <CodeBlock value={schema2str(form.getValues())} readOnly />
          </TabPane>
        </Tabs>
      </div>
      <div className="w-50 h-100 flex flex-column pa2">
        <div
          className="h-100 overflow-auto pa3 pt4 flex-auto"
          style={{ borderLeft: '1px solid #ddd' }}
        >
          {error ? (
            <div>{error}</div>
          ) : (
            <FormRender
              form={form}
              schema={schema}
              {...formProps}
              widgets={{ asyncSelect: AsyncSelect }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;`,pn=`{
  "schema": {
    "type": "object",
    "properties": {
      "string": {
        "title": "\u5B57\u7B26\u4E32",
        "type": "string",
        "required": true
      },
      "select": {
        "title": "\u5355\u9009",
        "type": "string",
        "enum": ["a", "b", "c"],
        "enumNames": ["\u9009\u98791", "\u9009\u98792", "\u9009\u98793"],
        "widget": "radio"
      }
    }
  }
}`,Cn=`import { Select } from 'antd';
import jsonp from 'fetch-jsonp';
import querystring from 'querystring';
const { Option } = Select;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const str = querystring.encode({
      code: 'utf-8',
      q: value,
    });
    jsonp(\`https://suggest.taobao.com/sug?\${str}\`)
      .then(response => response.json())
      .then(d => {
        if (currentValue === value) {
          const { result } = d;
          const data = [];
          result.forEach(r => {
            data.push({
              value: r[0],
              text: r[0],
            });
          });
          callback(data);
        }
      });
  }

  timeout = setTimeout(fake, 300);
}

class SearchInput extends React.Component {
  state = {
    data: [],
  };

  handleSearch = value => {
    if (value) {
      fetch(value, data => this.setState({ data }));
    } else {
      this.setState({ data: [] });
    }
  };

  handleChange = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  render() {
    const { value, options: uiOptions } = this.props;
    const options = this.state.data.map(d => (
      <Option key={d.value}>{d.text}</Option>
    ));
    return (
      <Select
        {...uiOptions}
        style={{ width: '100%' }}
        showSearch
        value={value || undefined}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    );
  }
}

export default SearchInput;`,en=`import React from 'react';
import Editor from 'react-simple-code-editor';
import { languages, highlight } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import './theme.css';

const Demo = ({ value, onChange }) => {
  return (
    <Editor
      value={value}
      onValueChange={onChange}
      highlight={code => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 16,
      }}
    />
  );
};

export default Demo;`,Ge=`/* PrismJS 1.16.0
https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+graphql+jsx+regex */
/**
 * prism.js default theme for JavaScript, CSS and HTML
 * Based on dabblet (http://dabblet.com)
 * @author Lea Verou
 */

code[class*='language-'],
pre[class*='language-'] {
  color: black;
  background: none;
  text-shadow: 0 1px white;
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: 1em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
  text-shadow: none;
  background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
  text-shadow: none;
  background: #b3d4fc;
}

@media print {
  code[class*='language-'],
  pre[class*='language-'] {
    text-shadow: none;
  }
}

/* Code blocks */
pre[class*='language-'] {
  padding: 1em;
  margin: 0.5em 0;
  overflow: auto;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
  background: #f5f2f0;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #999;
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
  color: #905;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #690;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
  color: #9a6e3a;
  background: hsla(0, 0%, 100%, 0.5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
  color: #07a;
}

.token.function,
.token.class-name {
  color: #dd4a68;
}

.token.regex,
.token.important,
.token.variable {
  color: #e90;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}`,Xe=`.markdown p {
  color: #454d64 !important;
  font-size: 15px !important;
  line-height: 1.60625 !important;
}

.markdown ol,
.markdown ul {
  list-style: initial !important;
}

.hidden {
  display: none;
}

.npm__react-simple-code-editor__textarea {
  outline: none;
}

.b {
  font-weight: bold;
}

.pa0 {
  padding: 0;
}
.pa1 {
  padding: 0.25rem;
}
.pa2 {
  padding: 0.5rem;
}
.pa3 {
  padding: 1rem;
}
.pa4 {
  padding: 2rem;
}
.pa5 {
  padding: 4rem;
}
.pl0 {
  padding-left: 0;
}
.pt1 {
  padding-top: 0.25rem;
}
.pt2 {
  padding-top: 0.5rem;
}
.pt3 {
  padding-top: 1rem;
}
.pt4 {
  padding-top: 2rem;
}
.pt5 {
  padding-top: 4rem;
}
.pl2 {
  padding-left: 0.5rem;
}
.pb2 {
  padding-bottom: 0.5rem;
}
.overflow-auto {
  overflow: auto;
}
.h-100 {
  height: 100%;
}
.vh-100 {
  height: 100vh;
}
.relative {
  position: relative;
}
.absolute {
  position: absolute;
}
.top-0 {
  top: 0;
}
.right-0 {
  right: 0;
}
.w-50 {
  width: 50%;
}
.w-100 {
  width: 100%;
}
.flex {
  display: flex;
}
.flex-auto {
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
}
.flex-column {
  flex-direction: column;
}
.items-center {
  align-items: center;
}
.flex-wrap {
  flex-wrap: wrap;
}
.z-999 {
  z-index: 999;
}

.fr-playground {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  height: 100vh;
}

.fr-playground .setting-container {
  border-bottom: 1px solid #ccc;
  padding: 0 12px 12px;
}

.__dumi-default-previewer-demo {
  padding: 24px;
}`,$n=`import React from 'react';
import { Table, Search, TableProvider, useTable } from 'table-render';
import { Tag, Space, Menu, message, Tooltip, Button } from 'antd';
import { PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';
import request from 'umi-request';

const schema = {
  type: 'object',
  properties: {
    state: {
      title: '\u9152\u5E97\u72B6\u6001',
      type: 'string',
      enum: ['open', 'closed'],
      enumNames: ['\u8425\u4E1A\u4E2D', '\u5DF2\u6253\u70CA'],
      'ui:width': '25%',
      widget: 'select',
    },
    labels: {
      title: '\u9152\u5E97\u661F\u7EA7',
      type: 'string',
      width: '25%',
    },
    created_at: {
      title: '\u6210\u7ACB\u65F6\u95F4',
      type: 'string',
      format: 'date',
      width: '25%',
    },
  },
  'ui:labelWidth': 80,
};

const Demo = () => {
  return (
    <TableProvider>
      <TableBody />
    </TableProvider>
  );
};

const TableBody = () => {
  const { refresh, tableState }: any = useTable();

  const searchApi = params => {
    console.log('params >>> ', params);
    return request
      .get(
        'https://www.fastmock.site/mock/62ab96ff94bc013592db1f67667e9c76/getTableList/api/basic',
        { params }
      )
      .then(res => {
        // console.log('response:', res);
        if (res && res.data) {
          return {
            rows: res.data,
            total: res.data.length,
            extraData: res.status,
          }; // \u6CE8\u610F\u4E00\u5B9A\u8981\u8FD4\u56DE rows \u548C total
        }
      })
      .catch(e => console.log('Oops, error', e));
  };

  // \u914D\u7F6E\u5B8C\u5168\u900F\u4F20antd table
  const columns = [
    {
      title: '\u9152\u5E97\u540D\u79F0',
      dataIndex: 'title',
      valueType: 'text',
      width: '20%',
    },
    {
      title: '\u9152\u5E97\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      copyable: true,
      valueType: 'text',
      width: '25%',
    },
    {
      title: (
        <>
          \u9152\u5E97\u72B6\u6001
          <Tooltip placement="top" title="\u4F7F\u7528valueType">
            <InfoCircleOutlined style={{ marginLeft: 6 }} />
          </Tooltip>
        </>
      ),
      enum: {
        open: '\u8425\u4E1A\u4E2D',
        closed: '\u5DF2\u6253\u70CA',
      },
      dataIndex: 'state',
    },
    {
      title: '\u9152\u5E97\u661F\u7EA7',
      dataIndex: 'labels',
      render: (_, row) => (
        <Space>
          {row.labels.map(({ name, color }) => (
            <Tag color={color} key={name}>
              {name}
            </Tag>
          ))}
        </Space>
      ),
    },

    {
      title: '\u9152\u5E97GMV',
      key: 'money',
      dataIndex: 'money',
      valueType: 'money',
    },
    {
      title: '\u6210\u7ACB\u65F6\u95F4',
      key: 'created_at',
      dataIndex: 'created_at',
      valueType: 'date',
    },
    {
      title: '\u64CD\u4F5C',
      render: row => (
        <Space>
          <a target="_blank" key="1">
            <div
              onClick={() => {
                message.success('\u9884\u8BA2\u6210\u529F');
              }}
            >
              \u9884\u8BA2
            </div>
          </a>
        </Space>
      ),
    },
  ];

  const menu = (
    <Menu>
      <Menu.Item>
        <div onClick={() => message.success('\u590D\u5236\u6210\u529F\uFF01')}>\u590D\u5236</div>
      </Menu.Item>
      <Menu.Item>
        <div onClick={() => message.warning('\u786E\u5B9A\u5220\u9664\u5417\uFF1F')}>\u5220\u9664</div>
      </Menu.Item>
    </Menu>
  );

  const showData = () => {
    refresh(null, { extra: 1 });
  };

  return (
    <div style={{ background: 'rgb(245,245,245)' }}>
      <Search
        schema={schema}
        displayType="row"
        onSearch={search => console.log('onSearch', search)}
        afterSearch={params => console.log('afterSearch', params)}
        api={[
          {
            name: '\u5168\u90E8\u6570\u636E',
            api: searchApi,
          },
          {
            name: '\u6211\u7684\u6570\u636E',
            api: searchApi,
          },
        ]}
      />
      <Table
        // size="small"
        columns={columns}
        // headerTitle="\u9AD8\u7EA7\u8868\u5355"
        rowKey="id"
        toolbarRender={() => [
          <Button key="show" onClick={showData}>
            \u67E5\u770B\u65E5\u5FD7
          </Button>,
          <Button key="out" onClick={showData}>
            \u5BFC\u51FA\u6570\u636E
          </Button>,
          <Button
            key="primary"
            type="primary"
            onClick={() => alert('table-render\uFF01')}
          >
            <PlusOutlined />
            \u521B\u5EFA
          </Button>,
        ]}
        toolbarAction
      />
    </div>
  );
};

export default Demo;`,Wn=`import React, { useState, useRef } from 'react';
import Generator from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const templates = [
  {
    text: '\u6A21\u677F1',
    name: 'something',
    schema: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        inputName: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
        },
        selectName: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
        dateName: {
          title: '\u65F6\u95F4\u9009\u62E9',
          type: 'string',
          format: 'date',
        },
      },
    },
  },
];

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator ref={genRef} defaultValue={schema} templates={templates} />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

export default Demo;`,Dn=`import React, { useState, useRef } from 'react';
import Generator, { fromFormily, toFormily } from 'fr-generator';
import { Button, Modal, Input } from 'antd';
const { TextArea } = Input;

const defaultValue = {
  type: 'object',
  properties: {
    array: {
      key: 'array',
      type: 'array',
      name: 'array',
      title: 'Name',
      'x-component': 'arraytable',
      items: {
        type: 'object',
        properties: {
          aa: {
            key: 'aa',
            type: 'string',
            name: 'aa',
            title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
            enum: [
              {
                label: '\u663E\u793A',
                value: true,
              },
              {
                label: '\u9690\u85CF',
                value: false,
              },
            ],
            'x-component': 'input',
          },
          bb: {
            key: 'bb',
            type: 'string',
            name: 'bb',
            title: 'BB',
            'x-component': 'input',
          },
        },
      },
    },
    cc: {
      key: 'cc',
      type: 'string',
      name: 'cc',
      title: 'CC',
      'x-component': 'input',
      'x-component-props': { min: 1 },
    },
  },
};

const Demo = () => {
  const [show, setShow] = useState(false);
  const [schema, setSchema] = useState(() => defaultValue);
  const genRef = useRef(); // class\u7EC4\u4EF6\u7528 React.createRef()

  const toggle = () => setShow(o => !o);

  const handleOk = () => {
    const value = genRef.current && genRef.current.getValue();
    setSchema(value);
    toggle();
  };

  return (
    <div>
      <Button type="primary" onClick={toggle} style={{ marginBottom: 12 }}>
        \u914D\u7F6Eschema
      </Button>
      <Modal
        visible={show}
        onCancel={toggle}
        onOk={handleOk}
        okText="\u4FDD\u5B58"
        cancelText="\u5173\u95ED"
        width="90%"
        bodyStyle={{ height: '70vh' }}
      >
        <Generator
          ref={genRef}
          defaultValue={schema}
          transformer={{
            from: fromFormily,
            to: toFormily,
          }}
        />
      </Modal>
      <TextArea
        autoSize
        value={JSON.stringify(schema, null, 2)}
        onChange={() => {}}
      />
    </div>
  );
};

// const b = {
//   schema: {
//     type: 'object',
//     properties: {
//       array: {
//         type: 'array',
//         title: 'Name',
//         items: {
//           type: 'object',
//           properties: {
//             aa: {
//               type: 'string',
//               title: '\u63A7\u5236\u76F8\u90BB\u5B57\u6BB5\u663E\u793A\u9690\u85CF',
//               enum: [true, false],
//               'ui:widget': 'input',
//               enumNames: ['\u663E\u793A', '\u9690\u85CF'],
//             },
//             bb: { type: 'string', title: 'BB', 'ui:widget': 'input' },
//           },
//         },
//       },
//       cc: {
//         type: 'string',
//         title: 'CC',
//         'ui:widget': 'input',
//         'ui:options': { min: 1 },
//       },
//     },
//   },
// };

// console.log(toFormily(b));

export default Demo;`,we=`import React from 'react';
import Generator, {
  defaultSettings,
  defaultCommonSettings,
  defaultGlobalSettings,
} from 'fr-generator';

const NewWidget = ({ value = 0, onChange }) => (
  <button onClick={() => onChange(value + 1)}>{value}</button>
);

const Demo = () => {
  console.log(defaultSettings, defaultCommonSettings, defaultGlobalSettings);

  return (
    <div style={{ height: '50vh' }}>
      <Generator
        widgets={{ NewWidget }}
        settings={[
          {
            title: '\u4E2A\u4EBA\u4FE1\u606F',
            widgets: [
              {
                text: '\u670D\u52A1\u7AEF\u4E0B\u62C9\u9009\u6846',
                name: 'asyncSelect',
                schema: {
                  title: '\u6765\u81EA\u670D\u52A1\u7AEF',
                  type: 'string',
                  'ui:widget': 'NewWidget',
                },
                widget: 'NewWidget',
                setting: {
                  api: { title: 'api', type: 'string' },
                },
              },
              {
                text: 'object',
                name: 'object',
                schema: {
                  title: '\u5BF9\u8C61',
                  type: 'object',
                  properties: {},
                },
                widget: 'map',
                setting: {},
              },
              {
                text: '\u59D3\u540D',
                name: 'name',
                schema: {
                  title: '\u8F93\u5165\u6846',
                  type: 'string',
                },
                setting: {
                  maxLength: { title: '\u6700\u957F\u5B57\u6570', type: 'number' },
                },
              },
            ],
          },
        ]}
        commonSettings={{
          description: {
            title: '\u81EA\u5B9A\u4E49\u5171\u901A\u7528\u7684\u5165\u53C2',
            type: 'string',
          },
        }}
      />
    </div>
  );
};

export default Demo;`,qn=`import React, { useState, useRef } from 'react';
import { useHistory } from 'umi';
import Generator, { toFormily, fromFormily } from 'fr-generator';
import './index.less';

const Demo = () => {
  const ref = useRef();
  const { location, replace } = useHistory();
  const [isFormily, setIsFormily] = useState(location.query.type === 'formily');

  const goToFrPlayground = () => {
    ref.current.copyValue();
    window.open('/playground');
  };

  const switchMode = () => {
    if (isFormily) {
      setIsFormily(false);
      replace('/tools/generator/playground');
    } else {
      setIsFormily(true);
      replace('/tools/generator/playground?type=formily');
    }
  };

  return (
    <div className="fr-generator-playground" style={{ height: '80vh' }}>
      <Generator
        ref={ref}
        transformer={isFormily && { to: toFormily, from: fromFormily }}
        extraButtons={[
          { text: '\u53BBplayground\u9A8C\u8BC1', onClick: goToFrPlayground },
          {
            text: 'Formily',
            shape: 'round',
            type: isFormily && 'primary',
            onClick: switchMode,
          }
        ]}
        onChange={data => console.log('data:change', data)}
        onSchemaChange={schema => console.log('schema:change', schema)}
      />
    </div>
  );
};

export default Demo;`,Vn=`.fr-generator-playground {
  margin: 0 -24px;

  .hide-demo {
    display: none;
  }
}`,at=gn.default={"guide-card":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"oLxE"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:me}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"card-render":{version:"0.1.2"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"0.x"}},identifier:"guide-card"}},"chart-render-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l;return R.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return i=function(j,s){if(!s&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=P(s);if(N&&N.has(j))return N.get(j);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in j)if(p!=="default"&&Object.prototype.hasOwnProperty.call(j,p)){var m=r?Object.getOwnPropertyDescriptor(j,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=j[p]}return d.default=j,N&&N.set(j,d),d},P=function(j){if(typeof WeakMap!="function")return null;var s=new WeakMap,N=new WeakMap;return(P=function(r){return r?N:s})(j)},f=e("K+nK"),T.t0=f,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=i,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return C=T.sent,l=function(){var j=(0,g.useState)("Line"),s=(0,o.default)(j,2),N=s[0],d=s[1],r={Line:C.Line,Column:C.Column,PivotTable:C.PivotTable}[N];return g.default.createElement("div",null,g.default.createElement("div",{style:{marginBottom:10}},g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Line")}},"\u6298\u7EBF\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("Column")}},"\u67F1\u72B6\u56FE"),g.default.createElement("button",{style:{marginRight:10},className:"ant-btn ant-btn-primary",onClick:function(){return d("PivotTable")}},"\u4EA4\u53C9\u8868")),g.default.createElement(r,{meta:[{id:"date",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF",isDim:!1},{id:"uv",name:"\u8BBF\u5BA2\u6570",isDim:!1}],data:[{date:"20200101",pv:100,uv:50},{date:"20200102",pv:120,uv:60},{date:"20200103",pv:140,uv:70},{date:"20200104",pv:160,uv:80}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Line, Column, PivotTable, } from 'chart-render';

export default () => {
  const [component, setComponent] = useState('Line');
  const ChartRender = { Line, Column, PivotTable }[component];

  return (
    <div>
      <div style={{ marginBottom: 10 }}>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Line')}
        >
          \u6298\u7EBF\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('Column')}
        >
          \u67F1\u72B6\u56FE
        </button>
        <button
          style={{ marginRight: 10 }}
          className="ant-btn ant-btn-primary"
          onClick={() => setComponent('PivotTable')}
        >
          \u4EA4\u53C9\u8868
        </button>
      </div>
      
      <ChartRender
        meta={[
          { id: 'date', name: '\u65E5\u671F', isDim: true },
          { id: 'pv', name: '\u8BBF\u95EE\u91CF', isDim: false },
          { id: 'uv', name: '\u8BBF\u5BA2\u6570', isDim: false },
        ]}
        data={[
          { date: '20200101', pv: 100, uv: 50 },
          { date: '20200102', pv: 120, uv: 60 },
          { date: '20200103', pv: 140, uv: 70 },
          { date: '20200104', pv: 160, uv: 80 },
        ]}
      />
      
    </div>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"chart-render-demo"}},"column-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{pv:50,uv:20}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { pv: 50, uv: 20 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo"}},"column-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-1"}},"column-demo-2":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-2"}},"column-demo-3":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-3"}},"column-demo-4":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Column,{inverted:!0,label:{position:"middle",layout:[{type:"interval-adjust-position"},{type:"interval-hide-overlap"},{type:"adjust-color"}]},meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Column } from 'chart-render';

export default () => (
  <Column
    inverted
    label={{
      position: 'middle',
      layout: [
        { type: 'interval-adjust-position' },
        { type: 'interval-hide-overlap' },
        { type: 'adjust-color' },
      ],
    }}
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"column-demo-4"}},"line-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",uv:20},{ds:"2021-01-01",uv:21},{ds:"2021-01-02",uv:15},{ds:"2021-01-03",uv:40},{ds:"2021-01-04",uv:31},{ds:"2021-01-05",uv:32},{ds:"2021-01-06",uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", uv: 20 },
      { ds: "2021-01-01", uv: 21 },
      { ds: "2021-01-02", uv: 15 },
      { ds: "2021-01-03", uv: 40 },
      { ds: "2021-01-04", uv: 31 },
      { ds: "2021-01-05", uv: 32 },
      { ds: "2021-01-06", uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo"}},"line-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20},{ds:"2020-12-31",page:"\u9996\u9875",uv:120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21},{ds:"2021-01-01",page:"\u9996\u9875",uv:121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15},{ds:"2021-01-02",page:"\u9996\u9875",uv:115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40},{ds:"2021-01-03",page:"\u9996\u9875",uv:140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31},{ds:"2021-01-04",page:"\u9996\u9875",uv:131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32},{ds:"2021-01-05",page:"\u9996\u9875",uv:132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30},{ds:"2021-01-06",page:"\u9996\u9875",uv:130}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-1"}},"line-demo-2":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"page",name:"\u9875\u9762\u540D\u79F0",isDim:!0},{id:"uv",name:"\u8BBF\u5BA2\u6570"},{id:"pv",name:"\u8BBF\u95EE\u91CF"}],data:[{ds:"2020-12-31",page:"\u767B\u5F55\u9875",uv:20,pv:120},{ds:"2020-12-31",page:"\u9996\u9875",uv:120,pv:1120},{ds:"2021-01-01",page:"\u767B\u5F55\u9875",uv:21,pv:121},{ds:"2021-01-01",page:"\u9996\u9875",uv:121,pv:1121},{ds:"2021-01-02",page:"\u767B\u5F55\u9875",uv:15,pv:115},{ds:"2021-01-02",page:"\u9996\u9875",uv:115,pv:1115},{ds:"2021-01-03",page:"\u767B\u5F55\u9875",uv:40,pv:140},{ds:"2021-01-03",page:"\u9996\u9875",uv:140,pv:1140},{ds:"2021-01-04",page:"\u767B\u5F55\u9875",uv:31,pv:131},{ds:"2021-01-04",page:"\u9996\u9875",uv:131,pv:1131},{ds:"2021-01-05",page:"\u767B\u5F55\u9875",uv:32,pv:132},{ds:"2021-01-05",page:"\u9996\u9875",uv:132,pv:1132},{ds:"2021-01-06",page:"\u767B\u5F55\u9875",uv:30,pv:130},{ds:"2021-01-06",page:"\u9996\u9875",uv:130,pv:1130}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", isDim: true },
      { id: "page", name: "\u9875\u9762\u540D\u79F0", isDim: true },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
    ]}
    data={[
      { ds: "2020-12-31", page: "\u767B\u5F55\u9875", uv: 20, pv: 120 },
      { ds: "2020-12-31", page: "\u9996\u9875", uv: 120, pv: 1120 },
      { ds: "2021-01-01", page: "\u767B\u5F55\u9875", uv: 21, pv: 121 },
      { ds: "2021-01-01", page: "\u9996\u9875", uv: 121, pv: 1121 },
      { ds: "2021-01-02", page: "\u767B\u5F55\u9875", uv: 15, pv: 115 },
      { ds: "2021-01-02", page: "\u9996\u9875", uv: 115, pv: 1115 },
      { ds: "2021-01-03", page: "\u767B\u5F55\u9875", uv: 40, pv: 140 },
      { ds: "2021-01-03", page: "\u9996\u9875", uv: 140, pv: 1140 },
      { ds: "2021-01-04", page: "\u767B\u5F55\u9875", uv: 31, pv: 131 },
      { ds: "2021-01-04", page: "\u9996\u9875", uv: 131, pv: 1131 },
      { ds: "2021-01-05", page: "\u767B\u5F55\u9875", uv: 32, pv: 132 },
      { ds: "2021-01-05", page: "\u9996\u9875", uv: 132, pv: 1132 },
      { ds: "2021-01-06", page: "\u767B\u5F55\u9875", uv: 30, pv: 130 },
      { ds: "2021-01-06", page: "\u9996\u9875", uv: 130, pv: 1130 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-2"}},"line-demo-3":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-3"}},"line-demo-4":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.Line,{withArea:!0,isStack:!0,isPercent:!0,meta:[{id:"ds",name:"\u65E5\u671F",isDim:!0},{id:"pv",name:"\u8BBF\u95EE\u91CF"},{id:"uv",name:"\u8BBF\u5BA2\u6570"}],data:[{ds:"2020-12-31",pv:50,uv:20},{ds:"2021-01-01",pv:76,uv:21},{ds:"2021-01-02",pv:46,uv:15},{ds:"2021-01-03",pv:89,uv:40},{ds:"2021-01-04",pv:66,uv:31},{ds:"2021-01-05",pv:46,uv:32},{ds:"2021-01-06",pv:45,uv:30}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Line } from 'chart-render';

export default () => (
  <Line
    withArea // \u5F00\u542F\u9762\u79EF\u56FE
    isStack // \u5806\u53E0\u5C55\u793A
    isPercent // \u767E\u5206\u6BD4\u9762\u79EF\u56FE
    meta={[
      { id: "ds", name: "\u65E5\u671F", "isDim": true },
      { id: "pv", name: "\u8BBF\u95EE\u91CF" },
      { id: "uv", name: "\u8BBF\u5BA2\u6570" }
    ]}
    data={[
      { ds: "2020-12-31", pv: 50, uv: 20 },
      { ds: "2021-01-01", pv: 76, uv: 21 },
      { ds: "2021-01-02", pv: 46, uv: 15 },
      { ds: "2021-01-03", pv: 89, uv: 40 },
      { ds: "2021-01-04", pv: 66, uv: 31 },
      { ds: "2021-01-05", pv: 46, uv: 32 },
      { ds: "2021-01-06", pv: 45, uv: 30 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"line-demo-4"}},"pivot-table-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo"}},"pivot-table-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C;return R.a.wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return f=e("K+nK"),i.t0=f,i.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return i.t1=i.sent,o=(0,i.t0)(i.t1),i.next=8,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 8:return g=i.sent,C=function(){return o.default.createElement(g.PivotTable,{style:{maxHeight:400,overflow:"auto"},cellRender:function(T,M,j){return o.default.createElement("div",null,o.default.createElement("p",null,"\u53C2\u6570\u8868\uFF1A"),o.default.createElement("p",{style:{color:["red","orange","yellow","green","blue"][Object.keys(M).length]}},T),o.default.createElement("p",null,JSON.stringify(M)),o.default.createElement("p",null,JSON.stringify(j)))},meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]})},i.abrupt("return",C);case 11:case"end":return i.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { PivotTable } from 'chart-render';

export default () => (
  <PivotTable
    style={{ maxHeight: 400, overflow: 'auto' }}
    cellRender={(val, dimRecord, indId) => (
      <div>
        <p>\u53C2\u6570\u8868\uFF1A</p>
        <p style={{
          color: ['red', 'orange', 'yellow', 'green', 'blue'][Object.keys(dimRecord).length],
        }}>{val}</p>
        <p>{JSON.stringify(dimRecord)}</p>
        <p>{JSON.stringify(indId)}</p>
      </div>
    )}
    meta={[
      { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
      { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
      { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
      { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
      { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
      { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
    ]}
    data={[
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
      { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
      { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
    ]}
  />
);`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-1"}},"pivot-table-demo-2":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l;return R.a.wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return i=function(j,s){if(!s&&j&&j.__esModule)return j;if(j===null||typeof j!="object"&&typeof j!="function")return{default:j};var N=P(s);if(N&&N.has(j))return N.get(j);var d={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var p in j)if(p!=="default"&&Object.prototype.hasOwnProperty.call(j,p)){var m=r?Object.getOwnPropertyDescriptor(j,p):null;m&&(m.get||m.set)?Object.defineProperty(d,p,m):d[p]=j[p]}return d.default=j,N&&N.set(j,d),d},P=function(j){if(typeof WeakMap!="function")return null;var s=new WeakMap,N=new WeakMap;return(P=function(r){return r?N:s})(j)},f=e("K+nK"),T.t0=f,T.next=6,Promise.resolve().then(e.bind(null,"tJVT"));case 6:return T.t1=T.sent,o=(0,T.t0)(T.t1),T.t2=i,T.next=11,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 11:return T.t3=T.sent,g=(0,T.t2)(T.t3),T.next=15,Promise.all([e.e(0),e.e(2),e.e(6),e.e(7)]).then(e.bind(null,"36SN"));case 15:return C=T.sent,l=function(){var j=(0,g.useState)(!1),s=(0,o.default)(j,2),N=s[0],d=s[1];return g.default.createElement(g.default.Fragment,null,g.default.createElement("label",null,"\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A",g.default.createElement("input",{type:"checkbox",value:N,onChange:function(){return d(!N)}})),g.default.createElement(C.PivotTable,{leftExpandable:N,showSubtotal:!1,meta:[{id:"subs",name:"\u5B50\u516C\u53F8",isDim:!0,isRate:!1},{id:"shop",name:"\u95E8\u5E97",isDim:!0,isRate:!1},{id:"season",name:"\u5B63\u5EA6",isDim:!0,isRate:!1},{id:"month",name:"\u6708\u4EFD",isDim:!0,isRate:!1},{id:"valueA",name:"\u6307\u6807A",isDim:!1,isRate:!1},{id:"valueB",name:"\u6307\u6807B",isDim:!1,isRate:!0}],data:[{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:782,valueB:.566},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:856,valueB:.403},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:886,valueB:.555},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:555,valueB:.444},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u5927\u5B81\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:444,valueB:.333},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:922,valueB:.778},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:888,valueB:.887},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:879,valueB:.87},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:800,valueB:.723},{subs:"\u4E0A\u6D77\u5B50\u516C\u53F8",shop:"\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:813,valueB:.789},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-01",valueA:500,valueB:.463},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-02",valueA:833,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E00\u5B63\u5EA6",month:"2022-03",valueA:821,valueB:.442},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-04",valueA:834,valueB:.456},{subs:"\u6D59\u6C5F\u5B50\u516C\u53F8",shop:"\u4EB2\u6A59\u91CC",season:"\u4E8C\u5B63\u5EA6",month:"2022-05",valueA:803,valueB:.7}]}))},T.abrupt("return",l);case 18:case"end":return T.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { PivotTable } from 'chart-render';

export default () => {
  const [expandable, setExpandable] = useState(false);

  return (
    <>
      <label>\u53EF\u5C55\u5F00/\u6536\u7F29\uFF1A<input type="checkbox" value={expandable} onChange={() => setExpandable(!expandable)} /></label>
      <PivotTable
        leftExpandable={expandable}
        showSubtotal={false}
        meta={[
          { id: 'subs', name: '\u5B50\u516C\u53F8', isDim: true, isRate: false },
          { id: 'shop', name: '\u95E8\u5E97', isDim: true, isRate: false },
          { id: 'season', name: '\u5B63\u5EA6', isDim: true, isRate: false },
          { id: 'month', name: '\u6708\u4EFD', isDim: true, isRate: false },
          { id: 'valueA', name: '\u6307\u6807A', isDim: false, isRate: false },
          { id: 'valueB', name: '\u6307\u6807B', isDim: false, isRate: true },
        ]}
        data={[
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 782, valueB: 0.566 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 856, valueB: 0.403 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 886, valueB: 0.555 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 555, valueB: 0.444 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u5927\u5B81\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 444, valueB: 0.333 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 922, valueB: 0.778 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 888, valueB: 0.887 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 879, valueB: 0.870 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 800, valueB: 0.723 },
          { subs: '\u4E0A\u6D77\u5B50\u516C\u53F8', shop: '\u4E0A\u6D77\u66F9\u5BB6\u6E21\u5E97', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 813, valueB: 0.789 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-01', valueA: 500, valueB: 0.463 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-02', valueA: 833, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E00\u5B63\u5EA6', month: '2022-03', valueA: 821, valueB: 0.442 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-04', valueA: 834, valueB: 0.456 },
          { subs: '\u6D59\u6C5F\u5B50\u516C\u53F8', shop: '\u4EB2\u6A59\u91CC', season: '\u4E8C\u5B63\u5EA6', month: '2022-05', valueA: 803, valueB: 0.700 },
        ]}
      />
    </>
  );
};`}},dependencies:{react:{version:">=16.8.0"},"chart-render":{version:"0.1.9"}},transform:!0,defaultShowCode:!0,identifier:"pivot-table-demo-2"}},"form-render-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M,j,s,N,d;return R.a.wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return j=function(D,w){if(!w&&D&&D.__esModule)return D;if(D===null||typeof D!="object"&&typeof D!="function")return{default:D};var z=M(w);if(z&&z.has(D))return z.get(D);var ee={},se=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var be in D)if(be!=="default"&&Object.prototype.hasOwnProperty.call(D,be)){var yn=se?Object.getOwnPropertyDescriptor(D,be):null;yn&&(yn.get||yn.set)?Object.defineProperty(ee,be,yn):ee[be]=D[be]}return ee.default=D,z&&z.set(D,ee),ee},M=function(D){if(typeof WeakMap!="function")return null;var w=new WeakMap,z=new WeakMap;return(M=function(se){return se?z:w})(D)},f=e("K+nK"),p.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return p.t0=f,p.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return p.t1=p.sent,o=(0,p.t0)(p.t1),p.t2=f,p.next=13,e.e(62).then(e.bind(null,"fWQN"));case 13:return p.t3=p.sent,g=(0,p.t2)(p.t3),p.t4=f,p.next=18,e.e(63).then(e.bind(null,"mtLc"));case 18:return p.t5=p.sent,C=(0,p.t4)(p.t5),p.t6=f,p.next=23,e.e(65).then(e.bind(null,"yKVA"));case 23:return p.t7=p.sent,P=(0,p.t6)(p.t7),p.t8=f,p.next=28,e.e(59).then(e.bind(null,"879j"));case 28:return p.t9=p.sent,i=(0,p.t8)(p.t9),p.t10=f,p.next=33,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 33:return p.t11=p.sent,l=(0,p.t10)(p.t11),p.next=37,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 37:return y=p.sent,p.t12=j,p.next=41,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 41:return p.t13=p.sent,T=(0,p.t12)(p.t13),s={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},N=function(m){(0,P.default)(w,m);var D=(0,i.default)(w);function w(){return(0,g.default)(this,w),D.apply(this,arguments)}return(0,C.default)(w,[{key:"render",value:function(){var ee=this.props.form;return l.default.createElement("div",null,l.default.createElement(T.default,{form:ee,schema:s}),l.default.createElement(o.default,{type:"primary",onClick:ee.submit},"\u63D0\u4EA4"))}}]),w}(l.default.Component),d=(0,T.connectForm)(N),p.abrupt("return",d);case 47:case"end":return p.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { connectForm } from 'form-render';
// import 'antd/dist/antd.css';    \u5982\u679C\u9879\u76EE\u6CA1\u6709\u5BF9antd\u3001less\u505A\u4EFB\u4F55\u914D\u7F6E\u7684\u8BDD\uFF0C\u9700\u8981\u52A0\u4E0A

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

class Demo extends React.Component {
  render() {
    const { form } = this.props;
    return (
      <div>
        <FormRender form={form} schema={schema} />
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4
        </Button>
      </div>
    );
  }
}

export default connectForm(Demo);`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo"}},"form-render-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(D){return D?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,P=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},T=function(){var d=(0,P.useForm)();return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},M=T,s.abrupt("return",M);case 27:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();
  return (
    <div>
      <FormRender form={form} schema={schema} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-render-demo-1"}},"form-render-demo-2":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(D){return D?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=f,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,P=(0,s.t4)(s.t5),y={displayType:"row",labelWidth:60,type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F",type:"range",format:"date"},siteUrl:{title:"\u7F51\u5740",type:"string",placeholder:"\u6B64\u5904\u5FC5\u586B",required:!0,props:{addonBefore:"https://",addonAfter:".com"}}}},T=function(){var d=(0,P.useForm)(),r=function(m,D){D.length>0?alert("errors:"+JSON.stringify(D)):alert("formData:"+JSON.stringify(m,null,2))};return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y,onFinish:r}),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},M=T,s.abrupt("return",M);case 27:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  displayType: 'row',
  labelWidth: 60,
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    siteUrl: {
      title: '\u7F51\u5740',
      type: 'string',
      placeholder: '\u6B64\u5904\u5FC5\u586B',
      required: true,
      props: {
        addonBefore: 'https://',
        addonAfter: '.com',
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errors) => {
    if (errors.length > 0) {
      alert('errors:' + JSON.stringify(errors));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  return (
    <div>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"form-render-demo-2"}},"migrate-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y;return R.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return l=function(){var s=(0,g.useForm)(),N=function(r,p){p.length>0?alert("\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A".concat(JSON.stringify(p))):alert(JSON.stringify(r))};return o.default.createElement("div",null,o.default.createElement(g.default,{form:s,schema:i,onFinish:N}),o.default.createElement("button",{onClick:s.submit},"\u63D0\u4EA4"))},P=function(s,N){if(!N&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=C(N);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var D=p?Object.getOwnPropertyDescriptor(s,m):null;D&&(D.get||D.set)?Object.defineProperty(r,m,D):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},C=function(s){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:N})(s)},f=e("K+nK"),M.t0=f,M.next=7,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 7:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=P,M.next=12,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 12:return M.t3=M.sent,g=(0,M.t2)(M.t3),i={type:"object",properties:{string:{title:"\u5B57\u7B26\u4E32",type:"string",required:!0}}},y=l,M.abrupt("return",y);case 17:case"end":return M.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render'; // 1. \u6539 import

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u5B57\u7B26\u4E32',
      type: 'string',
      required: true,
    },
  },
};

function Demo() {
  const form = useForm(); // 2. \u83B7\u53D6 form \u5B9E\u4F8B\uFF0C\u73B0\u5728\u6240\u6709\u8868\u5355\u65B9\u6CD5\u90FD\u6302\u5728\u4E0A\u9762
  // 3 onSubmit \u7684\u5165\u53C2
  const onSubmit = (formData, valid) => {
    if (valid.length > 0) {
      alert(\`\u6821\u9A8C\u672A\u901A\u8FC7\u5B57\u6BB5\uFF1A\${JSON.stringify(valid)}\`);
    } else {
      alert(JSON.stringify(formData));
    }
  };
  return (
    <div>
      <FormRender
        form={form} // 4 \u8865\u4E0A
        schema={schema}
        onFinish={onSubmit} // 5. \u8865\u4E0A
        // formData={formData} // 6. \u5E72\u6389
        // onChange={setData}
        // onValidate={setValid}
      />
      <button onClick={form.submit}>\u63D0\u4EA4</button>
    </div>
  );
}
export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"migrate-demo"}},"display-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C=function(T){return{type:"object",displayType:T,properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},objectName:{title:"\u5BF9\u8C61",bind:"obj",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return o.default.createElement("div",null,o.default.createElement("h2",null,"display: row"),o.default.createElement(g.default,{schema:C("row")}),o.default.createElement("h2",null,"display: column"),o.default.createElement(g.default,{schema:C("column")}))},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = displayType => ({
  type: 'object',
  displayType: displayType,
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    objectName: {
      title: '\u5BF9\u8C61',
      bind: 'obj',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          required: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
        },
      },
    },
  },
});

export default () => (
  <div>
    <h2>display: row</h2>
    <Form schema={schema('row')} />
    <h2>display: column</h2>
    <Form schema={schema('column')} />
  </div>
);`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo"}},"display-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"inline",properties:{range1:{title:"\u65E5\u671F",type:"range",format:"date"},input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},P=function(){return o.default.createElement(g.default,{schema:C})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'inline',
  properties: {
    range1: {
      title: '\u65E5\u671F',
      type: 'range',
      format: 'date',
    },
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

export default () => <Form schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-1"}},"display-demo-2":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0},check:{title:"box",type:"boolean",default:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return o.default.createElement(g.default,{readOnly:!0,schema:C})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form readOnly schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-2"}},"display-demo-3":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),C={type:"object",displayType:"row",properties:{aa:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",default:"hello world",required:!0,width:"50%"},check:{title:"box",type:"boolean",default:!0,width:"50%",labelWidth:6},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],default:"a"}}}}},P=function(){return o.default.createElement(g.default,{labelWidth:"200",schema:C})},l.abrupt("return",P);case 14:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  displayType: 'row',
  properties: {
    aa: {
      title: '\u5BF9\u8C61',
      type: 'object',
      properties: {
        input1: {
          title: '\u7B80\u5355\u8F93\u5165\u6846',
          type: 'string',
          default: 'hello world',
          required: true,
          width: '50%',
        },
        check: {
          title: 'box',
          type: 'boolean',
          default: true,
          width: '50%',
          labelWidth: 6,
        },
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          default: 'a',
        },
      },
    },
  },
};

export default () => <Form labelWidth="200" schema={schema} />;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-3"}},"display-demo-4":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},obj:{title:"\u5BF9\u8C61",type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      // widget: 'list0',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          obj: {
            title: '\u5BF9\u8C61',
            type: 'object',
            properties: {
              input1: {
                title: '\u7B80\u5355\u8F93\u5165\u6846',
                type: 'string',
                required: true,
              },
              select1: {
                title: '\u5355\u9009',
                type: 'string',
                enum: ['a', 'b', 'c'],
                enumNames: ['\u65E9', '\u4E2D', '\u665A'],
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-4"}},"display-demo-5":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list1',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-5"}},"display-demo-6":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list2",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},input3:{title:"\u7B80\u5355\u8F93\u5165\u68463",type:"string"},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"select"}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list2',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          input2: {
            title: '\u7B80\u5355\u8F93\u5165\u68462',
            type: 'string',
          },
          input3: {
            title: '\u7B80\u5355\u8F93\u5165\u68463',
            type: 'string',
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
            widget: 'select',
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-6"}},"display-demo-7":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(13)]).then(e.bind(null,"bQjt"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={type:"object",properties:{listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list3",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]},listName2:{title:"\u5BF9\u8C61\u6570\u7EC4",description:"\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD",type:"array",widget:"list1",items:{type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}}}}}}}},P=function(){return o.default.createElement(g.default,{schema:C})},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Form from '../demo/display';

const schema = {
  type: 'object',
  properties: {
    listName2: {
      title: '\u5BF9\u8C61\u6570\u7EC4',
      description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
      type: 'array',
      widget: 'list3',
      items: {
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
          listName2: {
            title: '\u5BF9\u8C61\u6570\u7EC4',
            description: '\u5BF9\u8C61\u6570\u7EC4\u5D4C\u5957\u529F\u80FD',
            type: 'array',
            widget: 'list1',
            items: {
              type: 'object',
              properties: {
                input1: {
                  title: '\u7B80\u5355\u8F93\u5165\u6846',
                  type: 'string',
                  required: true,
                },
                select1: {
                  title: '\u5355\u9009',
                  type: 'string',
                  enum: ['a', 'b', 'c'],
                  enumNames: ['\u65E9', '\u4E2D', '\u665A'],
                },
              },
            },
          },
        },
      },
    },
  },
};

const Demo = () => {
  return <Form schema={schema} />;
};

export default Demo;`},"demo/display.js":{import:"../demo/display",content:V}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"display-demo-7"}},"form-methods-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M,j,s,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return j=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=M(D);if(w&&w.has(m))return w.get(m);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var be=ee?Object.getOwnPropertyDescriptor(m,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},M=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(M=function(ee){return ee?w:D})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.bind(null,"tJVT"));case 27:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.t8=j,r.next=32,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 32:return r.t9=r.sent,i=(0,r.t8)(r.t9),r.next=36,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 36:return l=r.sent,r.t10=j,r.next=40,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 40:return r.t11=r.sent,y=(0,r.t10)(r.t11),r.next=44,e.e(15).then(e.bind(null,"OH0R"));case 44:return T=r.sent,s=function(){var m=(0,y.useForm)(),D=(0,i.useState)({}),w=(0,P.default)(D,2),z=w[0],ee=w[1],se=function(){(0,T.fakeApi)("xxx/getForm").then(function(We){m.setValues({input1:"hello world",select1:"c"})})};(0,i.useEffect)(function(){(0,T.delay)(1e3).then(function(yn){ee({type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}})})},[]);var be=function(We,Te){Te.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(Te.map(function(En){return En.name}))):(0,T.fakeApi)("xxx/submit",We).then(function(En){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})};return i.default.createElement("div",{style:{width:"400px"}},i.default.createElement(y.default,{form:m,schema:z,onFinish:be}),i.default.createElement(o.default,null,i.default.createElement(g.default,{onClick:se},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),i.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=s,r.abrupt("return",N);case 48:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState, useEffect } from 'react';
import { Button, Space, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi, delay } from './utils';

const Demo = () => {
  const form = useForm();
  const [schema, setSchema] = useState({});

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ input1: 'hello world', select1: 'c' });
    });
  };

  useEffect(() => {
    // \u5F02\u6B65\u52A0\u8F7D\u8868\u5355
    delay(1000).then(_ => {
      setSchema({
        type: 'object',
        properties: {
          input1: {
            title: '\u7B80\u5355\u8F93\u5165\u6846',
            type: 'string',
            required: true,
          },
          select1: {
            title: '\u5355\u9009',
            type: 'string',
            enum: ['a', 'b', 'c'],
            enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          },
        },
      });
    });
  }, []);

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo"}},"form-methods-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M,j,s,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=T(D);if(w&&w.has(m))return w.get(m);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var be=ee?Object.getOwnPropertyDescriptor(m,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},T=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(T=function(ee){return ee?w:D})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.t2=f,r.next=13,Promise.resolve().then(e.bind(null,"PpiC"));case 13:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=17,e.e(14).then(e.t.bind(null,"tL+A",7));case 17:return r.t4=f,r.next=20,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 20:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=f,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=r.sent,r.t8=M,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=37,e.e(15).then(e.bind(null,"OH0R"));case 37:return y=r.sent,j={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]}}},s=function(){var m=(0,l.useForm)(),D=function(ee,se){se.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(be){return be.name}))):(0,y.fakeApi)("xxx/submit",ee).then(function(be){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(ee){var se=ee.data,be=ee.errors,yn=ee.schema,We=(0,g.default)(ee,["data","errors","schema"]);return(0,y.fakeApi)("xxx/validation").then(function(Te){return{name:"select1",error:["\u5916\u90E8\u6821\u9A8C\u9519\u8BEF"]}})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(l.default,{form:m,schema:j,beforeFinish:w,onFinish:D}),P.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},N=s,r.abrupt("return",N);case 42:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u5355\u9009',
      type: 'string',
      enum: ['a', 'b', 'c'],
      enumNames: ['\u65E9', '\u4E2D', '\u665A'],
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  // \u670D\u52A1\u7AEF\u6821\u9A8C\u5728\u8FD9\u91CC\u505A
  const beforeFinish = ({ data, errors, schema, ...rest }) => {
    return fakeApi('xxx/validation').then(_ => {
      return { name: 'select1', error: ['\u5916\u90E8\u6821\u9A8C\u9519\u8BEF'] };
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        beforeFinish={beforeFinish}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-1"}},"form-methods-demo-2":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M,j,s,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return M=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=T(D);if(w&&w.has(m))return w.get(m);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var be=ee?Object.getOwnPropertyDescriptor(m,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},T=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(T=function(ee){return ee?w:D})(m)},f=e("K+nK"),r.next=5,e.e(17).then(e.t.bind(null,"lfLe",7));case 5:return r.t0=f,r.next=8,e.e(18).then(e.t.bind(null,"Cp9S",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,e.e(3).then(e.t.bind(null,"MaXC",7));case 12:return r.t2=f,r.next=15,e.e(12).then(e.t.bind(null,"4IMT",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.next=19,e.e(14).then(e.t.bind(null,"tL+A",7));case 19:return r.t4=f,r.next=22,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 22:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=f,r.next=27,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 27:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=31,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 31:return i=r.sent,r.t8=M,r.next=35,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 35:return r.t9=r.sent,l=(0,r.t8)(r.t9),r.next=39,e.e(15).then(e.bind(null,"OH0R"));case 39:return y=r.sent,j={type:"object",properties:{dateRange:{bind:["startDate","endDate"],title:"\u65E5\u671F\u8303\u56F4",type:"range",format:"date"}}},s=function(){var m=(0,l.useForm)(),D=function(ee,se){se.length>0?C.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(se.map(function(be){return be.name}))):(0,y.fakeApi)("xxx/submit",ee).then(function(be){return C.default.success("\u63D0\u4EA4\u6210\u529F\uFF01")})},w=function(){(0,y.fakeApi)("xxx/getForm").then(function(ee){m.setValues({startDate:"2020-04-04",endDate:"2020-04-24"})})};return P.default.createElement("div",{style:{width:"400px"}},P.default.createElement(l.default,{form:m,schema:j,onFinish:D}),P.default.createElement(o.default,null,P.default.createElement(g.default,{onClick:w},"\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E"),P.default.createElement(g.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09")))},N=s,r.abrupt("return",N);case 44:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Button, message, Space } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    dateRange: {
      bind: ['startDate', 'endDate'],
      title: '\u65E5\u671F\u8303\u56F4',
      type: 'range',
      format: 'date',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      fakeApi('xxx/submit', data).then(_ => message.success('\u63D0\u4EA4\u6210\u529F\uFF01'));
    }
  };

  const getRemoteData = () => {
    fakeApi('xxx/getForm').then(_ => {
      form.setValues({ startDate: '2020-04-04', endDate: '2020-04-24' });
    });
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender form={form} schema={schema} onFinish={onFinish} />
      <Space>
        <Button onClick={getRemoteData}>\u52A0\u8F7D\u670D\u52A1\u7AEF\u6570\u636E</Button>
        <Button type="primary" onClick={form.submit}>
          \u63D0\u4EA4\uFF08\u89C1console\uFF09
        </Button>
      </Space>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-2"}},"form-methods-demo-3":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M,j,s;return R.a.wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return T=function(p,m){if(!m&&p&&p.__esModule)return p;if(p===null||typeof p!="object"&&typeof p!="function")return{default:p};var D=y(m);if(D&&D.has(p))return D.get(p);var w={},z=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var ee in p)if(ee!=="default"&&Object.prototype.hasOwnProperty.call(p,ee)){var se=z?Object.getOwnPropertyDescriptor(p,ee):null;se&&(se.get||se.set)?Object.defineProperty(w,ee,se):w[ee]=p[ee]}return w.default=p,D&&D.set(p,w),w},y=function(p){if(typeof WeakMap!="function")return null;var m=new WeakMap,D=new WeakMap;return(y=function(z){return z?D:m})(p)},f=e("K+nK"),d.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return d.t0=f,d.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return d.t1=d.sent,o=(0,d.t0)(d.t1),d.next=12,e.e(14).then(e.t.bind(null,"tL+A",7));case 12:return d.t2=f,d.next=15,Promise.resolve().then(e.t.bind(null,"QpBz",7));case 15:return d.t3=d.sent,g=(0,d.t2)(d.t3),d.t4=T,d.next=20,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 20:return d.t5=d.sent,C=(0,d.t4)(d.t5),d.next=24,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 24:return P=d.sent,d.t6=T,d.next=28,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 28:return d.t7=d.sent,i=(0,d.t6)(d.t7),d.next=32,e.e(15).then(e.bind(null,"OH0R"));case 32:return l=d.sent,M={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select1:{title:"\u5355\u9009",type:"string",widget:"select"}}}}},j=function(){var p=(0,i.useForm)(),m=function(){p.setSchemaByPath("obj1.select1",{enum:["nouth","south","east","west"],enumNames:["\u4E1C","\u5357","\u897F","\u5317"]})},D=function(z,ee){ee.length>0?g.default.error("\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A"+JSON.stringify(ee.map(function(se){return se.name}))):g.default.info(JSON.stringify(z))};return C.default.createElement("div",{style:{width:"400px"}},C.default.createElement(i.default,{form:p,schema:M,onMount:m,onFinish:D}),C.default.createElement(o.default,{type:"primary",onClick:p.submit},"\u63D0\u4EA4\uFF08\u89C1console\uFF09"))},s=j,d.abrupt("return",s);case 37:case"end":return d.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button, message } from 'antd';
import FormRender, { useForm } from 'form-render';
import { fakeApi } from './utils';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select1: {
          title: '\u5355\u9009',
          type: 'string',
          widget: 'select',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setSchemaByPath('obj1.select1', {
      enum: ['nouth', 'south', 'east', 'west'],
      enumNames: ['\u4E1C', '\u5357', '\u897F', '\u5317'],
    });
  };

  const onFinish = (data, errors) => {
    if (errors.length > 0) {
      message.error(
        '\u6821\u9A8C\u672A\u901A\u8FC7\uFF1A' + JSON.stringify(errors.map(item => item.name))
      );
    } else {
      message.info(JSON.stringify(data));
    }
  };

  return (
    <div style={{ width: '400px' }}>
      <FormRender
        form={form}
        schema={schema}
        onMount={onMount}
        onFinish={onFinish}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4\uFF08\u89C1console\uFF09
      </Button>
    </div>
  );
};

export default Demo;`},"utils/index.js":{import:"./utils",content:dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"form-methods-demo-3"}},"function-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y;return R.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return P=function(s,N){if(!N&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=C(N);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var D=p?Object.getOwnPropertyDescriptor(s,m):null;D&&(D.get||D.set)?Object.defineProperty(r,m,D):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},C=function(s){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:N})(s)},f=e("K+nK"),M.t0=f,M.next=6,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 6:return M.t1=M.sent,o=(0,M.t0)(M.t1),M.t2=P,M.next=11,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 11:return M.t3=M.sent,g=(0,M.t2)(M.t3),i={type:"object",properties:{select1:{title:"\u5355\u9009",description:"\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D",type:"string",enum:["a","b"],enumNames:["\u9690\u85CF\u8F93\u5165\u6846","\u663E\u793A\u8F93\u5165\u6846"],disabled:"{{rootValue.input1.length > 5}}",default:"a"},input1:{title:"\u8F93\u5165\u6846",description:"\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26",type:"string",hidden:'{{formData.select1 == "a"}}'}}},l=function(){var s=(0,g.useForm)();return o.default.createElement(g.default,{form:s,schema:i})},y=l,M.abrupt("return",y);case 17:case"end":return M.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    select1: {
      title: '\u5355\u9009',
      description: '\u5C1D\u8BD5\u9009\u62E9\u201C\u663E\u793A\u8F93\u5165\u6846\u201D',
      type: 'string',
      enum: ['a', 'b'],
      enumNames: ['\u9690\u85CF\u8F93\u5165\u6846', '\u663E\u793A\u8F93\u5165\u6846'],
      disabled: '{{rootValue.input1.length > 5}}',
      default: 'a',
    },
    input1: {
      title: '\u8F93\u5165\u6846',
      description: '\u5C1D\u8BD5\u8F93\u5165\u8D85\u8FC75\u4E2A\u5B57\u7B26',
      type: 'string',
      hidden: '{{formData.select1 == "a"}}',
    },
  },
};

const Demo1 = () => {
  const form = useForm();
  return <FormRender form={form} schema={schema} />;
};

export default Demo1;`}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo"}},"function-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return C=l.sent,P=function(){return o.default.createElement(g.default,{schema:C.expression})},l.abrupt("return",P);case 16:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { expression } from '../json/schema';

export default () => <FR schema={expression} />;`},"demo/FR.jsx":{import:"../demo/FR",content:le},"json/schema.js":{import:"../json/schema",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"function-demo-1"}},"lifeCycle-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T;return R.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return P=function(N,d){if(!d&&N&&N.__esModule)return N;if(N===null||typeof N!="object"&&typeof N!="function")return{default:N};var r=C(d);if(r&&r.has(N))return r.get(N);var p={},m=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var D in N)if(D!=="default"&&Object.prototype.hasOwnProperty.call(N,D)){var w=m?Object.getOwnPropertyDescriptor(N,D):null;w&&(w.get||w.set)?Object.defineProperty(p,D,w):p[D]=N[D]}return p.default=N,r&&r.set(N,p),p},C=function(N){if(typeof WeakMap!="function")return null;var d=new WeakMap,r=new WeakMap;return(C=function(m){return m?r:d})(N)},j.t0=P,j.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return j.t1=j.sent,f=(0,j.t0)(j.t1),j.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=j.sent,j.t2=P,j.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return j.t3=j.sent,g=(0,j.t2)(j.t3),i=function(N){return new Promise(function(d){return setTimeout(d,N)})},l={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0},select1:{title:"\u4E0B\u62C9\u9009\u6846",description:"\u52A0\u8F7D\u4E2D...",type:"string",enum:[],widget:"select"}}},y=function(){var N=(0,g.useForm)(),d=function(){N.setValues({input1:"hello world"}),i(3e3).then(function(p){N.setSchemaByPath("select1",{description:"",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"]})})};return f.default.createElement(g.default,{form:N,schema:l,onMount:d})},T=y,j.abrupt("return",T);case 20:case"end":return j.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const delay = ms => new Promise(res => setTimeout(res, ms));

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
    },
    select1: {
      title: '\u4E0B\u62C9\u9009\u6846',
      description: '\u52A0\u8F7D\u4E2D...',
      type: 'string',
      enum: [],
      widget: 'select',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const onMount = () => {
    form.setValues({ input1: 'hello world' });

    delay(3000).then(_ => {
      form.setSchemaByPath('select1', {
        description: '',
        enum: ['a', 'b', 'c'],
        enumNames: ['\u65E9', '\u4E2D', '\u665A'],
      });
    });
  };

  return <FormRender form={form} schema={schema} onMount={onMount} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"lifeCycle-demo"}},"watch-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y;return R.a.wrap(function(M){for(;;)switch(M.prev=M.next){case 0:return P=function(s,N){if(!N&&s&&s.__esModule)return s;if(s===null||typeof s!="object"&&typeof s!="function")return{default:s};var d=C(N);if(d&&d.has(s))return d.get(s);var r={},p=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in s)if(m!=="default"&&Object.prototype.hasOwnProperty.call(s,m)){var D=p?Object.getOwnPropertyDescriptor(s,m):null;D&&(D.get||D.set)?Object.defineProperty(r,m,D):r[m]=s[m]}return r.default=s,d&&d.set(s,r),r},C=function(s){if(typeof WeakMap!="function")return null;var N=new WeakMap,d=new WeakMap;return(C=function(p){return p?d:N})(s)},M.t0=P,M.next=5,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 5:return M.t1=M.sent,f=(0,M.t0)(M.t1),M.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 9:return o=M.sent,M.t2=P,M.next=13,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 13:return M.t3=M.sent,g=(0,M.t2)(M.t3),i={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"}}},l=function(){var s=(0,g.useForm)(),N={"#":function(r){console.log("\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A",r)},input1:function(r){s.setValueByPath("input2",r)}};return f.default.createElement(g.default,{form:s,schema:i,watch:N})},y=l,M.abrupt("return",y);case 19:case"end":return M.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
  },
};

const Demo = () => {
  const form = useForm();

  const watch = {
    // # \u4E3A\u5168\u5C40
    '#': val => {
      console.log('\u8868\u5355\u7684\u65F6\u65F6\u6570\u636E\u4E3A\uFF1A', val);
    },
    input1: val => {
      form.setValueByPath('input2', val);
    },
  };

  return <FormRender form={form} schema={schema} watch={watch} />;
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo"}},"watch-demo-1":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M;return R.a.wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return l=function(d,r){if(!r&&d&&d.__esModule)return d;if(d===null||typeof d!="object"&&typeof d!="function")return{default:d};var p=i(r);if(p&&p.has(d))return p.get(d);var m={},D=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var w in d)if(w!=="default"&&Object.prototype.hasOwnProperty.call(d,w)){var z=D?Object.getOwnPropertyDescriptor(d,w):null;z&&(z.get||z.set)?Object.defineProperty(m,w,z):m[w]=d[w]}return m.default=d,p&&p.set(d,m),m},i=function(d){if(typeof WeakMap!="function")return null;var r=new WeakMap,p=new WeakMap;return(i=function(D){return D?p:r})(d)},f=e("K+nK"),s.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return s.t0=f,s.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return s.t1=s.sent,o=(0,s.t0)(s.t1),s.t2=l,s.next=13,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 13:return s.t3=s.sent,g=(0,s.t2)(s.t3),s.next=17,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 17:return C=s.sent,s.t4=l,s.next=21,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 21:return s.t5=s.sent,P=(0,s.t4)(s.t5),y={type:"object",properties:{input1:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string",required:!0,placeholder:"\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165"},input2:{title:"\u7B80\u5355\u8F93\u5165\u68462",type:"string"},obj1:{title:"\u5BF9\u8C61",description:"\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B",type:"object",properties:{select:{title:"\u5355\u9009",type:"string",enum:["a","b","c"],enumNames:["\u65E9","\u4E2D","\u665A"],widget:"radio"}}}}},T=function(){var d=(0,P.useForm)(),r=function(D,w){w.length>0?alert("errorFields:"+JSON.stringify(w)):alert("formData:"+JSON.stringify(D,null,2))},p={input1:function(D){D.length>2?d.setSchemaByPath("obj1.select",function(w){var z=w.enumNames;return{enumNames:z.map(function(ee){return ee+"a"})}}):d.setSchemaByPath("obj1.select",{enumNames:["\u65E9","\u4E2D","\u665A"]})}};return g.default.createElement("div",null,g.default.createElement(P.default,{form:d,schema:y,onFinish:r,watch:p}),g.default.createElement(o.default,{type:"",style:{marginRight:8},onClick:function(){return d.setSchemaByPath("input2",{title:"\u7F16\u8F91\u6846",format:"textarea"})}},"\u5C06 input \u6539\u4E3A textarea"),g.default.createElement(o.default,{type:"primary",onClick:d.submit},"\u63D0\u4EA4"))},M=T,s.abrupt("return",M);case 27:case"end":return s.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useEffect } from 'react';
import { Button } from 'antd';
import FormRender, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    input1: {
      title: '\u7B80\u5355\u8F93\u5165\u6846',
      type: 'string',
      required: true,
      placeholder: '\u5C1D\u8BD5\u5728\u6B64\u8F93\u5165',
    },
    input2: {
      title: '\u7B80\u5355\u8F93\u5165\u68462',
      type: 'string',
    },
    obj1: {
      title: '\u5BF9\u8C61',
      description: '\u8FD9\u662F\u4E00\u4E2A\u5BF9\u8C61\u7C7B\u578B',
      type: 'object',
      properties: {
        select: {
          title: '\u5355\u9009',
          type: 'string',
          enum: ['a', 'b', 'c'],
          enumNames: ['\u65E9', '\u4E2D', '\u665A'],
          widget: 'radio',
        },
      },
    },
  },
};

const Demo = () => {
  const form = useForm();
  const onFinish = (formData, errorFields) => {
    if (errorFields.length > 0) {
      alert('errorFields:' + JSON.stringify(errorFields));
    } else {
      alert('formData:' + JSON.stringify(formData, null, 2));
    }
  };

  const watch = {
    input1: val => {
      if (val.length > 2) {
        form.setSchemaByPath('obj1.select', ({ enumNames }) => {
          return {
            enumNames: enumNames.map(item => item + 'a'),
          };
        });
      } else {
        form.setSchemaByPath('obj1.select', { enumNames: ['\u65E9', '\u4E2D', '\u665A'] });
      }
    },
  };

  return (
    <div>
      <FormRender
        form={form}
        schema={schema}
        onFinish={onFinish}
        watch={watch}
      />
      <Button
        type=""
        style={{ marginRight: 8 }}
        onClick={() =>
          form.setSchemaByPath('input2', {
            title: '\u7F16\u8F91\u6846',
            format: 'textarea',
          })
        }
      >
        \u5C06 input \u6539\u4E3A textarea
      </Button>
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"watch-demo-1"}},"widget-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T,M,j,s,N;return R.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return T=function(m,D){if(!D&&m&&m.__esModule)return m;if(m===null||typeof m!="object"&&typeof m!="function")return{default:m};var w=y(D);if(w&&w.has(m))return w.get(m);var z={},ee=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var se in m)if(se!=="default"&&Object.prototype.hasOwnProperty.call(m,se)){var be=ee?Object.getOwnPropertyDescriptor(m,se):null;be&&(be.get||be.set)?Object.defineProperty(z,se,be):z[se]=m[se]}return z.default=m,w&&w.set(m,z),z},y=function(m){if(typeof WeakMap!="function")return null;var D=new WeakMap,w=new WeakMap;return(y=function(ee){return ee?w:D})(m)},f=e("K+nK"),r.next=5,e.e(3).then(e.t.bind(null,"MaXC",7));case 5:return r.t0=f,r.next=8,e.e(12).then(e.t.bind(null,"4IMT",7));case 8:return r.t1=r.sent,o=(0,r.t0)(r.t1),r.next=12,Promise.all([e.e(3),e.e(60)]).then(e.t.bind(null,"cUip",7));case 12:return r.t2=f,r.next=15,Promise.all([e.e(0),e.e(12),e.e(58),e.e(61)]).then(e.t.bind(null,"iJl9",7));case 15:return r.t3=r.sent,g=(0,r.t2)(r.t3),r.t4=f,r.next=20,e.e(64).then(e.bind(null,"0Owb"));case 20:return r.t5=r.sent,C=(0,r.t4)(r.t5),r.t6=T,r.next=25,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 25:return r.t7=r.sent,P=(0,r.t6)(r.t7),r.next=29,Promise.all([e.e(0),e.e(1),e.e(2),e.e(10),e.e(11)]).then(e.bind(null,"gdfu"));case 29:return i=r.sent,r.t8=T,r.next=33,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(8)]).then(e.bind(null,"refC"));case 33:return r.t9=r.sent,l=(0,r.t8)(r.t9),M={type:"object",properties:{string:{title:"\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6",type:"string",widget:"site"},select:{title:"\u5355\u9009",type:"number",enum:[1,2,3],enumNames:["\u9009\u98791","\u9009\u98792","\u9009\u98793"]}}},j=function(m){return P.default.createElement(g.default,(0,C.default)({addonBefore:"http://",addonAfter:".com"},m))},s=function(){var m=(0,l.useForm)(),D=function(){};return P.default.createElement("div",null,P.default.createElement(l.default,{form:m,schema:M,widgets:{site:j},onFinish:function(z){return alert(JSON.stringify(z,null,2))}}),P.default.createElement(o.default,{type:"primary",onClick:m.submit},"\u63D0\u4EA4"))},N=s,r.abrupt("return",N);case 40:case"end":return r.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React, { useState } from 'react';
import { Input, Button } from 'antd';
import Form, { useForm } from 'form-render';

const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u7F51\u5740\u8F93\u5165\u81EA\u5B9A\u4E49\u7EC4\u4EF6',
      type: 'string',
      widget: 'site',
    },
    select: {
      title: '\u5355\u9009',
      type: 'number',
      enum: [1, 2, 3],
      enumNames: ['\u9009\u98791', '\u9009\u98792', '\u9009\u98793'],
    },
  },
};

const SiteInput = props => {
  return <Input addonBefore="http://" addonAfter=".com" {...props} />;
};

const Demo = () => {
  const form = useForm();
  const handleSubmit = () => {};
  return (
    <div>
      <Form
        form={form}
        schema={schema}
        widgets={{ site: SiteInput }}
        onFinish={formData => alert(JSON.stringify(formData, null, 2))}
      />
      <Button type="primary" onClick={form.submit}>
        \u63D0\u4EA4
      </Button>
    </div>
  );
};

export default Demo;`}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},"react-dom":{version:">=16.8.0"}},identifier:"widget-demo"}},"schema-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P;return R.a.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return f=e("K+nK"),l.t0=f,l.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return l.t1=l.sent,o=(0,l.t0)(l.t1),l.t2=f,l.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(16)]).then(e.bind(null,"c2mQ"));case 9:return l.t3=l.sent,g=(0,l.t2)(l.t3),l.next=13,e.e(19).then(e.bind(null,"8iYR"));case 13:return C=l.sent,P=function(){return o.default.createElement(g.default,{schema:C.basic})},l.abrupt("return",P);case 16:case"end":return l.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import FR from '../demo/FR';
import { basic } from '../json/schema';

export default () => <FR schema={basic} />;`},"demo/FR.jsx":{import:"../demo/FR",content:le},"json/schema.js":{import:"../json/schema",content:q}},dependencies:{react:{version:">=16.8.0"},"form-render":{version:"1.3.2"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"schema-demo"}},"docs-playground":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"BASV"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Je},"main.js":{import:"./main",content:ge},"json/simplest.json":{import:"./json/simplest.json",content:pn},"customized/AsyncSelect.js":{import:"./customized/AsyncSelect",content:Cn},"monaco/index.js":{import:"./monaco",content:en},"theme.css":{import:"./theme.css",content:Ge},"index.css":{import:"./index.css",content:Xe}},dependencies:{antd:{version:"4.15.5",css:"antd/dist/antd.css"},react:{version:"^16.0.0"},"react-dom":{version:"^16.0.0"},"deep-equal":{version:"2.0.5"},"json-parse-better-errors":{version:"1.0.2"},"form-render":{version:"1.3.2"},"fetch-jsonp":{version:"1.1.3"},querystring:{version:"0.2.0"},"react-simple-code-editor":{version:"0.11.0"},prismjs:{version:"1.23.0"}},identifier:"docs-playground"}},"table-render-advanced":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"7ZP+"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{tsx:$n}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.0.0"},"table-render":{version:"1.0.5"},"@ant-design/icons":{version:"4.6.2"},"umi-request":{version:"1.3.5"},"react-dom":{version:">=16.9.0"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-advanced"}},"table-render-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i,l,y,T;return R.a.wrap(function(j){for(;;)switch(j.prev=j.next){case 0:return f=e("K+nK"),j.t0=f,j.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return j.t1=j.sent,o=(0,j.t0)(j.t1),j.next=8,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(57)]).then(e.bind(null,"P2DI"));case 8:for(g=j.sent,C=[],P=0;P<6;P++)C.push({id:P.toString(),title:"\u6807\u9898".concat(P+1),created_at:new Date().getTime()});return i={type:"object",properties:{string:{title:"\u6807\u9898",type:"string","ui:width":"30%"},created_at:{title:"\u521B\u5EFA\u65F6\u95F4",type:"string",format:"date","ui:width":"30%"}}},l=[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u521B\u5EFA\u65F6\u95F4",key:"since",dataIndex:"created_at",valueType:"date"},{title:"\u64CD\u4F5C",render:function(N,d){return o.default.createElement("a",{onClick:function(){return alert(N.title)}},"\u7F16\u8F91")}}],y=function(){var N=function(){return{rows:C,total:C.length}};return o.default.createElement(g.TableProvider,null,o.default.createElement(g.Search,{schema:i,api:N}),o.default.createElement(g.Table,{headerTitle:"\u6700\u7B80\u8868\u683C",columns:l,rowKey:"id"}))},T=y,j.abrupt("return",T);case 16:case"end":return j.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import { Table, Search, TableProvider } from 'table-render';

const dataSource = [];
for (let i = 0; i < 6; i++) {
  dataSource.push({
    id: i.toString(),
    title: \`\u6807\u9898\${i + 1}\`,
    created_at: new Date().getTime(),
  });
}

// \u8BE6\u7EC6\u53EF\u89C1 form-render \u7684\u4F7F\u7528
const schema = {
  type: 'object',
  properties: {
    string: {
      title: '\u6807\u9898',
      type: 'string',
      'ui:width': '30%',
    },
    created_at: {
      title: '\u521B\u5EFA\u65F6\u95F4',
      type: 'string',
      format: 'date',
      'ui:width': '30%',
    },
  }
};

// \u914D\u7F6E\u5B8C\u5168\u900F\u4F20 antd table
const columns = [
  {
    title: '\u6807\u9898',
    dataIndex: 'title',
  },
  {
    title: '\u521B\u5EFA\u65F6\u95F4',
    key: 'since',
    dataIndex: 'created_at',
    valueType: 'date',
  },
  {
    title: '\u64CD\u4F5C',
    render: (row, record) => (
     <a onClick={()=>alert(row.title)}>\u7F16\u8F91</a>
    ),
  },
];

const Wrapper = () => {
  const searchApi = () => {
    return {
      rows: dataSource,
      total: dataSource.length,
    };
  };
  return (
    <TableProvider>
       <Search schema={schema} api={searchApi} />
       <Table headerTitle="\u6700\u7B80\u8868\u683C" columns={columns} rowKey="id" />
    </TableProvider>
  );
};

export default Wrapper;`}},dependencies:{react:{version:">=16.8.0"},"table-render":{version:"1.0.5"},antd:{version:"4.x",css:"antd/dist/antd.css"},"form-render":{version:"1.x"}},transform:!0,defaultShowCode:!0,identifier:"table-render-demo"}},"generator-demo":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){var f,o,g,C,P,i;return R.a.wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return f=e("K+nK"),y.t0=f,y.next=4,Promise.resolve().then(e.t.bind(null,"q1tI",7));case 4:return y.t1=y.sent,o=(0,y.t0)(y.t1),y.t2=f,y.next=9,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(56)]).then(e.bind(null,"nYSz"));case 9:return y.t3=y.sent,g=(0,y.t2)(y.t3),C={schema:{type:"object",properties:{inputName:{title:"\u7B80\u5355\u8F93\u5165\u6846",type:"string"}}},displayType:"row",showDescIcon:!0,labelWidth:120},P=function(){return o.default.createElement("div",{style:{height:"80vh"}},o.default.createElement(g.default,{defaultValue:C}))},i=P,y.abrupt("return",i);case 15:case"end":return y.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:`import React from 'react';
import Generator from 'fr-generator';

const defaultValue = {
  schema: {
    type: 'object',
    properties: {
      inputName: {
        title: '\u7B80\u5355\u8F93\u5165\u6846',
        type: 'string',
      },
    },
  },
  displayType: 'row',
  showDescIcon: true,
  labelWidth: 120,
};

const Demo = () => {
  return (
    <div style={{ height: '80vh' }}>
      <Generator defaultValue={defaultValue} />
    </div>
  );
};

export default Demo;`}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},transform:!0,defaultShowCode:!0,identifier:"generator-demo"}},"generator-modal":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"PPgD"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Wn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-modal"}},"generator-transformer":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"jktF"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:Dn}},dependencies:{antd:{version:"4.x",css:"antd/dist/antd.css"},react:{version:">=16.9.0"},"fr-generator":{version:"2.0.0"},"react-dom":{version:">=16.9.0"}},identifier:"generator-transformer"}},"generator-settings":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"M63W"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:we}},dependencies:{react:{version:">=16.8.0"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-settings"}},"generator-playground":{component:Object($.dynamic)({loader:function(){var F=Object(G.a)(R.a.mark(function B(){return R.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Promise.all([e.e(0),e.e(1),e.e(2),e.e(3),e.e(20)]).then(e.bind(null,"TYW4"));case 2:return o.abrupt("return",o.sent.default);case 3:case"end":return o.stop()}},B)}));function A(){return F.apply(this,arguments)}return A}()}),previewerProps:{sources:{_:{jsx:qn},"index.less":{import:"./index.less",content:Vn}},dependencies:{react:{version:">=16.8.0"},umi:{version:"3.4.19"},"fr-generator":{version:"2.0.0"},antd:{version:"4.x",css:"antd/dist/antd.css"},"react-dom":{version:">=16.8.0"}},identifier:"generator-playground"}}}},TIsu:function(wn,gn,e){},Zs1V:function(wn){wn.exports=JSON.parse("{}")},p8sG:function(wn,gn,e){"use strict";wn.exports=e("80pN")}}]);