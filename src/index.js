import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from "./Header";
import Meme from './Meme'

function App () {
return ( <div>
<Header />
<Meme />
</div>

)

}

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App name="project" />);

