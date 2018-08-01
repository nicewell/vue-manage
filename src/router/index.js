import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Content from '@/components/Content'
import Tags from '@/components/Tags'
import User from '@/components/User'
import UserSearch from '@/components/UserSearch'

Vue.use(Router)


export default new Router({
  routes: [
  	{
  	  path: '/',
  	  name: 'Index',
  	  component: Index
  	},
    {
      path: '/content',
      name: 'Content',
      component: Content
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/user-search',
      name: 'UserSearch',
      component: UserSearch
    },
    {
      path: '/tags',
      name: 'Tags',
      component: Tags
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
