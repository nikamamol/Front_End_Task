/*! *****************************************************************************
* Copyright (C) 2023 - 2024 Infosys Limited, Bangalore, India. All Rights Reserved.
* Version:1.0.0
* Except for any free or open source software components embedded in
* this Infosys proprietary software program ("Program"), this Program is protected
* by copyright laws, international treaties and other pending or existing
* intellectual property rights in India, the United States and other countries.
* Except as expressly permitted, any unauthorized reproduction, storage,
* transmission in any form or by any means (including without limitation
* electronic, mechanical, printing, photocopying, recording or otherwise), or any
* distribution of this Program, or any portion of it, may result in severe civil
* and criminal penalties, and will be prosecuted to the maximum extent possible
* under the law.
*
*
* This software contains code from open-source projects:
* 1. FingerprintJS by fingerprint.com (https://github.com/fingerprintjs/fingerprintjs)
* 2. BotD by fingerprint.com (https://github.com/fingerprintjs/BotD)
***************************************************************************** */


var n,e="Infosys-campaigns";function t(n){import("https://marcom.infosys.com/extcss/botd.js").then((n=>n.load())).then((n=>n.detect())).then((e=>{n.bdt=e.bot,a(n)})).catch((e=>{a(n)}))}function a(n){if(n.bdt){ document.getElementsByName("email64zxc").forEach(el => {el.value = String(Math.random() * 100);})}n.icamdt=encodeURIComponent(document.title);var t=window.parent.location.protocol+"//"+window.parent.location.hostname+window.parent.location.pathname;n.icamhn=encodeURIComponent(t),n.icamsid=e,n.icamr=encodeURIComponent(document.referrer);var a=document.createElement("img");a.id="id",a.className="class",a.style.display="none";var o="https://marcom.infosys.com/prof/infy/icam.gif?vrdta="+function(n){for(var e in n)null!==n[e]&&""!==n[e]||delete n[e];return btoa(JSON.stringify(n))}(n);a.src=o,document.body.appendChild(a)}(function(n){navigator.appVersion;var e,t,a,o=navigator.userAgent,i=navigator.appName,r=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10);-1!=(t=o.indexOf("Opera"))?(i="Opera",r=o.substring(t+6),-1!=(t=o.indexOf("Version"))&&(r=o.substring(t+8))):-1!=(t=o.indexOf("MSIE"))?(i="Microsoft Internet Explorer",r=o.substring(t+5)):-1!=(t=o.indexOf("Chrome"))?(i="Chrome",r=o.substring(t+7)):-1!=(t=o.indexOf("Safari"))?(i="Safari",r=o.substring(t+7),-1!=(t=o.indexOf("Version"))&&(r=o.substring(t+8))):-1!=(t=o.indexOf("Firefox"))?(i="Firefox",r=o.substring(t+8)):(e=o.lastIndexOf(" ")+1)<(t=o.lastIndexOf("/"))&&(i=o.substring(e,t),r=o.substring(t+1),i.toLowerCase()==i.toUpperCase()&&(i=navigator.appName)),-1!=(a=r.indexOf(";"))&&(r=r.substring(0,a)),-1!=(a=r.indexOf(" "))&&(r=r.substring(0,a)),s=parseInt(""+r,10),isNaN(s)&&(r=""+parseFloat(navigator.appVersion),s=parseInt(navigator.appVersion,10)),n.icambn=encodeURIComponent(i),n.icambfv=encodeURIComponent(r),n.icambmv=encodeURIComponent(s),n.icamappn=encodeURIComponent(navigator.appName)})(n={}),function(n){const e=import("https://marcom.infosys.com/extcss/fingerprint.js").then((n=>n.load({region:"ap"}))).catch((n=>{}));e&&e.then((n=>n.get())).then((e=>{const a=e.visitorId;n.fgp=a,t(n)})).catch((e=>{t(n)}))}(n);
