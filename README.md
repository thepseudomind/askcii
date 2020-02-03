ASKCII
====

This is an ecommerce site, where you can buy all sorts of ascii faces like `(ノ・∀・)ノ` and `¯_(ツ)_/¯`, in a wide variety of font sizes. The homepage should display a list of products for people to browse.

Please read the instructions and FAQ below before downloading.

Features
----

- products are displayed in a grid.
- give the user an option to sort the products in ascending order. Can sort by "size", "price" or "id". The products list should be reloaded when a new sorting option is chosen.
- each product has :
  - a "size" field, which is the font-size (in pixels). We should display the faces in their correct size, to give customers a realistic impression of what they're buying.
  - a "price" field, in cents. This should be formatted as dollars like `$3.51`.
  - a "date" field, which is the date the product was added to the catalog. Dates should be displayed in relative time (eg. "3 days ago") unless they are older than 1 week, in which case the full date should be displayed.
- the product grid should automatically load more items as you scroll down.
- display an animated "loading..." message while the user waits for the data to load.
- to improve the user's experience, we should always pre-emptively fetch the next batch of results in advance, making use of idle-time.  But they still should not be displayed until the user has scrolled to the bottom of the product grid.
- when the user reaches the end and there are no more products to display, show the message "~ end of catalogue ~".

### Ads features

- After every 20 products, an advertisement from one of our sponsors is shown.
- Ads are randomly selected, and users never see the same ad twice in a row.


FAQ
----

### How do I start the app?

Start with `npm start`. The server will look for any files you add to the `public/` directory.

Also run from your command line `npm run dev`. It'll launch the ASKCII web app at port 1234.

### What libraries/frameworks, packages, tools can I use?

This app was built using ReactJS, SASS and bundled with Parcel.

### Additional information

This web app was built with a simple UI in my mind... ASK CII for your next ASCII is what inspired the name...😁
