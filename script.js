
		



	var mobMin = window.matchMedia('all and (min-width: 320px)').matches;
	var mobMax = window.matchMedia('all and (max-width: 790px)').matches;
	
	var tabMin = window.matchMedia('all and (min-width: 791px)').matches;
	var tabMax = window.matchMedia('all and (max-width: 1024px)').matches;
	
	var deskMin = window.matchMedia('all and (min-width: 1025px)').matches;
	var deskMax = window.matchMedia('all and (max-width: 1550px)').matches;
	
	
// the width of browser is less then 790px				

//On Menu button click Functions
		$(document).ready(function(){    //Ready Function
  		$("#MenuClick").click(function(){  //When menu is Clicked, functions that happens are bgColor
		
			if ( mobMin && mobMax ) {
				$("#MenuClick").toggleClass("change");  //toggles bar-X
				$("#boDy").toggleClass("lockScroll");  //toggles body to overflow hidden when menu is Clicked
				$("#muda").slideUp("fast");	         //close Destination if it is Open, when menu is Closed
				$("#destiUpDown").removeClass("upArrowDesti"); //changes arrow of Destination Down to up when menu is Closed
				$("#MenuList").slideToggle("fast");		//Slides Up and Down to MenuList
				}
				});
			
				//On Destination Button Click
				$("#destiBtn").click(function(){
				if ( mobMin && mobMax ) {
				$("#destiUpDown").toggleClass("upArrowDesti");
				$("#muda").slideToggle("fast");
				}
				});
				});
			
		
			
			
// codes for Tablet Screen 790px to 1024px	


		 
		 
		 
		

// codes for Desktop Screen 1025px to 1550px	
				
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
