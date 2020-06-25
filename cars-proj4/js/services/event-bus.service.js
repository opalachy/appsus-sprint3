
export const EVENT_SHOW_MSG = 'show-msg'
export const EVENT_PUK = 'go-puk'

const bus = new Vue();

// bus.$on(EVENT_PUK, (data)=>{
//     console.log('Got Puk!', data);
// })

// bus.$emit(EVENT_PUK, 9)
// bus.$emit(EVENT_PUK, 9)
// bus.$emit(EVENT_PUK, 9)
// bus.$emit(EVENT_PUK, 9)





export const eventBus = bus;