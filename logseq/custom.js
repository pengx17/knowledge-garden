let currentRepo = logseq.api.get_current_graph().path;

function isActive() {
  return logseq.api.get_current_graph().path === currentRepo;
}

function isEditing() {
  return logseq.api.check_editing();
}

function getActiveTextarea() {
  if (isEditing()) {
    const textarea = document.activeElement;
    return textarea.nodeName === "TEXTAREA" ? textarea : undefined;
  }
}

function quoteTextInTextarea(textarea, quote) {
  if (isEditing()) {
    const { selectionStart, selectionEnd } = textarea;
    const selectedText = textarea.value.substring(selectionStart, selectionEnd);
    if (selectedText) {
      textarea.value =
        textarea.value.substring(0, selectionStart) +
        quote +
        selectedText +
        quote +
        textarea.value.substring(selectionEnd);
      textarea.selectionStart = selectionStart + 1;
      textarea.selectionEnd = selectionEnd + 1;
      return true;
    }
  }
}

window.addEventListener("keydown", (e) => {
  if (isActive() && e.key === '"') {
    const textarea = getActiveTextarea();
    if (textarea) {
      const quoted = quoteTextInTextarea(textarea, '"');
      if (quoted) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  }
});

/**
 * HETI
 */

function initHeti() {
  const script$ = document.createElement("script");
  script$.src = "https://unpkg.com/heti/umd/heti-addon.min.js";
  document.body.append(script$);

  const style$ = document.createElement("link");
  style$.href = "https://unpkg.com/heti/umd/heti.min.css";
  style$.rel = "stylesheet";
  document.body.append(style$);

  script$.onload = () => {
    const heti = new window.Heti();
    document.querySelectorAll(".block-content-wrapper").forEach((el) => {
      heti.spacingElement(el);
      el.classList.add('heti');
    });

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "childList" &&
          mutation.target.classList.contains("block-content-wrapper")
        ) {
          mutation.target.classList.add('heti');
          heti.spacingElement(mutation.target);
        }
      });
    });

    observer.observe(document.querySelector("#main-content-container"), {
      childList: true,
      subtree: true,
    });
  };
}

// Not working
// initHeti();
