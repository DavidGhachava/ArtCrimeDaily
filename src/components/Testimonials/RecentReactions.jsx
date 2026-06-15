import ashleyAvatar from '../../assets/avatars/ashley.svg'
import emilyAvatar from '../../assets/avatars/emily.svg'
import kaylaAvatar from '../../assets/avatars/kayla.svg'
import madisonAvatar from '../../assets/avatars/madison.svg'
import './RecentReactions.css'

const reactions = [
  {
    avatar: madisonAvatar,
    name: 'Madison',
    text: 'SOOO CUTEEE 😭',
  },
  {
    avatar: emilyAvatar,
    name: 'Emily',
    text: 'IM IN LOVEEE',
  },
  {
    avatar: kaylaAvatar,
    name: 'Kayla',
    text: 'ITS MY NEW WALLPAPER 💗',
  },
  {
    avatar: ashleyAvatar,
    name: 'Ashley',
    text: 'STOPPP THATS MY BABY',
  },
]

function RecentReactions() {
  return (
    <section className="recent-reactions" aria-labelledby="recent-reactions-title">
      <div className="section-heading">
        <p className="eyebrow">Recent reactions</p>
        <h2 id="recent-reactions-title">Tiny reviews, big feelings.</h2>
      </div>
      <div className="reaction-grid">
        {reactions.map((reaction) => (
          <article className="reaction-card" key={reaction.name}>
            <img className="reaction-avatar" src={reaction.avatar} alt="" />
            <div>
              <strong>{reaction.name}</strong>
              <p>{reaction.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default RecentReactions
