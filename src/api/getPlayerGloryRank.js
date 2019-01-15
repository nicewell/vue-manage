import server from '@/api/server'
/**
 * 获取数据选手数据
 */
const getPlayerGloryRank = async () => {
  let data = await server({
    url: 'api/getPlayerGloryRank',
    method: 'get',
    params: {
      appid: '10005',
      seasonid: 'KPL2018S1'
    }
  })
  return data.data
}
export default getPlayerGloryRank
