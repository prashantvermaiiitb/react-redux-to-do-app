/*
* Index file for the main component of the page.
* this will be the APP component integrator
*/
import React from 'react'; //@todo this import is needed because of the JSX below
import Header from './header';
import Footer from './footer';
import TodoList from '../container/todo-list';
import TodoHandler from '../container/todo-handler';

const App = () => (
    <div>
        <Header/>
        <hr/>
        <div className="container">
            <h1>To do List for Prashant Verma.</h1>
            <TodoHandler/>
            <TodoList/>
        </div>
        <hr/>
        <Footer/>
    </div>
);

export default App;