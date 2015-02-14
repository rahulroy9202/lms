// JavaScript Document
//Style Sheet Switcher version 1.1 Oct 10th, 2006
//Author: Dynamic Drive: http://www.dynamicdrive.com
//Usage terms: http://www.dynamicdrive.com/notice.htm

var manual_or_random="manual" //"manual" or "random"
var randomsetting="3 days" //"eachtime", "sessiononly", or "x days (replace x with desired integer)". Only applicable if mode is random.

//////No need to edit beyond here//////////////

function getCookie(Name) { 
var re=new RegExp(Name+"=[^;]+", "i"); //construct RE to search for target name/value pair
if (document.cookie.match(re)) //if cookie found
return document.cookie.match(re)[0].split("=")[1] //return its value
return null
}

function setCookie(name, value, days) {
var expireDate = new Date()
//set "expstring" to either future or past date, to set or delete cookie, respectively
var expstring=(typeof days!="undefined")? expireDate.setDate(expireDate.getDate()+parseInt(days)) : expireDate.setDate(expireDate.getDate()-5)
document.cookie = name+"="+value+"; expires="+expireDate.toGMTString()+"; path=/";
}

function deleteCookie(name){
setCookie(name, "moot")
}


function setStylesheet(title, randomize){ //Main stylesheet switcher function. Second parameter if defined causes a random alternate stylesheet (including none) to be enabled
var i, cacheobj, altsheets=[""]
for(i=0; (cacheobj=document.getElementsByTagName("link")[i]); i++) {
if(cacheobj.getAttribute("rel").toLowerCase()=="alternate stylesheet" && cacheobj.getAttribute("title")) { //if this is an alternate stylesheet with title

cacheobj.disabled = true
altsheets.push(cacheobj) //store reference to alt stylesheets inside array
if(cacheobj.getAttribute("title") == title) //enable alternate stylesheet with title that matches parameter
cacheobj.disabled = false //enable chosen style sheet
}
}
if (typeof randomize!="undefined"){ //if second paramter is defined, randomly enable an alt style sheet (includes non)
var randomnumber=Math.floor(Math.random()*altsheets.length)
altsheets[randomnumber].disabled=false
}
jQuery.each(jQuery.browser, function(i, val) {
									// alert(i+"==="+val);
      if(i == "safari" && val == true){
		 // alert(i);
		  if(title == "change"){
		  	$("link[title=change]").attr("rel","stylesheet");
			$("link[title=change]").attr("href","/sites/default/themes/indiaportal/css/override.css");
		  }else{
			  $("link[title=change]").attr("rel","alternate stylesheet");
			  $("link[title=change]").attr("href","/sites/default/themes/indiaportal/css/normal.css");
		  }
	  }
    });
return (typeof randomize!="undefined" && altsheets[randomnumber]!="")? altsheets[randomnumber].getAttribute("title") : "" //if in "random" mode, return "title" of randomly enabled alt stylesheet
}

function chooseStyle(styletitle, days){ //Interface function to switch style sheets plus save "title" attr of selected stylesheet to cookie
	if (document.getElementById){
		if(styletitle=="change"){
			if(getCookie("mysheet")!="change"){
				setCookie("theme", getCookie("mysheet"), days)
			}
			setCookie("mysheet", styletitle, days)
			setStylesheet(styletitle)
		}else{ 	
			if(styletitle == "none") {
				if(getCookie("theme") !="none") {
					setCookie("mysheet", getCookie("theme"), days)
					setStylesheet(getCookie("theme"))
				} else {
					setCookie("mysheet", styletitle, -1)
					setCookie("theme", getCookie("mysheet"), -1)
				}
			} else {
				setCookie("mysheet", styletitle, days)
				setCookie("theme", getCookie("mysheet"), days)
				setStylesheet(styletitle)
			}	
		}
	}
}
function getActiveStyleSheet() {
  var styleTag;
  var styleSwitch;
  var styleTitle='';
  for(var i=0; (styleTag = document.getElementsByTagName("link")[i]); i++) {
	if(styleTag.getAttribute("title")=="switch") {styleSwitch=styleTag;}
  }
  for(var i=0; (styleTag = document.getElementsByTagName("link")[i]); i++) {
	if(styleTag.getAttribute("rel").indexOf("alternate stylesheet")!=-1 && styleTag.getAttribute("title")) {
		if(styleTag.getAttribute("href")==styleSwitch.getAttribute("href ")) {styleTitle=styleTag.getAttribute("title");}
	}
	}
  return styleTitle;
}
function indicateSelected(element){ //Optional function that shows which style sheet is currently selected within group of radio buttons or select menu
if (selectedtitle!=null && (element.type==undefined || element.type=="select-one")){ //if element is a radio button or select menu
var element=(element.type=="select-one") ? element.options : element
for (var i=0; i<element.length; i++){
if (element[i].value==selectedtitle){ //if match found between form element value and cookie value
if (element[i].tagName=="OPTION") //if this is a select menu
element[i].selected=true
else //else if it's a radio button
element[i].checked=true
break
}
}
}
}

if (manual_or_random=="manual"){ //IF MANUAL MODE
var selectedtitle=getCookie("mysheet")
if (document.getElementById && selectedtitle!=null) //load user chosen style sheet from cookie if there is one stored
setStylesheet(selectedtitle)
}
else if (manual_or_random=="random"){ //IF AUTO RANDOM MODE
if (randomsetting=="eachtime")
setStylesheet("", "random")
else if (randomsetting=="sessiononly"){ //if "sessiononly" setting
if (getCookie("mysheet_s")==null) //if "mysheet_s" session cookie is empty
document.cookie="mysheet_s="+setStylesheet("", "random")+"; path=/" //activate random alt stylesheet while remembering its "title" value
else
setStylesheet(getCookie("mysheet_s")) //just activate random alt stylesheet stored in cookie
}
else if (randomsetting.search(/^[1-9]+ days/i)!=-1){ //if "x days" setting
if (getCookie("mysheet_r")==null || parseInt(getCookie("mysheet_r_days"))!=parseInt(randomsetting)){ //if "mysheet_r" cookie is empty or admin has changed number of days to persist in "x days" variable
setCookie("mysheet_r", setStylesheet("", "random"), parseInt(randomsetting)) //activate random alt stylesheet while remembering its "title" value
setCookie("mysheet_r_days", randomsetting, parseInt(randomsetting)) //Also remember the number of days to persist per the "x days" variable
}
else
setStylesheet(getCookie("mysheet_r")) //just activate random alt stylesheet stored in cookie
} 
}
/*Function for add to favourite starts here*/
function add_to_favourites(){
if(document.all) window.external.AddFavorite(location.href,document.title);
else if(window.sidebar)window.sidebar.addPanel(document.title,location.href,' ');
  else if(window.opera && window.print) {
alert("Please use your browser's bookmarking facility to create a bookmark");
} else if(window.chrome){
alert("Please use your browser's bookmarking facility to create a bookmark");

}
}

/*Function for add to favourite ends here*/
$(document).ready(		  
function() {
if ($("#contact-mail-page").length > 0){
  var cat_id = $('#contact-mail-page #edit-cid-wrapper #edit-cid').attr('id');
  var cat_class = $('#contact-mail-page #edit-cid-wrapper #edit-cid').attr('class');
  var cat_name = $('#contact-mail-page #edit-cid-wrapper #edit-cid').attr('name');
  var cat_html = $('#contact-mail-page #edit-cid-wrapper #edit-cid').html();
  $('#contact-mail-page #edit-cid-wrapper #edit-cid').remove();
  $('#contact-mail-page #edit-cid-wrapper').append('<div id="category-id"><select id='+cat_id+' name='+cat_name+'>'+cat_html+'</select></div>');
  $('#test #edit-cid').addClass(cat_class);
}
if($(".banner-right .quicktabs_tabs").length > 0) {
    $('.banner-right .quicktabs_tabs li a').each(function(index) {
        var a_text = $(this).html();
        $(this).html('<span>'+a_text+'</span>');
    });
}
$("#context-block-region-text_resize").hide();
if($("#contact-mail-page").length > 0 || $("#forward-form").length > 0 || $("#feedback-form").length > 0) {
    $(".captcha").each(function(index) {
        $(this).prepend('<label class="captcha-text">Verification<br><span>(Required)</span></label>');
    });
}
})

