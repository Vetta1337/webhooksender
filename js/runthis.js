const axios = require('axios');
const { webhookUrl, embedLink } = require('./config');

async function sendCoolerDiscordEmbed(title, description, link, thumbnailUrl) {
  try {
    const payload = {
      embeds: [
        {
          title: title,
          description: description,
          url: link,
          color: 16729344,
          footer: {
            text: 'Powered by Discord',
          },
          timestamp: new Date().toISOString(),
          thumbnail: {
            url: thumbnailUrl,
          },
        },
      ],
    };

    const response = await axios.post(webhookUrl, payload);
    if (response.status === 204) {
      console.log('Cooler embed sent successfully.');
    } else {
      console.log('Failed to send cooler embed. Status code:', response.status);
    }
  } catch (error) {
    console.error('Error occurred while sending cooler embed:', error.message);
  }
}

// Example usage
const embedTitle = 'Tjenesteliste';
const embedDescription = 'Denne tjenestelisten skal alltid brukes ved ansettelse/endringer i stillinger.';
const thumbnailUrl = 'https://yt3.googleusercontent.com/ytc/AGIKgqN4CdUlMn6pg7jrpftLxpzp3ed4kx-Qvm9UF2euPA=s900-c-k-c0x00ffffff-no-rj';
sendCoolerDiscordEmbed(embedTitle, embedDescription, embedLink, thumbnailUrl);
