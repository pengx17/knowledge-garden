let currentRepo = logseq.api.get_current_graph().path;

function isActive() {
  return logseq.api.get_current_graph().path === currentRepo;
}

function isEditing() {
  return logseq.api.check_editing();
}

function getSelectedTextarea() {
  if (isEditing()) {
    const selection = window.getSelection();
    if (selection.toString()) {
      const textarea = document.activeElement;
      if (textarea.nodeName === 'TEXTAREA' && selection.anchorNode.contains(textarea)) {
        return textarea;
      }
    }
  }
}

window.addEventListener("keydown", (e) => {
  if (isActive()) {
    const textarea = getSelectedTextarea();
    console.log(textarea);
  }
});
