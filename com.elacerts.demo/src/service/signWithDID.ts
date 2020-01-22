declare let appManager: AppManagerPlugin.AppManager
// declare let didManager: DIDPlugin.DIDManager

export function signWithDID(data) {

  return new Promise((resolve, reject) => {

    console.log('Running signWithDID 2', JSON.stringify(data))
    /**
     * Request some credentials to the DID application.
     */
    try {
      appManager.sendIntent("sign", data, {}, (response: any) => {
        console.log("DID sign access response received", JSON.stringify(response))

        resolve(response)
      }, (err) => {
        console.log('DID sign', err)
        reject(err)
      })
    } catch(err) {
      reject(err)
    }
  })
}

