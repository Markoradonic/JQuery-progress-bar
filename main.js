var dugme = $('#myButton');

dugme.click(function(){
    animate($('#SelectId').val());
});

function animate (complited){
    $('#innerDiv').animate({
        'width': (500 * complited)/100
    },3000);
    
    $({counter: 1 }).animate({counter: complited}, {
        duration: 3000,
        step: function(){
            $('#innerDiv').text(Math.ceil(this.counter )+ ' %')
        }
    })
}