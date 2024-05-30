# totalcoach-frontend-test

This is my submission for the totalcoach take home test.
In this folder, my project is seperated into the client and server folders.
The scope of this project will be to create an example page with react best practices.

> The follow technologies will be used:

- Vite
- React.js
- MUI
- styled-components
- react-query
- express

### We will also be using google fonts and mui icons for this project for wireframing.

> The folder structure will be as followed:

### Totalcoach-frontend-test

- client
    - public
    - src
        - components
        - pages
        - global.css

- server
    - routes
    - index.js

> For my coding standards, I will be implementing:
- Formatting with prettier (setup can be seen in the prettierc file)
- Styles are local to components and pages. Should not be global for css contamination reasons
- Camel case will be used primarily across components and pages. Other files will use Kebab casing
- Comments will be left to explain thought processes behind the design decisions made during development
- Will be loosely following the google tsguide (https://google.github.io/styleguide/tsguide.html)

> Material UI components that we will be using are:

- Grid
- Container
- Avatar
- IconButton
- Button
- Box
- App Bar
- Skeleton
- Typography

> The components that will be created in this application will be:
- Navbar
    - will utilise App Bar, Typography, Avatar, Box
    - Needs Logo, Menu Items, BookingButton and Profile sub components
- Profile
    - will utilise Avatar, Typography, Box
- BookingButton
    - will utilise IconButton and Button
- ActionButton
    - will utilise IconButton
- Feed
    - prop to detect whether component is showing Activity(verticle scrollable) or Invitation (horizontal gallery draggable) 
- Card
    - card title, coach chip sub components
    - prop to change anchor position of Action button
    - prop to change color of Card Title 
- LessonMap
    - prop for description prompts
    - prop for svg of the map
    - props for the UI for the map

> Responsive design will be accounted for during development
> At minimum the screen can't be smaller than the lesson map container

![https://imgur.com/a/vmSiR2E](https://imgur.com/a/vmSiR2E)

For now the server api will give us:
- Activity feed json
- Invitiation feed json

### by jlow64
