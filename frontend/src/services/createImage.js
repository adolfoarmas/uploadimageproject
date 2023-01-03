import { IMAGES_END_POINT } from './settings.js'

export default async function createImage(payload){
  return fetch(IMAGES_END_POINT, {
      method: 'POST',
      "Content-Type": 'multipart/form-data',
      body: payload,
  })
  .then(res => {
    return { 'ok':res.ok, 'data': res.json() }
  })
  .catch(res => console.error('error: ', res))

}