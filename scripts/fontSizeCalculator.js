const fontSizeCalc = document.getElementById("font-size-calc");
const adjustFontSizes = function (e) {
  e.preventDefault();
  const h1Measurement = document.getElementById("h1Size");
  const h2Measurement = document.getElementById("h2Size");
  const h3Measurement = document.getElementById("h3Size");
  const paragraphMeasurement = document.getElementById("paragraphSize");

  const scaleRatio = 1.25;

  const paragraphSize = fontSizeCalc.baseFont.value;
  const h3Size = Math.round(paragraphSize * scaleRatio);
  const h2Size = Math.round(paragraphSize * Math.pow(scaleRatio, 2));
  const h1Size = Math.round(paragraphSize * Math.pow(scaleRatio, 3));

  h1Measurement.textContent = h1Size;
  h2Measurement.textContent = h2Size;
  h3Measurement.textContent = h3Size;
  paragraphMeasurement.textContent = paragraphSize;
};

fontSizeCalc.addEventListener("submit", adjustFontSizes);
