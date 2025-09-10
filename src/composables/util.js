import { ElNotification,ElMessageBox } from 'element-plus'
import nprogress from 'nprogress'
export function toast(message,type="success",dangerouslyUserHTMLString=true){
    ElNotification({
        message,
        type,
        dangerouslyUserHTMLString,
        duration:3000
      })
}
 
export function showModal(content="提示内容",type="warning",title=""){
  return ElMessageBox.confirm(
    content,
    title,
    {
      confirmButtonText: '确认',
      cancelButtonText: '取消',
      type,
    }
  )
}

//弹出输入框
export function showPrompt(tip,value = ""){
  return ElMessageBox.prompt(tip,'', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    inputValue:value
  })
}

//显示全屏loading
export function showFullLoading(){
  nprogress.start()
}
//隐藏全屏loading
export function hideFullLoading(){
  nprogress.done()
}