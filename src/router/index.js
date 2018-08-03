import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Home from '@/components/Home'

import Content from '@/components/Content'
import ContentManager from '@/components/content/ContentManager'
import ContentAdd from '@/components/content/ContentAdd'

import Tags from '@/components/Tags'

import User from '@/components/User'
import UserManager from '@/components/user/UserManager'
import UserAddPanel from '@/components/user/UserAddPanel'

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
      redirect: '/content/contentManager',
      name: 'Content',
      component: Content,
      children:[
        {
          path: 'contentManager',
          name: 'ContentManager',
          component: ContentManager
        },
        {
          path: 'contentAdd',
          name: 'ContentAdd',
          component: ContentAdd
        }
      ]
    },
    {
      path: '/user',
      redirect: '/user/userManager',
      name: 'User',
      component: User,
      children:[
        {
          path: 'userManager',
          name: 'UserManager',
          component: UserManager
        },
        {
          path: 'userAddPanel',
          name: 'UserAddPanel',
          component: UserAddPanel
        }
      ]
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
