$(function() {
    // クリックしたら文字色を変える
    $('#change-color').on('click', function(){
        $('#target').css('color', 'red');
    });
    // クリックしたら文字内容を変える
    $('#change-text').on('click', function(){
        $('#target').text('Hello!');
    });
    // フェードアウト
    $('#fade-out').on('click', function() {
        $('#target').fadeOut();
    });
    // フェードイン
    $('#fade-in').on('click', function() {
        $('#target').fadeIn();
    });
});
