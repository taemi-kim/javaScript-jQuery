//for
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

//버튼 0  누르면 
    //모든버튼에 붙은 orange 클래스명 제거
    //버튼0에 orange 클래스명 추가 
    //모든div에 붙은 show 클래스명 제거
    //div0에 show 클래스명 추가
//selector는 변수에
// var btn = $(".tab-button");
// var content = $('.tab-content')

// btn.eq(0).on('click', function(){
//     btn.removeClass('orange');
//     btn.eq(0).addClass('orange');
//     content.removeClass('show');
//     content.eq(0).addClass('show');
// });

// btn.eq(1).on('click', function(){
//     btn.removeClass('orange');
//     btn.eq(1).addClass('orange');
//     content.removeClass('show');
//     content.eq(1).addClass('show');
// });
// btn.eq(2).on('click', function(){
//     btn.removeClass('orange');
//     btn.eq(2).addClass('orange');
//     content.removeClass('show');
//     content.eq(2).addClass('show');
// });