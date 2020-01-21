import React, { useState } from 'react'
import {IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar, IonMenuToggle} from "@ionic/react"
import {listBox, contact, school} from "ionicons/icons"
import { Link } from 'react-router-dom'
import { menuController } from '@ionic/core'

const Menu: React.FC = () => {

  const [menuIsOpen, setMenuIsOpen] = useState(false)



  const open = () => {
    console.log('open')
  }

  const close = () => {
    console.log('close')
  }

  console.log('test')

  const Menu = (<IonMenu side="start" contentId="main" onIonDidOpen={() => open} onIonDidClose={() => close}>
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
      </IonList>
    </IonContent>
  </IonMenu>
  )

  return Menu
}

export default Menu
