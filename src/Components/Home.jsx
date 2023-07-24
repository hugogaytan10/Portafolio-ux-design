
import ecommer from '../assets/ImgProjects/ecommer.png';
import filter from '../assets//ImgProjects/filter-cards.png';
import ITSUR from '../assets//ImgProjects/ITSUR.png';
import landingpage from '../assets//ImgProjects/landing-page-nw.png';
import Mascotitas from '../assets//ImgProjects/MASCOTITAS.png';
import RAVEKH from '../assets//ImgProjects/RAVEKH.png';
import short from '../assets//ImgProjects/short-link.png';
import { Card } from './Card';

export const Home = () => {

    return (
        <div className='w-full flex flex-wrap justify-around mt-16 gap-3'>
            <Card text={"ECOMMER"} image={ecommer} />
            <Card text={"FILTER CARD"} image={filter} />
            <Card text={"SCHOOL"} image={ITSUR} />
            <Card text={"LANDING PAGE"} image={landingpage} />
            <Card text={"MASCOTIRAS"} image={Mascotitas} />
            <Card text={"RAVEKH"} image={RAVEKH} />
            <Card text={"SHORT LINK"} image={short} />

        </div>
    );
};
