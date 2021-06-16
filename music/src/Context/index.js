import React from 'react';

// Initialising a new context
const MusicContext = React.createContext();

// Assign&Export -- To be able to access them in our app 
export const Provider = MusicContext.Provider;
export const Consumer = MusicContext.Consumer;