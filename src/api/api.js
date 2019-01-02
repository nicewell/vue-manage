import axios from 'axios'

/**
 * 获取数据
 */
export const getPlayerGloryRank = async () => {
  let data = await axios.get('api/getPlayerGloryRank', {
    params: {
      appid: '10005',
      seasonid: 'KPL2018S1'
    }
  })
  .then(res => {
    return res.data.data
  })
  .catch(error => {
    return error
  })
  return data
}