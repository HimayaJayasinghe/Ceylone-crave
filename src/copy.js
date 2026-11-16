// Copies text to the clipboard. Some app views refuse clipboard access,
// so callers get onFail and can select the text for a manual copy instead.
export function copyText(text, onOk, onFail) {
  try {
    navigator.clipboard.writeText(text).then(onOk, onFail);
  } catch {
    onFail();
  }
}

export function selectContents(el) {
  const range = document.createRange();
  range.selectNodeContents(el);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}
