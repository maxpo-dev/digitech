import Link from "next/link"
import { Twitter, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"
import mig1 from "@/public/images/speakers/Dr. Mohd Nor Azman - Ministry of Science, Technology an Innovation.jpeg"
import img2 from "@/public/images/speakers/Ts. Ahmad Fauzi Masrom - LEMBAGA TABUNG ANGKATAN TENTERA.jpg"
import img3 from "@/public/images/speakers/Rajesh Grover - Kanmo Group.jpg"
import img4 from "@/public/images/speakers/James Thang.png"
import img5 from "@/public/images/speakers/Angie Teh Sook Mei - Skynet Worldwide (M) Sdn Bhd.jpg"
// import img6 from "@/public/images/speakers/Heru Sutadi - Indonesian ICT Institute.jpg"
import img6 from "@/public/images/speakers/WhatsApp Image 2025-01-30 at 6.03.22 PM.jpeg"
import img7 from "@/public/images/speakers/WhatsApp Image 2025-01-30 at 6.04.49 PM.jpeg"
import img8 from "@/public/images/speakers/Aaron Lee - ANKH.jpg"
import img9 from "@/public/images/speakers/Steve Lee - SP Group.jpg"
import img10 from "@/public/images/speakers/400x400.jpg"
import img11 from "@/public/images/speakers/Alex Tan - Yinson Holdings Berhad.png"
import img12 from '@/public/images/speakers/WhatsApp Image 2025-02-07 at 3.37.49 PM.jpeg'
import img13 from '@/public/images/speakers/G Saravana-Thompson.jpg'
import img14 from '@/public/images/speakers/John Affendi.jpg'
import img15 from '@/public/images/speakers/S K Joo.jpg'
import img16 from '@/public/images/speakers/Ts.Izzat.jpg'
import img17 from '@/public/images/speakers/Ts Tengku.jpg'
import img18 from '@/public/images/speakers/Farouk Abdullah.jpg'
import img19 from '@/public/images/speakers/Artboard 7(1).jpg'
import img20 from '@/public/images/speakers/Artboard 11.jpg'
import img21 from '@/public/images/speakers/Artboard 8.jpg'
import img22 from '@/public/images/speakers/Artboard 10.jpg'
import img23 from '@/public/images/speakers/Artboard 9.jpg'
import img24 from '@/public/images/speakers/Irsyad.jpg'
import img25 from '@/public/images/speakers/hamed.jpg'
import img26 from '@/public/images/speakers/Artboard 15.jpg'
import img27 from '@/public/images/speakers/Artboard 14.jpg'



import type { StaticImageData } from "next/image"

interface Speaker {
  name: string
  jobTitle: string
  organization?: string
  imageUrl: string | StaticImageData
  bio: string
  social: {
    twitter?: string
    linkedin?: string
    facebook?: string
  }
}


const speakers: Speaker[] = [
  {
    name: "Dr. Mohd Nor Azman",
    jobTitle: "Deputy Secretary General(Technology Development)",
    organization: "Ministry of Science, Technology and Innovation (MOSTI)",
    imageUrl: mig1,
    bio: "Dr. Mohd Nor Azman is a visionary leader in technology development.",
    social: {},
  },
  {
    name: "Dato' Dr Amirudin Abdul Wahab",
    jobTitle: "CEO",
    organization: "CyberSecurity Malaysia",
    imageUrl: img19,
    bio: "DATO' Ts. DR HAJI AMIRUDIN ABDUL WAHAB is the Chief Executive Officer of CyberSecurity Malaysia, a cybersecurity specialist and technical agency that monitors e-sovereignty of the country. ",
    social: {},
  },
  {
    name: "Ts. Ahmad Fauzi Masrom",
    jobTitle: "Vice President Information Technology",
    organization: "LEMBAGA TABUNG ANGKATAN TENTERA - Armed Forces Fund Board",
    imageUrl: img2,
    bio: "Ts. Ahmad Fauzi Masrom is an expert in military technology and fund management.",
    social: {},
  },
  {
    name: "Rajesh Grover",
    jobTitle: "Group Vice President - AI, Digital & Omnichannel",
    organization: "Kanmo Group",
    imageUrl: img3,
    bio: "Rajesh Grover leads AI, Digital & Omnichannel initiatives at Kanmo Group.",
    social: {},
  },
  {
    name: "James Thang",
    jobTitle: "Group CIO",
    organization: "HELP University",
    imageUrl: img4,
    bio: "James Thang is the Group CIO at HELP University.",
    social: {},
  },
  {
    name: "Angie Teh Sook Mei",
    jobTitle: "Chief Information Officer",
    organization: "Skynet Worldwide (M) Sdn Bhd",
    imageUrl: img5,
    bio: "Angie Teh Sook Mei is the Chief Information Officer at Skynet Worldwide.",
    social: {},
  },
  {
    name: "Heru Sutadi",
    jobTitle: "Executive Director",
    organization: "Indonesia ICT Institute",
    imageUrl: img6,
    bio: "Heru Sutadi is an Executive Director at the Indonesia ICT Institute.",
    social: {},
  },
  {
    name: "Mohd Hanapi Bisri",
    jobTitle: "Head of Group ICT",
    organization: "Petra Energy",
    imageUrl: img7,
    bio: "Mohd Hanapi Bisri heads Group ICT at Petra Energy.",
    social: {},
  },
  {
    name: "Aaron Lee",
    jobTitle: "CIO",
    organization: "ANKH Group",
    imageUrl: img8,
    bio: "Aaron Lee is the CIO at ANKH Group.",
    social: {},
  },
  {
    name: "Steve Lee",
    jobTitle: "Chief Information Officer & Chief Security Officer",
    organization: "SP Group",
    imageUrl: img9,
    bio: "Steve Lee serves as the CIO and CSO at SP Group.",
    social: {},
  },
  {
    name: "Alex Ustaris",
    jobTitle: "Chief Technology Officer",
    organization: "PHINMA Education",
    imageUrl: img10,
    bio: "Alex Ustaris is the Chief Technology Officer at PHINMA Education.",
    social: {},
  },
  {
    name: "Alex Tan",
    jobTitle: "Group Chief Information Officer",
    organization: "Yinson Holdings Berhad",
    imageUrl: img11,
    bio: "Alex Tan-Yinson Holdings Berhad",
    social: {},
  },
  {
    name: "Prof Datin Lorela Chia",
    jobTitle: "President",
    organization: "Malaysia Association of Sustainable Supply Chain & Innovation(MASSCI)",
    imageUrl: img12,
    bio: "Prof Datin Lorela Chia-Malaysia Association of Sustainable Supply Chain & Innovation(MASSCI)",
    social: {},
  },
  {
    name: "G Saravanan",
    jobTitle: "Group Chief Information Officer",
    organization: "Thomson Hospital",
    imageUrl: img13,
    bio: "G Saravanan is a Group Chief Information Officer at Thomson Hospital.",
    social: {},
  },
  {
    name: "Johan Affendi",
    jobTitle: "Head of Business Technology",
    organization: "Enterprise Business Division,CelcomDigi",
    imageUrl: img14,
    bio: "Johan Affendi is a Head of Business Technology at Enterprise Business Division,CelcomDigi.",
    social: {},
  },
  {
    name: "SK Joo",
    jobTitle: "CTO",
    organization: "Senheng Electric (KL) Sdn Bhd",
    imageUrl: img15,
    bio: "SK Joo is a CTO at Senheng Electric (KL) Sdn Bhd.",
    social: {},
  },
  {
    name: "Ts. Izzat Aziz",
    jobTitle: "Chief Technology Officer",
    organization: "Permodalan Nasional Berhad",
    imageUrl: img16,
    bio: "Ts. Izzat Aziz is a Chief Technology Officer at Permodalan Nasional Berhad.",
    social: {},
  },
  {
    name: "Ts. Tengku Azrul Tengku Azhar",
    jobTitle: "Director",
    organization: "Digital Regulatory & Sustainability",
    imageUrl: img17,
    bio: "Ts. Tengku Azrul Tengku Azhar is a Director at Digital Regulatory & Sustainability.",
    social: {},
  },
  {
    name: "Farouk Abdullah",
    jobTitle: "Chief Digital Officer",
    organization: "KHIND Malaysia",
    imageUrl: img18,
    bio: "Farouk Abdullah is a Chief Digital Officer at KHIND Malaysia.",
    social: {},
  },
    {
    name: "Akshay Moradiya",
    jobTitle: "Channel and Alliance Head",
    organization: " Motadata",
    imageUrl: img20,
    bio: "Akshay Moradiya is a Channel and Alliance Head.",
    social: {},
  },
      {
    name: "Vishal Vankar",
    jobTitle: "Regional sales head",
    organization: "Motadata",
    imageUrl: img21,
    bio: "Vishal Vankar is a Regional sales head.",
    social: {},
  },
        {
    name: "Mohd Zabri Adil Bin Talib",
    jobTitle: "General Manager, Responsive Technology & Services",
    organization: "CyberSecurity Malaysia",
    imageUrl: img22,
    bio: "Mohd Zabri Adil Bin Talib is a General Manager, Responsive Technology & Services.",
    social: {},
  },
        {
    name: "Yuen Chee Lung",
    jobTitle: "CISO",
    organization: "AIA Bhd",
    imageUrl: img23,
    bio: "Yuen Chee Lung is a CISO.",
    social: {},
  },
          {
    name: "Irsyad Saidin",
    jobTitle: " Product Head & Blockchain Research Lead",
    organization: "MX Global",
    imageUrl: img24,
    bio: "Irsyad Saidin is a Product Head & Blockchain Research Lead.",
    social: {},
  },
            {
    name: "Prof. Dr. Hamed Faghiri",
    jobTitle: " Founder and CEO",
    organization: " Dorod Group Berhad",
    imageUrl: img25,
    bio: "Prof. Dr. Hamed Faghiri is a Founder and CEO.",
    social: {},
  },
              {
    name: "Budiman Bujang",
    jobTitle: "Chief Digital Officer",
    organization: "Johor Corporation",
    imageUrl: img26,
    bio: "Budiman Bujang is a Chief Digital Officer.",
    social: {},
  },
{
  name: "Hasan Ganny Bin Hanif Francis",
  jobTitle: "Executive Committee, IASA Asia Pacific,Chairman",
  organization: " Association of Enterprise Architects (Malaysia Chapter)",
  imageUrl: img27,
  bio: "Hasan Ganny Bin Hanif Francis serves on the Executive Committee of IASA Asia Pacific and is the Chairman of the Association of Enterprise Architects (Malaysia Chapter).",
  social: {},
}



 

]


function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div className="bg-blue-300  rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
      <div className="relative">
        <Image
          className="w-400 h-400 object-cover object-center"
          src={speaker.imageUrl || "/placeholder.svg"}
          alt={speaker.name}
          width={400}
          height={400}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-center p-4">
            <p className="text-lg font-semibold mb-2">{speaker.bio}</p>
            <div className="flex justify-center space-x-4">
              {speaker.social.twitter && (
                <a
                  href={speaker.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  <Twitter size={24} />
                </a>
              )}
              {speaker.social.linkedin && (
                <a
                  href={speaker.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-600"
                >
                  <Linkedin size={24} />
                </a>
              )}
              {speaker.social.facebook && (
                <a
                  href={speaker.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-800"
                >
                  <Facebook size={24} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{speaker.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-1">{speaker.jobTitle}</p>
        <p className="text-sm text-gray-600 mb-4">{speaker.organization}</p>
      </div>
    </div>
  )
}

export default function SpeakersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-blue-400 to-purple-400 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 sm:text-6xl sm:tracking-tight lg:text-7xl mb-16">
          Our Esteemed <span className="text-blue-600">Speakers</span>
        </h1>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {speakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/newsletter-signup"
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-300"
          >
            Get Notified About Speaker Updates
          </Link>
        </div>
      </div>
    </div>
  )
}

