var btn = $(".tab-button");
var content = $('.tab-content')

//이벤트리스너 줄이기
$('.list').click(function(e){
    for (let i = 0; i < btn.length; i++){ //var 말고 무조건 let으로 반복문 안에는 
        if(e.target==btn.eq(num)){
            openTab(i); 
        }
    };

    //data-id dataset이용
    for (let i = 0; i < btn.length; i++){ //var 말고 무조건 let으로 반복문 안에는 
        openTab(e.target.dataset.id); //지금누른버튼에숨겨져있는data-id 정보 찾아서 openTab() 펑션에 넣어줘
    };
});


function openTab(num){
    btn.eq(num).on('click', function(){
        btn.removeClass('orange');
        btn.eq(num).addClass('orange');
        content.removeClass('show');
        content.eq(num).addClass('show');
    });
}