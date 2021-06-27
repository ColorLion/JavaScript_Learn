// 캐시 제목과 캐시 할 파일 선언
const sCacheName = 'hello-pwa-v2';
const aFilesToCache = [
    './', 
    './index.html', 
    './manifest.json', 
    './images/hello-pwa.png'
];

// 서비스 워커 설치하고 캐시 파일 저장
self.addEventListener('install', pEvent => {
    console.log('서비스 워커 설치');
    pEvent.waitUntil(
        caches.open(sCacheName)
         .then(pCache => {
             console.log('파일을 캐시에 저장!');
             return pCache.addAll(aFilesToCache);
         })
    );
});

// 고유 번호를 할당 받은 서비스 워커 작동
self.addEventListener('activate', pEvent => {
    console.log('서비스 워커 시작');
});

// 데이터 요청을 받으면 네트워크 또는 캐시에서 찾아 반환
self.addEventListener('fetch', pEvent => {
    pEvent.respondWith(
        caches.match(pEvent.request)
         .then(response => {
            if (!response) {
                console.log("네트워크에서 데이터 요청!", pEvent.request);
                return fetch(pEvent.request);
            }
            console.log("캐시에서 데이터 요청!", pEvent.request);
            return response;
         }).catch(err => console.log(err))
    );
});
