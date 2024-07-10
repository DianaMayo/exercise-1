### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
React Router is a JavaScript framework that lets us handle client and server-side routing in React applications.

- What is a single page application?
 is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as Fetch when different content is to be shown.

- What are some differences between client side and server side routing?
Server-side routing may be less responsive with potential delays during transitions while client-side routing offers a more responsive user experience with seamless transitions.Feb 

- What are two ways of handling redirects with React Router? When would you use each?
Server-side redirects occur when the server responds to a request with a redirect status, instructing the browser to navigate to a different URL. Client-side redirects, on the other hand, are handled within the React application using the react-router-dom library.

- What are two different ways to handle page-not-found user experiences using React Router? 
One way is using `Switch` to wrap all your routes and adding a `NotFound` component in a route listed last.
- Another way would be to simply us a `Redirect` component when the user reaches a wrong path that sends the user somewhwere else ( -whether that be the 404 page or another desired route -)

- How do you grab URL parameters from within a component using React Router?
you can use the `useParams()` hook which grabs all the url params in an object of key value pairs.

- What is context in React? When would you use it?
context in React gives us the ability to pass props down to any nested component by defining them in a singular ancestral component and wrapping the first nested component(s) with a `.Provider` property on the context object created from `useContext()`. This is very useful when certain props need to be used by a multitude of components that may not be sibling components or are nested beyond the child component of the parent component that defines the props.

- Describe some differences between class-based components and function
  components in React.
  - class-based components require more setup than their function counterparts because of their need to establish props and state in a constructor method (or as instance properties). Because class components utilize OOP, there is also a lot of work with `this`, meaning instance methods will need this binding to maintain the proper context.
- Another major difference is the methods used to manage the component life cycle. Class-based components have a lot of different methods to manage each part of the component life cycle (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, `render`, etc.) while function components handled most of this with a few simple hooks (namely `useEffect` which can manage mounting, updating and unmounting components in one function).

- What are some of the problems that hooks were designed to solve?
- Hooks initially solved a major problem with function Components which was that they had no way of managing state and were simply used for presentational purposes.
- Another big problem hooks helped solve was the duplication of code within a component where a lot of similar logic was happening throughout the lifecycle of a component that had to be repeated in each different lifecycle function. Now, the hooks allow you to hook into the state in a way that allows you to manipulate state throughout the lifecycle from one central hook.
- similarly, hooks allow for cross component usage so that logic can be stored in a single hook and used throughout the app.