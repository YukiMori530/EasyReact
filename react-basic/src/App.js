//项目的根组件
//App->index.js->public/index.html(root)
import { useState } from 'react'
import './index.css'

function getName(){
  return 'jack'
}

const list=[
  {id:1,name:'jack'},
  {id:2,name:'rose'},
  {id:3,name:'lucy'},
]

const flag=true

//定义文章类型
const articleType=1 //0 1 3

//核心函数（根据文章类型返回不同的JSX模板）
function renderArticle(){
  if(articleType===0){
    return <div>this is article type 0</div>
  }else if(articleType===1){
    return <div>this is article type 1</div>
  }else if(articleType===3){
    return <div>this is article type 3</div>
  }
}

const handleClick=(e)=>{
  alert('hello')
  console.log(e)
}

function App() {
  const [count, setCount]=useState(0)

  return (
    <div className="App">
      this is App
      {'this is message'}
      {count}
      {getName()}
      {new Date().toLocaleDateString()}
      
      <div style={{color: 'red'}}>this is div</div>

      <ul>
        {list.map(item=><li key={item.id}>{item.name}</li>)}
      </ul>

      {flag && <span>this is span</span>}
      {!flag && <span>this is span</span>}
      {flag ? <span>jack</span> : <span>this is span</span>}
      {renderArticle()}

      <button onClick={handleClick}>click me</button>
      <button onClick={(e)=>{alert('hello')}}>click me</button>
      <button onClick={()=>{setCount(count+1)}}>{count}</button>
    </div>
  );
}

export default App;
