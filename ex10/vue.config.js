module.exports = {
    pwa:{
        workboxOptions: {
            // 프리 캐시 파일 지정
            include: [/^index\.html$/, /\.css$/, /\.js$/, /^manifest\.json$/, /\.png$/],
            // 반드시 써둬야 제대로 동작
            exclude: []
        }
    }
}
