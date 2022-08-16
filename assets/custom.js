/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 *
 * If you just want to force refresh the mini-cart without adding a specific product, you can trigger the event
 * "cart:refresh" in a similar way (in that case, passing the quantity is not necessary):
 *
 * document.documentElement.dispatchEvent(new CustomEvent('cart:refresh', {
 *   bubbles: true
 * }));
 */

$(document).ready(function(){
  $(window).resize(function(){
    headerCustom();
  })
  headerCustom();
  function headerCustom(){
    var headerSticky = $('#shopify-section-header');
    var annBar = $('#section-announcement').outerHeight();
    if ($('.Custom-Header').hasClass('Header--transparent')){
        headerSticky.addClass('header-block');
        headerSticky.attr('style', 'top: '+ annBar+'px');
    }else{
        headerSticky.removeClass('header-block');
        headerSticky.attr('style', 'top: 0');
    }
  }
  var prevScrollpos = $(window).scrollTop();  
   $(window).scroll(function(){
     var headerSticky = $('#shopify-section-header');
     var annBar = $('#section-announcement').outerHeight();
     var currentScrollpos = $(window).scrollTop();
     
    if(prevScrollpos > annBar){
      headerSticky.removeClass('header-block');
      headerSticky.attr('style', 'top: 0');
    }else{
      headerSticky.addClass('header-block');
      headerSticky.attr('style', 'top: '+ annBar+'px');
    }
    prevScrollpos = currentScrollpos;
   })
})