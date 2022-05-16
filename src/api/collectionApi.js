import axiosClient from "./axiosClient"

const collectionApi = {
  getAll(params) {
    const url = '/collections'
    return axiosClient.get(url, { params })
  },

  get(id) {
    const url = `/collections/${id}`
    return axiosClient.get(url)
  },
  add(data) {
    const url = '/collections'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/collections/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id) {
    const url = `/collections/${id}`
    return axiosClient.delete(url)
  }
}

export default collectionApi