import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { RiNextjsFill } from "react-icons/ri";
import { FaVuejs } from "react-icons/fa";


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'



function Experience() {
    return (
        <>
            <Navbar />
            <div className="wrapper">
                <h1>Experience</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2023 - present"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<RiNextjsFill />}
                    >
                        <h3 className="vertical-timeline-element-title">Penanggung Jawab Produksi</h3>
                        <h4 className="vertical-timeline-element-subtitle">Eneng Dimsum</h4>
                        <p>
                            Bertanggung jawab atas semua produksi dimsum di Eneng Dimsum
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2022 - 2023"
                        iconStyle={{ background: '#222831', color: '#fff' }}
                        icon={<FaVuejs />}
                    >
                        <h3 className="vertical-timeline-element-title">Produksi Baju</h3>
                        <h4 className="vertical-timeline-element-subtitle">HM House</h4>
                        <p>
                            Penanggung jawa produksi di HM House
                        </p>
                    </VerticalTimelineElement>
                    
                </VerticalTimeline>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Experience