import React from 'react';
import Footer from './components/footer-component/Footer';
import Header from './components/header-component/Header';
import Main from './components/main-component/Main';

const App = () => {
    return (
       <div className='app'>
       <Header/>
       <Main/>
       <Footer/>
       </div>
    );
};

export default App;