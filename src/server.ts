import {serverHttp, io} from "./app"

serverHttp.listen(4000, ()=>{
    console.log(`:rocket server is running on port 4000`)
})