import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/d4vzz.png" alt="Davi" />
      <div>
        <strong>Davi</strong>
        <p>
          <img src="icons/level.svg" alt="nível" />
              Nível {level}
        </p>
      </div>
    </div>
  );
}
