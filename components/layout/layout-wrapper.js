import DefaultLayout from './default';
import HomeLayout from './home';

const layouts = {
    defalt: DefaultLayout,
    home: HomeLayout
}

const LayoutWrapper = (props) => {

    const Layout = layouts[props.children.type.layout];

    if(Layout != null) {
        return <Layout {...props}>{props.children}</Layout>
    }
    return <DefaultLayout {...props}>{props.children}</DefaultLayout>
};

export default LayoutWrapper;