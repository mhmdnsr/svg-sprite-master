import '@styles/globals.scss';
import type {AppProps} from 'next/app';
import {ChakraProvider, extendTheme, withDefaultColorScheme} from "@chakra-ui/react";
import Layout from "@components/layout/layout";

function MyApp({Component, pageProps}: AppProps) {

    const theme = extendTheme({
        colors: {
            brand: {
                50: '#ffe6e3',
                100: '#febbb5',
                200: '#f88f87',
                300: '#f46358',
                400: '#ef3829',
                500: '#d61f10',
                600: '#a7170b',
                700: '#780e07',
                800: '#4a0702',
                900: '#1f0000',
            },
            secondaryBrand: {
                50: '#edf0fe',
                100: '#cdd2e7',
                200: '#adb4d2',
                300: '#8c96bf',
                400: '#6c77ab',
                500: '#535e92',
                600: '#404972',
                700: '#2d3452',
                800: '#1a1f33',
                900: '#070a16',
            }
        },
    }, withDefaultColorScheme({
        colorScheme: "brand",
        components: ["Button"],
    }),)


    return (
        <ChakraProvider theme={theme}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}

export default MyApp
