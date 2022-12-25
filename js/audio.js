var dot;
$(function () {
    $('.toggle').click(function () {
        audio = $(this).parents('div').children('audio')[0]
        audio.addEventListener('timeupdate', updateProgress, false);
        audio.addEventListener('ended', audioEnded, false);

        if (audio.paused) {
            audio.play();
            $(this).parents('div').children('.controls').children('button').children().removeClass('glyphicon-play').addClass('glyphicon-pause')
        } else {
            audio.pause();
            $(this).parents('div').children('.controls').children('button').children().removeClass('glyphicon-pause').addClass('glyphicon-play')
        }
    })

    $('audio').on("loadedmetadata", function () {
        $(this).siblings('.controls').children('#audioTime').text(transTime(this.duration));
        var span = $(this).siblings('.pgs').children('span')
        if (!dot) {
            while (span.width() < span.parents('.panel-body').width()) {
                span.html(span.html() + '.')
            }
            dot = span.html().length
        } else {
            var s = ''
            for (let i = 0; i < dot; i++)s += '.'
            span.html(s)
        }
    });

    $('.pgs span').click(function (e) {
        var rate = (e.offsetX) / $(this).width();
        audio = $(this).parents('div').children('audio')[0]
        audio.currentTime = audio.duration * rate;
        var value = Math.round((Math.floor(audio.currentTime) / Math.floor(audio.duration)) * dot, 0);
        var s = '';
        for (let i = 0; i < dot; i++)s += (i > value) ? '.' : '>'
        $(audio).siblings('.pgs').children('span').html(s)
        $(audio).siblings('.controls').children('.played-time').html(transTime(audio.currentTime));
    });
    window.onresize = resizeA
})
function resizeA() {
    var span = $($('.pgs>span')[0])
    span.html('')
    while (span.width() < span.parents('.panel-body').width()) {
        span.html(span.html() + '.')
    }
    dot = span.html().length
    $('.pgs>span').html(span.html())
}
function transTime(time) {
    var duration = parseInt(time);
    var minute = parseInt(duration / 60);
    var sec = duration % 60 + '';
    var isM0 = ':';
    if (minute == 0) minute = '00';
    else if (minute < 10) minute = '0' + minute;
    if (sec.length == 1) sec = '0' + sec;
    return minute + isM0 + sec
}

function updateProgress(e) {
    var value = (this.currentTime / this.duration) * dot;
    var s = '';
    for (let i = 0; i < dot; i++)s += (i >= value) ? '.' : '>'
    $(this).siblings('.pgs').children('span').html(s)
    $(this).siblings('.controls').children('.played-time').html(transTime(this.currentTime));
}

function audioEnded() {
    this.currentTime = 0;
    this.pause();
    $(this).parents('div').children('.controls').children('button').children().removeClass('glyphicon-pause').addClass('glyphicon-play')
}
