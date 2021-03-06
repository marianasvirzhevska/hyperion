﻿import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Alex.module.scss';
import video from '../../../assets/video/alex.mov'

function Alex(props) {
    const playVideo = ({target}) => {
        target.play();
    };

    const pauseVideo = ({target}) => {
        target.currentTime = 0;
        target.pause();
    };

    const videoEnded = ({target}) => {
        target.currentTime = 0;
    };

    return (
        <>
            <div className={styles.main}>
                <div className={`container ${styles.mainWrapper}`}>
                    <Link to="/about" className="back-button"><span></span>Back</Link>
                    <div className={`${styles.character} ${styles.slideInRight} ${styles.animated}`}>
                        <div className={styles.characterWrapper}>
                            <video className={styles.characterVideo} 
                                onMouseEnter={playVideo} 
                                onMouseLeave={pauseVideo} 
                                onEnded={videoEnded} muted="muted">
                                    <source src={video} type="video/mp4"/>
                                    Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className={styles.characterWrapper}>
                            <h3 className={`${styles.flicker} ${styles.characterName}`}>{props.member.character}</h3>
                            <p className={styles.characterOccupetion}>{props.member.role}</p>
                            <p className={styles.characterRealName}>{props.member.name} {props.member.surname}</p>
                            <ul className={styles.characterAppearance}>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Height:</p>
                                    <p className={styles.characterDataValue}>{props.details.height} cm</p>
                                </li>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Weight:</p>
                                    <p className={styles.characterDataValue}>{props.details.weight} lbs</p>
                                </li>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Hair color:</p>
                                    <p className={styles.characterDataValue}>{props.details.hair}</p>
                                </li>
                                <li className={styles.characterAppearanceItem}>
                                    <p className={styles.characterDataProp}>Eye color:</p>
                                    <p className={styles.characterDataValue}>{props.details.eyes}</p>
                                </li>
                            </ul>
                            <p className={styles.characterDataProp}>Other identifying data:</p>
                            <p className={styles.characterDataValue}>{props.details.other}</p>
                            <p className={styles.characterDataProp}>Identification NO.:</p>
                            <p className={styles.characterDataValue}>{props.details.indent}</p>
                            <p className={styles.characterDataProp}>Related links:</p>
                            <p className={styles.characterDataValue}>
                                <a href={`${props.details.github}`} target="_blank" rel="noopener noreferrer" className={styles.characterLink}>GitHub</a>
                                <a href={`${props.details.github}`} target="_blank" rel="noopener noreferrer" className={styles.characterLink}>LinkedIn</a>
                            </p>
                        </div>
                    </div>
                    
                    <div className={`${styles.characterMainText} ${styles.slideInLeft} ${styles.animated}`}>
                        <p className={styles.characterText}>Dr. Alex Callisto obtained his
                            Ph.D. in the Department of Physics at the Bristol University.
                            Alex has served as a lead scientist for 25 years in the physics
                            and astrophysics sciences. However, what made Alex so interesting
                            as a scientist was his ability to keep his mind open to
                            possibilities that were in direct conflict with conventional
                            science. Dr. Alex conducted extensive and controversial experiments
                            in the fringe sciences, including invisibility via electro-magnetic
                            energy, creating human-robot hybrids and quantum teleportation.
                            Of course he is also able to use his great knowledge of science
                            to remedy the situation. Good problem solving skills are one
                            of the key aspects of a good scientist after all...</p>
                        <p className={styles.characterText}>Core skills:</p>
                        <p className={styles.characterText}>Primary: act with integrity.
                            Alex has a mind that can take a jumbled set of facts, techniques
                            and equipment, and condense that into a working analytical method.</p>
                        <p className={styles.characterText}>-- never fails, just finds ways that won’t work</p>
                        <p className={styles.characterText}>-- familiar with any kind of science</p>
                        <p className={styles.characterText}>-- 25 years in science made him pretty cold-blooded</p>
                        <p className={styles.characterText}>-- hates when kids messing with his inventions</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Alex;