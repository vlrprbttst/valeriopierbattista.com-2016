//instagram
var userFeed = new Instafeed({
	get : 'user',
	userId : 33551734,
	accessToken : '33551734.467ede5.0ac0e631675b41eabb8fdca110a6d4af',
	limit : 3,
	resolution : 'standard_resolution',
	template : '<a href="{{link}}" target="_blank"><div class="insta-wrapper"><img src="{{image}}"><p><span>{{caption}}</span>{{location}}</p></div></a>'
});
userFeed.run();

// spotify
function get_spotify() {
	$.ajax({
		type : 'POST',
		url : 'spotify.php',
		data : {
			request : 'true'
		},
		success : function(reply) {
			$('.now-playing').html("<p>" + reply + "</p>");
		}
	});

};
get_spotify();

// giflink
var element = document.querySelector( '.profile-pic');
GifLinks( element, { preload: true } );

