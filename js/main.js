var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  autoplay: {  
    //자동슬라이드 (false-비활성화)
delay: 3000, // 시간 설정
disableOnInteraction: false, // false-스와이프 후 자동 재생
},
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

//햄버거 메뉴 클릭하면 #gnb-mo등장
const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.querySelector('.mainMenu');
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