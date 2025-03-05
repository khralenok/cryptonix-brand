const colorToClipboard = function (e) {
  if (!e.target.closest("button")) return;
  navigator.clipboard.writeText(
    e.target.closest("li").getAttribute("data-hex")
  );
  e.target.closest("li").querySelector(".copy-status").classList.add("active");
  setTimeout(
    () =>
      e.target
        .closest("li")
        .querySelector(".copy-status")
        .classList.remove("active"),
    3000
  );
};
document
  .querySelector("#colors ul")
  .addEventListener("click", colorToClipboard);
