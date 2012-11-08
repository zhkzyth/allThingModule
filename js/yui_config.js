//YUI全局配置项
var YUI_config = {
   groups: {
      'local-modules': {
         base: './js/local-modules/',
         modules: {
            'reptiles-core': {
               path: 'reptiles-core/reptiles-core.js',
               requires: ['node', 'reptiles-stomp', 'reptiles-fiery-breath'],
               skinnable: true
            },
            'reptiles-stomp': {
               path: 'reptiles-stomp/reptiles-stomp.js'
            },
            'reptiles-fiery-breath': {
               path: 'reptiles-fiery-breath/reptiles-fiery-breath.js'
            },
            'samurai': {
               path: 'samurai/samurai.js'
            }
         }
      }
   }
};