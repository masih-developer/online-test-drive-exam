import React from 'react';
import Header from './components/common/Header/Header';
import QuizApp from './components/layout/QuizApp/QuizApp';
import Footer from './components/common/Footer/Footer';
import Question from './components/QuizApp/Quiz/Question';
const App = () => {
    return (
        <>
            <Header />
            <QuizApp />
            <Footer />
            <Question />
        </>
    );
};

export default App;
