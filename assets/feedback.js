/* "Rückmeldung / Vorschlag" button at the end of the homepage (only page
   that loads it). Lets readers send Renate a note by e-mail, pre-addressed
   with the page title and URL. */
(function () {
  if (document.getElementById('fb-btn')) return;
  var a = document.createElement('a');
  a.id = 'fb-btn';
  a.textContent = '✎ Rückmeldung';
  a.style.cssText = [
    'display:inline-block',
    'background:#7A3A1C', 'color:#fff', 'font-family:Georgia,\'Crimson Text\',serif',
    'font-size:15px', 'text-decoration:none', 'padding:9px 18px',
    'border-radius:24px', 'box-shadow:0 2px 8px rgba(0,0,0,.2)'
  ].join(';');
  a.onmouseover = function () { a.style.background = '#9A4520'; };
  a.onmouseout = function () { a.style.background = '#7A3A1C'; };
  var subject = 'Reisetagebuch – Vorschlag: ' + document.title;
  var body = 'Liebe Grüße!\n\nMein Vorschlag / meine Anmerkung zu dieser Seite:\n\n\n\n'
           + '(Seite: ' + location.href + ')';
  a.href = 'mailto:renate.kirscher@googlemail.com'
         + '?subject=' + encodeURIComponent(subject)
         + '&body=' + encodeURIComponent(body);
  // sits centred at the end of the homepage (not floating over the stamps)
  var wrap = document.createElement('div');
  wrap.style.cssText = 'text-align:center;margin:26px 0 30px';
  wrap.appendChild(a);
  document.body.appendChild(wrap);
})();
