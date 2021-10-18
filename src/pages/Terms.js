import React from 'react';
import VideoTwo from '../elements/video/VideoTwo';
import SEO from "../common/SEO";
import HeaderMint from '../common/header/HeaderMint';
import FooterThree from '../common/footer/FooterThree';
import Copyright from '../common/footer/Copyright';
import ServiceThree from '../elements/service/ServiceThree';
import SectionTitle from "../elements/sectionTitle/SectionTitle";
import Separator from "../elements/separator/Separator";
import AboutFour from '../elements/about/AboutFour';
import SlipThree from '../elements/split/SlipThree';
import BrandThree from '../elements/brand/BrandThree';
import TeamThree from '../elements/team/TeamThree';
import PricingTwo from '../elements/pricing/PricingTwo';
import AboutTwo from "../elements/about/AboutTwo";
import TermsOne from "../elements/terms/TermsOne";
import AboutThree from '../elements/about/AboutThree';
import CalltoActionFive from "../elements/calltoaction/CalltoActionFive";
import {Link} from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";



const EventConference = () => {
    return (
        <>
            <SEO title="Bubbly Booties" />
            <main className="page-wrapper">
                <HeaderMint btnStyle="btn-small" HeaderSTyle="header-default sticky" />
                <TermsOne />
                <Separator />
                <FooterThree />
            </main>

        </>
    )
}

export default EventConference;
