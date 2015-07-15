var faq;

$(document).ready(function(){
	$('.cd-btn').on('click', function(event){
		event.preventDefault();
		$('.cd-panel').addClass('is-visible');
	});	
	$('.cd-panel').on('click', function(event){
		if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
			$('.cd-panel').removeClass('is-visible');
			event.preventDefault();
		}
	});
	if($("#storeListScroll").length>0){
		$("#storeListScroll").mCustomScrollbar({
	      scrollButtons:{enable:true},
	      theme:"light-thick"      
	    });
	}
	$('.tabCont').hide();
    $('.tabCont:first').show();
    $('.tabs li:first').addClass('active');
      $('.tabs li a').click(function(){
      $('.tabs li').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('.tabCont').hide();
    $(currentTab).show();
    return false;
    });

  	var menuTimer;
	$('#navbar').on('mouseenter','.menu > li',function () {
			var t = this;
			menuTimer = setTimeout(function(){
				$('.dropwrap', t).stop(true, true).slideDown(600);
				$('.dropwrap', t).prev('a').addClass('hover');
			},300);
	});

    $('#navbar').on('mouseleave','.menu > li',function () {
		clearTimeout(menuTimer);
		$('.dropwrap', this).stop(true, true).slideUp(200);   
		$('.dropwrap', this).prev('a').removeClass('hover'); 
	});
	
	$('#mobileNav').on('click','.menu > li > a',function () {
		if ($(this).hasClass("hover")){
			$('#mobileNav .menu > li a').removeClass('hover');
			$(this).removeClass('hover');
			$(this).parent('li').find('.dropwrap').slideUp();					
		}
		else{
			$('#mobileNav .menu > li a').removeClass('hover');
			$(this).addClass('hover');
			$('.dropwrap').slideUp();
			$(this).parent('li').find('.dropwrap').slideDown();			
		}
	});
	$('#mobileNav').on('click','.dropsub > h4',function () {
		if ($(this).hasClass("select")){
			$('#mobileNav .dropsub > h4').removeClass('select');
			$(this).removeClass('select');
			$(this).parent('.dropsub').find('ul').slideUp();					
		}
		else{
			$('#mobileNav .dropsub > h4').removeClass('select');
			$(this).addClass('select');
			$('.dropsub ul').slideUp();
			$(this).parent('.dropsub').find('ul').slideDown();			
		}
	});
	$(".mob-filter").click(function(){   
		$(this).parents().find('.mobFilterList').slideToggle();
		return false;
	});

	// $(".leftrow h4").click(function(){   
	// 	//$("ul.faqrow li h4 i").addClass('fa-plus-circle').removeClass('fa-minus-circle');		
	// 	$(this).parent().siblings().children().next().slideUp();		
	// 	//$(this).children('i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
	// 	$(this).next('ul').slideToggle(function(){
	// 		// if ($(this).parent().find('.faqcontent').css('display')=='none') {
	// 		// 	$("ul.faqrow li h4 i").addClass('fa-plus-circle').removeClass('fa-minus-circle');
	// 		// }
	// 	});
	// 	return false;
	// });


	$("ul.faqrow li h4").click(function(){   
		$("ul.faqrow li h4 i").addClass('fa-plus-circle').removeClass('fa-minus-circle');		
		$(this).parent().siblings().children().next().slideUp();		
		$(this).children('i').addClass('fa-minus-circle').removeClass('fa-plus-circle');
		$(this).next('.faqcontent').slideToggle(function(){
			if ($(this).parent().find('.faqcontent').css('display')=='none') {
				$("ul.faqrow li h4 i").addClass('fa-plus-circle').removeClass('fa-minus-circle');
			}
		});
		return false;
	}); 

	$('.sploffer small a').click(function(){
		$(this).parents().find('.splofferContent').slideToggle();
		return false;		
	});

	$('#loginctn').click(function(){
		$(this).parents().find('.signupWrap').slideToggle();
		$(this).parents().find('.accountWrap').slideUp();
	});
	$('#account').click(function(){
		$(this).parents().find('.accountWrap').slideToggle();
		$(this).parents().find('.signupWrap').slideUp();		
	});
	$('#fa-search').click(function(){
		$(this).parents().find('.searchBlock').slideToggle();
		$(this).parents().find('.cartBlock').slideUp();
	});
	$('#faLock').click(function(){
		$(this).parents().find('.cartBlock').slideToggle();
		$(this).parents().find('.searchBlock').slideUp();
	});
	$('.cartCtn').click(function(){		
		$(this).parents().find('.cartBlock').slideUp();
	});
	$(".cart-ctn").hover(function(){
		$(this).parents('li').find('.cart-ctn-tooltip').fadeIn();
		return false;
	});
	$(".cart-ctn").mouseleave(function(){
		$(this).parents('li').find('.cart-ctn-tooltip').fadeOut();
		return false;
	});
	if($(".productSlider").length>0){
		$('.productSlider').bxSlider({
		  auto: false,
		  pager:false,
		  controls:true
		});
	}
	if($("#heroSlider").length>0){
		$('#heroSlider').bxSlider({
		  auto: true,
		  pager:false,
		  controls:true
		});
	}
	if($("#bestseller").length>0){
		var carousel = $('#bestseller').carousel({
			itemWidth:185,
			itemHeight:250,
			distance:80,
			startIndex:'auto',
			enableMouseWheel:false,		
			selectedItemDistance:30
		});
	}
 	if($("#recentViewedList").length>0){
		$("#recentViewedList").owlCarousel({ 
	      autoPlay:false,
	      items : 3,
	      pagination:false,
	      navigation:true,
	      itemsDesktop : [1199,3],
	      itemsDesktopSmall : [979,2] 
	 	});
	}
	if($("#topOffers").length>0){
		$("#topOffers").owlCarousel({ 
	      autoPlay:false,
	      items :2,
	      pagination:false,
	      navigation:true,
	      itemsDesktop : [1199,2],
	      itemsDesktopSmall : [979,2] 
	 	});
	}
	if($(".bestsellerSlider").length>0){
		$('.bestsellerSlider').bxSlider({
		  minSlides: 2,
		  maxSlides: 2,
		  slideWidth:200,
		  pager:false,
		  controls:true,
		  moveSlides:1,
		  slideMargin:40
		});
	}
	if($(".recentviewitems").length>0){
		$('.recentviewitems').bxSlider({
		  minSlides: 2,
		  maxSlides: 2,
		  slideWidth:200,
		  pager:false,
		  controls:true,
		  moveSlides:1,
		  slideMargin:40
		});
	}
	if($(".slider3item").length>0){
		$('.slider3item').bxSlider({
		  minSlides: 3,
		  maxSlides: 3,
		  slideWidth:200,
		  pager:false,
		  controls:true,
		  moveSlides:1,
		  slideMargin:20
		});
	}
	if($(".worksWellslider").length>0){
		$('.worksWellslider').bxSlider({
		  minSlides: 2,
		  maxSlides: 2,
		  slideWidth:300,
		  pager:false,
		  controls:true,
		  moveSlides:1,
		  slideMargin:20
		});
	}
	if($(".proThumb").length>0){
	    $('.proThumb').bxSlider({
			mode: 'vertical',
			slideWidth:58,
			minSlides:3,
			pager:false,
			moveSlides:1,
			infiniteLoop:false,
			hideControlOnEnd:true,
			slideMargin: 10
	    });
    }    
    shoppingBag();
    //pop 1
	$('.newsletter').click(function(){
  		$(this).parents().find('.newsletterPopup').fadeIn();
  		$(this).parents().find('.overlay').fadeIn();
  		return false;
  	});
  	$('.overlay').click(function(){
  		$(this).parents().find('.newsletterPopup').fadeOut();
  		$(this).fadeOut();
  		return false;
  	});
  	$('.closeCtn').click(function(){
  		$(this).parents().find('.newsletterPopup').fadeOut();
  		$(this).parents().find('.overlay').fadeOut();
  		return false;
  	});
  	//pop 2
  	$('#e-signup').click(function(){
  		$(this).parents().find('#emailSignup').fadeIn();
  		$(this).parents().find('.overlay').fadeIn();
  		return false;
  	});
  	$('.overlay').click(function(){
  		$(this).parents().find('#emailSignup').fadeOut();
  		$(this).fadeOut();
  		return false;
  	});
  	$('.closeCtn').click(function(){
  		$(this).parents().find('#emailSignup').fadeOut();
  		$(this).parents().find('.overlay').fadeOut();
  		return false;
  	});
  	//pop 3
  	$('.e-account').click(function(){
  		$(this).parents().find('#registerPopup').fadeIn();
  		$(this).parents().find('.overlay').fadeIn();
  		return false;
  	});
  	$('.overlay').click(function(){
  		$(this).parents().find('#registerPopup').fadeOut();
  		$(this).fadeOut();
  		return false;
  	});
  	$('.closeCtn').click(function(){
  		$(this).parents().find('#registerPopup').fadeOut();
  		$(this).parents().find('.overlay').fadeOut();
  		return false;
  	});
  	//pop 4
  	$('#e-login').click(function(){
  		$(this).parents().find('#loginPopup').fadeIn();
  		$(this).parents().find('.overlay').fadeIn();
  		return false;
  	});
  	$('.overlay').click(function(){
  		$(this).parents().find('#loginPopup').fadeOut();
  		$(this).fadeOut();
  		return false;
  	});
  	$('.closeCtn').click(function(){
  		$(this).parents().find('#loginPopup').fadeOut();
  		$(this).parents().find('.overlay').fadeOut();
  		return false;
  	});
  	//pop 5
  	$('#e-login2').click(function(){
  		$(this).parents().find('#loginSignup').fadeIn();
  		$(this).parents().find('.overlay').fadeIn();
  		return false;
  	});
  	$('.overlay').click(function(){
  		$(this).parents().find('#loginSignup').fadeOut();
  		$(this).fadeOut();
  		return false;
  	});
  	$('.closeCtn').click(function(){
  		$(this).parents().find('#loginSignup').fadeOut();
  		$(this).parents().find('.overlay').fadeOut();
  		return false;
  	});
  	
  	//pop checkbox
  	$(document).on('click','span.checkbox',function(){
  		$(this).next().trigger('change');
  	});
  	$('#loginSignup #ba-account').change(function(){
  		var visitorStatus = $(this).val();	
		if($(this).is(':checked')){						
			$(this).parents('#loginSignup').find('#ba-pasword').show();
			$(this).parents('#loginSignup').find('#ba-login').show();			
			$(this).parents('#loginSignup').find('#ba-forget').show();			
			$(this).parents('#loginSignup').find('#ba-guest').hide();			
		}
		else{
			$(this).parents('#loginSignup').find('#ba-pasword').hide();
			$(this).parents('#loginSignup').find('#ba-login').hide();
			$(this).parents('#loginSignup').find('#ba-forget').hide();
			$(this).parents('#loginSignup').find('#ba-guest').show();			
		}		
	});
  	//
  	$('ul.filterList li .filterbox').click(function(){  		
  		$(this).parents('ul.filterList li').find('.fb-Description').fadeIn();  		
  		return false;
  	});
  	$('.close-ctn').click(function(){
  		$(this).parents().find('.fb-Description').fadeOut();  		
  		return false;
  	});
  	$('.socialTabContent').hide();
    $('.socialTabContent:first').show();
    $('ul.socialTab li:first').addClass('active');
      $('ul.socialTab li a').click(function(){
      $('ul.socialTab li').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('.socialTabContent').hide();
    $(currentTab).show();
    return false;
    });
    $('.filterTabContent').hide();
    $('.filterTabContent:first').show();
    $('ul.filtertab li:first').addClass('active');
      $('ul.filtertab li a').click(function(){
      $('ul.filtertab li').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('.filterTabContent').hide();
    $(currentTab).show();
    return false;
    });
    $('.aboutTabcon').hide();
    $('.aboutTabcon:first').show();
    $('ul.aboutTab li:first').addClass('active');
      $('ul.aboutTab li a').click(function(){
      $('ul.aboutTab li').removeClass('active');
    $(this).parent().addClass('active');
    var currentTab = $(this).attr('href');
    $('.aboutTabcon').hide();
    $(currentTab).show();
    return false;
    });
	var slide = false;
	var height = $('.footerStripBottom').height();
	$('.downArrow').click(function() {
		var docHeight = $(document).height();
		var windowHeight = $(window).height();
		var scrollPos = docHeight - windowHeight + height;
		$('.footerStripBottom').animate({ height: "toggle"}, 1000);
		if(slide == false) {
			if($.browser.opera) {
				$('html').animate({scrollTop: scrollPos+'px'}, 1000);
			} else {
				$('html, body').animate({scrollTop: scrollPos+'px'}, 1000);
			}
			slide = true;
		} else {
			slide = false;
		}		
	});
	$('.stripContent').hide();
    $('.stripContent:first').show();
    $('.stripLinks li:first').addClass('active');
      	$('.stripLinks li a').click(function(){
      	$('.stripLinks li').removeClass('active');
    	$(this).parent().addClass('active');
    	var currentTab = $(this).attr('href');
    	$('.stripContent').hide();
    	$(currentTab).show();
    	$('.footerStripBottom').animate({height: "show"}, 1000);
   		return false;
    });    
    $("ul.menu > li").eq(7).after($('.mob-item'));
    var clone = $('ul.menu').clone();
	$('#mobileNav').append(clone);

	var colectionLeftClone = $('.collectionLeft .promo-box p,.collectionLeft .promo-box .view-cnt').clone();
	$('.collectionLeft .collectionMobile').append(colectionLeftClone);

	var colectionRightClone = $('.collectionRight .promo-box p,.collectionRight .promo-box .view-cnt').clone();
	$('.collectionRight .collectionMobile').append(colectionRightClone);

	var needHelp = $('.helpBox').clone();
	$('.helpBoxdown').append(needHelp);

	var sortList = $('.shortWrap .drop').clone();
	$('.mobileFilter ul.mobFilter li.mob-sort-by').append(sortList);

	var appendVar1 = $('.detailSec .bioSec').clone();
	$('.m-apnd-row').append(appendVar1);

	var appendVar2 = $('.wb1').clone();
	$('.m2-apnd-row').append(appendVar2);

	var appendVar3 = $('.shopContainer .detailSec .sploffer').clone();
	$('#m-so').append(appendVar3);

	var appendVar4 = $('.wb2').clone();
	$('#m-cd').append(appendVar4);

    values=new Array();
	i=0;
	jQuery('input[type=text],input[type=email],textarea').each(function(){
		values[i]=jQuery(this).val();
		jQuery(this).attr('dval',i);
		i++;
	});
	jQuery('input[type=text],input[type=email],textarea').focus(function(){
		dval=jQuery(this).attr('dval');
		val=jQuery(this).val();
		if(val==values[dval])jQuery(this).val('');
	});
	jQuery('input[type=text],textarea').blur(function(){
		dval=jQuery(this).attr('dval');
		val=jQuery(this).val();
		if(val=='')jQuery(this).val(values[dval]);
	});
	if($(".stylish-drop").length>0){
		$('.stylish-drop').sSelect();
	}
	$('ul.concernsList li').click(function(){		
		if($(this).hasClass('selected')){			
			$(this).removeClass('selected');
		}
		else{
			$(this).addClass('selected');			
		}
		return false;					
	});
	// $('.leftrow h4').click(function(){		
	// 	if($('i',$(this)).hasClass('fa-caret-down')){			
	// 		$('i',$(this)).removeClass('fa-caret-down');
	// 		$('i',$(this)).addClass('fa-caret-right');
	// 		$(this).parents('.leftrow').find('.leftrowList,.concernsList').slideUp();
	// 	}
	// 	else{			
	// 		$('i',$(this)).removeClass('fa-caret-right');
	// 		$('i',$(this)).addClass('fa-caret-down');
	// 		$(this).parents('.leftrow').find('.leftrowList,.concernsList').slideDown();
	// 	}
	// 	return false;					
	// });

	if($("#image1, #description, #image2, #description2").length>0){
		$('#image1, #description, #image2, #description2').multizoomhide();
	}

	if($("#image1").length>0){
		$('#image1').addimagezoom({
	      descArea: '#description',
	      speed: 1500,
	      descpos: true,
	      //imagevertcenter: true,
	      //magvertcenter: true,
	      zoomrange: [3, 10],
	      magnifiersize: [335,335],
	      magnifierpos: 'right',
	      cursorshade: true
	    });
	}
	if($("#image2").length>0){
		$('#image2').addimagezoom({
	      descArea: '#description2',
	      disablewheel: true
	    });
	}
    
    $('.increase-ctn').on('click',function(e){		
var $qty=$(this).parents('.qty').find('input');
var currentVal = parseInt($qty.val());
if (!isNaN(currentVal)) {
    $qty.val(currentVal + 1);
}
		e.preventDefault();
		update_cost();
    });
    $('.decrease-ctn').on('click',function(e){
var $qty=$(this).parents('.qty').find('input');
var currentVal = parseInt($qty.val());
if (!isNaN(currentVal) && currentVal > 1) {
    $qty.val(currentVal - 1);
}
		e.preventDefault();
    });

    
 
});

/*Check for the number of FREE samples*/
$(document).ready(function(){
	var sampleCount=1;
    var $checkboxes = $('.giftProduct input[type="checkbox"]');
	$checkboxes.change(function(){
		if( $checkboxes.filter(':checked').length  > sampleCount){
			$(this).attr('disabled','disabled');
			 $(this).parent().find('.checkbox').css('background-position',0);
			 $(this).removeAttr('checked');
		}
		else{
			 $checkboxes.removeAttr('disabled');
		}		
    });	
	$('.newAddress').click(function(e) {    
		$(this).parent().before('<li><div class="dAddress"><address><span class="name"><input type="text" placeholder="Name"/> </span><span class="block"><input type="text" placeholder="Address 1"/></span><span class="locality"><input type="text" placeholder="Address 2"/> </span><span class="pCode"><input type="text" placeholder="Pincode"/> </span><span class="mobile"><input type="text" placeholder="Mobile"/> </span></address></div><a href="#" class="addressRemove">Save</a><a href="#" class="editAddress" >Cancel</a></li> ');
	    
    });
	productListing();
});


function collectionHeight(){	
	var elementAoutheight = $('.col-img figure img').outerHeight();
	var elementAoutheight2 = $('.defineProductImg figure img').outerHeight();
	var elementAoutheight3 = $('ul.filterList li .filterbox').outerHeight();
	var elementAoutheight4 = $('ul.filterList li .filterbox').outerHeight();
	$('.promo-box').css({ 'height': elementAoutheight + "px" });	
	$('.circlecontent figure img').css({ 'height': elementAoutheight2 + "px" });	
	$('.fb-Description').css({ 'height': elementAoutheight3 + "px" });	
	$('.descriptionRight').css({ 'height': elementAoutheight4 + "px" });
	$('.careerBlock').each(function(){  
var highestBox = 0;
$('.guideBox', this).each(function(){

    if($(this).height() > highestBox) 
       highestBox = $(this).height(); 
});  

$('.guideBox',this).height(highestBox);

    });
    $('.contactUsBlock').each(function(){  
var highestBox = 0;
$('.contactColm3', this).each(function(){

    if($(this).height() > highestBox) 
       highestBox = $(this).height(); 
});  

$('.contactColm3',this).height(highestBox);

    });	
}

function shoppingBag() {
    var windowSize = $(window).width();
    if (windowSize <= 479) {

    }
    else if (windowSize <= 767) {
    		if($("#shoppingSlider").length>0){
		    $('#shoppingSlider').bxSlider({
		      minSlides:2,
			  maxSlides:2,
			  slideWidth:200,
			  pager:false,
			  controls:true,
			  moveSlides:1,
			  slideMargin:2
		    });
		}  
    }
    else if (windowSize <= 992) {
if($("#shoppingSlider").length>0){
		    $('#shoppingSlider').bxSlider({
		      minSlides:2,
			  maxSlides:2,
			  slideWidth:200,
			  pager:false,
			  controls:true,
			  moveSlides:1,
			  slideMargin:2
		    });
		}
    } 
    else{
    	if($("#shoppingSlider").length>0){
		    $('#shoppingSlider').bxSlider({
		      minSlides:4,
			  maxSlides:4,
			  slideWidth:200,
			  pager:false,
			  controls:true,
			  moveSlides:1,
			  slideMargin:2
		    });
		}
    }  
}
function productListing(){
	var windowSize = $(window).width();
	if($(window).width()<=767){
		$('.leftrow h4 span i').removeClass('fa-caret-down').addClass('fa-caret-right');
		$('.leftrow h4').click(function(){   
			$('.leftrow h4 span i').addClass('fa-caret-right').removeClass('fa-caret-down');		
			$(this).parent().siblings().children().next().slideUp();		
			$(this).children().find('i').addClass('fa-caret-down').removeClass('fa-caret-right');
			$(this).next('.proaccordian').slideToggle(function(){
				if ($(this).parent().find('.proaccordian').css('display')=='none') {
					$('.leftrow h4 span i').addClass('fa-caret-right').removeClass('fa-caret-down');
				}
			});
			return false;
	});		
	}
	else{
		$('.leftrow h4 span i').removeClass('fa-caret-right').addClass('fa-caret-down');		
	}
}

//function changeul(faq){
//	if(faq<=767){
//		$('ul.pressSideLink').each(function(){
//			var list = $(this), select = $(document.createElement('select')).insertBefore($(this).hide());
//			$("select").addClass("stylish-drop");
//			$('> li a',this).each(function(){
//				var target = $(this).attr('target'), option = $(document.createElement('option'))
//				.appendTo(select)
//				.val(this.href)
//				.html($(this).html())
//				.click(function(){
//					if(target === '_blank'){
//						window.open($(this).val());
//					}else{
//						window.location.href = $(this).val();
//					}
//				});
//			});
//			list.remove();	
//		});
//	}else{
//		$('.change-ul select').parent().append('<ul class="pressSideLink" name="pressSideLink"></ul>');
//		$('.change-ul select option').each(function(){
//			$('ul.pressSideLink').append('<li><a href="' + $(this).val() + '">'+$(this).text()+'</a> <i class="fa fa-caret-right"></i> </li>');				
//		});
//		$('.change-ul select').remove();
//		$('ul.pressSideLink').attr('class', 'pressSideLink');	
//	}
//}



$(window).load(function() {	
	collectionHeight();	
	faq = $(window).width();
	changeul(faq);	
});
$(window).resize(function() {	
	collectionHeight();
	shoppingBag();
	productListing();
	faq = $(window).width();
	changeul(faq);	
});


