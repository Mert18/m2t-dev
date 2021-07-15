import React from 'react'
import Comic from '../../components/comics/Comic'
import classes from './comics.module.css';
const comicsList = [
    {
        path: '/images/comics/turn.png',
        desc: 'Do not turn immediately',
        date: '6.30.2021'
    },
]

const Comics = () => {
    return (
        <div className={classes.comics}>

            <div className={classes.content}>
                <div className={classes.comiclist}>
                    {comicsList.map(el => {
                        return(
                            <li key={el.path}>
                                <Comic path={el.path} desc={el.desc} date={el.date} />
                            </li>
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default Comics
