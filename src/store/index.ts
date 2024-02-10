import { create } from "zustand";

// 保存する状態の型を定義
type EditTask = {
        id:number
        title:string
}

// 状態の操作の型を定義
type State = {
        editedTask: EditTask
        updateEditedTask:(payload : EditTask) => void
        resetEditedTask:() => void
}

// 状態操作の具体
// 初期化、操作１、操作２のじゅん
const useStore = create<State>((set) =>({
        editedTask:{id:0,title:''},
        updateEditedTask:(payload) =>
        set({
                editedTask:payload,
        }),
        resetEditedTask:() => set({editedTask:{id:0,title:''}})
}))

export default useStore