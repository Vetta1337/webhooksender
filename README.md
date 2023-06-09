# Webhook Sender

Webhook Sender is a simple JavaScript application that sends an embed message to a Discord channel using a webhook URL. The application allows you to customize the title, description, and thumbnail of the embed message.

## Configuration

To use the application, you need to provide the webhook URL and embed link. Follow the steps below to configure the application:

1. Open the `config.js` file.
2. Replace `'YOUR_WEBHOOK_URL_HERE'` with your actual Discord webhook URL.
3. Replace `'YOUR_EMBED_LINK_HERE'` with the embed link you want to include.

## Usage

1. Open the `runthis.js` file.
2. Customize the `embedTitle`, `embedDescription`, and `thumbnailUrl` variables according to your needs.
3. Save the file.
4. Run the following command to send the embed message:

```shell
node runthis.js
```

The application will send the embed message to the specified Discord channel through the webhook. The success or failure status will be displayed in the console.

## Customization

Feel free to modify the application to suit your requirements. You can enhance the embed message by adding additional fields such as author, fields, or color customization. Refer to the [Discord Embed Documentation](https://discord.com/developers/docs/resources/channel#embed-object) for more information on available options.

## License

This project is licensed under the [MIT License](LICENSE).