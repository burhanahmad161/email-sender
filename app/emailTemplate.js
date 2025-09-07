const emailTemplate = (recipientName, amount, senderName) => `
  <!DOCTYPE html>
  <html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 0;
        background-color: white;
      }
      .container {
        width: 100%;
        max-width: 450px;
        margin: 0 auto;
        background-color: white;
      }
      .header {
        background-color: #ECF9EE;
      }
      .header img {
        max-width: 120px;
        padding: 8px;
      }
      .content {
        padding: 20px;
      }
      .content h1{
      font-size: 35px;
      color: black;
      }
      .p-1{
        width: 105%;
        font-size: 16px;
      color: black;
      }
      .content ul{
            font-size: 17px;
      width: 85%;
      color: black;
      list-style-type: none;
      }
      .content li{
        margin-top: 5px;
        word-spacing: 3px;
        color: black;
      }
      .amount {
        font-size: 22px;
        font-weight: bold;
      }
      .button {
        margin-top: 20px;
        margin-bottom: 20px;
        display: inline-block;
        background-color: #1EC677;
        color: white;
        width: 80%;
        text-decoration: none;
        font-weight: bold;
        font-size: 15px;
        text-align: center;
      }
      .content a{
      color: white;
      }
      .footer {
        background-color: #1a2b49;
        color: white;
        text-align: center;
        padding: 10px;
        font-size: 11px;
      }
        .footer-image{
        margin-left: -15px;}
    .amount{
    margin-top: 10px;
    }
    .question-div{
    margin-left: 13px;
    }
    .question-div p{
    font-size: 15px;
    color: black;
    }
    .content2
    {
      background-color: #052316;
      padding: 20px;
      margin-top: 15px;
    }
    .content2 p{
      color:white;
    }
    .help-a
    {
      font-weight: bold;
      text-decoration: underline;
    }
    .sec-img
    {
      margin-top: 10px;
      width: 200px;
    }
      .social-icons {
        margin-top: 10px;
      }
      .social-icons a {
        margin: 0 10px;
        display: inline-block;
      }
      .social-icons img {
        width: 24px;
        height: 24px;
      }
      .sender-dp {
        border-radius: 50%;
        width: 60px;
        height: 60px;
        object-fit: cover;
        margin: 0 auto 10px;
        display: block;
      }
      .p-2{
       width: 93%;
       font-size: 16px;
       color: black;

       }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <img src="https://res.cloudinary.com/dssqqsnzq/image/upload/v1756648956/chime-logo_m1cweo.png" alt="Chime Logo" />
      </div>
      <img class="sec-img" src="https://res.cloudinary.com/dssqqsnzq/image/upload/v1756649246/play-more-removebg-preview_svol2s.png" alt="Chime Logo" />
       <div class="content">
        <h1>You just got paid!</h1>
        <p class="p-1">${recipientName}, you just received $${amount}.00 from <b>${senderName}</b> for <b>${memo}</b>🎁.</p>
        <p class="p-2">The funds are in your Chime® Checking Account and available to use right away.</p>
        <div class="amount"></div>
        <a href="https://www.chime.com/mobile-only-feature/" class="button">View in Chime app</a>
        <p class="p-1">Did you know you can pay people who don’t have a Chime account? Here’s how it works:</p>
        <ul>
          <li>They get a text message or email with a link that brings them to a secure web page.</li>
          <li>Next, they use any US debit card to claim their money instantly and securely.</li>
          <li>Their money arrives instantly and fee-free. No app signup or login needed from them at all.</li>
        </ul>
      </div>
      <div class="question-div">
      <p>💚  from Chime</p>
      <p>Questions? We’re here to <a class="help-a">help</a>.</p>
      </div>
      <div class="content2">
          <img class="footer-image" src="https://res.cloudinary.com/dssqqsnzq/image/upload/v1756648956/chime-end_xwl3wh.png" alt="footer-image" />
          <p>©2025 Chime Financial, Inc. All rights reserved.</p>
          <p>PO Box 417, San Francisco, CA 94104</p>
          <p>¹Pay Anyone transactions will be monitored and may be held, delayed or blocked if the transfer could result in fraud or another form of financial harm. Sometimes instant transfers can be delayed. Non-Chime members must use a valid debit card to claim funds.</p>
          <p>Please do not reply to this email. The account isn’t monitored, and we don’t want to miss hearing from you.</p>
          <p>Chime® is a financial technology company, not an FDIC-insured bank. Banking services and debit card provided by The Bancorp Bank, N.A., Member FDIC, pursuant to a license from Visa U.S.A., Inc. and may be used everywhere Visa debit cards are accepted. Deposit insurance covers the failure of an insured bank. Certain conditions must be satisfied for pass-through deposit insurance coverage to apply. </p>
          <p>This email was sent to you because a Chime member sent you money.</p>
          <div class="social-icons">
          <a href="https://www.instagram.com/chime/" target="_blank"><img src="https://res.cloudinary.com/dssqqsnzq/image/upload/v1756650473/instagram_t8npzd.png" alt="Instagram" /></a>
          <a href="https://twitter.com/chime" target="_blank"><img src="https://res.cloudinary.com/dssqqsnzq/image/upload/v1756650473/twitter_turwkx.png" alt="X" /></a>
          <a href="https://www.tiktok.com/@chime" target="_blank"><img src="https://res.cloudinary.com/dssqqsnzq/image/upload/v1756650699/tik-tok_1_txthgo.png" alt="TikTok" /></a>
          <a href="https://www.facebook.com/chime/" target="_blank"><img src="https://res.cloudinary.com/dssqqsnzq/image/upload/v1756650473/facebook-logo_ll2u4h.png" alt="Facebook" /></a>
        </div>
      </div>
    </div>
  </body>
  </html>
`;

module.exports = emailTemplate;