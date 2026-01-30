
// BEFORE STARTING, REVIEW THE CODE IN THIS FILE
// Step 1 - add useContext and createContext to the imports:
// Step 2 - create a context for the theme (light/dark)
// Step 3 - create a state variable to hold the current theme
// Step 4 - provide the theme context to child components
// Step 5 - consume the theme context in ComponentA (and display it in the UI)
// Run the app and note that ComponentA shows the current theme
// Step 6 - consume the theme context in ComponentB (and display allow it to be changed)
// Run the app and verify that changing the theme in ComponentB updates it ComponentA
// Step 7 - use useEffect to apply the theme to the document body (a side effect)


// Step 1
const {useState, useEffect, useContext, createContext} = React

// Step 2

const ThemeContext = createContext();

function RootComponent(){

	// Step 3

	const [theme, setTheme] = useState("light");

	const [someState, setSomeState] = useState("foo");

	// The last step will go here (step 7)

	useEffect(() => {
		// console.log("Theme changed to:", theme);
		if(theme === "dark"){
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
	}, [theme]);

	const handelChange = (newState) => {
		setSomeState(newState);
	}

  // Step 4
	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<div>
				<h1>Some App</h1>
				<ComponentA someState={someState} onSomeStateChange={handelChange} />
				<ComponentB someState={someState} />
			</div>
		</ThemeContext.Provider>
	);

}



function ComponentA({someState, onSomeStateChange}){
	
  // Step 5 - consume the theme context (and display it in the UI below)
	
  const {theme} = useContext(ThemeContext);

	return (
		<div>
			<h2>Component A</h2>
			<p>Current theme: {theme}</p>
			<p>SomeState: {someState}</p>
			<button onClick={e => onSomeStateChange("foo")}>Foo</button>
			<button onClick={e => onSomeStateChange("bar")}>Bar</button>
		</div>
	);

}

function ComponentB({someState}){
	
	// Step 6 - consume the theme context (and display allow it to be changed below)

	const {theme, setTheme} = useContext(ThemeContext);

	

	return (
		<div>
			<h2>Component B</h2>
			<p>SomeState: {someState}</p>
			<input type="radio" 
				name="theme" 
				value="light"
				checked={theme === "light"}
				onChange={e => setTheme(e.target.value)} 
			/> Light
			<input type="radio" 
				name="theme" 
				value="dark" 
				checked={theme === "dark"}
				onChange={e => setTheme(e.target.value)}
			/> Dark
		</div>
	);

}


// this code creates a React application and attaches it to the elemenet with the id of app.
const app = ReactDOM.createRoot(document.querySelector("#app"))
app.render(<RootComponent />);