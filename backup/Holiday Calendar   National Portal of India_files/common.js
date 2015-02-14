function showHideNav(divId)
{
	var tempid = document.getElementById('tempId').value;
	if(document.getElementById('tempId').value != "" && divId != tempid)
	{
		document.getElementById(tempid).style.display = "none";
	}
	
	if(document.getElementById(divId).style.display == "none")
	{
		document.getElementById(divId).style.display = "";
		document.getElementById('tempId').value = divId;
	}
	else
	{
		document.getElementById(divId).style.display = "none";
	}
}
function addBookmark(url,title)
{
	if (window.sidebar)
	{
		window.sidebar.addPanel(title, url,"");
	}
	else if( document.all )
	{
		window.external.AddFavorite( url, title);
	}
	else if( window.opera && window.print )
	{
		return true;
	}
	else if( document.layers )
	{
		window.alert( 'Please click OK and then press Ctrl+D to create a bookmark or \n click Bookmarks | Add Bookmark' );
	}
	else
	{
		window.alert( 'Please use your browser\'s bookmarking facility to create a bookmark' );
	}
}

/// For search text

$(document).ready(function (){
	if(lang == "hi")
	{
		//$("#edit-title").val("à¤–à¥‹à¤œà¥‡à¤‚ - à¤–à¥‹à¤œà¤¶à¤¬à¥�à¤¦, à¤µà¤¾à¤•à¥�à¤¯à¤¾à¤‚à¤¶");
		$("#edit-keys").val("खोजें - खोजशब्द, वाक्यांश");
		$("#search-topics #edit-keys").val("खोजें - खोजशब्द, वाक्यांश");
	}
	else
	{
		//$("#edit-title").val("Search - Keyword, Phrase");
		$("#edit-keys").val("Search - Keyword, Phrase");
		$("#search-topics #edit-keys").val("Search - Keyword, Phrase");
	}

/*$("#edit-title").focus(function(){
  if(lang == "hi"){
	if($("#edit-title").val() == "à¤–à¥‹à¤œà¥‡à¤‚ - à¤–à¥‹à¤œà¤¶à¤¬à¥�à¤¦, à¤µà¤¾à¤•à¥�à¤¯à¤¾à¤‚à¤¶")
	{
		$("#edit-title").val("");
	}
  }
  else{
	if($("#edit-title").val() == "Search - Keyword, Phrase")
	{
		$("#edit-title").val("");
	}
  }
 });*/
 $("#edit-keys").focus(function(){
  if(lang == "hi"){
	if($("#edit-keys").val() == "खोजें - खोजशब्द, वाक्यांश")
	{
		$("#edit-keys").val("");
	}
  }
  else{
	if($("#edit-keys").val() == "Search - Keyword, Phrase")
	{
		$("#edit-keys").val("");
	}
  }
 });
 
 $("#search-topics #edit-keys").focus(function(){
  if(lang == "hi"){
	if($("#search-topics #edit-keys").val() == "खोजें - खोजशब्द, वाक्यांश")
	{
		$("#search-topics #edit-keys").val("");
	}
  }
  else{
	if($("#search-topics #edit-keys").val() == "Search - Keyword, Phrase")
	{
		$("#search-topics #edit-keys").val("");
	}
  }
 });
 
 /*$("#edit-title").blur(function(){
	 if(lang == "hi"){
		if($("#edit-title").val() == "")
		{
			$("#edit-title").val("à¤–à¥‹à¤œà¥‡à¤‚ - à¤–à¥‹à¤œà¤¶à¤¬à¥�à¤¦, à¤µà¤¾à¤•à¥�à¤¯à¤¾à¤‚à¤¶");
		}
	 }
	 else{
		if($("#edit-title").val() == "")
		{
			$("#edit-title").val("Search - Keyword, Phrase");
		}
	 }
 });*/
 $("#edit-keys").blur(function(){
	 if(lang == "hi"){
		if($("#edit-keys").val() == "")
		{
			$("#edit-keys").val("खोजें - खोजशब्द, वाक्यांश");
		}
	 }
	 else{
		if($("#edit-keys").val() == "")
		{
			$("#edit-keys").val("Search - Keyword, Phrase");
		}
	 }
 });
 
 $("#search-topics #edit-keys").blur(function(){
	 if(lang == "hi"){
		if($("#search-topics #edit-keys").val() == "")
		{
			$("#search-topics #edit-keys").val("खोजें - खोजशब्द, वाक्यांश");
		}
	 }
	 else{
		if($("#search-topics #edit-keys").val() == "")
		{
			$("#search-topics #edit-keys").val("Search - Keyword, Phrase");
		}
	 }
 });
 
 $("#search-topics .form-submit").click(function(){
	if(lang == "hi"){
	if($("#search-topics #edit-keys").val() == "खोजें - खोजशब्द, वाक्यांश")
	{
		$("#search-topics #edit-keys").val("");
	}
  }
  else{
	if($("#search-topics #edit-keys").val() == "Search - Keyword, Phrase")
	{
		$("#search-topics #edit-keys").val("");
	}
  }											 
 });
 
 if(_getCookie("fontSize") != null){
  	var fontSize = _getCookie("fontSize");
  }
  else
  {
  	var fontSize = 100;
  }
 $("#content").css("font-size",fontSize + "%");
 $("#template_three_column").css("font-size",fontSize + "%");
 
 // For hindi keyboard
 if(lang == "hi")
 {
	$("#hindiKeyboard").click(function(){
		if($("#search_key").val() == "खोजें - खोजशब्द वाक्यांश" || $("#search_key").val() == "खोजें - खोजशब्द, वाक्यांश")
		{
			$("#search_key").val("");
		}											
	});
 }
  if($("table.views-table").length > 0 && $("h2.pane-title").length > 0){
	 $("table.views-table").attr("summary","List of "+$("h2.pane-title").html());
 }
});

/// For show/hide list item

$(document).ready(function ()
{
	$("a.showhide").parent().find('ul').hide();
	
	$(".showhide").click(function () {
	$(this).parent().find('ul').toggle();
		if($(this).attr('rel')== "expand")
		{
			$(this).attr('rel','collapse');
			$(this).find('img').attr('src','/sites/default/themes/indiaportal/images/collapse.gif');
		}
		else if($(this).attr('rel')== "collapse")
		{
			$(this).attr('rel','expand');
			$(this).find('img').attr('src','/sites/default/themes/indiaportal/images/expand.gif');
		}
	});
	
	/// For Holiday Calendar
	$("span.event-holiday").hide();
	$("td.has-events").mouseover(function (){
		$(this).find('span').show();   
   });
	$("td.has-events").mouseout(function (){
		$(this).find('span').hide();   
   });
});
// For country/state div in user register form
$(document).ready(function ()
{
	$("#edit-profile-country").val('India');
	$('#edit-profile-country').change(function(){
		if($("#edit-profile-country").val() != 'India')
		{
			$("#edit-profile-state-wrapper").hide();
		}
		else
		{
			$("#edit-profile-state-wrapper").show();
		}
	});
	
	// For metadata feedback, tags and gol edit link
	
	if($("a.feedback_link").length > 0)
	{
		$("a.feedback_link").fancybox(
		{
			'onClosed'  : function()
			{
				$(".messages").html('');
				$('div').removeClass('messages status error')
			},
			'autoDimensions'	: false,
			'width'         	: 520,
			'height'        	: 'auto',
			'scrolling'		: 'no'
		});
	}
	if($("a.tag_link").length > 0)
	{
		$("a.tag_link").fancybox(
		{
			'onClosed'  : function()
			{
				$(".messages").html('');
				$('div').removeClass('messages status error');
				$('textarea').removeClass('error');
			},
			'autoDimensions'	: false,
			'width'         		: 520,
			'height'        		: 'auto',
			'scrolling'		: 'no'
		});
	}
	if($("a.gol_link").length > 0)
	{
		$("a.gol_link").fancybox(
		{
			'onClosed'  : function()
			{
				$(".messages").html('');
				$('div').removeClass('messages status error')
			},
			'autoDimensions'	: false,
			'width'         		: 520,
			'height'        		: 'auto',
			'scrolling'		: 'yes'
		});
	}
	
	$('.metadata_feedback_form [id^="edit-title"]').hide();
	$('#block-formblock-page_feedback [id^="edit-title"]').hide();
	$('.metadata_feedback_form [id^="edit-field-node-id"]').hide();
	$('#metadata_suggestion [id^="edit-title"]').hide();
	$('.gol_edit_page .vertical-tabs').hide();
	
	$(".content-multiple-table th").filter(function() {
    	if($(this).text() == "Order")
		{
			$(this).text('');	
		}
	});
	
	$('#tag-it-form').bind("submit", function() {
			height = $('#fancybox-inner').height()+70;
			$('#fancybox-outer').height(height);
	});
	
	/** Function for shoing mapped data in metadata **/
	
	// For state/dept mapping show
	Drupal.behaviors.common_utility = function(context) {
	  		$('#edit-field-st-dept-tids-hierarchical-select-selects-1').bind('change',function(){
			$('div').remove('#map_list');																					   
			$.get('/mapping/list/state/'+ parseInt($('#edit-field-st-dept-tids-hierarchical-select-selects-1').val()), null, listDetails);	
		});
		$('#edit-field-st-dept-tids-hierarchical-select-selects-0').bind('change',function(){
			$('div').remove('#map_list');																					   
		});		
		
		$('#edit-field-scheme-st-dept-tids-hierarchical-select-selects-1').bind('change',function(){
			$('div').remove('#scheme_map_list');																					   
			$.get('/mapping/list/state/'+ parseInt($('#edit-field-scheme-st-dept-tids-hierarchical-select-selects-1').val()), null, listDetails_scheme);	
		});
		$('#edit-field-scheme-st-dept-tids-hierarchical-select-selects-0').bind('change',function(){
			$('div').remove('#scheme_map_list');																					   
		});
		
	  return false;
	}
	
	var listDetails = function(response) {
	  var result = Drupal.parseJson(response);
	  $('div').remove('#map_list');
	  $('#conditional-group-owner').after('<div id="map_list"></div>');
	  $('#map_list').html(result.data);
	}
	
	//// For metadata owner info
	
	if($('#edit-field-owner-type-value').val() == 1033)
	{
		$('#conditional-group-owner').show();	
	}
	else
	{
		$('#conditional-group-owner').hide();		
	}
	
	$('#edit-field-owner-type-value').bind('change',function()
	 {
		 $('div').remove('#map_list');	
		 $('div').remove('#parent_list');
		 $('#edit-field-un-ministry-value').val('');
		 $('#conditional-group-owner .hierarchical-select .selects').find('select').each(function(index)
		 {
			 var sid = $(this).attr('id');
			 $('#'+sid).val('');
			 if(index != 0)
			 {
				 $(this).hide();
			 }
		 });
		 
		if($('#edit-field-owner-type-value').val() == 1033)
		{
			$('#conditional-group-owner').show();	
		}
		else
		{
			$('#conditional-group-owner').hide();		
		}
	});
	
	
	
	$('#edit-field-un-ministry-value').bind('blur',function()
	 {
		 var title = $('#edit-field-un-ministry-value').val();
		 var newtitle = title.replace('&','andsign');
		 $.get('/mapping/parentlist/'+ newtitle, null, parentDetails);
	});
	
	var parentDetails = function(response) {
	  var result = Drupal.parseJson(response);
		$('div').remove('#parent_list');
	  $('#conditional-group-owner').after('<div id="parent_list"></div>');
	  $('#parent_list').html(result.data);
	}
	
	// For Map IA with Dept info
	
	$('#edit-field-map-un-ministry-value').bind('blur',function()
	 {
		 var title = $('#edit-field-map-un-ministry-value').val();
		 var newtitle = title.replace('&','andsign');
		 $.get('/mapping/parentlist/'+ newtitle, null, mapParentDetails);
	});
	
	var mapParentDetails = function(response) {
	  var result = Drupal.parseJson(response);
		$('div').remove('#map_parent_list');
	  $('#edit-field-map-un-ministry-value-wrapper').after('<div id="map_parent_list"></div>');
	  $('#map_parent_list').html(result.data);
	}
	
	if($('#edit-field-map-owner-type-value').val() == 1033)
	{
		$('#conditional-field-map-st-dept').show();	
	}
	else
	{
		$('#conditional-field-map-st-dept').hide();		
	}
	
	$('#edit-field-map-owner-type-value').bind('change',function()
	 {
		 $('div').remove('#map_parent_list');
		 $('#edit-field-map-un-ministry-value').val('');
		 $('#conditional-field-map-st-dept .hierarchical-select .selects').find('select').each(function(index)
		 {
			 var sid = $(this).attr('id');
			 $('#'+sid).val('');
			 if(index != 0)
			 {
				 $(this).hide();
			 }
		 });
		 
		if($('#edit-field-map-owner-type-value').val() == 1033)
		{
			$('#conditional-field-map-st-dept').show();	
		}
		else
		{
			$('#conditional-field-map-st-dept').hide();		
		}
	});
	
	// Form mapping dashboard
	if($('.view-map-ia-dept #edit-dashboard-owner-type').val() == 1033)
	{
		$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth').show();	
		$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth_1').hide();
	}
	else if($('.view-map-ia-dept #edit-dashboard-owner-type').val() == 1037)
	{
		$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth').hide();	
		$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth_1').show();		
	}
	else
	{
		$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth').hide();	
		$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth_1').hide();	
	}
	
	$('.view-map-ia-dept #edit-dashboard-owner-type').change(function()
	 {
		$('.view-map-ia-dept #edit-term-node-tid-depth').val('');
		$('.view-map-ia-dept #edit-term-node-tid-depth-1').val('');
	 	if($('.view-map-ia-dept #edit-dashboard-owner-type').val() == 1033)
		{
			$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth').show();
			$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth_1').hide();
		}
		else if($('.view-map-ia-dept #edit-dashboard-owner-type').val() == 1037)
		{
			$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth').hide();	
			$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth_1').show();		
		}
		else
		{
			$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth').hide();	
			$('.view-map-ia-dept .views-widget-filter-term_node_tid_depth_1').hide();	
		}
	});
	 
	 // For assigning role to the user while sign up
	 /*$('form#user-register').find('fieldset').each(function(index)
	{
		if(index == 1)
		{
			$('#edit-user-roles-10').attr("checked","checked");
			$(this).hide();
		}
	});*/
	 
	 // For forms in front end
	if($('#edit-forms-owner').val() == 333)
	{
		$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1').show();
		$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2').hide();
	}
	else if($('#edit-forms-owner').val() == 332)
	{
		$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
		$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2').show();
	}
	else
	{
		$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
		$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2').hide(); 
	}
	
	$('#edit-forms-owner').change(function()
	{
		if($('#edit-forms-owner').val() == 333)
		{
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1').show();
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2').hide();
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else if($('#edit-forms-owner').val() == 332)
		{
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2').show();
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else
		{
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2').hide();
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
			$('form#views-exposed-form-view-search-forms-page-2 .views-widget-filter-term_node_tid_depth_2 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
	});
	
	// For acts in front end
	if($('#edit-acts-owner').val() == 333)
	{
		$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1').show();
		$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2').hide();
	}
	else if($('#edit-acts-owner').val() == 332)
	{
		$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
		$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2').show();
	}
	else
	{
		$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
		$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2').hide(); 
	}
	
	$('#edit-acts-owner').change(function()
	{
		if($('#edit-acts-owner').val() == 333)
		{
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1').show();
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2').hide();
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else if($('#edit-acts-owner').val() == 332)
		{
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2').show();
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else
		{
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2').hide();
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
			$('form#views-exposed-form-view-search-acts-page-2 .views-widget-filter-term_node_tid_depth_2 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
	});
	 
	// For docs in front end
	if($('#edit-docs-owner').val() == 333)
	{
		$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth').show();
		$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
	}
	else if($('#edit-docs-owner').val() == 332)
	{
		$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth').hide();
		$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1').show();
	}
	else
	{
		$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth').hide();
		$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1').hide(); 
	}
	
	$('#edit-docs-owner').change(function()
	{
		if($('#edit-docs-owner').val() == 333)
		{
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth').show();
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else if($('#edit-docs-owner').val() == 332)
		{
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth').hide();
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1').show();
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else
		{
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth').hide();
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
			$('form#views-exposed-form-view-search-document-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
	});
	
	
	
	
	
	// Schemes
	
	// For docs in front end
	if($('#views-exposed-form-view-search-schemes-new-page-2 #edit-docs-owner').val() == 333)
	{
		$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth').show();
		$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
	}
	else if($('#views-exposed-form-view-search-schemes-new-page-2 #edit-docs-owner').val() == 332)
	{
		$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth').hide();
		$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1').show();
	}
	else
	{
		$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth').hide();
		$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1').hide(); 
	}
	
	$('#views-exposed-form-view-search-schemes-new-page-2 #edit-docs-owner').change(function()
	{
		if($('#views-exposed-form-view-search-schemes-new-page-2 #edit-docs-owner').val() == 333)
		{
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth').show();
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else if($('#views-exposed-form-view-search-schemes-new-page-2 #edit-docs-owner').val() == 332)
		{
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth').hide();
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1').show();
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else
		{
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth').hide();
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
			$('form#views-exposed-form-view-search-schemes-new-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	// For schemes in front end
	$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_2').show();
	if($('#edit-scheme-owner').val() == 1033)
	{
		$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth').show();
		$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
	}
	else if($('#edit-scheme-owner').val() == 1037)
	{
		$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth').hide();
		$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1').show();
	}
	else
	{
		$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth').hide();
		$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1').hide(); 
	}
	
	$('#edit-scheme-owner').change(function()
	{
		if($('#edit-scheme-owner').val() == 1033)
		{
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth').show();
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else if($('#edit-scheme-owner').val() == 1037)
		{
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth').hide();
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1').show();
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
		else
		{
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth').hide();
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1').hide();
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
			$('form#views-exposed-form-view-search-schemes-page-2 .views-widget-filter-term_node_tid_depth_1 .hierarchical-select .selects').find('select').each(function(index)
			 {
				 var sid = $(this).attr('id');
				 $('#'+sid).val('');
				 if(index != 0)
				 {
					 $(this).hide();
				 }
			 });
		}
	});
	
	// For search page
	$('#block-apachesolr-sort .content .item-list').find('li').each(function(index)
	 {
		if(index != 0 && index != 1)
		{
			$(this).hide();
		}
	 });
	
	//// For scheme owner info
	
	if($('#edit-field-scheme-owner-type-value').val() == 1033)
	{
		$('#conditional-group-scheme-owner').show();	
	}
	else
	{
		$('#conditional-group-scheme-owner').hide();		
	}
	
	$('#edit-field-scheme-owner-type-value').bind('change',function()
	 {
		 $('div').remove('#scheme_map_list');	
		 $('div').remove('#scheme_parent_list');
		 $('#edit-field-scheme-un-ministry-value').val('');
		 $('#conditional-group-scheme-owner .hierarchical-select .selects').find('select').each(function(index)
		 {
			 var sid = $(this).attr('id');
			 $('#'+sid).val('');
			 if(index != 0)
			 {
				 $(this).hide();
			 }
		 });
		 
		if($('#edit-field-scheme-owner-type-value').val() == 1033)
		{
			$('#conditional-group-scheme-owner').show();	
		}
		else
		{
			$('#conditional-group-scheme-owner').hide();		
		}
	});
	
	$('#edit-field-scheme-un-ministry-value').bind('blur',function()
	 {
		 var title = $('#edit-field-scheme-un-ministry-value').val();
		 var newtitle = title.replace('&','andsign');
		 $.get('/mapping/parentlist/'+ newtitle, null, parentDetails_scheme);
	});
	
	var parentDetails_scheme = function(response) {
	  var result = Drupal.parseJson(response);
		$('div').remove('#scheme_parent_list');
	  $('#conditional-group-scheme-owner').after('<div id="scheme_parent_list"></div>');
	  $('#scheme_parent_list').html(result.data);
	}
	
	var listDetails_scheme = function(response) {
	  var result = Drupal.parseJson(response);
	  $('div').remove('#scheme_map_list');
	  $('#conditional-group-scheme-owner').after('<div id="scheme_map_list"></div>');
	  $('#scheme_map_list').html(result.data);
	}
	
	// For detailed external link count
	if($("a.detailed_link").length > 0)
	{
		$("a.detailed_link").fancybox();
	}
	
	// For feed load
	if(document.getElementById("quicktabs-view_feeds_home") || document.getElementById("quicktabs-news_feeds_hindi_home")){
		refreshNews();
		var timer = setInterval( refreshNews, 900000);
	}
	var n_time;
	function refreshNews()
	{
		
		var d = new Date();
		n_time = d.getTime();
		if(lang == "hi"){
			var urlair = '/hi/common_utility/news_feeds?rand='+n_time;	
		}else{
			var urlair = '/common_utility/news_feeds?rand='+n_time;	
		}
		
		$.ajax({
				url: urlair,
				dataType: 'html',
				success: function (res) {
					if(lang == "hi"){
						$("#quicktabs_container_news_feeds_hindi_home .content").html(res);
					}else{
						$("#quicktabs_container_view_feeds_home .content").html(res);
					}
				}			
			});	
		
    }	
	
		
	$("#edit-keys").parent().append('<label for="edit-keys">Search</label>');
	$("#edit-field-publication-month-value-value-year").attr('title','Choose Year');
	$("#edit-field-publication-month-value-value-month").attr('title','Choose Month');
	
});

// For site wide search
$(document).ready(function() {
  for(var i = 0; i < $("ul.expanded-facet li").length; i++){
	  if($("ul.expanded-facet li").eq(i).text() == ''){
	 	$("ul.expanded-facet li").eq(i).css("display","none");
	  }
  }
  
  // For closing comment and tags box
  $('.result-page [id^="edit-comment-submit"]').click(function()
	{
		var btnId = $(this).attr('id');
		var id = btnId.split('-');
		$('.result-page').find('div [id^="comments-wrapper"]').each(function(index)
		{
			var commentdivid = $(this).attr('id');
			var clickdivid = 'comments-wrapper-'+id[3];
			
			if(commentdivid != clickdivid)
			{
				$('#'+commentdivid).html('');
			}
			
		});
		
		$('.result-page').find('div [id^="tags-wrapper"]').each(function(index)
		{
			var tagsdivid = $(this).attr('id');
			$('#'+tagsdivid).html('');
		});	
			
		// Focus to textarea
		Drupal.behaviors.commonUtilityBehavior = function (context) {
			$('#metadata_feedback_'+id[3]+' .form-item label').attr('id','relevent');
			//$('#metadata_feedback_'+id[3]).attr('role','dialog');
			$('#metadata_feedback_'+id[3]).attr('aria-labelledby','relevent');
			$('#metadata_feedback_'+id[3]+' #edit-field-is-relevent-value-Yes').focus();
		};
		// End	
	});
  
  	$('.result-page [id^="edit-tag-submit"]').click(function()
	{
		var btnId = $(this).attr('id');
		var id = btnId.split('-');
		$('.result-page').find('div [id^="tags-wrapper"]').each(function(index)
		{
			var tagsdivid = $(this).attr('id');
			var clickdivid = 'tags-wrapper-'+id[3];
			if(tagsdivid != clickdivid)
			{
				$('#'+tagsdivid).html('');
			}
		});
		
		$('.result-page').find('div [id^="comments-wrapper"]').each(function(index)
		{
			var commentsdivid = $(this).attr('id');
			$('#'+commentsdivid).html('');
		});
		
		// Focus to textarea
		Drupal.behaviors.commonUtilityBehavior = function (context) {
			$('#edit-tags-wrapper label').attr('id','suggest-tags');
			//$('.metadata_tags').attr('role','dialog');
			$('.metadata_tags').attr('aria-labelledby','suggest-tags');
			$('#metadata_tags_'+id[3]+' #edit-tags').focus();
		};
		// End
	});
  
});
function formclose(wrapper,nid)
{
	$("#"+wrapper+"-"+nid).html('');
}
/// For new metadata suggestion
$(document).ready(function() {
	$('#edit-suggest-submit').bind('click',function()
	{
		$('#edit-suggest-submit').toggle();
		Drupal.behaviors.commonUtilityBehavior = function (context) {
		$('#suggest-wrapper #edit-body').focus();
		};
		//alert($("div#suggest-wrapper").html());
	});
});
/*

* Cookies Set Get Delete Definations

*/

var today = new Date();

var expiry = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);

function _getCookieVal (offset) {

var endstr = document.cookie.indexOf (";", offset);

if (endstr == -1) { endstr = document.cookie.length; }

return unescape(document.cookie.substring(offset, endstr));

}

function _getCookie (name) {

var arg = name + "=";

var alen = arg.length;

var clen = document.cookie.length;

var i = 0;

while (i < clen) {

var j = i + alen;

if (document.cookie.substring(i, j) == arg) {

return _getCookieVal (j);

}

i = document.cookie.indexOf(" ", i) + 1;

if (i == 0) break;

}

return null;

}

function deleteCookie (name,path,domain) {

if (_getCookie(name)) {

document.cookie = name + "=" +

((path) ? "; path=" + path : "") +

((domain) ? "; domain=" + domain : "") +

"; expires=Thu, 01-Jan-70 00:00:01 GMT";

}

}

function _setCookie (name,value,expires,path,domain,secure) {

document.cookie = name + "=" + escape (value) +

((expires) ? "; expires=" + expires.toGMTString() : "") +

((path) ? "; path=" + path : "") +

((domain) ? "; domain=" + domain : "") +

((secure) ? "; secure" : "");

}
/*********Font size resize**********/
function set_font_size(fontType){
	
	if(fontType == "increase"){
			 if(fontSize < 130){
			  fontSize = parseInt(fontSize) + 15;
			 }
		  }else if(fontType == "decrease"){
			  if(fontSize > 70){
				fontSize = parseInt(fontSize) - 15;
			  }
		  }else{
			  fontSize = 100;
		  }
	_setCookie("fontSize",fontSize);
	$("#content").css("font-size",fontSize + "%");
	$("#template_three_column").css("font-size",fontSize + "%");
} 

/*

* Cookies Set Get Delete Definations end

*/




/**************Left Menu****************/
// If javascript is enabled, make the menu invisible until the proper mouseovers have been defined and give special styles to the submenus
/*if (document.getElementById && document.getElementsByTagName) {
	document.write("<link type=\"text/css\" rel=\"stylesheet\" href=\"sites/default/themes/indiaportal/css/jsmenustyle.css\" />");
}*/

window.onload = init;

function init() {
	if (document.getElementById && document.getElementsByTagName) {
		if (document.getElementById("contnentMenu")) {
			var myMenu = document.getElementById("contnentMenu").getElementsByTagName("A");
		}
		if (!myMenu) { return; }
		else {
			for (var i=0;i<myMenu.length;i++) {
				myMenu[i].onmouseover = navHoverStyle;
				myMenu[i].onfocus = navHoverStyle;
			}
			if(document.getElementById("contnentMenu"))
			{
				document.getElementById("contnentMenu").style.visibility = "visible";
			}
		}
		$("head").append("<link type=\"text/css\" rel=\"stylesheet\" href=\"http://"+window.location.hostname+"/sites/default/themes/indiaportal/css/jsmenustyle.css\" />");
}
	}
	//var pathname = window.location.hostname.replace(/([a-zA-Z0-9]+.)/,"");
	//alert(window.location.hostname);
	
// Stores the currently open UL objects
var openMenus = new Array();

// Stores the timer for closing the menu
var navTimer;

function navHoverStyle(e) {
	if (!e) var e = window.event;
	if (e.target) var tg = e.target;
	else if (e.srcElement) var tg = e.srcElement;

	var linkElm = tg;
	while (linkElm.nodeName != 'A')
		linkElm.parentNode;

	while (tg.nodeName != 'LI')
		tg = tg.parentNode;

	// Determine if and if so, which submenu items to close
	var tgParent = tg.parentNode;
	while (tgParent.nodeName != 'UL')
		tgParent = tgParent.parentNode;
	if (tgParent.id.trim() == 'contnentMenu') {
		closeAll(0);
	}
	else {
		var j=0;
		/*while (openMenus[j] != tgParent) {
			j++;
		}
		*/
		closeAll(j+1);
	}

	// Determine if the current item has a submenu and if so, open it
	for ( var i=0;i<tg.childNodes.length;i++) {
		if ( tg.childNodes[i].nodeName == 'UL') {
			var subMenuElm = tg.childNodes[i];
		}
	}

	if (subMenuElm) {
		linkElm.className = 'unfolded';
		subMenuElm.style.display = 'block';
		openMenus.push(subMenuElm);
	}

	// Set the timer
	checkNavTimer();

	return false;
}

function checkNavTimer() {
	if (navTimer) clearTimeout(navTimer);
	navTimer = setTimeout('closeAll(0)',2500);
}

function closeAll(lvl) {
	var oMl = openMenus.length-1;
	for ( var i=oMl;i>=lvl;i--) {
		var linkElm = openMenus[i].previousSibling;
		while (linkElm.nodeName != 'A')
			linkElm = linkElm.previousSibling;

		linkElm.className = '';
		openMenus[i].style.display = 'none';
		openMenus.pop();
	}
}
// Delete feedback
function deleteFeedback(nid)
{
	if(window.confirm("Are you sure want to delete the feedback?"))
	{
		$('#link-'+nid).html('<img src="/sites/default/themes/indiaportal/images/loading_icon.gif" alt="loading" border="0" />');
		$.ajax({
	        url: '/common_utility/feedback/'+nid,
			dataType: 'json',
	        success: function (res) {
				$('#link-'+nid).parent().parent().html(res.data);
			}
    	});			
	}
	else
	{
		return false;
	}
}
// Function for redirect after logout and try work offline
function burstCache() {
if (!navigator.onLine) {
document.body.innerHTML = 'Loading...';
window.location = 'http://india.gov.in';
}
}
$(document).ready(function (){
burstCache();
});

// For accessibility related issue
$(document).ready(function()
{
	// For most viewed level 1
	$('.pane-quicktabs-most-viewed-level1 h2').attr('id', 'most-viewed-level1');
	//$('#quicktabs-most_viewed_level1 ul.quicktabs_tabs').attr('role','tablist');
	$("#quicktabs-most_viewed_level1 ul.quicktabs_tabs").find('li').each(function(index)
	{
		//$(this).attr('role','presentation');
	});
	//$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-0').attr('role','tab');
	//$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-1').attr('role','tab');
	$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-0').attr('aria-selected','true');
	$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-1').attr('aria-selected','false');
	
	
	$('#quicktabs_container_most_viewed_level1 #quicktabs_tabpage_most_viewed_level1_0').attr('aria-labelledby', 'quicktabs-tab-most_viewed_level1-0');
	
	$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-0').bind('click', function() {
		$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-0').attr('aria-selected','true');
		$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-1').attr('aria-selected','false');
	});
	
	$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-1').bind('click', function() {
		$('#quicktabs_container_most_viewed_level1 #quicktabs_tabpage_most_viewed_level1_1').attr('aria-labelledby', 'quicktabs-tab-most_viewed_level1-1');
		$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-0').attr('aria-selected','false');
		$('#quicktabs-most_viewed_level1 #quicktabs-tab-most_viewed_level1-1').attr('aria-selected','true');
	});
	// End
	
	// For most viewed inner
	$('.pane-quicktabs-quicktab-right-sidebar h2').attr('id', 'most-viewed-inner');
	//$('#quicktabs-quicktab_right_sidebar ul.quicktabs_tabs').attr('role','tablist');
	$("#quicktabs-quicktab_right_sidebar ul.quicktabs_tabs").find('li').each(function(index)
	{
		//$(this).attr('role','presentation');
	});
	//$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-0').attr('role','tab');
	//$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-1').attr('role','tab');
	$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-0').attr('aria-selected','true');
	$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-1').attr('aria-selected','false');
	
	$('#quicktabs_container_quicktab_right_sidebar #quicktabs_tabpage_quicktab_right_sidebar_0').attr('aria-labelledby', 'quicktabs-tab-quicktab_right_sidebar-0');
	
	$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-0').bind('click', function() {
		$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-0').attr('aria-selected','true');
		$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-1').attr('aria-selected','false');
	});
	
	$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-1').bind('click', function() {
		$('#quicktabs_container_quicktab_right_sidebar #quicktabs_tabpage_quicktab_right_sidebar_1').attr('aria-labelledby', 'quicktabs-tab-quicktab_right_sidebar-1');
		$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-0').attr('aria-selected','false');
		$('#quicktabs-quicktab_right_sidebar #quicktabs-tab-quicktab_right_sidebar-1').attr('aria-selected','true');
	});
	// End
	
	// For relevants links
	$("#quicktabs-relevant_links ul.quicktabs_tabs").find('li').each(function(index)
	{
		//$(this).attr('role','presentation');
	});
	
	/*$('#quicktabs-relevant_links ul.quicktabs_tabs').attr('role','tablist');
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-0').attr('role','tab');
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-1').attr('role','tab');
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-2').attr('role','tab');
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-3').attr('role','tab');*/
	
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-0').attr('aria-selected', 'true');
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-1').attr('aria-selected', 'false');
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-2').attr('aria-selected', 'false');
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-3').attr('aria-selected', 'false');
	
	$('#quicktabs-relevant_links #quicktabs_tabpage_relevant_links_0').attr('aria-labelledby', 'quicktabs-tab-relevant_links-0');
	
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-0').bind('click', function() {
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-0').attr('aria-selected', 'true');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-1').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-2').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-3').attr('aria-selected', 'false');
	});
	
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-1').bind('click', function() {
		$('#quicktabs-relevant_links #quicktabs_tabpage_relevant_links_1').attr('aria-labelledby', 'quicktabs-tab-relevant_links-1');
		
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-0').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-1').attr('aria-selected', 'true');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-2').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-3').attr('aria-selected', 'false');
	});
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-2').bind('click', function() {
		$('#quicktabs-relevant_links #quicktabs_tabpage_relevant_links_2').attr('aria-labelledby', 'quicktabs-tab-relevant_links-2');
		
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-0').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-1').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-2').attr('aria-selected', 'true');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-3').attr('aria-selected', 'false');
	});
	$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-3').bind('click', function() {
		$('#quicktabs-relevant_links #quicktabs_tabpage_relevant_links_3').attr('aria-labelledby', 'quicktabs-tab-relevant_links-3');
		
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-0').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-1').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-2').attr('aria-selected', 'false');
		$('#quicktabs-relevant_links #quicktabs-tab-relevant_links-3').attr('aria-selected', 'true');
	});
	// End
	
	// For homepage how do i tabs
	//$('#quicktabs-quicktab_home_howdo_i ul.quicktabs_tabs').attr('role','tablist');
	$("#quicktabs-quicktab_home_howdo_i ul.quicktabs_tabs").find('li').each(function(index)
	{
		//$(this).attr('role','presentation');
	});
	
	//$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-0').attr('role','tab');
	//$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-1').attr('role','tab');
	$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-0').attr('aria-selected','true');
	$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-1').attr('aria-selected','false');
	
	$('#quicktabs_container_quicktab_home_howdo_i #quicktabs_tabpage_quicktab_home_howdo_i_0').attr('aria-labelledby', 'quicktabs-tab-quicktab_home_howdo_i-0');
	
	$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-0').bind('click', function() {
		$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-0').attr('aria-selected','true');
		$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-1').attr('aria-selected','false');
	});
	
	$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-1').bind('click', function() {
		$('#quicktabs_container_quicktab_home_howdo_i #quicktabs_tabpage_quicktab_home_howdo_i_1').attr('aria-labelledby', 'quicktabs-tab-quicktab_home_howdo_i-1');
		$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-0').attr('aria-selected','false');
		$('#quicktabs-quicktab_home_howdo_i #quicktabs-tab-quicktab_home_howdo_i-1').attr('aria-selected','true');
	});
	// End
	
	// For homepage news tabs	
	/*$('#quicktabs-view_feeds_home ul.quicktabs_tabs').attr('role','tablist');
	$("#quicktabs-view_feeds_home ul.quicktabs_tabs").find('li').each(function(index)
	{
		$(this).attr('role','presentation');
	});
	
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-0').attr('role','tab');
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-1').attr('role','tab');
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-2').attr('role','tab');*/
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-0').attr('aria-selected','true');
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-1').attr('aria-selected','false');
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-2').attr('aria-selected','false');
	
	$('#quicktabs_container_view_feeds_home #quicktabs_tabpage_view_feeds_home_0').attr('aria-labelledby', 'quicktabs-tab-view_feeds_home-0');
	
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-0').bind('click', function() {
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-0').attr('aria-selected','true');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-1').attr('aria-selected','false');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-2').attr('aria-selected','false');
	});
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-1').bind('click', function() {
		$('#quicktabs_tabpage_view_feeds_home_1').attr('aria-labelledby', 'quicktabs-tab-view_feeds_home-1');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-0').attr('aria-selected','false');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-1').attr('aria-selected','true');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-2').attr('aria-selected','false');
	});
	$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-2').bind('click', function() {
		$('#quicktabs_tabpage_view_feeds_home_2').attr('aria-labelledby', 'quicktabs-tab-view_feeds_home-2');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-0').attr('aria-selected','false');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-1').attr('aria-selected','false');
		$('#quicktabs-view_feeds_home #quicktabs-tab-view_feeds_home-2').attr('aria-selected','true');
	});
	// End
	
	// For Page feedback
	$('#block-formblock-page_feedback h2').attr('id','useful');
	$('#block-formblock-page_feedback .content').attr('aria-labelledby','useful');
	//$('#block-formblock-page_feedback .content .form-radios').attr('role','radiogroup');
	//$('#block-formblock-page_feedback .content .form-radios .form-item').attr('role','radio');
	$('#block-formblock-page_feedback .content .description').attr('id','info');
	$('#block-formblock-page_feedback .content #edit-body').attr('aria-describedby','info');
	// Ends
	$('#block-formblock-page_feedback .content #edit-teaser-js').parent().append('<label for="edit-teaser-js">Comments Teaser: </label>');
	// For Metadata Suggestion
	$('#metadata_suggestion h2').attr('id','suggest');
	$('#metadata_suggestion #edit-suggest-submit').attr('aria-describedby','suggest');
	// Ends
	
	// For home page
	//$('#home').attr('role','main');
	// End
	
	// For Home How-do-i tab
	$('#news-home .pane-quicktabs-quicktab-home-howdo-i h2').html('Recently added services and forms');
	$('#news-home .pane-quicktabs-quicktab-home-howdo-i h2').attr('class','pane-title hidden');
	// End
	
	// For Relevant links
	//$('.pane-quicktabs-relevant-links').attr('role','complementary');
	// End
});
   
// Function for confirming deleting portal feedback by Jibon 04/04/2013
function confirmDelete()
{
	if(window.confirm("Are you sure want to delete feedback?"))
	{
		return true;
	}
	else
	{
		return false;
	}
}
$(document).ready(function()
{
	// To hide online services from Metadata create form dropdown, by Jibon on 4Jul2013
	$("#edit-field-services-tids-hierarchical-select-selects-0 > option").each(function() {
    	if(this.text == "Online Services")
		{
			$(this).hide();
		}
	});
	
	
});

// Code for online service dashboard
	Drupal.behaviors.commonutility = function(context)
	{
		if($('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report #edit-term-node-tid-depth-3').val() == 333)
		{
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_1').show();	
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_2').hide();
		}
		else if($('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report #edit-term-node-tid-depth-3').val() == 332)
		{
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_1').hide();	
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_2').show();		
		}
		else
		{
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_1').hide();	
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_2').hide();
		}
		
		$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report #edit-term-node-tid-depth-3').change(function()
		 {
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report #edit-term-node-tid-depth-1-hierarchical-select-selects-0').val('');	
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report #edit-term-node-tid-depth-2-hierarchical-select-selects-0').val('');
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_1').find('select').each(function(index)
			{
				if(index != 0)
				{
					$(this).val('');
					$(this).hide();
				}
			});
			$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_2').find('select').each(function(index)
			{
				if(index != 0)
				{
					$(this).val('');
					$(this).hide();
				}
			});	
			
			if($('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report #edit-term-node-tid-depth-3').val() == 333)
			{
				$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_1').show();	
				$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_2').hide();
			}
			else if($('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report #edit-term-node-tid-depth-3').val() == 332)
			{
				$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_1').hide();	
				$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_2').show();		
			}
			else
			{
				$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_1').hide();	
				$('form#views-exposed-form-view-onlineservice-report-page-onlineservice-report .views-widget-filter-term_node_tid_depth_2').hide();
			}
		});
	}
	
	/// For recommend online service
$(document).ready(function() {
	$('#edit-online-service-submit').bind('click',function()
	{
		$('#edit-online-service-submit').toggle();
		Drupal.behaviors.commonUtilityBehavior = function (context) {
		$('#service-wrapper #edit-field-online-service-owner-value').focus();
		};
	});
});

// Code for recommended online service
	Drupal.behaviors.commonutility_service = function(context)
	{
		if($('#edit-field-online-service-owner-value').val() == 1037)
		{
			$('#edit-field-online-service-ministry-value-wrapper').show();	
			$('#edit-field-online-service-state-value-wrapper').hide();	
		}
		else if($('#edit-field-online-service-owner-value').val() == 1033)
		{
			$('#edit-field-online-service-ministry-value-wrapper').hide();	
			$('#edit-field-online-service-state-value-wrapper').show();		
		}
		else
		{
			$('#edit-field-online-service-ministry-value-wrapper').hide();	
			$('#edit-field-online-service-state-value-wrapper').hide();		
		}
		
		$('#edit-field-online-service-owner-value').change(function()
		 {
			$('#edit-field-online-service-ministry-value').val('');	
			$('#edit-field-online-service-state-value').val('');
			
			if($('#edit-field-online-service-owner-value').val() == 1037)
			{
				$('#edit-field-online-service-ministry-value-wrapper').show();	
				$('#edit-field-online-service-state-value-wrapper').hide();	
			}
			else if($('#edit-field-online-service-owner-value').val() == 1033)
			{
				$('#edit-field-online-service-ministry-value-wrapper').hide();	
				$('#edit-field-online-service-state-value-wrapper').show();		
			}
			else
			{
				$('#edit-field-online-service-ministry-value-wrapper').hide();	
				$('#edit-field-online-service-state-value-wrapper').hide();		
			}
		});
	}
	
	
	function shareoverlay(nid){
		
		//$("share_metadata"+nid).html();
		$("#share_metadata-"+nid).show();
		//alert("#share_metadata-"+nid);
	}
	function share_metadata_close(nid){
		$("#share_metadata-"+nid).hide();
	}
$(document).ready(function (){	
	$(".share_metadata_box").hide();
	$("#mini-panel-minipanel-how-do-i-center-tab-3 table").prepend("<caption>Minister Wise data.</caption>" );
	$("#mini-panel-minipanel-how-do-i-center-tab-4 table").prepend("<caption>State Wise data.</caption>" );
	$("caption").hide();
	$("#stateForm label").hide();
	$(".metadata_feedback_form #edit-title").attr('disabled','disabled');
	$('<label for="edit-teaser-js">Teaser Comment:</label>').insertAfter('.resizable-textarea #edit-teaser-js');
	$("#edit-profile-mobile-wrapper label").text($("#edit-profile-mobile-wrapper label").text()+" +91");
	$("select").attr("role","List Box");
	$("textarea").attr("role","Editable text");
	if(lang == "hi")
	{
		$("input[value=टैग सुझाएँ]").attr("title","फॉर्म खोलने के लिए यहाँ क्लिक करें|");
		$("input[value=Suggest Tags]").attr("title","फॉर्म खोलने के लिए यहाँ क्लिक करें|");
		$("input[value=टिप्पणी]").attr("title","फॉर्म खोलने के लिए यहाँ क्लिक करें|");
		$("div.share_metadata").attr("title","शेयर करने हेतु यहाँ क्लिक करें|");
		$(".fivestar-form-item .rate label").text("अपनी रेटिंग दें:");
	}else{
		$("input[value=Suggest Tags]").attr("title","This will open a new window.");
		$("input[value=Comment]").attr("title","This will open a new window.");
		$("div.share_metadata").attr("title","Click here for sharing.");
	}
	$("#edit-profile-mobile").keypress(function(e) {
		var regex = new RegExp("^[0-9]+$");
		var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
		if (regex.test(str)) {
			if($("#edit-profile-mobile").val().length == 0){		
				if( str != 0){
					return true;
				}
			}else if($("#edit-profile-mobile").val().length <= 9){
				return true;
			}
		}else if(e.charCode == 0){
			return true;	
		}
	
		e.preventDefault();
		return false;
	});
	/*
	// Add Opens in window into the loksabha MP link
	if($("#loksabha .view-view-mp-search-loksabha .item-list ul li")){
		for(var i = 1; i <= $("#loksabha .view-view-mp-search-loksabha .item-list ul li").length; i++){
				$("#loksabha .view-view-mp-search-loksabha .item-list ul li.views-row-"+i+" a").attr("title",$("#loksabha .view-view-mp-search-loksabha .item-list ul li.views-row-"+i+" a").text() +" (Opens in new window)");
		}
	}
	// Add Opens in window into the rajyasabha MP link
	if($("#rajyasabha .view-view-mp-search-rajyasabha .item-list ul li")){
		for(var i = 1; i <= $("#rajyasabha .view-view-mp-search-rajyasabha .item-list ul li").length; i++){
				$("#rajyasabha .view-view-mp-search-rajyasabha .item-list ul li.views-row-"+i+" a").attr("title",$("#rajyasabha .view-view-mp-search-rajyasabha .item-list ul li.views-row-"+i+" a").text() +" (Opens in new window)");
		}
	}
	*/
	// Add Opens in window into the Chief of India link
	if($(".view-display-id-default .view-content tbody tr")){
		for(var i = 0; i < $(".view-display-id-default .view-content tbody tr").length; i++){		
			$(".view-display-id-default .view-content tbody").children().eq(i).children("td.views-field-title").children("a").attr("title",$(".view-display-id-default .view-content tbody").children().eq(i).children("td.views-field-title").children("a").text() +" (Opens in new window)");			
		}
	}
	
	//alert($("#news-list .view-display-id-air_news_details li").length);
	for(var j = 1; j <= $("#news-list .view-display-id-air_news_details li").length; j++){
			$("#news-list .view-display-id-air_news_details li.views-row-"+j+" img").attr("alt",$("#news-list .view-display-id-air_news_details li.views-row-"+j+" .field-content a").text());
	}
	$(".share_metadata").focus(function (){
		$(this).addClass("hover");
		//$(this).children(".share_icons").children().children("li.first").children("a").focus();
	});
	$(".share_metadata .share_icons").mouseout(function (){
		$(".share_icons").removeClass("hover");

	});
	$("a").attr("role","link");
});