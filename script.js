const questions = [
  {
    "type": "single",
    "question": "Welche Aussage zur 6-R-Regel ist richtig?",
    "options": [
      "Sie dient nur der Dokumentation.",
      "Sie hilft, Fehler beim Richten und Verabreichen von Medikamenten zu vermeiden.",
      "Sie gilt nur für Betäubungsmittel.",
      "Sie ersetzt die ärztliche Verordnung."
    ],
    "answer": 1,
    "explanation": "Die 6-R-Regel unterstützt die sichere Vorbereitung und Verabreichung von Medikamenten."
  },
  {
    "type": "multi",
    "question": "Welche Punkte gehören zur 6-R-Regel?",
    "options": [
      "Richtiger Klient",
      "Richtiges Medikament",
      "Richtige Dosierung",
      "Richtige Verpackungsfarbe",
      "Richtige Applikationsart",
      "Richtige Zeit",
      "Richtige Dokumentation"
    ],
    "answer": [
      0,
      1,
      2,
      4,
      5,
      6
    ],
    "explanation": "Zur 6-R-Regel gehören Klient, Medikament, Dosierung, Applikationsart, Zeit und Dokumentation."
  },
  {
    "type": "single",
    "question": "Was bedeutet Kontraindikation?",
    "options": [
      "Ein Grund für die Anwendung eines Medikaments",
      "Eine unerwünschte Wirkung",
      "Ein Umstand, der gegen die Anwendung eines Medikaments spricht",
      "Die Haltbarkeit eines Medikaments"
    ],
    "answer": 2,
    "explanation": "Eine Kontraindikation ist ein Gegenanzeige: Das Medikament darf oder sollte unter bestimmten Umständen nicht angewendet werden."
  },
  {
    "type": "single",
    "question": "Welche Aussage zu Generika trifft zu?",
    "options": [
      "Sie enthalten grundsätzlich einen anderen Wirkstoff.",
      "Sie enthalten denselben Wirkstoff wie das Originalpräparat.",
      "Sie dürfen nur im Spital verwendet werden.",
      "Sie sind immer stärker dosiert."
    ],
    "answer": 1,
    "explanation": "Generika enthalten denselben Wirkstoff wie das Originalpräparat und sind häufig günstiger."
  },
  {
    "type": "single",
    "question": "Eine Medikamentenverordnung ist unleserlich. Was ist richtig?",
    "options": [
      "Die vermutete Dosierung wird verabreicht.",
      "Eine andere LE entscheidet allein.",
      "Das Medikament wird nicht verabreicht, bis die Verordnung geklärt ist.",
      "Die niedrigste mögliche Dosierung wird gewählt."
    ],
    "answer": 2,
    "explanation": "Unklare oder unleserliche Verordnungen müssen vor der Verabreichung geklärt werden."
  },
  {
    "type": "single",
    "question": "Warum ist der Einnahmezeitpunkt bei peroralen Medikamenten wichtig?",
    "options": [
      "Nur damit die Dokumentation schöner aussieht.",
      "Weil Nahrung und zeitliche Abstände Wirkung und Verträglichkeit beeinflussen können.",
      "Damit alle Medikamente gleichzeitig gegeben werden können.",
      "Der Einnahmezeitpunkt spielt keine Rolle."
    ],
    "answer": 1,
    "explanation": "Nahrung, Tageszeit und Abstände zu anderen Medikamenten können Wirkung und Verträglichkeit beeinflussen."
  },
  {
    "type": "single",
    "question": "Warum sollen Tabletten in der Regel mit ausreichend Wasser eingenommen werden?",
    "options": [
      "Damit sie schneller ablaufen.",
      "Damit das Schlucken erleichtert und ein Steckenbleiben in der Speiseröhre vermieden wird.",
      "Damit ihre Farbe erhalten bleibt.",
      "Damit sie automatisch stärker wirken."
    ],
    "answer": 1,
    "explanation": "Wasser erleichtert das Schlucken und hilft, Reizungen oder ein Steckenbleiben in der Speiseröhre zu vermeiden."
  },
  {
    "type": "single",
    "question": "Warum werden Ohrentropfen vor der Verabreichung auf Körpertemperatur gebracht?",
    "options": [
      "Damit sie länger haltbar sind.",
      "Damit sie ihre Farbe verändern.",
      "Damit Schwindel und unangenehme Reaktionen durch kalte Tropfen vermieden werden.",
      "Damit sie steril werden."
    ],
    "answer": 2,
    "explanation": "Kalte Ohrentropfen können unangenehm sein und Schwindel auslösen."
  },
  {
    "type": "single",
    "question": "Bei welchem Klientel kann eine kontrollierte Einnahme besonders wichtig sein?",
    "options": [
      "Bei Klientinnen und Klienten mit kognitiven Einschränkungen",
      "Nur bei sportlichen Menschen",
      "Nur bei Personen unter 20 Jahren",
      "Bei niemandem"
    ],
    "answer": 0,
    "explanation": "Bei kognitiven Einschränkungen, Schluckproblemen oder fehlender Einsicht kann eine Einnahmekontrolle notwendig sein."
  },
  {
    "type": "multi",
    "question": "Welche Grundsätze sind für die Lagerung von Medikamenten wichtig?",
    "options": [
      "Vor Feuchtigkeit schützen",
      "Temperaturangaben beachten",
      "Für Unbefugte unzugänglich lagern",
      "Alle Medikamente aus der Originalverpackung nehmen",
      "Verfalldatum kontrollieren"
    ],
    "answer": [
      0,
      1,
      2,
      4
    ],
    "explanation": "Medikamente müssen entsprechend den Vorgaben, geschützt und sicher gelagert werden. Originalverpackungen helfen bei Zuordnung und Information."
  },
  {
    "type": "single",
    "question": "Was ist beim Umgang mit Betäubungsmitteln besonders wichtig?",
    "options": [
      "Sie können offen im Stationszimmer liegen.",
      "Bestand und Abgabe müssen besonders gesichert und lückenlos dokumentiert werden.",
      "Sie dürfen ohne Verordnung abgegeben werden.",
      "Eine Kontrolle ist nicht notwendig."
    ],
    "answer": 1,
    "explanation": "Betäubungsmittel erfordern eine besonders sichere Aufbewahrung und eine nachvollziehbare Dokumentation."
  },
  {
    "type": "single",
    "question": "Was ist nach der Verabreichung eines Medikaments zu tun?",
    "options": [
      "Nichts, sofern kein Fehler passiert ist.",
      "Die Verabreichung zeitnah dokumentieren und Wirkung beziehungsweise Auffälligkeiten beobachten.",
      "Die Verpackung sofort entsorgen, unabhängig vom Inhalt.",
      "Die nächste Dosis vorbereiten, auch ohne Verordnung."
    ],
    "answer": 1,
    "explanation": "Die richtige Dokumentation ist Teil der 6-R-Regel. Zusätzlich müssen Wirkung und mögliche Auffälligkeiten beobachtet werden."
  }
];

let current = 0;
let score = 0;
let selected = [];
let locked = false;
let startedAt = 0;
let mistakes = [];

const $ = id => document.getElementById(id);
const screens = ["start-screen","quiz-screen","result-screen"];

function showScreen(id) {
  screens.forEach(s => $(s).classList.toggle("active", s === id));
  window.scrollTo({top:0, behavior:"smooth"});
}

function startGame() {
  current = 0;
  score = 0;
  selected = [];
  locked = false;
  mistakes = [];
  startedAt = Date.now();
  showScreen("quiz-screen");
  renderQuestion();
}

function renderQuestion() {
  locked = false;
  selected = [];
  const q = questions[current];
  $("question-counter").textContent = `Frage ${current + 1} von ${questions.length}`;
  $("score-live").textContent = `${score} ${score === 1 ? "Punkt" : "Punkte"}`;
  $("progress-bar").style.width = `${(current / questions.length) * 100}%`;
  $("question-type").textContent = q.type === "multi" ? "Mehrere Antworten möglich" : "Eine Antwort auswählen";
  $("question-text").textContent = q.question;
  $("feedback").className = "feedback";
  $("feedback").textContent = "";
  $("check-btn").disabled = true;
  $("check-btn").classList.remove("hidden");
  $("next-btn").classList.add("hidden");

  const wrap = $("answers");
  wrap.innerHTML = "";
  q.options.forEach((text, i) => {
    const btn = document.createElement("button");
    btn.className = `answer ${q.type === "multi" ? "multi" : ""}`;
    btn.innerHTML = `<span class="marker">${String.fromCharCode(65+i)}</span><span>${text}</span>`;
    btn.addEventListener("click", () => selectAnswer(i, btn));
    wrap.appendChild(btn);
  });
}

function selectAnswer(index, button) {
  if (locked) return;
  const q = questions[current];
  if (q.type === "single") {
    selected = [index];
    [...$("answers").children].forEach(b => b.classList.remove("selected"));
    button.classList.add("selected");
  } else {
    if (selected.includes(index)) {
      selected = selected.filter(x => x !== index);
      button.classList.remove("selected");
    } else {
      selected.push(index);
      button.classList.add("selected");
    }
  }
  $("check-btn").disabled = selected.length === 0;
}

function sameSet(a,b) {
  return a.length === b.length && [...a].sort().every((v,i) => v === [...b].sort()[i]);
}

function checkAnswer() {
  if (locked) return;
  locked = true;
  const q = questions[current];
  const correctSet = Array.isArray(q.answer) ? q.answer : [q.answer];
  const ok = sameSet(selected, correctSet);
  if (ok) score++;
  else mistakes.push({question:q.question, selected:[...selected], correct:correctSet, options:q.options, explanation:q.explanation});

  [...$("answers").children].forEach((btn, i) => {
    btn.classList.remove("selected");
    if (correctSet.includes(i)) btn.classList.add("correct");
    else if (selected.includes(i)) btn.classList.add("wrong");
    btn.disabled = true;
  });

  const f = $("feedback");
  f.className = `feedback show ${ok ? "good" : "bad"}`;
  f.innerHTML = `<strong>${ok ? "Richtig!" : "Noch nicht ganz."}</strong><br>${q.explanation}`;
  $("score-live").textContent = `${score} ${score === 1 ? "Punkt" : "Punkte"}`;
  $("check-btn").classList.add("hidden");
  $("next-btn").classList.remove("hidden");
  $("next-btn").textContent = current === questions.length - 1 ? "Auswertung anzeigen" : "Weiter";
  $("progress-bar").style.width = `${((current + 1) / questions.length) * 100}%`;
}

function nextQuestion() {
  current++;
  if (current >= questions.length) showResults();
  else renderQuestion();
}

function formatTime(ms) {
  const total = Math.round(ms / 1000);
  const min = Math.floor(total / 60);
  const sec = String(total % 60).padStart(2,"0");
  return `${min}:${sec}`;
}

function showResults() {
  const percent = Math.round((score / questions.length) * 100);
  const name = $("player-name").value.trim();
  $("result-percent").textContent = `${percent} %`;
  $("result-score").textContent = `${score}/${questions.length}`;
  $("result-time").textContent = formatTime(Date.now() - startedAt);
  document.querySelector(".result-ring").style.setProperty("--pct", `${percent}%`);
  $("result-summary").textContent = `${name ? name + ", du" : "Du"} hast ${score} von ${questions.length} Fragen richtig beantwortet.`;

  let title, icon, message;
  if (percent >= 90) {
    title = "Medikamenten-Profi!";
    icon = "🏆";
    message = "Sehr sicher. Du kannst die wichtigsten Prinzipien gut anwenden.";
  } else if (percent >= 75) {
    title = "Gut gemacht!";
    icon = "✅";
    message = "Das sitzt schon ziemlich gut. Schau dir deine wenigen Unsicherheiten nochmals an.";
  } else if (percent >= 50) {
    title = "Gute Grundlage";
    icon = "🧠";
    message = "Ein Teil ist bereits sicher. Wiederhole besonders die Fragen, bei denen du unsicher warst.";
  } else {
    title = "Noch eine Runde";
    icon = "📚";
    message = "Nutze deine Unterlagen nochmals und starte danach einen neuen Versuch.";
  }
  $("result-title").textContent = title;
  $("result-icon").textContent = icon;
  $("result-message").textContent = message;
  $("review-area").classList.add("hidden");
  $("review-btn").classList.toggle("hidden", mistakes.length === 0);
  showScreen("result-screen");
}

function showReview() {
  const area = $("review-area");
  area.innerHTML = mistakes.map((m, idx) => {
    const selectedText = m.selected.length ? m.selected.map(i => m.options[i]).join(" · ") : "keine";
    const correctText = m.correct.map(i => m.options[i]).join(" · ");
    return `<div class="review-item">
      <h3>${idx+1}. ${m.question}</h3>
      <p><strong>Deine Antwort:</strong> ${selectedText}</p>
      <p><strong>Richtig:</strong> ${correctText}</p>
      <p>${m.explanation}</p>
    </div>`;
  }).join("");
  area.classList.toggle("hidden");
  $("review-btn").textContent = area.classList.contains("hidden") ? "Fehler ansehen" : "Fehler ausblenden";
}

$("start-btn").addEventListener("click", startGame);
$("check-btn").addEventListener("click", checkAnswer);
$("next-btn").addEventListener("click", nextQuestion);
$("restart-btn").addEventListener("click", startGame);
$("review-btn").addEventListener("click", showReview);
