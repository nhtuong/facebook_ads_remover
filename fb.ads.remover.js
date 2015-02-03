/*	Copyright (C) 2015  Tuong H. Nguyen
	
	Version: 1.0.2
	Created: 2015-02-02
	Modified: 2015-02-03
	Author: Tuong H. Nguyen
	Maintainer: Tuong H. Nguyen <nhtuong@gmail.com>
	Description: Facebook Ads Remover is a user-friendly ads remover. 
		It hides all "Sponsored" posts (ads) from your Facebook news feed. 
		It's completely free and open source. 
	License: GNU
    
	The JavaScript code in this page is free software: you can
    redistribute it and/or modify it under the terms of the GNU
    General Public License (GNU GPL) as published by the Free Software
    Foundation, either version 3 of the License, or (at your option)
    any later version.  The code is distributed WITHOUT ANY WARRANTY;
    without even the implied warranty of MERCHANTABILITY or FITNESS
    FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

    As additional permission under GNU GPL version 3 section 7, you
    may distribute non-source (e.g., minimized or compacted) forms of
    that code without the copy of the GNU GPL normally required by
    section 4, provided you include this license notice and a URL
    through which recipients can access the Corresponding Source.
	
*/	
	  

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
	





