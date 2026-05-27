/**
 * Copy Buttons — auto-attaches "Copy Prompt" buttons to .prompt-box elements
 */
(function () {
  'use strict';

  function init() {
    document.querySelectorAll('.prompt-box').forEach(function (box) {
      if (box.querySelector('.copy-btn')) return; // already attached
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      btn.setAttribute('aria-label', 'Copy prompt to clipboard');
      btn.addEventListener('click', function () {
        var text = box.innerText.replace(/^Copy$|^Copied!$/gm, '').trim();
        navigator.clipboard.writeText(text).then(function () {
          btn.textContent = 'Copied!';
          btn.style.background = 'rgba(74, 222, 128, 0.18)';
          btn.style.borderColor = 'rgba(74, 222, 128, 0.35)';
          btn.style.color = '#4ade80';
          setTimeout(function () {
            btn.textContent = 'Copy';
            btn.style.background = '';
            btn.style.borderColor = '';
            btn.style.color = '';
          }, 2000);
        });
      });
      box.style.position = 'relative';
      box.appendChild(btn);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
