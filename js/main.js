// menu
$("header nav > ul > li").hover(function(){
  $(this).find(".sub-menu").stop().slideDown();
},function(){
  $(this).find(".sub-menu").stop().slideUp();
});


// 햄버거 메뉴 클릭하면 #gnb-mo 등장
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.querySelector('header nav');
let isHideMenu = false;

menuToggleBtn.addEventListener('click', function(){
  isHideMenu = !isHideMenu;
  if(isHideMenu){
    menuHide.classList.add('show');
    menuToggleBtn.classList.add('active');
  }else{
    menuHide.classList.remove('show');
    menuToggleBtn.classList.remove('active');
  }
});