import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { mermaidWrapperPlugin } from 'vuepress-plugin-mermaid-wrapper'

export default defineUserConfig({
  lang: 'en-US',

  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',
	
    navbar: ['/', '/get-started' , 'Test-Page'],	  	  
  }),
	
	plugins: [
    mermaidWrapperPlugin({
      /* options */
    }),
  ],
  bundler: viteBundler(),
})
