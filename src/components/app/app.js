import { BrowserRouter as Router, Route } from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import AddItem from '../../routes/additem';
import Menu from '../menu'
import { ButtonAppContainer } from '../shared/uibuttons';
import testdata from '../../testdata.js';




// SELVITÄ ENSIN MIKÄ VAIVAA /add välilehden tyylimäärittelyjä
// SITTEN SELVITÄ MIKSI react-hooks palikka herjaa jostakin
// ja kun ongelmat selvitetty vie version hallintaan
// commitilla "useForm React Hooks added" 
// ja
// SEURAAVAKSI ---->>>> useFormin käyttö (video, 15:19)




function App() {
  return (
    <ButtonAppContainer>
    <div className={styles.app}>
      <Router>
         <Header />
          <Content>
             <Route exact path="/">
               <Items data={testdata} />
             </Route>
             <Route path="/stats">
               <Stats />
             </Route>
             <Route path="/settings">
               <Settings />
             </Route>
             <Route path="/add">
                <AddItem />
             </Route>
           </Content>
          <Menu />
      </Router>
    </div>
    </ButtonAppContainer>
  );
}

export default App;
