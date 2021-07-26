import firebase from "firebase/app";

import "firebase/firebase-auth";
import router from "@/router/index.js"

export default{
    state:{
        oUser: null
    },
    mutations:{
        //사용자 객체 저장
        fnSetUser(state, payload){
            state.oUser = payload;
        }
    },
    getters:{
        //사용자 객체 반환
        fnGetUser(state){
            return state.oUser;
        },
        fnGetAuthStatus(state){
            return state.oUser != null;
        }
    },
    actions:{
        //이메일 회원가입
        fnRegisterUser({commit}, payload){
            commit("fnSetLoading", true);
            
            //파이어베이스 이메일 회원 생성 및 저장
            firebase
                .auth()
                .createUserWithEmailAndPassword(payload.pEmail, payload.pPassword)
                .then(pUserInfo => {
                    //신규 회원정보를 이메일 스토어에 저장
                    commit("fnSetUser", {
                        email: pUserInfo.email
                    });
                    commit("fnSetLoading", false);
                    commit("fnSetErrorMessage", "");
                    router.push(".main");
                })
                .catch(err => {
                    commit("fnSetErrorMessage", err.message);
                    commit("fnSetLoading", false);
                });
        },
        fnDoLogin({commit}, payload) {
            commit("fnSetLoading", true);

            // 파이어베이스 이메일 로그인 및 인증
            firebase
                .auth()
                .signInWithEmailAndPassword(payload.pEmail, payload.pPassword)
                .then(pUserInfo => {
                    //로그인에 성공하면 스토어에 계정정보 저장
                    commit("fnSetUser", {
                        id: pUserInfo.uid,
                        name: pUserInfo.displayName,
                        email: pUserInfo.email,
                        photoURL: pUserInfo.photoURL
                    });
                    commit("fnSetLoading", false);
                    commit("fnSetErrorMessage", "");
                    router.push(".main");
                })
                .catch(err => {
                    commit("fnSetErrorMessage", err.message);
                    commit("fnSetLoading", false);
                });
        },
        fnDoGoogleLogin_Popup({commit}){
            commit("fnSetLoading", true);
            var oProvider = new firebase.auth.GoogleAuthProvider();
            oProvider.addScope("profile");
            oProvider.addScope("email");
            firebase
                .auth()
                .signInwithPopup(oProvider)
                .then(pUserInfo => {
                    commit("fnSetUser", {
                        id: pUserInfo.uid,
                        name: pUserInfo.displayName,
                        email: pUserInfo.email,
                        photoURL: pUserInfo.photoURL 
                    });
                    commit("fnSetLoading", false);
                    commit("fnSetError", "");
                    router.push("/main");
                })
                .catch(err => {
                    commit("fnSetErrorMessage", err.message);
                    commit("fnSetLoading", false);
                });
        },
        fnDoLoginAuto({commit}, pUserInfo){
            commit("fnSetUser", {
                id: pUserInfo.uid,
                name: pUserInfo.displayName,
                email: pUserInfo.email,
                photoURL: pUserInfo.photoURL 
            });
            commit("fnSetLoading", false);
            commit("fnSetError", "");
        },
        fnDoLogout({commit}){
            firebase.auth().signOut();
            commit("fnSetUser", null);
            router.push("/");
        }
    }
};