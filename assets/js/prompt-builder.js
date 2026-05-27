/**
 * Prompt Builder — assembles structured prompts from form fields
 * Usage: add class "prompt-field" to inputs/textareas and data-label="Act as"
 *        add id="prompt-output" to the output container
 *        add id="build-prompt-btn" to the trigger button
 */
(function () {
  'use strict';

  function buildPrompt() {
    var fields = document.querySelectorAll('.prompt-field');
    var parts = [];

    fields.forEach(function (field) {
      var val = (field.value || '').trim();
      if (!val) return;
      var label = field.getAttribute('data-label') || '';
      if (label) {
        parts.push(label + '\n' + val);
      } else {
        parts.push(val);
      }
    });

    var output = parts.join('\n\n');
    var el = document.getElementById('prompt-output');
    if (el) {
      el.textContent = output || 'Fill in the fields above to build your prompt.';
      // Re-attach copy button if copy-buttons.js is loaded
      if (typeof window.refreshCopyButtons === 'function') {
        window.refreshCopyButtons();
      }
    }
    return output;
  }

  function init() {
    var btn = document.getElementById('build-prompt-btn');
    if (btn) {
      btn.addEventListener('click', buildPrompt);
    }

    // Also build on Enter in any field
    document.querySelectorAll('.prompt-field').forEach(function (field) {
      if (field.tagName === 'INPUT') {
        field.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') { e.preventDefault(); buildPrompt(); }
        });
      }
    });
  }

  // Expose for external use
  window.buildPrompt = buildPrompt;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
