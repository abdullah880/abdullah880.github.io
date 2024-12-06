const contentArea = document.querySelector(".content");
const heartContentArea = document.querySelector(".heart-content");
const tapToContinue = document.querySelector(".tap-to-continue");
const notebookContainer = document.querySelector(".notebook-container");
const alertContainer = document.querySelector(".alert-container");
const heartContainer = document.querySelector(".heart-container");
contentArea.scrollTop = contentArea.scrollHeight;
// const paragraph = [
//         "Happy Birthday, my heart's greatest treasure! 🎉🎂 On this special day, I find myself overwhelmed with gratitude and love for you. It’s not just another day; it’s the day that the world was blessed with you, and my life has never been the same since. From the very moment we met, my life became infinitely richer, filled with laughter 😄, joy 😊, and a love deeper than words can express. 💕. Today, I want to celebrate you 🎉 – not just the person you are, but the magic ✨ you bring to everyone around you. You have this incredible ability to light up the darkest of rooms with your smile 😁, to calm every storm with your gentle touch 🤗, and to make the world 🌍 seem like a better place just by being in it. I’m in awe of your strength 💪, your kindness 💕, and the way you pour your heart ❤️ into everything you do.",
//         "You are my everything 🌟 – my best friend 👯‍♀️, my partner 👫, my confidant 🗣️, and the one I want by my side through all of life’s adventures 🗺️. With you, I’ve discovered what true love really is 💑. It’s not just the big moments, but also the quiet ones – the way your hand fits perfectly in mine 🤲, the way you laugh at the silly things I say 🤭, the way we share our dreams 🌙 and build our future together 🏡. You are my safe haven 🛏️, the one I turn to for comfort 💖, and the one I celebrate every single day. 🎈",
//         "May this year bring you as much joy 🥳, love 💖, and happiness 😍 as you’ve brought into my life 🌈. I can’t wait to see all the incredible things you will achieve 🎯, and I’m excited to be the one cheering you on 📣 every step of the way. You deserve all the best this world has to offer 🌎, and I will do everything I can to make sure you feel loved, cherished, and appreciated every single day 💖. Happy Birthday, my love 💝. Here’s to many more years of laughter 🤣, adventure 🏞️, and endless love together 💫. I love you more than words can say 💕, and I will always, always love you with all my heart 💓.",
//       ];

const paragraph = [
  "You are the love of my life, the one who fills my heart with a joy I never thought possible 💖✨. Every moment with you feels like a beautiful adventure 🌍, and every day we share is a gift I cherish more than words can say 🎁. Your presence makes everything brighter 🌟, and your love makes everything better 💫. I’m in awe of how you light up my world just by being yourself — your smile 😁, your laughter 😂, your kindness 💕. You have a way of making the simplest moments feel extraordinary, and for that, I am endlessly grateful 🙏.",
"With you, I’ve found a love so deep and pure that it’s beyond anything I ever imagined 💓. You are my safe place 🏡, my constant 🌈, my everything 🌹. The way you make me feel, the way you love me — it’s more than I ever deserved, yet it’s everything I ever wanted 💫. I promise to always cherish you, to stand by you through it all 💪, and to love you with all that I am, now and forever 💍. You’re my heart ❤️, my soul 🌙, my reason for being 🌹. I love you more than words could ever express 🥰💖."
];

const heartText = "I LOVE YOU SO SO MUCH 💝💝💝";
const speed = 30;
let sentenceIndex = 0;
let charIndex = 0;

setTimeout(() => {tapToContinue.style.display = "block";}, 1000);
  
function typeWriter() {
  if (sentenceIndex < paragraph.length) {
    if (charIndex < paragraph[sentenceIndex].length) {
      contentArea.textContent += paragraph[sentenceIndex].charAt(charIndex);
      charIndex++;
       // Auto-scroll to the bottom
       contentArea.scrollTop = contentArea.scrollHeight;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        contentArea.style.opacity = 0;
        setTimeout(() => {
          contentArea.textContent = "";
          contentArea.style.opacity = 1;
          charIndex = 0;
          sentenceIndex++;
          typeWriter();
        }, 500);
      }, 2000);
    }
  } else {
    console.log("Paragraph ended!");
    notebookContainer.classList.add("hide");
    notebookContainer.classList.remove("show");
    notebookContainer.style.display = "none";
    alertContainer.classList.add("show");
  }
}

tapToContinue.addEventListener("click", function () {
  const audio = document.getElementById("myAudio");
  if (audio) {
    audio.loop = true;
    audio.play().catch((error) => {
      console.log("Error playing audio: ", error);
    });
  }
  document.querySelector(".header-text").style.display = "none";
  tapToContinue.style.display = "none";
  notebookContainer.classList.add("show");
  setTimeout(() => typeWriter(), 1000);
});

const yesButton = document.querySelector(".alter-btn-yes");
const noButton = document.querySelector(".alter-btn-no");

function typeWriterHeart() {
  let heartCharIndex = 0;
  function typeHeart() {
    if (heartCharIndex < heartText.length) {
      heartContentArea.textContent += heartText.charAt(heartCharIndex);
      heartCharIndex++;
      setTimeout(typeHeart, 50);
    }
  }
  typeHeart();
}

yesButton.addEventListener("click", () => {
  typeWriterHeart();
  alertContainer.style.display = "none";
  heartContainer.classList.add("show");
});

noButton.addEventListener("click", () => {
  alertContainer.classList.toggle("show");
  alertContainer.classList.remove("show");
  
  // Trigger a reflow to ensure the class is removed before re-adding
  void alertContainer.offsetWidth; // This is the trick to force a reflow
  
  alertContainer.classList.add("show");
});
