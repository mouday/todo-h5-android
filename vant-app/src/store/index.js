import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 序列化数据
 */
function loadList() {
  let list = localStorage.getItem("list");

  if (list) {
    try {
      list = JSON.parse(list);
    } catch (e) {
      list = [];
    }
  } else {
    list = []
  }
  console.log(list);

  return list
}

/**
 * 反序列化数据
 */
function dumpList(list) {
  localStorage.setItem("list", JSON.stringify(list));
}

export default new Vuex.Store({
  state: {
    list: []
  },

  getters: {
    getList(state) {
      return state.list
    }
  },

  // 同步
  mutations: {

    addItem(state, item) {
      state.list.push(item)
      dumpList(state.list)
    },

    updateItem(state, data) {
      // console.log(data.index);
      // console.log(data.item);

      state.list[data.index] = data.item
      dumpList(state.list)
    },

    removeItem(state, index) {
      state.list.splice(index, 1)
      dumpList(state.list)
    },

    loadList(state) {
      state.list = loadList()
    },
  },

  // 异步
  actions: {
    addItem({
      commit
    }, item) {
      commit('addItem', item)
    },

    removeItem({
      commit
    }, index) {
      commit('removeItem', index)
    },

    updateItem({
      commit
    }, data) {
      commit('updateItem', data)
    },

    /**
     * 初始化list
     */
    loadList({
      commit
    }) {
      commit('loadList')
    }
  },
  modules: {}
})