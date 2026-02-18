export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-gray-50 text-gray-800">
            <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-bold mb-6 text-[#73B744] font-display">Privacy Policy</h1>
                <p className="mb-4 text-gray-500 text-sm font-semibold uppercase tracking-wider">Effective Date: {new Date().toLocaleDateString()}</p>
                <p className="mb-4 leading-relaxed">
                    180 Degrees Consulting UoBD ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-100 pb-2">1. Information We Collect</h2>
                <p className="mb-4 leading-relaxed">
                    We may collect personal information such as your name, email address, student ID, and other details when you apply to join or contact us. This information is collected voluntarily and with your consent.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-100 pb-2">2. How We Use Your Information</h2>
                <p className="mb-4 leading-relaxed">
                    We use your information to:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 mb-4 text-gray-700">
                    <li>Process your application to join our branch.</li>
                    <li>Communicate with you regarding our services and projects.</li>
                    <li>Improve our website and user experience.</li>
                </ul>

                <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-100 pb-2">3. Data Security</h2>
                <p className="mb-4 leading-relaxed">
                    We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <p className="mt-12 text-sm text-gray-500 pt-6 border-t border-gray-100">
                    For any questions, please contact us at <a href="mailto:dubai@180dc.org" className="text-[#73B744] hover:underline font-bold">dubai@180dc.org</a>.
                </p>
            </div>
        </div>
    );
}
