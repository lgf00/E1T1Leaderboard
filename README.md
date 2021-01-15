# E1T1 Leaderboard

### Step 1: Install yarn
[installation page](https://classic.yarnpkg.com/en/docs/install/#windows-stable)

### Step 2: Installing dependencies
run `yarn install` in your terminal while in the project directory.
This will download all dependencies that this app uses to run.

### Step 3: Adding a config.js
This step is needed to add the funtionalty to read data from a google spreadsheet.
create a resources folder under src and then add a new file called `config.js`

then paste this code in
`export default {
    apiKey: "API KEY HERE",
    discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
    spreadsheetIdMaster: "1wzWBhvUjeYrtfjx8zi4lyfXkLmt5mA6pEmgt4zpF3Bc",
    spreadsheetIdData: "1SDwXm2k-ti1PwFoD8hAoJxwG5lpdF7Pf53jX__0zUZE", 
  };`

  then message Lucas on slack for API key or if you know how to set up your own API key then go ahead, just make sure it can be accessed by https://lgf00.github.io and http://localhost:3000

### Step 3: Run the app locally
`yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000/e1t1-leaderboard](http://localhost:3000/e1t1-leaderboard) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### To Deploy the App and push the changes live
`yarn deploy`

This will build the react app and then push that build to the gh-pages branch which is what the live site is reading from

### fork and pull request testing from e1t1 2020 interns

Hi.
🙃

Hi. Test 2.


howdy


Hi.

Another tester...

Helloooooo, 'tis Nathan!

Hi one more test