 // بيانات المقالات — بدّل هاد الأرقام بمقالاتك الحقيقية

const posts = [

  {

    title: "5 نصائح باش تنظم وقتك بشكل أحسن",

    excerpt: "تنظيم الوقت مشكل كيواجه بزاف من الناس. هادي 5 نصائح بسيطة غادي تبدل الطريقة اللي كتخدم بيها.",

    tag: "إنتاجية",

    date: "12 يوليوز 2026",

    read: "3 دقايق"

  },

  {

    title: "كيفاش تبدا مشروعك الصغير من الصفر",

    excerpt: "باغي تبدا مشروع ولا كتردد؟ هادي خطوات عملية باش تبدا صحيح من أول يوم.",

    tag: "مشاريع",

    date: "8 يوليوز 2026",

    read: "5 دقايق"

  },

  {

    title: "عادات صحية بسيطة تقدر تبدا بيها اليوم",

    excerpt: "ماشي خاصك تبدل حياتك كاملة، غير بدا بعادات صغيرة وشوف الفرق مع الوقت.",

    tag: "صحة",

    date: "2 يوليوز 2026",

    read: "4 دقايق"

  }

];



function renderPosts() {

  const grid = document.getElementById("post-grid");

  if (!grid) return;



  grid.innerHTML = posts.map(post => `

    <article class="post-card">

      <span class="tag">${post.tag}</span>

      <h3><a href="article.html">${post.title}</a></h3>

      <p>${post.excerpt}</p>

      <div class="meta">

        <span>${post.date}</span>

        <span>${post.read}</span>

      </div>

    </article>

  `).join("");

}



function handleContactForm() {

  const form = document.getElementById("contactForm");

  if (!form) return;



  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const status = document.getElementById("formStatus");

    status.textContent = "تم إرسال رسالتك، غادي نتواصلو معاك قريبا!";

    status.style.color = "#1F5F5B";

    form.reset();

  });

}



document.addEventListener("DOMContentLoaded", function () {

  renderPosts();

  handleContactForm();

}); 