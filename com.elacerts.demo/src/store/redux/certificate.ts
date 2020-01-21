/**
 * Redux - Certs
 */


export enum CertActionTypes {
  ADD_CERT = 'ADD_CERT'
}


export const ActionAddCert = (cert) => ({
  type: CertActionTypes.ADD_CERT,
  cert
})

/*
*************************************************************************************
* Store Schema
*************************************************************************************
 */
export interface Cert {
  studentId: string,
  degree: string,
  year: number,
  notes: string
}

export interface CertState {
  certs: Array<Cert>
}

const initialState: CertState = {
  certs: []
}

export default {
  certificate: (state: CertState = initialState, action) => {

    switch (action.type) {
      case CertActionTypes.ADD_CERT:

        let certs = state.certs.slice(0)
        certs.push(action.cert)

        return {
          certs
        }
    }

    return state
  }
}
