## Course About React and Material UI
In this course, I'll try to use hooks instead of classes. Wish me luck! =)

### 01 Class: Intro
Getting started.

### 02 Class: Grid Layout
Create a custom grid with a AppBar (as Header) and Tabs (as Footer).

### 03 Class: Data Store


#### Video link/description:
    Link: https://www.youtube.com/watch?v=fox4Y-_Q9hE&list=PLcCp4mjO-z98WAu4sd0eVha1g-NMfzHZk&index=3

    Moving on, why don't we now set up a data store in our fitness app. The name for this concept, you guessed it, is not accidental. Our data store will house the initial set of exercises, as well as muscle groups, that will be manipulated and ultimately rendered as part of our component(s).

    You could probably already see a pattern emerging here. Our React app acts as the view (V) in the MVC (and somewhat of a Controller (C) as well), whereas the data store serves as the Model (M), or the so-called "single source of truth". This data might come from a file in the filesystem, from a database, from an API call fetched on the back-end, you name it. Regardless, the front-end is merely the "skin" of your app -- feed it with data, and it will spit it back out to the UI. Very much like pure functions in functional programming.

    Case in point, in our app, the application data is contained within the root App component, which serves as a container (hence the class-based approach with state and methods) and passes that data to the rest of the components down the tree. You'll see in the video how this stateful component will also "massage" the data just before the other, presentational components receive and render it. This is typically something you would do on the server, but we'll defer it to the client for now. Sweet!

    Though it's briefly mentioned in React docs as well https://reactjs.org/docs/lifting-stat..., I first came across this paradigm when starting out with Vuex https://vuex.vuejs.org/en/state.html

    Maybe I'll make a Vue.js series later on, what do you guys think?

    14:55 Heads up! The import path might soon be flattened! Get up to speed with breaking changes in Material UI here https://github.com/material-next/mate...

    Lastly, grab my exercise list from the sandbox https://codesandbox.io/s/7j9krpx9l1 (or just be creative and type out your own :)

### Class 04