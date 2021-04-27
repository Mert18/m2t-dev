
import Header from "./Header.js";

export default function Default(props) {
    return (
        <div>
            <Header />
            <main>
                {props.children}
            </main>
        </div>
    );
}