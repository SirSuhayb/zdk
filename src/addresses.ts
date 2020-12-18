import rinkebyAddresses from '@zoralabs/core/dist/addresses/4.json'

interface AddressBook {
  [key: string]: {
    [key: string]: string
  }
}

/**
 * Mapping from Network to Officially Deployed Instances of the Zora Media Protocol
 */
export const addresses: AddressBook = {
  rinkeby: rinkebyAddresses,
}
