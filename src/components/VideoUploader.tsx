

export default function VideoUploader() {

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Här kan du lägga till logik för att hantera uppladdningen av videofilen
        console.log("Uppladdad fil:", file);
    }

  return (
    <div>
        <div className="w-full max-w-2xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
            <h2 className="text-2xl text-cyan-700 font-bold mb-4 text-center">
                Ladda upp en video
            </h2>
            <p className="text-gray-600 mb-8 text-center">
                Välj en videofil från din dator för att ladda upp.
            </p>

            {/* Uppladdningsknappen */}
            <label  htmlFor="video-upload" className="cursor-pointer w-full flex flex-col items-center justify-center p-6 border-2 border-dashed border-blue-400 rounded-xl hover:bg-blue-50 transition">
                <span className="text-blue-600 font-semibold">
                    Klicka här för att välja en videofil
                </span>
                <input 
                    type="file" 
                    accept="video/*"
                    className="hidden"
                    id="video-upload"
                    onChange={handleVideoUpload}
                />

            </label>
        </div>

    </div>
  )};


   