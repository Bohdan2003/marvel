import {useState, useEffect} from 'react';
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import ComicsList from '../comicsList/ComicsList';
import ErrorBoundary from '../errorBoundary/errorBoundary';

import 'react-loading-skeleton/dist/skeleton.css'
import decoration from '../../resources/img/vision.png';

const App = () => {
    
    const [selectedChar, setChar] = useState(1010338);
    const [selectPage, setPage] = useState(true)

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <div className="app">
            <AppHeader setPage={setPage}/>
            <main>
                {
                    selectPage ? <ViewCharacter onCharSelected={onCharSelected} selectedChar={selectedChar}/> : <ViewComics/>
                }
            </main>
        </div>
    )
    
}

const ViewCharacter = ({onCharSelected, selectedChar}) => {
    return (
        <>
            <ErrorBoundary>
                <RandomChar/>
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                </ErrorBoundary>                       
                <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                </ErrorBoundary>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>       
    )
}

const ViewComics = () => {
    return (
        <>
            <ComicsList/>
        </>       
    )
}

export default App;

