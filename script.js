// Mengatur pemutaran audio saat tombol diklik
document.getElementById("floatingButton").addEventListener("click", () => {
    const audio = document.getElementById("backgroundAudio");
    audio.play().catch(error => {
        console.log("Tidak dapat memutar audio:", error);
    });
});
