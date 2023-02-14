import { useState } from 'react';
import { Header, QuizApp, Footer } from './components';
import { mainContext } from './context';
const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <>
            <mainContext.Provider
                value={{
                    menuOpen,
                    setMenuOpen,
                }}
            >
                <Header />
                <QuizApp />
                <Footer />
            </mainContext.Provider>
        </>
    );
};

export default App;
