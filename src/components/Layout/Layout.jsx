// import { Suspense } from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';



export const Layout = () => {
    return (
        <Container>
            <Header />
            {/* <Suspense fallback={<div>Loading...</div>}> */}
                    <Outlet />    
            {/* </Suspense> */}
            <Footer />
        </Container>
    )
}