import PartnershipEnquiryForm from "@/app/partners/PartnershipEnquiryForm";
import OurMediaPartners from "./mediaPartners";
import GovSupportingPartner from "./supportingPartner";
import AssociationPartner from "./associationPartner";
import NetworkingPartner from "./networkingPartner";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 py-12 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-24">

        {/* Our Partners Section */}
       {/* Our Partners Section */}
<section>
  <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 p-10 shadow-sm">
    <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Partners</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

      {/* Networking Partner Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center min-h-[300px]">
        <div className="text-center w-full">
          {/* <h3 className="text-xl font-semibold text-gray-700 mb-4">Networking Partner</h3> */}
          <NetworkingPartner />
        </div>
      </div>

      {/* Association Partner Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center min-h-[300px]">
        <div className="text-center w-full">
          {/* <h3 className="text-xl font-semibold text-gray-700 mb-4">Association Partner</h3> */}
          <AssociationPartner />
        </div>
      </div>

      {/* Government Supporting Partner Card */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex items-center justify-center min-h-[300px]">
        <div className="text-center w-full">
          {/* <h3 className="text-xl font-semibold text-gray-700 mb-4">Government Supporting Partner</h3> */}
          <GovSupportingPartner />
        </div>
      </div>

    </div>
  </div>
</section>


<section>
  <div className="max-w-7xl mx-auto bg-white rounded-lg border border-gray-200 p-10 shadow-sm">
    <OurMediaPartners />
  </div>
</section>


        {/* Why Partner With Us Section */}
        <section>
          <div className="bg-white rounded-lg border border-gray-200 p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Partner With Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-3 text-base">
              <li>Showcase your brand to a global audience of tech leaders and innovators.</li>
              <li>Connect with potential clients and partners in the digital technology sector.</li>
              <li>Gain valuable insights into emerging trends and market demands.</li>
              <li>Demonstrate thought leadership through speaking opportunities.</li>
              <li>Access exclusive networking events with industry decision-makers.</li>
              <li>Benefit from extensive media coverage and promotional opportunities.</li>
              <li>Contribute to shaping the future of digital technology.</li>
              <li>Engage with a diverse audience of professionals, from startups to enterprises.</li>
              <li>Leverage our platform to launch new products or services.</li>
              <li>Align your brand with cutting-edge innovation and digital transformation.</li>
            </ul>
          </div>
        </section>



        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 h-half">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Become a Partner</h3>
          <PartnershipEnquiryForm />
          
        </div>

        {/* Key Technologies Showcased Section */}
        <section>
          <div className="bg-white rounded-lg border border-gray-200 p-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Technologies Showcased</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Enterprise Solutions",
                  items: ["Cloud Computing", "Digital Transformation", "ERP Systems", "Business Intelligence"],
                },
                {
                  title: "Data Management",
                  items: ["Big Data Analytics", "Data Governance", "Data Visualization", "Data Integration"],
                },
                {
                  title: "Cybersecurity",
                  items: ["Network Security", "Cloud Security", "Identity and Access Management", "Threat Intelligence"],
                },
                {
                  title: "AI & Big Data",
                  items: ["Machine Learning", "Natural Language Processing", "Predictive Analytics", "Computer Vision"],
                },
                {
                  title: "Hardware, Satellite & Robotics",
                  items: ["IoT Devices", "Satellite Communications", "Autonomous Systems", "Robotics and Automation"],
                },
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">{tech.title}</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2 text-sm">
                    {tech.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
