const NamPham_List = [
  "https://files.catbox.moe/dijsm7.mp3",
  "https://files.catbox.moe/xdjg9a.mp3",
  "https://files.catbox.moe/5qe1ms.mp3",
  
  
    
  ];
  let index = parseInt(localStorage.getItem('currentAudioIndex')) || Math.floor(Math.random() * NamPham_List.length);
  const audio = new Audio(NamPham_List[index]);
  function NamPhamAudio() {audio.play();}
  document.addEventListener('click', NamPhamAudio);
  audio.addEventListener("ended", function() {
  index = (index + 1) % NamPham_List.length;
  localStorage.setItem('currentAudioIndex', index);
  audio.src = NamPham_List[index];
  audio.play();
  });
  function onCreate() {
    CheckFps();
    HomeNamPham();
    NamPhamAudio();
    ShowToast();
  }

var myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
  window.location.href = "https://drive.google.com/file/d/1351r1udIrkfHs-BRm1lBzkluAT11zIof/view?usp=sharing";
});

var myButton = document.getElementById("myButton1");
myButton.addEventListener("click", function() {
  window.location.href = "https://drive.google.com/file/d/19jmxQ3rzNkafFHmQPApjgsG8Fq6xRXQ9/view?usp=sharing";
});

var menuBar = document.querySelector('#menu .menu-bar');
var menuItems = document.querySelector('#menu .menu-items');

menuBar.addEventListener('click', function() {
  menuItems.style.display = menuItems.style.display === 'block' ? 'none' : 'block';
});
function checkWindowSize() {
  var myElement = document.getElementById('menu');
  if (window.innerWidth <= 600) {
    myElement.style.display = 'block'; // Hiển thị phần tử khi màn hình được thu nhỏ
  } else {
    myElement.style.display = 'none'; // Ẩn phần tử khi màn hình được mở rộng
  }
}

// Kiểm tra kích thước màn hình khi tải trang và khi thay đổi kích thước
window.addEventListener('load', checkWindowSize);
window.addEventListener('resize', checkWindowSize);
document.getElementById("userName").innerHTML = 'Phạm Bảo Nam <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Twitter_Verified_Badge.svg/512px-Twitter_Verified_Badge.svg.png" width="17" height="17" alt="Tích Xanh">';


