function vplayercall(e,o,l,t,i){jwplayer(t).setup({autostart:i,flashplayer:"/content/dam/infosys-web/en/audio/vplayer.swf",playlistfile:"/content/dam/infosys-web/en/video/vplayer/"+e+".xml",backcolor:"000000",frontcolor:"EEEEEE",lightcolor:"66FFFF",width:o,height:l,mute:"true",author:"Infosys Limited",abouttext:"Infosys Limited",aboutlink:"http://www.infosys.com","controlbar.position":"over",plugins:{"/content/dam/infosys-web/en/audio/viral-2h.swf":{onpause:"false",oncomplete:"false",allowmenu:"false",functions:"embed"}}})}function vplayercallFill(e,o,l,t,i,n){jwplayer(i).setup({autostart:n,flashplayer:"/richmedia/players/vplayer.swf",playlistfile:"/Videos/vplayer/"+e+".xml",backcolor:"000000",frontcolor:"EEEEEE",lightcolor:"66FFFF",width:"100%",height:t-10,"logo.file":"/SiteCollectionImages/infosys-logo.png","logo.position":"top-left",author:"Infosys Limited",abouttext:"Infosys Limited",aboutlink:"http://www.infosys.com",skin:"/richmedia/players/vskin/infosys.zip",stretching:"fill","controlbar.position":"over",plugins:{"/richmedia/players/viral-2h.swf":{onpause:"false",oncomplete:"false",allowmenu:"false",functions:"embed"}}})}function vplayercallhei(e,o,l,t,i,n){jwplayer(i).setup({autostart:n,flashplayer:"/richmedia/players/vplayer.swf",playlistfile:"/Videos/vplayer/"+e+".xml",backcolor:"000000",frontcolor:"EEEEEE",lightcolor:"66FFFF",width:"100%","logo.file":"/SiteCollectionImages/infosys-logo.png","logo.position":"top-left",author:"Infosys Limited",abouttext:"Infosys Limited",aboutlink:"http://www.infosys.com",skin:"/richmedia/players/vskin/infosys.zip",stretching:"fill","controlbar.position":"over",plugins:{"/richmedia/players/viral-2h.swf":{onpause:"false",oncomplete:"false",allowmenu:"false",functions:"embed"}}})}function vplayercAudio(e,o,l,t){var i=$(window).width(),n="55";i>1024&&(n="22"),jwplayer(l).setup({autostart:t,flashplayer:"/content/dam/infosys-web/en/audio/vplayer.swf",playlistfile:"/content/dam/infosys-web/en/audio/vplayer/"+e+".xml",backcolor:"000000",frontcolor:"EEEEEE",lightcolor:"66FFFF",controlbar:"bottom",width:o,height:n,author:"Infosys Limited",abouttext:"Infosys Limited",aboutlink:"http://www.infosys.com",plugins:{"/content/dam/infosys-web/en/audio/viral-2h.swf":{onpause:"false",oncomplete:"false",allowmenu:"false",functions:"embed"}}})}$(function(){null!=document.getElementById("galler")&&$(".gallery a[rel^='prettyPhoto']").prettyPhoto();$("#currentSiteUrl").val();null!=document.getElementById("inner-page-slider")&&$("#inner-page-slider").after('<div id="inner-page-slider-pager">').cycle({fx:"scrollHorz",speed:400,pause:1,timeout:4500,next:"#inner-page-slider-next",prev:"#inner-page-slider-prev",pager:"#inner-page-slider-pager",pagerAnchorBuilder:function(e,o){return'<a href="#">&nbsp;</a>'}})});