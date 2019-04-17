# Must-Watch

## Description

Simple app for creating a visual list of movies you want/simple must watch. Search a movie then add it to your list.

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

## Planned Future Features

- Mark items as "Watched".
- Games List
- Books List

## To Do

- Publish to expo.
- Add swipe right to remove from watch list.
- MoveFull component too big. Break it down.
- General styling update.
- Add Icons, splash screen.
- Think about how to make it that you can view your saved list offline. Logic that saves full screen data into state/watch list?
- General code and file structure cleanup

## Known Bugs to Squash

- Continuing to drag list item after right swipe reveals white colour. Maybe change FlatList background colour to blue?
- Weird movies that appear have broken full screen view. Could be because desciption is missing?
- After adding a movie from swipe, user can continue to swipe. Gross.
- List shows games sometimes? Remove this.
