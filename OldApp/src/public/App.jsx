import { createRoot } from "react-dom/client";
import React from "react";

import MaxPlayer from "../../../rnbo_fm_app/src/maxplayer";

const App = () => {
  return <MaxPlayer />;
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
