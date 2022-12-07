import { createRoot } from 'react-dom/client';
import React from 'react';

import MaxPlayer from './maxplayer';

const App = () => {
    return <MaxPlayer />
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);