"use strict";var f=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var E=Object.getOwnPropertyNames;var B=Object.prototype.hasOwnProperty;var C=(e,t)=>{for(var n in t)f(e,n,{get:t[n],enumerable:!0})},F=(e,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of E(t))!B.call(e,i)&&i!==n&&f(e,i,{get:()=>t[i],enumerable:!(o=P(t,i))||o.enumerable});return e};var D=e=>F(f({},"__esModule",{value:!0}),e);var L={};C(L,{default:()=>N});module.exports=D(L);var m=require("react"),s=require("@raycast/api");var y=require("@raycast/api"),T=require("child_process");async function h(e){let n=!!await y.LocalStorage.getItem("terminalAppBundleId");return e(n),n}async function g(){let e=await y.LocalStorage.getItem("terminalAppBundleId");(0,T.execSync)(`open -b ${e}`)}var d=require("child_process");var x=Object.assign({},process.env,{PATH:"/usr/local/bin:/usr/bin:/opt/homebrew/bin"});var a=require("@raycast/api");function I(e){return(0,d.exec)('tmux list-windows -aF "#{session_name}:#{window_name}:#{window_index}"',{env:x},e)}async function A(e,t){let n=await(0,a.showToast)({style:a.Toast.Style.Animated,title:""});t(!0);let{sessionName:o,windowIndex:i,windowName:w}=e;(0,d.exec)(`tmux switch -t ${o}`,{env:x},async(l,r,c)=>{if(l||c){console.error(`exec error: ${l||c}`),n.style=a.Toast.Style.Failure,n.title="No tmux client found \u{1F622}",n.message=l?l.message:c,t(!1);return}(0,d.execSync)(`tmux select-window -t ${i}`,{env:x});try{await g(),n.style=a.Toast.Style.Success,n.title=`Switched to window ${w}`,await(0,a.showHUD)(`Switched to window ${w}`),t(!1)}catch{n.style=a.Toast.Style.Failure,n.title="Terminal not supported \u{1F622}",t(!1)}})}async function W(e,t,n){t(!0);let o=await(0,a.showToast)({style:a.Toast.Style.Animated,title:""});(0,d.exec)(`tmux kill-window -t ${e.sessionName}:${e.windowName}`,{env:x},(i,w,l)=>{if(i||l){console.error(`exec error: ${i||l}`),o.style=a.Toast.Style.Failure,o.title="Something went wrong \u{1F622}",o.message=i?i.message:l,t(!1);return}o.style=a.Toast.Style.Success,o.title=`Deleted window ${e.windowName}`,n(),t(!1)})}var u=require("react/jsx-runtime");function N(){let[e,t]=(0,m.useState)([]),[n,o]=(0,m.useState)(!0),[i,w]=(0,m.useState)(!1),l=()=>{I((r,c)=>{if(r){console.error(`exec error: ${r}`),o(!1);return}let p=c.trim().split(`
`);if(p?.length>0){let S=0,b=p.map($=>{let[v,k,_]=$.split(":");return S+=1,{keyIndex:S,sessionName:v,windowIndex:parseInt(_),windowName:k}});t(b)}o(!1)})};return(0,m.useEffect)(()=>{(async()=>{if(o(!0),!await h(w)){o(!1);return}})()},[]),(0,m.useEffect)(()=>{i&&(o(!0),l())},[i]),(0,m.useEffect)(()=>{n||i||(0,s.launchCommand)({type:s.LaunchType.UserInitiated,name:"choose_terminal_app",extensionName:"tmux-sessioner",ownerOrAuthorName:"louishuyng",context:{launcherCommand:"manage_tmux_windows"}})},[i,n]),(0,u.jsx)(s.List,{isLoading:n,children:e.map((r,c)=>(0,u.jsx)(s.List.Item,{icon:s.Icon.Window,title:r.windowName,subtitle:r.sessionName,actions:(0,u.jsxs)(s.ActionPanel,{children:[(0,u.jsx)(s.Action,{title:"Switch To Selected Window",onAction:()=>A(r,o)}),(0,u.jsx)(s.Action,{title:"Delete This Window",onAction:()=>W(r,o,()=>t(e.filter(p=>p.keyIndex!==r.keyIndex))),shortcut:{modifiers:["cmd"],key:"d"}})]})},c))})}
