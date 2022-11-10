const questions = document.querySelectorAll(".question");
const details = document.querySelectorAll(".details");
var clickedId = null;

for (let question of questions) {
  question.addEventListener("click", function () {
    for (let question of questions) {
      question.children[0].classList.remove("bold-font");
      question.children[1].style.transform = "rotateX(0deg)";
    }

    for (let detail of details) {
      detail.classList.add("hide");
    }

    if (question.id !== clickedId) {
      console.log("IF");
      this.children[0].classList.add("bold-font");
      this.children[1].style.transform = "rotateX(180deg)";
      details[question.id].classList.remove("hide");
      clickedId = question.id;
    } else {
      console.log("ELSE");
      this.children[0].classList.remove("bold-font");
      details[question.id].classList.add("hide");
      clickedId = null;
    }
  });
}
