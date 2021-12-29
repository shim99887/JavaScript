// html 안에 있는 클래스 노드들 중에 ()이거 안에 있는 클래스를 찾아서 변수 토글버튼에 연결해주는 것
const toggleBtn = document.querySelector('.navbar__toogleBtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons'); 

// addEventListener - api, 클릭이 될때마다 우리가 지정하고 있는 함수를 호출
toggleBtn.addEventListener('click', () => { 
    menu.classList.toggle('active'); // 메뉴와 아이콘에 있는 클래스 리스트 중에 액티브 클래스를 토글링 함. 클래스가 액티브가 없다면 추가, 있다면 다시 빼줌
    icons.classList.toggle('active');
});