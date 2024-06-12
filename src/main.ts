import './style.css'
import { generatePDF } from './pdf';

const app = document.querySelector<HTMLDivElement>('#app');

const button = document.createElement('button');
button.textContent = 'pdfつくる';
button.onclick = () => {
  const url = 'https://www.yahoo.co.jp';
  generatePDF(url).then((pdf) => {
    // Browser
    const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
    window.open(URL.createObjectURL(blob));
  });
};

app!.appendChild(button);
