import Header from './components/header/header';
import Cursor from './components/cursor/cursor';
import MenuSection from './components/menu-section/menu-section';
import Work from './components/work/work';
import Expertise from './components/expertise/expertise';
import Contact from './components/contact/contact';
import LanguageProvider from './context/languageprovider';
import './App.css';

function App() {
    return (
        <LanguageProvider>
            <div className="app">
                <Cursor />
                <Header />
                <MenuSection />
                <Work />
                <Expertise />
                <Contact />
            </div>
        </LanguageProvider>
    );
}

export default App;