# hubot-rocketchat-boilerplate
An example Hubot demonstrating usage of the Rocket.Chat adaptor.

### NB: THIS IS A WORK IN PROGRESS

> Please do not attempt to implement until this message is removed

> The `-develop` tag will also be removed from the package file.

[hubot]: https://github.com/hubotio/hubot
[hubot-rocketchat]: https://github.com/rocketchat/hubot-rocketchat
[sdk]: https://github.com/rocketchat/Rocket.Chat.js.SDK
[contributing]: https://rocket.chat/docs/contributing/developing/
[issues]: https://github.com/RocketChat/hubot-rocketchat-boilerplate/issues
[generator]: https://github.com/hubotio/generator-hubot
[deployment]: https://hubot.github.com/docs/deploying/
[dotenv]: https://www.npmjs.com/package/dotenv
[newrepo]: https://help.github.com/articles/creating-a-new-repository/

## Stable Versions

This demo uses [`hubot`][hubot] v3 and [`hubot-rocketchat`][hubot-rocketchat]
v2, using the new [Rocketchat Node.js SDK][[sdk] for Rocket.Chat instances
0.60.0 onward.

Versions of `hubot-rocketchat` prior to v2 are incompatible with Hubot v3

Due to the v1 adapter's use of coffee script, extending classes in es6
javascript is troublesome.

This bot is written in es6 and intended to run on node v8+. To run a bot on
older versions of node would require compiling with babel to use the full es6
feature set.

Older versions of the adaptor (v0.*) are also incompatible with more recent
versions of Rocket.Chat (v0.35+). Please report an issue if you find specific 
version mismatches and we'll update this document.

## Getting Started

This is a boilerplate for making your own bots with Hubot and Rocket.Chat.

There is also a [Hubot generator for Yeoman][generator], which may be more up
to date, but we do not control the versions of the Rocket.Chat adaptor it uses.

### Git setup

1. Create a bare clone of the repository at a new path.

    `git clone --bare https://github.com/rocketchat/hubot-rocketchat-boilerplate.git ./EXAMPLE_REPO`

2. Move into the repo.

    `cd ./EXAMPLE_REPO`

3. Create a [new remote repo][newrepo] and set it as the origin.

    `git remote set-url --push origin git@github.com:EXAMPLE_USERNAME/EXAMPLE_REPO.git`

4. Change details like `name` and `author` in **./paakcage.json**

5. Commit your changes

    `git add -A && git commit -m "New bot set up"`

4. Push the main branch to the new repo

    `git push -u origin master`

### Running Locally

You can run with the shell adapter just to test

1. Run `yarn` or `npm install` to install dependencies
2. Use the `yarn shell` script to start the bot with shell adaptor
3. Say `hubot help` to see what it can do

When you're ready to connect the bot to an instance of Rocket.Chat

1. Create a user for the bot, with the role _bot_
2. Edit the `./.env` file with the user and connection settings
3. Run `yarn local` script to connect to your local Rocket.Chat

### Running in Production

There are executables for different environments that all run the Hubot binary.

Before running make sure your production environment has the required 
environment variables for the adapter, url, user, name and pass. Or you can add
them after the launch command as switches, like `-a rocketchat`.

- `bin/hubot` unix binary
- `bin/hubot.cmd` in windows
- `Procfile` for Heroku

More information on [deployment configs][deployment] here.

### Adding Scripts

Scripts can be added to the `./scripts` folder, or by installing node packages
and listing their names in the `external-scripts.json` array. There's an example
of each in this repo, but neither is required.

## Configuration

When running locally, we've used [`dotenv`][dotenv] to load configs from the
`./.env` file. That makes it easy for setting environment variables.

### NB: GIT IGNORE THE ENV 🚨

It was included only as a sample for how to set up the bot.

If you commit actual passwords to your repo, they can be retrieved even if
the file is later deleted.

Before committing, delete the last line of `./.gitignore` and un-track the file.

### Environment Variables

| Env var                | Description                                           |
| ---------------------- | ----------------------------------------------------- |
| `HUBOT_NAME`           | The programmatic name for listeners                   |
| `HUBOT_ALIAS`          | An alternate name for the bot to respond to           |
| `HUBOT_LOG_LEVEL`      | The minimum level of logs to output                   |
| `HUBOT_HTTPD`          | If the bot needs to listen to or make HTTP requests   |
| `HUBOT_ADAPTER`        | The platform adapter package to require on loading    |
| `ROCKETCHAT_URL`       | Local Rocketchat address (start before the bot)       |
| `ROCKETCHAT_USER`      | Name in the platform (bot user must be created first) |
| `ROCKETCHAT_PASSWORD`  | Matching the credentials setup in Rocket.Chat         |
| `ROCKETCHAT_ROOM`      | The default room/s for the bot to listen in to        |
| `LISTEN_ON_ALL_PUBLIC` | Wether the bot should be listening everywhere         |
| `RESPOND_TO_DM`        | If the bot can respond privately or only in the open  |
| `RESPOND_TO_EDITED`    | If the bot should reply / re-reply to edited messages |

## Contributions Welcome

Please see [our documentation on contributing][contributing], then
[visit the issues][issues] to share your needs or ideas.
