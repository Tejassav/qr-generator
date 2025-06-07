//take input using the inquirer package

import inquirer from 'inquirer';
import qr from "qr-image"
import fs from 'fs';

inquirer
  .prompt([
    {
        message: 'Enter the text or URL you want to encode as a QR code:',
        name: 'qrInput',
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.qrInput;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });