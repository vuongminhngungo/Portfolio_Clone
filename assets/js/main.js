const itemQuestions = document.querySelectorAll(".item-question");
itemQuestions.forEach((item, index) => {
  const addItem = item.querySelector(".add-checkbox");
  const desc = item.querySelector(".desc");
  const title = item.querySelector(".title");
  const addIcon = item.querySelector(".add-icon");

  addItem.addEventListener("click", (e) => {
    const borderItem = e.currentTarget.closest(".item-question");
    if (addIcon.classList.contains("minus")) {
      desc.style.display = "none";
      title.style.color = "#080415";
      borderItem.style.borderColor = "#080415";
      addIcon.innerHTML = `<i class="fa-solid fa-plus"></i>`;
      addIcon.classList.remove("minus");
    } else {
      desc.style.display = "block";
      title.style.color = "#5D3BEE";
      borderItem.style.borderColor = "#5D3BEE";
      console.log(e.currentTarget.closest(".item-question"));
      addIcon.innerHTML = `<i class="fa-solid fa-minus"></i>`;
      addIcon.classList.add("minus");
    }
  });
});
