
import {observable} from 'mobx'

class globalStore  {
    @observable name = 'th'
}

export default new globalStore();