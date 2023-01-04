import { useState } from 'react';
import './App.css';
import Nav from './components/nav';

function App() {
    const [bgClass, setBgClass] = useState('bg-pas-vegan');
    const [regime, setRegime] = useState(2);
    const [formule, setFormule] = useState(1);
    const [facturation, setFacturation] = useState(0);

    const handleRegimeClick = (index: number) => {
        setRegime(index);
        const bg = ['bg-vegan', 'bg-viandard-sensible', 'bg-pas-vegan'];
        setBgClass(bg[index]);
    };

    const handleFormuleClick = (index: number) => {
        setFormule(index);
    };

    const handleFacturationClick = (index: number) => {
        setFacturation(index);
    };

    return (
        <div className="">
            <header className={bgClass}></header>
            <nav>
                <Nav
                    className={`regime ${bgClass}`}
                    data={['Vegan', 'Viendard sensible', 'Véquoi?']}
                    onClick={handleRegimeClick}
                    selected={regime}
                />
                <Nav
                    className={`formule ${bgClass}`}
                    data={['Petite faim', 'Grosse dalle']}
                    onClick={handleFormuleClick}
                    selected={formule}
                />
            </nav>
            <section className={bgClass}></section>
            <footer>
                <Nav
                    className={`facturation ${bgClass}`}
                    data={[
                        'Abonnés à inpulse.tv',
                        'Pompiers et militaires',
                        'Les autres',
                    ]}
                    onClick={handleFacturationClick}
                    selected={facturation}
                />
                <Nav className={`commande ${bgClass}`} data={['Commander']} />
            </footer>
        </div>
    );
}

export default App;
