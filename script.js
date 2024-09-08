console.groupCollapsed("Reference");
console.log(
  "Manzdev youtube video: https://youtu.be/NXiFWpTB2Ug?si=zI6rOTdE94YFUGIp "
);
console.groupEnd();

const COLORS = ["#fff2", "#fff4", "#fff7", "#fffc"];

const generateStars = (totalStars, selector, size, duration) => {
  const shadowPositions = [];

  for (let i = 0; i < totalStars; i++) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    shadowPositions.push(
      `${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}`
    );
  }

  const star = document.querySelector(selector);
  star.style.setProperty("--clon-shadow", shadowPositions.join(","));
  star.style.setProperty("--size", size);
  star.style.setProperty("--duration", duration);
};

generateStars(200, ".star-1", "2px", "15s");
generateStars(100, ".star-2", "3px", "20s");
generateStars(50, ".star-3", "4px", "18s");
