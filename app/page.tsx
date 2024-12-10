export default function Home() {
  return (
    <div className="fixed inset-0">
      <object
        data="/William_Giammona_Resume.pdf"
        type="application/pdf"
        className="w-full h-full"
      >
        <p className="p-4">
          Your browser does not support PDFs.{" "}
          <a
            href="/William_Giammona_Resume.pdf"
            className="text-blue-600 hover:text-blue-800 underline"
            download
          >
            Download the PDF
          </a>
        </p>
      </object>
    </div>
  );
}
