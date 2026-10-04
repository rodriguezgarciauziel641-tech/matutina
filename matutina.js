// Banco de Datos con Historias Extensas y Selección Automática de Fecha Real
const matutinas = [
  {
    id: 0,
    fecha: "2026-10-04",
    titulo: "La brújula del viejo capitán",
    verso: "En el principio creó Dios los cielos y la tierra.",
    referencia: "Génesis 1:1",
    reflexion: "En la segunda mitad del siglo XIX, un bergantín mercante cruzaba el Atlántico Norte en medio de una niebla tan espesa que no permitía ver ni la proa de la nave. La tripulación, dominada por la tensión y el cansancio, sugería al viejo capitán cambiar el rumbo guiándose únicamente por la dirección de las olas o por la brisa que percibían en el rostro. Sin embargo, el experimentado capitán no despegaba los ojos de la brújula fija en la bitácora.\n\nSabía muy bien que las impresiones sensoriales en alta mar son altamente engañosas y que dejarse llevar por el pánico o por corazonadas en medio de la bruma equivalía a naufragar contra los arrecifes. Solo aquel instrumento mantenía el rumbo verdadero hacia el puerto seguro.\n\nAl comenzar esta jornada, es probable que te encuentres frente a decisiones importantes o sensaciones de incertidumbre. En la vida diaria, las opiniones de los demás, el afán de los compromisos o las emociones del momento pueden hacerte perder la orientación.\n\nSin embargo, así como aquel marinero confió en su brújula por encima de sus sensaciones, nosotros necesitamos un punto de referencia inamovible. Cuando Dios estableció el universo desde el principio, puso orden donde había caos. Poner tus planes, tu mente y tus mañanas en las manos del Creador garantiza que, aun cuando la niebla de los problemas te rodee, mantendrás la dirección correcta y la paz interior.",
    oracion: "Señor y Dios todopoderoso, reconozco que a menudo intento guiar mis pasos según mis propios impulsos y emociones. Hoy decido entregar el timón de mi vida en tus manos. Sé la brújula de mis pensamientos, el guía de mis conversaciones y el protector de mi camino durante todo este día. En el nombre de Jesús, Amén.",
    autor: "Ministerio de Fe"
  },
  {
    id: 1,
    fecha: "2026-10-05",
    titulo: "El secreto del roble en el valle",
    verso: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones.",
    referencia: "Salmos 46:1",
    reflexion: "Durante un violento temporal que azotó las laderas de una región montañosa, decenas de árboles frondosos y de copa exuberante fueron arrancados de raíz y derribados por la fuerza del viento. No obstante, en la parte baja del valle permanecía completamente firme un viejo roble, desgastado por los años pero intacto frente a las ráfagas.\n\nSorprendidos por la escena, los habitantes del pueblo consultaron a un botánico local. Él les explicó que aquellos árboles de copa hermosa habían crecido en un terreno con agua muy superficial; por lo tanto, desarrollaron raíces cortas y débiles. En cambio, el viejo roble había soportado severas sequías en su juventud, lo que obligó a sus raíces a romper las capas de tierra dura y profundizar metros abajo hasta sujetarse firmemente de la roca para alimentarse del agua subterránea.\n\nEn la experiencia humana, las dificultades y las exigencias cotidianas no ocurren para destruirte, sino para mostrarte dónde están puestas tus raíces espirituales. Confiar en nuestras propias fuerzas ante los retos de la vida equivale a ser como esos árboles de raíces superficiales.\n\nSi hoy experimentas presión en tus estudios, en el trabajo o en tu entorno familiar, no intentes sostenerte solo. Haz que tus raíces se profundicen en la Roca firme que es Cristo Jesús a través de la meditación en su Palabra y la oración constante; ahí hallarás la verdadera calma.",
    oracion: "Padre Celestial, en este día reconozco que mi verdadera seguridad no depende de mis talentos ni de mis circunstancias, sino de mi comunión contigo. Afianza mis raíces en tu amor y dame fortaleza para permanecer firme ante cualquier adversidad. Amén.",
    autor: "Jóvenes Maranata"
  },
  {
    id: 2,
    fecha: "2026-10-06",
    titulo: "El vuelo por encima de la tempestad",
    verso: "Pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas.",
    referencia: "Isaías 40:31",
    reflexion: "A diferencia de la mayoría de las aves que buscan refugio bajo las ramas o en grietas cuando divisan nubes oscuras, el águila reacciona de una forma extraordinaria. Cuando siente las primeras ráfagas de aire helado y los truenos de la tormenta, se posa sobre un peñasco elevado y ajusta la posición de sus alas.\n\nEn el instante preciso en que la tempestad estalla, el águila no huye ni se desespera; aprovecha las corrientes ascendentes de aire fuerte para elevarse por encima de las nubes destructoras. Mientras abajo el viento causa destrozos, en las alturas el águila planea en serenidad, usando la misma fuerza de la tormenta para sostener su vuelo sin agotar sus energías.\n\nMuchas veces nos sentimos desgastados por intentar resolver los dilemas diarios con nuestras propias fuerzas físicas y mentales. Las responsabilidades acumuladas y las exigencias de la vida pueden parecer tormentas abrumadoras.\n\nSin embargo, la promesa bíblica nos invita a elevar la vista. Esperar en el Señor no es una actitud pasiva, sino una actitud de fe activa que deposita las cargas en Dios. Si hoy sientes desánimo o agotamiento, transforma la prueba en una oportunidad para acercarte más al Señor y volar por encima de las dificultades con la renovación espiritual que solo Él da.",
    oracion: "Señor Jesús, me rindo ante el cansancio que me produce intentar resolver las cosas con mi propia prudencia. Concédeme la fe de las águilas para elevarnos sobre los obstáculos diarios, sabiendo que tu gracia me sostiene en todo momento. Amén.",
    autor: "Pr. Pastor Local"
  },
  {
    id: 3,
    fecha: "2026-10-07",
    titulo: "La pequeña lámpara del caminante",
    verso: "Lámpara es a mis pies tu palabra, y lumbrera a mi camino.",
    referencia: "Salmos 119:105",
    reflexion: "En la antigüedad, cuando los viajeros debían recorrer sendas pedregosas en medio de la oscuridad nocturna, utilizaban pequeñas lámparas de barro atadas con tiras de cuero a la punta de sus sandalias. Estas lámparas no proyectaban una luz potente que iluminara kilómetros por delante ni revelaban todo el panorama del trayecto; únicamente alumbraban el trozo de suelo donde el caminante debía asentar el siguiente paso.\n\nA menudo desearíamos que Dios nos revelara con exactitud absoluta el resultado de todos nuestros planes futuros: los próximos años de vida, las respuestas inmediatas a nuestras peticiones y la solución instantánea a cada problema. Queremos ver todo el camino claro antes de avanzar.\n\nNo obstante, la Biblia opera como esa pequeña lámpara de sandalia: nos otorga la sabiduría y la dirección necesarias para dar con rectitud el paso del día de hoy. No te afanes por el mañana ni por las dudas que aún no puedes resolver. Si hoy te encuentras en una encrucijada, abre la Palabra de Dios y permite que su luz guíe tus decisiones presentes.",
    oracion: "Dios de bondad, te agradezco porque tu Palabra es una luz viva que ilumina mi vida cotidiana. Ayúdame a confiar en tu providencia paso a paso y a vivir con fidelidad la jornada de hoy. En el nombre de Jesús, Amén.",
    autor: "Ministerio de Fe"
  }
];

let activeIndex = 0;
let favorites = JSON.parse(localStorage.getItem('favs') || '[]');
let streak = parseInt(localStorage.getItem('streak') || '0');
let isRead = false;

function initApp() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  const todayString = `${yyyy}-${mm}-${dd}`;

  // Buscar si existe una matutina asignada para la fecha de hoy
  const foundIndex = matutinas.findIndex(m => m.fecha === todayString);

  if (foundIndex !== -1) {
    activeIndex = foundIndex;
  } else {
    // Si la fecha exacta no coincide con el arreglo, selecciona según el día
    activeIndex = today.getDate() % matutinas.length;
  }

  const picker = document.getElementById('calendar-picker');
  if (picker) picker.value = todayString;

  renderCurrentDevotional();
  updateStreakUI();
}

function renderCurrentDevotional() {
  const item = matutinas[activeIndex];
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  // Ajustar fecha para evitar desfasamiento horario
  const parts = item.fecha.split('-');
  const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);

  document.getElementById('current-date').innerText = dateObj.toLocaleDateString('es-ES', options);
  document.getElementById('devotional-title').innerText = item.titulo;
  document.getElementById('bible-text').innerText = `"${item.verso}"`;
  document.getElementById('bible-ref').innerText = item.referencia;
  
  // Separar los párrafos largos de la reflexión
  const paragraphs = item.reflexion.split('\n\n');
  const formattedHTML = paragraphs.map(p => `<p style="margin-bottom: 14px; line-height: 1.65; text-align: justify;">${p}</p>`).join('');
  document.getElementById('reflection').innerHTML = formattedHTML;

  document.getElementById('prayer').innerText = item.oracion;
  document.getElementById('author').innerText = `✍️ ${item.autor}`;

  const isFav = favorites.includes(item.id);
  document.getElementById('fav-btn').innerText = isFav ? '❤️' : '🔖';

  isRead = false;
  const btnRead = document.getElementById('read-btn');
  btnRead.classList.remove('completed');
  btnRead.innerText = '✓ MARCAR COMO LEÍDA';
}

function switchTab(tabName, element) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));

  document.getElementById(`tab-${tabName}`).classList.add('active');
  element.classList.add('active');

  if (tabName === 'favoritas') renderFavorites();
  if (tabName === 'buscar') searchDevotionals('');
}

function selectDateFromCalendar(dateString) {
  if (!dateString) return;
  const foundIndex = matutinas.findIndex(m => m.fecha === dateString);

  if (foundIndex !== -1) {
    activeIndex = foundIndex;
  } else {
    const parts = dateString.split('-');
    const dateObj = new Date(parts[0], parts[1] - 1, parts[2]);
    activeIndex = dateObj.getDate() % matutinas.length;
  }

  renderCurrentDevotional();
  switchTab('inicio', document.querySelectorAll('.nav-item')[0]);
}

function markAsRead() {
  if (!isRead) {
    isRead = true;
    streak++;
    localStorage.setItem('streak', streak);
    const btn = document.getElementById('read-btn');
    btn.classList.add('completed');
    btn.innerText = '✓ LEÍDA HOY';
    updateStreakUI();
  }
}

function updateStreakUI() {
  document.getElementById('streak-count').innerText = `🔥 ${streak} ${streak === 1 ? 'Día' : 'Días'}`;
}

function toggleFavorite() {
  const currentId = matutinas[activeIndex].id;
  const index = favorites.indexOf(currentId);

  if (index === -1) {
    favorites.push(currentId);
  } else {
    favorites.splice(index, 1);
  }

  localStorage.setItem('favs', JSON.stringify(favorites));
  renderCurrentDevotional();
}

function renderFavorites() {
  const container = document.getElementById('favorites-list');
  container.innerHTML = '';

  if (favorites.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted);">Aún no has guardado matutinas favoritas.</p>';
    return;
  }

  favorites.forEach(id => {
    const item = matutinas.find(m => m.id === id);
    if (item) {
      const div = document.createElement('div');
      div.className = 'list-item';
      div.innerHTML = `<h4>${item.titulo}</h4><p>📖 ${item.referencia}</p>`;
      div.onclick = () => {
        activeIndex = matutinas.indexOf(item);
        renderCurrentDevotional();
        switchTab('inicio', document.querySelectorAll('.nav-item')[0]);
      };
      container.appendChild(div);
    }
  });
}

function searchDevotionals(query) {
  const container = document.getElementById('search-results');
  container.innerHTML = '';
  const term = query.toLowerCase().trim();

  if (!term) return;

  const filtered = matutinas.filter(m => 
    m.titulo.toLowerCase().includes(term) ||
    m.verso.toLowerCase().includes(term) ||
    m.reflexion.toLowerCase().includes(term) ||
    m.referencia.toLowerCase().includes(term) ||
    m.autor.toLowerCase().includes(term)
  );

  if (filtered.length === 0) {
    container.innerHTML = '<p style="color: var(--text-muted);">No se encontraron resultados.</p>';
    return;
  }

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'list-item';
    div.innerHTML = `<h4>${item.titulo}</h4><p>📖 ${item.referencia} | ✍️ ${item.autor}</p>`;
    div.onclick = () => {
      activeIndex = matutinas.indexOf(item);
      renderCurrentDevotional();
      switchTab('inicio', document.querySelectorAll('.nav-item')[0]);
    };
    container.appendChild(div);
  });
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  document.getElementById('theme-btn').innerText = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}

function shareContent() {
  const item = matutinas[activeIndex];
  const text = `🌅 *${item.titulo}*\n📖 ${item.referencia}\n"${item.verso}"\n\nLeído en *Matutinas Adventistas para Maranata*`;

  if (navigator.share) {
    navigator.share({ title: 'Matutina Maranata', text: text }).catch(() => {});
  } else {
    navigator.clipboard.writeText(text);
    alert("Texto copiado al portapapeles.");
  }
}

document.addEventListener('DOMContentLoaded', initApp);


    
