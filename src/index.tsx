import { Route, Router } from "@solidjs/router";
/* @refresh reload */
import { render } from "solid-js/web";

import "./index.css";
import type { ParentComponent } from "solid-js";
import { Home } from "./pages/Home";
import { Test } from "./pages/Test";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
	throw new Error(
		"Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
	);
}

const App: ParentComponent = (props) => <>{props.children}</>;

render(() => {
	return (
		<Router root={App}>
			<Route path="/" component={Home} />
			<Route path="/test" component={Test} />
		</Router>
	);
}, root);
