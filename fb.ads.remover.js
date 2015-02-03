

	  

function main(){
	var txt = "Sponsored";
	$('.userContentWrapper').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).remove();
       }
    });
	$('.ego_section').each(function(){
       if($(this).text().toUpperCase().indexOf(txt.toUpperCase()) != -1){
           $(this).remove();
       }
    });	
	
}


window.onload=main;
window.onscroll=main;
	





