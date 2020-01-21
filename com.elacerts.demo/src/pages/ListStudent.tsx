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
  IonCardSubtitle, IonCardContent
} from '@ionic/react'

import '../css/main.css'

const ListStudent: React.FC = () => {

  return (
    <IonCard mode="ios" className="card-body">
      <IonCardHeader>
        <IonCardSubtitle>Students</IonCardSubtitle>
      </IonCardHeader>
      <IonList style={{"padding": "15px"}}>
        <IonItemSliding>
          <IonItem>
            <IonLabel>John Smith</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Remove</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>

        <IonItemSliding>
          <IonItem>
            <IonLabel>Mary Jane</IonLabel>
          </IonItem>
          <IonItemOptions side="end">
            <IonItemOption onClick={() => {}}>Remove</IonItemOption>
          </IonItemOptions>
        </IonItemSliding>
      </IonList>

      <IonCardContent>
        <b>Demo Version</b>
        <p>Viewing/adding students is unavailable</p>
      </IonCardContent>
    </IonCard>
  )
}

export default ListStudent
