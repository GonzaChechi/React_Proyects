import { useState } from 'react';
import './twitterFollowCard.css'

export default function TwitterFollowCard({ userName = "unknown", name, imgSrc, initialIsFollowing }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-followButton is-following' : 'tw-followCard-followButton';
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-tarjet'>
                <img className='tw-followCard-avatar' src={imgSrc} alt={`Avatar de ${userName}`} />
                <div className='tw-followCard-name'>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span>
                    <span className='tw-followCard-stopfollow'>Dejar de seguir</span>
                </button>

            </aside>
        </article>
    )
}


