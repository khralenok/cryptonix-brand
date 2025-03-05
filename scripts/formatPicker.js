const pickTheFormat = function (e) {
  //1. Define event trigger
  //2. Get the download button
  //3. Change the href attribute for it
  const downloadButton = e.target.closest("form").querySelector(".button");
  downloadButton.href = `src/${e.target.dataset.item}${e.target.value}`;
  downloadButton.download = `cryptonix-${e.target.dataset.item}${e.target.value}`;
};

document
  .getElementById("mark-format")
  .addEventListener("change", pickTheFormat);
document
  .getElementById("logo-format")
  .addEventListener("change", pickTheFormat);
