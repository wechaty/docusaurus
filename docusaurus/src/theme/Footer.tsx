import React from "react";
import "./footer-section.css"

const Footer = () => {
    return (
        <main id="body">
<footer id="footer">
        <div id="footerUpper">
          <div id="footerFirstColumn">
            <p id="footerColumnEmphasis"> Docs </p>
            <p id="footerColumnOne">
              <a href="docs/wechaty"> Introduction </a>
              <br />
              <a href="docs/tutorials/"> Tutorials </a>
              <br />
              <a href="docs/howto/"> How-to Guides </a>
              <br />
              <a href="docs/references/"> References </a>
              <br />
              <a href="docs/explanations/"> Explanations </a>
              <br />
            </p>
          </div>
          <div id="footerSecondColumn">
            <p id="footerColumnEmphasis"> Community </p>
            <p id="footerColumnTwo">
              <a href="https://gitter.im/wechaty/wechaty"> Gitter </a>
              <br />
              <a href="https://github.com/wechaty/wechaty/discussions"> Discussion </a>
              <br />
              <a href="https://stackoverflow.com/questions/tagged/wechaty"> Stack Overflow </a>
              <br />
              <a href="https://t.me/wechaty"> Telegram </a>
              <br />
              <a href="https://twitter.com/chatieio"> Twitter </a>
              <br />
              <a href="https://bit.ly/3aoLE86"> YouTube </a>
              <br />
              <a href="https://opencollective.com/wechaty"> Open Collective </a>
              <br />
              <a href="https://bit.ly/33Dfkuf"> Google Drive </a>
              <br />
              <a href="https://photos.app.goo.gl/LkmYMWypGoJdyvEJ6"> Photo Album </a>
              <br />
              <a href="https://bit.ly/2zpi2XG"> Meeting Notes </a>
              <br />
              <a href="https://bit.ly/2J6ziXa"> Hall of Fame </a>
              <br />
            </p>
          </div>
          <div id="footerThirdColumn">
            <div id="footerColumnEmphasisFirst">
              <p id="footerColumnEmphasis"> More </p>
            </div>
            <p id="footerColumnThree">
              <a href="https://wechaty.js.org/blog/"> Blog </a>
              <br />
              <a href="http://www.bot5.ml/blogs/chatbot-0-1/"> Book </a>
              <br />
              <a href="https://wechaty.js.org/docs/marketing/branding/"> Branding </a>
              <br />
              <a href="press"> Press </a>
              <br />
              <a href="https://github.com/wechaty/wechaty#readme"> GitHub </a>
              <br />
              <a href="https://chatie.statuspage.io/"> Status </a>
              <br />
            </p>
          </div>
          <div id="scannerWrapper">
            <img
              alt="Wechaty QR Scanner"
              id="scanner"
              src="/img/wechatyqrcode.webp"
            />
            <strong id="footerColumnEmphasis">
              Join our WeChat Room
              <br />
            </strong>
            <p id="scannerText">
              You are welcome to join our Wechaty Developers' Home by scanning
              the above QR code, then send the secret code "wechaty" to
              Friday.BOT.
            </p>
          </div>
        </div>
        <div id="wechatyLogoFooter">
          <img
            alt="Wechaty Logo"
            src="/img/wechatylogofooter.webp"
          />
        </div>
        <p id="codeOfConductText">
          <a> Code of Conduct </a>
        </p>
        <p id="copyrightText">Copyright © 2016-2021 Wechaty Contributors</p>
      </footer>
      </main>
    );
};
export default Footer;
