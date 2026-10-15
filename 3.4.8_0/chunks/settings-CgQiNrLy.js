import{$t as e,D as t,Gt as n,Kt as r,Ut as i,Vt as a,X as o,Xt as s,Yt as c,an as l,b as u,en as d,fn as f,gn as p,hn as m,in as h,mn as g,rn as _,t as v,u as y,yn as b}from"./app-DHj85Ojq.js";import{t as x}from"./pages-BXBurpth.js";import{t as S}from"./card-DYVlyeiq.js";import{n as C,t as w}from"./settings-Nd5ax0nT.js";var T=t.extend({name:`toggleswitch`,style:`
    .p-toggleswitch {
        display: inline-block;
        width: dt('toggleswitch.width');
        height: dt('toggleswitch.height');
    }

    .p-toggleswitch-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        top: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border-radius: dt('toggleswitch.border.radius');
    }

    .p-toggleswitch-slider {
        cursor: pointer;
        width: 100%;
        height: 100%;
        border-width: dt('toggleswitch.border.width');
        border-style: solid;
        border-color: dt('toggleswitch.border.color');
        background: dt('toggleswitch.background');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            border-color dt('toggleswitch.transition.duration'),
            outline-color dt('toggleswitch.transition.duration'),
            box-shadow dt('toggleswitch.transition.duration');
        border-radius: dt('toggleswitch.border.radius');
        outline-color: transparent;
        box-shadow: dt('toggleswitch.shadow');
    }

    .p-toggleswitch-handle {
        position: absolute;
        top: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: dt('toggleswitch.handle.background');
        color: dt('toggleswitch.handle.color');
        width: dt('toggleswitch.handle.size');
        height: dt('toggleswitch.handle.size');
        inset-inline-start: dt('toggleswitch.gap');
        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));
        border-radius: dt('toggleswitch.handle.border.radius');
        transition:
            background dt('toggleswitch.transition.duration'),
            color dt('toggleswitch.transition.duration'),
            inset-inline-start dt('toggleswitch.slide.duration'),
            box-shadow dt('toggleswitch.slide.duration');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.background');
        border-color: dt('toggleswitch.checked.border.color');
    }

    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.background');
        color: dt('toggleswitch.handle.checked.color');
        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {
        background: dt('toggleswitch.hover.background');
        border-color: dt('toggleswitch.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.hover.background');
        color: dt('toggleswitch.handle.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {
        background: dt('toggleswitch.checked.hover.background');
        border-color: dt('toggleswitch.checked.hover.border.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.checked.hover.background');
        color: dt('toggleswitch.handle.checked.hover.color');
    }

    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {
        box-shadow: dt('toggleswitch.focus.ring.shadow');
        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');
        outline-offset: dt('toggleswitch.focus.ring.offset');
    }

    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }

    .p-toggleswitch.p-disabled {
        opacity: 1;
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-slider {
        background: dt('toggleswitch.disabled.background');
    }

    .p-toggleswitch.p-disabled .p-toggleswitch-handle {
        background: dt('toggleswitch.handle.disabled.background');
    }
`,classes:{root:function(e){var t=e.instance,n=e.props;return[`p-toggleswitch p-component`,{"p-toggleswitch-checked":t.checked,"p-disabled":n.disabled,"p-invalid":t.$invalid}]},input:`p-toggleswitch-input`,slider:`p-toggleswitch-slider`,handle:`p-toggleswitch-handle`},inlineStyles:{root:{position:`relative`}}}),E={name:`ToggleSwitch`,extends:{name:`BaseToggleSwitch`,extends:u,props:{trueValue:{type:null,default:!0},falseValue:{type:null,default:!1},readonly:{type:Boolean,default:!1},tabindex:{type:Number,default:null},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:T,provide:function(){return{$pcToggleSwitch:this,$parentInstance:this}}},inheritAttrs:!1,emits:[`change`,`focus`,`blur`],methods:{getPTOptions:function(e){return(e===`root`?this.ptmi:this.ptm)(e,{context:{checked:this.checked,disabled:this.disabled}})},onChange:function(e){if(!this.disabled&&!this.readonly){var t=this.checked?this.falseValue:this.trueValue;this.writeValue(t,e),this.$emit(`change`,e)}},onFocus:function(e){this.$emit(`focus`,e)},onBlur:function(e){var t,n;this.$emit(`blur`,e),(t=(n=this.formField).onBlur)==null||t.call(n,e)}},computed:{checked:function(){return this.d_value===this.trueValue},dataP:function(){return o({checked:this.checked,disabled:this.disabled,invalid:this.$invalid})}}},D=[`data-p-checked`,`data-p-disabled`,`data-p`],O=[`id`,`checked`,`tabindex`,`disabled`,`readonly`,`aria-checked`,`aria-labelledby`,`aria-label`,`aria-invalid`],k=[`data-p`],A=[`data-p`];function j(t,n,a,o,s,c){return _(),r(`div`,e({class:t.cx(`root`),style:t.sx(`root`)},c.getPTOptions(`root`),{"data-p-checked":c.checked,"data-p-disabled":t.disabled,"data-p":c.dataP}),[i(`input`,e({id:t.inputId,type:`checkbox`,role:`switch`,class:[t.cx(`input`),t.inputClass],style:t.inputStyle,checked:c.checked,tabindex:t.tabindex,disabled:t.disabled,readonly:t.readonly,"aria-checked":c.checked,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,"aria-invalid":t.invalid||void 0,onFocus:n[0]||=function(){return c.onFocus&&c.onFocus.apply(c,arguments)},onBlur:n[1]||=function(){return c.onBlur&&c.onBlur.apply(c,arguments)},onChange:n[2]||=function(){return c.onChange&&c.onChange.apply(c,arguments)}},c.getPTOptions(`input`)),null,16,O),i(`div`,e({class:t.cx(`slider`)},c.getPTOptions(`slider`),{"data-p":c.dataP}),[i(`div`,e({class:t.cx(`handle`)},c.getPTOptions(`handle`),{"data-p":c.dataP}),[l(t.$slots,`handle`,{checked:c.checked})],16,A)],16,k)],16,D)}E.render=j;var M={class:`mb-15 mt-10 text-4xl text-center font-bold`},N={key:0,class:`flex justify-center mt-10 mx-2`},P={class:`flex items-center gap-2 mb-3`},F=[`for`],I={class:`text-primary-500 dark:text-primary-400`};v(s({__name:`App`,props:{userProfile:{}},setup(e){let{t}=y(),o=g(null);document.title=t(`settings`),d(async()=>{o.value=await w(),C(o)});let s=[{name:`enablePreScrollLazyLoading`,hint:`enablePreScrollLazyLoadingHint`},{name:`reloadPageAfterExport`,hint:`reloadPageAfterExportHint`},{name:`addDateTimeToFilename`,hint:`addDateTimeToFilenameHint`}];return(l,u)=>(_(),r(a,null,[c(x,{userProfile:e.userProfile},null,8,[`userProfile`]),i(`h1`,M,b(m(t)(`settings`)),1),o.value?(_(),r(`div`,N,[c(m(S),{class:`shadow-md max-w-2xl`},{content:f(()=>[(_(),r(a,null,h(s,(e,n)=>i(`div`,{class:p(n<s.length-1?`mb-10`:``)},[i(`div`,P,[c(m(E),{modelValue:o.value[e.name],"onUpdate:modelValue":t=>o.value[e.name]=t,inputId:e.name,binary:``},null,8,[`modelValue`,`onUpdate:modelValue`,`inputId`]),i(`label`,{for:e.name,class:`cursor-pointer text-primary`},b(m(t)(e.name)),9,F)]),i(`div`,I,b(m(t)(e.hint)),1)],2)),64))]),_:1})])):n(``,!0)],64))}}));