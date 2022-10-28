# Assignment

Your task is to create an API to support our existing Dog gallery frontend application.

This API will help display a gallery of dog pictures & videos from https://random.dog/woof.json.

## Backend

- Create a new database table to store the URL of the media items in the gallery (follow the existing convention)
- Add a new route that fetches 8 new results from https://random.dog/woof.json and adds them to the database table created above
- There is a maximum of 24 media items allowed to be stored in the database. In the event of approaching this limit you should purge the 8 oldest records before adding the 8 new.
- Add a new route that returns the media items stored in the database

## Notes

- You'll also notice for the sake of simplicity we're not worrying about database versioning and migrations (we'll likely discuss approaches to this you've used in the past during a subsequent technical interview).

## Getting Started

- Bring up the Postgres database by running `docker-compose up`.
- Refer to the respective readme's for starting the backend and frontend.

## Demo Video

This is what the end product should look like.

https://user-images.githubusercontent.com/3270818/198507392-804974a3-82f8-4af2-9472-fc701caf74f9.mov
