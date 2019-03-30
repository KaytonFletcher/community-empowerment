$(document).ready(function(){
    $('a').click(function(){
        alert('te');
        $('p').toggleClass('hide').toggleClass('show');
        return false;
    });
});