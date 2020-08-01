import React from 'react';
import { Background, Particles, PageTitle, Schedule, ContentContainer } from "./components";


function App() {
  return (
    <div>
        <Background>
            {/*<PageTitle>Nolands 2020 - 8/8 - Adres 20, Koekange</PageTitle>*/}
            <ContentContainer>
                <Schedule />
            </ContentContainer>
        </Background>
        {/*<p>Adres 20, Koekange</p>*/}
        <Particles />
    </div>
  );
}

export default App;
