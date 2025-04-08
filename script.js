document.getElementById("downloadPdfBtn").addEventListener("click", function () {
  const element = document.querySelector(".container");
  const opt = {
    margin:       0.3,
    filename:     '儲蓄型保險模擬報告.pdf',
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, useCORS: true },
    jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
    pagebreak:    { mode: ['avoid-all', 'css', 'legacy'] }
  };
  html2pdf().set(opt).from(element).save();
});
