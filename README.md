# MOVIE LIBRARY

## Features

- Movie library has 5 pages - Home page, List page, Watchlist page, Settings page and Details page.
- Home page has Top 6 movie cards and a hero
- List page lists top 100 movies.
- Movies can be added to watchlist by clicking the add to watchlist button in the movie card.
- Movies can be found through search and added to watchlist from the Watchlist Page.
- Movies added to watchlist are persisted through local storage.
- Settings page has placeholder buttons but is not functional for now.

## Live Demo

- To see the live website [go to to the link.](https://neon-cassata-59d5e1.netlify.app/home)

## Tech stack

- HTML, CSS and TypeScript are used.
- Jest is used for testing.

## Folder structure

```bash
├── day4/
│   ├── testSite/
│   │   ├── main.d.ts
│   │   ├── types.js
│   │   ├── Top_100_Movies.csv
│   │   ├── main.js
│   │   ├── types.d.ts
│   │   ├── index.html
│   │   ├── tests/
│   │   │   ├── init.test.js
│   │   │   ├── testIsWatchlist.test.d.ts
│   │   │   ├── dom.test.d.ts
│   │   │   ├── image-onerror.test.js
│   │   │   ├── parseCSV.test.d.ts
│   │   │   ├── image-onerror.test.d.ts
│   │   │   ├── dispatch.test.d.ts
│   │   │   ├── queue.js
│   │   │   ├── state.test.d.ts
│   │   │   ├── dispatch.test.js
│   │   │   ├── searchMovies.test.d.ts
│   │   │   ├── apiClient.js
│   │   │   ├── init.test.d.ts
│   │   │   ├── parseCSV.test.js
│   │   │   ├── queue.test.js
│   │   │   ├── dom.test.js
│   │   │   ├── testIsWatchlist.test.js
│   │   │   ├── queue.d.ts
│   │   │   ├── queue.test.d.ts
│   │   │   ├── apiClient.d.ts
│   │   │   ├── state.test.js
│   │   │   ├── searchMovies.test.js
│   │   ├── css/
│   │   │   ├── components.css
│   │   │   ├── layout.css
│   │   ├── assets/
│   │   │   ├── dune.jpg
│   │   │   ├── star.svg
│   │   │   ├── settings.svg
│   │   │   ├── close.svg
│   │   │   ├── addtofav.svg
│   │   │   ├── collage.jpg
│   │   │   ├── poster.webp
│   │   ├── js/
│   │   │   ├── utils.js
│   │   │   ├── utils.d.ts
│   │   │   ├── components/
│   │   │   │   ├── isWatchList.d.ts
│   │   │   │   ├── searchMovies.js
│   │   │   │   ├── movieCards.js
│   │   │   │   ├── updateWatchList.d.ts
│   │   │   │   ├── addWatchlistCard.js
│   │   │   │   ├── createModal.js
│   │   │   │   ├── movieCards.d.ts
│   │   │   │   ├── createModal.d.ts
│   │   │   │   ├── createButton.js
│   │   │   │   ├── searchCardMovieAdded.d.ts
│   │   │   │   ├── addWatchlistCard.d.ts
│   │   │   │   ├── createButton.d.ts
│   │   │   │   ├── searchCards.js
│   │   │   │   ├── isWatchList.js
│   │   │   │   ├── updateWatchList.js
│   │   │   │   ├── searchCards.d.ts
│   │   │   │   ├── searchCardMovieAdded.js
│   │   │   │   ├── searchMovies.d.ts
│   │   │   ├── pages/
│   │   │   │   ├── home.js
│   │   │   │   ├── detail.d.ts
│   │   │   │   ├── settings.js
│   │   │   │   ├── detail.js
│   │   │   │   ├── list.d.ts
│   │   │   │   ├── settings.d.ts
│   │   │   │   ├── list.js
│   │   │   │   ├── watchlist.d.ts
│   │   │   │   ├── watchlist.js
│   │   │   │   ├── home.d.ts
│   ├── src/
│   │   ├── main.ts
│   │   ├── Top_100_Movies.csv
│   │   ├── types.ts
│   │   ├── index.html
│   │   ├── tests/
│   │   │   ├── init.test.ts
│   │   │   ├── searchMovies.test.ts
│   │   │   ├── dom.test.ts
│   │   │   ├── image-onerror.test.ts
│   │   │   ├── queue.test.ts
│   │   │   ├── dispatch.test.ts
│   │   │   ├── testIsWatchlist.test.ts
│   │   │   ├── queue.ts
│   │   │   ├── state.test.ts
│   │   │   ├── parseCSV.test.ts
│   │   │   ├── apiClient.ts
│   │   ├── css/
│   │   │   ├── components.css
│   │   │   ├── layout.css
│   │   ├── assets/
│   │   │   ├── dune.jpg
│   │   │   ├── star.svg
│   │   │   ├── settings.svg
│   │   │   ├── close.svg
│   │   │   ├── addtofav.svg
│   │   │   ├── collage.jpg
│   │   │   ├── poster.webp
│   │   ├── js/
│   │   │   ├── utils.ts
│   │   │   ├── components/
│   │   │   │   ├── searchMovies.ts
│   │   │   │   ├── createModal.ts
│   │   │   │   ├── addWatchlistCard.ts
│   │   │   │   ├── isWatchList.ts
│   │   │   │   ├── createButton.ts
│   │   │   │   ├── searchCards.ts
│   │   │   │   ├── updateWatchList.ts
│   │   │   │   ├── movieCards.ts
│   │   │   │   ├── searchCardMovieAdded.ts
│   │   │   ├── pages/
│   │   │   │   ├── settings.ts
│   │   │   │   ├── list.ts
│   │   │   │   ├── detail.ts
│   │   │   │   ├── home.ts
│   │   │   │   ├── watchlist.ts
│   ├── .gitignore
│   ├── package-lock.json
│   ├── jest.config.js
│   ├── package.json
│   ├── tsconfig.json
```

## To run the project

### Prerequisites to run the project

- live-server (can be installed using npm - npm install live-server)

### How to run

- Clone the repo using `git clone `
- Change to testSite directory using cd test
- run live-server live-server --entry-file=index.html
- Now the website is live on localhost

## To test the project

### Prerequisites for test

- Install jest

### To Test

- run npx jest
