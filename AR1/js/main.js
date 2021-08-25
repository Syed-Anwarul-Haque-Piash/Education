$(document).ready(function(){
	
	// contact form send mail 
	$("#submit_contact_us_p").click(function(e) {
		if($("#form_contact_us_page")[0].checkValidity()) {
		e.preventDefault();
		var msg = "";
		$.ajax({
			type:'POST',
			data: jQuery("#form_contact_us_page").serialize(),
			url:'mail.php',
			beforeSend: function(xhr){
				msg = "<span style='color:green;'>Wait ... </span>";
				$("#mail_send_status_p").html(msg);
			},
			success:function(result) {
				$("#mail_send_status_p").html(result);
				$("#form_name_p").val('');
				$("#form_phone_p").val('');
				$("#form_email_p").val('');
				$("#form_msg_p").val('');
			}
		});  //end ajax
		}else console.log("invalid form");
	}); // end mail send
	
	// contact form send mail [side bar]
	$("#submit_contact_us").click(function(e) {
		if($("#form_contact_us")[0].checkValidity()) {
		e.preventDefault();
		var msg = "";
		$.ajax({
			type:'POST',
			data: jQuery("#form_contact_us").serialize(),
			url:'mail.php',
			beforeSend: function(xhr){
				msg = "<span style='color:green;'>Wait ... </span>";
				$("#mail_send_status").html(msg);
			},
			success:function(result) {
				$("#mail_send_status").html(result);
				$("#form_name").val('');
				$("#form_phone").val('');
				$("#form_email").val('');
				$("#form_msg").val('');
			}
		});  //end ajax
		}else console.log("invalid form");
	}); // end mail send
});