import { UPDATE_AND_DELETE_IMAGE_END_POINT } from './settings.js'

export default async function deleteImage(id){
        console.log(id)
        return fetch(UPDATE_AND_DELETE_IMAGE_END_POINT + id, {
        method: 'DELETE',
    })
    .then(res => {
        console.log(res)
        return { 'ok':res.ok }
    })
    .catch(res => console.error('error: ', res))

}