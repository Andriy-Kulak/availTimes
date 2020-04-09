## Notes for reference

- I used `Node.js` as the backend
- for testing, run `npm run test` in `/web` and `/node` directories

### Front end

- I componentized the front end with React to a good extent.
- `App.js` is the container responsible for logic and data manipulations
- The rest are in `components` folder and are presentational components

### Back end

- I am getting the availability data from the backend to prevent CORS errors (route `/api/advisors/availability`)
- I also adjusted the availablity data before returning it to front end so that it is much easier to traverse
- I created a dummy model in `models/booking.js`. It simply validates that we are passing in correct data. If we added a DB, I would use a more sophisticated schema.
