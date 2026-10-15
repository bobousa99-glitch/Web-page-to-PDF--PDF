import{$t as e,D as t,E as n,Ft as r,Gt as i,Ht as a,Jt as o,Kt as s,Ut as c,Vt as l,Wt as u,X as d,Xt as f,Yt as p,_ as m,an as h,cn as g,d as _,fn as v,hn as y,in as b,mn as x,nn as S,o as C,rn as w,st as T,t as E,u as D,yn as O}from"./app-DHj85Ojq.js";import{t as k}from"./pages-BXBurpth.js";import{c as A,f as j,l as M,n as N,s as P,t as F,u as I}from"./DownloadButton-CTk3AwRh.js";import{t as L}from"./card-DYVlyeiq.js";import{t as R}from"./progressspinner-QXPpzfvp.js";var z=t.extend({name:`chip`,style:`
    .p-chip {
        display: inline-flex;
        align-items: center;
        background: dt('chip.background');
        color: dt('chip.color');
        border-radius: dt('chip.border.radius');
        padding-block: dt('chip.padding.y');
        padding-inline: dt('chip.padding.x');
        gap: dt('chip.gap');
    }

    .p-chip-icon {
        color: dt('chip.icon.color');
        font-size: dt('chip.icon.size');
        width: dt('chip.icon.size');
        height: dt('chip.icon.size');
    }

    .p-chip-image {
        border-radius: 50%;
        width: dt('chip.image.width');
        height: dt('chip.image.height');
        margin-inline-start: calc(-1 * dt('chip.padding.y'));
    }

    .p-chip:has(.p-chip-remove-icon) {
        padding-inline-end: dt('chip.padding.y');
    }

    .p-chip:has(.p-chip-image) {
        padding-block-start: calc(dt('chip.padding.y') / 2);
        padding-block-end: calc(dt('chip.padding.y') / 2);
    }

    .p-chip-remove-icon {
        cursor: pointer;
        font-size: dt('chip.remove.icon.size');
        width: dt('chip.remove.icon.size');
        height: dt('chip.remove.icon.size');
        color: dt('chip.remove.icon.color');
        border-radius: 50%;
        transition:
            outline-color dt('chip.transition.duration'),
            box-shadow dt('chip.transition.duration');
        outline-color: transparent;
    }

    .p-chip-remove-icon:focus-visible {
        box-shadow: dt('chip.remove.icon.focus.ring.shadow');
        outline: dt('chip.remove.icon.focus.ring.width') dt('chip.remove.icon.focus.ring.style') dt('chip.remove.icon.focus.ring.color');
        outline-offset: dt('chip.remove.icon.focus.ring.offset');
    }
`,classes:{root:`p-chip p-component`,image:`p-chip-image`,icon:`p-chip-icon`,label:`p-chip-label`,removeIcon:`p-chip-remove-icon`}}),B={name:`Chip`,extends:{name:`BaseChip`,extends:n,props:{label:{type:[String,Number],default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:z,provide:function(){return{$pcChip:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`remove`],data:function(){return{visible:!0}},methods:{onKeydown:function(e){(e.key===`Enter`||e.key===`Backspace`)&&this.close(e)},close:function(e){this.visible=!1,this.$emit(`remove`,e)}},computed:{dataP:function(){return d({removable:this.removable})}},components:{TimesCircleIcon:j}},V=[`aria-label`,`data-p`],H=[`src`];function U(t,n,r,a,o,c){return o.visible?(w(),s(`div`,e({key:0,class:t.cx(`root`),"aria-label":t.label},t.ptmi(`root`),{"data-p":c.dataP}),[h(t.$slots,`default`,{},function(){return[t.image?(w(),s(`img`,e({key:0,src:t.image},t.ptm(`image`),{class:t.cx(`image`)}),null,16,H)):t.$slots.icon?(w(),u(g(t.$slots.icon),e({key:1,class:t.cx(`icon`)},t.ptm(`icon`)),null,16,[`class`])):t.icon?(w(),s(`span`,e({key:2,class:[t.cx(`icon`),t.icon]},t.ptm(`icon`)),null,16)):i(``,!0),t.label===null?i(``,!0):(w(),s(`div`,e({key:3,class:t.cx(`label`)},t.ptm(`label`)),O(t.label),17))]}),t.removable?h(t.$slots,`removeicon`,{key:0,removeCallback:c.close,keydownCallback:c.onKeydown},function(){return[(w(),u(g(t.removeIcon?`span`:`TimesCircleIcon`),e({class:[t.cx(`removeIcon`),t.removeIcon],onClick:c.close,onKeydown:c.onKeydown},t.ptm(`removeIcon`)),null,16,[`class`,`onClick`,`onKeydown`]))]}):i(``,!0)],16,V)):i(``,!0)}B.render=U;var W={class:`flex flex-col items-center mt-10 mx-2`},G={class:`text-center mb-15`},K={class:`text-4xl font-bold mb-3`},q={class:`text-xl mb-8`},J={class:`text-xl font-medium mb-4`},Y={class:`font-bold`},X={key:1},Z={key:1,class:`text-xl mt-5`},Q={key:0},$={class:`mt-3 mb-6`},ee={class:`flex flex-wrap justify-between gap-4`},te={class:`flex flex-wrap gap-2`},ne={class:`flex items-center gap-2`};E(f({__name:`App`,props:{userProfile:{}},setup(e){let t=e,{t:n}=D(),d=x(null),f=a(()=>d.value?.reduce((e,t)=>e+t.filesize,0)??0),h=a(()=>T(f.value)),g=a(()=>d.value&&d.value.length>0),E=x(!0),j=x(null);document.title=n(`historyHeader`);async function z(){E.value=!0,d.value=await I(),E.value=!1}async function V(e){await M(e.id),await z()}async function H(){await A(),await z()}return S(async()=>{j.value=await C(),await z()}),(e,a)=>(w(),s(l,null,[p(k,{userProfile:t.userProfile},null,8,[`userProfile`]),c(`div`,W,[c(`div`,G,[c(`h1`,K,O(y(n)(`historyHeader`)),1),g.value?(w(),s(l,{key:0},[c(`div`,q,O(y(n)(`historySubtitle`)),1),c(`div`,J,[o(O(y(n)(`historyTotalSize`))+`: `,1),c(`span`,Y,O(h.value),1)]),p(y(m),{onClick:H,label:y(n)(`clearHistory`),severity:y(_)===`dark`?`secondary`:`danger`,variant:y(_)===`dark`?`outlined`:void 0,icon:`pi pi-trash`},null,8,[`label`,`severity`,`variant`])],64)):(w(),s(`div`,X,[E.value?(w(),u(y(R),{key:0,strokeWidth:`2`,fill:`transparent`,class:`block w-30 h-30 mt-30`,animationDuration:`.5s`})):(w(),s(`div`,Z,O(y(n)(`emptyHistory`)),1))]))]),g.value&&j.value?(w(),s(`div`,Q,[(w(!0),s(l,null,b(d.value,e=>(w(),u(y(L),{class:`shadow-sm mb-4`},{title:v(()=>[o(O(e.title),1)]),content:v(()=>[c(`div`,$,O(new Date(e.createdAt).toLocaleString()),1),c(`div`,ee,[c(`div`,te,[p(y(m),{as:`a`,href:y(r).runtime.getURL(`/viewer.html?id=${e.id}`),icon:`pi pi-eye`,title:y(n)(`viewPDF`),severity:`secondary`,class:`dark-button-variant`},null,8,[`href`,`title`]),p(F,{pdf:e,userProfile:j.value,withText:!1,severity:`secondary`},null,8,[`pdf`,`userProfile`]),p(F,{format:`png`,pdf:e,userProfile:j.value,withText:!1,severity:`secondary`},null,8,[`pdf`,`userProfile`]),p(N,{pdf:e,withText:!1,severity:`secondary`},null,8,[`pdf`]),p(P,{pdf:e,userProfile:j.value,withText:!1,severity:`secondary`},null,8,[`pdf`,`userProfile`]),p(y(m),{as:`a`,href:e.url,icon:`pi pi-external-link`,title:y(n)(`openSourcePage`),severity:`secondary`,target:`_blank`,class:`dark-button-variant`},null,8,[`href`,`title`])]),c(`div`,ne,[p(y(B),{label:y(T)(e.filesize)},null,8,[`label`]),p(y(m),{severity:`danger`,variant:`text`,icon:`pi pi-trash`,onClick:t=>V(e),title:y(n)(`deleteFromHistory`)},null,8,[`onClick`,`title`])])])]),_:2},1024))),256))])):i(``,!0)])],64))}}));