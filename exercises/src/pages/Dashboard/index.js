import React from 'react';

import { Header, Footer } from "../../components/Layouts";
import Exercises from "../../components/Exercises";

export default function Dashboard() {
    return (
        <>
            <Header />
            <Exercises />
            <Footer />
        </>
    );
}
