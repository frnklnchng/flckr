# Flckr

[Live Demo](https://flckr.herokuapp.com/)

Flckr is a single-page web application for users to share and embed personal pictures and photographs. Flckr is based on and inspired by the popular photo sharing website, Flickr. It is implemented on a Ruby on Rails backend and PostgreSQL database, and utilizes the React and Redux JavaScript libraries for the frontend.

This project was created within timeframe of under two weeks, and I fully expect to be implementing more features and improvements over time.

## Features
  * Secure backend to frontend user authenticaiton was achieved through BCrypt
  * Users are able to upload and edit photos through user-friendly interfaces
  * Cloud storage was achieved through AWS S3 and Rails' own Active Storage
  * The home feed features an adaptable layout that accomodates images of all sizes
  * The application features smooth transitions and other enhancements for a great user experience.
  * Users are able to leave comments and add tags.

### Creating and editing photos

![Small photo upload demo](docs/upload.gif)

Photos are added to the home page dynamically. Because of this, any changes in state are immediately displayed upon request completion, forgoing the need of any direct DOM manipulation.

Editing photos happens directly in the respective photo's show page, with all updates manifesting immediately after submission.

![Small photo edit demo](docs/edit.gif)

### Adaptive Feed

The feed updates to display all photos that have been uploaded to the site. The size of each photo tile adapts to the accomodate the tiles surrounding it directly, allowing for a clean and simple interface.

![Small feed](docs/feed.png)

This was accomplished by inserting each photo object into a React Component, and then manipulating the layout of each of these object in pure CSS. By mapping over each of the photos in reverse, we are able to display a feed with the most recent upload first.

```js
  render() {
    let items;

    if (this.props.photos) {
      items = this.props.photos.reverse().map(photo => {
        return <PhotoIndexItem key={photo.id} photo={ photo }/>
      });
    }

    return (
      <div className="photo-index">
        {items}
      </div>
    );
  }
```

Although numerous other implementations exist, I chose to go the CSS route, due to it's simplicity and because it could be easily modified to change the layout.

## Design

Flckr was designed with the user experience in mind. This means a clean, clutter-free interface that anyone would enjoy using. Considering the timeframe in which the project was created, I focused primarily on the core features and the styling of these features sequentially.

## Technologies

Flckr is a project intended as a portfolio piece to be built in a relatively short timeframe. Because of this, technologies that are readily available were chosen over those those that exist more for scalability.

Rails was chosen for its RESTful architecture and out-of-the-box support for relational databases, such as PostgreSQL. Heroku was the simple and friendly solution for a project of this scale.

Each component was set up with separate reducers and actions. This ensures the data in the state is handled correctly and allows for maintainability.

Redux states were set up with separate reducers and actions for users, courses lessons, ratings, subscriptions, completions, and errors. This keeps the data in the state normalized and eases the task of keeping the frontend up-to-date with changes in the database.

In addition to the included packages and gems, AWS S3 was used for file hosting.

### Additional Resources
  * [API](https://github.com/frnklnchng/flckr/wiki/Backend-Routes)
  * [Database Schema](https://github.com/frnklnchng/flckr/wiki/Schema)

## Possible future features
  * Albums
  * Search
  * Live feed