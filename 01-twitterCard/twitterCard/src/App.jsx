import TwitterFollowCard from './components/TwitterFollowCard/TwitterFollowCard'
import './style/App.css'

export default function App() {
  return (
    <div className='app'>
      <TwitterFollowCard name={"Pedro Gonzalez"} userName={"PepeAR"} imgSrc={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"} initialIsFollowing={true} />
      <TwitterFollowCard name={"Armando Dippet"} userName={"ArmiD"} imgSrc={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"} />
      <TwitterFollowCard name={"Albus Dumbledor"} userName={"AlbusReliquias"} imgSrc={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"} />
      <TwitterFollowCard name={"Severus Snape"} userName={"PrincipeM"} imgSrc={"https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png"} />
    </div>
  )
}
