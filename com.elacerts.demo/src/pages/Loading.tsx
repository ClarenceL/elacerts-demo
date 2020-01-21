import React from 'react'
import { IonLoading, IonPage, IonContent } from '@ionic/react'

const Loading: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonLoading
          isOpen={true}
          message={'Loading...'}
        />
      </IonContent>
    </IonPage>
  )
}

export default Loading
