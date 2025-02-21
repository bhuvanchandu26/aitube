let sidemenu = document.getElementById("#sidemenu");
let bars = document.getElementById("#bar");
        function closemenu(){
            sidemenu.style.left = "-150px";
            bars.style.background = "transparent";
        }
        function openmenu(){
            sidemenu.style.left = "0";
        }


const apiKey = "YOUR_RUNWAY_API_KEY";  // Replace with your API key
const endpoint = "https://api.runwayml.com/v1/video-generation";

async function generateVideo(prompt) {
    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({ prompt })  // Example: "A futuristic city with flying cars"
    });

    const data = await response.json();
    console.log("Generated Video URL:", data.video_url);
    document.getElementById("videoOutput").src = data.video_url; // Display in <video> tag
}

generateVideo("A futuristic cyberpunk city at night");
