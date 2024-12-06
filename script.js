const contentArea = document.querySelector(".content");
const heartContentArea = document.querySelector(".heart-content");
const tapToContinue = document.querySelector(".tap-to-continue");
const notebookContainer = document.querySelector(".notebook-container");
const alertContainer = document.querySelector(".alert-container");
const heartContainer = document.querySelector(".heart-container");
const content = document.querySelector('.content');
contentArea.scrollTop = content.scrollHeight;
const paragraph = [
        "Happy Birthday, my heart's greatest treasure! 🎉🎂 On this special day, I find myself overwhelmed with gratitude and love for you. It’s not just another day; it’s the day that the world was blessed with you, and my life has never been the same since. From the very moment we met, my life became infinitely richer, filled with laughter 😄, joy 😊, and a love deeper than words can express. 💕. Today, I want to celebrate you 🎉 – not just the person you are, but the magic ✨ you bring to everyone around you. You have this incredible ability to light up the darkest of rooms with your smile 😁, to calm every storm with your gentle touch 🤗, and to make the world 🌍 seem like a better place just by being in it. I’m in awe of your strength 💪, your kindness 💕, and the way you pour your heart ❤️ into everything you do.",
        "You are my everything 🌟 – my best friend 👯‍♀️, my partner 👫, my confidant 🗣️, and the one I want by my side through all of life’s adventures 🗺️. With you, I’ve discovered what true love really is 💑. It’s not just the big moments, but also the quiet ones – the way your hand fits perfectly in mine 🤲, the way you laugh at the silly things I say 🤭, the way we share our dreams 🌙 and build our future together 🏡. You are my safe haven 🛏️, the one I turn to for comfort 💖, and the one I celebrate every single day. 🎈",
        // "I’ve seen us grow 🌱, change 🔄, and evolve, and through it all, my love for you only deepens 💓. There are no words to describe how truly lucky 🍀 I feel to have found someone as wonderful 🌟 as you. You bring out the best in me 👏 and make me want to be the best version of myself, simply because you believe in me 🥰. You love me in ways I never thought possible, and I am endlessly grateful for that love 🙏. As you celebrate another beautiful year of life 🎉, I want you to know that I’m here for you, now and always ❤️. Through every up ⬆️ and down ⬇️, every laugh 😆 and every tear 😢, I promise to be by your side, supporting you, loving you, and cherishing every moment we share 🕰️.",
        "May this year bring you as much joy 🥳, love 💖, and happiness 😍 as you’ve brought into my life 🌈. I can’t wait to see all the incredible things you will achieve 🎯, and I’m excited to be the one cheering you on 📣 every step of the way. You deserve all the best this world has to offer 🌎, and I will do everything I can to make sure you feel loved, cherished, and appreciated every single day 💖. Happy Birthday, my love 💝. Here’s to many more years of laughter 🤣, adventure 🏞️, and endless love together 💫. I love you more than words can say 💕, and I will always, always love you with all my heart 💓.",
      ];

      const heartText = "I LOVE YOU SO SO MUCH 💝💝💝";

      const speed = 30;
      let sentenceIndex = 0;
      let charIndex = 0;

      function typeWriter() {
        if (sentenceIndex < paragraph.length) {
          if (charIndex < paragraph[sentenceIndex].length) {
            contentArea.textContent +=
              paragraph[sentenceIndex].charAt(charIndex);
            charIndex++;
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
        heartContentArea.textContent += heartText.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriterHeart, 50);
      }
      yesButton.addEventListener("click", () => {
        typeWriterHeart();
        alertContainer.style.display = "none";
        heartContainer.classList.add("show");
      });

      noButton.addEventListener("click", () => {
        alertContainer.classList.remove("show");
        void alertContainer.offsetWidth;
        alertContainer.classList.add("show");
      });
      