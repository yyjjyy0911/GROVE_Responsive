// 더보기 버튼을 클릭하면 보이게
function showMore(){
  const hide = document.querySelectorAll('.hide');
  const first = Array.from(hide).slice(0, 4); // 한 줄에 4개씩 보이게
  first.forEach(item => {
    item.classList.remove('hide');
  });
  if(hide.length <= 4){
    hideMoreButton();
  }
}

// 보일 내용이 끝나면 더보기 버튼 숨기기
function hideMoreButton(){
  document.querySelector('.more-btn').classList.add('hide')
}


// Scroll Magic-----------------------------------
const scrollEl = document.querySelectorAll('section.scroll-spy');
scrollEl.forEach(function(scrollEl){
  new ScrollMagic.Scene({
    triggerElement : scrollEl, //보여짐 여부를 감지할 요소를 지정
    triggerHook : 0.8,
  })
  //show넣었다가 뺐다가
  //.setClassToggle(토글할요소, '넣었다뺄 class이름')
  .setClassToggle(scrollEl, 'show')
  .addTo(new ScrollMagic.Controller());
});


//뱃지
//top버튼
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function(){
  if(window.scrollY > 500) {
    //탑 버튼 보이기
    gsap.to(toTopEl, 0.2, {
      x : 0
    });
  } else{

    //탑 버튼 숨기기
    gsap.to(toTopEl, 0.2, {
      x : 100
    });
  }
},300));

//top버튼을 클릭하면 상단으로 이동
toTopEl.addEventListener('click', function(){
  gsap.to(window, 0.7,{
    scrollTo : 0
  })
});