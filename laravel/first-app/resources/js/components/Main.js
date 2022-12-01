import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Box } from "@mui/system";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import Home from "../pages/Home";
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";




const client = new QueryClient();

function Main() {
    return (
        <Box>
            <Navigation></Navigation>
            <BrowserRouter>
                <QueryClientProvider client={client}>
                    <main className={"m-5"}>
                        <Routes>
                            <Route path={"/"} exact element={<Home />} />
                        </Routes>
                    </main>
                </QueryClientProvider>
            </BrowserRouter>
        </Box>
    );
}

export default Main;
// // for <div id="main-employee"></div>
if (document.getElementById('app')) {
    ReactDOM.render(<Main />, document.getElementById('app'));
}
