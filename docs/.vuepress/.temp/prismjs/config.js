import "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/var/www/vhosts/soundjaeger.com/class.soundjaeger.com/node_modules/@vuepress/highlighter-helper/lib/client/index.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
