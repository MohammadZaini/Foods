import axios from "axios";
export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer gKTuWgUnY4KJAOA_zF6r1TtnCkerf4JQxZ3oLy0tis0PhPHPvvlPKg7RuWC1cxauz_fGcOftaaVIk4F9GxT6HC-XVaKQ3ZI8xp7hb95WRj5_l1m4eSoxRq9e26_OY3Yx'
    } 
});