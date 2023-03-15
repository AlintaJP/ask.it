const concat = require('concat');

(async function () {
  await concat(
    [
      'css/general.css',
      'css/header.css',
      'css/how-it-works.css',
      'css/about-us.css',
      'css/events.css',
      'css/features.css',
      'css/footer.css',
      'css/interaction.css',
      'css/partners.css',
    ],
    'css/combined.css'
  );
})();
