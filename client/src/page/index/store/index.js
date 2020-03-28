import { observable, action } from 'mobx';

class A {
    @observable num = 0;
    @observable poilist = [];
    // constructor() {
    //     if ((typeof window !== undefined)) {
    //         const { poilist = [], num = 0 } = window.__INITIAL_STATE__ || {};
    //         this.num = num;
    //         this.poilist = poilist
    //     }
    // }

    @action replace({ num, poilist }) {
        this.num = num;
        this.poilist = poilist
    }

    @action plus = () => {
        this.num = this.num + 1;
        console.log(this.num);
    }
    @action minus = () => {
        this.num -= 1;
    }
}



export default new A()