<p align="left">
  <a href="https://expo.io/@robhung/scb-social-networking-app">
    <img src="./assets/images/mustwatchlogo.png" alt="SCB Book" height="128" width="128" />
  </a>
</p>

# Must-Watch

## Description

Simple app for creating a visual list of movies you want to/must watch. Search a movie then add it to your list.

Using ([omdb api](https://itunes.apple.com/app/apple-store/id982107779).

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