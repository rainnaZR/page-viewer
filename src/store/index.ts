import {reactive} from 'vue'

let pageFrameData = reactive({})

const setPageFrameData = (value: any) => {
    pageFrameData = value
}

export {
    pageFrameData,
    setPageFrameData,
}