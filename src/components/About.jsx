import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Saya adalah pribadi yang mencintai dunia seni, terutama teater dan puisi. Bermain teater bukan hanya hobi bagi saya, tetapi juga wadah untuk belajar memahami emosi, membangun kepekaan sosial, dan bekerja sama dalam tim. Lewat panggung, saya belajar menjadi pendengar yang baik, memperhatikan detail, dan berani tampil di depan banyak orang—keterampilan yang saya yakini sangat berguna di berbagai aspek kehidupan.
 </p>
                <p>Selain itu, saya juga gemar menulis puisi. Bagi saya, menulis adalah cara untuk meresapi momen-momen kecil yang sering terlewatkan, mengolah perasaan menjadi kata, dan menyampaikan gagasan dengan cara yang indah. Puisi memberi ruang bagi saya untuk merefleksikan pengalaman, sekaligus melatih kedisiplinan dalam menyusun diksi dan makna.
</p>
<p>Saya percaya bahwa kreativitas bukan hanya milik seniman, tapi bekal berharga dalam menyelesaikan masalah, berpikir terbuka, dan berkomunikasi secara autentik. Dengan latar belakang ini, saya terbiasa menghadapi tantangan dengan cara yang unik dan terbuka terhadap berbagai perspektif baru</p>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><FaRust /><RiTailwindCssFill />
                    <FaLaravel /><DiCodeigniter /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About