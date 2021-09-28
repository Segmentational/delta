import "./index.scss";

import React, {
    Suspense,
    lazy as Import
} from "react";

import ReactDOM from "react-dom";

import { default as Skeleton } from "./Page-Loader";

import { default as Menu } from "./components/Menu";

import {
    BrowserRouter as Navigator,
    HashRouter as Router
} from "react-router-dom";

const Application = Import(() => {
    return import("./Application").then(
        (SPA) => SPA
    );
});

const DOM = () => {
    return (
        <React.StrictMode>
            <Navigator forceRefresh={ true }>
                <Router>
                    <Menu />
                    <Suspense fallback={ (<Skeleton Loader={ true } />) }>
                        <Application />
                    </Suspense>
                </Router>
            </Navigator>
        </React.StrictMode>
    );
};

ReactDOM.render((<DOM />), document
    .getElementById("Application")
);

import("./Worker.js").then((Module) => {
    Module.unregister();
});