import { useState } from "react";

function UploadBox({ onFileSelect }) {

    const [fileName, setFileName] = useState("");

    const handleChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setFileName(file.name);

        onFileSelect(file);
    };

    return (

        <div className="border-2 border-dashed border-slate-600 rounded-xl p-8 text-center">

            <input type="file" accept=".pdf" onChange={handleChange} />

            <p className="mt-4 text-slate-400">
                {fileName || "Upload Resume PDF"}
            </p>
            
        </div>

    );
}

export default UploadBox;