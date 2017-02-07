$(function() {
    $.fn.fullpage({
        verticalCentered: false,
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5', 'section6'],
        navigation: true,
        navigationTooltips: ['首页', '视觉', '皮肤', '功能', '联系人邮件', '马上体验'],
        afterRender: function(){
                $('.bg12').animate({
                    opacity: '1',
                    marginTop: '150px'
                }, 'slow');
                $('.bg13').animate({
                    opacity: '1',
                    bottom:0
                }, 'slow');
                $('.hgroup').fadeIn(1000);
                $('.mail').animate({
                    opacity: '1',
                    top:'25px'
                }, 'slow');
        },
    	afterLoad: function(anchorLink,index) {
            if (index == 1) {
                $('.bg12').delay(800).animate({
                    opacity: '1',
                    marginTop: '150px'
                }, 'slow');
                $('.bg13').delay(600).animate({
                    opacity: '1',
                    bottom:0
                }, 'slow');
                $('.hgroup').delay(300).fadeIn(1000);
                $('.mail').animate({
                    opacity: '1',
                    top:'25px'
                }, 'slow');
            }
            if (index==2) {
            	$('strong,h3').animate({
            		opacity:1,
            	}, '2000');
            	$('.bg21').animate({
            		opacity:1,
            		marginLeft:'-608px'
            	}, 'slow');
            	$('.bg22').animate({
            		opacity:1,
            		marginLeft:'-280px'
            	}, 'slow');
            	$('.bg23').animate({
            		bottom:'15%'
            	}, 'slow');
            }
            if (index==3) {
            	$('strong,h3').delay(300).animate({
            		opacity:1,
            	}, '2000');
            	$('.bg31').delay(300).animate({
            		bottom: '15%'
            	}, 'slow');
            	$('.bg32').delay(500).animate({
            		bottom: '15%'
            	}, 'slow');
            	$('.bg33').delay(400).animate({
            		bottom: '15%'
            	}, 'slow');
            }
            if (index==4) {
            	$('strong,h3').delay(300).animate({
            		opacity:1,
            	}, '2000');
            	$('.bg41').delay(700).animate({
            		marginLeft: '-551px',
    				opacity: 1
            	}, 'slow');
            	$('.bg42').delay(700).animate({
            		marginLeft: '-253px',
    				opacity: 1
            	}, 'slow');
            	$('.bg43').delay(700).animate({
            		marginLeft:'45px',
            		opacity: 1
            	}, 'slow')
            	$('.bg44').delay(700).animate({
            		marginLeft:'345px',
            		opacity: 1
            	}, 'slow');   	
            }
            if (index==5) {
            	$('strong,h3').animate({
            		opacity:1,
            	}, '2000');
            	$('.bg51').delay(700).animate({
            		bottom:'250px',
            		opacity:1
            	}, 'slow');
            	$('.bg52').delay(900).animate({
            		top:'35%',
            		opacity:1
            	}, 'slow');
            	$('.txt5').delay(1100).animate({
            		bottom:'420px',
            		opacity:1
            	}, 'slow');
            }
            if (index==6) {
            	$('.bg62').animate({
            		opacity: 1
            	}, 'slow');
            	$('.bg63').animate({
            		opacity: 1
            	}, 'slow');
            	$('.go').delay(500).animate({
            		top:'21%',
            		opacity:1
            	}, 'slow');
            }
        },
    	onLeave: function(index,nextIndex,direction) {
            if (index == 1) {
                $('.bg12').animate({
                    opacity: '0',
                    marginTop: '600px'
                }, 'slow');
                $('.bg13').animate({
                    opacity: '0',
                    bottom:'-357px'
                }, 'slow');
                $('.hgroup').fadeOut(1000);
                $('.mail').animate({
                    opacity: '0',
                    top:'-26px;'
                }, 'slow');
            }
             if (index==2) {
            	$('strong,h3').animate({
            		opacity:0,
            	}, '2000');
            	$('.bg21').animate({
            		opacity:0,
            		marginLeft:'-1108px'
            	}, 'slow');
            	$('.bg22').animate({
            		opacity:0,
            		marginLeft:'320px'
            	}, 'slow');
            	$('.bg23').animate({
            		bottom:'-60%'
            	}, 'slow');
            }
            if (index==3) {
            	$('strong,h3').animate({
            		opacity:0,
            	}, '2000');
            	$('.bg31').animate({
            		bottom: '-372px'
            	}, 'slow');
            	$('.bg32').animate({
            		bottom: '-449px'
            	}, 'slow');
            	$('.bg33').animate({
            		bottom: '-449px'
            	}, 'slow');
            }
            if (index==4) {
            	$('strong,h3').animate({
            		opacity:0,
            	}, '2000');
            	$('.bg41').animate({
            		marginLeft: '-800px',
    				opacity: 0
            	}, 'slow');
            	$('.bg42').animate({
            		marginLeft: '-400px',
    				opacity: 0
            	}, 'slow');
            	$('.bg43').animate({
            		marginLeft:'200px',
            		opacity: 0
            	}, 'slow')
            	$('.bg44').animate({
            		marginLeft:'500px',
            		opacity: 0
            	}, 'slow');   	
            }
            if (index==5) {
            	$('strong,h3').animate({
            		opacity:0,
            	}, '2000');
            	$('.bg51').animate({
            		bottom:'250px',
            		opacity:0
            	}, 'slow');
            	$('.bg52').animate({
            		top:'55%',
            		opacity:0
            	}, 'slow');
            	$('.txt5').animate({
            		bottom:'420px',
            		opacity:0
            	}, 'slow');
            }
            if (index==6) {
            	$('.bg62').animate({
            		opacity: 0
            	}, 'slow');
            	$('.bg63').animate({
            		opacity: 0
            	}, 'slow');
            	$('.go').animate({
            		top:'55%',
            		opacity:0
            	}, 'slow');
            }
        },
    });

});
