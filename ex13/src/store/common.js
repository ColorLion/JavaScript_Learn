export default{
    state:{
        bIsLoading: false,  // 시간초과 에러
        sErrorMessage: ''   // 처리 중 에러
    },
    mutations:{
        //처리 중 시간이 걸리는지 설정
        fnSetLoding(state, payload){
            state.bIsLoading = payload
        },
        fnSetErrorMessage(state, payload){
            state.sErrorMessage = payload
        }
    },
    getters:{
        //처리 중 시간이 걸리는지 반환
        fnGetLoading(state){
            return state.bIsLoading
        },
        //처리 중 에러메시지
        fnGetErrorMessage(state){
            return state.sErrorMessage
        }
    },
    actions:{
        
    }
}