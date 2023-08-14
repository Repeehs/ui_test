import apiService from "../utilities/request.service"

export const getListBookApi = async (page) => {
  return await apiService()({
    url: '/api/v1/books',
    method: "get",
    params: {
      page
    }
  }).then((res) => res.data)
}

export const createBookApi = async (data) => {
  const res = await apiService()({
    url: '/api/v1/auth/books',
    method: "post",
    data
  })
  console.log('createBookApi', res)
  return res
} 