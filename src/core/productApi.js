import axiosClient from "./api"

const productApi = {
  getAll(params) {
    const url = '/graph'
    return axiosClient.get(url, { params })
  },

  get(id) {
    const url = `/graph/${id}`
    return axiosClient.get(url)
  },
  add(data) {
    const url = '/graph'
    return axiosClient.post(url, data)
  },

  update(data) {
    const url = `/graph/${data.id}`
    return axiosClient.patch(url, data)
  },
  remove(id) {
    const url = `/graph/${id}`
    return axiosClient.delete(url)
  }
}

export default productApi