import React from 'react'
import ByYou from './ByYou';
import ForYou from './ForYou';
import Favourites from './Favourites';
import { useState, useEffect, useRef } from 'react';

function MyProfileTestimonials() {
    var temp = <ForYou />
    const [dis, setdis] = useState(0);
    switch (dis) {
        case 0: temp = <ForYou />; break;
        case 1: temp = <ByYou />; break;
        case 2: temp = <Favourites />; break;
    }
    const u1 = useRef()
    const u2 = useRef()
    const u3 = useRef()
    useEffect(() => {
        u1.current.className = ''
        u2.current.className = ''
        u3.current.className = ''
        switch (dis) {
            case 0: u1.current.className = 'MyProfileR_un'; break;
            case 1: u2.current.className = 'MyProfileR_un'; break;
            case 2: u3.current.className = 'MyProfileR_un'; break;
        }
        myFunction();
    }
        , [dis])
    function myFunction() {
        var x = document.getElementById("myLinks");
        if (x.style.display === "block") {
            x.style.display = "none";
        } else {
            x.style.display = "block";
        }
    }
    return (
        <div className='MyProfileR_a'>
            <div class="topnav">
                <a href="#home" class="active">Testimonials</a>
                <div id="myLinks">
                    <a onClick={() => { if (dis != 0) setdis(0) }} ref={u1}>For You</a>
                    <a onClick={() => { if (dis != 1) setdis(1) }} ref={u2}>By You</a>
                    <a onClick={() => { if (dis != 2) setdis(2) }} ref={u3}>Favourite</a>
                </div>
                <a href="javascript:void(0);" class="icon" onClick={() => myFunction()}>
                    <i class="fa fa-bars"></i>
                </a>
            </div>
            <div className='MyProfileR_t_h'>
                <div onClick={() => { if (dis != 0) setdis(0) }} ref={u1}>For You</div>
                <div onClick={() => { if (dis != 1) setdis(1) }} ref={u2}>By You</div>
                <div onClick={() => { if (dis != 2) setdis(2) }} ref={u3}>Favourite</div>
            </div>
            <div className='MyProfileR_Search'>
                <input className='ProfileR_Search_input' placeholder='Search Testimonial' />
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='ProfileR_Search_input_i'><path d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.9996 13.9996L11.0996 11.0996" stroke="#64748B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </div>
            {temp}
        </div>
    )
}

export default MyProfileTestimonials