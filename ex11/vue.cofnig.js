module.exports = {
    pwa:{
        // GenerateSW는 기본값, 모드 선언을 생략
        workboxPluginMode: 'generateSW',
        workboxOptions:{
            // 프리캐시 지정
            include: [/^index\.html$/, /\.css$/, /\.js$/, /^manifest\.json$/, /\.png$/],
            runtimeCaching: [{
                // 런타임캐시 옵션
                // exclude는 없어도 작성해야 제대로 동작한다
                exclude: []
            }]
            
        }
    }
}