import server from '@/api/server'
/**
 * 获取周MPV选手数据
 */
const getPlayerWeekMvp = async () => {
  let data = await server({
    url: 'api/getPlayerWeekMvp',
    method: 'get',
    params: {
      appid: '10005',
      seasonid: 'KPL2018S1',
      weekid: 5,
      mtype: 2,
      region: 1
    }
  })
  return data.data
}
export default getPlayerWeekMvp

