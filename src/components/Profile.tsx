import styles from '../styles/components/Profile.module.css';

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/rnatu.png" alt="sua foto de perfil"/>

            <div>
                <strong>Renato Xavier</strong>
                <p>Level 1</p>
            </div>
        </div>


    )
}