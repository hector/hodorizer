var play_img = "img/play-btn.png"

function playerHoverIn(event) {
  // $(this).css('background-image', this.src);
  this.src_bk = this.src
  this.src = play_img
}

function playerHoverOut(event) {
  this.src = this.src_bk
}

function loadSongs(songs) {
  $.each(songs, function(index, song) {
    song.id = 'song_'+index
    $('<li id="'+song.id+'" class="col-lg-2 col-md-2 col-sm-3 col-xs-4"><div class="player"><a class="cover-img youtube" href="'+song.youtube_url+'"><img src="img/'+song.cover+'" alt="cover" class="img-thumbnail"></a><div class="track-info"><p class="artist">'+song.artist+'</p><p class="song">'+song.song+'</p></div></div></li>').appendTo('#song-list')
    $('#'+song.id)
  })
  $('.player .cover-img img').hover(playerHoverIn, playerHoverOut)
  $(".youtube").YouTubeModal({autoplay:1, width:640, height:480});
}

function filterSongs(event) {
  var text = this.value
  var exp = new RegExp(text, 'i')
  $.each(songs, function(index, song) {
    var s = $('#'+song.id)
    if (exp.test(song.artist) || exp.test(song.song)) {
      if (!s.is(":visible")) s.fadeIn()
    } else {
      if (s.is(":visible")) s.fadeOut()
    }
  })
}

function effectFadeIn(selector, speed) {
    $(selector).fadeOut(speed).fadeIn(speed, effectFadeOut(selector))
}

function effectFadeOut(selector, speed) {
    $(selector).fadeIn(speed).fadeOut(speed, effectFadeIn(selector))
}