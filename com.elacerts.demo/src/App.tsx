import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  IonApp,
  IonMenu,
  IonIcon,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonItem,
  IonTitle,
  IonContent,
  IonCard,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonSplitPane,

  IonFab,
  IonFabButton,


  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react'
import {
  addCircle,
  qrScanner
} from 'ionicons/icons'

import Menu from './Menu'

import ListCert from './pages/ListCert'
import ListStudent from './pages/ListStudent'
import Profile from './pages/Profile'
import Tab2 from './pages/Tab2'
import Tab3 from './pages/Tab3'
import Details from './pages/Details'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

/* Theme variables */
import './theme.css'

const App: React.FC = () => {

  return (
    <IonApp>
      <IonSplitPane contentId="main">

        <Menu></Menu>

        <IonPage id="main">
          <IonHeader className={'header-main'}>
            <IonToolbar>
              <IonButtons slot="start">
                <IonMenuButton></IonMenuButton>
              </IonButtons>
              <IonButtons slot="end">
                <IonIcon icon={addCircle} size="large"></IonIcon>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <Switch>
              <Route path="/profile" component={Profile} exact={true}/>
              <Route path="/list" component={ListCert} exact={true}/>
              <Route path="/students" component={ListStudent} exact={true}/>
              <Route exact path="/" render={() => <Redirect to="/list"/>}/>
            </Switch>

            <IonFab vertical="bottom" horizontal="end" slot="fixed">
              <IonFabButton color="secondary">
                <IonIcon icon={qrScanner} size="large"></IonIcon>
              </IonFabButton>
            </IonFab>
          </IonContent>
        </IonPage>
      </IonSplitPane>

      {/*
      <Link to="/tab2" style={{position: 'absolute', bottom: 0}}>
        tab2
      </Link>
      <Link to="/tab3" style={{position: 'absolute', bottom: 0, right: 0}}>
        tab3
      </Link>
      */}
    </IonApp>
  )
}

export default App
