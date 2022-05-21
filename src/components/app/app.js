import { useState, useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import styles from './app.module.scss';
import Header from '../header';
import Content from '../content';
import Items from '../../routes/items';
import Stats from '../../routes/stats';
import Settings from '../../routes/settings';
import AddItem from '../../routes/additem';
import Menu from '../menu'
import { ButtonAppContainer } from '../../shared/uibuttons';
import testdata from '../../testdata.js';



function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(testdata);
  }, []);

  const handleItemSubmit = (newitem) => {
    let storeddata = data.slice();
    storeddata.push(newitem);

    storeddata.sort((a,b) => {
      const aDate = new Date(a.paymentDate);
      const bDate = new Date(b.paymentDate);
      return bDate.getTime() - aDate.getTime();
    }
    );

    setData(storeddata);
  }

  return (
    <ButtonAppContainer>
    <div className={styles.app}>
     
      <Router forceRefresh={true}>
         <Header />
          <Content>
             <Route exact path="/">
               <Items data={data} />
             </Route>
             <Route path="/stats">
               <Stats />
             </Route>
             <Route path="/settings">
               <Settings />
             </Route>
             <Route path="/add">
                <AddItem onItemSubmit={handleItemSubmit} />
             </Route>
           </Content>
          <Menu />
      </Router>
    </div>
    </ButtonAppContainer>
  );
}

export default App;
