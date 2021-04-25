
import Header from "./Header.js";

export default function Layout(props) {
    return (
        <div>
            <Header />
            
            <main>
                {props.children}
            </main>
        </div>
    );
}