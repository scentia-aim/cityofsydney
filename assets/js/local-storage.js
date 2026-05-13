/**
 * Local Storage — saves and restores participant draft answers
 * Data stays in the browser only. Nothing is uploaded.
 *
 * Usage:
 *   Add class "save-field" and a unique id to any input/textarea/select.
 *   Auto-save fires on input, every 30 seconds, and on beforeunload.
 *   Module completion is tracked automatically — any filled input = complete.
 */
(function () {
  'use strict';

  var PREFIX = 'cos_ai_';

  /* ── Module ID mapping ── */
  /* Each page filename maps to a module ID used on the index pages */
  var PAGE_MODULE_MAP = {
    /* AI for Business */
    'what-ai-is-good-for.html': 'biz-m1',
    'business-task-finder.html': 'biz-m2',
    'safe-context-rewriter.html': 'biz-m3',
    'act-explain-please-builder.html': 'biz-m4',
    'admin-prompt-library.html': 'biz-m5',
    'document-summary-builder.html': 'biz-m6',
    'workflow-canvas.html': 'biz-m7',
    'seven-day-action-plan.html': 'biz-m8',
    /* AI for Marketing */
    'marketing-task-finder.html': 'mkt-m1',
    /* what-ai-is-good-for.html also = mkt-m2 — handled specially */
    'customer-persona-builder.html': 'mkt-m3',
    'brand-voice-builder.html': 'mkt-m4',
    'social-post-generator.html': 'mkt-m5',
    'email-campaign-builder.html': 'mkt-m6',
    'thirty-day-content-plan.html': 'mkt-m7',
    'publishing-checklist.html': 'mkt-m8'
  };

  /* Pages that belong to two courses */
  var DUAL_MODULE_MAP = {
    'what-ai-is-good-for.html': ['biz-m1', 'mkt-m2']
  };

  function getCurrentPageFile() {
    var path = window.location.pathname;
    var parts = path.split('/');
    return parts[parts.length - 1] || '';
  }

  function getModuleIds() {
    var file = getCurrentPageFile();
    if (DUAL_MODULE_MAP[file]) return DUAL_MODULE_MAP[file];
    if (PAGE_MODULE_MAP[file]) return [PAGE_MODULE_MAP[file]];
    return [];
  }

  var LocalStore = {
    save: function (id, value) {
      try { localStorage.setItem(PREFIX + id, JSON.stringify(value)); } catch (e) { /* quota */ }
    },

    load: function (id) {
      try {
        var raw = localStorage.getItem(PREFIX + id);
        return raw ? JSON.parse(raw) : null;
      } catch (e) { return null; }
    },

    remove: function (id) {
      try { localStorage.removeItem(PREFIX + id); } catch (e) { /* noop */ }
    },

    saveAll: function () {
      var anyFilled = false;
      document.querySelectorAll('.save-field').forEach(function (el) {
        if (!el.id) return;
        var val = el.type === 'checkbox' ? el.checked : el.value;
        LocalStore.save(el.id, val);
        if (val && val !== false && val !== '') anyFilled = true;
      });
      /* Auto-mark module complete if any field has content */
      if (anyFilled) {
        var ids = getModuleIds();
        ids.forEach(function (mid) {
          LocalStore.markModuleComplete(mid);
        });
      }
    },

    loadAll: function () {
      document.querySelectorAll('.save-field').forEach(function (el) {
        if (!el.id) return;
        var val = LocalStore.load(el.id);
        if (val === null) return;
        if (el.type === 'checkbox') {
          el.checked = val;
        } else {
          el.value = val;
        }
        el.dispatchEvent(new Event('input', { bubbles: true }));
      });
    },

    clearAll: function () {
      var keys = [];
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.startsWith(PREFIX)) keys.push(k);
      }
      keys.forEach(function (k) { localStorage.removeItem(k); });
    },

    /* ── Module progress ── */
    markModuleComplete: function (moduleId) {
      var progress = LocalStore.load('_progress') || {};
      if (progress[moduleId]) return; /* already done */
      progress[moduleId] = Date.now();
      LocalStore.save('_progress', progress);
    },

    getProgress: function () {
      return LocalStore.load('_progress') || {};
    },

    updateProgressUI: function () {
      var progress = LocalStore.getProgress();
      var dots = document.querySelectorAll('.module-dot');
      var completedCount = 0;

      dots.forEach(function (dot) {
        var mod = dot.getAttribute('data-module');
        if (mod && progress[mod]) {
          dot.classList.add('completed');
          /* Add checkmark icon if not already present */
          if (!dot.querySelector('.check-icon')) {
            dot.innerHTML = '<svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="width:100%;height:100%;padding:1px;color:#fff"><polyline points="20 6 9 17 4 12"></polyline></svg>';
            dot.style.display = 'flex';
            dot.style.alignItems = 'center';
            dot.style.justifyContent = 'center';
          }
          completedCount++;
        }
      });

      /* Update progress bar */
      var bar = document.querySelector('.progress-fill');
      if (bar && dots.length > 0) {
        var pct = Math.min(100, Math.round((completedCount / dots.length) * 100));
        bar.style.width = pct + '%';
        var label = document.getElementById('progress-label');
        if (label) {
          if (pct === 100) {
            label.textContent = 'All modules complete!';
            label.style.color = '#4ade80';
          } else {
            label.textContent = completedCount + ' of ' + dots.length + ' modules  ·  ' + pct + '%';
          }
        }
      }
    },

    /* ── Get all saved data for a specific module page ── */
    getSavedFieldsByPrefix: function (fieldPrefix) {
      var result = {};
      for (var i = 0; i < localStorage.length; i++) {
        var k = localStorage.key(i);
        if (k && k.startsWith(PREFIX) && !k.startsWith(PREFIX + '_')) {
          var fieldId = k.substring(PREFIX.length);
          if (!fieldPrefix || fieldId.startsWith(fieldPrefix)) {
            try { result[fieldId] = JSON.parse(localStorage.getItem(k)); } catch (e) {}
          }
        }
      }
      return result;
    },

    getAllSavedFields: function () {
      return LocalStore.getSavedFieldsByPrefix('');
    }
  };

  function init() {
    LocalStore.loadAll();
    LocalStore.updateProgressUI();

    /* Check completion state on page load for pages with fields already filled */
    var anyFilled = false;
    document.querySelectorAll('.save-field').forEach(function (el) {
      if (!el.id) return;
      var val = el.type === 'checkbox' ? el.checked : el.value;
      if (val && val !== false && val !== '') anyFilled = true;
    });
    if (anyFilled) {
      var ids = getModuleIds();
      ids.forEach(function (mid) { LocalStore.markModuleComplete(mid); });
    }

    /* Auto-save on input (debounced) */
    var saveTimer = null;
    document.addEventListener('input', function (e) {
      if (e.target.classList && e.target.classList.contains('save-field')) {
        clearTimeout(saveTimer);
        saveTimer = setTimeout(function () { LocalStore.saveAll(); }, 500);
      }
    });

    /* Also save on change (for selects and checkboxes) */
    document.addEventListener('change', function (e) {
      if (e.target.classList && e.target.classList.contains('save-field')) {
        LocalStore.saveAll();
      }
    });

    /* Auto-save every 30 seconds and before leaving */
    setInterval(LocalStore.saveAll, 30000);
    window.addEventListener('beforeunload', LocalStore.saveAll);
  }

  window.LocalStore = LocalStore;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
