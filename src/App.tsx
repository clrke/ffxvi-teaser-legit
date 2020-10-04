import React from 'react';
import trailer from './assets/ffxvi-trailer.mp4';
import ffxviLogo from './assets/ffxvi-logo.jpeg';
import conceptArt from './assets/concept-art.jpg';
import eikons from './assets/eikons.png';
import joshua from './assets/joshua.png';
import shield from './assets/shield.png';
import eikonMoves from './assets/eikon-moves.png';
import chikupo from './assets/chickupo.png';
import ps5 from './assets/ps5-logo.png';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <video className="App-video" src={trailer} autoPlay={true} loop={true} muted={true}/>
                <img src={ffxviLogo} className="App-logo" alt="logo"/>
            </header>
            <section className="introductions">
                <div className="introduction teaser-site">
                    <h1>OFFICIAL* FINAL FANTASY XVI TEASER SITE</h1>
                    <p>
                        FINAL FANTASY XVI brings the acclaimed epic RPG series to new heights,
                        packed with giant Eikons from war-hungry nations.
                        Join Jameson as he fights against the empire in an effort
                        to take back their fallen kingdom.
                    </p>
                </div>
                <div className="introduction terragaea">
                    <h1>Terragaea</h1>
                    <img src={conceptArt} className="supporting-image vertical-animation" alt="logo"/>
                    <p>
                        Terragaea is composed of four nations:
                        <strong> Zanbreks, Dhalmeks, Akfeks </strong>
                        and
                        <strong> Getrekts. </strong>
                        Each of these
                        nations is affiliated with one of the four elements, namely
                        <strong> Water, Earth, Fire and Air</strong>. Time and
                        time again these nations enter a state of war and heavily rely on their nation’s Mothercrystal,
                        a special stone that once activated, grants its people insurmountable power.
                    </p>
                </div>
                <div className="introduction eikons">
                    <h1>Eikons</h1>
                    <img src={eikons} className="supporting-image horizontal-animation" alt="logo"/>
                    <p>
                        Eikons, also known as Eikomons (short for Eiko Monsters), are eternal beings that provide divine
                        protection upon the four nations. Each nation has a primary and a secondary Eikon, which can be
                        either of light or dark. The primary Eikon is determined depending on the nation’s cultural
                        affinity. Both Eikons have never before both appeared at any given time, until the Pandemic
                        Blight fell upon the world of Terragaea. Gotta catch 'em all Eikomons. The four Eikons of
                        Light originates from a destroyed ancient city called Madain Sari, while the origination of the
                        four Eikons of Darkness remains unknown.
                    </p>
                </div>
                <div className="introduction joshua">
                    <h1>JOSHUA PYRUS ACOPALIS XXVII</h1>
                    <img src={joshua} className="supporting-image horizontal-animation" alt="logo"/>
                    <p>
                        Phoenix’s Dominant. Son of Archduke John Pyrus Acopalis XXVI.
                        Slain during the fight against Zanbreks, along with his father.
                    </p>
                </div>
                <div className="introduction shield">
                    <h1>JAMESON CAMERON</h1>
                    <img src={shield} className="supporting-image horizontal-animation" alt="logo"/>
                    <img src={eikonMoves} className="solid-image" alt="logo"/>
                    <p>
                        Joshua’s Shield. Gifted with Eikon Blue Magic. Has the ability to obtain skills from Eikons and
                        perform them in battle. Part of a rebel group that is sworn to destroy the Mothercrystals.
                    </p>
                </div>
                <div className="introduction chikupo">
                    <h1>KUBO and CHICKUPO</h1>
                    <img src={chikupo} className="supporting-image horizontal-animation" alt="logo"/>
                    <p>
                        Kubo is Jameson’s half-Chocobo, half-Moogle. Before Kubo is slain in the fight against Zanbreks,
                        she gives birth to Chickupo. Jameson raises the little chocobo and becomes his trusty steed in
                        his mission to sever the ties with the crystals.
                    </p>
                </div>
                <div className="introduction ps5">
                    <h1>PS5 exclusive</h1>
                    <img src={ps5} className="supporting-image horizontal-animation" alt="logo"/>
                    <p>
                        Also available on PC.
                    </p>
                </div>
            </section>
            <footer className="App-footer">
                <p>
                    * lol just kidding please follow me on Twitter
                    at <a href="https://twitter.com/_clrke" target="_blank" rel="noopener noreferrer">@_clrke</a> I’m
                    lonely.
                </p>
                <p>
                    Contribute
                    to <a href="https://github.com/clrke/ffxvi-teaser-legit" target="_blank" rel="noopener noreferrer">this
                    repository</a> to
                    make it seem more legit. Also Square Enix, please hire me as your
                    Web Developer and/or Storywriter.
                </p>
                <p>
                    © Square Phoenix 2020
                </p>
            </footer>
        </div>
    );
}

export default App;
