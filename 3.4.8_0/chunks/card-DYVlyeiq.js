import{$t as e,D as t,E as n,Gt as r,Kt as i,Ut as a,an as o,rn as s}from"./app-DHj85Ojq.js";var c=t.extend({name:`card`,style:`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,classes:{root:`p-card p-component`,header:`p-card-header`,body:`p-card-body`,caption:`p-card-caption`,title:`p-card-title`,subtitle:`p-card-subtitle`,content:`p-card-content`,footer:`p-card-footer`}}),l={name:`Card`,extends:{name:`BaseCard`,extends:n,style:c,provide:function(){return{$pcCard:this,$parentInstance:this}}},inheritAttrs:!1};function u(t,n,c,l,u,d){return s(),i(`div`,e({class:t.cx(`root`)},t.ptmi(`root`)),[t.$slots.header?(s(),i(`div`,e({key:0,class:t.cx(`header`)},t.ptm(`header`)),[o(t.$slots,`header`)],16)):r(``,!0),a(`div`,e({class:t.cx(`body`)},t.ptm(`body`)),[t.$slots.title||t.$slots.subtitle?(s(),i(`div`,e({key:0,class:t.cx(`caption`)},t.ptm(`caption`)),[t.$slots.title?(s(),i(`div`,e({key:0,class:t.cx(`title`)},t.ptm(`title`)),[o(t.$slots,`title`)],16)):r(``,!0),t.$slots.subtitle?(s(),i(`div`,e({key:1,class:t.cx(`subtitle`)},t.ptm(`subtitle`)),[o(t.$slots,`subtitle`)],16)):r(``,!0)],16)):r(``,!0),a(`div`,e({class:t.cx(`content`)},t.ptm(`content`)),[o(t.$slots,`content`)],16),t.$slots.footer?(s(),i(`div`,e({key:1,class:t.cx(`footer`)},t.ptm(`footer`)),[o(t.$slots,`footer`)],16)):r(``,!0)],16)],16)}l.render=u;export{l as t};