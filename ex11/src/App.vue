<template>
  <v-app>
    <!-- 전체 영역을 카드 ui로 변경-->
    <v-card>
      <v-app-bar dark color="lime">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>You-Do List</v-toolbar-title>
      </v-app-bar>
      <v-content>
        <v-container>
          <v-row my-5>
            <v-col cols="8" offset="1">
              <!-- 오토 포커스-->
              <v-text-field label="You-Do" autofocus v-model="sTodoTitle"></v-text-field>
            </v-col>
            <v-col cols="2" my-2>
              <v-btn
                fab
                max-height="50px"
                max-width="50px"
                color="pink"
                dark
                @click="fnSubmitTodo()">
                <v-icon>add</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12">
              <v-list two-line v-for="item in oTodos":key="item.key">
                <v-card flat color="grey lighten-3" v-if="!item.b_edit">
                  <!--항목을 하나씩 가져와서 title 단위로 표시-->
                  <v-list-item class="py-2">
                    <v-list-item-action>
                      <!--체크박스 표시하고 선택 시 변경 상태를 DB에 저장-->
                      <v-checkbox
                        v-model="item.b_completed"
                        @change="fnCheckboxChange(item)"></v-checkbox>
                      <!--제목을 표시하고 체크 선택 시 취소선-->
                      <v-list-item-content>
                        <v-list-item-title
                          :class="{ 'style_completed': item.b_completed}">
                          {{item.todo_title}}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item-action>
                  </v-list-item>
                </v-card>
              </v-list>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
};
</script>
