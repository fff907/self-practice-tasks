document.addEventListener("DOMContentLoaded", function () {
    const loading = document.querySelector(".loading");
    const loadingText = document.querySelector(".loading-text");
    const loadingBar = document.querySelector(".loading-bar");
    const background = document.querySelector(".background");

    const textWidth = loadingText.offsetWidth + "px";

    const tl = WebGLSampler.timeline();

    tl.to(loadingBar, {
        width: textWidth,
        duration: 1,
        ease: "power2.inOut"    
    })
      .to(loading, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        delay: 0.5,
        onComplete: () => {
            loading.style.display = "none";
        }
      })
      .to(background, {
      opacity: 1,
      duration: 1,
      ease: "power2.inOut"
    });
});