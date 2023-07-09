// eslint-disable-next-line no-unused-vars
import React from 'react';
import TopBoard from './TopBoard';
import Banner from './Banner';
import HomeNav from './HomeNav';
import Message from './Message';

const Home = () => {

    return (
        <div>
            <TopBoard></TopBoard>
            <HomeNav></HomeNav>
            <Banner></Banner>
            <Message></Message>

        </div>
    );
};

export default Home;