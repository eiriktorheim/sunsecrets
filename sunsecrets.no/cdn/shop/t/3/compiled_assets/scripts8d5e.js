(function(){var __sections__={};(function(){for(var i=0,s=document.getElementById("sections-script").getAttribute("data-sections").split(",");i<s.length;i++)__sections__[s[i]]=!0})(),function(){if(__sections__["product-recommendations"])try{var loadProductRecommendationsIntoSection=function(){var productRecommendationsSection=document.querySelector(".product-recommendations");if(productRecommendationsSection!==null){var request=new XMLHttpRequest;request.open("GET",productRecommendationsSection.dataset.url),request.onload=function(){if(request.status>=200&&request.status<300){var container=document.createElement("div");container.innerHTML=request.response,productRecommendationsSection.innerHTML=container.querySelector(".product-recommendations").innerHTML,theme.ProductBlockManager.loadImages(productRecommendationsSection),theme.initAnimateOnScroll()}},request.send()}};document.addEventListener("shopify:section:load",function(event){document.querySelector('[data-section-id="'+event.detail.sectionId+'"].product-recommendations')&&loadProductRecommendationsIntoSection()}),loadProductRecommendationsIntoSection()}catch(e){console.error(e)}}()})();
//# sourceMappingURL=/cdn/shop/t/3/compiled_assets/scripts.js.map?147=
