import { useState } from "react";
import Layout from "../components/layout/Layout";
import api from "../services/api";
import { Upload, Send, CheckCircle2 } from "lucide-react";

function CareerCoach() {

  const [file, setFile] = useState(null);

  const [sessionId, setSessionId] = useState("");

  const [loading, setLoading] = useState(false);

  const [question, setQuestion] = useState("");

  const [messages, setMessages] = useState([]);

  const startChat = async () => {

    if (!file) {

      alert("Please upload your resume.");

      return;
    }

    const formData = new FormData();

    formData.append("file", file);

    try {

      setLoading(true);

      const response = await api.post(
        "/chat/start",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSessionId(response.data.session_id);

      setMessages([
        {
          sender: "ai",
          text: "Hi 👋 I'm your AI Career Coach. Ask me anything about your resume, interviews, projects, or career."
        }
      ]);

    }

    catch (err) {

      console.log(err);

      alert("Unable to start chat.");

    }

    finally {

      setLoading(false);

    }

  };

  const sendMessage = async () => {

    if (!question.trim()) return;

    const userMessage = {
      sender: "user",
      text: question,
    };

    setMessages(prev => [...prev, userMessage]);

    const formData = new FormData();

    formData.append("session_id", sessionId);

    formData.append("question", question);

    setQuestion("");

    try {

      const response = await api.post(
        "/chat/message",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: response.data.answer,
        },
      ]);

    }

    catch {

      setMessages(prev => [
        ...prev,
        {
          sender: "ai",
          text: "Something went wrong.",
        },
      ]);

    }

  };

  return (

    <Layout>

      <div className="mb-8">

        <h1 className="text-4xl font-bold text-gray-800">

          Career Coach

        </h1>

        <p className="text-gray-500 mt-2">

          Ask AI anything about your resume, career and placements.

        </p>

      </div>

     {/* Upload */}

{!sessionId && (

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-5 w-[430px]">

<h2 className="font-semibold mb-3">

Upload Resume

</h2>

<label className="border-2 border-dashed border-green-300 rounded-xl h-28 flex flex-col justify-center items-center cursor-pointer hover:bg-green-50 transition">

<Upload
size={28}
className="text-green-600"
/>

<p className="mt-2 text-sm">

{file ? file.name : "Choose Resume"}

</p>

<input
hidden
type="file"
accept=".pdf"
onChange={(e)=>setFile(e.target.files[0])}
/>

</label>

<button

onClick={startChat}

className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"

>

{loading ? "Starting..." : "Start Chat"}

</button>

</div>

)}

{sessionId && (

<>

{/* Small Badge */}

<div className="flex justify-end mb-4">

<div className="flex items-center gap-2 bg-green-100 border border-green-300 rounded-full px-4 py-2">

<CheckCircle2
size={18}
className="text-green-600"
/>

<span className="text-sm font-medium">

Resume Uploaded

</span>

</div>

</div>

{/* Chat */}

<div className="bg-white rounded-2xl border border-gray-200 shadow-sm flex flex-col h-[72vh]">

{/* Messages */}

<div className="flex-1 overflow-y-auto p-6 space-y-5">

{messages.map((msg,index)=>(

<div

key={index}

className={`flex ${
msg.sender==="user"
? "justify-end"
: "justify-start"
}`}

>

<div

className={`max-w-[70%] rounded-2xl px-5 py-3 whitespace-pre-wrap leading-7 ${
msg.sender==="user"
? "bg-green-600 text-white"
: "bg-gray-100 text-gray-800"
}`}

>

{msg.text}

</div>

</div>

))}

</div>

{/* Input */}

<div className="border-t bg-white p-4 flex gap-3 sticky bottom-0">

<input

type="text"

value={question}

onChange={(e)=>setQuestion(e.target.value)}

onKeyDown={(e)=>{

if(e.key==="Enter"){

sendMessage();

}

}}

placeholder="Ask anything about your resume..."

className="flex-1 border rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"

/>

<button

onClick={sendMessage}

className="bg-green-600 hover:bg-green-700 text-white rounded-xl px-6 flex items-center justify-center"

>

<Send size={20}/>

</button>

</div>

</div>

</>


      )}

    </Layout>

  );

}

export default CareerCoach;