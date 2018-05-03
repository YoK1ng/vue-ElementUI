import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import left from '@/components/left'
import home from '@/components/home'

import vform from '@/components/form'
import vtable from '@/components/table'
import echarts from '@/components/echarts'
import editor from '@/components/mavonEditor'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)

Vue.use(Router)

export default new Router({
	mode:'history',
	routes: [
		{
			path: '/',
			component: index,

			children: [{
				path: '/',
				component: left,

				children: [
					{path: '/',name:"home",component: home},
					{path: 'form',name:"form",component: vform},
					{path: 'table',name:"table",component: vtable},
					{path: 'echarts',name:"echarts",component: echarts},
					{path: 'editor',name:"editor",component: editor},
				]
			}]
		},
	]
})