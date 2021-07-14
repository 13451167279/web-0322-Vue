import Vue from 'vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(ElementUI)
import { Button, Message, MessageBox } from 'element-ui'
Vue.use(Button)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
