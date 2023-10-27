# Pixelize CC - Discord Bot with Custom Handler

Pixelize CC is a versatile Discord bot designed to simplify moderation and enhance server management with a custom event handler. This bot provides a range of features to help streamline your Discord community.

## Features

- Customizable event handler for handling commands and events.
- Moderation tools for managing your server effectively.
- User-friendly and interactive experience for server members.
- Easy integration with your Discord server.

## Getting Started

These instructions will help you set up and run the Pixelize CC Discord bot on your server.

### Prerequisites

- [Node.js](https://nodejs.org/) - Make sure you have Node.js installed.
- [Discord Developer Portal](https://discord.com/developers/applications) - Create a bot application and obtain the token. Then scroll down and enable all "Privileged Gateway Intents."

### Installation

1\. **Fork this repository and make a clone in your local machine:**

   ```sh
   git clone https://github.com/pixelizecc/discord-bot-v1.git
   cd pixelize-cc
   npm install
   ```

2\. **Set up your configuration:**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Go to config.json file in the root directory.
  Add your Discord bot token to the config.json file:
  ```
  {
    "token": "your token here"
  }
  ```

3\. **Start the bot:**<br>
   &nbsp;&nbsp;&nbsp;&nbsp;Run in your terminal

    ```
    node .
    ```

The bot should now be running on your server.

## Inviting
To invite your bot to your server, copy the following url into your browser after filling in the bot's id:
```
https://discord.com/api/oauth2/authorize?client_id=<BOT-ID>&permissions=1634734566647&scope=bot%20applications.commands
```

## Usage
Configure and customize the bot's functionality to suit your server's needs.
Use the command prefix to interact with the bot and enjoy its features.

### Contributing
Contributions are welcome! If you'd like to contribute to Pixelize CC, please follow the Contributing Guidelines.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments
The Discord.js library for enabling bot development.
Our amazing community of users for their support and feedback.
