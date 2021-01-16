import { useContext } from 'react';
import { PlayerContext } from '../../App';
import { ReleaseInterface } from '../../interfaces';
import './Release.scss';

export interface ReleaseProps {
  release: ReleaseInterface;
  isPulledRelease?: boolean;
  deleteTrack?: (releaseId: string) => void | null;
}

const Release: React.FC<ReleaseProps> = ({ release, isPulledRelease, deleteTrack }) => {
  const { imageUrl, tracks, artist, title } = release;

  const { setNowPlaying } = useContext(PlayerContext);

  const newNowPlaying = {
    current: release,
    next: '',
  };

  return (
    <li className={isPulledRelease ? 'release pulled-release' : 'release'}>
      <div className='release-infos' onClick={() => setNowPlaying(newNowPlaying)}>
        <figure>
          <img src={imageUrl} alt={title} />
        </figure>
        <aside>
          <h2 className='is-bold'>{title}</h2>
          <h3>
            By:
            <span className='is-bold'> {artist}</span>
          </h3>
          <small>{tracks.length} tracks</small>
        </aside>
      </div>
      {deleteTrack && (
        <div className='release-controls'>
          <button className='btn is-dark'>Buy</button>
          <button className='btn is-warning' onClick={() => deleteTrack(release._id)}>
            Delete
          </button>
        </div>
      )}
    </li>
  );
};

export default Release;
