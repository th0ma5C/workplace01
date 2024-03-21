#
頭尾新增一複製數據，切換至複製數據且完成動畫後，停用動畫，跳回頭或尾，完成無限輪播

參考: https://ferrari0913.medium.com/%E4%BD%BF%E7%94%A8%E7%B4%94javascript%E5%AF%A6%E7%8F%BE%E8%BC%AA%E6%92%AD%E5%8A%9F%E8%83%BD-%E5%BE%AA%E7%92%B0%E8%88%87%E7%84%A1%E9%99%90%E5%88%87%E6%8F%9B-c17685bb2661

TBD: 使用 Vue 的 transition-group 完成。(須對數據進行操作，切需唯一:key，css的.v-move才會有作用，並在transition-group上使用vue提供的事件監聽回調)