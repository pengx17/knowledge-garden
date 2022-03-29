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
      textarea.selectionStart = selectionStart;
      textarea.selectionEnd = selectionEnd + 2;
      return true;
    }
  }
}

window.addEventListener(
  "keydown",
  (e) => {
    if (isActive() && e.key === '"') {
      const textarea = getActiveTextarea();
      if (textarea) {
        const quoted = quoteTextInTextarea(textarea, '"');
        console.log(quoted);
        if (quoted) {
          e.stopPropagation();
          e.preventDefault();
        }
      }
    }
  },
  true
);
