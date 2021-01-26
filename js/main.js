function _(e) {
  return document.getElementById(e);
}
const myDate = new Date();
const myYear = myDate.getFullYear();

_('copy').innerText = (myYear - 2) + ' ' + (myYear + 2);

function showPreview() {
  let htmlCode = _('edht').value;
  let cssCode = '<style>' + _('edcs').value + '</style>'
  let jsCode = '<scr' + 'ipt>' + _('edjs').value + '</scr' + 'ipt>';
  let frame = _('preview-window');
  let doc = frame.contentDocument? frame.contentDocument:
   frame.contentWindow.document;
  doc.open();
  doc.write(htmlCode + cssCode + jsCode);
  doc.close();
}
