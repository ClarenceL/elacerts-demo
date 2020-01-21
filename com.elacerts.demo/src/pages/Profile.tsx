import React from 'react'
import {
  IonCard,

  IonCardHeader,
  IonCardSubtitle,
  IonCardContent
} from '@ionic/react'

import '../css/main.css'

const Profile: React.FC = () => {

  return (
    <IonCard mode="ios" className="card-body">
      <IonCardHeader>
        <IonCardSubtitle>My Profile</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Hello World
      </IonCardContent>
    </IonCard>
  )
}

export default Profile
