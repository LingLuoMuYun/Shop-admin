import { ElNotification } from 'element-plus'

export function toast(message,type="success",dangerouslyUserHTMLString=false){
    ElNotification({
        message,
        type,
        dangerouslyUserHTMLString,
        duration:3000
      })
}