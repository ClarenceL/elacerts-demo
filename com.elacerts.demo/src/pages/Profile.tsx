import React from 'react'
import {
  IonCard,

  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,

  IonButton,
  IonItem,
  IonLabel
} from '@ionic/react'

import '../css/main.css'

const Profile: React.FC = (props: any) => {

  return (
    <IonCard mode="ios" className="card-body">
      <IonCardHeader>
        <IonCardSubtitle>My Profile</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <IonItem>
          <IonLabel color="medium">
            Name
          </IonLabel>
          Clarence Liu
        </IonItem>
        <IonItem>
          <IonLabel color="medium">
            Country
          </IonLabel>
          Canada
        </IonItem>
      </IonCardContent>
    </IonCard>
  )
}

// Note: this calls bindActionCreators automatically and calls dispatch,
// don't use this if you want to use thunk/async actions
// const mapDispatchToProps = { ActionSetDID }


export default Profile

