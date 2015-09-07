var socket = io();
$(function(){
	var messageInput = $('#messageInput');
	$('form').submit(function () {
		socket.emit('chatMessage', messageInput.val());
		messageInput.val('');
		return false;
	});
	
	socket.on('chatMessageUpdate', function(msg){
		console.log("omg!");
		var container = $('<li>').text(msg);
		$('#messages').append(container);
	});
})
