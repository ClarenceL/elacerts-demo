import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import {IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar, IonMenuToggle} from "@ionic/react"
import {listBox, contact, school, exit} from "ionicons/icons"
import { Link } from 'react-router-dom'

import { ActionLogout } from './store/redux/profile'

const Menu: React.FC = () => {

  const dispatch = useDispatch()

  const Menu = (<IonMenu side="start" contentId="main">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>ElaCerts Demo</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList style={{"backgroundColor": "rgba(255, 255, 255, 0.4)"}}>
        <IonMenuToggle>
          <Link to="/profile">
            <IonItem>
              <IonIcon icon={contact} slot="start"></IonIcon>
              <IonLabel>Your DID</IonLabel>
            </IonItem>
          </Link>
        </IonMenuToggle>
        <IonMenuToggle>
          <Link to="/list">
            <IonItem>
              <IonIcon icon={listBox} slot="start"></IonIcon>
              <IonLabel>Certificate List</IonLabel>
            </IonItem>
          </Link>
        </IonMenuToggle>
        <IonMenuToggle>
          <Link to="/students">
            <IonItem>
              <IonIcon icon={school} slot="start"></IonIcon>
              <IonLabel>Students</IonLabel>
            </IonItem>
          </Link>
        </IonMenuToggle>
        <IonMenuToggle>
          <IonItem onClick={() => {console.log('logout');dispatch(ActionLogout())}}>
            <IonIcon icon={exit} slot="start"></IonIcon>
            <IonLabel>Disconnect DID</IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>
  )

  return Menu
}


// this gets spread directly on props
const mapStateToProps = (state, ownProps) => {
  return {profile: state.profile}
}

export default connect(mapStateToProps)(Menu)
