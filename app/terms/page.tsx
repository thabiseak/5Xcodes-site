import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - 5Xcodes',
  description: 'Read our terms of service for using 5Xcodes software development services. Understand your rights and responsibilities.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <main className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                By accessing and using 5Xcodes services, you accept and agree to be bound by the terms 
                and provision of this agreement. If you do not agree to abide by the above, please do 
                not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. Use License
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Permission is granted to temporarily download one copy of the materials on 5Xcodes website 
                for personal, non-commercial transitory viewing only. This is the grant of a license, 
                not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. Service Description
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                5Xcodes provides software development services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Custom software development</li>
                <li>Cloud solutions and migration</li>
                <li>AI integration and machine learning</li>
                <li>Mobile application development</li>
                <li>Web application development</li>
                <li>Consulting and technical advisory services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. Payment Terms
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Payment terms will be specified in individual project agreements. Generally, we require 
                a deposit before commencing work, with milestone payments throughout the project duration. 
                All prices are in USD unless otherwise specified.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. Intellectual Property
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Upon full payment, all custom-developed software and deliverables become the property 
                of the client. 5Xcodes retains rights to any pre-existing intellectual property, 
                frameworks, or methodologies used in the development process.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. Confidentiality
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Both parties agree to maintain the confidentiality of all proprietary information 
                shared during the course of the engagement. This includes business strategies, 
                technical specifications, and any other sensitive information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-700 leading-relaxed">
                In no event shall 5Xcodes be liable for any indirect, incidental, special, consequential, 
                or punitive damages, including without limitation, loss of profits, data, use, goodwill, 
                or other intangible losses, resulting from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. Termination
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Either party may terminate this agreement with 30 days written notice. Upon termination, 
                all outstanding payments become immediately due, and work in progress will be delivered 
                as-is upon payment of outstanding amounts.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. Governing Law
              </h2>
              <p className="text-gray-700 leading-relaxed">
                This agreement shall be governed by and construed in accordance with the laws of the 
                State of California, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. Contact Information
              </h2>
              <p className="text-gray-700 leading-relaxed">
                If you have any questions about these terms, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@5xcodes.com<br />
                  <strong>Phone:</strong> +1 (555) 123-4567<br />
                  <strong>Address:</strong> 123 Innovation Street, San Francisco, CA 94105
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}