var sentences = [
  "صلي علي محمد",
  "سبحان الله وبحمده",
  "سبحان الله وبحمده سبحان الله العظيم",
  "استغفر لله",
  "سبحان الله",
  "الحمد لله",
  "لا اله الا الله",
  "الله أكبر",
  "لا حول ولا قوة الا بالله"
];
var currentIndex = -1;
function generateSentence() {
  var randomIndex;
  do {
      randomIndex = Math.floor(Math.random() * sentences.length);
  } while (randomIndex === currentIndex);
  var dynamicSentence = document.getElementById('dynamicSentence');
  dynamicSentence.textContent = sentences[randomIndex];
  currentIndex = randomIndex;
}
