﻿using System;
using System.Collections.Generic;
using System.Text;

namespace ShadyNagy.Blazor.JavaScriptUtilities.Constants
{
    internal static class JSInteropCommands
    {
        internal static string HideScrollOverflowByTagCommand => "function hide(n,t){t===1?n.classList.add('blazor-javascript-v-no-overflow'):t===2?n.classList.add('blazor-javascript-h-no-overflow'):(n.classList.add('blazor-javascript-v-no-overflow'),n.classList.add('blazor-javascript-h-no-overflow'))}function show(n,t){t===1?n.classList.remove('blazor-javascript-v-no-overflow'):t===2?n.classList.remove('blazor-javascript-h-no-overflow'):(n.classList.remove('blazor-javascript-v-no-overflow'),n.classList.remove('blazor-javascript-h-no-overflow'))}window.hideScrollOverflowByTag=(n,t)=>{var r,i;if(n==='body')hide(document.body,t);else{r=document.getElementsByTagName(n);for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&i.classList!==undefined&&hide(i,t)}};window.hideScrollOverflowByClass=(n,t)=>{var r,i;if(n==='body')hide(document.body,t);else{r=document.getElementsByClassName(n);for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&i.classList!==undefined&&hide(i,t)}};window.showScrollOverflowByTag=(n,t)=>{var r,i;if(n==='body')show(document.body,t);else{r=document.getElementsByTagName(n);for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&i.classList!==undefined&&show(i,t)}};window.showScrollOverflowByClass=(n,t)=>{var r,i;if(n==='body')show(document.body,t);else{r=document.getElementsByClassName(n);for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&i.classList!==undefined&&show(i,t)}};window.hideBodyScrollOverflow=n=>{hide(document.body,n)};window.showBodyScrollOverflow=n=>{show(document.body,n)};";
    }
}
