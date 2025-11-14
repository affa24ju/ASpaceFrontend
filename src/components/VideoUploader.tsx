import { useState } from "react";


export default function VideoUploader() {

    // Sparar URL för den uppladdade videon
    const [videoURL, setVideoURL] = useState<string | null>(null);

    const handleVideoUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        // Här kan du lägga till logik för att hantera uppladdningen av videofilen
        console.log("Uppladdad fil:", file);

        // Skapar en temporär URL av den uppladdade videon, så att vi kan spela upp den direkt
        const url = URL.createObjectURL(file);
        setVideoURL(url);
    };

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
            {/* Videospelare för att visa den uppladdade videon */}
            {videoURL && (
                <div className="mt-8">
                    <h3 className="text-lg text-cyan-700 font-semibold mb-4 text-center">
                        Förhandsgranskning av uppladdad video
                    </h3>
                    <video  src={videoURL} controls className="w-full rounded-lg shadow" />
                </div>
            )}
        </div>

    </div>
  )};   