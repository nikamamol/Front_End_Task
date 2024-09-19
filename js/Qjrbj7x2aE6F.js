var DTM_pageurl=window.location.pathname;DTM_pageurl=DTM_pageurl.toLowerCase();var DTM_pageURLs=DTM_pageurl.split("."),DTM_Sections=DTM_pageURLs[0].split("/"),DTM_channel="",DTM_subSection2="",DTM_subSection3="";if(DTM_Sections.length>2){if(DTM_channel=DTM_Sections[1],DTM_subSection2=DTM_Sections[2],DTM_Sections.length>3){DTM_subSection3=DTM_Sections[3];for(i=4;i<DTM_Sections.length-1;i++)DTM_subSection3=DTM_subSection3+" "+DTM_Sections[i]}}else DTM_channel="Home Page";var digitalData={page:{pageName:document.title,channel:DTM_channel,subSection2:DTM_subSection2,subSection3:DTM_subSection3}};if("/search/"==DTM_pageurl||"/search.html"==DTM_pageurl){var DTM_searchq=window.location.href;DTM_searchq=DTM_searchq.toLowerCase();var DTM_search_keyword=DTM_searchq.split("k=");DTM_search_keyword.length>1&&(DTM_search_keyword=DTM_search_keyword[1],DTM_search_keyword=DTM_search_keyword.replace(/%20/gi," "),digitalData={search:{internalSearchKeywords:DTM_search_keyword}})}OptanonActiveGroups=window.parent.OptanonActiveGroups;

window.addEventListener('load', function(){
    var myElement = document.getElementById("thankyou");
    if(myElement) {
        // Element exists
        document.getElementById("thankyou").innerHTML += '<div class="share-page share-page-top mt-50"><div class="social-share social-txt"><span>Follow us:</span></div><div class="social-share social-icons"><a target="_blank" title="Follow us on Linkedin" class="socialTitle" href="https://www.linkedin.com/company/infosys"><img src="/content/dam/infosys-web/en/careers/Images/2020/linkedin.png" alt="Linkedin"class="img-responsive"></a></div><div class="social-share social-icons"><a target="_blank" title="Follow us on Instagram" class="socialTitle" href="https://www.instagram.com/infosys/"><img src="/content/dam/infosys-web/en/careers/Images/2020/instagram.png" alt="Instagram" class="img-responsive"></a></div></div>';
        // console.log("Entered");
    }


    var e = document.querySelectorAll("a[target='_blank'][href^='http'],[target='_blank'][href^='https'],[target='_blank']");
    e.forEach(function (e) {
      e.setAttribute("rel", "noopener noreferrer")
    })
});