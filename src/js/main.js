particlesJS.load('particles-js', '/src/js/particles.json', function() {});

$(document).ready(function(){
    $(".date").each(function(){
        $(this).text(moment(($(this).text())).fromNow());
    });
});