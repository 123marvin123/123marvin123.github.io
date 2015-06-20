var items = Array(
	"http://img.memecdn.com/nigga-stole-my-bike_o_1491931.jpg",
	"http://i0.kym-cdn.com/photos/images/original/000/951/114/5cc.jpg",
	"http://media.tumblr.com/tumblr_md3hnkBKq31qery84.jpg",
	"http://dofollow.de/wp-content/uploads/2013/09/wat-wat-wat.jpg"
)

var item = items[Math.floor(Math.random()*items.length)];
var image = document.getElementById('image')
image.src = item