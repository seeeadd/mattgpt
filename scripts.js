(function () {
  const phaseTabs = document.querySelectorAll('.phase-tab');
  const phaseContents = document.querySelectorAll('.phase-content');

  phaseTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      const isExpanded = tab.getAttribute('aria-expanded') === 'true';

      phaseTabs.forEach((otherTab, otherIndex) => {
        const shouldOpen = otherIndex === index && !isExpanded;
        otherTab.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
        phaseContents[otherIndex].classList.toggle('open', shouldOpen);
      });
    });
  });

  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-item__question');
    const answer = item.querySelector('.faq-item__answer');

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      if (isOpen) {
        item.classList.remove('open');
        question.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('open');
        question.setAttribute('aria-expanded', 'true');
        const scrollOffset = item.getBoundingClientRect().top + window.scrollY - 120;
        window.scrollTo({ top: scrollOffset, behavior: 'smooth' });
      }
    });

    answer.addEventListener('transitionend', () => {
      if (!item.classList.contains('open')) {
        question.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();
