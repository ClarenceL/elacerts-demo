declare let appManager: AppManagerPlugin.AppManager
declare let didManager: DIDPlugin.DIDManager

export function useSignIn(optionalCallback: any = noop) {
  const signIn = (claims: any) => {
    /**
     * Request some credentials to the DID application.
     */
    appManager.sendIntent("credaccess", { claims }, {}, (response: any) => {
      console.log("Credential access response received")

      if (response && response.result && response.result.presentation) {
        console.log("Received a presentation, so we are now signed in.")

        // Create a real presentation object from json data
        didManager.VerifiablePresentationBuilder.fromJson(JSON.stringify(response.result.presentation), (presentation)=>{
          const credentials = presentation.getCredentials()
          console.log("presentation", JSON.stringify(credentials))
          optionalCallback(response.result.did, credentials)
        })
      }
    })
  }
  return [signIn] as [(obj: any) => void]
}

function noop() {}
