module.exports = {
    pwa:{
        workboxOptions: {
            runtimeCaching: [{
                urlPattern: /\.jpg$/,
                handler: 'cacheFirst',
                options:{
                    cacheName: 'jpg-cache',
                    expiration:{
                        maxEntries: 10,
                        maxAgeSeconds: 60 * 60 * 24 * 365
                    }
                }
            },
            {
                urlPattern: /\.json$/,
                handler: 'staleWhileRevalidate',
                options:{
                    cacheName:'json-cache',
                    cacheableResponse: { statuses: [200] }
                },
            }
        ],
        }
    },
    devServer: {
        disableHostCheck: true
    },
    
    transpileDependencies: [
      'vuetify'
    ]
}
