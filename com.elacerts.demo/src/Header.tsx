import React, { useState, useEffect } from "react"
import {
  IonButtons,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonToolbar,
  IonPopover,

  IonList,
  IonListHeader,
  IonButton,
  IonLabel,

  IonContent,
  IonModal,
  IonItem,

  IonAlert,
  IonCard,
  IonCardContent,

  IonInput,
  IonTextarea,
  IonSelect,
  IonSelectOption

} from "@ionic/react"
import {addCircle} from "ionicons/icons"
import { useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { ActionAddCert, Cert } from './store/redux/certificate'
import { signWithDID } from './service/signWithDID'

const Header: React.FC = (props) => {

  let history = useHistory()
  const [showModal, setShowModal] = useState(false)
  const [showPopover, setShowPopover] = useState(false)
  const [showPlaceholder, setShowPlaceholder] = useState(false)

  const Header = (<IonHeader className={'header-main'}>
    <IonToolbar>
      <IonButtons slot="start">
        <IonMenuButton></IonMenuButton>
      </IonButtons>
      <IonButtons slot="end">
        <IonPopover
          isOpen={showPopover}
          onDidDismiss={e => setShowPopover(false)}
        >
          <IonList>
            <IonListHeader>
              <IonLabel color="medium">
                Create
              </IonLabel>
            </IonListHeader>

            {/* Clicking New Certificate replaces the location with the Certificate List, then opens the modeal */}
            <IonButton color="secondary" expand="block" onClick={() => {
              history.replace('/list')
              setShowPopover(false)
              setShowModal(true)
            }}>
              New Certificate
            </IonButton>
            <IonButton color="secondary" expand="block" onClick={() => {
              setShowPopover(false)
              setShowPlaceholder(true)
            }}>
              Add Student
            </IonButton>
            <IonButton color="light" expand="block" onClick={() => setShowPopover(false)}>
              Close
            </IonButton>
          </IonList>
        </IonPopover>
        <IonIcon icon={addCircle} size="large" onClick={() => setShowPopover(true)}/>
      </IonButtons>
    </IonToolbar>

    <IonAlert
      isOpen={showPlaceholder}
      onDidDismiss={() => setShowPlaceholder(false)}
      message="Not Available in Demo"
    />

    <CreateCertModal showModal={showModal} setShowModal={setShowModal}/>
  </IonHeader>)

  return Header
}

const CreateCertModal: React.FC<any> = (props) => {

  const {showModal, setShowModal, certificate} = props

  const [ studentId, setStudentId ] = useState('')
  const [ degree, setDegree ] = useState('')
  const [ year, setYear ] = useState<Number>()
  const [ notes, setNotes ] = useState('')

  const dispatch = useDispatch()

  const submit = async () => {
    /*
    const proof = await signWithDID({
      studentId,
      degree,
      year,
      notes
    })
    */
    await dispatch(ActionAddCert({
      studentId,
      degree,
      year,
      notes
    } as Cert))
    setShowModal(false)
  }

  return (
    <IonModal isOpen={showModal}>
      <IonHeader>
        <IonItem>
          <IonLabel color="dark">
            Create Certificate
          </IonLabel>
        </IonItem>
      </IonHeader>
      <IonContent>
        <IonCard mode="ios" style={{"top": 0}}>
          <form onSubmit={(ev) => {
            ev.preventDefault()
            submit()
          }}>
            <IonCardContent>
              <IonList>
                <IonItem>
                  <IonLabel>Student</IonLabel>
                  <IonSelect placeholder="Select One" onIonChange={(ev) => {
                    setStudentId(ev.detail.value)
                  }}>
                    <IonSelectOption value="1234">John Smith</IonSelectOption>
                    <IonSelectOption value="2222">Mary Jane</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonLabel>Degree</IonLabel>
                  <IonSelect placeholder="Select One" onIonChange={(ev) => {
                    setDegree(ev.detail.value)
                  }}>
                    <IonSelectOption value="Arts">Arts</IonSelectOption>
                    <IonSelectOption value="Engineering">Engineering</IonSelectOption>
                    <IonSelectOption value="Biology">Biology</IonSelectOption>
                    <IonSelectOption value="Chemistry">Chemistry</IonSelectOption>
                    <IonSelectOption value="Physics">Physics</IonSelectOption>
                  </IonSelect>
                </IonItem>
                <IonItem>
                  <IonLabel>Year</IonLabel>
                  <IonInput placeholder="Enter Year" type="number" slot="end" required={true} onIonBlur={(ev: any) => {
                    setYear(ev.target.value)
                  }}/>
                </IonItem>
                <IonItem>
                  <IonLabel>Notes</IonLabel>
                  <IonTextarea onIonBlur={(ev: any) => {
                    setNotes(ev.target.value)
                  }}/>
                </IonItem>
              </IonList>
            </IonCardContent>
            <IonList>
              <IonButton expand="block" type="submit">Create</IonButton>
              <IonButton expand="block" color="medium" onClick={() => setShowModal(false)}>Cancel</IonButton>
            </IonList>
          </form>
        </IonCard>
      </IonContent>
    </IonModal>
  )
}

// this gets spread directly on props
const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    certificate: state.certificate
  }
}
connect(mapStateToProps)(CreateCertModal)


export default Header
