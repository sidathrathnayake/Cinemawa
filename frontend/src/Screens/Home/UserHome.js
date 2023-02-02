import React, { Component } from 'react'

// import components
import UserNavigation from '../Navigation/UserNavigation';
import SlideshowHome from '../Slideshow/SlideshowHome';
import TrendingSlideshow from '../Trending/TrendingSlideshow';

export default class UserHome extends Component {
    render() {
        return (
            <div>
                <UserNavigation></UserNavigation>
                <SlideshowHome></SlideshowHome>
                <TrendingSlideshow></TrendingSlideshow>
            </div>
        )
    }
}
