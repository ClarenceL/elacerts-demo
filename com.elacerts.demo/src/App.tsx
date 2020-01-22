import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonContent,
  IonPage,
  IonButtons,
  IonMenuButton,
  IonSplitPane,

  IonFab,
  IonFabButton,

} from '@ionic/react'
import {
  addCircle,
  qrScanner
} from 'ionicons/icons'

import Menu from './Menu'
import Header from './Header'

import ListCert from './pages/ListCert'
import ListStudent from './pages/ListStudent'
import Profile from './pages/Profile'
import Details from './pages/Details'
import Loading from './pages/Loading'

import { connect, useDispatch } from 'react-redux'

import { useSignIn } from './hooks/useSignIn'

import { ActionSetDID, ActionSetInfo, ActionLoggingIn, ProfileState } from './store/redux/profile'

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


const App: React.FC = (props: any) => {

  const profile = (props.profile as ProfileState)
  const dispatch = useDispatch()

  // TODO: redo with Thunk
  const [signIn] = useSignIn((did: string, credentials:any) => {

    if(credentials.length) {
      const user = credentials[0].credentialSubject
      const {name, country} = user

      dispatch(ActionSetInfo({name, country}))
      dispatch(ActionSetDID(did))
    }
  })

  // console.log("profile", JSON.stringify(profile))
  if (profile.did === null && profile.loading === false) {
    dispatch(ActionLoggingIn())
    signIn({name: true})
    return <Loading></Loading>
  }

  return (
    <IonApp>
        <IonSplitPane contentId="main">

        <Menu/>

        <IonPage id="main">
          <Header/>
          <IonContent className="app">
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

    </IonApp>
  )
}

// this gets spread directly on props
const mapStateToProps = (state) => {
  return {profile: state.profile}
}

export default connect(mapStateToProps)(App)
