import axios from 'axios'
// mock
const getNews = async () => {
  let news = await axios.get('/news', {
    params: {}
  })
  .then(res => {
    // console.log(res)
    if (res.status === 200) {
      return res.data.news
    } else {
      return res
    }
  })
  .catch(error => {
    console.log(error)
    return error
  })
  return news
}
export default getNews
