/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from "fs"

inquirer
  .prompt([
    {
    message: "enter URL",
    name: "URL"

    }
    /* Pass your questions in here */
  ])
  .then((answers) => {
    const url = answers.URL;  
    console.log(answers)
    var qr_svg = qr.image(url)
    qr_svg.pipe(fs.createWriteStream("qr_img1.png"));
    fs.writeFileSync("user_url.txt", url);

    console.log("QR code generated and saved as qr_img1.png");
    console.log("URL saved in user_url.txt");

    
  })
  .catch((error) => {
    if (error.isTtyError) {
        console.error("Prompt could not be rendered in the current environment.");
    } else {
        console.error("An error occurred:", error);
    }
  });