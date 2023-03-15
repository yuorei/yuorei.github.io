// ページ内スクロール
var navLinks = document.querySelectorAll('nav a');

navLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var targetId = this.getAttribute('href');
    var targetPosition = document.querySelector(targetId).offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// 時系列
const timelineBlocks = document.querySelectorAll('.timeline');

function showTimelineBlocks() {
  timelineBlocks.forEach((timelineBlock) => {
    if (timelineBlock.getBoundingClientRect().top <= window.innerHeight * 0.75) {
      timelineBlock.classList.add('is-visible');
    }
  });
}

window.addEventListener('scroll', showTimelineBlocks);
