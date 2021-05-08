
import Header from "./Header.js";
import classes from './layout.module.css'
export default function Default(props) {
    return (
        <div className={classes.lay}>
            <header className={classes.layhead}>
                <Header />
            </header>
            <main className={classes.laymain}>
                {props.children}
            </main>
        </div>
    );
}