import Link from "next/link";

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-24 pb-12 px-6 bg-gray-50 text-gray-800">
            <div className="max-w-3xl mx-auto bg-white p-12 rounded-3xl shadow-sm border border-gray-100">
                <h1 className="text-3xl font-bold mb-6 text-[#73B744] font-display">Terms of Service</h1>
                <p className="mb-4 text-gray-500 text-sm font-semibold uppercase tracking-wider">Last Updated: {new Date().toLocaleDateString()}</p>

                <p className="mb-4 leading-relaxed">
                    Welcome to 180 Degrees Consulting UoBD. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-100 pb-2">1. Acceptance of Terms</h2>
                <p className="mb-4 leading-relaxed">
                    By accessing this website, you accept these Terms of Service in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use this website.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-100 pb-2">2. Use of Website</h2>
                <p className="mb-4 leading-relaxed">
                    You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.
                </p>

                <h2 className="text-xl font-bold mt-8 mb-4 text-gray-900 border-b border-gray-100 pb-2">3. Intellectual Property</h2>
                <p className="mb-4 leading-relaxed">
                    Unless otherwise stated, we or our licensors own the intellectual property rights in the website and material on the website. All these intellectual property rights are reserved.
                </p>

                <div className="mt-12 flex justify-between items-center text-sm text-gray-500 pt-6 border-t border-gray-100">
                    <p>
                        Contact us at <a href="mailto:dubai@180dc.org" className="text-[#73B744] hover:underline font-bold">dubai@180dc.org</a>.
                    </p>
                    <Link href="/" className="text-gray-900 font-bold hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
