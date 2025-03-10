import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { mermaidWrapperPlugin } from 'vuepress-plugin-mermaid-wrapper'

export default defineUserConfig({
  lang: 'zh-TW',

  title: 'Sound Jaeger',
  description: 'Everything You Need To Know About Sound',

  theme: defaultTheme({
    logo: 'https://soundjaeger.com/wp-content/uploads/資產-33.svg',
	
    navbar: ['/', '/get-started' , 'Test-Page','/Services'],	  	  
  }),
	
	plugins: [
    mermaidWrapperPlugin({
      /* options */
    }),
  ],
  bundler: viteBundler(),
})
