<p align="left">
  <img src="./assets/images/mustwatchlogo.png" alt="mustwatch" height="128" width="128" />
</p>

# Must-Watch

## Description

Simple app for creating a visual list of movies/shows you want to watch. Search a movie then add it to your list.

Using [omdb api](https://itunes.apple.com/app/apple-store/id982107779).

Must-Watch is a work in progress. Features/fixes to come.

## Stack

- React Native
- Expo
- redux/redux-persist
- recompose

## Current Features

- Search omdbapi (unofficial imdb) database for movies or tv shows.
- Add/remove movies to a "watch list".
- List data saved locally via redux-persist.
- Swipe right on searched list to for quick add.
- Swipe right on added item for quick remove.

## Run Development or Production via Local Machine

### Install Expo CLI

```bash
npm install -g expo-cli
```

### Install Dependencies

```bash
npm install
```

### Run

```bash
npm start
```

Expo Dev Tools will automatically launch in your browser.

Either follow the prompts in the terminal, or select the prompts via Expo Dev Tools.

Ensure you have your simulator running, or install Expo on your device ([iOS](https://itunes.apple.com/app/apple-store/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www)) and scan the QR code using the Expo app (Android) or the Camera app (iOS).

## Run Production via Expo Hosted (Published)

You will need to download the Expo app on [iOS](https://itunes.apple.com/app/apple-store/id982107779) or [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).

The project has been published and is hosted on [Expo](https://expo.io/@marlbones/must-watch). Simply scan the QR code in the link using the Expo app (Android) or the Camera app (iOS).

## Planned Future Features

- Mark items as "Watched".
- Games List
- Books List

## To Do

- Publish to expo.
- MoveFull component too big. Break it down.
- General styling update.
- View your saved list offline. Logic that saves full screen data into state/watch list?
- General code and file structure cleanup.
- Update readme.

## Known Bugs to Squash

- Continuing to drag list item after right swipe reveals white colour. Maybe change FlatList background colour to blue?
- Certain weird movies make full-screen movie UI look weird.