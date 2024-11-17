function Help() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Help Center</h1>
      <p className="text-gray-700">
        Need assistance? Browse through our support articles or contact our team for help.
      </p>
      <ul className="list-disc list-inside mt-4">
        <li>How to use our service</li>
        <li>Account issues</li>
        <li>Payment and billing</li>
        {/* Add links to support topics */}
      </ul>
    </div>
  )
}

export default Help
