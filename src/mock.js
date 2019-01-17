import Mock from 'mockjs'
// 获取 mock.Random 对象
const Random = Mock.Random
// mock一组数据
const produceNews = () => {
  let news = []
  for (let i = 0; i < 5; i++) {
    let _news = {
      title: Random.csentence(20, 40),
      article: Random.cparagraph(2, 5),
      pic: Random.dataImage('200x200'),
      url: Random.url(),
      author: Random.cname(),
      date: Random.now()
    }
    news.push(_news)
  }

  return {
    news
  }
}

Mock.mock('/news', 'get', produceNews)
