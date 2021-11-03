import React from "react";
import '@styles/components/layout/Layout.module.scss';
import Header from '@components/layout/header'
import Footer from "@components/layout/footer";
import { chakra } from "@chakra-ui/react";

function Layout({children}: any) {
    return (
        <>
            <Header/>
            <chakra.main maxH="100vh" overflowX="hidden">{children}</chakra.main>
            <Footer/>
        </>
    );
}

export default Layout;
