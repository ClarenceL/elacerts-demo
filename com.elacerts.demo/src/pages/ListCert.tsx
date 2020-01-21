import React from 'react'
import {
  IonList,
  IonItem,
  IonItemSliding,
  IonLabel,
  IonItemOptions,
  IonItemOption,
  IonCard,

  IonCardHeader,
  IonCardSubtitle
} from '@ionic/react'

import '../css/main.css'

const ListCert: React.FC = () => {

  return (
    <IonCard mode="ios" className="card-body">
      <IonCardHeader>
        <IonCardSubtitle>Certificates</IonCardSubtitle>
      </IonCardHeader>
      <IonList style={{"padding": "15px"}}>
        {/*
        <IonItemSliding>
          <IonItem>
            <IonLabel>Item</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Archive</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
        */}
      </IonList>
    </IonCard>
  )
}

export default ListCert
