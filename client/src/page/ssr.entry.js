import Index from './index/app'
import IndexStore from './index/store/index'


export default {
    '/index.html': { App: Index, AppStore: IndexStore }
}