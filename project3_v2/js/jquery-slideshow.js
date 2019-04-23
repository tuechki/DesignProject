
$().ready(function() {

    $('#slideShow > div:gt(0)').hide();

    window.setInterval(function() {
    $('#slideShow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideShow');
}, 3000);
});

