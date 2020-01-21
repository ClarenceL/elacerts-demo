import React from 'react'
import {
  IonList,
  IonItem,
  IonItemSliding,
  IonLabel,
  IonButton,
  IonNote,
  IonCard,
  IonIcon,

  IonCardHeader,
  IonCardSubtitle, IonCardContent
} from '@ionic/react'

import '../css/main.css'
import {connect} from "react-redux"
import qrIcon from '../static/1024px-QR_icon.svg.png'
import {
  cloudUpload
} from 'ionicons/icons'

// hack for now
const students = {
  '1234': 'John Smith',
  '2222': 'Mary Jane'
}

const ListCert: React.FC = (props: any) => {

  return (
    <IonCard mode="ios" className="card-body">
      <IonCardHeader>
        <IonCardSubtitle>Certificates</IonCardSubtitle>
        <IonLabel color="dark">
          Download a QR code to add to a physical certificate,
          then you can upload it as a permanent blockchain record.
        </IonLabel>
      </IonCardHeader>
      {props.certificate.certs.length === 0 ?
        <IonCardContent>
          <br/>
          No Certificates
        </IonCardContent> :
        <IonList style={{"padding": "15px"}}>
          {props.certificate.certs.map((cert) => {
            return <IonItem key={cert.degree + cert.studentId}>
              <IonLabel>
                <h2>{cert.degree}</h2>
                <h3 style={{color: '#777'}}>{students[cert.studentId]}</h3>
                <h5>Year: {cert.year}</h5>
              </IonLabel>
              <IonIcon icon={cloudUpload} size="large" slot="end"/>
              <img src={qrIcon} style={{width: '50px', height: '50px'}}/>
            </IonItem>
          })}
        </IonList>
      }
    </IonCard>
  )
}

const mapStateToProps = (state) => ({
  certificate: state.certificate
})

export default connect(mapStateToProps)(ListCert)
