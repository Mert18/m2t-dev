
import Header from "./Header.js";
import classes from './layout.module.css'

export default function Default(props) {
    return (
        <div className={classes.lay}>
            <div className={classes.layhead}>
                <Header />
            </div>
            <main className={classes.laymain}>
                {props.children}
            </main>
        </div>
    );
}