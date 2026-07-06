import {Link} from "react-router-dom"

const projects=[
    {path:"/counter", name:"Counter App"},
    {path:"/todo", name:"Todo App"},
    {path:"/meals", name:"Meals App"},
    {path:"/calculator", name:"Calculator"},
    {path:"/color-toggle", name:"Color Toggle"}
]


const Home = () => {
  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>Muneeba's React Mini Projects</h1>
      <ul style={{listStyle:"none"}}>
        {projects.map((p) => (
          <li key={p.path} style={{ margin: '10px 0' }}>
            <Link to={p.path}>{p.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home