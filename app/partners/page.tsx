import PartnershipEnquiryForm from "@/app/partners/PartnershipEnquiryForm";
import OurMediaPartners from "./mediaPartners";
import GovSupportingPartner from "./supportingPartner";
import AssociationPartner from "./associationPartner";
import NetworkingPartner from "./networkingPartner";

export default function PartnersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-400 py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Our Partners */}
        <section data-aos="fade-up">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-md">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-10">Our Partners</h2>
            <div className="grid grid-cols-1 gap-6 sm:gap-10">
              {/* Government Supporting Partner */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center min-h-[360px]">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Government Supporting Partner</h3>
                <GovSupportingPartner />
              </div>

              {/* Networking Partner */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center min-h-[360px]">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Networking Partner</h3>
                <NetworkingPartner />
              </div>

              {/* Association Partner */}
              <div className="bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center min-h-[360px]">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Association Partner</h3>
                <AssociationPartner />
              </div>
            </div>
          </div>
        </section>

        {/* Media Partners */}
        <section data-aos="fade-up">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-md">
            <OurMediaPartners />
          </div>
        </section>

        {/* Why Partner With Us */}
        <section data-aos="fade-up">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Why Partner With Us?</h2>
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

        {/* Become a Partner Form */}
        <section data-aos="fade-up">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-md">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6">Become a Partner</h3>
            <PartnershipEnquiryForm />
          </div>
        </section>

        {/* Key Technologies */}
        <section data-aos="fade-up">
          <div className="bg-white rounded-3xl border border-gray-200 p-6 sm:p-10 shadow-md">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Key Technologies Showcased</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
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