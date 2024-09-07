import{j as r}from"./jsx-runtime-Nms4Y4qS.js";import{c as p,d as c}from"./index-zj5JfNTx.js";import"./index-BwDkhjyp.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BrKxxpxt.js";import"./index-B8XB3FuZ.js";const{useArgs:u}=__STORYBOOK_MODULE_PREVIEW_API__,h={title:"Surfaces/Toast",component:p,args:{}},n={args:{title:"Agendamento realizado",open:!1},render:function(d){const[{open:e},i]=u();function o(){i({open:!e})}return r.jsx(p,{...d,open:e,setOpen:o,children:r.jsx(c,{onClick:o,children:"Add to calendar"})})}};var t,s,a;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    title: 'Agendamento realizado',
    open: false
  },
  render: function Render(args) {
    const [{
      open
    }, updateArgs] = useArgs();
    function onChange(): void {
      updateArgs({
        open: !open
      });
    }
    return <Toast {...args} open={open} setOpen={onChange}>
        <Button onClick={onChange}>
          Add to calendar
        </Button>
      </Toast>;
  }
}`,...(a=(s=n.parameters)==null?void 0:s.docs)==null?void 0:a.source}}};const x=["Primary"];export{n as Primary,x as __namedExportsOrder,h as default};
