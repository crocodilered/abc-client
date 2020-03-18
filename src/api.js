import { SERVER_URL } from '@/config'
import axios from 'axios'


class Sign {
  constructor(row) {
    this.name = row[0]
    this.profession = row[1]
    this.comments = row[2]
    this.published = row[3]
    this.serial = row[4]
  }

  set published (val) {
    this._published = new Date(val * 1000)
  }

  get published () {
    return this._published.toLocaleString()
  }
}


export default {

  // Writes sign attemp with @payload
  sign (payload) {
    return axios.post(`${SERVER_URL}/signs/create/`, payload)
  },


  // List 100 records from @offset
  list (offset) {
    return new Promise((resolve, reject) => {
      axios.get(`${SERVER_URL}/signs/list/${offset}/`)
        .then(resp => {
          const list = []
          for (let i in resp.data.list) {
            list.push(new Sign(resp.data.list[i]))
          }
          resolve(list)
        })
        .catch(error => reject(error))
    })
  },

  // Search sign by @name
  search (name) {
    return axios.get(`${SERVER_URL}/signs/search/?name=${name}`)
  },


  // Confirm sign by @secretKey
  publish (secretKey) {
    return new Promise((resolve, reject) => {
      axios.put(`${SERVER_URL}/signs/publish/`, { 'secret_key': secretKey })
        .then(resp => resolve(new Sign(resp.data.sign)))
        .catch(error => reject(error))
    })
  },

  // Statistic data
  statistics () {
    return axios.get(`${SERVER_URL}/signs/statistics/`)
  }

}
