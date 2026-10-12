const scenes = [
  {
    chapter: "Chapter One",
    title: "A Little Beginning",
    text: "In a huge factory, a beautiful pink backpack was made. Her colour was as soft as a strawberry cloud.",
    scene: "",
    bagPosition: "factory"
  },
  {
    chapter: "Chapter Two",
    title: "Waiting Outside",
    text: "After leaving the factory, she was placed outside a little shop among many other bags. She dreamed of finding someone to love her.",
    scene: "",
    bagPosition: "factory"
  },
  {
    chapter: "Chapter Three",
    title: "The Little Girl",
    text: "One sunny day, a little girl entered the shop with her parent. Then she saw the pink bag. Her eyes sparkled.",
    scene: "shop",
    bagPosition: "shop"
  },
  {
    chapter: "Chapter Four",
    title: "Chosen",
    text: "Among all the bags, the little girl picked her. If a bag could feel its heart flutter, hers would have fluttered a thousand times.",
    scene: "shop",
    bagPosition: "shop"
  },
  {
    chapter: "Chapter Five",
    title: "A Home Full of Love",
    text: "The pink bag went everywhere with her new friend. It carried books, food, stationery, a water bottle, and little treasures from ordinary days.",
    scene: "home",
    bagPosition: "home"
  },
  {
    chapter: "Chapter Six",
    title: "Where Are You?",
    text: "One day, the pink bag was missing. The little girl searched and searched, but she could not find her beloved friend.",
    scene: "lost",
    bagPosition: "lost"
  },
  {
    chapter: "Chapter Seven",
    title: "Still Waiting",
    text: "Days passed. Then months passed. Far away, at a rubbish dump, the pink bag waited quietly. Someone had taken her there when nobody was watching.",
    scene: "dump",
    bagPosition: "dump"
  },
  {
    chapter: "Chapter Eight",
    title: "Precious",
    text: "The little girl never forgot her pink bag. Maybe the bag could no longer find its way home, but the love they shared had been real. Some things are precious because of the memories we leave inside them.",
    scene: "dump",
    bagPosition: "dump"
  }
];
let currentPage = 0;
let musicPlaying = false;
const sceneElement = document.getElementById("scene");
const sceneLabel = document.getElementById("scene-label");
const chapterElement = document.getElementById("chapter");
const storyText = document.getElementById("story-text");
const pageNumber = document.getElementById("page-number");
const previousButton = document.getElementById("previous-button");
const nextButton = document.getElementById("next-button");
const musicButton = document.getElementById("music-button");
const music = document.getElementById("background-music");
function showPage(index) {
  currentPage = Math.max(0, Math.min(index, scenes.length - 1));
  const page = scenes[currentPage];
  chapterElement.textContent = page.chapter;
  sceneLabel.textContent = page.title;
  storyText.textContent = page.text;
  pageNumber.textContent = `${currentPage + 1} / ${scenes.length}`;
  sceneElement.className = "scene";
  if (page.scene) {
    sceneElement.classList.add(page.scene);
  }
  previousButton.disabled = currentPage === 0;
  if (currentPage === scenes.length - 1) {
    nextButton.textContent = "The End ♥";
    nextButton.disabled = true;
  } else {
    nextButton.textContent = "Next ▶";
    nextButton.disabled = false;
  }
}
previousButton.addEventListener("click", () => {
  showPage(currentPage - 1);
});
nextButton.addEventListener("click", () => {
  if (currentPage < scenes.length - 1) {
    showPage(currentPage + 1);
  }
});
musicButton.addEventListener("click", async () => {
  if (!musicPlaying) {
    try {
      await music.play();
      musicPlaying = true;
      musicButton.textContent = "♫ Pause Music";
    } catch (error) {
      musicButton.textContent = "Music unavailable";
      console.error("Could not play background music:", error);
    }
  } else {
    music.pause();
    musicPlaying = false;
    musicButton.textContent = "♫ Play Music";
  }
});
music.addEventListener("ended", () => {
  musicPlaying = false;
  musicButton.textContent = "♫ Play Music";
});
showPage(0);