const images = document.querySelectorAll('.slider img'); // تحديد جميع الصور
let index = 0; // الفهرس الحالي للصورة النشطة

function changeImage() {
  images[index].classList.remove('active'); // إخفاء الصورة الحالية
  index = (index + 1) % images.length; // الانتقال للصورة التالية
  images[index].classList.add('active'); // إظهار الصورة التالية
}

setInterval(changeImage, 3000);