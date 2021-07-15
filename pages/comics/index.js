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
        <section className={classes.comics}>
            <main className={classes.content}>
                <section className={classes.comiclist}>
                    {comicsList.map(el => {
                        return(
                            <li key={el.path}>
                                <Comic path={el.path} desc={el.desc} date={el.date} />
                            </li>
                        )
                    })}
                </section>
            </main>
            
        </section>
    )
}

export default Comics
